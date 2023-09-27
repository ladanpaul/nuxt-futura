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
        "65px": "4.0625rem",
      },
      colors: {
        black: "#000",
      },
      opacity: {
        "04": "0.04",
      },
      zIndex: {
        1: "1",
      },
      lineHeight: {
        "46px": "2.875rem",
        "60px": "3.75rem",
      },
    },
  },
  plugins: [],
};
