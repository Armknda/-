<template>
  <div class="category">
    <div class="tags">
      <span>热门标签:</span>
      <div class="tag-item" v-for="(item, index) in tags" :key="index">
        {{ item.name }}
      </div>
    </div>
    <musiclist :personList="musicList" />
  </div>
</template>
<script>
import { getMusicListHot } from "network/discover";
import { getHighquality } from "network/discover";
import Musiclist from "../../../components/content/musiclist/Musiclist.vue";
export default {
  name: "MusicListCategory",
  components: {
    Musiclist,
  },
  data() {
    return {
      tags: [],
      musicList: [],
    };
  },
  mounted() {
    getMusicListHot().then((res) => {
      console.log(res);
      this.tags = res.data.tags;
    });
  },
};
</script>
<style scoped>
.tags {
  width: 960px;
  display: flex;
  justify-content: right;
  margin: 0 auto;
}
.tag-item {
  padding: 0 15px;
}
</style>