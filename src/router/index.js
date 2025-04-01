import { createRouter, createWebHistory } from 'vue-router'
import Quizz from '@/views/Quizz.vue' // Import the Quizz page

const routes = [
  { path: '/', component: Quizz } // Default route to Quizz
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
