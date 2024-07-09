import { buildingLandResources } from "../utils/loadResources";
import { Rect } from "leafer-ui";

const WIDTH = 32;
const HEIGHT = 32;
export class BuildingLand {
  constructor(options) {
    const { x, y } = options;
    this.x = x;
    this.y = y;
    this.width = WIDTH;
    this.height = HEIGHT;
    this._core = new Rect({
      x,
      y,
      width: WIDTH,
      height: HEIGHT,
      fill: {
        type: "image",
        url: buildingLandResources[0].src,
        mode: "fit",
      },
    });
  }

  getCore() {
    return this._core;
  }
}
