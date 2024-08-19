import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../components/Accueil.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: Accueil
        }
    ]
})