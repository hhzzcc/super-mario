import { App } from "leafer-ui";
import { Scene } from "../scene";
import { Camera } from "../camera";
import { Map } from "../map";
import { Background } from "../background";
import { Score } from "../score";

import { Mario } from "../mario";
import { PhysicsEngine } from "../physics-engine/index";
import { MARIO_VIEW_OFFSET } from "../constants";
import { Platform } from "leafer-ui";

export class Renderer {
  constructor(options) {
    const { view, mapData, readonly } = options;
    Platform.image.crossOrigin = "anonymous";
    const app = new App({ view });

    const camera = new Camera({
      x: 0,
      y: 0,
      width: view.offsetWidth,
      height: view.offsetHeight,
    });

    const background = new Background({ camera });
    const score = new Score({ camera });

    const scene = new Scene({ camera });

    const mario = new Mario({
      x: 0,
      y: 0,
    });

    app.add(background.getCore());

    // 导入地图
    const map = new Map();

    if (mapData) {
      const sprites = map.deserialization(mapData);

      sprites.dynamics.forEach((sprite) => {
        if (readonly) {
          sprite.vx = 0;
          sprite.vy = 0;
        }
        scene.addDynamicSprites(sprite);
      });

      sprites.statics.forEach((sprite) => {
        scene.addStaticSprites(sprite);
      });
    }

    !readonly && scene.addDynamicSprites(mario);
    app.add(scene.getCore());
    !readonly && app.add(score.getCore());

    this._app = app;
    this.scene = scene;
    this._background = background;
    this._score = score;
    this.camera = camera;
    this._mario = mario;
    this.readonly = readonly;
    this._physicsEngine = new PhysicsEngine();
  }

  run(onEnd, onWin) {
    if (this.isDestroy) {
      return;
    }

    if (!this.readonly && this._mario.isDie) {
      onEnd(this._score.totalScore);
      return false;
    }

    if (!this.readonly && this._mario.isWin) {
      onWin(this._score.totalScore);
      return false;
    }

    // 运行物理引擎
    !this.readonly &&
      this._physicsEngine.run({
        camera: this.camera,
        scene: this.scene,
        onScore: (...v) => {
          this._score.add(...v);
        },
      });

    // 运行场景中的精灵
    this.scene.run();

    // 运行背景
    this._background.run();

    !this.readonly && this._score.run();

    // 相机跟随玛丽
    if (!this.readonly) {
      this.camera.x =
        this._mario.x < MARIO_VIEW_OFFSET
          ? 0
          : this._mario.x - MARIO_VIEW_OFFSET;
    }

    requestAnimationFrame(this.run.bind(this, onEnd, onWin));
  }

  destroy() {
    this.isDestroy = true;
    this._app.destroy();
  }
}
