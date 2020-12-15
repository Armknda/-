<template>
  <div id="app">
    <tab-bar></tab-bar>
    <!-- <tab></tab> -->
    <Main />
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <play-music />
  </div>
</template>
<script>
import TabBar from "components/content/tabbar/TabBar";
import Main from "./components/content/Main.vue";
import PlayMusic from "./components/content/playmusic/PlayMusic.vue";
export default {
  name: "App",
  components: {
    TabBar,
    Main,
    PlayMusic,
    // Tab,
    // Main,
  },
};
</script>
<style>
@import url("./assets/css/base.css");
#app {
  width: 100%;
  height: 100vh;
  background: #18171f;
  color: #fff;
  overflow: hidden;
  user-select: none;
}
</style>
