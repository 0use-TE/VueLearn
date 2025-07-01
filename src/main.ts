import { createApp } from 'vue'
import App from './App.vue'

// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入 Bootstrap JS（包含 Popper）
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

let app= createApp(App)
app.mount("#app")