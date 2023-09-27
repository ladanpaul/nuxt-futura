<template>
  <div class="relative text-raven">
    <div
      :class="[
        'flex items-center py-1 pl-4 pr-3 h-[46px] border border-linkWater rounded-lg cursor-pointer',
        { 'rounded-none rounded-tl-lg rounded-tr-lg': isOpen },
      ]"
      @click="toggleSelect"
    >
      <span
        v-if="label"
        class="absolute bg-white px-1.5 left-3 -top-2 text-xs font-bold"
        >{{ label }}</span
      >
      <div class="cursor-pointer text-xs">
        <span>{{ selectedValue || placeholder }}</span>
        <ArrowDown
          :class="[
            'absolute right-3 top-1/2 transform -translate-y-1/2 text-raven',
            { 'transform rotate-180': isOpen },
          ]"
        />
      </div>
    </div>
    <div
      v-if="isOpen"
      class="absolute top-full flex flex-col h-[200px] w-full z-1 bg-white overflow-auto rounded-bl-lg rounded-br-lg border border-linkWater border-t-0"
    >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        :class="[
          'flex justify-between items-center w-full px-4 min-h-32px text-xs cursor-pointer border-b border-linkWater last:border-b-0 last:rounded-bl-lg last:rounded-br-lg',
          { 'bg-pastelGreen text-white': selectedValue === item },
        ]"
        @click="select(item)"
      >
        <span>{{ item }}</span>
        <SelectedIcon v-if="selectedValue === item" />
      </div>
    </div>
  </div>
</template>
<script>
import { SelectedIcon, ArrowDown } from "@/icons";
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
