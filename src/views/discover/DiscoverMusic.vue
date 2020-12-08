<template>
  <div class="discover">
    <Tab />
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Tab from "../../components/content/tab/tab.vue";
// import Tab from "./components/content/tab/tab.vue";
export default {
  name: "DiscoverMusic",
  components: {
    Tab,
  },
};
</script>
<style scoped>
.discover {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
}
</style>