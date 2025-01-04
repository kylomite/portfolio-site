/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/App.tsx",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        text: {
          DEFAULT: "var(--color-text-light)",
          dark: "var(--color-text-dark)",
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'inner-xl': 'inset 0 6px 12px rgba(0, 0, 0, 0.8), inset 0 10px 20px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}

