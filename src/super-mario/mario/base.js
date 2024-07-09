import { Rect, Canvas } from "leafer-ui";
import { baseMarioResources } from "../utils/loadResources";

const WIDTH = 32;
const HEIGHT = 32;
export class BaseMario {
  frame = 0;
  actionType = "static";

  constructor(options) {
    const { x, y } = options;
    this.resources = {
      static: [baseMarioResources[0]],
      jumpLeft: [baseMarioResources[1]],
      jumpRight: [baseMarioResources[2]],
      left: [
        baseMarioResources[3],
        baseMarioResources[4],
        baseMarioResources[5],
      ],
      right: [
        baseMarioResources[6],
        baseMarioResources[7],
        baseMarioResources[8],
      ],
      die: [baseMarioResources[9]],
    };

    this._core = new Canvas({
      x,
      y,
      width: WIDTH,
      height: HEIGHT,
      pixelRatio: 1,
    });
  }

  getCore() {
    return this._core;
  }

  run(options) {
    const { x, y, actionType } = options;
    if (actionType !== this.actionType) {
      this.frame = 0;
    }
    this.actionType = actionType;

    const resource = this.resources[actionType][~~this.frame];
    this.frame =
      this.frame >= this.resources[actionType].length - 1
        ? 0
        : this.frame + 0.1;

    this._core.context.clearRect(0, 0, WIDTH, HEIGHT);
    this._core.context.setTransform(1, 0, 0, 1, 0, 0);
    this._core.context.drawImage(resource, 0, 0, WIDTH, HEIGHT);

    this._core.set({
      x,
      y,
    });
    this._core.paint();
  }
}
