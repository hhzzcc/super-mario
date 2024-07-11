import { Sprite } from "../sprite";
import { SIZE } from "../constants";
import { buildingBulletResources } from "../utils/loadResources";

export class BuildingBullet extends Sprite {
  constructor(options) {
    const { x, y, vx = 8, vy = 4 } = options;
    super({ x, y, width: SIZE / 2, height: SIZE / 2, vx, vy });

    this.frame = 0;
    this.resources = {
      default: [
        buildingBulletResources[0],
        buildingBulletResources[1],
        buildingBulletResources[2],
        buildingBulletResources[3],
      ],
    };
    this.active();
    this.type = "default";
    this.step = 0;
  }

  getInfo() {
    const resource = this.resources[this.type][~~this.frame];
    this.frame =
      this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;

    this.x += this.vx;
    this.y += this.vy;
    this.step += 1;

    if (this.step >= 100) {
      this.destroy();
    }

    return {
      resource,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }
}
