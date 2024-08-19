<template>
  <div>
    <div
      :class="$style.Container"
      :style="{
        width: width + 'px',
        height: height + 'px',
      }"
    >
      <div :class="$style.MoveLeft" @click="handleMoveLeft" v-if="props.isEdit">
        ‹
      </div>
      <div ref="viewRef" style="width: 100%; height: 100%"></div>

      <div :class="$style.End" v-if="isFail || isWin">
        <div>
          <div>
            <div :class="$style.EndTitle">
              {{ isWin ? "恭喜您过关啦!" : "游戏结束" }}
            </div>
            <div :class="$style.Score">
              总得分：<b>{{ score }}</b>
            </div>
            <div :class="$style.Score">
              历史最高：<b>{{ maxScore }}</b>
            </div>
          </div>
          <button style="margin-top: 20px" @click="handleStartGame">
            再玩一次
          </button>
        </div>
      </div>

      <div :class="$style.GridEditor" v-if="props.isEdit">
        <div
          v-for="(item, i) in girds"
          :key="i"
          :style="{
            width: SIZE + 'px',
            height: SIZE + 'px',
            background: getGridBackground(item),
          }"
          @click="handleAddSprite(item)"
          @mouseenter="currentGrid = item"
        ></div>
      </div>
      <div
        :class="$style.MoveRight"
        @click="handleMoveRight"
        v-if="props.isEdit"
      >
        ›
      </div>
    </div>

    <AddSprite
      v-if="props.isEdit"
      @check="handleCheckSprite"
      @mul-check="handleMulCheckSprite"
      @finish="handleFinish"
    />
  </div>
</template>

<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
  defineProps,
  defineEmits,
  computed,
} from "vue";
import { Renderer } from "@/super-mario/renderer";
import { SIZE } from "@/super-mario/constants";
import AddSprite from "@/components/add-sprite.vue";
import { Map } from "@/super-mario/map";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
  mapData: {
    type: Object,
    default: null,
  },
});
const emits = defineEmits(["add-map"]);

const map = new Map();

const width = 672;
const height = 480;
const viewRef = ref();
const isFail = ref(false);
const isWin = ref(false);
const maxScore = ref(0);
const score = ref(0);
const handleAdd = ref();
const currentGrid = ref();
const mulCheckSprit = ref();
const startCheckPosition = ref(false);

const girds = computed(() => {
  const arr = [];
  for (let i = 0; i < height; i += SIZE) {
    for (let j = 0; j < width; j += SIZE) {
      arr.push({
        x: j,
        y: i,
      });
    }
  }
  return arr;
});

function handleMoveLeft() {
  renderer.camera.x = Math.max(0, renderer.camera.x - SIZE * 5);
}

function handleMoveRight() {
  renderer.camera.x += SIZE * 5;
}

function getGridBackground({ x, y }) {
  if (
    (startCheckPosition.value &&
      startCheckPosition.value.x === x &&
      startCheckPosition.value.y) === y
  ) {
    return "rgba(0, 0, 0, 0.5)";
  }

  if (startCheckPosition.value && currentGrid.value) {
    const minX = Math.min(startCheckPosition.value.x, currentGrid.value.x);
    const minY = Math.min(startCheckPosition.value.y, currentGrid.value.y);
    const maxX = Math.max(startCheckPosition.value.x, currentGrid.value.x);
    const maxY = Math.max(startCheckPosition.value.y, currentGrid.value.y);

    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
      return "rgba(0, 0, 0, 0.5)";
    }
  }
}

function handleFinish() {
  const mapData = map.serialization(renderer.scene);

  console.log(mapData);
  let maxX = 0;
  mapData.data.forEach((v) => {
    maxX = Math.max(v.x, maxX);
  });

  mapData.data.push({
    x: maxX,
    y: SIZE * 2,
    type: "sprite-win",
  });

  document.body.style.cursor = null;
  emits("add-map", mapData);
}

function handleCheckSprite(v) {
  mulCheckSprit.value = undefined;
  startCheckPosition.value = false;
  handleAdd.value = v.handler;
  document.body.style.cursor = `url(${v.imgs[0]}), pointer`;
}

function handleMulCheckSprite(v) {
  mulCheckSprit.value = v;
  handleAdd.value = undefined;
  document.body.style.cursor = `url(${v.imgs[0]}), pointer`;
}

function handleAddSprite(item) {
  const { x, y } = item;

  if (handleAdd.value) {
    handleAdd.value(renderer.scene, renderer.camera.x + x, y);
  }

  if (mulCheckSprit.value) {
    if (!startCheckPosition.value) {
      startCheckPosition.value = { x, y };
    } else {
      const minX = Math.min(startCheckPosition.value.x, x);
      const minY = Math.min(startCheckPosition.value.y, y);
      const maxX = Math.max(startCheckPosition.value.x, x);
      const maxY = Math.max(startCheckPosition.value.y, y);

      for (let i = minX; i <= maxX; i += SIZE * mulCheckSprit.value.width) {
        if (mulCheckSprit.value.height === "auto") {
          mulCheckSprit.value.handler(
            renderer.scene,
            renderer.camera.x + i,
            startCheckPosition.value.y,
            maxY - minY + SIZE
          );
        } else {
          for (
            let j = minY;
            j <= maxY;
            j += SIZE * mulCheckSprit.value.height
          ) {
            mulCheckSprit.value.handler(
              renderer.scene,
              renderer.camera.x + i,
              j
            );
          }
        }
      }

      startCheckPosition.value = undefined;
    }
  }
}

let renderer;

function handleStartGame() {
  isFail.value = false;
  isWin.value = false;
  if (renderer) {
    renderer.destroy();
  }

  renderer = new Renderer({
    view: viewRef.value,
    readonly: props.isEdit,
    mapData: props.mapData,
  });

  renderer.run(
    (v) => {
      isFail.value = true;
      isWin.value = false;
      score.value = v;
      maxScore.value = Math.max(v, maxScore.value);
    },
    (v) => {
      isFail.value = false;
      isWin.value = true;
      score.value = v;
      maxScore.value = Math.max(v, maxScore.value);
    }
  );
}

onMounted(() => {
  handleStartGame();
});

onUnmounted(() => {
  if (renderer) {
    renderer.destroy();
  }
  document.body.style.cursor = null;
});
</script>

<style lang="less" module>
.Container {
  position: relative;
  border-radius: 6px;
}

.MoveLeft,
.MoveRight {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  cursor: pointer;
  background-color: #000;
  width: 32px;
  height: 32px;
  color: #fff;
  user-select: none;
}

.MoveLeft {
  left: -32px;
}

.MoveRight {
  right: -32px;
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
    border-radius: 6px;
  }
}

.GridEditor {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  > div {
    box-shadow: 0 0 0 0.5px #333;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

.EndTitle {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.Score {
  font-size: 14px;
  color: #333;
}
</style>
