import { buildingAskResources } from "../utils/loadResources";
import { Sprite } from "../sprite";
import { SIZE } from "../constants";

const COLLECT_OFFSET = 6;
export class BuildingAsk extends Sprite {
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
        buildingAskResources[0],
        buildingAskResources[1],
        buildingAskResources[2],
        buildingAskResources[3],
        buildingAskResources[4],
        buildingAskResources[5],
      ],
      empty: [buildingAskResources[6]],
    };
    this.type = "default";
  }

  hit() {
    if (this.type === "empty") {
      return;
    }

    this.type = "empty";
    this.frame = 0;
    this.collectY = this.y - COLLECT_OFFSET;
  }

  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame =
      this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;

    if (this.collectY) {
      this.collectY++;
      this.collectStep++;

      if (this.collectStep > COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
      }
    }

    context.drawImage(
      resource,
      this.x - camera.x,
      this.collectY || this.y,
      this.width,
      this.height
    );
  }
}
