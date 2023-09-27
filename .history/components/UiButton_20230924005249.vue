<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      'transition rounded-lg flex items-center justify-center',
      {
        'border border-1': withBorder,
        'bg-white text-black': theme === 'white',
      },
      disabled ? 'text-gray-400' : '',
    ]"
  >
    <slot />
  </button>
</template>

<script>
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
  },
  data: () => ({}),
  computed: {
    buttonTheme() {
      const themes = {
        black: {
          bg: "bg-black-10",
          hover: "hover-btn-blue",
        },
      };

      return themes[props.theme] || themes.black;
    },
  },
};
</script>
