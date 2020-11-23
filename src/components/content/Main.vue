<template>
  <div class="main">
    1
    <router-view />
  </div>
</template>
<script>
import DiscoverMusic from "views/discover/DiscoverMusic";
export default {
  name: "Main",
  components: {
    DiscoverMusic,
  },
};
</script>
<style>
</style>