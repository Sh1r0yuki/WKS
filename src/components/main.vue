<template>
  <div class="layout">
    <Header />
    
    <main class="main-content">
      <h1 class="page-title">Bienvenue sur notre site !</h1>
      <p class="page-description">
        Choisissez une catégorie de blind test qui vous tente et battez vos amis!
      </p>

      <ul class="music-categories">
        <li class="category">Pop</li>
        <li class="category">Rock</li>
        <li class="category">Jazz</li>
        <li class="category">Classique</li>
        <li class="category">Électro</li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import Header from './header.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
  background-color: #f0f9ff; /* Bleu très clair */
  color: #1e3a8a;           /* Bleu profond */
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.25rem;
  margin-bottom: 2rem; /* Ajout pour un meilleur espacement avant la liste */
}

.music-categories {
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.category {
  background-color: #3b82f6; /* Bleu clair */
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category:hover {
  background-color: #60a5fa; /* Bleu plus clair au survol */
}

.footer-text {
  font-size: 0.875rem;
  margin: 0.25rem 0;
}

h1{
  text-align: center;
}
</style>