<template>
  <div class="flex flex-col w-[160px]">
    <div class="text-2xl font-bold">{{ formattedTime }}</div>
    <div
      class="h-12 bg-green-500 transition-width duration-1000 ease-linear"
      :style="{ width: progressBarWidth }"
    ></div>
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
          setItem("planet.timer", this.currentTime);
        } else {
          clearInterval(this.interval);
        }
      }, 1000);
    },
    stopTimer() {
      setItem("planet.timer", this.currentTime);
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.totalSeconds = this.totalMinutes * 60;
    this.currentTime = this.totalSeconds;
    this.startTimer();
    console.log("here??");
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>
