# 🛠️ Skip Size Selector Redesign – Wewantwaste

This project is a full redesign of the “Choose your skip size” page from [wewantwaste.co.uk](https://wewantwaste.co.uk), preserving its core functionality but delivering a clean, modern, and responsive UI.

---

## 🚀 Live Preview

👉 [Live Demo](https://codesandbox.io/p/github/ahmedelbahri/wewantwaste-redesign)  
👉 [GitHub Repo](https://github.com/ahmedelbahri/wewantwaste-redesign)

---

## 🎯 Project Goal

- **Redesign** the "Choose your skip size" page.
- **Preserve functionality**: skip selection, pricing, etc.
- **Use live data** from: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

---

## 🧠 Approach

### 💻 UI/UX Strategy

- Designed from scratch with **mobile-first** responsiveness
- Clean, modern interface using **Tailwind CSS**
- Clear layout and hierarchy to improve usability
- Optimized for both mobile and desktop users

### ⚙️ Technical Stack

- **React (Vite)** for a fast development setup
- **Tailwind CSS** for utility-first responsive design
- **Tanstack useQuerry**, **Axios** for clean data fetching
- **React Hooks** to manage component state and side-effects
- **Framer Motion** for declarative animations  
- **React Context API** for lightweight global state management (did not feel the need to go for redux)

### 🧩 Architecture

- `App.jsx`: Entry point
- `components/3d-card.jsx`: Core skip display logic
- `components/SkipCard.jsx`: Reusable UI component for each skip
- `services/api.js`: API logic separated from UI
- `styles/`: Global styles (optional override)

---

## 📱 Responsiveness

| Device  | Status |
| ------- | ------ |
| Mobile  | ✅     |
| Tablet  | ✅     |
| Desktop | ✅     |

---

## 📦 Setup Instructions

1. Clone this repo:

```bash
git clone https://github.com/ahmedelbahri/wewantwaste-redesign.git
cd wewantwaste-redesign
```

2. Install dependencies:

```bash
pnpm install
```

3. Run locally:

```bash
pnpm run dev
```

## 🔍 Features

- Dynamically loads skip options from API
- Fully responsive layout
- Modern card-based UI for skip options
- Graceful loading and error states
- Clean, modular codebase

---

## 📩 Contact

For questions or improvements, feel free to reach out or fork the repo.

- email: work@ahmedelbahri.com
