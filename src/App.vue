<template>
  <div id="app">
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "components/content/tabbar/TabBar";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>
<style>
@import url("./assets/css/base.css");
#app {
  width: 100%;
  height: 100vh;
  background: #8a9294;
  color: #fff;
  overflow: hidden;
  user-select: none;
}
</style>
