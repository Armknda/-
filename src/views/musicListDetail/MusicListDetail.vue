<template>
<div class="detail">
  歌单详情
  <detail-base-info :baseInfo="baseInfo"/>
</div>
</template>
<script>
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import{
  _getMusicListDetail,
baseInfo} from "network/detail"
export default {
  name: "MusicListDetail",
  data(){
    return{
      id:null,
      musicListDetail:null,
      baseInfo:null,
    }
  },
  components:{
  DetailBaseInfo

  },
  created(){
  this.id=this.$route.params.id;

  _getMusicListDetail(this.id).then(res=>{
  this.musicListDetail=res.data;
  this.baseInfo=new baseInfo(this.musicListDetail.playlist)
  console.log(this.musicListDetail);
})

  }
};
</script>
<style scoped>
</style>