<template>
  <div class="private">
    <div class="only">独家放送</div>
    <div class="content">
      <div class="item" v-for="item in privateList" :key="item">
        <div class="logo">
          <img src="~assets/img/leftmenu/shiping.svg" alt="" />
        </div>
        <img :src="item.picUrl" alt="" />
        <div class="bottom">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPrivateResource } from "network/discover";
export default {
  name: "Private",
  data() {
    return {
      privateList: [],
    };
  },
  mounted() {
    getPrivateResource().then((res) => {
      this.privateList = res.data.result;
      console.log(res);
    });
  },
};
</script>
<style scoped>
.only {
  width: 960px;
  margin: 5px auto 7px;
}
.item {
  width: 300px;
  margin: 0 10px;
  position: relative;
}
.item img {
  width: 100%;
}
.content {
  display: flex;
  justify-content: center;
}
.logo {
  width: 25px;
  height: 25px;
  position: absolute;
  left: 5px;
  top: 5px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
}
.bottom {
  margin-top: 5px;
  font-size: 14px;
}
</style>