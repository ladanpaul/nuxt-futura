<template>
  <div class="relative">
    <div
      class="py-1 pl-4 pr-3 h-[46px] border border-linkWater rounded-lg"
      @click="toggleSelect"
    >
      <span
        v-if="label"
        class="absolute bg-white px-1.5 left-3 -top-2 text-xs font-bold"
        >{{ label }}</span
      >
      <div class="flex">
        <span>{{ selectedValue || placeholder }}</span>
        <ArrowDown class="text-raven" />
      </div>
    </div>
    <div
      v-if="isOpen"
      class="absolute top-full flex flex-col h-[200px] z-1 bg-white overflow-auto"
    >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex items-center"
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
    },
    toggleSelect() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
