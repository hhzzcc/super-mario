<template>
  <div :class="$style.Container">
    <div ref="viewRef" style="width: 100%; height: 100%"></div>

    <div :class="$style.End" v-if="isEnd || isWin">
      <div>
        <div :class="$style.EndTitle">
          {{ isWin ? "恭喜您过关啦!" : "游戏结束" }}<br />
          总得分：{{ score }}
        </div>
        <button style="margin-top: 10px" @click="handleStartGame">
          重新开始
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Renderer } from "@/super-mario/renderer";
import { loadAllResources } from "@/super-mario/utils/loadResources";

const viewRef = ref();
const isEnd = ref(false);
const isWin = ref(false);
const score = ref(0);

let renderer;

function handleStartGame() {
  isEnd.value = false;
  isWin.value = false;
  if (renderer) {
    renderer.destroy();
  }
  renderer = new Renderer({
    view: viewRef.value,
  });

  renderer.run(
    () => {
      isEnd.value = true;
    },
    (v) => {
      isWin.value = true;
      score.value = v;
    }
  );
}

onMounted(async () => {
  await loadAllResources();
  handleStartGame();
});
</script>

<style lang="less" module>
.Container {
  width: 700px;
  height: 480px;
  position: relative;
}

.End {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px 40px;
  }
}

.EndTitle {
  font-size: 30px;
  font-weight: bold;
}
</style>
