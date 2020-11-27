import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Individuation from 'views/discover/childRouter/Individuation'
import MusicListCategory from 'views/discover/childRouter/MusicListCategory'
import MusicRankList from 'views/discover/childRouter/MusicRankList'
import ArtistCategory from 'views/discover/childRouter/ArtistCategory'
import NewSongsR from 'views/discover/childRouter/NewSongsR'
const routes = [{
        path: '',
        redirect: '/discover/individ'
    }, {
        path: '/discover/individ',
        component: Individuation
    },
    {
        path: '/discover/category',
        component: MusicListCategory
    }, {
        path: '/discover/ranklist',
        component: MusicRankList
    }, {
        path: '/discover/artlist',
        component: ArtistCategory
    }, {
        path: '/discover/newsongs',
        component: NewSongsR
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    base: process.env.BASE_URL,
    routes
})

export default router