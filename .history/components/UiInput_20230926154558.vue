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
        @input="onInput($event)"
      />

      <!-- <input
          type="text"
          v-model="creditCardNumber"
          @input="formatCreditCardNumber"
          placeholder="••••  ••••  ••••  ••••"
          pattern="[0-9]*"
        /> -->
    </div>
  </div>
</template>
<script>
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
    onlyNumbers: {
      type: Boolean,
    },
  },
  data: () => ({}),
  methods: {
    onInput(e) {
      this.$emit("input", e);
    },
  },
};
</script>
