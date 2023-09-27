<template>
  <div class="relative min-h-screen w-screen">
    <div class="lg:max-w-lg m-auto">
      <header class="py-2">
        <LogoDefault />
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
          <UiButton class="mt-8 w-[273px]">Get my plan</UiButton>
        </section>
        <section
          class="payment-card ml-6 mt-65px md:w-[474px] p-6 pt-9 bg-white border borderlightGrey100 rounded-3xl"
        >
          <h3 class="font-extrabold text-2xl leading-7">
            3-day trial for <span class="text-neon">$0.99</span>
          </h3>
          <p class="mt-2 w-fit font-semibold text-xl text relative text-nobel">
            Then $39.99/week
          </p>
        </section>
      </main>
    </div>
    <img
      src="@/assets/img/offer1-bg.jpg"
      alt="bg-image"
      class="absolute h-full w-full opacity-04 left-0 right-0 top-0 bottom-0 object-cover -z-1"
    />
  </div>
</template>
<script>
import { LogoDefault } from "@/icons";

export default {
  name: "OfferPage1",
  components: {
    LogoDefault,
  },
};
</script>
<style lang="scss" scoped>
.payment-card {
  box-shadow: 0px 4px 4px 0px #0000000f;
}

.text {
  position: relative;
  color: #000; /* Змінено колір тексту на темно-сірий */
  opacity: 0.5;
}

.text::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  width: 100%;
  height: 1px;
  mix-blend-mode: difference;
  background-color: white; /* Змінено колір фону на білий */
}
</style>
