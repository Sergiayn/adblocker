import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Countdown from 'vue3-flip-countdown'
import mitt from 'mitt'
const emitter = mitt()

createApp(App)
    .provide('emitter', emitter)
    .use(i18n).use(router).use(Countdown)
    .mount('#app')