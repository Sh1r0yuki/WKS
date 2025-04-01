import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Page d'accueil
import Quiz from '../views/Quiz.vue';  // Page avec le quiz
import Result from '../views/Result.vue';  // Page des résultats

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/result', name: 'Result', component: Result },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
