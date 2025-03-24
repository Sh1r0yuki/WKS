<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  options: Array,         // Liste des phrases complètes
  correctAnswer: String,  // Réponse correcte (un mot)
  resetTrigger: Number    // Permet de reset quand la question change
})

const emit = defineEmits(['answerSelected'])

const selectedAnswer = ref(null)
const isDisabled = ref(false)
const showAnswerFeedback = ref(false)

const selectAnswer = (answer) => {
  if (isDisabled.value) return

  selectedAnswer.value = answer
  isDisabled.value = true
  showAnswerFeedback.value = true

  // Vérifier si l'option contient le bon mot
  const containsCorrectWord = answer.toLowerCase().includes(props.correctAnswer.toLowerCase())

  emit('answerSelected', containsCorrectWord ? props.correctAnswer : '')
}

// Réinitialisation lorsque la question change
watch(() => props.resetTrigger, () => {
  selectedAnswer.value = null
  isDisabled.value = false
  showAnswerFeedback.value = false
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <button v-for="option in options" :key="option" @click="selectAnswer(option)" 
      :class="[ 
        'p-3 rounded text-white font-bold transition-all text-left',
        selectedAnswer
          ? option.toLowerCase().includes(correctAnswer.toLowerCase())
            ? 'bg-green-500' // Réponse correcte
            : option === selectedAnswer
              ? 'bg-red-500'  // Réponse incorrecte
              : 'bg-gray-500' // Désactivé après sélection
          : 'bg-blue-600 hover:bg-blue-700'
      ]"
      :disabled="isDisabled">
      <!-- Affichage des réponses avec leur format original (espaces et majuscules) -->
      <span>{{ option }}</span>
    </button>

    <div v-if="showAnswerFeedback">
      <p :class="[ 
        selectedAnswer && selectedAnswer.toLowerCase().includes(correctAnswer.toLowerCase()) 
          ? 'text-green-500' 
          : 'text-red-500',
        'mt-2 font-bold'
      ]">
        {{ selectedAnswer && selectedAnswer.toLowerCase().includes(correctAnswer.toLowerCase()) 
          ? 'Bonne réponse !' 
          : 'Mauvaise réponse !' }}
      </p>
    </div>
  </div>
</template>
