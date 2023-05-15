/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
      },
      transitionDuration: {
        '4000': '4000ms',
      },
    },
  },
  plugins: [],
}
