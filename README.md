# 🎲 Tenzies

A fun and interactive dice game built with **React 19** and **Vite**. Roll the dice, freeze the ones you like, and try to get all ten dice showing the same number — as fast as possible and in as few rolls as you can!

> **[Live Demo →](https://tenzies-zsayyad-game.netlify.app/)**

---

## ✨ Features

- 🎲 **10 Interactive Dice** — Click any die to freeze (hold) it at its current value between rolls
- 🏆 **Win Detection** — Automatically detects when all dice match and are held
- 🎉 **Confetti Celebration** — Celebratory confetti animation on winning using `react-confetti`
- ⏱️ **Game Timer** — Live timer tracking how long each game takes (MM:SS format)
- 🥇 **Best Time Tracking** — Persists your best time in `localStorage` across sessions
- 🔢 **Roll Counter** — Tracks the number of rolls per game to challenge yourself
- 🎯 **Visual Dice Pips** — Realistic dice faces rendered with CSS Grid pip layouts (not just numbers)
- ♿ **Accessible** — Dice buttons include `aria-label` attributes for screen readers
- 🔄 **New Game Reset** — Seamlessly restart with a fresh set of dice after winning

---

## 🛠️ Tech Stack

| Technology                                                      | Purpose                                                   |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| [React 19](https://react.dev/)                                  | UI library with hooks (`useState`, `useEffect`, `useRef`) |
| [Vite 8](https://vite.dev/)                                     | Lightning-fast build tool & dev server                    |
| [react-confetti](https://www.npmjs.com/package/react-confetti)  | Confetti animation on game win                            |
| [Google Fonts — Karla](https://fonts.google.com/specimen/Karla) | Custom typography                                         |
| [ESLint 9](https://eslint.org/)                                 | Code linting & quality enforcement                        |
| CSS3 Grid                                                       | Dice pip layout system                                    |
| localStorage                                                    | Best time persistence                                     |

---

## 📁 Project Structure

```
Tenzies/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Project assets
│   ├── components/
│   │   └── Die.jsx          # Individual die component with pip rendering
│   ├── App.jsx              # Main game logic & state management
│   ├── formatTime.js        # Utility to format seconds → MM:SS
│   ├── index.css            # Global styles & dice pip grid layout
│   └── main.jsx             # React entry point
├── index.html               # HTML template with Google Fonts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies & scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Zsayaaad/Tenzies.git
   cd Tenzies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Navigate to the URL shown in your terminal (typically `http://localhost:5173`)

### Available Scripts

| Script     | Command           | Description                                  |
| ---------- | ----------------- | -------------------------------------------- |
| Dev Server | `npm run dev`     | Start Vite development server with HMR       |
| Build      | `npm run build`   | Create optimized production build in `dist/` |
| Preview    | `npm run preview` | Preview the production build locally         |
| Lint       | `npm run lint`    | Run ESLint to check code quality             |

---

## 🎮 How to Play

1. **Roll the dice** — Click the **"Roll"** button to roll all 10 dice
2. **Freeze dice** — Click on individual dice to hold them at their current value (they turn green)
3. **Keep rolling** — Unheld dice will re-roll; held dice stay frozen
4. **Match all dice** — Get all 10 dice to show the **same number** and be **held**
5. **Win!** — Confetti explodes 🎉 and your time is recorded
6. **Beat your best** — Click **"New Game"** and try to win faster with fewer rolls!

---

## 🧩 Component Breakdown

### `App.jsx` — Game Controller

The main component managing all game state and logic:

- **State Management** — Uses `useState` for dice array, timer, best time, and roll counter
- **Win Condition** — Derived state checking all dice are held with matching values
- **Timer Logic** — `useEffect` with `setInterval` for a live game clock
- **Best Time Persistence** — Saves to `localStorage` when a new record is set
- **Auto-Focus** — `useRef` to auto-focus the Roll/New Game button for keyboard accessibility

### `Die.jsx` — Die Component

A reusable die component featuring:

- **Visual Pips** — CSS Grid-based dot layout mimicking real dice faces (1–6)
- **Hold Toggle** — Click to freeze/unfreeze (green background when held)
- **Accessibility** — `aria-label` describing the die value for screen readers

### `formatTime.js` — Time Formatter

A utility function that converts raw seconds into a `MM:SS` display string.

---

## 🎨 Styling Highlights

- **Dark outer background** (`#0B2434`) with a clean white game board
- **CSS Grid dice pips** — Each die face uses a 3×3 grid to position dots accurately
- **Held state** — Dice turn green (`#59E391`) when frozen
- **Karla font** — Loaded from Google Fonts for a clean, modern look
- **Purple accent** (`#5035FF`) on the Roll button and best time display
- **Stat bar** — A polished stats panel showing Rolls, Time, and Best Time

---

## 🔑 Key React Concepts Used

- `useState` — Managing dice, timer, roll count, and best time state
- `useEffect` — Running the timer interval and handling win side effects
- `useRef` — Programmatic focus management on the Roll button
- **Lazy state initialization** — `useState(() => ...)` for dice generation and localStorage reads
- **Derived state** — `gameWon` computed from current dice without extra state
- **Conditional rendering** — Confetti component & button text swap on win

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 🙌 Acknowledgments

- Built as part of the [Scrimba React Course](https://scrimba.com/learn/learnreact)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Zsayaaad">Zsayaaad</a>
</p>
