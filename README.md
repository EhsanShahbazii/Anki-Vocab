<p align="center">
  <img src="media/banner.png" alt="Anki for VS Code Banner" width="100%" />
</p>

<h1 align="center">Anki Vocab for VS Code</h1>

<p align="center">
  <b>Learn English vocabulary, listen to native pronunciations, and master Anki flashcards directly inside your code editor.</b>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=ehsanshahbazi.vscode-anki"><img src="https://img.shields.io/visual-studio-marketplace/v/ehsanshahbazi.vscode-anki?style=flat-square&color=007acc&label=Marketplace" alt="Marketplace Version" /></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=ehsanshahbazi.vscode-anki"><img src="https://img.shields.io/visual-studio-marketplace/i/ehsanshahbazi.vscode-anki?style=flat-square&color=23c16b&label=Installs" alt="Installs" /></a>
  <a href="https://github.com/EhsanShahbazii/Anki-Vocab"><img src="https://img.shields.io/github/stars/EhsanShahbazii/Anki-Vocab?style=flat-square&color=e5c07b&label=Stars" alt="GitHub Stars" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT" /></a>
</p>

---

## ✨ Overview

**Anki Vocab** is a developer-first language learning extension built seamlessly into Visual Studio Code. Study English vocabulary during breaks, listen to native audio pronunciations, test your spelling in **Listen & Type Exams**, and inspect unknown words in your code comments with spaced repetition powered by the proven **SuperMemo SM-2** algorithm.

Designed strictly with the authentic VS Code design system—clean typography, native theme colors, codicons, and zero unnecessary visual clutter.

---

## 📸 Screenshots

| Practice View (3-Line Layout) | Listen & Type Exam |
|:---:|:---:|
| ![Practice View](media/screenshots/practice-card.png) | ![Type Exam](media/screenshots/type-exam.png) |
| *Target word, phonetic badge, and speed-controlled audio.* | *Listen to the pronunciation and practice accurate spelling.* |

| Leitner 5-Box Spaced Repetition | Analytics & Activity Chart |
|:---:|:---:|
| ![Leitner Boxes](media/screenshots/leitner-boxes.png) | ![Analytics Dashboard](media/screenshots/analytics-dashboard.png) |
| *Organized retention boxes from Daily to Bi-Weekly.* | *7-Day review activity bar chart and vocabulary mastery KPIs.* |

| Code Comment Hover Dictionary |
|:---:|
| ![Hover Vocabulary Lookup](media/screenshots/hover-lookup.png) |
| *Hover or select any word in your code to view definitions and play audio.* |

---

## 🚀 Key Features

### 1. 🎴 Native Flashcard Practice
- **Clean 3-Line Vertical Hierarchy**:
  1. **Word Title** in bold typography.
  2. **How to Spell / Phonetic Pronunciation** badge (e.g. `/'eɪkər/`).
  3. **Audio Controls Row**: Play button with slow-motion speed controller (`1.0x` / `0.8x` / `1.2x`).
- **One-Click & Keyboard-Driven Flip**: Press <kbd>Space</kbd> to reveal meaning, high-resolution illustration, example sentence, and example audio.
- **SM-2 Spaced Repetition Ratings**: Rate cards using `Again (1)`, `Hard (2)`, `Good (3)`, `Easy (4)` to optimize retention intervals.
- **Custom Session Goals**: Click the word count badge (e.g. `4 / 100`) to set custom limits or pick presets (`10`, `20`, `30`, `50`, `100` words).
- **Flexible Exit**: Finish study sessions anytime with the **End** button to view session statistics.

### 2. ⌨️ Listen & Type Exam (Spelling Practice)
- **Audio-First Testing**: Hear the native pronunciation and type the word you hear.
- **Adjustable Speed**: Slow down fast or difficult pronunciations to `0.8x` for precision listening.
- **Context Hints**: Toggle contextual sentence hints with the target word blanked out (e.g. *"The students **_____** they have too much homework"*).
- **Instant Validation**:
  - **Correct**: Input glows green (`#98c379`), reveals definition and picture, advances with <kbd>Enter</kbd>.
  - **Incorrect**: Highlights in red (`#e06c75`) with side-by-side letter comparisons (*"You typed: agre | Correct: agree"*).
