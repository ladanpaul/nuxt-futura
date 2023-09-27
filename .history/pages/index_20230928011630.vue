<template>
  <div>
    <component :is="selectedPage" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    selectedPage: "",
  }),
  methods: {
    setPage() {
      const abTestParam = this.$route.query.abtest;

      if (abTestParam === "test") {
        const randomVariant = Math.random() < 0.5 ? "OfferPage1" : "OfferPage2";
        console.log("randomVariant", randomVariant);
        // return randomVariant === "OfferPage1" || "OfferPage2";
        this.$cookies.set("planet_page", randomVariant, {
          maxAge: 10 * 365 * 24 * 60 * 60,
        });
      } else {
        // return "OfferPage1";
      }
      this.selectedPage = "OfferPage1";
    },
  },
  created() {
    const page = this.$cookies.get("planet_page");
    if (page) {
      this.selectedPage = page;
    } else {
      this.setPage();
    }
  },
};
</script>
