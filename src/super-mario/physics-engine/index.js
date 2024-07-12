import { Mario } from "../mario";
import { Keyboard } from "./keyboard";
import {
  // isCollectLeftRight,
  // isCollectTopBottom,
  isCollectBTop,
  isCollectBBottom,
  isCollectBLeft,
  isCollectBRight,
  isCollect,
} from "./collect";
import { BuildingAsk } from "../building/building-ask";
import { BuildingFlower } from "../building/building-flower";
import { BuildingGrowMushroom } from "../building/building-grow-mushroom";
import { BuildingBullet } from "../building/building-bullet";
import { throttle } from "lodash-es";
import { BuildingBadMushroom } from "../building/building-bad-mushroom";
import { Jumping } from "./jumping";
import { BuildingStone } from "../building/building-stone";
import { BuildingStoneBorn } from "../building/building-stone-born";
import { BuildingWin } from "../building/building-win";
import { BuildingGold } from "../building/building-gold";

const SIZE = 32;
const G = 0.4;

const handleMarioAttack = throttle((scene, mario) => {
  const bullet = mario.attack();

  if (bullet) {
    // 添加子弹
    scene.addDynamicSprites(bullet);
  }
}, 200);
export class PhysicsEngine {
  constructor() {
    this.keyboard = new Keyboard();
    this.jumping = new Jumping({
      G,
    });
  }

  run(options) {
    const { scene, camera } = options;
    const { staticSpriteMaps, dynamicSprites } = scene;

    for (let i = 0; i < dynamicSprites.length; i++) {
      const dynamicSprite = dynamicSprites[i];

      // 没在相机内，不需要物理检测
      if (
        !camera.isInView({
          x: dynamicSprite.x,
          y: dynamicSprite.y,
          width: dynamicSprite.width,
          height: dynamicSprite.height,
        })
      ) {
        if (dynamicSprite instanceof BuildingBullet) {
          dynamicSprite.destroy();
        }
        continue;
      }

      if (!dynamicSprite.isActive || dynamicSprite.isDestroy) {
        continue;
      }

      // 键盘操作人物
      if (dynamicSprite instanceof Mario) {
        this.handleKeyBoardControlMario(dynamicSprite, scene);
      }

      // 上抛运动
      const jumpSprite = this.jumping.getJumpSprite(dynamicSprite);

      if (jumpSprite && !jumpSprite.jumping && jumpSprite.sprite.vy === 0) {
        this.jumping.remove(dynamicSprite);
      } else if (jumpSprite && jumpSprite.jumping) {
        jumpSprite.v0 -= jumpSprite.a;
        jumpSprite.sprite.vy = Math.min(1, -jumpSprite.v0);
        if (jumpSprite.sprite.vy === 1) {
          jumpSprite.jumping = false;
        }
      }

      // 自由落体
      else if (!(dynamicSprite instanceof BuildingBullet)) {
        // 最大速度不超过10
        dynamicSprite.vy = Math.min(10, dynamicSprite.vy + G);
      }

      // 和其他动态精灵做检测
      for (let j = 0; j < dynamicSprites.length; j++) {
        const otherDynamicSprite = dynamicSprites[j];
        // 没在相机内，不需要检测
        if (
          !camera.isInView({
            x: otherDynamicSprite.x,
            y: otherDynamicSprite.y,
            width: otherDynamicSprite.width,
            height: otherDynamicSprite.height,
          }) ||
          otherDynamicSprite === dynamicSprite ||
          otherDynamicSprite.isDestroy
        ) {
          continue;
        }

        if (isCollect(dynamicSprite, otherDynamicSprite)) {
          this.handleDySpriteCollectDySprite(dynamicSprite, otherDynamicSprite);
        }
      }

      // 使用包围盒做碰撞检测，提升性能
      const boxX = (~~(dynamicSprite.x / SIZE) - 1) * SIZE;
      const boxY = 0;
      const boxWidth = (Math.ceil(dynamicSprite.width / SIZE) + 2) * SIZE;
      const boxHeight = camera.height;

      const collectBottoms = [];
      const collectTops = [];
      const collectLefts = [];
      const collectRights = [];

      for (let i = 0; i < boxWidth + 1; i += SIZE) {
        for (let j = 0; j < boxHeight + 1; j += SIZE) {
          const staticSprite = staticSpriteMaps[`${boxX + i}-${boxY + j}`];

          // 检测到静态精灵进入动态精灵的检测范围内，才开始做碰撞检测
          if (
            staticSprite &&
            !staticSprite.isDestroy &&
            isCollect(dynamicSprite, staticSprite)
          ) {
            // 胜利
            if (dynamicSprite instanceof Mario) {
              if (staticSprite instanceof BuildingWin) {
                dynamicSprite.win();
                return;
              }
            }

            // 吃金币
            if (staticSprite instanceof BuildingGold) {
              staticSprite.destroy();
              continue;
            }

            if (isCollectBBottom(dynamicSprite, staticSprite)) {
              collectBottoms.push(staticSprite);

              // 头顶碎石砖
              if (
                staticSprite instanceof BuildingStone &&
                dynamicSprite instanceof Mario &&
                dynamicSprite.growType !== "base"
              ) {
                staticSprite.destroy();

                for (let i = 0; i < 4; i++) {
                  scene.addDynamicSprites(
                    new BuildingStoneBorn({
                      x: staticSprite.x,
                      y: staticSprite.y,
                      index: i,
                    })
                  );
                }
              } else if (staticSprite.collect) {
                staticSprite.collect();
              }
            } else if (isCollectBTop(dynamicSprite, staticSprite)) {
              collectTops.push(staticSprite);
            } else if (isCollectBRight(dynamicSprite, staticSprite)) {
              collectRights.push(staticSprite);
            } else if (isCollectBLeft(dynamicSprite, staticSprite)) {
              collectLefts.push(staticSprite);
            }
          }
        }
      }

      if (collectBottoms.length) {
        this.handleDySpriteCollectStSpriteBottom(
          dynamicSprite,
          collectBottoms[0],
          jumpSprite
        );
      } else if (collectTops.length) {
        this.handleDySpriteCollectStSpriteTop(dynamicSprite, collectTops[0]);
      }

      if (collectRights.length) {
        this.handleDySpriteCollectStSpriteRight(
          dynamicSprite,
          collectRights[0]
        );
      } else if (collectLefts.length) {
        this.handleDySpriteCollectStSpriteLeft(dynamicSprite, collectLefts[0]);
      }
    }
  }

