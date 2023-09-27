<!-- Please remove this file from your project -->
<template>
  <div class="p-5 text-4xl font-bold">{{ test }}</div>
</template>

<script>
import useStorage from "../plugins/storage";
export default {
  name: "NuxtTutorial",
  data: () => ({
    test: "Hello I am test",
  }),
  methods: {
    changeTest() {
      this.$router.push({ name: "Test" });
    },
  },
  mounted() {
    console.log("useStorage -> ", useStorage);
  },
};
</script>
