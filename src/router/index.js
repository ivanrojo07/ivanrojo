import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import store from '../store';
const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router