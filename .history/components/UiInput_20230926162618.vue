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
        @keypress="onInput($event)"
      />
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
      type: [String, Number],
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
      this.$emit("input", e.target.value);

      if (this.isOnlyNumbers || this.isCardNumber) {
        this.pattern = "[0-9]*";
      }

      if (this.isCardNumber) {
        this.formatCreditCardNumber();
      }
    },
    formatCreditCardNumber() {
      let inputValue = this.value;
      let formattedNumber = inputValue.replace(/\D/g, "");

      formattedNumber = formattedNumber.replace(/(\d{4})/g, "$1 ");

      formattedNumber = formattedNumber.trim();

      if (formattedNumber.length > 19) {
        formattedNumber = formattedNumber.slice(0, 19);
      }
      inputValue = formattedNumber;
      console.log("formattedNumber -> ", inputValue);
      console.log("this.value -> ", this.value);
      // this.$emit("input", inputValue);
    },
  },
};
</script>
