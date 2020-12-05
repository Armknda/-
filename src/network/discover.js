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