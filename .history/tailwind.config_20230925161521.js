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
        neon: "#FF8D24",
        pastelGreen: "#00CA14",
      },
      opacity: {
        "04": "0.04",
      },
      zIndex: {
        1: "1",
      },
      lineHeight: {
        "57px": "3.6rem",
      },
    },
  },
  plugins: [],
};
