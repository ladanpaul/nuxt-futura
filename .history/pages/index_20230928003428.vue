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
      return "OfferPage1";
    },
  },
};
</script>
