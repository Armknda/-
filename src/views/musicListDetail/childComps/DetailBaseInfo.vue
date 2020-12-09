<template>
    <div class="base">
        <div class="title">
            <img :src="baseInfo.img" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailBaseInfo",
    props:{
        baseInfo:{
            type:Object,
            default(){
                return{};
            }
        }
    }
}
</script>
<style scoped>
.title{
    width: 200px;
}
.title img{
    width: 100%;
}
</style>