<template>
  <div class="individuation">
    <scroll class="content" ref="scroll">
      <keep-alive>
        <slider />
      </keep-alive>
      <div class="songs">推荐歌单</div>
      <musiclist @load="imgReady" />
      <private />
      <newsongs />
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>