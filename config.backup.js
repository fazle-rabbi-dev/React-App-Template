/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme='dark']"], // Supports dark mode with data attributes
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
        "mono": ["Fira Code", "monospace"], // Adding a custom monospace font
      },
      colors: {
        wh: {
          50: "#f8f8f8",
          60: "#ededed",
          70: "#e0e0e0", // New shades of wh colors
          80: "#d0d0d0",
        },
        bl: {
          50: "#030303",
          60: "#101010",
          70: "#1a1a1a", // New shades of bl colors
          80: "#222222",
        },
        primary: {
          light: "#34D399", // Example of a custom primary color palette
          DEFAULT: "#10B981",
          dark: "#047857",
        },
        secondary: {
          light: "#60A5FA",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
      },
      spacing: {
        '128': '32rem',  // Adding larger spacing
        '144': '36rem',
      },
      zIndex: {
        '-10': '-10',  // Adding negative z-index values
      },
      screens: {
        '2xl': '1536px',  // Adding a custom responsive breakpoint
      },
      keyframes: {  // Adding keyframes for animations
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {  // Custom animations using the keyframes
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],  // Apply display variants for dark mode
      backgroundColor: ['active'],  // Custom variant for background color
      borderColor: ['focus-visible'],  // Custom border color on focus-visible
      opacity: ['disabled'],  // Add opacity control on disabled state
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin for styling forms
    require('@tailwindcss/typography'), // Plugin for better typography
    require('@tailwindcss/aspect-ratio'), // Plugin for aspect ratio utilities
  ],
};