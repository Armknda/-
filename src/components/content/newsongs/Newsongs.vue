<template>
  <div class="newSongs">
    <div class="top">最新音乐</div>
    <div class="content">
      <div class="item" v-for="(item, index) in songList" :key="index">
        <div class="number">{{ index + 1 }}</div>
        <div class="title">
          <img :src="item.picUrl" alt="" />
          <div class="icon">
            <img src="~assets/img/playmusic/bofang.svg" alt="" />
          </div>
        </div>
        <div class="message">
          <div>{{ item.name }}</div>
          <br />
          <div class="bottom">{{ item.song.album.company }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewSongs } from "network/discover";
export default {
  name: "newSongs",
  data() {
    return {
      songList: [],
    };
  },
  mounted() {
    getNewSongs().then((res) => {
      // console.log(res);
      this.songList = res.data.result;
    });
  },
};
</script>
<style scoped>
.top {
  width: 960px;
  margin: 8px auto;
  font-size: 20px;
  border-bottom: 1px solid #b8b6b6;
}
.number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
}
.icon {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 26px;
  left: 26px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
}
.icon img {
  width: 100%;
}
.item {
  width: 460px;
  height: 70px;
  display: flex;
  margin: 6px 5px;
}
.title {
  height: 100%;
  position: relative;
}
.title img {
  height: 100%;
}
.content {
  width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
.message {
  margin-left: 10px;
  font-size: 14px;
}
</style>