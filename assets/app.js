/** 
 * Kamus Tunjung - Core Application Logic
 */

// Dataset kamus statis utama
const initialDictionary = [
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
];

// Pemetaan Opsi Bahasa & Suku
const tribe_in_language = {
  "id-ID": "Indonesia",
  "tj-TJ": "Tunjung",
  "ky-KY": "Kenyah",
  "bq-BQ": "Benuaq",
  "bh-BH": "Bahau",
  "kt-KT": "Kutai"
};

let activeDictionary = [];

// DOM Elements
const sourceText = document.getElementById("sourceText");
const targetText = document.getElementById("targetText");
const swapBtn = document.getElementById("swapBtn");
const srcLang = document.getElementById("srcLang");
const targetLang = document.getElementById("targetLang");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const translateBtn = document.getElementById("translateBtn");
const srcAudioBtn = document.getElementById("srcAudioBtn");
const targetAudioBtn = document.getElementById("targetAudioBtn");
const wordCountBadge = document.getElementById("wordCountBadge");

// Modal Elements
const modalOverlay = document.getElementById("modalOverlay");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveWordBtn = document.getElementById("saveWordBtn");
const newTunjung = document.getElementById("newTunjung");
const newIndo = document.getElementById("newIndo");

/**
 * Mengisi opsi dropdown <select> bahasa secara dinamis
 */
function populateSelects() {
  const selects = [srcLang, targetLang];
  selects.forEach((select) => {
    if (!select) return;
    select.innerHTML = "";
    for (const [key, label] of Object.entries(tribe_in_language)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = label;
      select.appendChild(option);
    }
  });

  // Set nilai default dropdown
  if (srcLang) srcLang.value = "id-ID";
  if (targetLang) targetLang.value = "tj-TJ";
}

/**
 * Memuat kamus statis + kata baru dari LocalStorage
 */
function loadDictionary() {
  const stored = localStorage.getItem("tunjung_custom_dict");
  if (stored) {
    try {
      const customWords = JSON.parse(stored);
      return [...initialDictionary, ...customWords];
    } catch (e) {
      console.error("Gagal membaca data kamus lokal", e);
      return [...initialDictionary];
    }
  }
  return [...initialDictionary];
}

/**
 * Memperbarui jumlah total kosakata di footer
 */
function updateWordCount() {
  if (wordCountBadge) {
    wordCountBadge.textContent = `Total kata: ${activeDictionary.length}`;
  }
}

/**
 * Logika utama penerjemahan
 */
function translate() {
  if (!sourceText || !targetText) return;

  const input = sourceText.value.trim().toLowerCase();
  if (!input) {
    targetText.value = "";
    return;
  }

  const isSourceIndo = srcLang ? srcLang.value === "id-ID" : true;
  const words = input.split(/\s+/);

  const translatedWords = words.map(word => {
    const cleanWord = word.replace(/[^\w\s]/gi, '');
    let match = null;

    for (const [tj, id] of activeDictionary) {
      if (!tj || !id) continue;

      if (isSourceIndo) {
        const idList = id.toLowerCase().split(",").map(s => s.trim());
        if (idList.includes(cleanWord)) {
          match = tj;
          break;
        }
      } else {
        if (tj.toLowerCase() === cleanWord) {
          match = id;
          break;
        }
      }
    }
    return match ? match : word;
  });

  targetText.value = translatedWords.join(" ");
}

/**
 * Fitur Text-to-Speech (Pemutar Audio)
 */
function playAudio(text, btnElement) {
  if (!text || text === "Silakan masukkan teks terlebih dahulu.") {
    alert("Tidak ada teks untuk dibacakan.");
    return;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";

    const originalHTML = btnElement.innerHTML;
    btnElement.innerHTML = '<i class="fa-solid fa-volume-up fa-beat-fade"></i>';

    utterance.onend = () => { btnElement.innerHTML = originalHTML; };
    utterance.onerror = () => { btnElement.innerHTML = originalHTML; };

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Maaf, browser Anda tidak mendukung fitur Text-to-Speech.");
  }
}

/**
 * Inisialisasi Event Listener
 */
function init() {
  populateSelects();
  activeDictionary = loadDictionary();
  updateWordCount();

  // Terjemahkan otomatis saat mengetik
  if (sourceText) {
    sourceText.addEventListener("input", translate);
  }

  // Terjemahkan ulang saat dropdown bahasa diubah
  if (srcLang) srcLang.addEventListener("change", translate);
  if (targetLang) targetLang.addEventListener("change", translate);

  // Tombol Terjemahkan (manual)
  if (translateBtn) {
    translateBtn.addEventListener("click", () => {
      if (sourceText.value.trim() !== "") {
        translate();
      } else {
        targetText.value = "Silakan masukkan teks terlebih dahulu.";
        setTimeout(() => targetText.value = "", 2000);
      }
    });
  }

  // Tombol Audio Suara
  if (srcAudioBtn) {
    srcAudioBtn.addEventListener("click", () => playAudio(sourceText.value.trim(), srcAudioBtn));
  }
  if (targetAudioBtn) {
    targetAudioBtn.addEventListener("click", () => playAudio(targetText.value.trim(), targetAudioBtn));
  }

  // Tukar Bahasa & Teks (Swap)
  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      if (srcLang && targetLang) {
        const tempLang = srcLang.value;
        srcLang.value = targetLang.value;
        targetLang.value = tempLang;
      }

      if (sourceText && targetText) {
        const tempText = sourceText.value;
        sourceText.value = targetText.value;
        targetText.value = tempText;
      }

      translate();
    });
  }

  // Hapus Teks
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (sourceText) sourceText.value = "";
      if (targetText) targetText.value = "";
    });
  }

  // Salin Hasil Terjemahan
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (targetText && targetText.value) {
        navigator.clipboard.writeText(targetText.value);
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => { 
          copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy'; 
        }, 1500);
      }
    });
  }

  // Event Modal Tambah Kata
  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => modalOverlay.classList.add("active"));
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
  }

  if (saveWordBtn) {
    saveWordBtn.addEventListener("click", () => {
      const tjVal = newTunjung ? newTunjung.value.trim() : "";
      const idVal = newIndo ? newIndo.value.trim() : "";

      if (!tjVal || !idVal) {
        alert("Harap isi kedua kolom!");
        return;
      }

      const customEntries = JSON.parse(localStorage.getItem("tunjung_custom_dict") || "[]");
      customEntries.push([tjVal, idVal]);
      localStorage.setItem("tunjung_custom_dict", JSON.stringify(customEntries));

      activeDictionary = loadDictionary();
      updateWordCount();
      translate();

      if (newTunjung) newTunjung.value = "";
      if (newIndo) newIndo.value = "";
      if (modalOverlay) modalOverlay.classList.remove("active");
    });
  }
}

// Jalankan aplikasi saat DOM siap
document.addEventListener("DOMContentLoaded", init);
