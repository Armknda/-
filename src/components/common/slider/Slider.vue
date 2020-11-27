<template>
  <div class="imgBox">
    <div v-for="item in banners" :key="item">
      <a :href="item.url">
        <img :src="item.imageUrl" />
      </a>
    </div>
  </div>
</template>
<script>
import { getBanner } from "network/discover";
export default {
  name: "Slider",
  data() {
    return {
      banners: [],
    };
  },
  created() {
    getBanner().then((res) => {
      console.log(res);
      this.banners = res.data.banners;
    });
  },
};
</script>
<style>
</style>