<template>
  <div
    :class="[
      'relative flex flex-col w-[160px] bg-black rounded-xl h-[60px] overflow-hidden',
      {
        'last-time border border-red': currentTime && currentTime <= 10,
      },
    ]"
  >
    <div
      class="absolute -left-px right-0 top-0 bottom-0 flex items-center h-[60px] bg-pastelGreen transition-width duration-1000 ease-linear rounded-xl"
      :style="{ width: progressBarWidth }"
    ></div>
    <span
      class="flex items-center m-auto text-2xl font-bold text-center w-[64px] text-white z-1"
    >
      {{ formattedTime }}
    </span>
  </div>
</template>

<script>
import { setItem, getItem } from "@/plugins/storage";
export default {
  name: "UiTimer",
  props: {
    totalMinutes: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      totalSeconds: 180,
      currentTime: 180,
      interval: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60);
      const seconds = this.currentTime % 60;
      return `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    },
    progressBarWidth() {
      return `${(this.currentTime / this.totalSeconds) * 100}%`;
    },
  },
  methods: {
    formatTime(value) {
      return value < 10 ? `0${value}` : `${value}`;
    },
    startTimer() {
      this.interval = setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime--;
        } else {
          clearInterval(this.interval);
        }
      }, 1000);
    },
    stopTimer() {
      setItem("planet.timer", this.currentTime);
      clearInterval(this.interval);
    },
    saveTimer() {
      setItem("planet.timer", this.currentTime);
    },
  },
  mounted() {
    this.totalSeconds = this.totalMinutes * 60;

    const time = getItem("planet.timer");

    if (isNaN(time)) {
      this.currentTime = time;
    } else {
      this.currentTime = this.totalSeconds;
    }

    this.startTimer();
    window.addEventListener("beforeunload", this.saveTimer);
  },
  beforeDestroy() {
    this.stopTimer();
    window.removeEventListener("beforeunload", this.saveTimer);
  },
  watch: {
    currentTime(newTime) {
      console.log("newTime -> ", newTime);
      if (newTime === 0) {
        this.$emit("expired");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.last-time {
  box-shadow: 0px 0px 6px 0px #ff0000cc;
}
</style>