- **Spaced Repetition Integration**: Automatically feeds exam results back into your review queue.

### 3. 📦 Leitner Box Review Menu
- Dedicated **Leitner** navigation tab organizing words into 5 memory retention stages:
  - **Box 1**: Every day (New & difficult words)
  - **Box 2**: Every 2 days
  - **Box 3**: Every 4 days
  - **Box 4**: Every 7 days
  - **Box 5**: Every 14 days (Mastered long-term vocabulary)
- Direct **"Practice Box X"** buttons to target weak spots.

### 4. 📊 Shadcn/UI Style Analytics
- **KPI Metrics**: Total Vocabulary count, Mastered Words percentage, Retention Rate, and Day Streak.
- **7-Day Review Activity Bar Chart**: Visual column chart displaying cards reviewed per day.
- **Leitner Progression Trackers**: Progress meters showing vocabulary advancing across boxes.

### 5. 💡 Developer Flow Integrations
- **Word of the Day in Status Bar**: Rotates vocabulary in the bottom bar with instant audio playback on click.
- **Hover & Selection Vocabulary Lookup**: Select any word in documentation or code comments and press <kbd>Cmd+Alt+D</kbd> (or hover) to see definitions, phonetics, and native audio.
- **Pomodoro Mode**: 25 minutes of coding followed by a 5-minute Anki vocabulary study break.
- **Collapsible Sidebar Tree**: Browse your loaded books and Leitner boxes directly in the primary activity bar.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Context | Action |
|:---|:---|:---|
| <kbd>Cmd+Alt+A</kbd> / <kbd>Ctrl+Alt+A</kbd> | Global | Open Anki Flashcard Study Panel |
| <kbd>Cmd+Alt+D</kbd> / <kbd>Ctrl+Alt+D</kbd> | Editor | Look up selected word in vocabulary |
| <kbd>Space</kbd> | Practice | Flip card / Rate "Good" |
| <kbd>1</kbd> &bull; <kbd>2</kbd> &bull; <kbd>3</kbd> &bull; <kbd>4</kbd> | Practice (Revealed) | Rate Again, Hard, Good, Easy |
| <kbd>R</kbd> | Practice | Replay native pronunciation audio |
| <kbd>Enter</kbd> | Type Exam | Submit answer / Advance to next word |
| <kbd>Ctrl+R</kbd> | Type Exam | Replay audio prompt |
| <kbd>Esc</kbd> | Global | Skip card or end study session |

---

## 📦 Getting Started

### 1. Install Extension
Install via the VS Code Marketplace by searching for **"Anki Vocab"** or running:
```bash
ext install ehsanshahbazi.vscode-anki
```

### 2. Open Study Panel
Open the Command Palette (<kbd>Cmd+Shift+P</kbd> / <kbd>Ctrl+Shift+P</kbd>) and run:
```text
Anki: Start Study Session
```
*(or press <kbd>Cmd+Alt+A</kbd> / click the Anki icon in your Activity Bar)*.

### 3. Load Your Vocabulary
- Click **Load 4000 Essential English Words** to immediately begin studying with the included collection.
- Or drag & drop any `.apkg` / `.colpkg` package directly into the study window!

> [!TIP]
> **Download 4000 Essential English Words Deck:**
> You can download the complete **4000 Essential English Words (all books, en-en)** deck with native audio pronunciations and illustrations directly from AnkiWeb:
> 🔗 **[Download on AnkiWeb (Deck #1104981491)](https://ankiweb.net/shared/info/1104981491)**

---

## 🛠️ Development & Building

```bash
# 1. Clone repository
git clone https://github.com/EhsanShahbazii/Anki-Vocab.git
cd Anki-Vocab

# 2. Install dependencies
npm install

# 3. Build extension
npm run build

# 4. Run test suite
npm run test:parser
```

Press <kbd>F5</kbd> in VS Code to launch the Extension Development Host.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Crafted with care by <a href="https://github.com/EhsanShahbazii"><b>EhsanShahbazii</b></a>
</p>
