/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        surface: {
          light: '#FAFAF9', // Warm off-white
          muted: '#F5F5F4', // Slightly darker warm gray for alternating sections
        },
        brand: {
          primary: '#D56649', // Main brand color
          secondary: '#3C4948', // Secondary brand color
          'secondary-light': '#4A5857', // Lighter version for hover states
          'secondary-dark': '#2E3736', // Darker version for dark mode
        },
      },
    },
  },
  plugins: [],
}