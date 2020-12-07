<template>
  <div class="category">
    <!-- <div class="tags">
      <span>热门标签:</span>
      <div
        class="tag-item"
        v-for="(item, index) in tags"
        :key="index"
        @click="tagClick(index)"
      >
        {{ item.name }}
      </div>
    </div> -->
    <nsmusiclist />
    <!-- :personList="musicList" -->
  </div>
</template>
<script>
import { getMusicListHot } from "network/discover";
import { _getHighquality } from "network/discover";
import Nsmusiclist from "components/content/newsongs/Nsmusiclist";
export default {
  name: "MusicListCategory",
  components: {
    Nsmusiclist,
  },
  data() {
    return {
      tags: [],
      musicList: [],
      limit: 24,
      currentIndex: 0,
    };
  },
  mounted() {
    getMusicListHot().then((res) => {
      // console.log(res);
      this.tags = res.data.tags;
      this.getHighquality();
      // console.log(this.personList);
    });
  },
  methods: {
    tagClick(index) {
      this.currentIndex = index;
      this.getHighquality();
    },
    getHighquality() {
      _getHighquality(this.tags[this.currentIndex].name, this.limit).then(
        (res) => {
          // console.log(res);
          this.musicList = res.data.playlists;
        }
      );
    },
  },
};
</script>
<style scoped>
.tags {
  width: 960px;
  height: 30px;
  display: flex;
  justify-content: right;
  margin: 5px auto 25px;
}
.tag-item {
  padding: 0 15px;
}
</style>