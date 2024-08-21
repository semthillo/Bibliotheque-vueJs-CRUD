import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'
import Livre from '../components/Livre.vue'
import Membre from '../components/Membre.vue'
import Pret from '../components/Pret.vue'
import ListeLivre from '../components/listeLivre.vue'

const routes=[
    { path: '/', component: Accueil },
  { path: '/Livre', component: Livre },
  { path: '/Membre', component: Membre },
  { path: '/Pret', component: Pret },
  { path: '/ListeLivre', component: ListeLivre },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router