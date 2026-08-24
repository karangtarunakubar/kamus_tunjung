const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dictionary_db',
  password: 'password',
  port: 5432,
});

// 1. IMPORT DATASET
async function importDataset(jsonData) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    for (const item of jsonData) {
      // Upsert entry utama (Indonesian)
      const entryRes = await client.query(
        `INSERT INTO dictionary_entries (id, indonesian_word)
         VALUES ($1, $2)
         ON CONFLICT (id) DO UPDATE SET indonesian_word = EXCLUDED.indonesian_word
         RETURNING id;`,
        [item.id, item.indonesian]
      );

      const entryId = entryRes.rows[0].id;

      // Upsert translation untuk setiap bahasa daerah
      for (const [langCode, val] of Object.entries(item.translations)) {
        await client.query(
          `INSERT INTO translations (entry_id, language_code, translated_word, audio_url)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT (entry_id, language_code) 
           DO UPDATE SET translated_word = EXCLUDED.translated_word, audio_url = EXCLUDED.audio_url;`,
          [entryId, langCode, val.word, val.audio]
        );
      }
    }

    await client.query('COMMIT');
    console.log('Import dataset berhasil!');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal import dataset:', err);
  } finally {
    client.release();
  }
}

// 2. EXPORT DATASET
async function exportDataset() {
  try {
    const query = `
      SELECT 
        e.id,
        e.indonesian_word AS indonesian,
        json_object_agg(
          t.language_code, 
          json_build_object('word', t.translated_word, 'audio', t.audio_url)
        ) AS translations
      FROM dictionary_entries e
      JOIN translations t ON e.id = t.entry_id
      GROUP BY e.id, e.indonesian_word
      ORDER BY e.id ASC;
    `;

    const res = await pool.query(query);
    const jsonResult = JSON.stringify(res.rows, null, 2);
    
    // Simpan ke file JSON
    fs.writeFileSync('exported_dataset.json', jsonResult);
    console.log('Export dataset berhasil! Disimpan ke exported_dataset.json');
    return res.rows;
  } catch (err) {
    console.error('Gagal export dataset:', err);
  }
}
