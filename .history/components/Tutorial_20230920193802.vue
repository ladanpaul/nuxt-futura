<!-- Please remove this file from your project -->
<template>
  <div class="p-5 text-4xl font-bold">{{ test }}</div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data: () => ({
    test: "Hello I am test",
  }),
  methods() {
    changeTest: () => {
      this.test = "new test";
    };
  },
  mounted() {
    setTimeout(() => {
      this.changeTest();
    }, 3000);
  },
};
</script>
