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
import { BuildingFlower } from "../building/building-flower";
import { BuildingGrowMushroom } from "../building/building-grow-mushroom";
import { BuildingBullet } from "../building/building-bullet";
import { throttle } from "lodash-es";

const SIZE = 32;
const G = 0.4;
export class PhysicsEngine {
  jumping = [];

  constructor() {
    this.keyboard = new Keyboard();
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
        }) ||
        !dynamicSprite.isActive
      ) {
        continue;
      }

      // 键盘操作人物
      if (dynamicSprite instanceof Mario) {
        this.handleKeyBoardControlMario(dynamicSprite, scene);
      }

      // 上抛运动
      const jumpSprite = this.getJumpSprite(dynamicSprite);

      if (jumpSprite && !jumpSprite.jumping && jumpSprite.sprite.vy === 0) {
        this.removeJumpSprite(dynamicSprite);
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

      // 使用包围盒做碰撞检测，提升性能
      const boxX = (~~(dynamicSprite.x / SIZE) - 1) * SIZE;
      const boxY = (~~(dynamicSprite.y / SIZE) - 1) * SIZE;
      const boxWidth = (Math.ceil(dynamicSprite.width / SIZE) + 2) * SIZE;
      const boxHeight = (Math.ceil(dynamicSprite.height / SIZE) + 2) * SIZE;

      const collectBottoms = [];
      const collectTops = [];
      const collectLefts = [];
      const collectRights = [];

      for (let i = 0; i < boxWidth; i += SIZE) {
        for (let j = 0; j < boxHeight; j += SIZE) {
          const staticSprite = staticSpriteMaps[`${boxX + i}-${boxY + j}`];

          if (staticSprite) {
            // 检测到静态精灵进入动态精灵的检测范围内，才开始做碰撞检测
            if (staticSprite && isCollect(dynamicSprite, staticSprite)) {
              if (isCollectBBottom(dynamicSprite, staticSprite)) {
                collectBottoms.push(staticSprite);

                if (staticSprite.collect) {
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
          otherDynamicSprite === dynamicSprite
        ) {
          continue;
        }

        if (
          dynamicSprite instanceof Mario &&
          isCollect(dynamicSprite, otherDynamicSprite)
        ) {
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
          }
        }
      }

      if (collectBottoms.length) {
        const staticSprite = collectBottoms[0];
        dynamicSprite.y = staticSprite.y + staticSprite.height;

        // 子弹反弹
        if (dynamicSprite instanceof BuildingBullet) {
          dynamicSprite.vy = -dynamicSprite.vy;
        } // 击落跳跃中的精灵
        else if (jumpSprite && jumpSprite.jumping) {
          jumpSprite.jumping = false;
          dynamicSprite.vy = 1;
        }
      } else if (collectTops.length) {
        const staticSprite = collectTops[0];
        dynamicSprite.y = staticSprite.y - dynamicSprite.height;

        // 子弹反弹
        if (dynamicSprite instanceof BuildingBullet) {
          dynamicSprite.vy = -dynamicSprite.vy;
        } else {
          dynamicSprite.vy = 0;
        }
      }

      if (collectRights.length) {
        const staticSprite = collectRights[0];
        dynamicSprite.x = staticSprite.x + staticSprite.width;

        // 蘑菇碰撞后，朝相反方向行动
        if (dynamicSprite instanceof BuildingGrowMushroom) {
          dynamicSprite.vx = -dynamicSprite.vx;
        } else if (dynamicSprite instanceof BuildingBullet) {
          dynamicSprite.destroy();
        } else {
          dynamicSprite.vx = 0;
        }
      } else if (collectLefts.length) {
        const staticSprite = collectLefts[0];
        dynamicSprite.x = staticSprite.x - dynamicSprite.width;

        // 蘑菇碰撞后，朝相反方向行动
        if (dynamicSprite instanceof BuildingGrowMushroom) {
          dynamicSprite.vx = -dynamicSprite.vx;
        } else if (dynamicSprite instanceof BuildingBullet) {
          dynamicSprite.destroy();
        } else {
          dynamicSprite.vx = 0;
        }
      }
    }
  }

  getJumpSprite(sprite) {
    return this.jumping.find((v) => v.sprite === sprite);
  }

  addJumpSprite(sprite) {
    const jumpSprite = this.getJumpSprite(sprite);

    if (jumpSprite) {
      // 按得越久，受力越小，跳的越高
      if (jumpSprite.a > 0.5 * G) {
        jumpSprite.a -= 0.015;
      }
      return;
    }
    const item = {
      // 初速度
      v0: 9,

      // 加速度
      a: G,
      jumping: true,
      sprite,
    };
    this.jumping.push(item);
  }

  removeJumpSprite(sprite) {
    for (let i = 0; i < this.jumping.length; i++) {
      if (this.jumping[i].sprite === sprite) {
        this.jumping.splice(i, 1);
        break;
      }
    }
  }

  handleKeyBoardControlMario(mario, scene) {
    if (this.keyboard.xDirection === "left") {
      mario.vx = Math.min(-3, mario.vx - 0.05);
    } else if (this.keyboard.xDirection === "right") {
      mario.vx = Math.max(3, mario.vx + 0.05);
    } else {
      mario.vx = 0;
    }

    // 跳跃
    if (this.keyboard.yDirection === "top") {
      this.addJumpSprite(mario);
    }

    if (this.keyboard.pressBlank) {
      this.handleMarioAttack(scene, mario);
    } else {
      mario.unAttack();
    }
  }

  handleMarioAttack = throttle((scene, mario) => {
    mario.attack();

    // 添加子弹
    scene.addDynamicSprites(
      new BuildingBullet({
        x: mario.x + mario.width,
        y: mario.y,
      })
    );
  }, 200);
}
