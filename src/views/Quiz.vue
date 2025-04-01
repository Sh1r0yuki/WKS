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
  