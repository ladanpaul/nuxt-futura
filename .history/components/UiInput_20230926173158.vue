<template>
  <div
    class="flex mt-8 relative py-1 pl-4 pr-3 h-[46px] border border-linkWater rounded-lg"
  >
    <span class="absolute bg-white px-1.5 left-3 -top-2 text-xs font-bold">{{
      label
    }}</span>
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
    <slot name="icon" />
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
    isCvv: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String, // TODO for future input height
    },
  },
  data: () => ({
    pattern: "",
    maskedValue: "",
  }),
  methods: {
    onInput(e) {
      if (this.isOnlyNumbers || this.isCardNumber || this.isCvv) {
        this.pattern = "[0-9]*";
      }

      if (this.isCardNumber) {
        this.formatCreditCardNumber(e);
        return;
      }

      if (this.isCvv) {
        this.setCvvNumber(e);
        return;
      }

      this.$emit("input", e.target.value);
    },
    formatCreditCardNumber(e) {
      let formattedNumber = e.target.value.replace(/\D/g, "");

      formattedNumber = formattedNumber.replace(/(\d{4})/g, "$1 ");

      formattedNumber = formattedNumber.trim();

      if (formattedNumber.length > 19) {
        formattedNumber = formattedNumber.slice(0, 19);
      }

      e.target.value = formattedNumber;

      this.$emit("input", e.target.value);
    },
    setCvvNumber(e) {
      let cvv = e.target.value.replace(/\D/g, "");

      if (cvv.length > 3) {
        cvv = cvv.slice(0, 3);
      }

      // Затримка в 1 секунду перед заміною на кружочки
      setTimeout(() => {
        this.maskedValue = "•".repeat(cvv.length); // Оновлення маскованого значення
      }, 1000);

      this.$emit("input", cvv); // Оновлення введених даних через emit
    },
  },
};
</script>
