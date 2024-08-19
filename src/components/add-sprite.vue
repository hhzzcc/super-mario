<template>
  <div>
    <div :class="$style.Title">
      请选择要添加的元素
      <Button @click="emits('finish')">编辑完成，生成地图</Button>
    </div>
    <div :class="$style.List">
      <div v-for="(item, i) in list" :key="i" @click="emits('check', item)">
        <div :class="$style.Item">
          <img :src="img" v-for="img in item.imgs" :key="img" />
        </div>
      </div>
    </div>

    <div :class="$style.List">
      <div v-for="(item, i) in list" :key="i" @click="emits('mul-check', item)">
        <div :class="$style.Item">
          <img :src="img" v-for="img in item.imgs" :key="img" />
          <div :class="$style.Text">多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SIZE } from "@/super-mario/constants";
import { SpriteAsk } from "@/super-mario/sprite/sprite-ask";
import { SpriteBadMushroom } from "@/super-mario/sprite/sprite-bad-mushroom";
import { SpriteFlower } from "@/super-mario/sprite/sprite-flower";
import { SpriteGold } from "@/super-mario/sprite/sprite-gold";
import { SpriteGrowMushroom } from "@/super-mario/sprite/sprite-grow-mushroom";
import { SpriteHorror } from "@/super-mario/sprite/sprite-horror";
import { SpriteLand } from "@/super-mario/sprite/sprite-land";
import { SpritePipe } from "@/super-mario/sprite/sprite-pipe";
import { SpritePipeFlower } from "@/super-mario/sprite/sprite-pipe-flower";
import { SpriteRock } from "@/super-mario/sprite/sprite-rock";
import { SpriteShell } from "@/super-mario/sprite/sprite-shell";
import { SpriteStone } from "@/super-mario/sprite/sprite-stone";
import { SpriteTurtle } from "@/super-mario/sprite/sprite-turtle";
import { Button } from "ant-design-vue";
import { onMounted, defineEmits } from "vue";

const emits = defineEmits(["check", "mul-check", "finish"]);
const list = [
  {
    imgs: ["imgs/building/land/land.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      scene.addStaticSprites(
        new SpriteLand({
          x,
          y,
        })
      );
    },
  },
  {
    imgs: [
      "imgs/building/ask/frame-4.jpg",
      "imgs/props/grow-mushroom/frame-1.jpg",
    ],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      scene.addStaticSprites(
        new SpriteAsk({
          x,
          y,
        })
      );
      scene.addDynamicSprites(
        new SpriteGrowMushroom({
          x,
          y,
        })
      );
    },
  },
  {
    imgs: ["imgs/building/ask/frame-4.jpg", "imgs/props/flow/frame-1.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      scene.addStaticSprites(
        new SpriteAsk({
          x,
          y,
        })
      );
      scene.addDynamicSprites(
        new SpriteFlower({
          x,
          y,
        })
      );
    },
  },
  {
    imgs: ["imgs/building/stone/stone.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      scene.addStaticSprites(
        new SpriteStone({
          x,
          y,
        })
      );
    },
  },
  {
    imgs: ["imgs/building/rock/rock.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      scene.addStaticSprites(
        new SpriteRock({
          x,
          y,
        })
      );
    },
  },
  {
    imgs: ["imgs/props/gold/frame-3.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      scene.addStaticSprites(
        new SpriteGold({
          x,
          y,
        })
      );
    },
  },
  {
    imgs: ["imgs/building/pipe/normal.jpg"],
    width: 2,
    height: "auto",
    handler(scene, x, y, height) {
      const sprite = new SpritePipe({
        x,
        y,
        height,
      });
      scene.addStaticSprites(sprite);
    },
  },
  {
    imgs: ["imgs/building/pipe/normal.jpg", "imgs/bad/flower/frame-1.jpg"],
    width: 2,
    height: "auto",
    handler(scene, x, y, height) {
      scene.addStaticSprites(
        new SpritePipe({
          x,
          y,
          height,
        })
      );

      const spritePipeFlower = new SpritePipeFlower({
        x: x + SIZE / 2,
        y,
      });
      scene.addDynamicSprites(spritePipeFlower);
      spritePipeFlower.unMove();
    },
  },

  {
    imgs: ["imgs/bad/mushroom/frame-1.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      const sprite = new SpriteBadMushroom({
        x,
        y,
      });
      sprite.vx = 0;
      scene.addDynamicSprites(sprite);
    },
  },

  {
    imgs: ["imgs/bad/horror/frame-1.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      const sprite = new SpriteHorror({
        x,
        y,
      });
      sprite.vx = 0;
      scene.addDynamicSprites(sprite);
    },
  },

  {
    imgs: ["imgs/bad/turtle/frame-1.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      const sprite = new SpriteTurtle({
        x,
        y,
      });
      sprite.vx = 0;
      scene.addDynamicSprites(sprite);
    },
  },
  {
    imgs: ["imgs/bad/shell/frame-1.jpg"],
    width: 1,
    height: 1,
    handler(scene, x, y) {
      const sprite = new SpriteShell({
        x,
        y,
      });
      sprite.vx = 0;
      scene.addDynamicSprites(sprite);
    },
  },
];

onMounted(() => {
  emits("check", list[0]);
});
</script>

<style lang="less" module>
.Title {
  color: #fff;
  margin-top: 10px;
}

.List {
  display: flex;
  margin-top: 10px;
  margin-left: -16px;

  > div {
    padding: 0 16px;
    cursor: pointer;
  }
}

.Item {
  width: 32px;
  height: 32px;
  position: relative;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    user-select: none;
  }
}

.Text {
  position: absolute;
  bottom: -6px;
  right: -6px;
  color: #fff;
  background-color: #000;
  border-radius: 6px;
  font-size: 12px;
}
</style>
