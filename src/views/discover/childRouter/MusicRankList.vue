<template>
  <div class="ranklist">
    <scroll>
      排行榜
      <div class="ranktop"></div>
      <h2>全球榜</h2>
      <musiclist :personList="ranklist.slice(4)" />
    </scroll>
  </div>
</template>
<script>
import { _getRankList } from "network/discover";
import Scroll from "../../../components/common/scroll/Scroll.vue";

import Musiclist from "../../../components/content/musiclist/Musiclist.vue";
export default {
  name: "MusicRankList",
  data() {
    return {
      ranklist: [],
    };
  },

  components: {
    Scroll,
    Musiclist,
  },
  created() {
    _getRankList().then((res) => {
      // console.log(res);
      this.ranklist = res.data.list;
    });
  },
};
</script>
<style>
</style>