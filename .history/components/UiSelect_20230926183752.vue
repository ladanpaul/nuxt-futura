<template>
  <div>
    <div
      class="flex mt-8 relative py-1 pl-4 pr-3 h-[46px] border border-linkWater rounded-lg"
      @click="toggleSelect"
    >
      <span
        v-if="label"
        class="absolute bg-white px-1.5 left-3 -top-2 text-xs font-bold"
        >{{ label }}</span
      >
      <div>
        <span>{{ selectedValue || placeholder }}</span>
      </div>
    </div>
    <div v-if="isOpen" class="flex flex-col">
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
import { SelectedIcon } from "@/icons";
export default {
  name: "UiSelect",
  emits: ["select"],
  components: {
    SelectedIcon,
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
