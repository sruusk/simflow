import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App)
app.use(PerfectScrollbar, {
    options: {
        suppressScrollX: true,
        swipeEasing: true,
    }
})

app.mount('#app')

app.config.errorHandler = (err) => {
    console.error(err);
}
