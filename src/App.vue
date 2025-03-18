<template>
  <div>
    <h1>Quiz Musical</h1>

    <div v-if="question">
      <p>{{ question.intitule }}</p>
      
      <Input v-if="bonneReponse === null" @reponse-saisie="verifierReponse" />
      
      <Answer
        v-if="bonneReponse !== null"
        :estCorrecte="bonneReponse"
        :points="question.points"
        @question-suivante="chargerQuestionSuivante"
      />
    </div>

    <p v-else>Chargement de la question...</p>
    <p>Score actuel : {{ score }} points</p>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import Answer from "./components/Answer.vue";

export default {
  components: {
    Input,
    Answer,
  },
  data() {
    return {
      score: 0,
      questions: [],
      indexQuestion: 0,
      question: null,
      bonneReponse: null,
    };
  },
  async created() {
    await this.chargerQuestions();
  },
  methods: {
    async chargerQuestions() {
      try {
        const response = await fetch("https://quizz-musical-backend.airdev.be/api");
        this.questions = await response.json();
        this.chargerQuestionSuivante();
      } catch (error) {
        console.error("Erreur lors du chargement des questions :", error);
      }
    },
    chargerQuestionSuivante() {
      if (this.indexQuestion < this.questions.length) {
        this.question = this.questions[this.indexQuestion];
        this.indexQuestion++;
        this.bonneReponse = null;
      } else {
        alert("🎉 Quiz terminé ! Score final : " + this.score);
      }
    },
    verifierReponse(reponseUtilisateur) {
      if (!this.question) return;
      this.bonneReponse =
        reponseUtilisateur.trim().toLowerCase() ===
        this.question.reponseCorrecte.toLowerCase();
      if (this.bonneReponse) {
        this.score += this.question.points;
      }
    },
  },
};
</script>
