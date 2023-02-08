/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
