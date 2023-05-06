import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'
import gStore from '@/stores'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.provide('gStore', gStore)
app.mount('#app')
