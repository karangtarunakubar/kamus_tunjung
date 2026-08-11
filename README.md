# Kamus Tunjung

Proyek dokumentasi dan pelestarian multi bahasa, disini documentasi bahasa Tunjung jika ingin contribute.md. 
bahasa Tunjung — kamus dua arah dan panduan singkat penggunaan.

Tujuan
- Mendokumentasikan kosakata Tunjung → Indonesia dan Indonesia → Tunjung.
- Menyediakan format data (CSV, JSON) untuk keperluan penelitian, aplikasi kamus, dan distribusi.

Isi repositori
- `tunjung_to_indonesia.csv` — Daftar pasangan Tunjung → Indonesia (CSV).
- `tunjung_to_indonesia.json` — (akan ditambahkan) Versi JSON dari CSV.

Panduan singkat
1. Untuk melihat daftar kata cepat, buka `tunjung_to_indonesia.csv`.
2. Untuk penggunaan programatik, gunakan file JSON (akan ditambahkan).
3. Jika ingin menambahkan entri baru, ajukan pull request atau buka issue dengan format: `Tunjung,Indonesia,Catatan`.

Kontribusi
- Kontribusi dari penutur asli, ahli bahasa, dan relawan sangat diharapkan.
- Silakan buka issue untuk koreksi ejaan, pelafalan, atau penambahan istilah baru.

Lisensi
- Dokumen ini belum memiliki lisensi tersurat. Jika Anda pemilik konten atau ingin menerapkan lisensi, beri tahu saya agar saya tambahkan berkas `LICENSE`.

Kontak
- Repo: https://github.com/karangtarunakubar/kamus_tunjung

---
Berikut adalah panduan dan petunjuk mendetail untuk menyesuaikan serta menerapkan dataset kosakata Bahasa Tunjung (Tonyooi) ini sebagai gaya bahasa respons (response style/system prompt) untuk AI atau aplikasi penerjemah/percakapan:

## 1. Struktur Aturan Dasar (System Prompt Personal)
Untuk mengconfigurasi AI agar dapat membalas dalam gaya atau campuran bahasa Tunjung, berikan petunjuk sistem (System Prompt) berikut pada pengaturan aplikasi Anda:

```
[PERAN & NADA BAHASA]
Anda adalah asisten virtual yang berkomunikasi menggunakan Bahasa Tunjung secara alami. 

[ATURAN PENGGUNAAN KOSAKATA]
1. Gunakan entri kata dari Kamus Tunjung yang tersedia sebagai acuan utama tata kata.
2. Jika kata benda atau kata kerja dasar tersedia dalam daftar, utamakan penggunaan kata Tunjung (contoh: "Akuq" untuk Saya, "Kao" untuk Kamu, "Kuman" untuk Makan, "Mirooq" untuk Minum).
3. Untuk kata pendukung atau struktur kalimat rumit yang belum ada di kamus, gunakan tata bahasa Indonesia baku/santai sebagai pembentuk struktur kalimat dasar.
4. Jaga nada bicara agar ramah, komunikatif, dan sesuai dengan konteks percakapan.
```

## 2. Aturan Pembentukan Kalimat (Syntax & Mapping Rules)
### Kata Ganti Orang (Pronouns):
Aku → Akuq 

Kamu → Koi 

Dia →  Diq ( Untuk Laki-laki)

Dia → Yang (Untuk Perempuan)

Dia → Saq (nya)

Kami → Kamiq

Kalian → Kamp

Mereka → Eraq

Kita → Tai

Orang → Ulunt

Suami → Wanaq 

Sagaq →  Istri

Manusia → Mersiaq 


### Kata Ganti Orang didalam keluarga
Adik →

Kakak →

Ibu →

Bapak →

Paman →

Tante →

Sepupu →

Keponakan →

Saudara →

Kakek →

Nenek →

Anak → Tuhiq 

Cucu → Encunt

Leluhur → Pelgaq Mai


### Kata Kerja Percakapan Utama (Common Verbs):

Bicara → Begahaq

Datang → Mot

Berkunjung → Sikant  

Sampai → Mpeq

Terlihat → Qitent 

Lihat → Neaau

Mendengar → Keheneng

Berjalan → Calant

