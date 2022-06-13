import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UtilisateursView from '../views/UtilisateursView'
import AjouterView from '../views/AjouterView'
import ModifierView from '../views/ModifierView'

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
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: AjouterView
  },
  {
    path: '/modifier',
    name: 'modifier',
    component: ModifierView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
