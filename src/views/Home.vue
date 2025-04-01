<template>
    <div class="home-container">
      <h1>Bienvenue sur le Quiz Musical</h1>
      <button @click="startQuiz">Démarrer le Quiz</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startQuiz() {
        this.$router.push('/quiz'); // Redirige vers le quiz
      },
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    margin-top: 50px;
  }
  button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  