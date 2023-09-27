<template>
  <div>
    <component :is="offerPagerComponent" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    offerPagerComponent() {
      // Перевірте параметр URL `abtest` і встановіть відповідний компонент
      const abTestParam = this.$route.query.abtest;
      // if (abTestParam === 'test') {
      //   // Рандомно вибираємо варіант (50/50)
      //   const randomVariant = Math.random() < 0.5 ? 'OfferPage1' : 'OfferPage2';
      //   return randomVariant === 'OfferPage1' ? OfferPage1 : OfferPage2;
      // } else {
      //   // За замовчуванням використовуємо один із варіантів (наприклад, OfferPage1)
      //   return OfferPage1;
      // }
      return OfferPage1;
    },
  },
};
</script>
