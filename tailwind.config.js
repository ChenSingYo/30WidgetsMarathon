const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: '540px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      roboto: ['roboto', 'SFMono-Regular']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}