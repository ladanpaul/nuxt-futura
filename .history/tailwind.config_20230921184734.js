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
        sm: "370px",
        "min-sm": "440px",
        "min-md": "680px",
        md: "744px",
        "max-md": "840px",
        lg: "1170px",
        xl: "1275px",
        // sm: '375',
        // md: '744px',
        // lg: '1170px',
      },
      colors: {},
    },
  },
  plugins: [],
};
