<template>
  <div class="timer-container">
    <div class="timer text-2xl font-bold">
      {{ formattedTime }}
    </div>
    <div
      class="timer-bar h-12 bg-green-500"
      :style="{ width: progressBarWidth }"
    ></div>
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

<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer {
  font-size: 24px;
}

.timer-bar {
  transition: width 1s linear;
}
</style>
