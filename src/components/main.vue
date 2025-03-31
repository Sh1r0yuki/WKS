<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <h1 class="page-title">Bienvenue sur notre Blind Test !</h1>
      <p class="page-description">
        Choisissez un style musical et lancez-vous dans un défi auditif entre amis. Qui saura reconnaître le plus de titres&nbsp;?
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
  padding: 2rem;
  text-align: center;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
}

.music-categories {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.category-button {
  background-color: #1e3a8a;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.category-button:hover {
  background-color: #374fcf;
}
</style>