/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fondo': '#8E2A4E',
        'fondo-celeste': '#32c4ba',
        'texto-celeste': '#09635d',
        'borde-morado': '#8739D0',
        'texto-morado': '#C193EC',
        'fondo-morado': '#291839',
        'texto-vino': '#ff2c55'
      }
    },
  },
  plugins: [],
}

