import { request } from './request'
export function getBanner() {
    return request({
        url: '/banner'
    })
}
export function getRecommendResource() {
    return request({
        url: '/personalized?limit=12',
    })
}
export function getPrivateResource() {
    return request({
        url: '/personalized/privatecontent/list?limit=3'
    })
}
export function getNewSongs() {
    return request({
        url: '/personalized/newsong'
    })
}
export function getMusicListHot() {
    return request({
        url: '/playlist/hot'
    })
}
export function _getHighquality(cat, limit) {
    return request({
        url: '/top/playlist/highquality',
        params: {
            cat: cat,
            limit: limit
        }
    })
}