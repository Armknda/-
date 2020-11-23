import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const DiscoverMusic = () =>
    import ('views/discover/DiscoverMusic')
const routes = [{
    path: '/discover',
    // name: 'Home',
    // name: 'DiscoverMusic'
    component: DiscoverMusic,
    children: [{
            path: '/',
            redirect: '/discover/individ'
        },
        {
            path: '/discover/individ',
        },
        {
            path: '/discover/category',
        },
        {
            path: '/discover/ranklist',
        },
        {
            path: '/discover/artlist',
        },
        {
            path: '/discover/newsongs',
        },
        {
            path: '/discover/mv',
        }
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router