/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
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
      maxWidth: {
        "sm-block": "420px",
        "md-block": "684px",
        block: "1170px",
        "100px": "6.25rem",
        "215px": "13.4375rem",
        "327px": "20.4375rem",
        "332px": "20.75rem",
        "270px": "16.875rem",
        "370px": "23.125rem",
        "570px": "35.625rem",
      },
      maxHeight: {
        "250px": "15.625rem",
      },
      width: {
        "970px": "60.625rem",
        "900px": "56.25rem",
        "770px": "48.125rem",
        "600px": "37.5rem",
        "680px": "42.5rem",
        "620px": "38.75rem",
        "570px": "35.625rem",
        "550px": "34.375rem",
        "500px": "31.25rem",
        "497px": "31.0625rem",
        "475px": "29.6875rem",
        "470px": "29.375rem",
        "480px": "30rem",
        "442px": "27.625rem",
        "412px": "25.75rem",
        "408px": "25.5rem",
        "380px": "23.75rem",
        "332px": "20.75rem",
        "327px": "20.4375rem",
        "325px": "20.3125rem",
        "370px": "23.125rem",
        "373px": "23.3125rem",
        "385px": "24.0625rem",
        "390px": "24.375rem",
        "300px": "18.75rem",
        "290px": "18.125rem",
        "270px": "16.875rem",
        "272px": "17rem",
        "287px": "17.9375rem",
        "267px": "16.6875rem",
        "205px": "12.8125rem",
        "235px": "14.6875rem",
        "200px": "12.5rem",
        "210px": "13.125rem",
        "250px": "15.625rem",
        "260px": "16.25rem",
        "164px": "10.25rem",
        "196px": "12.25rem",
        "190px": "11.875rem",
        "180px": "11.25rem",
        "140px": "8.75rem",
        "142px": "8.875rem",
        "129px": "8.0625rem",
        "150px": "9.375rem",
        "152px": "9.5rem",
        "158px": "9.875rem",
        "162px": "10.125rem",
        "186px": "11.625rem",
        "133px": "8.3125rem",
        "120px": "7.5rem",
        "122px": "7.625rem",
        "123px": "7.6875rem",
        "127px": "7.9375rem",
        "144px": "9rem",
        "145px": "9.0625rem",
        "106px": "6.625rem",
        "100px": "6.25rem",
        "95px": "5.9375rem",
        "94px": "5.875rem",
        "93px": "5.8125rem",
        "92px": "5.75rem",
        "90px": "5.625rem",
        "88px": "5.5rem",
        "87px": "5.4375rem",
        "85px": "5.3125rem",
        "84px": "5.25rem",
        "82px": "5.125rem",
        "78px": "4.875rem",
        "76px": "4.75rem",
        "75px": "4.6875rem",
        "70px": "4.375rem",
        "69px": "4.3125rem",
        "65px": "4.0625rem",
        "53px": "3.3125rem",
        "52px": "3.25rem",
        "50px": "3.125rem",
        "49px": "3.0625rem",
        "45px": "2.8125rem",
        "43px": "2.6875rem",
        "42px": "2.625rem",
        "30px": "1.875rem",
        "31px": "1.9375rem",
        "34px": "2.125rem",
        "37px": "2.3125rem",
        "39px": "2.4375rem",
        "26px": "1.625rem",
        "25px": "1.5625rem",
        "23px": "1.4375rem",
        "21px": "1.3125rem",
        "19px": "1.1875rem",
        "18px": "1.125rem",
        "17px": "1.0625rem",
        "10px": "0.625rem",
        "11px": "0.6875rem",
        "13px": "0.8125rem",
        "15px": "0.9375rem",
        "7px": "0.4375rem",
        "5px": "0.3125rem",
        "30%": "30%",
        "40%": "40%",
        "48%": "48%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      minHeight: {
        "73px": "4.5625rem",
        "382px": "23.875rem",
        "385px": "24.0625rem",
        "500px": "31.25rem",
        inherit: "inherit",
      },
      minWidth: {
        "127px": "7.9375rem",
        "100vw": "100vw",
      },
      height: {
        "5px": "0.3125rem",
        "7px": "0.4375rem",
        "9px": "0.5625rem",
        "11px": "0.6875rem",
        "13px": "0.8125rem",
        "15px": "0.9375rem",
        "90vh": "90vh",
        "17px": "1.0625rem",
        "18px": "1.125rem",
        "19px": "1.1875rem",
        "21px": "1.3125rem",
        "23px": "1.4375rem",
        "25px": "1.5625rem",
        "26px": "1.625rem",
        "29px": "1.8125rem",
        "30px": "1.875rem",
        "31px": "1.9375rem",
        "34px": "2.125rem",
        "38px": "2.375rem",
        "39px": "2.4375rem",
        "42px": "2.625rem",
        "43px": "2.6875rem",
        "47px": "2.9375rem",
        "50px": "3.125rem",
        "52px": "3.25rem",
        "53px": "3.3125rem",
        "54px": "3.375rem",
        "59px": "3.6875rem",
        "60px": "3.75rem",
        "66px": "4.125rem",
        "69px": "4.3125rem",
        "70px": "4.375rem",
        "73px": "4.5625rem",
        "84px": "5.25rem",
        "89px": "5.5625rem",
        "90px": "5.625rem",
        "94px": "6.27rem",
        "100px": "6.25rem",
        "108px": "6.75rem",
        "120px": "7.5rem",
        "129px": "8.0625rem",
        "143px": "8.9375rem",
        "145px": "9.0625rem",
        "150px": "9.375rem",
        "154px": "9.625rem",
        "155px": "9.6875rem",
        "156px": "9.75rem",
        "157px": "9.8125rem",
        "159px": "9.9375rem",
        "168px": "10.5rem",
        "180px": "11.25rem",
        "190px": "11.875rem",
        "200px": "12.5rem",
        "215px": "13.4375rem",
        "220px": "13.75rem",
        "228px": "14.25rem",
        "242px": "15.125rem",
        "248px": "15.5rem",
        "250px": "15.625rem",
        "255px": "15.9375rem",
        "260px": "16.25rem",
        "280px": "17.5rem",
        "290px": "18.125rem",
        "363px": "22.6875rem",
        "302px": "18.875rem",
        "315px": "19.6875rem",
        "327px": "20.4375rem",
        "326px": "20.375rem",
        "334px": "20.875rem",
        "347px": "21.6875rem",
        "348px": "21.75rem",
        "380px": "23.75rem",
        "287px": "17.9375rem",
        "410px": "25.625rem",
        "455px": "28.4375rem",
        "475px": "29.6875rem",
        "480px": "30rem",
        "500px": "31.25rem",
        "502px": "31.375rem",
        "504px": "31.5rem",
        "574px": "35.875rem",
        "600px": "37.5rem",
        "750px": "46.875rem",
        "790px": "49.375rem",
        "860px": "53.75rem",
        "980px": "61.25rem",
        "950px": "59.375rem",
        "85%": "85%",
        "30vh": "30vh",
        "60vh": "60vh",
        "70vh": "70vh",
        inherit: "inherit",
        fit: "fit-content",
      },
      spacing: {
        "2px": "0.125rem",
        "3px": "0.1875rem",
        "5px": "0.3125rem",
        "6px": "0.375rem",
        "7px": "0.4375rem",
        "9px": "0.5625rem",
        "13px": "0.8125rem",
        "15px": "0.9375rem",
        "15.5px": "0.96875rem",
        "30px": "1.875rem",
        "37px": "2.3125rem",
        "11px": "0.687rem",
        "12.5px": "0.78125rem",
        "15px": "0.937rem",
        "17px": "1.0625rem",
        "18px": "1.125rem",
        "19px": "1.1875rem",
        "21px": "1.3125rem",
        "22px": "1.375rem",
        "23px": "1.4375rem",
        "25px": "1.5625rem",
        "27px": "1.6875rem",
        "26px": "1.625rem",
        "33px": "2.0625rem",
        "31px": "1.9375rem",
        "35px": "2.1875rem",
        "39px": "2.4375rem",
        "43px": "2.6875rem",
        "45px": "2.8125rem",
        "46px": "2.875rem",
        "50px": "3.125rem",
        "52px": "3.25rem",
        "60px": "3.75rem",
        "64px": "4rem",
        "66px": "4.125rem",
        "68px": "4.25rem",
        "70px": "4.375rem",
        "72px": "4.5rem",
        "75px": "4.6875rem",
        "76px": "4.75rem",
        "80px": "5rem",
        "85px": "5.3125rem",
        "90px": "5.625rem",
        "92px": "5.75rem",
        "95px": "5.9375rem",
        "100px": "6.25rem",
        "109px": "6.8125rem",
        "110px": "6.875rem",
        "116px": "7.25rem",
        "118px": "7.375rem",
        "127px": "7.9375rem",
        "130px": "8.125rem",
        "135px": "8.4375rem",
        "143px": "8.9375rem",
        "145px": "9.0625rem",
        "150px": "9.375rem",
        "157px": "9.8125rem",
        "170px": "10.625rem",
        "180px": "11.25rem",
        "190px": "11.875rem",
        "200px": "12.5rem",
        "210px": "13.125rem",
        "230px": "14.375rem",
        "250px": "15.625rem",
        "274px": "17.125rem",
        "300px": "18.75rem",
        "310px": "19.375rem",
        "370px": "23.125rem",
        "430px": "26.875rem",
        "520px": "32.5rem",
        "600px": "37.5rem",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "60%": "60%",
        "65%": "65%",
        "9vw": "9vw",
        "11vw": "11vw",
        "22vw": "22vw",
        "30vh": "30vh",
        "120%": "120%",
        "200%": "200%",
      },
      colors: {
        "white-10": "#FEFEFE",
        "dark-blue": "#242240",
        "dark-blue-10": "#0A2540",
        "dark-blue-20": "#1A1A1A",
        "dark-blue-30": "#716F83",
        "dark-blue-40": "#091E3A",
        "dark-blue-50": "#332240",
        "dark-blue-60": "#11053B",
        green: "#3DC33D",
        gray: "#F0F0F0",
        "gray-5": "#F4F4F4",
        "gray-6": "#F6F6F6",
        "gray-10": "#B3B3B3",
        "gray-20": "#F1F1F1",
        "gray-30": "#F2F3F5",
        "gray-40": "#B8B8B8",
        "gray-50": "#eeeff3",
        "gray-60": "#DDDDDD",
        "gray-80": "#E3E3E3",
        "gray-90": "#D9D9D9",
        "gray-100": "#7c7b8d",
        "gray-110": "#BEBEBE",
        "gray-120": "#3c3955",
        "light-gray": "#F8F8F8",
        "light-blue": "#21d4fd",
        "light-blue-10": "#C8DAF1",
        "light-blue-20": "#8EB8EE",
        "blue-10": "#766EFE",
        "blue-30": "#0351C1",
        "blue-40": "#b721ff",
        "blue-50": "#2575FC",
        "blue-60": "#2F80ED",
        "blue-70": "#2D9EE0",
        "blue-80": "#3C57D2",
        "blue-90": "#0C64DB",
        "blue-100": "#2A7DF1",
        "midnight-blue": "#1E0B63",
        smoky: "#5E5B75",
        bermuda: "#80D0C7",
        orient: "#13547A",
        coral: "#FF8461",
        "coral-10": "#FDA085",
        red: "#D80027",
        orange: "#F97316",
        "orange-10": "#F6D365",
        "orange-20": "#FF1361",
        indigo: "#667EEA",
        iris: "#5753C9",
        "iris-10": "#6E7FF3",
        violet: "#764BA2",
        "violet-10": "#231557",
        "violet-20": "#3D4E81",
        "violet-30": "#167ED5",
        purple: "#44107A",
        "purple-10": "#6A11CB",
        sky: "#4FACFE",
        "sky-10": "#89b7f7",
        "sky-20": "#89F7FE",
        "sky-30": "#E6E5FF",
        "sky-blue": "#66A6FF",
        "light-sky": "#00F2FE",
        turquoise: "#00CDAC",
        "turquoise-10": "#8DDAD5",
        inherit: "inherit",
      },
      fontSize: {
        "5px": "0.3125rem",
        "6px": "0.375rem",
        "7px": "0.4375rem",
        "8px": "0.5rem",
        "9px": "0.5625rem",
        "10px": "0.625rem",
        "11px": "0.6875rem",
        "13px": "0.8125rem",
        "15px": "0.9375rem",
        "23px": "1.4375rem",
        "26px": "1.625rem",
        "33px": "2.0625rem",
        "46px": "2.875rem",
        "52px": "3.25rem",
        "58px": "3.625rem",
        "64px": "4rem",
        "80px": "5rem",
        "6.5xl": "4rem",
        "100px": "6.25rem",
        "150px": "9.375rem",
      },
      lineHeight: {
        "7px": "0.4375rem",
        "8px": "0.5rem",
        "9px": "0.5625rem",
        "10px": "0.625rem",
        "11px": "0.6875rem",
        "13px": "0.8125rem",
        "14px": "0.875rem",
        "17px": "1.0625rem",
        "18px": "1.125rem",
        "19px": "1.1875rem",
        "21px": "1.3125rem",
        "22px": "1.375rem",
        "23px": "1.4375rem",
        "26px": "1.625rem",
        "27px": "1.6875rem",
        "30px": "1.875rem",
        "34px": "2.125rem",
        "35px": "2.1875rem",
        "43px": "2.6875rem",
        "45px": "2.8125rem",
        "46px": "2.875rem",
        "60px": "3.75rem",
        "80px": "5rem",
        "130%": "130%",
      },
      rotate: {
        11: "11deg",
        36.8: "36.8deg",
        1.33: "1.33deg",
        40: "40deg",
      },
      blur: {
        "100px": "6.25rem",
        "250px": "16.666666666666668rem",
        "5xl": "9.375rem",
        "6xl": "15.625rem",
      },
      skew: {
        5: "5deg",
        9: "9deg",
        11: "11deg",
      },
      scale: {
        170: "1.7",
        150: "1.5",
        200: "2.0",
        220: "2.2",
      },
      borderWidth: {
        1.5: "0.09375rem",
        "2px": "0.125rem",
        "3px": "0.1875rem",
        "30px": "1.875rem",
        "50px": "3.125rem",
        "100px": "6.25rem",
        "150px": "9.375rem",
        "200px": "12.5rem",
        "250px": "15.625rem",
        "300px": "18.75rem",
      },
      borderRadius: {
        "5px": "0.3125rem",
        "7px": "0.4375rem",
        "9px": "0.5625rem",
        "10px": "0.625rem",
        "11px": "0.6875rem",
        "18px": "1.125rem",
        "17px": "1.0625rem",
        "20px": "1.25rem",
        "30px": "1.875rem",
        "1/2": "50%",
      },
      backdropBlur: {
        "10px": "0.625rem",
        "20px": "1.25rem",
        "25px": "1.5625rem",
        "30px": "1.875rem",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        max: "2147483647",
      },
      opacity: {
        "03": "0.03",
        "07": "0.07",
        "015": "0.15",
        25: "0.25",
        35: "0.35",
      },
      transformOrigin: {
        100: "100%",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
