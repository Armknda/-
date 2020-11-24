<template>
  <div class="discover">
    <nav-bar :list="list" ref="nav" />
    <div class="content">12</div>
  </div>
</template>
<script>
import NavBar from "./childComps/NavBar.vue";
export default {
  components: { NavBar },
  name: "DiscoverMusic",
  data() {
    return {
      list: [
        // { link:"/discover/individ",name="个性推荐" },
        // { link: "/discover/category", name: "歌单" },
        // { link: "/discover/ranklist", name: "排行榜" },
        // { link: "/discover/artist", name: "歌手" },
        // { link: "/discover/newsongs", name: "最新音乐" },
        // { link: "/discover/mv", name: "MV" },
      ],
    };
  },
};
</script>
<style>
</style>