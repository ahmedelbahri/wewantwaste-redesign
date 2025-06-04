# 🛠️ Skip Size Selector Redesign – Wewantwaste

This project is a full redesign of the “Choose your skip size” page from [wewantwaste.co.uk](https://wewantwaste.co.uk), preserving its core functionality but delivering a clean, modern, and responsive UI.

---

## 🚀 Live Preview

👉 [Live Demo](https://your-sandbox-link-here)  
👉 [GitHub Repo](https://github.com/your-username/wewantwaste-redesign)

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
- **Axios** for clean data fetching
- **React Hooks** to manage component state and side-effects

### 🧩 Architecture

- `App.jsx`: Entry point
- `components/SkipSelector.jsx`: Core skip display logic
- `components/SkipCard.jsx`: Reusable UI component for each skip
- `services/api.js`: API logic separated from UI
- `styles/`: Global styles (optional override)

---

## 📱 Responsiveness

| Device | Status |
|--------|--------|
| Mobile | ✅ |
| Tablet | ✅ |
| Desktop | ✅ |

---

## 📦 Setup Instructions

1. Clone this repo:
 ```bash
 git clone https://github.com/your-username/wewantwaste-redesign.git
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

## 🧪 Future Improvements

- Add skip filtering/sorting
- Accessibility enhancements (ARIA, keyboard nav)
- Test coverage (Jest + React Testing Library)

---

## 📩 Contact

For questions or improvements, feel free to reach out or fork the repo.

- email: work@ahmedelbahri.com
