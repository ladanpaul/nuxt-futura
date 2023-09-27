<template>
  <Transition name="fadePopup" appear @touchstart.stop>
    <div
      v-if="isPopupOpen"
      class="h-full fixed top-0 left-0 right-0 bottom-0 bg-black/20 flex"
      @click="togglePopup"
      style="padding: 0 12px"
    >
      <div
        :class="[
          'rounded-xl m-auto',
          {
            'bg-white main-content': theme === 'white',
            'bg-chambray': theme === 'dark',
          },
        ]"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>
<script>
const THEMES = {
  white: "white",
  dark: "dark",
};
export default {
  name: "Popup",
  props: {
    theme: {
      type: String,
      default: THEMES.white,
    },
  },
  data: () => ({
    isPopupOpen: false,
  }),
  methods: {
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
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
