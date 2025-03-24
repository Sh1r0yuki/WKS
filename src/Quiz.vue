<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import axios from 'axios'
import QCM from './components/QCM.vue'
import Timer from './components/Timer.vue'

const questions = ref([])
const currentQuestionIndex = ref(0)
const isAnswered = ref(false)
const score = ref(0)
const isQuizFinished = ref(false)
const currentAudioUrl = ref('')
const audioRef = ref(null)
const isTimerActive = ref(true)
const isAudioLoading = ref(false) // Empêche le spam de play()

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

// Charger et jouer l'audio proprement
const reloadAudio = () => {
  if (audioRef.value && currentAudioUrl.value) {
    isAudioLoading.value = true // Indique que l'audio charge
    audioRef.value.src = currentAudioUrl.value
    audioRef.value.load()

    // Éviter les conflits en supprimant les anciens écouteurs
    audioRef.value.oncanplaythrough = null

    // Attendre que l'audio soit prêt avant de jouer
    audioRef.value.oncanplaythrough = () => {
      isAudioLoading.value = false // L'audio est prêt
      audioRef.value.play().catch((error) => {
        console.error("Erreur lecture audio :", error)
      })
    }
  }
}

// Gérer la réponse de l'utilisateur
const handleAnswer = (answer) => {
  if (isAnswered.value) return
  isAnswered.value = true

  // Vérification en lowercase + suppression des espaces inutiles
  const userAnswer = answer.toLowerCase().trim()
  const correctAnswer = currentQuestion.value.answer.toLowerCase().trim()

  if (userAnswer === correctAnswer) {
    score.value += 10
  }
  
  isTimerActive.value = false // Stopper le timer après réponse
}

// Passer à la question suivante
const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    isAnswered.value = false
    isTimerActive.value = true
    updateAudioUrl()
    reloadAudio()
  } else {
    isQuizFinished.value = true
  }
}

// Gérer le temps écoulé
const handleTimeUp = () => {
  if (!isAnswered.value) {
    isAnswered.value = true
  }
  nextQuestion()
}

// Recommencer le quiz
const restartQuiz = () => {
  currentQuestionIndex.value = 0
  score.value = 0
  isQuizFinished.value = false
  isAnswered.value = false
  isTimerActive.value = true
  updateAudioUrl()
  reloadAudio()
}

// Charger les questions au montage
onMounted(() => {
  fetchQuestions()
  updateAudioUrl()
})

// Surveiller les changements de question et charger l'audio
watchEffect(() => {
  if (currentQuestion.value) {
    updateAudioUrl()
    reloadAudio()
  }
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
      <audio ref="audioRef" preload="auto" />

      <!-- Timer -->
      <Timer :initialTime="20" :resetTrigger="currentQuestionIndex" :isActive="isTimerActive" @timeUp="handleTimeUp" />

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
