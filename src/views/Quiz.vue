<<<<<<< HEAD
<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import QCM from '../components/QCM.vue'
import Timer from '../components/Timer.vue'
import Autoplay from '../components/Autoplay.vue'

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

  // Vérifie si la réponse correspond complétement à celle attendue OU le contient
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
      <Timer :initialTime="10" :resetTrigger="currentQuestionIndex" :isActive="isTimerActive" @timeUp="handleTimeUp" />
      <QCM :options="currentQuestion.content.answers" :correctAnswer="currentQuestion.answer"
        :resetTrigger="currentQuestionIndex" @answerSelected="handleAnswer" />
      <p>Score : {{ score }} points</p>
    </div>

    <div v-else>Chargement...</div>
  </div>
</template>

<style>
.quiz-container {
  max-width: 600px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  font-weight: 300;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #121212;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
}

button {
  background: linear-gradient(135deg, #ff8c00, #ff3b3b);
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s, opacity 0.3s;
}

button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>
=======
<template>
    <div class="quiz-container">
      <h1>Quiz Musical</h1>
      <Input @reponse-saisie="verifierReponse" />
      <Answer v-if="bonneReponse !== null" :estCorrecte="bonneReponse" :points="question.points" />
    </div>
  </template>
  
  <script>
  import Input from '../components/Input.vue';
  import Answer from '../components/Answer.vue';
  
  export default {
    components: {
      Input,
      Answer,
    },
    data() {
      return {
        bonneReponse: null,
        question: null,
      };
    },
    methods: {
      verifierReponse(reponseUtilisateur) {
        // Logique de vérification de la réponse
        if (reponseUtilisateur.trim().toLowerCase() === this.question.reponseCorrecte.toLowerCase()) {
          this.bonneReponse = true;
        } else {
          this.bonneReponse = false;
        }
      },
    },
    mounted() {
      // Appeler la fonction pour charger les questions (comme tu faisais précédemment)
      this.chargerQuestions();
    },
    methods: {
      chargerQuestions() {
        // Logique pour charger les questions depuis l'API
        // par exemple axios.get('https://...')
      },
    },
  };
  </script>
  
  <style scoped>
  .quiz-container {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  
>>>>>>> Cedric
