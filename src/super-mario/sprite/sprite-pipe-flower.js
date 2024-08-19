import { spritePipeFlowerResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { DynamicSprite } from "./dynamic-sprite";

export class SpritePipeFlower extends DynamicSprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.frame = 0;

    this.resources = {
      default: [spritePipeFlowerResources[0], spritePipeFlowerResources[1]],
    };
    this.type = "default";

    this.moveStep = 0;
    this.originY = y;
    this.isMove = true;

    this.active();
    this.unPhysics();
  }

  dieByBullet() {
    this.destroy();
  }

  unMove() {
    this.isMove = false;
  }

  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame =
      ~~(this.frame + 0.03) > this.resources[this.type].length - 1
        ? 0
        : this.frame + 0.03;

    if (this.isMove) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.moveStep === 0) {
        this.moveStep = 100;

        this.vy = this.originY - this.y <= 0 ? -0.8 : 0.3;
      } else if (Math.abs(this.originY - this.y) >= this.height) {
        this.vy = 0;
        this.moveStep--;
      }
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
