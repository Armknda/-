<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true,
    });
    console.log(this.scroll);
    // this.refresh();
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>
<style scoped>
</style>