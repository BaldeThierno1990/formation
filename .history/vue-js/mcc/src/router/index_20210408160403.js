import { createRouter, createWebHistory } from 'vue-router'
import Tableau from "@/components/Home.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Tableau
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
