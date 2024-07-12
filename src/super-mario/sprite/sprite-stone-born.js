import { StaticSprite } from "./static-sprite";
import { SIZE } from "../constants";
import { spriteStoneBornResources } from "../utils/loadResources";

export class SpriteStoneBorn extends StaticSprite {
  constructor(options) {
    const width = SIZE / 2;
    const height = SIZE / 2;
    let x, y;

    if (options.index === 0) {
      x = options.x;
      y = options.y;
    } else if (options.index === 1) {
      x = options.x + width;
      y = options.y;
    } else if (options.index === 2) {
      x = options.x;
      y = options.y + height;
    } else {
      x = options.x + width;
      y = options.y + height;
    }
    super({
      x,
      y,
      width,
      height,
    });
    // 碎块位置
    this.index = options.index;
    this.animatedX = 0;
    this.animatedY = 0;
    this.beginX = x;
    this.beginY = y;
  }

  // 根据碎块位置做抛物线运动
  draw(context, camera) {
    if (this.index === 0 || this.index === 2) {
      const b = this.index === 0 ? 5 : 3;
      this.animatedX += 2;
      this.animatedY =
        0.1 * this.animatedX * this.animatedX - b * this.animatedX;

      context.drawImage(
        spriteStoneBornResources[0],
        this.beginX - this.animatedX - camera.x,
        this.beginY + this.animatedY,
        this.width,
        this.height
      );
    }

    if (this.index === 1 || this.index === 3) {
      const b = this.index === 1 ? 5 : 3;
      this.animatedX += 2;
      this.animatedY =
        0.1 * this.animatedX * this.animatedX - b * this.animatedX;

      context.drawImage(
        spriteStoneBornResources[0],
        this.beginX + this.animatedX - camera.x,
        this.beginY + this.animatedY,
        this.width,
        this.height
      );
    }
  }
}
