<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      `transition rounded-lg flex items-center justify-center ${buttonTheme}`,
      {
        'border border-1': withBorder,
      },
      disabled ? 'text-gray-400' : '',
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
        black: "bg-black text-white",
      };

      return themes[this.theme] || themes.black;
    },
  },
};
</script>
