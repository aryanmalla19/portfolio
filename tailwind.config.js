/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#264446",
        orange: "#FF914D",
        villa: "#EFEEE5",
        hariyo:'#6CE5B1',
      },
      scale: {
        '-100': '-1',
      }
    },
  },
  plugins: [],
}