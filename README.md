# Ashley Studio Website Clone

This is a fully responsive, modern **portfolio/studio website clone** of the Ashley demo built using **React**, **Vite**, and **Tailwind CSS v4**. The layout and animations closely follow the original Ashley demo, including bold typography, hero animations, team section, publications, and a sleek footer.

---

## 🚀 Tech Stack

- **React** – Frontend library
- **Vite** – Fast bundler and development server
- **Tailwind CSS v4** – Utility-first CSS framework
- **React Icons** – Icon library
- **SwiperJS** – For responsive sliders

---

## 📁 Folder Structure

```
ashley-clone/
├── public/
├── src/
│   ├── assets/              # Images & assets
│   ├── Components/          # Reusable components like Navbar, Footer
│   ├── App.jsx              # Root component
│   ├── index.css            # Tailwind directives and base styles
│   └── main.jsx             # React root renderer
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS plugins
├── index.html               # Root HTML file
└── package.json
```

---

## 🛠 Tailwind Setup

### Installation

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tailwind Configuration (`tailwind.config.js`)

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
```

### PostCSS Configuration (`postcss.config.js`)

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### CSS File (`src/index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure this CSS file is imported in your `main.jsx` or `App.jsx`:

```js
import './index.css';
```

---

## 🧑‍💻 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/k-hushivijay/ashley-clone.git
cd ashley-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. View in browser

```
http://localhost:5173
```

---

## 🧪 Troubleshooting Tailwind

- Make sure `src/index.css` includes:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Ensure you restart the dev server (`npm run dev`) after Tailwind config changes.

- Double-check your `tailwind.config.js`:
  ```js
  content: ["./index.html", "./src/**/*.{js,jsx}"]
  ```



