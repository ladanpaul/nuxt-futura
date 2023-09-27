<template>
  <div>
    <component :is="selectedPage" />
  </div>
</template>

<script>
const VARIABLES = {
  var1: "var1",
  var2: "var2",
  test: "test",
};
export default {
  name: "IndexPage",
  data: () => ({
    selectedPage: "",
  }),
  methods: {
    setPage() {
      const page = this.$cookies.get("planet_page");
      console.log("page -> ", page);
      const abTestParam = this.$route.query.abtest;

      if (abTestParam === VARIABLES.var1) {
        this.selectedPage = "OfferPage1";
        return;
      }

      if (abTestParam === VARIABLES.var2) {
        this.selectedPage = "OfferPage2";
        return;
      }

      if (abTestParam === VARIABLES.test) {
        const randomVariant = Math.random() < 0.5 ? "OfferPage1" : "OfferPage2";

        this.$cookies.set("planet_page", randomVariant, {
          maxAge: 10 * 365 * 24 * 60 * 60,
        });

        this.selectedPage = randomVariant;
      } else {
        this.selectedPage = "OfferPage1";
      }
    },
  },
  beforeMount() {
    this.setPage();
    // const page = this.$cookies.get("planet_page");
    // console.log("this.$route.query -> ", this.$route.query);
    // if (page) {
    //   this.selectedPage = page;
    // } else {
    //   this.setPage();
    // }
  },
};
</script>
