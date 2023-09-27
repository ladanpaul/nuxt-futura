<template>
  <div class="flex flex-col">
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        class="w-full border border-transparent outline-none"
        :pattern="pattern"
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
    isOnlyNumbers: {
      type: Boolean,
      default: false,
    },
    isCardNumber: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    pattern: "",
  }),
  methods: {
    onInput(e) {
      const inputValue = e.target.value;
      this.$emit("input", inputValue);

      if (this.isOnlyNumbers || this.isCardNumber) {
        this.pattern = "[0-9]*";
      }

      if (this.isCardNumber) {
        this.formatCreditCardNumber(inputValue);
      }
    },
    formatCreditCardNumber(inputValue) {
      let formattedNumber = inputValue.replace(/\D/g, "");
      console.log("inputValue -> ", inputValue);

      formattedNumber = formattedNumber.replace(/(\d{4})/g, "$1 ");

      formattedNumber = formattedNumber.trim();

      if (formattedNumber.length > 19) {
        formattedNumber = formattedNumber.slice(0, 19);
      }

      inputValue = formattedNumber;
    },
  },
};
</script>
