<template>
  <div :class="$style.Container">
    <div ref="viewRef" style="width: 700px; height: 480px"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Renderer } from "@/super-mario/renderer";
import { loadAllResources } from "@/super-mario/utils/loadResources";

const viewRef = ref();
onMounted(async () => {
  await loadAllResources();
  const renderer = new Renderer({
    view: viewRef.value,
  });

  renderer.run();
});
</script>

<style lang="less" module>
.Container {
}
</style>
