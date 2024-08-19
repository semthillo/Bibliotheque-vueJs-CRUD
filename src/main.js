import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

app.use(router)


createApp(App).mount('#app')
