<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      'transition rounded-xl flex items-center justify-center',
      {
        'border border-1': withBorder,
      },
      buttonTheme,
      size,
    ]"
  >
    <slot />
  </button>
</template>

<script>
const HEIGHT = {
  default: "h-14",
};
export default {
  name: "UiButton",
  emits: ["click"],
  props: {
    theme: String,
    disabled: {
      type: Boolean,
      default: true,
    },
    withBorder: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: HEIGHT.default,
    },
  },
  data: () => ({}),
  computed: {
    buttonTheme() {
      const themes = {
        black:
          "bg-black text-white font-bold	 hover:bg-pastelGreen disabled:bg-lightGrey",
      };

      return themes[this.theme] || themes.black;
    },
  },
};
</script>
