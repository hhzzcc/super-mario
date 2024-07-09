import { BaseMario } from "./base";

function getActionTypeBySpeed(vx, vy) {
  if (vx === 0 && vy === 0) {
    return "static";
  }
  // 往右边跳
  else if (vy !== 0 && vx >= 0) {
    return "jumpRight";
  }
  // 往左边跳
  else if (vy !== 0 && vx < 0) {
    return "jumpLeft";
  }
  // 往左边走
  else if (vy === 0 && vx < 0) {
    return "left";
  }
  // 往右边走
  else {
    return "right";
  }
}

export class Mario {
  constructor(options) {
    const { x, y } = options;
    this.growType = "base";
    this.vx = 0;
    this.vy = 0;
    this.x = x;
    this.y = y;
    this.baseMario = new BaseMario({ x, y });
  }

  get width() {
    return this.getCore().width;
  }

  get height() {
    return this.getCore().height;
  }

  getMario() {
    if (this.growType === "base") {
      return this.baseMario;
    }
  }

  getCore() {
    return this.getMario().getCore();
  }

  run() {
    const { vx, vy } = this;
    const actionType = getActionTypeBySpeed(vx, vy);
    const mario = this.getMario();

    const x = this.x + vx;
    const y = this.y + vy;

    mario.run({
      x,
      y,
      actionType,
    });

    this.x = x;
    this.y = y;
  }
}
