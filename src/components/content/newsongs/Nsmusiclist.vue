<template>
  <div class="nsmusiclist">
    <div class="tags">
      <span class="tagcolor">热门标签:</span>
      <div
        class="tag-item"
        v-for="(item, index) in tags"
        :key="index"
        @click="tagClick(index)"
        :class="{ tagColor: currentIndex == index }"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="musiclist">
      <div class="list-item" v-for="(item, index) in personList" :key="index" @click="enterDetail(index)">
        <img :src="item.coverImgUrl" alt="" />
        <div class="title">{{ item.name }}</div>
        <div class="count">
          <div>
            <img src="~assets/img/content/erji.svg" alt="" />
            {{ item.playCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMusicListHot } from "network/discover";
import { _getHighquality } from "network/discover";
export default {
  name: "Nsmusiclist",
  data() {
    return {
      personList: [],
      tags: [],
      musicList: [],
      limit: 24,
      currentIndex: 0,
    };
  },
  mounted() {
    getMusicListHot().then((res) => {
      // console.log(res);
      this.tags = res.data.tags;
      this.getHighquality();
      // console.log(this.personList);
    });
  },
  methods: {
    getHighquality() {
      _getHighquality(this.tags[this.currentIndex].name, this.limit).then(
        (res) => {
          // console.log(res);
          this.personList = res.data.playlists;
        }
      );
    },
    tagClick(index) {
      this.currentIndex = index;
      this.getHighquality();
    },
    enterDetail(index){
      this.$router.push("/musiclistdetail/"+this.personList[index].id)
    }
  },
};
</script>
<style scoped>
.musiclist {
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  justify-content: left;
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
.tags {
  width: 960px;
  display: flex;
  justify-content: right;
  margin: 5px auto 25px;
}
.tag-item {
  padding: 0 15px;
  color: #fff;
  opacity: 0.6;
}
.tag-item:hover {
  opacity: 1;
}
.tagcolor {
  color: #fff;
  opacity: 0.6;
}
.tagColor {
  color: #b82525;
}
</style>