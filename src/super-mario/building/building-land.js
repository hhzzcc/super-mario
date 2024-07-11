import { buildingLandResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { Sprite } from "../sprite";

export class BuildingLand extends Sprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.resources = {
      default: [buildingLandResources[0]],
    };
    this.type = "default";
  }

  getInfo() {
    const resource = this.resources[this.type][~~this.frame];
    this.frame =
      this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;

    return {
      resource,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }
}
