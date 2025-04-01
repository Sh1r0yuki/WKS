<template>
  <div class="qcm-container">
    <button 
      v-for="(option, index) in options" 
      :key="index" 
      class="qcm-option" 
      @click="selectAnswer(option)"
      :class="{ selected: option === selectedAnswer }"
    >
      {{ option }}
    </button>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['options', 'resetTrigger'])
const emit = defineEmits(['answerSelected'])

const selectedAnswer = ref(null)


watch(() => props.resetTrigger, () => {
  selectedAnswer.value = null
})

const selectAnswer = (option) => {
  if (!selectedAnswer.value) {
    selectedAnswer.value = option
    emit('answerSelected', option)
  }
}
</script>

<style scoped>
.qcm-container {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 15px; 
  max-width: 500px;
  margin: 20px auto;
}

.qcm-option {
  background: linear-gradient(135deg, #1e3c72, #2a5298); 
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
  color: white;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.qcm-option:hover {
  background: linear-gradient(135deg, #4b6cb7, #182848);
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .qcm-container {
    grid-template-columns: 1fr; 
  }
}
</style>
