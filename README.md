# 🚀 CodeMaster Quiz — Test Your Coding Skills

> **Tagline:** *"Learn Code. Test Your Skills. Level Up!"*

CodeMaster Quiz is a modern, responsive, developer-focused programming quiz platform built with **React**, **HTML5**, **Vanilla CSS**, and **JavaScript**. It features **400+ factual, educational questions** across **20 programming languages and computer science domains**, designed to help students, developers, and programming enthusiasts master core concepts, test debugging skills, and benchmark their technical expertise.

---

## 🌟 Highlights & Key Features

### 1. 20 Dedicated Programming & CS Categories
Each category includes **20 unique, educational questions** distributed across **Easy**, **Medium**, and **Hard** levels:
1. **Java** (JVM, OOP, Collections, Concurrency, Garbage Collection)
2. **Python** (Data types, Comprehensions, Closures, Generators, GIL, Metaprogramming)
3. **HTML** (HTML5 semantics, Accessibility, Forms, Resource hints, DOM dialogs)
4. **CSS** (Flexbox, CSS Grid, Box Model, Specificity, Custom Properties, Stacking contexts)
5. **JavaScript** (ES6+, Closures, Event Loop, Promises, WeakMap, Proxy)
6. **Node.js** (Core modules, Event Loop phases, Streams, Worker Threads, Libuv)
7. **React.js** (Hooks, Reconciliation, Fiber, Concurrent features, State batching)
8. **C** (Pointers, Memory allocation, Preprocessor macros, Struct padding, Bitwise operations)
9. **C++** (RAII, Virtual dispatch, Smart pointers, Move semantics, Templates, SFINAE)
10. **C#** (.NET CLR, LINQ, Value vs Reference types, Pattern matching, Async Tasks)
11. **PHP** (PHP 8 attributes, Fibers, Match expression, Type system, OPcache)
12. **SQL** (Joins, Window functions, Aggregates, ACID transactions, Indexing, CTEs)
13. **TypeScript** (Generics, Type narrowing, Conditional types, Discriminated unions, Satisfies)
14. **Kotlin** (Coroutines, Null safety, Data classes, Flows, Scope functions, Extension methods)
15. **Go** (Goroutines, Channels, Defer/Panic/Recover, Slices, GMP scheduler)
16. **Ruby** (Blocks, Yield, Metaprogramming, Mixins, Symbols, Procs vs Lambdas, YJIT)
17. **Swift** (Optionals, ARC, Value vs Reference types, SwiftUI, Actors, Copy-on-Write)
18. **Data Structures and Algorithms** (Trees, Graphs, Sorting, Big-O, Dynamic Programming, DSU)
19. **Object-Oriented Programming** (Encapsulation, Polymorphism, Abstraction, Inheritance, SOLID design)
20. **Computer Science Fundamentals** (Binary, CPU Architecture, Virtual Memory, OSI Layers, TCP, CAP theorem)

---

### 2. Diverse Question Types
- **Multiple-Choice Questions (MCQ)**
- **Find the Output of Code Snippets** (styled with line numbers and syntax formatting)
- **Identify Syntax Errors and Gotchas**
- **Fill-in-the-Blank Coding Questions**
- **True or False Questions**
- **Match Concepts with Definitions**

---

### 3. Configurable Quiz Experience
- **Difficulty Selection:** Choose between *All Levels*, *Easy*, *Medium*, or *Hard*.
- **Question Length:** Pick *5 Questions* (quick sprint), *10 Questions* (standard), *20 Questions* (deep dive), or *All Available*.
- **Configurable Countdown Timer:** *15s*, *30s*, *60s* per question, or *Untimed* mode with urgent visual and audio pulsation under 5 seconds.
- **Two Distinct Quiz Modes:**
  - **Exam Mode:** Standard timed assessment where answers are locked in and scored at the end.
  - **Instant Practice Mode:** Immediate right/wrong validation after each selection with full educational explanations displayed right away.
- **Shuffle Options:** Independently randomize question sequence and answer choices.
- **Interactive Question Palette:** Jump directly to any question, view answered status, and track bookmarked items.
- **Hint System:** Optional clue drawer that guides the user without spoiling the solution.
- **Session Recovery:** Active quiz progress is preserved in `localStorage` so accidental page refreshes do not disrupt test sessions.

---

### 4. Interactive Results & Deep-Dive Answer Review
- **Animated Circular Score Gauge** and celebration confetti for top performers (`canvas-confetti`).
- **Comprehensive Statistics:** Final percentage, correct count, incorrect count, unanswered count, time taken, and XP points gained.
- **Complete Educational Explanations:** Explanations for every single question explaining why the correct answer is right and why alternatives are wrong.
- **Review Filters:** Filter reviewed questions by *All*, *Incorrect Only*, or *Correct*.
- **1-Click Shareable Summary:** Copy test results directly to the clipboard.

---

### 5. Gamification, Dashboard & Leaderboard
- **XP Progression & Leveling:** Earn XP based on correct answers and quiz completions to unlock higher developer levels.
- **Daily Learning Streak:** Tracks consecutive active days with flame badges 🔥.
- **Daily Coding Quiz:** A fresh, deterministic 5-question sprint each calendar day.
- **20-Language Mastery Meters:** Visual progress bars displaying personal best scores and attempt counts across every category.
- **Achievement Badges:** 10 real unlockable milestones (*Hello World*, *Pythonista Pro*, *Java Master*, *Flawless Victory*, *Speed Demon*, *Quiz Veteran*, etc.).
- **Study Bookmark Bank:** Bookmark challenging questions during any quiz and launch a dedicated practice session of your bookmarked questions with 1 click.
- **Personal Leaderboard & Division Tiers:** Track verified high scores organized into Bronze, Silver, Gold, Platinum, and Diamond divisions.

