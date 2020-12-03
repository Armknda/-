import { request } from './request'
export function getBanner() {
    return request({
        url: '/banner'
    })
}
export function getRecommendResource(cookie, uid) {
    return request({
        url: '/recommend/songs',
        // xhrFields: { withCredentials: true },
        params: {
            cookie: cookie,
            uid: uid,
        },
    })
}