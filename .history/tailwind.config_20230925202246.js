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
      spacing: {
        "65px": "4.0625rem",
      },
      colors: {
        white: "#fff",
        black: "#000",
        neon: "#FF8D24",
        pastelGreen: "#00CA14",
        grey: "#808080",
        lightGrey100: "#CDCDCD",
        lightGrey200: "#D2D2D2",
        nobel: "#999999",
      },
      opacity: {
        "04": "0.04",
      },
      zIndex: {
        1: "1",
      },
      lineHeight: {
        "19px": "1.2rem",
        "22px": "1.4rem",
        "57px": "3.6rem",
      },
    },
  },
  plugins: [],
};
