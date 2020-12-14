<template>
  <div class="ranklist">
    <scroll>
      排行榜
      <div class="ranktop"></div>
      <h2>全球榜</h2>
      <rankmusiclist :personList="ranklist.slice(4)" />
    </scroll>
  </div>
</template>
<script>
import { _getRankList } from "network/discover";
import Scroll from "../../../components/common/scroll/Scroll.vue";
import Rankmusiclist from "../../../components/content/musiclist/Rankmusiclist.vue";

export default {
  name: "MusicRankList",
  data() {
    return {
      ranklist: [],
    };
  },

  components: {
    Scroll,
    Rankmusiclist,
  },
  created() {
    _getRankList().then((res) => {
      this.ranklist = res.data.list;
      // console.log(this.ranklist);
    });
  },
};
</script>
<style>
</style>