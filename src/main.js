import { createApp } from 'vue'
import router from "./router/index.js";

import './style.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')
