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
      return "OfferPage2";
    },
  },
};
</script>
