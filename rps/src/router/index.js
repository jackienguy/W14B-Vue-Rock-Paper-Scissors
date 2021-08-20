import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GamePage from '../views/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/GamePage',
    name: 'Game Page',
    component: GamePage
  }
]

const router = new VueRouter({
  routes
})

export default router
