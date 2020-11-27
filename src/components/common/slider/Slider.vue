<template>
  <div class="imgBox">
    <ul>
      <li class="list1">
        <img :src="banner[0].imageUrl" alt />
      </li>
      <li class="list2">
        <img :src="banner[1].imageUrl" alt />
      </li>
      <li class="list3">
        <img :src="banner[2].imageUrl" alt />
      </li>
      <li class="list4">
        <img :src="banner[3].imageUrl" alt />
      </li>
      <li class="list5">
        <img :src="banner[4].imageUrl" alt />
      </li>
      <li class="list6">
        <img :src="banner[5].imageUrl" alt />
      </li>
    </ul>
  </div>
</template>
<script>
import { getSlider } from "network/slider";
export default {
  created() {
    this._getSlider();
  },
  methods: {
    _getSlider() {
      getSlider();
    },
  },
  name: "Slider",
};
</script>
<style>
</style>