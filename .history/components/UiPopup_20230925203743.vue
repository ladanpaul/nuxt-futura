<template>
  <teleport to="body">
    <Transition name="fadePopup" appear @touchstart.stop>
      <div
        v-if="isPopupOpen"
        class="h-full fixed top-0 left-0 right-0 bottom-0 bg-dark-blue/50 flex z-max text-dark-blue py-5 px-6 md:px-30px md:py-5"
        @click="togglePopup"
      >
        <div class="main-content bg-white p-4 pt-6">
          <slot />
        </div>
      </div>
    </Transition>
  </teleport>
</template>
<script>
export default {
  name: "Popup",
  data: () => ({
    isPopupOpen: false
  }),
  methods: {
    togglePopup() {
  isPopupOpen.value = !isPopupOpen.value;
  if (isPopupOpen.value) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
    emit("close");
  }
};
  }
};
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

.main-content {
  box-shadow: 0px 0px 0px 4px #0000000d;
}
</style>
