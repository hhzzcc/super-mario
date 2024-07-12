import { buildingFlowerResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { Sprite } from "../sprite";

const COLLECT_OFFSET = 6;
export class BuildingFlower extends Sprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;

    this.resources = {
      default: [
        buildingFlowerResources[0],
        buildingFlowerResources[1],
        buildingFlowerResources[2],
        buildingFlowerResources[3],
      ],
    };
    this.type = "default";
  }

  appear() {
    if (this.isActive) {
      return;
    }

    this.collectY = this.y - COLLECT_OFFSET;
  }

  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame =
      this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;

    if (this.collectY) {
      this.y = this.collectY;
      this.collectY--;
      this.collectStep++;

      if (this.collectStep > this.height - COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
        this.active();
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
