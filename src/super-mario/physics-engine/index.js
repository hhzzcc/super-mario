import { Mario } from "../mario";
import { Keyboard } from "./keyboard";
import {
  isCollectBTop,
  isCollectBBottom,
  isCollectBLeft,
  isCollectBRight,
  isCollect,
} from "./collect";
import { SpriteAsk } from "../sprite/sprite-ask";
import { SpriteFlower } from "../sprite/sprite-flower";
import { SpriteGrowMushroom } from "../sprite/sprite-grow-mushroom";
import { SpriteBullet } from "../sprite/sprite-bullet";
import { throttle } from "lodash-es";
import { SpriteBadMushroom } from "../sprite/sprite-bad-mushroom";
import { Jumping } from "./jumping";
import { SpriteStone } from "../sprite/sprite-stone";
import { SpriteStoneBorn } from "../sprite/sprite-stone-born";
import { SpriteWin } from "../sprite/sprite-win";
import { SpriteGold } from "../sprite/sprite-gold";
import { SIZE, G } from "../constants";

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
    const { scene, camera, onScore } = options;
    this.onScore = onScore;
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
        }) &&
        dynamicSprite.y < -200
      ) {
        if (dynamicSprite instanceof SpriteBullet) {
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

        if (
          dynamicSprite.y + dynamicSprite.height >=
          camera.y + camera.height
        ) {
          dynamicSprite.isDie = true;
        }
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
      else if (!(dynamicSprite instanceof SpriteBullet)) {
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
              if (staticSprite instanceof SpriteWin) {
                dynamicSprite.win();
                return;
              }
            }

            // 金币
            if (staticSprite instanceof SpriteGold) {
              if (dynamicSprite instanceof Mario) {
                staticSprite.destroy();
                this.onScore(staticSprite.x, staticSprite.y, staticSprite);
              }
              continue;
            }

            if (isCollectBBottom(dynamicSprite, staticSprite)) {
              collectBottoms.push(staticSprite);

              // 头顶碎石砖
              if (
                staticSprite instanceof SpriteStone &&
                dynamicSprite instanceof Mario &&
                dynamicSprite.growType !== "base"
              ) {
                staticSprite.destroy();
                this.onScore(staticSprite.x, staticSprite.y, staticSprite);
                for (let i = 0; i < 4; i++) {
                  scene.addDynamicSprites(
                    new SpriteStoneBorn({
                      x: staticSprite.x,
                      y: staticSprite.y,
                      index: i,
                    })
                  );
                }
              } else if (
                dynamicSprite instanceof Mario &&
                (staticSprite instanceof SpriteAsk ||
                  staticSprite instanceof SpriteStone)
              ) {
                staticSprite.hit();
              }
            }
            if (isCollectBTop(dynamicSprite, staticSprite)) {
              collectTops.push(staticSprite);
            }
            if (isCollectBRight(dynamicSprite, staticSprite)) {
              collectRights.push(staticSprite);
            }
            if (isCollectBLeft(dynamicSprite, staticSprite)) {
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
      }

      if (collectTops.length) {
        this.handleDySpriteCollectStSpriteTop(dynamicSprite, collectTops[0]);
      }

      if (collectRights.length) {
        this.handleDySpriteCollectStSpriteRight(
          dynamicSprite,
          collectRights[0]
        );
      }

      if (collectLefts.length) {
        this.handleDySpriteCollectStSpriteLeft(dynamicSprite, collectLefts[0]);
      }
    }
  }

  // 动态精灵之间的碰撞
  handleDySpriteCollectDySprite(dynamicSprite, otherDynamicSprite) {
    if (dynamicSprite instanceof Mario) {
      // 成长花、成长蘑菇
      if (
        otherDynamicSprite instanceof SpriteFlower ||
        otherDynamicSprite instanceof SpriteGrowMushroom
      ) {
        this.handleGetProps(dynamicSprite, otherDynamicSprite);
      } else if (
        otherDynamicSprite instanceof SpriteBadMushroom &&
        otherDynamicSprite.isActive
      ) {
        if (isCollectBTop(dynamicSprite, otherDynamicSprite)) {
          this.jumping.remove(dynamicSprite);
          this.jumping.add(dynamicSprite, 4);
          otherDynamicSprite.dieByTrample();
          this.onScore(
            otherDynamicSprite.x,
            otherDynamicSprite.y,
            otherDynamicSprite
          );
        } else {
          dynamicSprite.die();
        }
      }
    }

    // 子弹击中敌人
    if (
      dynamicSprite instanceof SpriteBullet &&
      otherDynamicSprite instanceof SpriteBadMushroom &&
      otherDynamicSprite.isActive
    ) {
      dynamicSprite.destroy();
      otherDynamicSprite.dieByBullet();
      this.onScore(
        otherDynamicSprite.x,
        otherDynamicSprite.y,
        otherDynamicSprite
      );
    }
  }

  handleGetProps(dynamicSprite, otherDynamicSprite) {
    // 已经激活，销毁
    if (otherDynamicSprite.isActive) {
      otherDynamicSprite.destroy();
      this.onScore(
        otherDynamicSprite.x,
        otherDynamicSprite.y,
        otherDynamicSprite
      );

      if (otherDynamicSprite instanceof SpriteGrowMushroom) {
        dynamicSprite.grow();
      } else if (otherDynamicSprite instanceof SpriteFlower) {
        dynamicSprite.bullet();
      }
    }
    // 头顶未激活，出现
    else if (
      !otherDynamicSprite.isActive &&
      isCollectBBottom(dynamicSprite, otherDynamicSprite)
    ) {
      otherDynamicSprite.appear();
    }
  }

  // 动态精灵碰撞到静态精灵下面
  handleDySpriteCollectStSpriteBottom(dynamicSprite, staticSprite, jumpSprite) {
    dynamicSprite.y = staticSprite.y + staticSprite.height;

    // 子弹反弹
    if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vy = -dynamicSprite.vy;
    } // 击落跳跃中的精灵
    else if (jumpSprite && jumpSprite.jumping) {
      jumpSprite.jumping = false;
      requestAnimationFrame(() => {
        dynamicSprite.vy = 1;
      });
    }
  }

  // 动态精灵碰撞到静态精灵上面
  handleDySpriteCollectStSpriteTop(dynamicSprite, staticSprite) {
    dynamicSprite.y = staticSprite.y - dynamicSprite.height;

    // 子弹反弹
    if (dynamicSprite instanceof SpriteBullet) {
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
      dynamicSprite instanceof SpriteGrowMushroom ||
      dynamicSprite instanceof SpriteBadMushroom
    ) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else {
      dynamicSprite.vx = 0;
    }
  }

  // 动态精灵碰撞到静态精灵右边
  handleDySpriteCollectStSpriteRight(dynamicSprite, staticSprite) {
    dynamicSprite.x = staticSprite.x + staticSprite.width;

    // 蘑菇碰撞后，朝相反方向行动
    if (
      dynamicSprite instanceof SpriteGrowMushroom ||
      dynamicSprite instanceof SpriteBadMushroom
    ) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else {
      dynamicSprite.vx = 0;
    }
  }

  // 键盘操作
  handleKeyBoardControlMario(mario, scene) {
    if (this.keyboard.xDirection === "left") {
      mario.vx = Math.max(-4, mario.vx - 0.15);
      if (mario.vx + mario.x < 0) {
        mario.x = 0;
      }
    } else if (this.keyboard.xDirection === "right") {
      mario.vx = Math.min(4, mario.vx + 0.15);
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
