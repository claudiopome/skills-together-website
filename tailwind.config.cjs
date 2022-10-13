/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '6xl': ['3.75rem', '1.2'],
    },
    fontFamily: {
      'sans': ['Helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue': '#006dff',
        'yellow': '#fed000',
        'light-gray': '#ebeaee',
        'dark-gray': '#646363',
      }
    }
  },
  plugins: [],
}