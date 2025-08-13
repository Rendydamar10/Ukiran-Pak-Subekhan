/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './node_modules/flowbite/**/*.js', './main.js'],
  theme: {
    extend: {
      colors: {
        'main-color': '#99582A',
        'btn-main': '#6F1D1B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
