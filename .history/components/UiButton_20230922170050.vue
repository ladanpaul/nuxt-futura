<script>
// defineProps<{
//   theme?:
//     | "white"
//     | "green"
//     | "blue"
//     | "blue-outlined"
//     | "new-green"
//     | "new-purple";
//   withShadow?: boolean;
//   disabled?: boolean;
//   withBorder?: boolean;
// }>();
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
