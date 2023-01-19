import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './styles/app.scss'

import KeenUI from './components/keen-ui/index.js'
// import "@/styles/keen-ui/index.scss"

const app = createApp(App)
.use(router)
.use(KeenUI)
.mount('#app')