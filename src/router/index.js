import Vue from 'vue'
import VueRouter from 'vue-router'


// import Individuation from 'views/discover/childRouter/Individuation'
// import MusicListCategory from 'views/discover/childRouter/MusicListCategory'
// import MusicRankList from 'views/discover/childRouter/MusicRankList'
// import ArtistCategory from 'views/discover/childRouter/ArtistCategory'
// import NewSongsR from 'views/discover/childRouter/NewSongsR'

const DiscoverMusic = () =>
    import ('views/discover/DiscoverMusic')
const Individuation = () =>
    import ('views/discover/childRouter/Individuation')
const MusicListCategory = () =>
    import ('views/discover/childRouter/MusicListCategory')
const MusicRankList = () =>
    import ('views/discover/childRouter/MusicRankList')
const ArtistCategory = () =>
    import ('views/discover/childRouter/ArtistCategory')
const NewSongsR = () =>
    import ('views/discover/childRouter/NewSongsR')


const MusicListDetail = () =>
    import ('views/musicListDetail/MusicListDetail')



Vue.use(VueRouter)
const routes = [{
        path: '',
        redirect: '/discover'
    }, {
        path: '/discover',
        component: DiscoverMusic,
        children: [{
                path: '/',
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
    },
    {
        path: '/musiclistdetail/:id/',
        name: 'detail',
        component: MusicListDetail,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router