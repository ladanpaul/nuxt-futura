<template>
  <div class="relative">
    <div
      :class="[
        'flex items-center py-1 pl-4 pr-3 h-[46px] border rounded-lg cursor-pointer',
        {
          'rounded-none rounded-tl-lg rounded-tr-lg border-pastelGreen':
            isOpen && theme === 'white',
          'border-linkWater': theme === 'white',
          'rounded-none rounded-tl-lg rounded-tr-lg border-cornflowerBlue':
            isOpen && theme === 'dark',
          'bg-waikawaGrey border-transparent': theme === 'dark',
        },
      ]"
      @click="toggleSelect"
    >
      <span
        v-if="label"
        :class="[
          'absolute px-1.5 left-3 -top-2 text-xs font-bold',
          { 'bg-white': theme === 'white' },
          { 'bg-waikawaGrey rounded-[30px]	': theme === 'dark' },
        ]"
        >{{ label }}</span
      >
      <div
        :class="[
          'cursor-pointer text-xs text-raven',
          { 'text-raven': theme === 'white', 'text-white': theme === 'dark' },
        ]"
      >
        <span>{{ selectedValue || placeholder }}</span>
        <ArrowDown
          :class="[
            'absolute right-3 top-1/2 transform -translate-y-1/2 ',
            {
              'transform rotate-180': isOpen,
              'text-raven': theme === 'white',
              'text-white': theme === 'dark',
            },
          ]"
        />
      </div>
    </div>
    <div
      v-if="isOpen"
      class="absolute top-full flex flex-col max-h-[200px] w-full z-1 bg-white overflow-auto rounded-bl-lg rounded-br-lg border border-linkWater border-t-0 text-raven"
    >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        :class="[
          'flex justify-between items-center w-full px-4 min-h-32px text-xs cursor-pointer border-b last:border-b-0 last:rounded-bl-lg last:rounded-br-lg',
          {
            'bg-waikawaGrey border-white/20': theme === 'dark',
          },
        ]"
        @click="select(item)"
      >
        <!-- 'text-white bg-pastelGreen':
              selectedValue === item && theme === 'white',
            'text-white bg-cornflowerBlue':
              selectedValue === item && theme === 'dark',
            'bg-waikawaGrey text-white': theme === 'dark',
            'border-linkWater': theme === 'white', -->
        <span>{{ item }}</span>
        <SelectedIcon
          v-if="selectedValue === item"
          class="selected-icon text-white"
        />
      </div>
    </div>
  </div>
</template>
<script>
// TODO - Сlose the select when clicking outside of it
import { SelectedIcon, ArrowDown } from "@/icons";

const THEMES = {
  white: "white",
  dark: "dark",
};

export default {
  name: "UiSelect",
  emits: ["select"],
  components: {
    SelectedIcon,
    ArrowDown,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Select",
    },
    items: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      default: THEMES.white,
    },
  },
  data: () => ({
    selectedValue: "",
    isOpen: false,
  }),
  methods: {
    select(item) {
      this.selectedValue = item;
      this.$emit("select", this.selectedValue);
      this.toggleSelect();
    },
    toggleSelect() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
.selected-icon {
  box-shadow: 0px 4px 4px 0px rgba(#000, 0.2);
}
</style>
