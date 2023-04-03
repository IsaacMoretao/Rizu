/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'transparentBlack': '#0000008c',
        'transparentWhite': '#ffffff8c',
        'vinho': '#3e2c44',
        'colorTxt': '#ffec8f'
      },
      
    },
  },
  plugins: [],
}