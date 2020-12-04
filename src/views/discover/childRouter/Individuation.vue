<template>
  <div class="individuation">
    <keep-alive>
      <slider />
    </keep-alive>
    <div class="songs">推荐歌单</div>
    <musiclist />
  </div>
</template>
<script>
import Slider from "components/common/slider/Slider";
import MusicList from "components/content/musiclist/Musiclist";
import Musiclist from "../../../components/content/musiclist/Musiclist.vue";

export default {
  name: "Individuation",
  components: {
    Slider,
    Musiclist,
  },
};
</script>
<style>
.songs {
  width: 960px;
  margin: 5px auto;
}
</style>