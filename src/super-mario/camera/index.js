export class Camera {
  constructor(options) {
    const { width, height, x, y } = options;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  isInView(options) {
    const { x, y, width, height } = options;
    return (
      x + width >= this.x &&
      x <= this.x + this.width &&
      y + height >= this.yy &&
      y <= this.y + this.height
    );
  }
}
