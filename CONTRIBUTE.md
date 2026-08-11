# How You Can Contribute
## 1. Expanding the Dictionary Dataset
The main way to contribute is by adding missing words or correcting translations in the vocabulary datasets.

Dictionaries are located inside app.js under the dictionaries object.

Words are stored as paired arrays: ["Regional_Word", "Indonesian_Translation"]

```javascript

// Example entry format
"tj-TJ": [
  ["Nyama", "apa"],
  ["Kuman", "makan"]
]
```

Vocabulary Rules:

Keep words in lowercase unless they are proper nouns.

If a word has multiple common meanings in Indonesian, separate them with a comma: ["Mulaaq", "mulai, memulai"].

Ensure accurate dialect tagging (tj-TJ, ky-KY, bq-BQ, bh-BH, kt-KT).

## 2. Development Workflow
Follow these steps to submit changes:

Fork the Repository
### Click the Fork button at the top right of the GitHub page.

### Clone Your Fork

```bash
git clone https://github.com/your-username/kamus-kaltim.git
cd kamus-kaltim

```
### Create a Feature Branch
```bash
git checkout -b feature/add-kenyah-words
# or
git checkout -b fix/translation-bug

```
### Make Your Changes
Edit app.js, index.html, or style.css.

Test your changes locally by opening index.html in a web browser.

### Commit and Push
```bash
git add .
git commit -m "feat: add 20 new words to Kenyah (ky-KY) dictionary"
git push origin feature/add-kenyah-words

```
### Open a Pull Request (PR)

Go to the original repository on GitHub.

Click Compare & Pull Request.

Provide a concise description of your changes.

Commit Message Conventions
To keep history clear, please use the following commit prefix formats:

feat: New feature or new vocabulary added.

fix: Bug fixes or typo corrections in translations.

docs: Updates to documentation (README, CONTRIBUTING, etc.).

style: UI/CSS layout adjustments that do not affect application logic.



