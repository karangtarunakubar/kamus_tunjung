/**
 * Kamus Tunjung - Core Application Logic
 */

// Initial static dictionary dataset
const initialDictionary = [
  ["Nyama", "apa"], ["Lonya", "Bagaimana"], ["Menya", "Kemana"], ["Adi", "Berapa"], 
  ["Itih", "Ini"], ["Ito", "Itu"], ["Dito", "Disana"], ["Ditih", "Disini"], 
  ["Dinya", "Dimana"], ["Encoq", "Jauh"], ["Totoq", "Dekat"], ["Emooq", "Tinggi"], 
  ["Itint", "Rendah"], ["Moq", "Panjang"], ["Itit", "Kecil"], ["Hajaq", "Besar"], 
  ["Inaq", "Belum"], ["Soq", "Sudah"], ["Perangk", "Panas"], ["Celamp", "Dingin"], 
  ["Ise", "Baru"], ["Mai", "Lama"], ["Mui", "Tidak"], ["Ewah", "Iya"], 
  ["Heq", "Enggak"], ["Bueh", "Satu"], ["Regaq", "Dua"], ["Teluq", "Tiga"], 
  ["Pat", "Empat"], ["Limaq", "Lima"], ["Hagant", "Enam"], ["Tucuq", "Tujuh"], 
  ["Kalungk", "Delapan"], ["Setiant", "Sembilan"], ["Sawangk", "Sepuluh"], 
  ["Belas", "Sebelas"], ["Cahatu", "Seratus"], ["Ribu", "Seribu"], ["Juta", "Sejuta"], 
  ["Gari", "Adik"], ["Mpom Lihaq", "Kakek"], ["Mpom Waweq", "Nenek"], ["Ucuq", "Paman"], 
  ["Wanaq", "Suami"], ["Sagaq", "Istri"], ["Akuq", "Aku"], ["Koq", "Kamu"], 
  ["Kamiq", "Kami"], ["Kamp", "Kalian"], ["Eraq", "Mereka"], ["Ulunt", "Orang"], 
  ["Mersiaq", "Manusia"], ["Ulunt Pelagaq", "Orang Tua"], ["Pelegaq Mai", "Leluhur"], 
  ["Pelegaq", "Tua"], ["Kabant Tuhiq", "Anak-anak"], ["Tuhiq", "Anak"], ["Encunt", "Cucu"], 
  ["Mulaaq", "Mulai, memulai"], ["Katiiq", "Tertawa"], ["Nangih", "Menangis"], 
  ["Tidur", "Baring, tidur"], ["Kuman", "Makan"], ["Mirooq", "Minum"], 
  ["Bejalan", "Berjalan"], ["teliuq", "Berlari"], ["Nungkat", "Memanjat"], 
  ["Tepatiiq", "Melompat"], ["Nulis", "Menulis"], ["Maca", "Membaca"]
];

// App State
let mode = "id2ty"; // 'id2ty' = Indonesia -> Tunjung, 'ty2id' = Tunjung -> Indonesia
let activeDictionary = [];

// DOM Elements
const sourceText = document.getElementById("sourceText");
const targetText = document.getElementById("targetText");
const swapBtn = document.getElementById("swapBtn");
const srcLang = document.getElementById("srcLang");
const targetLang = document.getElementById("targetLang");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const wordCountBadge = document.getElementById("wordCountBadge");

// Modal Elements
const modalOverlay = document.getElementById("modalOverlay");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const saveWordBtn = document.getElementById("saveWordBtn");
const newTunjung = document.getElementById("newTunjung");
const newIndo = document.getElementById("newIndo");

/**
 * Loads static dictionary combined with user-added entries from LocalStorage
 */
function loadDictionary() {
  const stored = localStorage.getItem("tunjung_custom_dict");
  if (stored) {
    try {
      const customWords = JSON.parse(stored);
      return [...initialDictionary, ...customWords];
    } catch (e) {
      console.error("Failed to parse local dictionary data", e);
      return [...initialDictionary];
    }
  }
  return [...initialDictionary];
}

/**
 * Updates total vocabulary count badge in footer
 */
function updateWordCount() {
  if (wordCountBadge) {
    wordCountBadge.textContent = `Total kata: ${activeDictionary.length}`;
  }
}

/**
 * Core translation function
 */
function translate() {
  const input = sourceText.value.trim().toLowerCase();
  if (!input) {
    targetText.value = "";
    return;
  }

  const words = input.split(/\s+/);
  const translatedWords = words.map(word => {
    const cleanWord = word.replace(/[^\w\s]/gi, '');
    let match = null;

    for (const [ty, id] of activeDictionary) {
      if (!ty || !id) continue;

      if (mode === "ty2id") {
        if (ty.toLowerCase() === cleanWord) {
          match = id;
          break;
        }
      } else {
        const idList = id.toLowerCase().split(",").map(s => s.trim());
        if (idList.includes(cleanWord)) {
          match = ty;
          break;
        }
      }
    }
    return match ? match : word;
  });

  targetText.value = translatedWords.join(" ");
}

/**
 * Initialize Event Listeners
 */
function init() {
  activeDictionary = loadDictionary();
  updateWordCount();

  // Translation trigger
  if (sourceText) {
    sourceText.addEventListener("input", translate);
  }

  // Swap Languages
  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      mode = mode === "id2ty" ? "ty2id" : "id2ty";
      srcLang.textContent = mode === "id2ty" ? "Indonesia" : "Tunjung";
      targetLang.textContent = mode === "id2ty" ? "Tunjung" : "Indonesia";
      
      const tempText = sourceText.value;
      sourceText.value = targetText.value;
      targetText.value = tempText;
      translate();
    });
  }

  // Clear Input
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      sourceText.value = "";
      targetText.value = "";
    });
  }

  // Copy Result
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (targetText.value) {
        navigator.clipboard.writeText(targetText.value);
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => { 
          copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy'; 
        }, 1500);
      }
    });
  }

  // Modal Handlers
  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => modalOverlay.classList.add("active"));
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
  }

  if (saveWordBtn) {
    saveWordBtn.addEventListener("click", () => {
      const tyVal = newTunjung.value.trim();
      const idVal = newIndo.value.trim();

      if (!tyVal || !idVal) {
        alert("Harap isi kedua kolom!");
        return;
      }

      const customEntries = JSON.parse(localStorage.getItem("tunjung_custom_dict") || "[]");
      customEntries.push([tyVal, idVal]);
      localStorage.setItem("tunjung_custom_dict", JSON.stringify(customEntries));

      activeDictionary = loadDictionary();
      updateWordCount();
      translate();

      newTunjung.value = "";
      newIndo.value = "";
      modalOverlay.classList.remove("active");
    });
  }
}

// Start app on DOM readiness
document.addEventListener("DOMContentLoaded", init);