  // 动态精灵之间的碰撞
  handleDySpriteCollectDySprite(dynamicSprite, otherDynamicSprite) {
    if (dynamicSprite instanceof Mario) {
      // 成长花、成长蘑菇
      if (
        otherDynamicSprite instanceof BuildingFlower ||
        otherDynamicSprite instanceof BuildingGrowMushroom
      ) {
        // 已经激活，销毁
        if (otherDynamicSprite.isActive) {
          otherDynamicSprite.destroy();

          if (otherDynamicSprite instanceof BuildingGrowMushroom) {
            dynamicSprite.grow();
          } else if (otherDynamicSprite instanceof BuildingFlower) {
            dynamicSprite.bullet();
          }
        }
        // 头顶未激活，出现
        else if (
          !otherDynamicSprite.isActive &&
          isCollectBBottom(dynamicSprite, otherDynamicSprite)
        ) {
          otherDynamicSprite.collect();
        }
      } else if (
        otherDynamicSprite instanceof BuildingBadMushroom &&
        otherDynamicSprite.isActive
      ) {
        if (isCollectBTop(dynamicSprite, otherDynamicSprite)) {
          this.jumping.remove(dynamicSprite);
          this.jumping.add(dynamicSprite, 4);
          otherDynamicSprite.dieByTrample();
        } else {
          dynamicSprite.die();
        }
      }
    }

    // 子弹击中敌人
    if (
      dynamicSprite instanceof BuildingBullet &&
      otherDynamicSprite instanceof BuildingBadMushroom
    ) {
      dynamicSprite.destroy();
      otherDynamicSprite.dieByBullet();
    }
  }

  // 动态精灵碰撞到静态精灵下面
  handleDySpriteCollectStSpriteBottom(dynamicSprite, staticSprite, jumpSprite) {
    dynamicSprite.y = staticSprite.y + staticSprite.height;

    // 子弹反弹
    if (dynamicSprite instanceof BuildingBullet) {
      dynamicSprite.vy = -dynamicSprite.vy;
    } // 击落跳跃中的精灵
    else if (jumpSprite && jumpSprite.jumping) {
      jumpSprite.jumping = false;
      dynamicSprite.vy = 1;
    }
  }

  // 动态精灵碰撞到静态精灵上面
  handleDySpriteCollectStSpriteTop(dynamicSprite, staticSprite) {
    dynamicSprite.y = staticSprite.y - dynamicSprite.height;

    // 子弹反弹
    if (dynamicSprite instanceof BuildingBullet) {
      dynamicSprite.vy = -dynamicSprite.vy;
    } else {
      dynamicSprite.vy = 0;
    }
  }

  // 动态精灵碰撞到静态精灵左边
  handleDySpriteCollectStSpriteLeft(dynamicSprite, staticSprite) {
    dynamicSprite.x = staticSprite.x - dynamicSprite.width;

    // 蘑菇碰撞后，朝相反方向行动
    if (
      dynamicSprite instanceof BuildingGrowMushroom ||
      dynamicSprite instanceof BuildingBadMushroom
    ) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else if (dynamicSprite instanceof BuildingBullet) {
      dynamicSprite.destroy();
    } else {
      dynamicSprite.vx = 0;
    }
  }

  // 动态精灵碰撞到静态精灵右边
  handleDySpriteCollectStSpriteRight(dynamicSprite, staticSprite) {
    dynamicSprite.x = staticSprite.x + staticSprite.width;

    // 蘑菇碰撞后，朝相反方向行动
    if (
      dynamicSprite instanceof BuildingGrowMushroom ||
      dynamicSprite instanceof BuildingBadMushroom
    ) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else if (dynamicSprite instanceof BuildingBullet) {
      dynamicSprite.destroy();
    } else {
      dynamicSprite.vx = 0;
    }
  }

  // 键盘操作
  handleKeyBoardControlMario(mario, scene) {
    if (this.keyboard.xDirection === "left") {
      mario.vx = Math.max(-3, mario.vx - 1);
    } else if (this.keyboard.xDirection === "right") {
      mario.vx = Math.min(3, mario.vx + 1);
    } else {
      mario.vx = 0;
    }

    // 跳跃
    if (this.keyboard.yDirection === "top") {
      this.jumping.add(mario);
    }

    if (this.keyboard.pressBlank) {
      handleMarioAttack(scene, mario);
    } else {
      mario.unAttack();
    }
  }
}
