<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const score = Number(route.query.score || 0)
const questions = JSON.parse(route.query.questions || '[]')
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
