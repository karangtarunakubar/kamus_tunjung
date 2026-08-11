/**
 * Dataset Kamus Bahasa Daerah Kalimantan Timur
 * Format: [ [Kata_Daerah, Kata_Indonesia], ... ]
 */

// tribes.js
const tribe_in_language = {
      "id-ID": "Indonesia",
      "tj-TJ": "Tunjung",
      "ky-KY": "Kenyah",
      "bq-BQ": "Benuaq",
      "bh-BH": "Bahau",
      "kt-KT": "Kutai"
    };

const dictionaries = {
  // Tunjung
  "tj-TJ": [
    ["Baq", "Ada"], ["Nya", "apakah"], ["Nyama", "apa"], ["Lonya", "Bagaimana"], ["Menya", "Kemana"], ["Adi", "Berapa"], ["Tih", "Ini"], ["Ito", "Itu"], ["Dito", "Disana"], ["Ditih", "Disini"], ["Dinya", "Dimana"], ["Encoq", "Jauh"], ["Totoq", "Dekat"], ["Emooq", "Tinggi"], ["Itint", "Rendah"], ["Moq", "Panjang"],
      ["Itit", "Kecil"], ["Hajaq", "Besar"], ["Inaq", "Belum"], ["Soq", "Sudah"], ["Perangk", "Panas"], ["Celamp", "Dingin"], ["Isay", "Baru"], ["Isay tih", "Baru ini"], ["Isay nyi", "Baru saja"], ["Mai", "Lama"], ["Nemaq", "Pergi"], ["Diapm", "Tinggal"], ["Mot", "Datang"], ["Buru-buru", "Gagaq"], ["Cepat", "Jamit"], ["Berdohai", "Pelan-pelan"], ["Sengket", "Naik"], ["Mile", "Turun"], ["Tala", "Terang"], ["Gelap", "Gempitaq"], ["Pejai", "Jelek"], ["Pajiq", "Baik"], ["Bajik", "Baik"], 
      ["Mui", "Tidak"], ["Ewah", "Iya"], ["Heq", "Enggak"], ["Lat", "Bohong"],
      ["Hitam", "Permaq"], ["Biru", "Nahum"], ["Bohongq", "Merah"], ["Putiq", "Putih"], 
      ["Bueh","Satu"], ["Regaq","Dua"], ["Teluq","Tiga"], ["Pat","Empat"], ["Limaq","Lima"], ["Hagant","Enam"],["Tucuq","Tujuh"],["Kalungk","Delapan"], ["Setiant","Sembilan"], ["Sawangk","Sepuluh"], 
      ["Belas", "Sebelas"], ["Cahatu","Seratus"], ["Ribu","Seribu"], ["Juta","Sejuta"], ["Gari", "Adik"], ["Mpom Lihaq", "Kakek"], ["Mpom Waweq", "Nenek"], ["Ucuq", "Paman"], 
      ["Wanaq","Suami"], ["Sagaq", "Istri"], ["Akuq", "Aku"], ["Koi", "Kamu"], ["Kamiq", "Kami"], ["Tai", "Kita"], ["Kamp", "Kalian"], ["Eraq", "Mereka"], ["Ulunt", "Orang"],
      ["Mersiaq", "Manusia"], ["Ulunt Pelagaq", "Orang Tua"], ["Pelegaq Mai", "Leluhur"], ["Pelegaq", "Tua"], ["Kabant Tuhiq", "Anak-anak"], ["Tuhiq", "Anak"], ["Encunt", "Cucu"], ["Mulai", "Mulai"], ["Tagaq", "Tertawa"], ["Nangi", "Menangis"], ["Tiro", "Tidur"], ["Kuman", "Makan"], ["Muruq", "Minum"], ["Bejalan", "Ngedot"], ["teliuq", "Berlari"], ["Ngaweng", "Memanjat"], ["Tepatiiq", "Melompat"], ["Nulis", "Menulis"], ["Maca", "Membaca"],
      ["Angka", "Kira-kira"], ["Angkake", "Kiranya"], ["Angkai", "Bangkai"], ["Laitn", "Lain"], ["Laoq", "Lapar"], ["Lea", "Bosan"], ["Loah", "Mual"],
      ["Loaaq", "Lemak"], ["Loan", "Lemak"], ["Loseeu", "Longgar"], ["Luuok", "Lubang"], ["Nau", " Hari"], ["Dilau", "Besok"], ["Telamaq", "Depan"], ["Lituq", "Belakang"], ["Ulant", "Bulan"], ["Taont", "Tahun"], ["Bunuh diri", "Mentiuuq"], ["Meraiq", "Melerai"],
      ["Nerdaatn", "Berterus terang"], ["Jaur", "Kabur"], ["Keracunan", "Keliuq"], ["Nguit", "Menyukit"], ["Leler-maer", "Tidak Terurus"], ["Tertimpa", "Keluatn"] 
  ],

  // Kenyah
  "ky-KY": [
    ["Anya", "apa"], ["Bawen", "Bagaimana"], ["Kee", "Kemana"], ["Kura", "Berapa"],
    ["Itun", "Ini"], ["Inan", "Itu"], ["Dinan", "Disana"], ["Ditin", "Disini"],
    ["Biw", "Jauh"], ["Masat", "Dekat"], ["Muat", "Tinggi"], ["Iwa", "Rendah"],
    ["Akeu", "Aku"], ["Iko", "Kamu"], ["Ame", "Kami"], ["Ika", "Mereka"],
    ["Kuman", "Makan"], ["Mihop", "Minum"], ["Nyalau", "Berjalan"], ["Turu", "Tidur"],
    ["Cah", "Satu"], ["Dua", "Dua"], ["Tulu", "Tiga"], ["Pat", "Empat"], ["Malam", "Lima"]
  ],

  // Benuaq
  "bq-BQ": [
    ["Niaq", "apa"], ["Moi", "Bagaimana"], ["Kenei", "Kemana"], ["Pira", "Berapa"],
    ["Nih", "Ini"], ["Noh", "Itu"], ["Dinoh", "Disana"], ["Dinih", "Disini"],
    ["Mulaq", "Jauh"], ["Totoq", "Dekat"], ["Emoq", "Tinggi"], ["Rentaq", "Rendah"],
    ["Akuq", "Aku"], ["Ikaw", "Kamu"], ["Kamiq", "Kami"], ["Moroq", "Mereka"],
    ["Kuman", "Makan"], ["Miring", "Minum"], ["Bejolang", "Berjalan"], ["Tukut", "Tidur"],
    ["Paaq", "Satu"], ["Ruaq", "Dua"], ["Teloq", "Tiga"], ["Pat", "Empat"], ["Lumaq", "Lima"]
  ],

  // Bahau
  "bh-BH": [
    ["Hyan", "apa"], ["Meno", "Bagaimana"], ["Kaye", "Kemana"], ["Kura", "Berapa"],
    ["Inih", "Ini"], ["Inoh", "Itu"], ["Dinoh", "Disana"], ["Dinih", "Disini"],
    ["Juh", "Jauh"], ["Awi", "Dekat"], ["Aka", "Tinggi"], ["Iwa", "Rendah"],
    ["Akel", "Aku"], ["Ika", "Kamu"], ["Ame", "Kami"], ["Iya", "Mereka"],
    ["Kuman", "Makan"], ["Mihop", "Minum"], ["Nyalau", "Berjalan"], ["Turu", "Tidur"],
    ["Cah", "Satu"], ["Dua", "Dua"], ["Telo", "Tiga"], ["Pat", "Empat"], ["Malam", "Lima"]
  ],

  // Kutai
  "kt-KT": [
    ["Apa", "apa"], ["Kayapa", "Bagaimana"], ["Kemanak", "Kemana"], ["Berapa", "Berapa"],
    ["Ni", "Ini"], ["Etang", "Itu"], ["Detang", "Disana"], ["Dini", "Disini"],
    ["Jauh", "Jauh"], ["Harak", "Dekat"], ["Tinggi", "Tinggi"], ["Rendah", "Rendah"],
    ["Aku", "Aku"], ["Kao", "Kamu"], ["Kutai", "Kami"], ["Sia", "Mereka"],
    ["Kenyem", "Makan"], ["Ngerep", "Minum"], ["Bejalang", "Berjalan"], ["Guring", "Tidur"],
    ["Sotoh", "Satu"], ["Dua", "Dua"], ["Tiga", "Tiga"], ["Empat", "Empat"], ["Lima", "Lima"]
  ]
};
