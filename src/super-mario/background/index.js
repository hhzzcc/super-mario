import { Rect, Group, Leafer } from "leafer-ui";
import { backgroundResources } from "../utils/loadResources";

export class Background {
  constructor(options) {
    const { width: sceneWidth, height: sceneHeight } = options;
    const {
      width: imageWidth,
      height: imageHeight,
      src: imageUrl,
    } = backgroundResources[0];

    this.init({
      sceneWidth,
      sceneHeight,
      imageWidth,
      imageHeight,
      imageUrl,
    });
  }

  init(options) {
    const { sceneWidth, sceneHeight, imageWidth, imageHeight, imageUrl } =
      options;
    const imageAr = imageWidth / imageHeight;
    this._core = new Leafer();

    const group = new Group({
      x: 0,
      y: 0,
      width: sceneWidth,
      height: sceneHeight,
    });

    const bgWidth = imageAr * sceneHeight;
    // 第一张背景图
    group.add(
      new Rect({
        x: 0,
        y: 0,
        width: bgWidth,
        height: sceneHeight,
        fill: {
          type: "image",
          url: imageUrl,
          mode: "fit",
        },
      })
    );

    // 第二张背景图
    this.breakPoint = bgWidth - 1;
    group.add(
      new Rect({
        x: this.breakPoint,
        y: 0,
        width: bgWidth,
        height: sceneHeight,
        fill: {
          type: "image",
          url: imageUrl,
          mode: "fit",
        },
      })
    );

    this._core.add(group);
  }

  getCore() {
    return this._core;
  }

  run(options) {
    const { move } = options;
    const group = this.getCore().children[0];
    // 到达断点，背景图位置重置
    group.set({
      x: group.x + move <= -this.breakPoint ? 0 : group.x + move,
    });
  }
}
