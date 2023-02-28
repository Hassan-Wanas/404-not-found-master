/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        Gray1: '#333333',
        Gray2: '#4f4f4f',
        White1: '#BDBDBD'
      },
    },
    fontFamily: {
      Inconsolata: 'Inconsolata',
      SpaceMono: 'Space Mono',
      Montserrat: 'Montserrat',
    }
  },
  plugins: [],
}
