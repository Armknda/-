<template>
  <div id="app">
    <tab-bar></tab-bar>
    <tab></tab>
    <!-- <Main /> -->
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from "components/content/tabbar/TabBar";
import Tab from "./components/content/tab/tab.vue";
// import Main from "components/content/Main";
export default {
  name: "App",
  components: {
    TabBar,
    Tab,
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
