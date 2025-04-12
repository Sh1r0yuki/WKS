import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Page d'accueil
import Paroles from '../views/Paroles.vue';  // Page avec les paroles
import Blind from '../views/Blind.vue';  // Page avec le Blind test
import Result from '../views/Result.vue';  // Page des résultats

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Paroles', name: 'Paroles', component: Paroles },
  { path: '/Blind', name: 'Blind', component: Blind },
  { path: '/result', name: 'Result', component: Result, props: true },,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
