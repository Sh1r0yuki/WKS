<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  options: Array,
  correctAnswer: String,
  resetTrigger: Number
})

const emit = defineEmits(['answerSelected'])
const selectedAnswer = ref(null)

const selectAnswer = (answer) => {
  if (!selectedAnswer.value) {
    selectedAnswer.value = answer
    emit('answerSelected', answer)
  }
}

watch(() => props.resetTrigger, () => {
  selectedAnswer.value = null
})
</script>

<template>
  <div class="qcm">
    <button v-for="(option, index) in options" :key="index" @click="selectAnswer(option)">
      {{ option }}
    </button>
  </div>
</template>
