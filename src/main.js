import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'flowbite'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL='https://waitheramunene.pythonanywhere.com/'
const app = createApp(App)
app.config.isCustomElement = tag => tag.startsWith('ion-')
app.use(createPinia())
app.use(router, axios)

app.mount('#app')

