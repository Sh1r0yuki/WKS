<template>
  <div class="layout">
    <Header />

    <main class="main-content">
      <h1 class="page-title">Bienvenue sur notre site de BlindTest</h1>
      <p class="page-description">
        Sélectionne un style musical et mesure-toi à tes amis dans ce défi auditif. Qui aura l’oreille la plus affûtée&nbsp;?
      </p>

      <div v-if="isLoading" class="loader">Chargement des catégories...</div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <ul
        v-if="musicCategories.length && !isLoading"
        class="music-categories"
      >
        <li
          class="category"
          v-for="(style, index) in musicCategories"
          :key="style.id || index"
        >
          <button
            class="category-button"
            :aria-label="`Catégorie ${style.name || style}`"
          >
            {{ style.name || style }}
          </button>
        </li>
      </ul>
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './header.vue'
import Footer from './footer.vue'

const musicCategories = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

onMounted(fetchCategories)

async function fetchCategories() {
  try {
    const response = await fetch('https://quizz-musical-backend.airdev.be/api/categories')

    if (!response.ok) {
      throw new Error(`Échec du chargement : ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    if (Array.isArray(data) && data.length > 0) {
      musicCategories.value = data
    } else {
      console.warn('Données vides ou format inattendu :', data)
      errorMessage.value = "Aucune catégorie trouvée ou format de données invalide."
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories musicales :', error)
    errorMessage.value = "Impossible de charger les catégories. Veuillez réessayer plus tard."
  } finally {
    isLoading.value = false
  }
}
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

.loader {
  font-size: 1.1rem;
  font-style: italic;
  color: #475569;
  margin-bottom: 2rem;
}

.error-message {
  color: #dc2626;
  font-weight: bold;
  margin-bottom: 2rem;
}

.music-categories {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.category-button:hover {
  background-color: #374fcf;
  transform: scale(1.05);
}
</style>