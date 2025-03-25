<template>
  <div class="layout">
    <Header />
    <main class="main-content">
      <h1 class="page-title">Bienvenue sur notre site !</h1>
      <p class="page-description">
        Ceci est le contenu principal de la page. Vous pouvez y ajouter vos sections, vos composants et vos données dynamiques.
      </p>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './header.vue'
import Footer from './footer.vue'
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
  background-color: #f3f4f6; /* gray-100 */
  color: #1f2937; /* gray-800 */
}

.page-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.125rem;
}
</style>