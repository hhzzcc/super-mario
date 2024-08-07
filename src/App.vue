<template>
  <div :class="$style.Guide" v-if="isMobile()">请使用pc端体验超级玛丽哦~</div>
  <router-view v-else />
</template>

<script setup>
function isMobile() {
  let flag =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return flag;
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
</style>

<style lang="less" module>
.Guide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #000;
}
</style>
