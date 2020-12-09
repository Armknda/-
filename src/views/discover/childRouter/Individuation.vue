<template>
  <div class="individuation">
    <scroll class="indici-scroll" ref="scroll">
      <keep-alive>
        <slider />
      </keep-alive>
      <div class="songs">推荐歌单</div>
      <musiclist />
      <private />
      <newsongs />
    </scroll>
  </div>
</template>
<script>
import Slider from "components/common/slider/Slider";
import Musiclist from "../../../components/content/musiclist/Musiclist.vue";
import Scroll from "../../../components/common/scroll/Scroll.vue";
import Private from "../../../components/content/private/Private.vue";
import Newsongs from "../../../components/content/newsongs/Newsongs.vue";
export default {
  name: "Individuation",
  components: {
    Slider,
    Musiclist,
    Scroll,
    Private,
    Newsongs,
  },
  created() {
    this.$bus.$on("sliderImageLoad", () => {
      this.$refs.scroll.refresh();
    });
    this.$bus.$on("musiclistImgLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    imgReady() {
      console.log("ready");
    },
  },
};
</script>
<style scoped>
.individuation {
  width: 100%;
  height: 100%;
}
.songs {
  width: 960px;
  margin: 7px auto;
  font-size: 20px;
  border-bottom: 1px solid #b8b6b6;
}
.indici-scroll {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>