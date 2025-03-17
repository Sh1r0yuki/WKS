<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  options: Array,         // Liste des choix possibles
  correctAnswer: String,  // Réponse correcte
  resetTrigger: Number    // Permet de reset quand la question change
})

const emit = defineEmits(['answerSelected'])

const selectedAnswer = ref(null)
const isDisabled = ref(false) // Bloque les clics après une réponse
const showAnswerFeedback = ref(false) // Affiche si la réponse est correcte ou incorrecte

const selectAnswer = (answer) => {
  if (isDisabled.value) return

  selectedAnswer.value = answer
  isDisabled.value = true // Bloque les autres clics après une réponse
  showAnswerFeedback.value = true // Affiche la rétroaction sur la réponse
  emit('answerSelected', answer)
}

// Réinitialisation lorsque la question change
watch(() => props.resetTrigger, () => {
  selectedAnswer.value = null
  isDisabled.value = false
  showAnswerFeedback.value = false // Réinitialiser la rétroaction sur la réponse
})
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <button v-for="option in options" :key="option" @click="selectAnswer(option)" :class="[
      'p-3 rounded text-white font-bold transition-all',
      selectedAnswer
        ? option === correctAnswer
          ? 'bg-green-500' // Réponse correcte
          : option === selectedAnswer
            ? 'bg-red-500'  // Réponse incorrecte
            : 'bg-gray-500' // Désactivé après sélection
        : 'bg-blue-600 hover:bg-blue-700'
    ]" :disabled="isDisabled">
      {{ option }}
    </button>
    <!-- Affichage d'une rétroaction après la sélection -->
    <div v-if="showAnswerFeedback">
      <p :class="[
        selectedAnswer === correctAnswer ? 'text-green-500' : 'text-red-500',
        'mt-2 font-bold'
      ]">
        {{ selectedAnswer === correctAnswer ? 'Bonne réponse !' : 'Mauvaise réponse !' }}
      </p>
    </div>
  </div>
</template>
