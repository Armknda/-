<template>
  <div class="musiclist">
    <div
      class="list-item"
      v-for="(item, index) in artistList"
      :key="index"
      @click="enterArtistDetail(item)"
    >
      <img :src="getImgUrl(item)" alt @load="imgLoad" />
      <div class="title">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
// import { imgLoadMixin } from "assets/common/mixin";
export default {
  name: "MusicList",
  data() {
    return {
      imgCount: 1,
    };
  },
  props: {
    artistList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  //   mixins: [imgLoadMixin],
  methods: {
    getImgUrl(item) {
      return item.picUrl || item.coverImgUrl;
    },
    imgLoad() {
      if (this.imgCount == this.artistList.length) this.$emit("imgLoad");
      this.imgCount++;
    },
    enterArtistDetail(artist) {
      this.$router.push({
        path: "/artist",
        query: {
          artist: artist,
        },
      });
      this.$store.commit("addArtist", artist);
    },
  },
};
</script>
<style scoped>
.musiclist {
  width: 1500px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.musiclist .list-item {
  position: relative;
  margin: 5px 6px;
  width: 150px;
  padding-bottom: 10px;
  font-size: 13px;
}
.list-item img {
  width: 100%;
}
</style>