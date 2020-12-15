<template>
  <div class="ranklist">
    <scroll class="rank-scroll" ref="scroll" v-if="ranklist.length !== 0">
      <div class="ranktop">
        <rank-list-item
          :rank-id="ranklist[0].id"
          :title="['飙', '升', '榜']"
          :bg-color="['#56a1e3', '#5a8beb']"
        />
        <new-item
          :rank-id="ranklist[1].id"
          :title="['新', '歌', '榜']"
          :bg-color="['#34aabe', '#56c2cd']"
        ></new-item>
        <original-item
          :rank-id="ranklist[2].id"
          :title="['原', '创', '榜']"
          :bg-color="['#d53d6a', '#eb638d']"
        ></original-item>
        <hot-item
          :rank-id="ranklist[3].id"
          :title="['热', '歌', '榜']"
          :bg-color="['#c7523c', '#cc7455']"
        ></hot-item>
        <song-item
          :rank-id="ranklist[4].id"
          :title="['歌', '手', '榜']"
          :bg-color="['#9455ce', '#9946c9']"
        ></song-item>
      </div>
      <h2>全球榜</h2>
      <rankmusiclist :personList="ranklist.slice(4)" />
    </scroll>
  </div>
</template>
<script>
import { _getRankList } from "network/discover";
import Scroll from "../../../components/common/scroll/Scroll.vue";
import Rankmusiclist from "../../../components/content/musiclist/Rankmusiclist.vue";
import RankListItem from "../childComps/RankListItem";
import newItem from "../childComps/RankListItem";
import originalItem from "../childComps/RankListItem";
import hotItem from "../childComps/RankListItem";
import songItem from "../childComps/RankListItem";
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
    RankListItem,
    newItem,
    originalItem,
    hotItem,
    songItem,
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
.ranklist {
  /* width: 100%; */
  height: 100%;
  overflow: hidden;
  position: relative;
}
.rank-scroll {
  height: 100%;
}
.ranktop {
  display: flex;
  justify-content: center;
}
.ranklist h2 {
  margin: 0px 175px;
  margin-bottom: 35px;
}
</style>