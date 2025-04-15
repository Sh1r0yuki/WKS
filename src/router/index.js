import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blind from '../views/Blind.vue'
import Paroles from '../views/Paroles.vue'
import Chansons from '../views/Chansons.vue'
import Result from '../views/Result.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blind', name: 'Blind', component: Blind },
  { path: '/paroles', name: 'Paroles', component: Paroles },
  { path: '/chansons', name: 'Chansons', component: Chansons },
  { path: '/resultat', name: 'Result', component: Result }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
