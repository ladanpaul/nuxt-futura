<template>
  <div
    class="flex mt-8 relative py-1 pl-4 pr-3 h-[46px] border border-linkWater rounded-lg"
  >
    <span class="absolute bg-white px-1.5 left-3 -top-2 text-xs font-bold">{{
      label
    }}</span>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "UiInput",
  emits: ["blur", "input", "keypress"],
  props: {},
  data: () => ({}),
  methods: {},
};
</script>
