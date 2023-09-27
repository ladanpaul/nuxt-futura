<template>
  <div class="flex flex-col">
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        class="w-full border border-transparent outline-none"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
        @input="$emit('input', $event)"
      />
      <!-- <div
        class="flex items-center w-full text-8px lg:!text-13px !text-red absolute -bottom-3 md:-bottom-[14px] lg:-bottom-5"
        v-if="isError"
      >
        <slot />
      </div> -->
    </div>
  </div>
</template>
<script>
// const props = defineProps({
//   type: {
//     type: String,
//     default: "text",
//   },
//   placeholder: {
//     type: String,
//     default: "",
//   },
//   label: {
//     type: String,
//     default: "",
//   },
//   value: {
//     type: String || Number,
//     default: "",
//   },
//   required: {
//     type: Boolean,
//     default: false,
//   },
//   isError: {
//     type: Boolean,
//     default: false,
//   },
//   modelValue: {
//     type: String,
//     default: "",
//   },
//   isOnlyNumber: {
//     type: Boolean,
//     default: false,
//   },
// });

// const emit = defineEmits(["update:modelValue", "blur", "keypress"]);

export default {
  name: "UiInput",
  emits: ["blur", "input", "keypress"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String || Number,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
};
</script>
