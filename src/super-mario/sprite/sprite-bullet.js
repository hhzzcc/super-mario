import { SIZE } from "../constants";
import { spriteBulletResources } from "../utils/loadResources";
import { DynamicSprite } from "./dynamic-sprite";

export class SpriteBullet extends DynamicSprite {
  constructor(options) {
    const { x, y, vx = 4, vy = 4 } = options;
    super({ x, y, width: SIZE / 2, height: SIZE / 2, vx, vy });

    this.frame = 0;
    this.resources = [
      spriteBulletResources[0],
      spriteBulletResources[1],
      spriteBulletResources[2],
      spriteBulletResources[3],
    ];
    this.active();
    this.step = 0;
  }

  draw(context, camera) {
    const resource = this.resources[~~this.frame];
    this.frame = this.frame >= this.resources.length - 1 ? 0 : this.frame + 0.1;

    this.x += this.vx;
    this.y += this.vy;
    this.step += 1;

    if (this.step >= 60) {
      this.destroy();
    }

    context.drawImage(
      resource,
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
