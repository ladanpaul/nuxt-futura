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
      const abTestParam = this.$route.query.abtest;
      //  this.$cookies.set("planet_timer", this.currentTime, {
      //   maxAge: 10 * 365 * 24 * 60 * 60,
      // });

      if (abTestParam === "test") {
        const randomVariant = Math.random() < 0.5 ? "OfferPage1" : "OfferPage2";
        console.log("randomVariant", randomVariant);
        // return randomVariant === "OfferPage1" || "OfferPage2";
      } else {
        // return "OfferPage1";
      }
      return "OfferPage1";
    },
  },
};
</script>
