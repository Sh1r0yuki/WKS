<template>
  <div class="quiz-container">
    <div class="quiz-card">
      <h2 class="question-title">{{ currentQuestion.title }}</h2>

      <div class="question-content">
        <!-- Vérifier si content et lyrics sont définis avant de les afficher -->
        <p v-if="currentQuestion.content && currentQuestion.content.lyrics">
          <strong>Compléter les paroles :</strong> {{ currentQuestion.content.lyrics }}
        </p>
        <p v-if="currentQuestion.content && currentQuestion.content.song_title">
          <strong>Titre de la chanson :</strong> {{ currentQuestion.content.song_title }}
        </p>
        <p v-if="currentQuestion.content && currentQuestion.content.song_author">
          <strong>Auteur de la chanson :</strong> {{ currentQuestion.content.song_author }}
        </p>
      </div>

      <div class="answer-section">
        <input
          v-model="userAnswer"
          type="text"
          placeholder="Entrez votre réponse ici"
          class="answer-input"
        />
        <button @click="checkAnswer" class="answer-btn">Vérifier la réponse</button>
      </div>

      <p v-if="answerMessage" class="answer-message">{{ answerMessage }}</p>

      <button
        v-if="answerMessage"
        @click="nextQuestion"
        class="next-question-btn"
      >
        Question suivante
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const questions = ref([]);
const currentQuestionIndex = ref(0);
const currentQuestion = ref({});
const userAnswer = ref('');
const answerMessage = ref('');

// Fonction pour récupérer les données de l'API
const fetchQuestions = async () => {
  try {
    const response = await axios.get('https://quizz-musical-backend.airdev.be/api/categories/1');
    const data = response.data;

    // Filtrer les questions actives (is_active = 1)
    questions.value = data.filter(item => item.is_active === 1);
    
    if (questions.value.length > 0) {
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    } else {
      console.error('Aucune question active disponible');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des questions :', error);
  }
};

// Fonction pour vérifier la réponse de l'utilisateur
const checkAnswer = () => {
  if (userAnswer.value.trim().toLowerCase() === currentQuestion.value.answer.toLowerCase()) {
    answerMessage.value = `Réponse correcte : Vous gagnez ${currentQuestion.value.points} points.`;
  } else {
    answerMessage.value = 'Réponse fausse : Vous ne gagnez rien.';
  }
};

// Fonction pour passer à la question suivante
const nextQuestion = () => {
  if (currentQuestionIndex.value + 1 < questions.value.length) {
    currentQuestionIndex.value++;
    currentQuestion.value = questions.value[currentQuestionIndex.value];
    userAnswer.value = '';
    answerMessage.value = '';
  } else {
    console.log('Fin du quiz');
  }
};

// Appel de la fonction fetchQuestions lorsque le composant est monté
onMounted(fetchQuestions);
</script>

<style scoped>
/* Styles généraux */
.quiz-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #d9d9d9; /* Gris primaire */
  font-family: 'Arial', sans-serif;
}

.quiz-card {
  background-color: #ffffff; /* Blanc de fond de carte */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.question-title {
  font-size: 1.5rem;
  color: #000000; /* Texte noir */
  margin-bottom: 20px;
}

.question-content {
  margin-bottom: 20px;
}

.question-content p {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
}

.answer-section {
  margin-bottom: 20px;
}

.answer-input {
  width: 80%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.answer-btn {
  background-color: #000000; /* Bouton noir */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.answer-btn:hover {
  background-color: #333;
}

.answer-message {
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: bold;
}

.next-question-btn {
  background-color: #28a745; /* Vert pour le bouton suivant */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.next-question-btn:hover {
  background-color: #218838;
}
</style>
