/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          "author-light": ["Author-Light", "sans"],
          "author-regular": ["Author-Regular", "sans"],
          "author-medium": ["Author-Medium", "sans"],
          "author-bold": ["Author-Bold", "sans"],
      },
      colors: {
        wh: {
          DEFAULT: "#ffffff",
          50: "#f8f8f8",
          60: "#ededed"
        },
        bl: {
          DEFAULT: "#222222",
          50: "#030303",
          60: "#101010"
        }
      }
    }
  }
};