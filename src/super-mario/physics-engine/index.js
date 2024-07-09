import { Mario } from "../mario";
import { Keyboard } from "./keyboard";
import {
  isCollection,
  // isCollectLeftRight,
  // isCollectTopBottom,
  isCollectBTop,
  isCollectBBottom,
  isCollectBLeft,
  isCollectBRight,
} from "./collect";

const SIZE = 32;
const G = 0.4;
export class PhysicsEngine {
  jumping = [];

  constructor() {
    this.keyboard = new Keyboard();
  }

  run(options) {
    const { staticSprites, dynamicSprites, camera } = options;

    for (let i = 0; i < dynamicSprites.length; i++) {
      const dynamicSprite = dynamicSprites[i];

      // 没在相机内，不需要物理检测
      if (
        camera.isInView({
          x: dynamicSprite.x,
          y: dynamicSprite.y,
          width: dynamicSprite.width,
          height: dynamicSprite.height,
        })
      ) {
        continue;
      }

      // 人物
      if (dynamicSprite instanceof Mario) {
        this.handleMario(dynamicSprite);
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
      } // 自由落体
      else {
        // 最大速度不超过10
        dynamicSprite.vy = Math.min(10, dynamicSprite.vy + G);
      }

      // 使用包围盒做碰撞检测，降低时间复杂度
      const boxX = (~~(dynamicSprite.x / SIZE) - 1) * SIZE;
      const boxY = (~~(dynamicSprite.y / SIZE) - 1) * SIZE;
      const boxWidth = (Math.ceil(dynamicSprite.width / SIZE) + 2) * SIZE;
      const boxHeight = (Math.ceil(dynamicSprite.height / SIZE) + 2) * SIZE;

      for (let i = 0; i < boxWidth; i += SIZE) {
        for (let j = 0; j < boxHeight; j += SIZE) {
          const staticSprite = staticSprites[`${boxX + i}-${boxY + j}`];

          // 检测到静态精灵进入动态精灵的检测范围内，才开始做碰撞检测
          if (staticSprite && isCollection(dynamicSprite, staticSprite)) {
            if (isCollectBBottom(dynamicSprite, staticSprite)) {
              dynamicSprite.y = staticSprite.y + staticSprite.height;
              if (jumpSprite && jumpSprite.jumping) {
                jumpSprite.jumping = false;
                dynamicSprite.vy = 1;
              }
            } else if (isCollectBTop(dynamicSprite, staticSprite)) {
              dynamicSprite.y = staticSprite.y - dynamicSprite.height;
              dynamicSprite.vy = 0;
            } else if (isCollectBRight(dynamicSprite, staticSprite)) {
              dynamicSprite.x = staticSprite.x + staticSprite.width;
              dynamicSprite.vx = 0;
            } else if (isCollectBLeft(dynamicSprite, staticSprite)) {
              dynamicSprite.x = staticSprite.x - dynamicSprite.width;
              dynamicSprite.vx = 0;
            }
          }
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

  handleMario(mario) {
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
  }
}
