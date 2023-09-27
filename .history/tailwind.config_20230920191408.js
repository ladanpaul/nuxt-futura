module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
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
