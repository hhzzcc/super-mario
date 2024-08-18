<template>
  <div :class="$style.Container">
    <div :class="$style.Content">
      <div
        :class="[$style.Item, props.active === '' ? $style.ItemActive : null]"
        @click="$emit('add')"
      >
        <div :class="$style.Add">+</div>
        自定义地图
      </div>
      <div
        :class="[
          $style.Item,
          item.title === props.active ? $style.ItemActive : null,
        ]"
        v-for="(item, i) in props.maps"
        :key="i"
        @click="$emit('check', item.title)"
      >
        {{ item.title }}
      </div>
    </div>

    <div :class="$style.QRcode">
      <img
        src="https://aiad-prod.oss-cn-heyuan.aliyuncs.com/public/783dac4cf0234219876add4eb68bc5f4.jpg"
      />
      <div>扫码关注公众号<br />每天领外卖打车红包</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  active: {
    type: String,
    required: true,
  },
  maps: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="less" module>
.Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.Content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 240px);
  overflow: auto;
}

.QRcode {
  height: 240px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 150px;
    height: 150px;
    border-radius: 6px;
  }

  > div {
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
  }
}

.Item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  min-height: 100px;
  height: 100px;
  width: 216px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 20px;
  color: #fff;
}

.ItemActive {
  border: 2px solid #fff;
}

.Add {
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 10px;
  line-height: 1;
  text-align: center;
}
</style>
