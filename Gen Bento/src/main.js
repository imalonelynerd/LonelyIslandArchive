import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { setupNotifications } from '@/common/jsAssets/notificationSupport.js'
import { setupThemes } from '@/common/jsAssets/themeSupport.js'
import { Theme } from '@/assets/commonNecessities.js'

const app = createApp(App)

setupNotifications(app, 5)
setupThemes(app, Theme, Theme.Day, Theme.Night)
app.use(router)
app.mount('#app')
