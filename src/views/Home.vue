<template>
  <div :class="$style.Container">
    <div :class="$style.MenuContainer">
      <Menu
        :class="$style.Menu"
        :style="{
          width: showMenu ? '240px' : '0',
        }"
        :active="active"
        :maps="maps"
        @check="(v) => (active = v)"
        @add="() => (active = '')"
      ></Menu>
      <div @click="showMenu = !showMenu" :class="$style.Btn">
        <div>{{ showMenu ? "‹" : "›" }}</div>
      </div>
    </div>

    <div :class="$style.Content">
      <div :class="$style.Header">
        <a href="https://github.com/hhzzcc">Github</a>
      </div>
      <div :class="$style.Game">
        <div v-if="loading" :class="$style.Loading">资源加载中...</div>

        <template v-else>
          <div>
            <div :class="$style.Tip" v-if="!isEdit">
              方向键控制人物，空格发射子弹
            </div>
            <Mario
              :isEdit="isEdit"
              :mapData="
                isEdit ? null : maps.find((v) => v.title === active).mapData
              "
              :key="active"
              @add-map="handleAddMap"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { loadAllResources } from "@/super-mario/utils/loadResources";
import Mario from "@/components/mario.vue";
import Menu from "@/components/menu.vue";
import { data as mapData1 } from "../maps/map1";

const loading = ref(true);
const showMenu = ref(true);
const maps = [
  {
    title: "官方地图 - 第一关",
    mapData: mapData1,
  },
];
const active = ref(maps[0].title);

function handleAddMap(mapData) {
  const title = "新地图-" + maps.length;
  maps.push({
    title,
    mapData,
  });
  active.value = title;
}

const isEdit = computed(() => !active.value);

onMounted(async () => {
  await loadAllResources();
  loading.value = false;
});
</script>

<style lang="less" module>
.Container {
  display: flex;
  height: 100vh;
  background: #333;
}

.MenuContainer {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
}

.Menu {
  transition: width 0.2s;
  background-color: #000;
}

.Btn {
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 16px 8px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  position: absolute;
  right: -22px;
}

.Content {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.Header {
  display: flex;
  align-items: center;
  height: 32px;
  background-color: #000;

  padding: 0 20px;

  > a {
    color: #fff;
  }
}

.Game {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Loading,
.Tip {
  color: #fff;
  font-weight: bold;
}
</style>
