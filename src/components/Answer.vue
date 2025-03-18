<template>
    <div class="answer-container">
      <p v-if="bonneReponse !== null">{{ message }}</p>
      <button v-if="bonneReponse !== null" @click="$emit('question-suivante')">
        Question suivante
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Answer",
    props: {
      estCorrecte: Boolean, // True si la réponse est correcte, sinon False
      points: Number, // Points gagnés si bonne réponse
    },
    computed: {
      message() {
        return this.estCorrecte
          ? `✅ Réponse correcte : Vous gagnez +${this.points} points.`
          : "❌ Réponse fausse : Vous ne gagnez rien.";
      },
      bonneReponse() {
        return this.estCorrecte;
      },
    },
  };
  </script>
  
  <style scoped>
  .answer-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  p {
    font-weight: bold;
  }
  </style>
  