<template>
  <div class="music" v-if="musiclist != null">
    <table cellspacing="0">
      <thead>
        <tr>
          <td></td>
          <td>操作</td>
          <td>音乐标题</td>
          <td>歌手</td>
          <td>专辑</td>
          <td>时长</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in musiclist" :key="index">
          <td>
            <div class="curPlay">
              <img src="" alt="" />
            </div>
          </td>
          <td>
            <img src="~assets/img/leftmenu/live.svg" alt="" class="love" />
            <img
              src="~assets/img/leftmenu/xiazai.svg"
              alt=""
              class="download"
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.song }}</td>
          <td>{{ item.album }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "MusicItem",
  props: {
    musiclist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.music {
  width: 100%;
}
.music table {
  width: 100%;
}
.music tr {
  height: 30px;
}
.music tr td {
  border: 1px solid #23262c;
  position: relative;
}
.music tr td:nth-child(1) {
  width: 50px;
  text-align: center;
}
.music tr td:nth-child(2) {
  width: 80px;
}
.music tr td:nth-child(2) img {
  width: 20px;
  opacity: 0.6;
}
</style>