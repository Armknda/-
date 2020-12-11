<template>
  <div class="music" v-if="musiclist != null">
    <table cellspacing="0" style="margin: auto">
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
        <tr v-for="(item, index) in musiclist" :key="index" @load="listLoad">
          <td>
            {{ setSerial(index) }}
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
import { tableMixin } from "./tableMixin";
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
  methods: {
    listLoad() {
      console.log("1");
      this.$bus.$emit("listDataLoad");
    },
  },
  mixins: [tableMixin],
};
</script>
<style scoped>
.music {
  width: 1800px;
  margin: 0 auto;
}
.music table {
  width: 100%;
}
.music tr {
  height: 30px;
  margin: 0 10px;
}
.music tr td {
  border: 1px solid #23262c;
  position: relative;
  color: #dcdde4;
}
.music tr td:nth-child(1) {
  width: 50px;
  text-align: center;
  /* display: flex; */
  /* align-items: center; */
}
.music tr td:nth-child(2) {
  width: 80px;
}
.music tr td:nth-child(2) img {
  width: 20px;
  opacity: 0.6;
}
.music tbody tr td:nth-child(3) {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.music tr td:nth-child(4) {
  width: 140px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.music tr td:nth-child(5) {
  width: 180px;
}
.music tr td:nth-child(6) {
  width: 80px;
}
</style>