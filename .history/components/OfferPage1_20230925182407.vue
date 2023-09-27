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
          <p class="mt-2 w-fit font-semibold text-xl relative text">
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
  color: #999999; /* Сірий колір тексту */
  text-decoration: line-through; /* Зачеркнутий текст */
  background-image: linear-gradient(
    to right,
    transparent 50%,
    #fff 50%
  ); /* Половина тексту - прозора, інша половина - біла */
  background-size: 200% 100%; /* Дві половини фону для анімації */
  background-position: 100%; /* Починаємо з половини фону */
  transition: background-position 0.3s; /* Анімація руху полоски */
}

.text::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  width: 100%;
  height: 2px;
  mix-blend-mode: difference;
  background-color: #666666;
}
</style>
