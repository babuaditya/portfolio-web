/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        primary: {
          light: '#E96C0F', // Light shade of primary color
          DEFAULT: '#1E90FF', // Default primary color
          dark: '#1C7ED6', // Dark shade of primary color
        },
        secondary:{
          light: '#302A25',
        }
      },
    },
  },
  plugins: [],
}
