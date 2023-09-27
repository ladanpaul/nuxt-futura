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
      screens: {
        sm: "375px",
        md: "744px",
        lg: "1170px",
      },
      maxWidth: {
        lg: "1170px",
      },
      margin: {},
      colors: {
        black: "#000",
      },
      opacity: {
        "04": "0.04",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
