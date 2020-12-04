<template>
  <div class="individuation">
    <scroll class="content" ref="scroll">
      <keep-alive>
        <slider />
      </keep-alive>
      <div class="songs">推荐歌单</div>
      <musiclist @load="imgReady" />
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import Slider from "components/common/slider/Slider";
import Musiclist from "../../../components/content/musiclist/Musiclist.vue";
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  name: "Individuation",
  components: {
    Slider,
    Musiclist,
    Scroll,
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
  margin: 5px auto;
}
.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>