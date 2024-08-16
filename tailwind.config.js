/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Fira: ["Fira","monospace"]
    },
    colors:{
      transparent:"transparent",
      "bg": "#1E1E1E",
      "primary": "#C778DD",
      "gray": "#ABB2BF",
      "white": "#FFFFFF",
      "black": "#000000"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

