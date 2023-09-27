<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      'transition rounded-lg flex items-center justify-center',
      {
        'border border-1  border-black rounded-lg': withBorder,
        'bg-white text-black': theme === 'white',
        'bg-green-400 text-black': theme === 'green',
        'bg-omc-green-gradient text-black': theme === 'new-green',
        'bg-blue-300 text-white': theme === 'blue',
        'bg-purple-gradient text-white': theme === 'new-purple',
        'cursor-not-allowed opacity-50 disabled': disabled,
        'bg-transparent border border-solid border-blue-500 text-blue-500':
          theme === 'blue-outlined',
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

      return themes[props.theme] || themes.blue;
    },
  },
};
</script>
