<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Accéder aux données depuis la navigation
const score = Number(sessionStorage.getItem('quiz-score') || 0)
const questions = JSON.parse(sessionStorage.getItem('quiz-questions') || '[]')
const total = questions.reduce((sum, q) => sum + q.points, 0)


const restart = () => {
  router.push('/')
}
</script>

<template>
  <div class="results-container">
    <h2>Quiz terminé !</h2>
    <p>Tu as obtenu <strong>{{ score }}</strong> points sur <strong>{{ total }}</strong></p>
    <button @click="restart">Rejouer</button>
  </div>
</template>
