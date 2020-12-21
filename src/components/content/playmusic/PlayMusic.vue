<template>
  <div class="play-music">
    <div class="player-music-left">
      <div class="pre" @click="preMusic()">
        <img src="~assets/img/playmusic/pre.png" alt="" />
      </div>
      <div class="play" @click="toggle()">
        <img src="~assets/img/playmusic/play.png" alt="" v-show="!isPlay" />
        <img src="~assets/img/playmusic/play2.png" alt="" v-show="isPlay" />
        <!-- <img src="" alt=""> -->
      </div>
      <div class="next" @click="nextMusic()">
        <img src="~assets/img/playmusic/next.png" alt="" />
      </div>
    </div>

    <div class="player-music-right" v-if="playList[currentIndex] != null">
      <audio
        :src="playList[currentIndex].src"
        autoplay
        ref="audio"
        @timeupdate="audioTimeUpdate()"
        @playing="musicPlaying()"
        @pause="musicPause()"
        @ended="musicEnded()"
      ></audio>

      <div class="middle">
        <img :src="playList[currentIndex].pic" alt="" />
      </div>
      <div class="play">
        <div class="music-top-center">
          <div class="music-title">{{ playList[currentIndex].title }}</div>
          <div class="music-artist">{{ playList[currentIndex].artist }}</div>
        </div>
        <div class="music-pro">
          <music-progress ref="music_pro" @childclick="setMusicCurrent" />
          <div class="currentTime">{{ currentTime }}/</div>
          <div class="totalTime">{{ duration }}</div>
        </div>
      </div>
      <div class="volumn">
        <div class="volumn-icon" @click="toggleVolume()">
          <img
            src="~assets/img/playmusic/volumn.svg"
            alt=""
            v-show="!isVolume"
          />
          <img
            src="~assets/img/playmusic/novolumn.svg"
            alt=""
            v-show="isVolume"
          />
        </div>
        <volume-progress ref="volume_pro" @childclick="setVolume" />
      </div>
      <div class="icon">
        <div class="schema" @click="toggleSchema()">
          <a href="#" title="顺序播放" v-show="schemaIndex == 0">
            <img src="~assets/img/playmusic/sunxubofang.svg" />
          </a>
          <a href="#" title="随机播放" v-show="schemaIndex == 1">
            <img src="~assets/img/playmusic/suijibofang.svg" />
          </a>
          <a href="#" title="单曲循环" v-show="schemaIndex == 2">
            <img src="~assets/img/playmusic/danquxunhuan.svg" />
          </a>
        </div>
        <div class="music-list" @click="toggleMusicList()">
          <a href="#" title="歌单">
            <img src="~assets/img/playmusic/list.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <play-music-list
      class="paly-music-list"
      v-show="isMusicList"
      :music-list="musicList"
    />
  </div>
</template>
<script>
import MusicProgress from "components/common/progress/Progress";
import VolumeProgress from "components/common/progress/Progress";
import PlayMusicList from "./PlayMusicList";
import { formatDate } from "assets/common/tool";
export default {
  name: "PlayMusic",
  components: {
    MusicProgress,
    VolumeProgress,
    PlayMusicList,
  },
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
      // this.playList = [];
      this.path = path;
      this.playList = list;
      this.musicList = musicList;
      // this.playList = this.playList.sort((a, b) => {
      //   return a.index - b.index;
      // });
      // console.log(this.musicList);
      // console.log(this.playList);
      this.setCurrentIndex(index);
    });
    // this.$bus.$on("PlayMusicListItem", (index) => {
    //   this.setCurrentIndex(index);
    // });
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
    setMusicCurrent(scale) {
      this.$refs.audio.currentTime = scale * this.$refs.audio.duration;
    },
    audioTimeUpdate() {
      if (this.$refs.audio != null) {
        this.currentTime = formatDate(
          new Date(this.$refs.audio.currentTime * 1000),
          "mm:ss"
        );
        this.duration = formatDate(
          new Date(this.$refs.audio.duration * 1000),
          "mm:ss"
        );
        let scale = this.$refs.audio.currentTime / this.$refs.audio.duration;
        this.$refs.music_pro.setProgress(scale);

        // if (this.$refs.audio.currentTime !== null) {
        //   this.$refs.lyric.scrollLyric(this.$refs.audio.currentTime);
        //   this.$refs.player.$refs.playerLyric.maxScroll(
        //     this.$refs.audio.currentTime
        //   );
        // }
      }
    },
    musicPlaying() {
      this.isPlay = true;
      this.$bus.$emit(
        "Playing",
        this.playList[this.currentIndex].index,
        this.path
      );
      if (this.$refs.player != null) this.$refs.player.isPlay = true;
    },
    musicPause() {
      this.isPlay = false;
      if (this.$refs.player != null) this.$refs.player.isPlay = false;
    },
    toggle() {
      this.isPlay = !this.isPlay;
      if (this.isPlay && this.$refs.audio.readyState == 4)
        this.$refs.audio.play();
      else {
        this.$refs.audio.pause();
      }
    },
    setVolume(scale) {
      this.$refs.audio.volume = scale;
    },
    toggleMusicList() {
      this.isMusicList = !this.isMusicList;
    },
    toggleVolume() {
      this.isVolume = !this.isVolume;
      if (this.isVolume) {
        this.$refs.audio.volume = 0.0;
      } else {
        this.$refs.audio.volume = 0.5;
        this.$refs.volume_pro && this.$refs.volume_pro.setProgress(0.5);
      }
    },
    musicEnded() {
      switch (this.schemaIndex) {
        case 0:
          this.currentIndex >= this.playList.length - 1
            ? 0
            : this.currentIndex++;
          break;
        case 1:
          this.currentIndex = Math.floor(Math.random() * this.playList.length);
          break;
        case 3:
          break;
      }
    },
    nextMusic() {
      if (this.currentIndex >= this.playList.length - 1) this.currentIndex = 0;
      else this.currentIndex++;
      this.$refs.audio.src = this.playList[this.currentIndex].src;
    },
    preMusic() {
      if (this.currentIndex <= 0) this.currentIndex = this.playList.length - 1;
      else this.currentIndex--;
      this.$refs.audio.src = this.playList[this.currentIndex].src;
    },
    toggleSchema() {
      if (this.schemaIndex >= 2) this.schemaIndex = 0;
      else this.schemaIndex++;
    },
  },
};
</script>
<style scoped>
.icon {
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  /* width: 40px; */
}
.schema {
  width: 17px;
  margin-left: 10px;
}
.schema img {
  width: 100%;
}
.music-list {
  width: 17px;
  margin-left: 30px;
}
.music-list img {
  width: 100%;
}
.currentTime {
  margin-left: 5px;
}
.volumn {
  width: 150px;
  height: 30px;
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.volumn-icon {
  margin-right: 10px;
}
.volumn .volumn-icon img {
  height: 17px;
}
.music-artist {
  margin-left: 20px;
}
.music-pro {
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.music-top-center {
  width: 498px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-music-right {
  display: flex;
  align-items: center;
  width: 950px;
  height: 100%;
  /* margin-right: 290px; */
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