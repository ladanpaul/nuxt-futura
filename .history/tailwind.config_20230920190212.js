/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#242240",
        "sky-blue": "#66A6FF",
        "light-sky": "#00F2FE",
        turquoise: "#00CDAC",
        "turquoise-10": "#8DDAD5",
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
