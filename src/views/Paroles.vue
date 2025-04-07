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
        bonneReponse: null,
      score: 0,
      isQuizFinished: false,
      resetInput: false,
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
  /* Quiz.vue */
.quiz-container {
  max-width: 700px;
  margin: 60px auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  text-align: center;
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.quiz-container h1 {
  font-size: 2rem;
  margin-bottom: 25px;
  font-weight: bold;
}

.quiz-container p {
  font-size: 1.2rem;
  margin-top: 15px;
}

  </style>
  
