<template>
  <!-- <Teleport to="body"> -->
  <Transition name="fadePopup" appear @touchstart.stop>
    <div
      v-if="isPopupOpen"
      class="h-full fixed top-0 left-0 right-0 bottom-0 bg-dark-blue/50 flex z-max text-dark-blue py-5 px-6 md:px-30px md:py-5"
      @click="togglePopup"
    >
      <div class="main-content bg-white p-4 pt-6" @click.stop>
        hello
        <slot />
      </div>
    </div>
  </Transition>
  <!-- </Teleport> -->
</template>
<script>
export default {
  name: "Popup",
  data: () => ({
    isPopupOpen: false,
  }),
  methods: {
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
      if (this.isPopupOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
  },
  beforeDestroy() {
    if (!this.isPopupOpen) {
      return;
    }

    document.body.classList.remove("no-scroll");
  },
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

.main-content {
  box-shadow: 0px 0px 0px 4px #0000000d;
}
</style>
