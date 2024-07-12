import { spriteGrowMushroomResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { DynamicSprite } from "./dynamic-sprite";

const COLLECT_OFFSET = 6;
export class SpriteGrowMushroom extends DynamicSprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.collectY = null;
    this.collectStep = 0;
  }

  appear() {
    if (this.isActive) {
      return;
    }

    this.collectY = this.y - COLLECT_OFFSET;
  }

  draw(context, camera) {
    if (this.collectY) {
      this.y = this.collectY;
      this.collectY--;
      this.collectStep++;

      if (this.collectStep > this.height - COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
        this.vx = -1;
        this.active();
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    context.drawImage(
      spriteGrowMushroomResources[0],
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
