/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/img/bg.png')",
        "home-moldura": "url('/assets/img/moldura-header.webp')",
        "star-hamburguer": "url('/assets/img/star.webp')",
        "iluminacao": "url('/assets/img/iluminacao.webp')",
      }
    },
  },
  plugins: [],
}