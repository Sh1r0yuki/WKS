<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import Autoplay from './components/Autoplay.vue'
import QCM from './components/QCM.vue'
import Timer from './components/Timer.vue'

const questions = ref([])
const currentQuestionIndex = ref(0)
const isAnswered = ref(false)
const score = ref(0)
const isQuizFinished = ref(false)
const currentAudioUrl = ref('')
const audioRef = ref(null)
const isTimerActive = ref(true) // Timer activé
const isAudioPlaying = ref(false) // Indicateur pour savoir si l'audio est en train de jouer

// Récupérer les questions depuis l'API
const fetchQuestions = async () => {
  try {
    const { data } = await axios.get('https://quizz-musical-backend.airdev.be/api/questions')
    questions.value = data.filter(q => q.category_id === 2 && q.content.sound_url)
  } catch (error) {
    console.error('Erreur récupération questions :', error)
  }
}

// Question actuelle
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value] || null)

// Mettre à jour l'URL de l'audio
const updateAudioUrl = () => {
  if (currentQuestion.value) {
    currentAudioUrl.value = currentQuestion.value.content.sound_url
  }
}

// Recharger l'audio (gestion de l'événement canplaythrough)
const reloadAudio = () => {
  if (audioRef.value && currentAudioUrl.value) {
    audioRef.value.src = currentAudioUrl.value
    audioRef.value.load()

    // Attendre que l'audio soit prêt avant de le lire
    audioRef.value.addEventListener('canplaythrough', () => {
      isAudioPlaying.value = true
      audioRef.value.play().catch((error) => {
        console.error("Erreur lors de la lecture de l'audio :", error)
      })
    })
  }
}

// Gérer la réponse de l'utilisateur
const handleAnswer = (answer) => {
  if (isAnswered.value) return
  isAnswered.value = true
  if (answer === currentQuestion.value.answer) {
    score.value += 10
  }
  // Mettre fin au timer après une réponse correcte
  isTimerActive.value = false
}

// Passer à la question suivante
const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    isAnswered.value = false
    isTimerActive.value = true // Réactiver le timer pour la nouvelle question
    updateAudioUrl()
    reloadAudio()
  } else {
    isQuizFinished.value = true
  }
}

// Gérer le cas où le temps est écoulé (et changer de question)
const handleTimeUp = () => {
  if (!isAnswered.value) {
    // Passer à la question suivante si aucune réponse n'a été donnée
    isAnswered.value = true
  }
  nextQuestion() // Passer à la question suivante lorsque le temps est écoulé
}

// Recommencer le quiz
const restartQuiz = () => {
  currentQuestionIndex.value = 0
  score.value = 0
  isQuizFinished.value = false
  isAnswered.value = false
  isTimerActive.value = true // Réinitialiser le timer
  updateAudioUrl()
}

onMounted(() => {
  fetchQuestions()
  updateAudioUrl() // Mettre à jour l'audio pour la première question
})
</script>

<template>
  <div class="quiz-container">
    <!-- Si le quiz est terminé -->
    <div v-if="isQuizFinished">
      <h2>Quiz terminé ! 🎉</h2>
      <p>Score final : {{ score }} points</p>
      <button @click="restartQuiz">🔄 Rejouer</button>
    </div>

    <!-- Si le quiz est en cours -->
    <div v-else-if="currentQuestion">
      <h2>{{ currentQuestion.title }}</h2>
      
      <!-- Lecteur audio -->
      <audio ref="audioRef" :src="currentAudioUrl" preload="auto" />

      <!-- Timer -->
      <Timer :initialTime="10" :resetTrigger="currentQuestionIndex" :isActive="isTimerActive" @timeUp="handleTimeUp" />

      <!-- QCM -->
      <QCM :options="currentQuestion.content.answers" :correctAnswer="currentQuestion.answer"
        :resetTrigger="currentQuestionIndex" @answerSelected="handleAnswer" />

      <!-- Score -->
      <p>Score : {{ score }} points</p>
    </div>

    <!-- Chargement des questions -->
    <div v-else>Chargement...</div>
  </div>
</template>
