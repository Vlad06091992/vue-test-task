import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
const pinia = createPinia().use(piniaPluginPersistedstate)
createApp(App).use(pinia).mount('#app')
