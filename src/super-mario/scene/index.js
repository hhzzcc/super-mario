import { Canvas, Leafer } from "leafer-ui";
export class Scene {
  staticSpriteMaps = {};
  staticSprites = [];
  dynamicSprites = [];

  constructor(options) {
    const { camera } = options;
    this._core = new Leafer();
    const canvas = new Canvas({
      x: camera.x,
      y: camera.y,
      width: camera.width,
      height: camera.height,
      pixelRatio: devicePixelRatio,
    });
    this._core.add(canvas);
    this._canvas = canvas;
    this._camera = camera;
  }

  // 添加静态精灵
  addStaticSprites(staticSprite) {
    this.staticSpriteMaps[`${staticSprite.x}-${staticSprite.y}`] = staticSprite;
    this.staticSprites.push(staticSprite);
  }

  // 添加动态精灵
  addDynamicSprites(dynamicSprite) {
    this.dynamicSprites.push(dynamicSprite);
  }

  run() {
    this._canvas.context.clearRect(
      0,
      0,
      this._canvas.width,
      this._canvas.height
    );
    this._canvas.context.setTransform(
      devicePixelRatio,
      0,
      0,
      devicePixelRatio,
      0,
      0
    );

    // 动态精灵渲染
    for (let i = 0; i < this.dynamicSprites.length; i++) {
      const child = this.dynamicSprites[i];

      if (child.isDestroy) {
        this.dynamicSprites.splice(i, 1);
      }
      // 只绘制相机内的精灵
      else if (this._camera.isInView(child) && child.getInfo) {
        const { resource, x, y, width, height } = child.getInfo();
        this._canvas.context.drawImage(
          resource,
          x - this._camera.x,
          y,
          width,
          height
        );
      }
    }

    // 静态精灵渲染
    for (let i = 0; i < this.staticSprites.length; i++) {
      const child = this.staticSprites[i];

      if (child.isDestroy) {
        this.staticSprites.splice(i, 1);
        delete this.staticSpriteMaps[`${child.x}-${child.y}`];
      }
      // 只绘制相机内的精灵
      else if (this._camera.isInView(child) && child.getInfo) {
        const { resource, x, y, width, height } = child.getInfo();
        this._canvas.context.drawImage(
          resource,
          x - this._camera.x,
          y,
          width,
          height
        );
      }
    }

    this._canvas.paint();
  }

  getCore() {
    return this._core;
  }
}
