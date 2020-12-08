<template>
  <div class="musiclist">
    <div class="list-item" v-for="(item, index) in personList" :key="index">
      <img :src="item.picUrl" alt="" @load="listLoad" />
      <div class="title">{{ item.name }}</div>
      <div class="count">
        <div>
          <img src="~assets/img/content/erji.svg" alt="" />
          {{ item.playCount }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommendResource } from "network/discover";
export default {
  name: "Musiclist",
  data() {
    return {
      personList: [],
    };
  },
  mounted() {
    getRecommendResource().then((res) => {
      // console.log(res);
      this.personList = res.data.result;
      // console.log(this.personList);
    });
  },
  methods: {
    listLoad() {
      this.$bus.$emit("musiclistImgLoad");
    },
  },
};
</script>
<style scoped>
.musiclist {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  justify-content: center;
  margin: 0 auto;
}
.list-item img {
  width: 100%;
}
.list-item {
  display: inline-block;
  width: 150px;
  margin: 2px 6px;
  position: relative;
}
.title {
  color: #fff;
  opacity: 0.8;
}
.count img {
  width: 10px;
  height: 10px;
}
.count {
  text-align: right;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>