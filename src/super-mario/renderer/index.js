import { Leafer, App } from "leafer-ui";
import { Scene } from "../scene";
import { Camera } from "../camera";
import { Map } from "../map";
import { data as mapData } from "../map/datas/map1";
import { Background } from "../background";
import { Mario } from "../mario";
import { PhysicsEngine } from "../physics-engine/index";
import { MARIO_VIEW_OFFSET } from "../constants";

export class Renderer {
  constructor(options) {
    const { view } = options;
    const sceneWidth = view.offsetWidth;
    const sceneHeight = view.offsetHeight;
    const app = new App({ view });

    const camera = new Camera({
      x: 0,
      y: 0,
      width: sceneWidth,
      height: sceneHeight,
    });

    const background = new Background({ camera });

    const scene = new Scene({ camera });

    const mario = new Mario({
      x: 0,
      y: 0,
    });

    app.add(background.getCore());

    // 导入地图
    const map = new Map();
    const sprites = map.deserialization(mapData);

    sprites.dynamics.forEach((sprite) => {
      scene.addDynamicSprites(sprite);
    });

    sprites.statics.forEach((sprite) => {
      scene.addStaticSprites(sprite);
    });

    scene.addDynamicSprites(mario);
    app.add(scene.getCore());

    this._scene = scene;
    this._background = background;
    this._camera = camera;
    this._mario = mario;
    this._physicsEngine = new PhysicsEngine();
  }

  run() {
    // 运行物理引擎
    this._physicsEngine.run({
      camera: this._camera,
      scene: this._scene,
    });

    // 运行场景中的精灵
    this._scene.run();

    // 运行背景
    this._background.run();

    // 相机跟随玛丽
    this._camera.x =
      this._mario.x < MARIO_VIEW_OFFSET ? 0 : this._mario.x - MARIO_VIEW_OFFSET;

    requestAnimationFrame(this.run.bind(this));
  }
}
