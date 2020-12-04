<template>
  <div class="tab">
    <router-link
      tag="div"
      class="tab-item"
      to="/discover/individ"
      active-class="router-link-active"
    >
      <span class="tab-link">个性推荐</span>
    </router-link>

    <router-link
      tag="div"
      class="tab-item"
      to="/discover/category"
      active-class="router-link-active"
    >
      <span class="tab-link">歌单</span>
    </router-link>

    <router-link
      tag="div"
      class="tab-item"
      to="/discover/ranklist"
      active-class="router-link-active"
    >
      <span class="tab-link">排行榜</span>
    </router-link>

    <router-link
      tag="div"
      class="tab-item"
      to="/discover/artlist"
      active-class="router-link-active"
    >
      <span class="tab-link">歌手</span>
    </router-link>

    <router-link
      tag="div"
      class="tab-item"
      to="/discover/newsongs"
      active-class="router-link-active"
    >
      <span class="tab-link">最新音乐</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tab {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-link {
  margin-left: 45px;
  margin-right: 45px;
  font-size: 18px;
  color: #fff;
  opacity: 0.6;
}
.tab-item {
  text-decoration: none;
}
.router-link-active .tab-link {
  opacity: 1;
  border-bottom: 2px solid #5c5e61;
}
</style>