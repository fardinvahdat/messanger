/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        primary: {
          300: "#50CCE8",
          500: "#6DC1DC",
          600: "#007AFF",
          800: "#0F1C57",
        },
        gray: {
          200: '#EBF0F6',
          300: "#90A4AE",
          400: "#B0BEC5",
          500: "#546E7A",
          700: "#263238",
        },
        error: {
          500: "#DD6A70",
          600: "#FF4C4C",
          700: "#E81B5E",
          800: "#CA1408"
        },
        success: {
          500: "#3FE07C",
          600: "#5AD8C9",
          700: "#2DE09E"
        },
        purple: {
          '500': '#7B5CF5'
        },
        yellow: {
          500: "#FFD000"
        }
      },
    },
  },
  plugins: [],
};
