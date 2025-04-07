<template>
    <div class="result-container">
      <h1>Résultats du Quiz</h1>
      <p>Votre score : {{ score }} points</p>
      <button @click="goHome">Retour à l'accueil</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        score: 0, // Score final du quiz
      };
    },
    methods: {
      goHome() {
        this.$router.push('/Home'); // Redirige vers la page d'accueil
      },
    },
    mounted() {
      // Tu peux ici récupérer le score global du quiz, si tu l'as stocké dans un store ou autre
    },
  };
  </script>
  
  <style scoped>
  .result-container {
    text-align: center;
    margin-top: 20px;
  }
  button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  