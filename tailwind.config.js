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
          "switzer-light": ["Switzer-Light", "sans"],
          "switzer-regular": ["Switzer-Regular", "sans"],
          "switzer-medium": ["Switzer-Medium", "sans"],
          "switzer-bold": ["Switzer-Bold", "sans"],
      },
      colors: {
        wh: {
          50: "#f8f8f8",
          60: "#ededed"
        },
        bl: {
          50: "#030303",
          60: "#101010"
        }
      }
    }
  }
};