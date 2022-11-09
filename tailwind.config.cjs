/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['0.87rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '2rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1.2'],
    },
    fontFamily: {
      'sans': ['Permanent', 'sans-serif'],
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