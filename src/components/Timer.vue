<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  initialTime: Number, // Temps initial (secondes)
  resetTrigger: Number // Change à chaque nouvelle question pour reset le timer
})

const emit = defineEmits(['timeUp'])

const timeLeft = ref(props.initialTime)
let interval = null

const startTimer = () => {
  clearInterval(interval) // Stopper un ancien timer s'il existe
  timeLeft.value = props.initialTime // Réinitialiser le temps

  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(interval)
      emit('timeUp') // Notifie le parent que le temps est écoulé
    }
  }, 1000)
}

// Redémarrer le timer à chaque nouvelle question
watch(() => props.resetTrigger, () => {
  // Délai de 1 seconde avant de redémarrer le timer, pour éviter les conflits
  setTimeout(startTimer, 1000)
})

onMounted(startTimer)
</script>

<template>
  <div :class="[
    'text-xl font-bold p-2 rounded',
    timeLeft <= 5 ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'
  ]">
    {{ timeLeft }}s
  </div>
</template>
