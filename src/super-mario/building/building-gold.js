import { buildingGoldResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { Sprite } from "../sprite";

export class BuildingGold extends Sprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.frame = 0;
  }

  draw(context, camera) {
    const resource = buildingGoldResources[~~this.frame];
    this.frame =
      this.frame >= buildingGoldResources.length - 1 ? 0 : this.frame + 0.1;

    context.drawImage(
      resource,
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
