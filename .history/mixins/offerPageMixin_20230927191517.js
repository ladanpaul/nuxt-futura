// import {
//   LogoDefaultIcon,
//   StarIcon,
//   LockIcon,
//   FireIcon,
//   PayPalIcon,
//   GooglePay,
//   CreditCard,
// } from "@/icons";

// const OPPORTUNITIES = [
//   'Exclusive access to <span class="text-neon font-bold">350+</span> learning programs',
//   "Personalized course plan",
//   "Comfy learning schedule made by you",
//   '<span class="text-neon font-bold">24/7</span> tutor support in a secure chat",
//   "Lifetime access to materials",
// ];

const OPPORTUNITIES = [
  'Exclusive access to <span class="text-neon font-bold">350+</span> learning programs',
  "Personalized course plan",
  "Comfy learning schedule made by you",
  `<span class="text-neon font-bold">24/7</span> tutor support in a secure chat`,
  "Lifetime access to materials",
];

const MONTHS = Array.from({ length: 12 }, (_, monthIndex) => {
  return new Date(2023, monthIndex, 1).toLocaleDateString("en-US", {
    month: "long",
  });
});

const YEARS = ["2010", "2011", "2012", "2013", "2014", "2015"];

// export default {
//   data() {
//     return {
//       selectedYear: "",
//       selectedMonth: "",
//       creditCard: "",
//       cvv: "",
//       opportunities: OPPORTUNITIES,
//       months: MONTHS,
//       years: YEARS,
//       isExpiredTimer: false,
//     };
//   },
//   computed: {
//     isValid() {
//       const CREDIT_CARD_LENGTH = 19; // with 16 + 3 space
//       const CVV_LENGTH = 3;
//       return (
//         this.selectedYear &&
//         this.selectedMonth &&
//         this.creditCard &&
//         this.creditCard.length === CREDIT_CARD_LENGTH &&
//         this.cvv &&
//         this.cvv.length === CVV_LENGTH
//       ); // TODO add vuelidate for future
//     },
//   },
//   methods: {
//     togglePopup() {
//       this.$refs.popup.togglePopup();
//     },
//     checkExpiredTimer() {
//       const cookiesTime = this.$cookies.get("planet_timer");
//       if (cookiesTime === 0) {
//         this.isExpiredTimer = true;
//       }
//     },
//   },
//   components: {
//     LogoDefaultIcon,
//     StarIcon,
//     LockIcon,
//     FireIcon,
//     PayPalIcon,
//     GooglePay,
//     CreditCard,
//   },
//   created() {
//     this.checkExpiredTimer();
//   },
// };
