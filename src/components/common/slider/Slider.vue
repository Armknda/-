<template>
  <div class="slider">
    <div class="left">
      <div class="prev">
        <img src="~assets/img/swiper/prev.svg" alt="" @click="prevImg" />
      </div>
    </div>
    <div
      class="imgBox"
      v-for="(item, index) in banners"
      :key="index"
      v-show="index == currentIndex"
    >
      <a :href="item.url" class="imglink">
        <img :src="item.imageUrl" alt="" />
      </a>
    </div>
    <div class="right">
      <div class="next">
        <img src="~assets/img/swiper/next.svg" alt="" @click="nextImg" />
      </div>
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
      currentIndex: 0,
      imgNumb: "",
    };
  },
  // props: {
  //   bannner: {
  //     type: Array,
  //     banners: [],
  //   },
  //   index: {
  //     type: Number,
  //     indexs: 0,
  //   },
  // },
  mounted() {
    getBanner().then((res) => {
      console.log(res);
      this.banners = res.data.banners;
      this.imgNumb = res.data.banners.length;
      // console.log(this.banners);
    });
  },
  methods: {
    prevImg: function () {
      if (this.currentIndex === 0) {
        return (this.currentIndex = this.imgNumb - 1);
      } else {
        return this.currentIndex--;
      }
    },
    nextImg: function () {
      if (this.currentIndex === this.imgNumb - 1) {
        return (this.currentIndex = 0);
      } else {
        return this.currentIndex++;
      }
    },
  },
};
</script>
<style>
.imgBox {
  width: 730px;
}
.imgBox img {
  width: 100%;
}
.left {
  width: 37px;
  margin-right: 20px;
}
.left img {
  width: 100%;
}
.right {
  width: 37px;
  margin-left: 20px;
}
.right img {
  width: 100%;
}
.slider {
  display: flex;
  overflow: hidden;
  width: 1000px;
  height: 270.36px;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}
</style>