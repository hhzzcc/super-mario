import { buildingStoneResources } from "../utils/loadResources";
import { Sprite } from "../sprite";
import { SIZE } from "../constants";

const COLLECT_OFFSET = 6;
export class BuildingStone extends Sprite {
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

  hit() {
    this.collectY = this.y - COLLECT_OFFSET;
  }

  draw(context, camera) {
    if (this.collectY) {
      this.collectY++;
      this.collectStep++;

      if (this.collectStep > COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
      }
    }

    context.drawImage(
      buildingStoneResources[0],
      this.x - camera.x,
      this.collectY || this.y,
      this.width,
      this.height
    );
  }
}
