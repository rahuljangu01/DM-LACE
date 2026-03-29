/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: "#D4AF37",
          dark: "#8B6E1C",
        }
      }
    },
  },
  plugins: [],
}