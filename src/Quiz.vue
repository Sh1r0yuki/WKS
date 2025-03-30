<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import QCM from './components/QCM.vue'
import Timer from './components/Timer.vue'
import Autoplay from './components/Autoplay.vue'

const questions = ref([])
const currentQuestionIndex = ref(0)
const isAnswered = ref(false)
const score = ref(0)
const isQuizFinished = ref(false)
const isTimerActive = ref(true)

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

// Gérer la réponse de l'utilisateur
const handleAnswer = (answer) => {
  if (isAnswered.value) return;
  isAnswered.value = true;

  const userAnswer = answer.toLowerCase().trim();
  const correctAnswer = currentQuestion.value.answer.toLowerCase().trim();

  // Check if the user's answer fully matches OR contains the expected answer
  if (userAnswer === correctAnswer || userAnswer.includes(correctAnswer)) {
    score.value += 10;
  }

  isTimerActive.value = false;

  setTimeout(() => {
    nextQuestion();
  }, 1500);
};



// Passer à la question suivante
const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    isAnswered.value = false
    isTimerActive.value = true
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
}

// Charger les questions au montage
onMounted(() => {
  fetchQuestions()
})
</script>

<template>
  <div class="quiz-container">
    <div v-if="isQuizFinished">
      <h2>Quiz terminé ! 🎉</h2>
      <p>Score final : {{ score }} points</p>
      <button @click="restartQuiz">🔄 Rejouer</button>
    </div>

    <div v-else-if="currentQuestion">
      <h2>{{ currentQuestion.title }}</h2>

      <Autoplay :audioUrl="currentQuestion.content.sound_url" :resetTrigger="currentQuestionIndex" />
      <Timer :initialTime="20" :resetTrigger="currentQuestionIndex" :isActive="isTimerActive" @timeUp="handleTimeUp" />
      <QCM :options="currentQuestion.content.answers" :correctAnswer="currentQuestion.answer" :resetTrigger="currentQuestionIndex" @answerSelected="handleAnswer" />
      <p>Score : {{ score }} points</p>
    </div>

    <div v-else>Chargement...</div>
  </div>
</template>