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
    },
  },
  plugins: [],
}

