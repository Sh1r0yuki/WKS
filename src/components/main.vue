<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <h1 class="page-title">Bienvenue sur notre site !</h1>
      <p class="page-description">
        Choisissez une catégorie de blind test qui vous tente et affrontez vos amis !
      </p>

      <ul class="music-categories">
        <li class="category" v-for="style in categories" :key="style">
          <button class="category-button">{{ style }}</button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import Header from './header.vue'

const categories = ['Pop', 'Rock', 'Jazz', 'Classique', 'Électro']
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f0f9ff;
  color: #1e3a8a;
  text-align: center;
  width: 100%;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.music-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 62.5rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.category {
  display: flex;
  justify-content: center;
}

.category-button {
  background-color: #3b82f6;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 200px;
}

.category-button:hover {
  background-color: #60a5fa;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.category-button:focus {
  outline: 2px solid #1e3a8a;
  outline-offset: 2px;
}
</style>