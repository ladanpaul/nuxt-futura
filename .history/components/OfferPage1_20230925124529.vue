<template>
  <div class="relative min-h-screen w-screen bg-default">
    <div class="lg:max-w-lg m-auto">
      <header class="py-2">
        <LogoDefault />
      </header>
      <main class="flex">
        <section>
          <h3>Start your learning journey now</h3>
          <p>Get a <span>PlanetLearn</span> plan to rock self-learning</p>
          <UiButton>Get my plan</UiButton>
        </section>
        <section></section>
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
// .bg-default {
//   background-image: url("../assets/img/offer1-bg.jpg");
//   background-size: cover; /* Для object-fit: cover */
//   background-repeat: no-repeat;
//   background-color: rgba(0, 0, 0, 0.04); /* Для прозорості 0.04 */
// }
</style>
