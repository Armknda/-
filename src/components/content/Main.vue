<template>
  <div class="main">
    <!-- <discover-music /> -->
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<script>
import DiscoverMusic from "../../views/discover/DiscoverMusic.vue";
export default {
  name: "Main",
  components: {
    DiscoverMusic,
  },
};
</script>
<style scoped>
.main {
  height: calc(100% - 45px - 60px);
  width: 100%;
  position: relative;
}
</style>