<template>
  <div class="musiclist">
    <div class="list-item">
      <img src="" alt="" />
      <div class="title"></div>
      <div class="count">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommendResource } from "network/discover";
export default {
  name: "Musiclist",
  props: {
    personList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    getRecommendResource().then((res) => {
      console.log(res);
    });
  },
};
</script>
<style>
</style>