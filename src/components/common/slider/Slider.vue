<template>
  <div class="parentSlider">
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
      <div class="dots">
        <span class="dotsStyle" v-for="item in dots" :key="item"></span>
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
      dots: [],
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
      this.initDots();
      // console.log(this.imgNumb);
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
    initDots: function () {
      this.dots = new Array(this.imgNumb);
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
  opacity: 0.4;
}
.left img:hover {
  opacity: 1;
}
.right {
  width: 37px;
  margin-left: 20px;
}
.right img {
  width: 100%;
  opacity: 0.4;
}
.right img:hover {
  opacity: 1;
}
.slider {
  display: flex;
  overflow: hidden;
  width: 1000px;
  height: 270.36px;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  position: relative;
}
.dots {
  width: 730px;
  height: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8px;
}
.dotsStyle {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 50%;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.5);
}
</style>