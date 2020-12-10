<template>
    <div class="base" v-if="baseInfo!=null">
        <div class="title">
            <img :src="baseInfo.img" alt="">
        </div>
        <div class="content">
            <div class="top">
                <span class="icon">歌单</span>
                <span class="topfont">{{baseInfo.name}}</span>
                <div class="right">
                    <table>
                        <tr>
                            <td>
                            歌曲数
                            <br>
                            {{baseInfo.trackCount}}
                            </td>
                            <td>
                            播放量
                            <br>
                            {{baseInfo.playCount}}
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="center">
                    <div class="bofang">
                        <img src="~assets/img/playmusic/bofang.svg" alt="">
                        播放全部
                    </div>
                    <div class="sub">
                        <img src="~assets/img/detail/add.svg" alt="">
                        收藏({{baseInfo.subscribedCount}})
                    </div>
                    <div class="share">
                        <img src="~assets/img/detail/share.svg" alt="">
                        分享({{baseInfo.shareCount}})
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailBaseInfo",
    props:{
        baseInfo:{
            type:Object,
            default(){
                return{};
            }
        }
    }
}
</script>
<style scoped>
.title{
    width: 200px;
    display: inline-block;
    margin-left: 200px;
}
.title img{
    width: 100%;
}
.base {
    position: relative;
    /* margin: 0px 20px; */
    padding-top:30px;
    flex: 1;
}
.content{
    position: relative;
    margin: 0 200px 0 50px;
    flex: 1;
}
.base{
    width: 100%;
    display: flex;
}
.top .right{
    float: right;
}
.topfont{
    font-size: 20px;
    opacity: 0.9;
}
.icon {
    border: 1px solid red;
    border-radius: 4px;
    color: red;
    padding: 5px;
    margin-right: 10px;
    font-size: 14px;
}
.right td{
    padding: 3px;
    text-align: center;
    opacity: 0.6;
}
.center{
    margin-top: 50px;
    display: flex;
}
.center div{
    background: #25272b;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 0 5px;
}
.center img{
    width: 18px;
    height: 18px;
}
</style>