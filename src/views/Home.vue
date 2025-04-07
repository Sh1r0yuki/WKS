<template>
    <div class="home-container">
      <h1>Bienvenue sur le Quiz Musical</h1>
      <button @click="startQuiz">Paroles de chansons</button>
      <button @click="startQuizz">Blind test</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startQuiz() {
        this.$router.push('/Paroles'); // Redirige vers le quiz
      },
      startQuizz() {
        this.$router.push('/Blind'); // Redirige vers le quizz
      },
    },
  };
  </script>
  
  <style scoped>
  /* Home.vue */
.home-container {
  max-width: 700px;
  margin: 80px auto;
  padding: 40px 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.home-container h1 {
  font-size: 2.5rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
}

.home-container button {
  background: linear-gradient(135deg, #ff8c00, #ff3b3b);
  color: white;
  padding: 14px 28px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.3s ease;
}

.home-container button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

  </style>
  