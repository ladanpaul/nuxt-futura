<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      'transition rounded-xl flex items-center justify-center',
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
        transparent: "bg-transparent",
        black:
          "bg-black text-white font-bold hover:bg-pastelGreen disabled:bg-lightGrey200",
        payment: "bg-sunglow text-black font-bold	leading-19px rounded-xl",
      };

      return themes[this.theme] || themes.transparent;
    },
  },
};
</script>
