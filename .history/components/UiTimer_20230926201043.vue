<template>
  <div class="flex flex-col items-center mt-4">
    <div class="relative w-48 h-8 bg-gray-200 rounded-full">
      <div
        class="absolute top-0 left-0 h-full bg-green-500"
        :style="{ width: progressBarWidth }"
      ></div>
      <div
        class="absolute inset-0 flex items-center justify-center text-xl font-bold"
      >
        {{ formattedTime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalSeconds: 180, // 3 хвилини
      currentTime: 180, // Початковий час
      interval: null, // Змінна для інтервалу
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60);
      const seconds = this.currentTime % 60;
      return `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    },
    progressBarWidth() {
      return `${
        ((this.totalSeconds - this.currentTime) / this.totalSeconds) * 100
      }%`;
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
          // Дія, яку потрібно виконати, коли таймер завершено
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>
