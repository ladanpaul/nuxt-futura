<template>
  <div v-if="!isTextarea" class="flex flex-col">
    <span
      v-if="label"
      class="font-semibold text-xs leading-18px lg:text-base lg:leading-26px mb-2 md:mb-2.5 lg:mb-3"
      >{{ label }}<span v-if="required">*</span></span
    >
    <div class="relative">
      <div
        v-if="withIcon"
        class="w-5 h-5 lg:w-7 lg:h-7 absolute left-4 top-1/2 transform -translate-y-1/2"
      >
        <slot name="icon" />
      </div>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :class="[
          'form-input-shadow w-full border border-transparent py-13px px-5 lg:px-30px lg:py-17px rounded-lg lg:rounded-xl text-xs lg:text-lg lg:leading-7 placeholder-gray-10 outline-none',
          {
            '!pl-[48px]': withIcon,
            '!bg-light-500 !border-red': isError,
          },
        ]"
        style="box-sizing: border-box"
        @blur="
          $emit('blur', $event);
          handleBlur($event);
        "
        @focus="$emit('focus', $event)"
        @input="setInputValue($event)"
        @keypress="keypress"
      />
      <div
        class="flex items-center w-full text-8px lg:!text-13px !text-red absolute -bottom-3 md:-bottom-[14px] lg:-bottom-5"
        v-if="isError"
      >
        <slot />
      </div>
    </div>
    <p
      v-if="maxLengthView"
      class="font-semibold text-xs leading-4 ml-auto lg:mt-3 text-gray-110"
    >
      {{ maxLengthView }}
    </p>
  </div>
  <div v-else class="flex flex-col">
    <span
      v-if="label"
      class="font-semibold text-xs leading-18px lg:text-base lg:leading-26px mb-2 md:mb-2.5 lg:mb-3"
      >{{ label }}<span v-if="required">*</span></span
    >
    <textarea
      rows="5"
      :class="[
        'form-input-shadow text-10px leading-18px md:text-xs md:leading-6 lg:text-lg lg:leading-7 w-full resize-none bg-white-10 form-step-input py-2.5 px-5 lg:px-30px lg:pt-18px lg:pb-8 rounded-lg lg:rounded-xl outline-none',
        { 'border border-red': isError },
      ]"
      :value="modelValue"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @blur="$emit('blur', $event)"
      @input="$emit('update:modelValue', $event.target.value)"
      @keypress="onlyNumber"
    />
    <p
      v-if="maxLengthView"
      class="font-semibold text-xs leading-4 ml-auto lg:mt-3 text-gray-110"
    >
      {{ maxLengthView }}
    </p>
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
  maxLength: {
    type: Number,
  },
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String || Number,
    default: "",
  },
  isTextarea: {
    type: Boolean,
    default: false,
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
  isOnlyLetters: {
    type: Boolean,
    default: false,
  },
  isEmail: {
    type: Boolean,
    default: false,
  },
  maxNumber: {
    type: Number,
  },
  withIcon: Boolean,
});

const emit = defineEmits(["update:modelValue", "blur", "keypress"]);

const setInputValue = ($event) => {
  if (props.maxLength && $event.target.value.length > props.maxLength) {
    $event.target.value = $event.target.value.substring(0, props.maxLength);
    return;
  }
  emit("update:modelValue", $event.target.value);
};

const maxLengthView = computed(() => {
  if (!props.maxLength) {
    return;
  }

  return `${props.modelValue.length}/${props.maxLength}`;
});

const keypress = ($event) => {
  emit("keypress", $event);
  if (props.isOnlyNumber) {
    onlyNumber($event);
  }
  if (props.isOnlyLetters) {
    onlyLetters($event);
  }
  if (props.isEmail) {
    emailValidation($event);
  }
};

const onlyNumber = ($event) => {
  const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const keyPressed = $event.key;
  const inputValue = $event.target.value;

  if (!keysAllowed.includes(keyPressed)) {
    $event.preventDefault();
  }

  if (inputValue === "0" && keyPressed !== ".") {
    $event.preventDefault();
  }

  if (!props.maxNumber) {
    return;
  }

  const parsedValue = parseFloat(inputValue + keyPressed);

  if (parsedValue > props.maxNumber) {
    $event.target.value = props.maxNumber;
    emit("input", $event);
    $event.preventDefault();
  }
};

const onlyLetters = ($event) => {
  const keyPressed = $event.key;
  const letterRegex = /^[`\-_\p{L} ]*$/u;
  if (!letterRegex.test(keyPressed)) {
    $event.preventDefault();
  }
};

const handleBlur = (event) => {
  emit("update:modelValue", event.target.value.trim());
  emit("blur", event);
};

const emailValidation = ($event) => {
  const keyPressed = $event.key;
  const letterRegex = /^[`\-_@.\p{Ll}0-9]*$/u;
  if (!letterRegex.test(keyPressed)) {
    $event.preventDefault();
  }
};
// const letterRegex = /^[`\-_@.\p{Ll}0-9]*$/u; all letters
// const letterRegex = /^[-_@.`a-zA-Z0-9]*$/; only latin
</script>
