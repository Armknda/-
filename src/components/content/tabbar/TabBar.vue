<template>
  <div class="tabbar">
    <div class="logo">
      <img src="~assets/img/content/cat.jpg" alt="" />
      <div class="title">MAZHA音乐</div>
      <div class="back">
        <img src="~assets/img/content/back.svg" alt="" />
      </div>
    </div>
    <div class="content">
      <div class="login">
        <div class="profile"></div>
        <div></div>
      </div>
      <div class="right">
        <div>
          <a href="#" title="最小化">
            <img src="~assets/img/content/min.svg" alt="最小化" />
          </a>
        </div>
        <div>
          <a href="#" title="还原">
            <img src="~assets/img/content/reset.svg" alt="还原" />
          </a>
        </div>
        <div>
          <a href="#" title="退出">
            <img src="~assets/img/content/x.svg" alt="退出" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      image: "",
      statu: "未登录",
    };
  },
};
</script>

<style scoped>
.tabbar {
  height: 45px;
  width: 100%;
  background-color: #212023;
}
.back {
  display: inline-block;
  height: 26px;
  position: absolute;
  right: 5px;
}
.back img {
  height: 100% !important;
}
.logo {
  position: relative;
  display: flex;
  height: 100%;
  cursor: pointer;
  align-items: center;
  float: left;
  width: 15%;
}
.logo img {
  margin: 0px 10px 0px 10px;
  height: 100%;
}
.content {
  height: 100%;
  float: right;
}
.right {
  height: 100%;
  display: flex;
  align-items: center;
}
.right div {
  opacity: 0.6;
  margin-right: 15px;
}
.right div img {
  width: 22px;
}
.right div :hover {
  opacity: 1;
}
</style>