<script>
export default {
  name: "NuxtTutorial",
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
  data: () => ({
    test: "Hello I am test",
  }),
  computed() {
    const buttonTheme() {
      const themes = {
        blue: {
          bg: "!bg-blue-10",
          hover: "hover-btn-blue",
        },
        green: {
          bg: "!bg-green",
          hover: "hover-btn-green-white",
        },
        coral: {
          bg: "!bg-coral",
          hover: "hover-btn-coral",
        },
        indigo: {
          bg: "!bg-indigo",
          hover: "hover-btn-indigo",
        },
        iris: {
          bg: "!bg-iris",
          hover: "hover-btn-iris",
        },
        orient: {
          bg: "!bg-orient",
          hover: "hover-btn-orient",
        },
        sky: {
          bg: "!bg-sky",
          hover: "hover-btn-sky",
        },
        purple: {
          bg: "!bg-purple",
          hover: "hover-btn-purple",
        },
        skyBlue: {
          bg: "!bg-sky-blue",
          hover: "hover-btn-sky-blue",
        },
        whiteViolet: {
          bg: "!bg-white",
          text: "!text-violet",
          hover: "hover-btn-white-violet",
        },
        whiteViolet30: {
          bg: "!bg-white",
          text: "!text-violet-30",
          hover: "hover-btn-white-violet",
        },
        whiteDarkBlue: {
          bg: "!bg-white",
          text: "!text-dark-blue",
          hover: "hover-btn-white-violet",
        },
        whitePurpleHeart: {
          bg: "!bg-white",
          text: "!text-purple-10",
          hover: "hover-btn-white-purple-heart",
        },
        turquoise: {
          bg: "!bg-turquoise",
          text: "!text-white",
          hover: "hover-btn-turquoise",
        },
      };

      return themes[props.theme] || themes.blue;
    }
  },
};
</script>
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
