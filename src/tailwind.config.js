/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
         background:'#141F32',
         body:'#E5E1DF',
         footer:'#161F32',
         smoot:'scroll-behavior: smooth;',
         warna:'#DFDDDB'
      },
      backgroundImage: {
        home: "url('img/home-bg.jpg')",
      },
    },
  },
  plugins: [],
}