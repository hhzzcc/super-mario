import { Rect, Group, Leafer } from "leafer-ui";
import { backgroundResources } from "../utils/loadResources";

export class Background {
  constructor(options) {
    const { camera } = options;
    const {
      width: imageWidth,
      height: imageHeight,
      src: imageUrl,
    } = backgroundResources[0];

    this._camera = camera;
    this.init({
      sceneWidth: camera.width,
      sceneHeight: camera.height,
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

  run() {
    const group = this.getCore().children[0];
    // 到达断点，背景图位置重置
    group.set({
      x: -this._camera.x <= -this.breakPoint ? 0 : -this._camera.x,
    });
  }
}
