<template>
  <div class="relative">
    <span
      v-if="label"
      :class="[
        'absolute px-1.5 left-3 -top-2 text-xs font-bold',
        { 'bg-white': theme === 'white' },
        { 'bg-waikawaGrey rounded-[30px]	': theme === 'dark' },
      ]"
      >{{ label }}</span
    >
    <input
      :type="cvvType || type"
      :placeholder="placeholder"
      :value="value"
      :class="[
        'w-full border outline-none text-xs h-[46px]  py-1 pl-4 pr-3 rounded-lg',
        {
          'text-raven border-linkWater': theme === 'white',
          'text-white border-transparent focus:border-cornflowerBlue bg-waikawaGrey':
            theme === 'dark',
        },
      ]"
      :pattern="pattern"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @input="onInput($event)"
    />
    <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
      <slot name="icon" />
    </div>
  </div>
</template>
<script>
const THEMES = {
  white: "white",
  dark: "dark",
};

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
    theme: {
      type: String,
      default: THEMES.white,
    },
  },
  data: () => ({
    pattern: "",
    cvvType: "",
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
      this.cvvType = "text";

      setTimeout(() => {
        this.cvvType = "password";
      }, 500);

      if (cvv.length > 3) {
        cvv = cvv.slice(0, 3);
      }

      e.target.value = cvv;

      this.$emit("input", e.target.value);
    },
  },
};
</script>
