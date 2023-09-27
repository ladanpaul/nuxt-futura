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
      margin: {
        "9px": "0.5625rem",
      },
      colors: {},
      opacity: {
        "04": "0.04",
      },
    },
  },
  plugins: [],
};
