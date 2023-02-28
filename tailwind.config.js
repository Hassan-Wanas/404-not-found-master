/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#333333',
        lightGray: '#4f4f4f',
      },
    },
    fontFamily: {
      Inconsolata: 'Inconsolata',
      SpaceMono: 'Space Mono'
    }
  },
  plugins: [],
}
