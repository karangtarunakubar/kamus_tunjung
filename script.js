// Select all <select> elements on the page
const selectTags = document.querySelectorAll("select");

// Loop through each <select> tag
selectTags.forEach(tag => {
    // Loop through the tribe_in_language object
    for (const key in tribe_in_language) {
        // Create a new <option> element
        const option = document.createElement("option");
        
        // Set the value (e.g., "tj-TJ") and text (e.g., "Tunjung")
        option.value = key;
        option.textContent = tribe_in_language[key];
        
        // Append the option to the current <select> tag
        tag.appendChild(option);
    }
});
/**
 * Memuat kamus berdasarkan bahasa daerah yang sedang dipilih
 */
function getActiveDictionary() {
  const isSourceIndo = srcLang ? srcLang.value === "id-ID" : true;
  const targetCode = isSourceIndo ? targetLang.value : srcLang.value;

  // Mengambil dataset bahasa daerah yang dipilih (default fallback ke Tunjung)
  const baseDict = dictionaries[targetCode] || dictionaries["tj-TJ"];
  
  // Memuat data kustom lokal jika ada
  const stored = localStorage.getItem(`custom_dict_${targetCode}`);
  if (stored) {
    try {
      const customWords = JSON.parse(stored);
      return [...baseDict, ...customWords];
    } catch (e) {
      return [...baseDict];
    }
  }
  return [...baseDict];
}

/**
 * Logika Terjemahkan yang Disesuaikan
 */
function translate() {
  if (!sourceText || !targetText) return;

  const input = sourceText.value.trim().toLowerCase();
  if (!input) {
    targetText.value = "";
    return;
  }

  activeDictionary = getActiveDictionary();
  updateWordCount();

  const isSourceIndo = srcLang ? srcLang.value === "id-ID" : true;
  const words = input.split(/\s+/);

  const translatedWords = words.map(word => {
    const cleanWord = word.replace(/[^\w\s]/gi, '');
    let match = null;

    for (const [daerahWord, idWord] of activeDictionary) {
      if (!daerahWord || !idWord) continue;

      if (isSourceIndo) {
        const idList = idWord.toLowerCase().split(",").map(s => s.trim());
        if (idList.includes(cleanWord)) {
          match = daerahWord;
          break;
        }
      } else {
        if (daerahWord.toLowerCase() === cleanWord) {
          match = idWord;
          break;
        }
      }
    }
    return match ? match : word;
  });

  targetText.value = translatedWords.join(" ");
}
