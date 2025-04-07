<template>
  <div class="quiz-container">
    <div class="quiz-card">
      <h2 class="question-title">{{ currentQuestion.title }}</h2>

      <div class="question-content">
        <!-- Vérifier si content et lyrics sont définis avant de les afficher -->
        <p v-if="currentQuestion.content && currentQuestion.content.lyrics">
          <strong>Compléter les paroles :</strong>
          <br />
          <span v-for="(line, index) in nettoyerHTML(currentQuestion.content.lyrics).split('\n')" :key="index">
            {{ line }}<br />
          </span>
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
        <button v-if="!answerMessage" @click="checkAnswer" class="answer-btn">
          Vérifier la réponse
        </button>
      </div>

      <p v-if="answerMessage" :class="{ 'correct': isCorrect, 'wrong': !isCorrect }">
        {{ answerMessage }}
      </p>

      <button
  v-if="answerMessage && currentQuestionIndex + 1 < questions.length"
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
    const response = await axios.get("https://quizz-musical-backend.airdev.be/api/categories/1");
    const data = response.data;

    console.log("Données reçues :", data);

    // Vérifier si "questions" existe et est un tableau
    if (data.questions && Array.isArray(data.questions)) {
      questions.value = data.questions.filter(item => item.is_active === 1 && item.content?.lyrics);
    } else {
      console.error("La clé 'questions' est absente ou n'est pas un tableau :", data);
    }

    if (questions.value.length > 0) {
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    } else {
      console.error('Aucune question active avec paroles disponible');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des questions :', error);
  }
};


// Fonction pour vérifier la réponse de l'utilisateur
const checkAnswer = () => {
  if (userAnswer.value.trim().toLowerCase() === currentQuestion.value.answer.toLowerCase()) {
    isCorrect.value = true;
    answerMessage.value = `✅ Réponse correcte : Vous gagnez ${currentQuestion.value.points} points.`;
  } else {
    isCorrect.value = false;
    answerMessage.value = "❌ Réponse fausse : Vous ne gagnez rien.";
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
const nettoyerHTML = (texte) => {
  if (!texte) return "";
  return texte
    .replace(/<br\s*\/?>/gi, "\n") // Convertit <br> en sauts de ligne
    .replace(/<\/?[^>]+(>|$)/g, ""); // Supprime les autres balises HTML
};
const isCorrect = ref(false);
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
  color: rgb(255, 0, 0);
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
.answer-btn, .next-question-btn {
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
}

.next-question-btn {
  background-color: #28a745;
}

.next-question-btn:hover {
  background-color: #218838;
}
.correct {
  color: green;
  font-weight: bold;
}

.wrong {
  color: red;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .quiz-container {
    padding: 10px;
  }

  .quiz-card {
    width: 90%;
    padding: 15px;
  }

  .answer-input {
    width: 100%;
  }

  .answer-btn, .next-question-btn {
    width: 100%;
  }
}

</style>
