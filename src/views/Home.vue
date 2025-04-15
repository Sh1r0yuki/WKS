<template>
  <div class="home-container">
    <h1 class="page-title">Bienvenue sur notre BlindTest musical</h1>
    <p class="page-description">
      Choisis ton univers musical préféré et défie tes amis dans un quiz sonore captivant. Qui aura l’oreille la plus affûtée&nbsp;?
    </p>

    <div class="button-container">
      <RouterLink to="/paroles" class="category-button">🎤 Mode Paroles</RouterLink>
      <RouterLink to="/chansons" class="category-button">🎵 Mode Chansons</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 3rem 1rem;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.page-description {
  font-size: 1.3rem;
  max-width: 640px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.button-container {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.category-button {
  background-color: #1e3a8a;
  color: #ffffff;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.category-button:hover {
  background-color: #374fcf;
  transform: scale(1.05);
}
</style>
