const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Krona One', 'serif'],
    },
    extend: {
      colors: {
        black: '#25292F',
        yellow: '#FAFD5D',
        gray: '#42474F',
        blue: '#62C2BC',
        'red-500': 'oklch(0.67 0.2128 25.46)',
      },
      fontFamily: {
        serif: ['Bebas Neue', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
