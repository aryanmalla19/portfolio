/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        main: "#264446",
        orange: "#FD562A",
        villa: "#EFEEE5",
        hariyo:'#6CE5B1',
      },
      fontFamily:{
        poppins:['poppins','sans-serif'],
        garamond:['garamond','sans-serif'],
      },
      scale: {
        '-100': '-1',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}