---

### 6. Design System & Audio
- **Curated Color Palette:** Polished coding-platform aesthetic using Dark Navy (`#0A0E17`), Electric Blue (`#3B82F6`), Violet (`#8B5CF6`), Neon Emerald (`#10B981`), Amber, and Rose.
- **Theme Toggle:** Seamless instant toggle between Dark Navy and Light theme modes.
- **Zero-Dependency Audio Synthesizer:** Real-time Web Audio API sound generator for answer selection, chime on correct answers, error thuds, timer urgency beeps, and fanfare celebrations — no external audio file downloads needed.
- **Keyboard Shortcuts:** Press `[A]`, `[B]`, `[C]`, `[D]` or `[1]`, `[2]`, `[3]`, `[4]` to select answers, and `ArrowRight`/`Enter` to advance.
- **Fully Responsive:** Optimized layouts for smartphones, tablets, laptops, and ultra-wide desktops.

---

## 📁 Project Structure

```
Quiz/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutModal.jsx          # About platform modal
│   │   ├── CategoryIcon.jsx        # Dynamic Lucide icon resolver
│   │   ├── ContactModal.jsx        # Validated feedback & contact form
│   │   ├── DailyQuizBanner.jsx     # Daily 5-question coding challenge banner
│   │   ├── Dashboard.jsx           # User profile, mastery meters, badges, history
│   │   ├── Footer.jsx              # Navigation links, social links, resources
│   │   ├── Hero.jsx                # Landing page hero, popular quizzes, stats
│   │   ├── LanguageCard.jsx        # Individual language category card
│   │   ├── LanguageList.jsx        # Search bar, group filters, category grid
│   │   ├── Leaderboard.jsx         # Tier divisions, verified personal high scores
│   │   ├── Navbar.jsx              # Brand, nav links, streak/XP pill, audio & theme toggles
│   │   ├── PrivacyModal.jsx        # Privacy policy modal
│   │   ├── ProgressBar.jsx         # Question counter, linear fill, dot navigator
│   │   ├── QuestionCard.jsx        # Code block, options, keyboard keycaps, hints
│   │   ├── QuizConfigModal.jsx     # Difficulty, timer, question count configurator
│   │   ├── QuizPage.jsx            # Active quiz state machine, timer, shortcuts
│   │   ├── ResultsPage.jsx         # Score gauge, metric breakdown, answer review
│   │   ├── SettingsModal.jsx       # Theme, sound FX, default timer, reset data
│   │   └── Timer.jsx               # SVG circular countdown timer with warnings
│   │
│   ├── data/
│   │   ├── categories.js           # 20 Category configurations & filter groups
│   │   ├── achievements.js         # 10 Milestone achievements and check criteria
│   │   └── questions/              # 400 Educational questions (20 per language)
│   │       ├── java.js
│   │       ├── python.js
│   │       ├── html.js
│   │       ├── css.js
│   │       ├── javascript.js
│   │       ├── nodejs.js
│   │       ├── react.js
│   │       ├── c.js
│   │       ├── cpp.js
│   │       ├── csharp.js
│   │       ├── php.js
│   │       ├── sql.js
│   │       ├── typescript.js
│   │       ├── kotlin.js
│   │       ├── go.js
│   │       ├── ruby.js
│   │       ├── swift.js
│   │       ├── dsa.js
│   │       ├── oop.js
│   │       ├── csfundamentals.js
│   │       └── index.js            # Aggregator, shuffle, daily picker, lookups
│   │
│   ├── utils/
│   │   ├── sound.js                # Web Audio API sound synthesizers & mute state
│   │   └── storage.js              # LocalStorage manager for profile, history, badges
│   │
│   ├── App.css                     # Complete responsive stylesheet & design system
│   ├── App.jsx                     # Root application coordinator
│   ├── index.css                   # Global CSS tokens, typography, animations
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML5 template with Google Fonts
├── package.json
└── vite.config.js
```

---

## 🛠️ Installation & Local Setup

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### 1. Clone or Open the Workspace
```bash
cd /Users/santh/Desktop/Quiz
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🚢 Building & Deployment

### Build Production Bundle
To create an optimized production build:
```bash
npm run build
```
The compiled assets will be output to the `dist/` folder.

### Preview Production Build Locally
```bash
npm run preview
```

### Deployment Targets
The output inside `dist/` is completely static and can be deployed directly to:
- **Vercel** (`vercel deploy`)
- **Netlify** (`netlify deploy --dir=dist`)
- **GitHub Pages**
- **Cloudflare Pages**
- Any static web server (Nginx, Apache, Caddy, AWS S3)

---

## ⌨️ Keyboard Shortcuts Reference

| Key | Action |
| :--- | :--- |
| `A` or `1` | Select Choice A |
| `B` or `2` | Select Choice B |
| `C` or `3` | Select Choice C |
| `D` or `4` | Select Choice D |
| `→` (Right Arrow) or `Enter` | Proceed to Next Question |
| `←` (Left Arrow) | Return to Previous Question |

---

## 📄 License & Credits
Created for students, educators, and software engineers worldwide. Free to learn, test skills, and level up!
