export class StaticSprite {
  isDestroy = false;

  constructor(options) {
    const { x, y, width, height } = options;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  destroy() {
    this.isDestroy = true;
  }
}
