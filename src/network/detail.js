import { request } from './request'
export function _getMusicListDetail(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id: id
        }
    })
}
export class baseInfo {
    constructor(playlist) {
        this.img = playlist.coverImgUrl;
        this.title = playlist.description;
        this.name = playlist.name;
        this.shareCount = playlist.shareCount;
        this.subscribedCount = playlist.subscribedCount;
        this.playCount = playlist.playCount;
        this.trackCount = playlist.trackCount;
        this.tags = playlist.tags[0];
    }
}