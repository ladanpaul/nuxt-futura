<template>
  <teleport to="body">
    <Transition name="fadePopup" appear @touchstart.stop>
      <div
        v-if="isPopupOpen"
        class="h-full fixed top-0 left-0 right-0 bottom-0 bg-dark-blue/50 flex z-max text-dark-blue py-5 px-6 md:px-30px md:py-5"
        @click="togglePopup"
      >
        <slot />
      </div>
    </Transition>
  </teleport>
</template>
<script setup>
import "overlayscrollbars/overlayscrollbars.css";

const emit = defineEmits(["close"]);

const props = defineProps({
  whithClose: {
    type: Boolean,
    default: true,
  },
  widthClass: {
    type: String,
    default: "default-popup-width",
  },
  closeClass: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const isPopupOpen = ref(false);

const togglePopup = () => {
  isPopupOpen.value = !isPopupOpen.value;
  if (isPopupOpen.value) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
    emit("close");
  }
};

defineExpose({
  togglePopup,
});
</script>

<style scoped>
.fadePopup-enter-active,
.fadePopup-leave-active {
  transition: opacity 0.1s ease;
}

.fadePopup-enter-from,
.fadePopup-leave-to {
  opacity: 0;
}

.default-popup-width {
  @apply w-900px;
}

.info-popup-width {
  @apply w-full md:w-442px lg:w-620px;
}
</style>
