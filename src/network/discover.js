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