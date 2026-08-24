// translatorController.js - Engine Penerjemah Multi-Bahasa Daerah
const dictionaryDB = [
  {
    id: "001",
    indonesia: "Apa Kabar",
    tunjung: "Nyama Ritaq",
    bahau: "Selamat Tawai",
    benuaq: "Nemu Tawai",
    kutai: "Halaman",
    kenyah: "Nau Itaq",
audio: { tunjung: "/audio/tnj-001.mp3", kutai: "/audio/kt-001.mp3" }
  },
  {
    id: "002",
    indonesia: "Makan",
    tunjung: "Kuman",
    bahau: "Kuman",
    benuaq: "Man",
    kutai: "Makan",
    kenyah: "Man",
    audio: { tunjung: "/audio/tnj-002.mp3", kutai: "/audio/kt-002.mp3" }
  }
];

// Endpoint Penerjemahan
exports.translateText = (req, res) => {
  const { text, targetLang } = req.body;
  const match = dictionaryDB.find(
    item => item.indonesia.toLowerCase() === text.toLowerCase()
  );

  if (!match) {
    return res.status(404).json({ success: false, message: "Kosa kata belum terindeks" });
  }

  res.json({
    success: true,
    input: text,
    targetLanguage: targetLang,
    result: match[targetLang.toLowerCase()] || "Tidak ditemukan",
    audioUrl: match.audio[targetLang.toLowerCase()] || null
  });
};
