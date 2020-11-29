<template>
  <div class="slider">
    <div class="left">
      <div class="prev">
        <img src="~assets/img/swiper/prev.svg" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="next">
        <img src="~assets/img/swiper/next.svg" alt="" />
      </div>
    </div>
    <div class="imgBox">
      <!-- <div v-for="item in banners" :key="item" class="slider">
      <a :href="item.url" class="imgSize">
        <img :src="item.imageUrl" />
      </a>
    </div> -->
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