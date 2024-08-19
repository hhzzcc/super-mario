export class DynamicSprite {
  isActive = false;
  isDestroy = false;

  constructor(options) {
    const { x, y, vx = 0, vy = 0, width, height } = options;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.width = width;
    this.height = height;
    this.isPhysics = true;
  }

  active() {
    this.isActive = true;
  }

  unActive() {
    this.isActive = false;
  }

  unPhysics() {
    this.isPhysics = false;
  }

  destroy() {
    this.unActive();
    this.isDestroy = true;
  }
}
