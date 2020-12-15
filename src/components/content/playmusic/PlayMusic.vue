<template>
  <div class="play-music">
    <div class="player-music-left">
      <div class="pre">
        <img src="~assets/img/playmusic/pre.png" alt="" />
      </div>
      <div class="play">
        <img src="~assets/img/playmusic/play.png" alt="" v-show="!isPlay" />
        <img src="~assets/img/playmusic/play2.png" alt="" v-show="isPlay" />
        <!-- <img src="" alt=""> -->
      </div>
      <div class="next">
        <img src="~assets/img/playmusic/next.png" alt="" />
      </div>
    </div>

    <div class="player-music-right" v-if="playList[currentIndex] != null">
      <div class="middle">
        <img :src="playList[currentIndex].pic" alt="" />
      </div>
      <div class="play">
        <div class="music-top-center">
          <div class="music-title">{{ playList[currentIndex].title }}</div>
          <div class="music-artist">{{ playList[currentIndex].artist }}</div>
        </div>
        <div class="music-pro">
          <div class="currentTime">{{ currentTime }}</div>
          <div class="totalTime">{{ duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlayMusic",
  data() {
    return {
      isPlay: false,
      isVolume: false,
      isLyric: false,
      isMusicList: false,
      isShade: false,
      isPlayerShow: false,
      path: "",
      currentIndex: 0,
      schemaIndex: 0,
      currentTime: "00:00",
      duration: "00:00",
      lyric: "",
      playList: [
        {
          title: "爱存在（抖音版）（翻自 魏奇奇）",
          artist: "如懿",
          index: "0",
          lrc: "",
          src:
            "http://m8.music.126.net/20200708181541/dc873a2b4b00f9a2713fced8afe9cd72/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2839783247/945a/f45b/fa89/87264bf976128116dd2394e5f97c807a.mp3",
          pic:
            "https://p1.music.126.net/Y3MgpdL1iMno2g0yDnfMXQ==/109951165054657451.jpg",
        },
      ],
      musicList: [],
    };
  },
};
</script>
<style scoped>
.music-pro {
  display: flex;
  justify-content: center;
}
.music-top-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-music-right {
  display: flex;
  align-items: center;
  width: 1150px;
  height: 100%;
}
.middle {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.middle img {
  height: 100%;
}
.play-music {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #212124;
  position: relative;
  /* padding: 0px 380px; */
}
.player-music-left {
  display: flex;
  height: 100%;
  width: 190px;
  /* float: left; */
  align-items: center;
  justify-content: center;
  margin-left: 290px;
}
.player-music-left div {
  cursor: pointer;
}
.player-music-left .play img {
  width: 55px;
  height: 55px;
}
</style>