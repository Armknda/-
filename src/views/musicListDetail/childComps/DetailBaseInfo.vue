<template>
  <div class="base" v-if="baseInfo != null">
    <div class="title">
      <img :src="baseInfo.img" alt="" @load="imgLoad" />
    </div>
    <div class="content">
      <div class="top">
        <span class="icon">歌单</span>
        <span class="topfont">{{ baseInfo.name }}</span>
        <div class="right">
          <table>
            <tr>
              <td>
                歌曲数
                <br />
                {{ baseInfo.trackCount }}
              </td>
              <td>
                播放量
                <br />
                {{ baseInfo.playCount }}
              </td>
            </tr>
          </table>
        </div>
        <div class="center">
          <div class="bofang">
            <img src="~assets/img/playmusic/bofang.svg" alt="" />
            播放全部
          </div>
          <div class="sub">
            <img src="~assets/img/detail/add.svg" alt="" />
            收藏({{ baseInfo.subscribedCount }})
          </div>
          <div class="share">
            <img src="~assets/img/detail/share.svg" alt="" />
            分享({{ baseInfo.shareCount }})
          </div>
        </div>
        <div class="desc">
          <div class="tag">
            标签:
            <span>{{ baseInfo.tags }}</span>
          </div>
          <div class="desc-item">
            {{ baseInfo.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      // console.log("2");
      this.$bus.$emit("listDetailLoad");
    },
  },
};
</script>
<style scoped>
.tag {
  opacity: 0.9;
}
.tag span {
  margin-left: 10px;
  color: #2e6bb0;
}
.desc-item {
  margin-top: 5px;
  height: 63px;
  overflow: hidden;
  opacity: 0.9;
}
.desc {
  margin-top: 15px;
}
.title {
  width: 200px;
  display: inline-block;
  margin-left: 200px;
}
.title img {
  width: 100%;
}
.base {
  position: relative;
  /* margin: 0px 20px; */
  padding-top: 30px;
  flex: 1;
  margin-bottom: 20px;
}
.content {
  position: relative;
  margin: 0 200px 0 50px;
  flex: 1;
}
.base {
  width: 100%;
  display: flex;
}
.top .right {
  width: 150px;
  float: right;
}
.topfont {
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
.right td {
  padding: 3px;
  text-align: center;
  opacity: 0.6;
}
.center {
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
}
.center div {
  background: #25272b;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 5px;
  display: flex;
  align-items: center;
}
.center img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.center .bofang {
  background: #ff0000;
}
</style>