<template>
  <div class="relative min-h-screen w-screen">
    <div class="lg:max-w-lg m-auto">
      <header class="py-2">
        <LogoDefaultIcon />
      </header>
      <main class="flex w-fit mx-auto">
        <section class="mt-20 md:w-[473px]">
          <h3 class="text-5xl font-extrabold leading-57px">
            Start your learning <br />
            journey now
          </h3>
          <p class="mt-6 text-2xl font-semibold leading-7">
            Get a
            <span class="font-extrabold"
              >Planet<span class="text-neon">Learn</span></span
            >
            plan to rock <br />
            self-learning
          </p>
          <UiButton theme="black" class="mt-8 w-[273px]" @click="togglePopup"
            >Get my plan</UiButton
          >
        </section>
        <section
          class="payment-card relative ml-6 mt-65px md:w-[474px] p-6 bg-white border borderlightGrey100 rounded-3xl"
        >
          <FireIcon class="absolute -top-14 right-19px" />
          <h3 class="font-extrabold text-2xl leading-7">
            3-day trial for <span class="text-neon">$0.99</span>
          </h3>
          <p class="mt-2 w-fit font-semibold text-xl relative leading-6">
            Then $9.99
          </p>
          <p
            class="mt-0.5 w-fit font-semibold relative line-throw leading-22px"
          >
            $39.99/week
          </p>
          <div class="mt-9">
            <div
              v-for="item in opportunities"
              class="flex items-center first:mt-0 mt-4 leading-1.2"
            >
              <StarIcon class="w-6 h-6 text-neon" />
              <span v-html="item" class="ml-2.5"></span>
            </div>
            <UiButton
              class="mt-6 border border-black/20 w-full font-semibold text-neon"
            >
              <LockIcon class="h-6 w-6" />
              <span class="ml-2">Safe & secure payment</span>
            </UiButton>
          </div>
          <p class="mt-6 text-center text-xs text-grey">
            $0.99 charged today. If you don't cancel at least 24 hours before
            the end of the 3-day trial period, you will automatically be charged
            the full price of $19.99/Month . You can cancel your subscription at
            any time. By continuing, you indicate that you've read and agree to
            our Terms & Conditions, Privacy Policy , Money Back , and
            Subscription Terms .
          </p>
        </section>
      </main>
    </div>
    <img
      src="@/assets/img/offer1-bg.jpg"
      alt="bg-image"
      class="absolute h-full w-full opacity-04 left-0 right-0 top-0 bottom-0 object-cover -z-1"
    />
    <UiPopup ref="popup">
      <div class="w-[368px]">
        <h2 class="text-center font-extrabold text-21px leading-25px">
          Payment method
        </h2>
        <UiButton class="mt-6 w-full" theme="paypal">
          <PayPalIcon />
          <span class="uppercase ml-2.5">buy now</span>
        </UiButton>
        <UiButton class="mt-6 w-full" theme="google">
          <GooglePay class="w-6 h-6" />
          <span class="uppercase ml-2.5">pay</span>
        </UiButton>
        <div class="h-[0.5]">
          <span>OR</span>
        </div>
        <UiInput
          isCardNumber
          placeholder="••••  ••••  ••••  ••••"
          label="Card number"
          class="mt-8"
          v-model="creditCardNumber"
        >
          <template v-slot:icon>
            <CreditCard class="w-8 h-[22px] my-auto" />
          </template>
        </UiInput>
        <div class="flex items-center justify-between flex-nowrap mt-8">
          <UiSelect
            :items="months"
            label="Months"
            class="w-[116px]"
            @select="selectedMonth = $event"
          />
          <UiSelect
            :items="years"
            label="Year"
            class="w-[116px]"
            @select="selectedYear = $event"
          />
          <UiInput
            isCvv
            placeholder="•••"
            label="CVC"
            v-model="cvv"
            class="w-[116px]"
          />
        </div>
        <div class="flex flex-col items-center justify-center mt-10">
          <UiButton theme="black" :disabled="!isValid" class="w-[300px]"
            >Submit</UiButton
          >
          <UiButton
            class="w-[300px] text-black/40 font-semibold opacity-90 hover:opacity-100"
            @click="togglePopup"
            >Close</UiButton
          >
        </div>
      </div>
    </UiPopup>
  </div>
</template>
<script>
import {
  LogoDefaultIcon,
  StarIcon,
  LockIcon,
  FireIcon,
  PayPalIcon,
  GooglePay,
  CreditCard,
} from "@/icons";

const OPPORTUNITIES = [
  'Exclusive access to <span class="text-neon font-bold">350+</span> learning programs',
  "Personalized course plan",
  "Comfy learning schedule made by you",
  '<span class="text-neon font-bold">24/7</span> tutor support in a secure chat',
  "Lifetime access to materials",
];

const MONTHS = Array.from({ length: 12 }, (_, monthIndex) => {
  return new Date(2023, monthIndex, 1).toLocaleDateString("en-US", {
    month: "long",
  });
});

const YEARS = ["2010", "2011", "2012", "2013", "2014", "2015"];

export default {
  name: "OfferPage1",
  components: {
    LogoDefaultIcon,
    StarIcon,
    LockIcon,
    FireIcon,
    PayPalIcon,
    GooglePay,
    CreditCard,
  },
  data: () => ({
    selectedYear: "",
    selectedMonth: "",
    creditCardNumber: "",
    cvv: "",
    opportunities: OPPORTUNITIES,
    months: MONTHS,
    years: YEARS,
  }),
  computed: {
    isValid() {
      return (
        this.selectedYear &&
        this.selectedMonth &&
        this.creditCardNumber &&
        this.cvv
      ); // TODO add vuelidate for future
    },
  },
  methods: {
    togglePopup() {
      this.$refs.popup.togglePopup();
    },
  },
};
</script>
<style lang="scss" scoped>
.payment-card {
  box-shadow: 0px 4px 4px 0px #0000000f;
}

.line-throw {
  position: relative;
  color: #999999;
}

.line-throw::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  width: 100%;
  height: 1px;
  mix-blend-mode: difference;
  background-color: #666666;
}
</style>