Jalan → Ngedot

Baring → Tiriq

### Contoh Pemetaan Kalimat Respons:

Indonesia: "Aku mau makan dan minum di sini."

Penerapan Tunjung: "Akuq ewah kuman dang muruq diditih." (Menggunakan kata 'kuman' dan 'muruq')

Indonesia: "Apakah kamu sudah datang?"

Penerapan Tunjung: "Nya koi soq mot?" (Menggunakan 'nyama' [apa] + 'koi' + 'mot')

### Ekspresi:  

Menangis → Nangi

Tertawa → Tagaq

Merajuk → Pesolaq

Cemburu → kempuruq



## 3. Templat Respons Baku untuk Aplikasi (Standard Response Templates)
Anda dapat mengintegrasikan templat balasan langsung di kode aplikasi Anda (UI Messages)

Skenario Respons	Kalimat Bahasa Indonesia	Respons Gaya Tunjung

## 4. Implementasi Integrasi Kode (JSON Output Format)
Jika Anda ingin model mengembalikan respons dalam format terstruktur yang memisahkan teks Tunjung dan terjemahan Indonesianya untuk tampilan UI:

```JSON
{
  "response_tunjung": "Akuq ewah Ngedot jeq talunt.",
  "response_indonesia": "Saya mau jalan ke hutan.",
  "vocabulary_used":
[
  {
    "tunjung": "Akuq",
    "indonesia": "Aku"
  },
  {
    "tunjung": "Amput",
    "indonesia": "Ikut"
  },
  {
    "tunjung": "Ampiitn",
    "indonesia": "Alas"
  },
  {
    "tunjung": "Ampuun",
    "indonesia": "Bersama dengan"
  },
  {
    "tunjung": "Ancar",
    "indonesia": "Tari"
  },
  {
    "tunjung": "Ancaatn",
    "indonesia": "Pelet"
  },
  {
    "tunjung": "Anci",
    "indonesia": "Tusuk"
  },
  {
    "tunjung": "Ancur",
    "indonesia": "Moncong"
  },
  {
    "tunjung": "Angka",
    "indonesia": "Kira-kira, mungkin"
  },
  {
    "tunjung": "Angkai",
    "indonesia": "Bangkai"
  },
  {
    "tunjung": "Angkuui",
    "indonesia": "Rendah hati"
  },
  {
    "tunjung": "Antaakng",
    "indonesia": "Guci besar"
  },
  {
    "tunjung": "Antaaq",
    "indonesia": "Banyak"
  },
  {
    "tunjung": "Antakng",
    "indonesia": "Akan"
  },
  {
    "tunjung": "Anteek",
    "indonesia": "Sebabnya"
  },
  {
    "tunjung": "Antung",
    "indonesia": "Arah, letak, alamat"
  },
  {
    "tunjung": "Aur",
    "indonesia": "Sibuk"
  },
  {
    "tunjung": "Bancukng",
    "indonesia": "Bensin"
  },
  {
    "tunjung": "Bangkukng",
    "indonesia": "Bagian atas dari moncong hewan"
  },
  {
    "tunjung": "Bantir",
    "indonesia": "Masa akil balik"
  },
  {
    "tunjung": "Bantuut",
    "indonesia": "Tidak meledak/meletus"
  },
  {
    "tunjung": "Baon",
    "indonesia": "Bau, aroma"
  },
  {
    "tunjung": "Baoq",
    "indonesia": "Bau, aroma"
  },
  {
    "tunjung": "Begontekng",
    "indonesia": "Bergantung"
  },
  {
    "tunjung": "Beldookng",
    "indonesia": "Parang"
  },
  {
    "tunjung": "Belempai",
    "indonesia": "Tidak memakai baju"
  },
  {
    "tunjung": "Belengkenat",
    "indonesia": "Makanan yang tersangkut di leher"
  },
  {
    "tunjung": "Belengkoot",
    "indonesia": "Bengkok"
  },
  {
    "tunjung": "Beluntakng",
    "indonesia": "Tiang (patung) untuk mengikat hewan kurban"
  },
  {
    "tunjung": "Beniaq",
    "indonesia": "Burung elang"
  },
  {
    "tunjung": "Benua",
    "indonesia": "Kampung"
  },
  {
    "tunjung": "Beor",
    "indonesia": "Nama jenis cendawan/jamur"
  },
  {
    "tunjung": "Bepempaapm",
    "indonesia": "Menutup kemaluan dengan telapak atau jari tangan"
  },
  {
    "tunjung": "Berdoeeq",
    "indonesia": "Rapuh (tentang tubuh)"
  },
  {
    "tunjung": "Berempai",
    "indonesia": "Jalan berduaan"
  },
  {
    "tunjung": "Berempuh",
    "indonesia": "Saling berangkulan"
  },
  {
    "tunjung": "Bersinak",
    "indonesia": "Beracun"
  },
  {
    "tunjung": "Bintakng",
    "indonesia": "Bintang"
  },
  {
    "tunjung": "Bion",
    "indonesia": "Daging yang masih segar"
  },
  {
    "tunjung": "Bioh",
    "indonesia": "Baru saja"
  },
  {
    "tunjung": "Bloak",
    "indonesia": "Jenis seni suara"
  },
  {
    "tunjung": "Buak",
    "indonesia": "Burung hantu"
  },
  {
    "tunjung": "Bueh",
    "indonesia": "Satu, tunggal"
  },
  {
    "tunjung": "Buncaarbaih",
    "indonesia": "Berserakan"
  },
  {
    "tunjung": "Buo",
    "indonesia": "Hujan terus-menerus"
  },
  {
    "tunjung": "Buookng",
    "indonesia": "Menyebutkan atau menanyakan berulang kali"
  },
  {
    "tunjung": "Caor",
    "indonesia": "Jenis sarung (untuk perempuan)"
  },
  {
    "tunjung": "Cecuaq",
    "indonesia": "Gagap"
  },
  {
    "tunjung": "Coang",
    "indonesia": "Baskom"
  },
  {
    "tunjung": "Coeq",
    "indonesia": "Cobek"
  },
  {
    "tunjung": "Dian",
    "indonesia": "Kain yang dipilin dan dilumuri lilin madu untuk ritual belian"
  },
  {
    "tunjung": "Diapm",
    "indonesia": "Tinggal"
  },
  {
    "tunjung": "Encuutn",
    "indonesia": "Asap"
  },
  {
    "tunjung": "Encoq",
    "indonesia": "Jauh"
  },
  {
    "tunjung": "Engkolakng",
    "indonesia": "Tempat berteduh"
  },
  {
    "tunjung": "Gae",
    "indonesia": "Miliknya"
  },
  {
    "tunjung": "Gaer",
    "indonesia": "Khawatir, cemas"
  },
  {
    "tunjung": "Galikngganai",
    "indonesia": "Tidur-tiduran"
  },
  {
    "tunjung": "Gei siih",
    "indonesia": "Jenis rotan"
  },
  {
    "tunjung": "Goar-goer",
    "indonesia": "Longgar"
  },
  {
    "tunjung": "Huit",
    "indonesia": "Belantik"
  },
  {
    "tunjung": "Iatn",
    "indonesia": "Sungai"
  },
  {
    "tunjung": "Incuk",
    "indonesia": "Tukul"
  },
  {
    "tunjung": "Jait",
    "indonesia": "Hampir"
  },
  {
    "tunjung": "Jaut",
    "indonesia": "Kabur"
  },
  {
    "tunjung": "Jautn",
    "indonesia": "Awan"
  },
  {
    "tunjung": "Jemiaq",
    "indonesia": "Rumbia"
  },
  {
    "tunjung": "Jie",
    "indonesia": "Sejenis guci"
  },
  {
    "tunjung": "Juakng",
    "indonesia": "Bunga yang dipakai dalam upacara belian"
  },
  {
    "tunjung": "Kae",
    "indonesia": "Memang"
  },
  {
    "tunjung": "Kaeet",
    "indonesia": "Selalu, biasa"
  },
  {
    "tunjung": "Kao",
    "indonesia": "Mencuci muka"
  },
  {
    "tunjung": "Kaot",
    "indonesia": "Sendok, gayung"
  },
  {
    "tunjung": "Kauuk",
    "indonesia": "Jenis kadal yang besar"
  },
  {
    "tunjung": "Kear-keor",
    "indonesia": "Bergoyang-goyang"
  },
  {
    "tunjung": "Keak-keok",
    "indonesia": "Berbelok-belok"
  },
  {
    "tunjung": "Keaskeko",
    "indonesia": "Sudah dikerjakan"
  },
  {
    "tunjung": "Kekuit",
    "indonesia": "Terangkat pada salah satu ujung"
  },
  {
    "tunjung": "Kelikau-kiiu",
    "indonesia": "Tidak karuan"
  },
  {
    "tunjung": "Kelikiu",
    "indonesia": "Sayap"
  },
  {
    "tunjung": "Kelio",
    "indonesia": "Pergi menengok ladang"
  },
  {
    "tunjung": "Keliuq",
    "indonesia": "Keracunan"
  },
  {
    "tunjung": "Kelauq",
    "indonesia": "Jenis buah asam hutan"
  },
  {
    "tunjung": "Kelengkikng",
    "indonesia": "Lumbung padi"
  },
  {
    "tunjung": "Keluatn",
    "indonesia": "Tertimpa"
  },
  {
    "tunjung": "Kerkak",
    "indonesia": "Ketiak"
  },
  {
    "tunjung": "Kertak",
    "indonesia": "Kacang panjang"
  },
  {
    "tunjung": "Kertikng",
    "indonesia": "Kering, garing, renyah"
  },
  {
    "tunjung": "Kerwilik",
    "indonesia": "Kincir angin"
  },
  {
    "tunjung": "Kias",
    "indonesia": "Sapu"
  },
  {
    "tunjung": "Kiriu",
    "indonesia": "Pinggir"
  },
  {
    "tunjung": "Koih",
    "indonesia": "Gesit, rajin"
  },
  {
    "tunjung": "Koreu",
    "indonesia": "Musim kemarau berkepanjangan"
  },
  {
    "tunjung": "Kuini",
    "indonesia": "Nama jenis mangga"
  },
  {
    "tunjung": "Lahtala",
    "indonesia": "Yang Maha Esa"
  },
  {
    "tunjung": "Laih",
    "indonesia": "Ikan lais"
  },
  {
    "tunjung": "Laitn",
    "indonesia": "Lain"
  },
  {
    "tunjung": "Laoq",
    "indonesia": "Lapar"
  },
  {
    "tunjung": "Lea",
    "indonesia": "Bosan"
  },
  {
    "tunjung": "Leeot",
    "indonesia": "Jalan panjang"
  },
  {
    "tunjung": "Lehuatn",
    "indonesia": "Bagian depan"
  },
  {
    "tunjung": "Leler-maer",
    "indonesia": "Tak terurus, berantakan"
  },
  {
    "tunjung": "Leoq",
    "indonesia": "Sperma"
  },
  {
    "tunjung": "Leoon",
    "indonesia": "Sperma"
  },
  {
    "tunjung": "Lesoer",
    "indonesia": "Menjuntai ke bawah"
  },
  {
    "tunjung": "Loah",
    "indonesia": "Mual"
  },
  {
    "tunjung": "Loaaq",
    "indonesia": "Lemak"
  },
  {
    "tunjung": "Loakng",
    "indonesia": "Lubang tugalan"
  },
  {
    "tunjung": "Loan",
    "indonesia": "Lemak"
  },
  {
    "tunjung": "Longeeu",
    "indonesia": "Menjulang tinggi"
  },
  {
    "tunjung": "Loseeu",
    "indonesia": "Melebihi batas"
  },
  {
    "tunjung": "Luuok",
    "indonesia": "Lubang"
  },
  {
    "tunjung": "Mancak",
    "indonesia": "Bisul"
  },
  {
    "tunjung": "Mangkasi",
    "indonesia": "Rendah hati"
  },
  {
    "tunjung": "Meat",
    "indonesia": "Menindih"
  },
  {
    "tunjung": "Meluikng",
    "indonesia": "Nama jenis tumbuhan yang bisa dimakan"
  },
  {
    "tunjung": "Mengeliu",
    "indonesia": "Melengking"
  },
  {
    "tunjung": "Mengeook",
    "indonesia": "Keok"
  },
  {
    "tunjung": "Mengoek",
    "indonesia": "Suara babi berteriak"
  },
  {
    "tunjung": "Mensigit",
    "indonesia": "Masjid"
  },
  {
    "tunjung": "Mentiuuq",
    "indonesia": "Bunuh diri"
  },
  {
    "tunjung": "Mentaih",
    "indonesia": "Susah, sengsara, menderita"
  },
  {
    "tunjung": "Menyelingkui",
    "indonesia": "Mengikuti dari belakang"
  },
  {
    "tunjung": "Meraiq",
    "indonesia": "Melerai"
  },
  {
    "tunjung": "Mio",
    "indonesia": "Sadar, siuman"
  },
  {
    "tunjung": "Mioh",
    "indonesia": "Menyatukan yang berserakan"
  },
  {
    "tunjung": "Neaau",
    "indonesia": "Melihat"
  },
  {
    "tunjung": "Nerka",
    "indonesia": "Terka"
  },
  {
    "tunjung": "Nerdas",
    "indonesia": "Mematikan di tempatnya"
  },
  {
    "tunjung": "Nerdaatn",
    "indonesia": "Berterus terang"
  },
  {
    "tunjung": "Ngeaak",
    "indonesia": "Membuka"
  },
  {
    "tunjung": "Ngenjijiq",
    "indonesia": "Menyengir"
  },
  {
    "tunjung": "Ngerkokng",
    "indonesia": "Berjongkok"
  },
  {
    "tunjung": "Ngeteu",
    "indonesia": "Mencelupkan"
  },
  {
    "tunjung": "Ngueu",
    "indonesia": "Memberi isyarat dengan tangan agar orang lain pergi atau minggir"
  },
  {
    "tunjung": "Nguih",
    "indonesia": "Menghajar"
  },
  {
    "tunjung": "Nguit",
    "indonesia": "Mengungkit, menjungkit"
  },
  {
    "tunjung": "Ngureeu",
    "indonesia": "Menggerakkan"
  },
  {
    "tunjung": "Nguseu",
    "indonesia": "Menghamburkan air keluar dari dalam wadahnya"
  },
  {
    "tunjung": "Nguweu",
    "indonesia": "Menggerakkan tangan atau galah, dan lain-lain pertanda agar menjauh"
  },
  {
    "tunjung": "Pelgaq mai",
    "indonesia": "Leluhur"
  },
  {
    "tunjung": "Pemkaar",
    "indonesia": "Orang yang berjasa dalam sejarah dan pengembangan kampung"
  },
  {
    "tunjung": "Pengampeh",
    "indonesia": "Alat pemeras tebu"
  },
  {
    "tunjung": "Perdah",
    "indonesia": "Tangkai beliung"
  },
  {
    "tunjung": "Permaq",
    "indonesia": "Hitam"
  },
  {
    "tunjung": "Perngaaq",
    "indonesia": "Pembagian tugas atau pekerjaan"
  },
  {
    "tunjung": "Pucoou",
    "indonesia": "Mencelupkan"
  },
  {
    "tunjung": "Rakbaar",
    "indonesia": "Adat terkait pelanggaran dalam upacara belian atau kematian"
  },
  {
    "tunjung": "Sangkur",
    "indonesia": "Cangkul"
  },
  {
    "tunjung": "Seloar",
    "indonesia": "Celana"
  },
  {
    "tunjung": "Talunt",
    "indonesia": "Hutan"
  },
  {
    "tunjung": "Serkap",
    "indonesia": "Alat penangkap ikan di danau yang dangkal"
  },
  {
    "tunjung": "Sermiq",
    "indonesia": "Emper"
  },
  {
    "tunjung": "Calant",
    "indonesia": "berjalan"
  },
  {
    "tunjung": "Tengemperek",
    "indonesia": "Diomeli"
  },
  {
    "tunjung": "Jeq",
    "indonesia": "Ke"
  },
  {
    "tunjung": "Teq", 
    "indonesia": "Dari"
  },
  {"tunjung": "Nyaa", 
  "indonesia": "Mana"},
  {
    "Tunjung": "Ngawengq", 
    "indonesia": "Manjat"
  }
]
}
```
_Dibuat untuk pelestarian warisan bahasa dan budaya suku Tunjung (Rentenungk)._
