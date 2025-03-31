<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <h1 class="page-title">Bienvenue sur notre site de BlindTest</h1>
      <p class="page-description">
        Sélectionne un style musical et mesure-toi à tes amis dans ce défi auditif. Qui aura l’oreille la plus affûtée&nbsp;?
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
import Footer from './footer.vue'

const categories = ['Pop', 'Rock', 'Jazz', 'Classique', 'Électro']
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe, #c7d2fe);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e3a8a;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
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

.music-categories {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
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
  transition: background-color 0.3s ease, transform 0.2s;
}

.category-button:hover {
  background-color: #374fcf;
  transform: scale(1.05);
}
</style>