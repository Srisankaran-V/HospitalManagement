/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './index.html',          // Include your root index.html
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/React files in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridAutoColumns: {
        '70/30': '70% 30%', // Custom grid configuration (fixed typo from 28%)
      },
    },
  },
  plugins: [
    scrollbar, // Use the imported plugin
  ],
};

