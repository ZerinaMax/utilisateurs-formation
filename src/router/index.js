import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UtilisateursView from '../views/UtilisateursView'
import AjouterView from '../views/AjouterView'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: HomeView
  },
  {
    path: '/utilisateurs',
    name: 'utilisateurs',
    component: UtilisateursView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: AjouterView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
