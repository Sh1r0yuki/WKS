<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  initialTime: Number,
  resetTrigger: Number,
  isActive: Boolean
})

const emit = defineEmits(['timeUp'])
const timeLeft = ref(props.initialTime)
let timer = null

const startTimer = () => {
  clearInterval(timer)
  timeLeft.value = props.initialTime

  if (props.isActive) {
    timer = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--
      } else {
        clearInterval(timer)
        emit('timeUp')
      }
    }, 1000)
  }
}

watch(() => props.resetTrigger, startTimer)
watch(() => props.isActive, startTimer)

onMounted(startTimer)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="timer">
    ⏳ Temps restant: {{ timeLeft }}s
  </div>
</template>
