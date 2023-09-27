<template>
  <div class="flex flex-col">
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :class="[
          'form-input-shadow w-full border border-transparent py-13px px-5 lg:px-30px lg:py-17px rounded-lg lg:rounded-xl text-xs lg:text-lg lg:leading-7 placeholder-gray-10 outline-none',
        ]"
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
<script setup>
const props = defineProps({
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
  isError: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  isOnlyNumber: {
    type: Boolean,
    default: false,
  },
});

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
  },
};
</script>
