<template>
  <div class="detail">
    <scroll class="detail-scroll" ref="scroll">
      <detail-base-info :baseInfo="baseInfo" />
      <music-item :musiclist="musiclist" @musicItemClick="PlayMusic" />
    </scroll>
  </div>
</template>
<script>
import Slider from "components/common/slider/Slider";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import MusicItem from "./childComps/MusicItem.vue";
import {
  _getMusicListDetail,
  baseInfo,
  _getSongDetail,
  songDetail,
} from "network/detail";

import Scroll from "../../components/common/scroll/Scroll.vue";
import { indexMixin } from "./indexMixin";
export default {
  name: "MusicListDetail",
  data() {
    return {
      id: null,
      musicListDetail: null,
      baseInfo: null,
      musiclist: [],
    };
  },
  components: {
    Scroll,
    DetailBaseInfo,
    MusicItem,
    Scroll,
  },
  mixins: [indexMixin],
  created() {
    this.id = this.$route.params.id;

    _getMusicListDetail(this.id).then((res) => {
      this.musicListDetail = res.data;
      this.baseInfo = new baseInfo(this.musicListDetail.playlist);
      // console.log(this.musicListDetail);
      for (let i of this.musicListDetail.playlist.trackIds) {
        _getSongDetail(i.id).then((res) => {
          let song = new songDetail(res.data.songs);
          this.musiclist.push(song);
        });
      }
      // console.log(this.musiclist);
    });
    setTimeout(() => {
      this.$refs.scroll.refresh();
    }, 8000);
    // this.$bus.$on("listDetailLoad", () => {
    //   this.$refs.scroll.refresh();
    // });
  },
  mounted() {
    this.$bus.$on("listDetailLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
};
</script>
<style scoped>
.detail {
  /* width: 100%; */
  /* height: 100vh; */
  height: 100%;
  overflow: hidden;
  position: relative;
}
.detail-scroll {
  height: calc(100% - 45px);
  /* width: 100%; */
  /* overflow: hidden; */
}
</style>