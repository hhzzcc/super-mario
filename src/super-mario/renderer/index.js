import { Leafer, App } from "leafer-ui";
import { Scene } from "../scene";
import { Camera } from "../camera";
import { Map } from "../map";
import { data as mapData } from "../map/datas/map1";
import { Background } from "../background";
import { Mario } from "../mario";
import { PhysicsEngine } from "../physics-engine/index";

export class Renderer {
  // 整个场景中的所有精灵
  _sprites = {
    statics: {},
    dynamics: [],
  };

  constructor(options) {
    const { view } = options;
    const sceneWidth = view.offsetWidth;
    const sceneHeight = view.offsetHeight;
    const app = new App({ view });

    const scene = new Scene();

    const background = new Background({
      width: sceneWidth,
      height: sceneHeight,
    });

    const camera = new Camera({
      x: 0,
      y: 0,
      width: sceneWidth,
      height: sceneHeight,
    });

    const mario = new Mario({
      x: 0,
      y: 0,
    });

    app.add(background.getCore());

    // 导入地图
    const map = new Map();
    const sprites = map.deserialization(mapData);

    /// 静态精灵
    Object.values(sprites.statics).forEach((v) => {
      scene.add(v);
    });

    // 动态精灵
    sprites.dynamics.forEach((v) => {
      scene.add(v);
    });

    scene.add(mario);
    app.add(scene.getCore());

    this._sprites = {
      statics: sprites.statics,
      dynamics: [mario, ...sprites.dynamics],
    };
    this._app = app;
    this._scene = scene;
    this._background = background;
    this._camera = camera;
    this._mario = mario;
    this._physicsEngine = new PhysicsEngine();
  }

  run() {
    // 运行物理引擎
    this._physicsEngine.run({
      staticSprites: this._sprites.statics,
      dynamicSprites: this._sprites.dynamics,
      camera: this._camera,
    });

    // 运行场景中的精灵
    this._scene.run();

    // 运行背景
    this._background.run({ move: -this._mario.vx });

    requestAnimationFrame(this.run.bind(this));
  }
}
