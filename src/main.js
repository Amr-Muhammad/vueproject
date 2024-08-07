import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import RegisterationComponent from './components/registerationComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComponent from './components/welcomeComponent.vue'
import LoginComponent from './components/loginComponent.vue'
import DashBoardComponent from './components/dashBoardComponent.vue'


const routes = [
    { path: "/", component: LoginComponent, alias: "/login" },
    { path: "/register", component: RegisterationComponent },
    { path: "/welcome", component: WelcomeComponent },
    { path: "/dashboard", component: DashBoardComponent },
    {
        path: '/:NotFound(.*)*', component: ErrorComponent, meta: {
            hidenavBar: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
