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
      <audio :src="playList[currentIndex].src" autoplay ref="audio"></audio>
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
          title: "海底",
          artist: "一支榴莲",
          index: "0",
          lrc: "",
          src:
            "http://m801.music.126.net/20201217172429/da992a875f89b4c7ce836236437058b5/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1497471810/ae4f/3676/98a8/c98c5b9f5350b8dcb34dfb81f94e73ec.mp3",
          pic:
            "https://p1.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg",
        },
      ],
      musicList: [],
    };
  },
  watch: {
    music() {
      if (this.$refs.audio != null) {
        this.$refs.audio.load();
      }
    },
  },
  mounted() {
    this.$bus.$on("playMusic", (list, index, path, musicList) => {
      this.playList = [];
      this.path = path;
      this.playList = list;
      this.musicList = musicList;
      this.playList = this.playList.sort((a, b) => {
        return a.index - b.index;
      });
      // console.log(this.playList);
      this.setCurrentIndex(index);
    });
    this.$bus.$on("PlayMusicListItem", (index) => {
      this.setCurrentIndex(index);
    });
  },
  methods: {
    setCurrentIndex(index) {
      for (let i in this.playList) {
        if (this.playList[i].index == index) {
          this.currentIndex = i;
          break;
        }
      }
    },
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