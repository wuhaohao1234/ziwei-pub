import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MajorStars from '../views/MajorStars.vue'
import MinorStars from '../views/MinorStars.vue'
import Palace from '../views/Palace.vue'
import Mutagen from '../views/Mutagen.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/palace',
    name: 'Palace',
    component: Palace
  },
  {
    path: '/major-stars',
    name: 'MajorStars',
    component: MajorStars
  },
  {
    path: '/minor-stars',
    name: 'MinorStars',
    component: MinorStars
  },
  {
    path: '/mutagen',
    name: 'Mutagen',
    component: Mutagen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 