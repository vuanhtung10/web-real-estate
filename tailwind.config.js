module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        SFProDisplay: 'SFProDisplay, Helvetica, Arial, sans-serif',
        BeVietnam: 'BeVietnam',
        Anton: 'Anton',
        Circular: 'Circular',
        PlayfairDisplay: 'PlayfairDisplay',
      },
      colors: {
        primary: '#B60158',
        secondary: '#0d1734',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
