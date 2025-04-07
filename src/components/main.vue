<template>
  <main class="main">
    <section class="intro-section">
      <h2 class="intro-title">Bienvenue dans le Blind Test musical!</h2>
      <p class="intro-text">
        Teste tes connaissances musicales en devinant des chansons à partir d’extraits audio.
        Saura-tu reconnaître tous les titres et devenir le champion du son?
      </p>
      <button class="start-button">Commencer le jeu</button>
    </section>
  </main>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }

.main {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #e0f2fe, #f0f9ff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 3rem 1.5rem;
}

.intro-section{
  background-color: red;
}

.intro-section {
  text-align: center;
  max-width: 37.5rem;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 10px 1.5625rem rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-out;
}

.intro-title {
  font-size: 2rem;
  color: #1d4ed8;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #1e293b;
}

.start-button {
  padding: 0.75rem 2rem;
  background-color: #3b82f6;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.3s ease;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.start-button:hover{
  background-color: rgb(119, 187, 18);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>