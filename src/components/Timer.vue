<script setup>
import { ref, onMounted, onUnmounted, defineEmits, defineProps } from 'vue';

const props = defineProps({
  duration: { type: Number, default: 40 } 
});

const emit = defineEmits(['time-up']);

const timeLeft = ref(props.duration);
let timerInterval = null;

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      emit('time-up'); // Émettre l'événement quand le temps est écoulé
      clearInterval(timerInterval);
    }
  }, 1000);
};

onMounted(startTimer);

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<template>
  <div class="timer">
    Temps restant : {{ timeLeft }}s
  </div>
</template>

<style scoped>
.timer {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
</style>
