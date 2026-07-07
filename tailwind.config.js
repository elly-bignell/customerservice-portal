/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ff7043',
      },
      letterSpacing: {
        tighter2: '-0.05em',
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
}
