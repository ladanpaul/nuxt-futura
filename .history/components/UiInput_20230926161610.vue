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
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    // Інші пропси...
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  data: () => ({
    pattern: "",
  }),
  methods: {
    onInput(e) {
      if (this.isOnlyNumbers || this.isCardNumber) {
        this.pattern = "[0-9]*";
      }

      if (this.isCardNumber) {
        this.formatCreditCardNumber();
      }

      this.inputValue = e.target.value; // Встановлюємо значення через computed
    },
    // Інші методи...
  },
};
</script>
