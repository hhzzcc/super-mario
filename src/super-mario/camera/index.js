export class Camera {
  constructor(options) {
    const { width, height, x, y } = options;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  isInView(options) {
    let { x, y, width, height } = options;

    // y轴上允许向上超出屏幕200
    return (
      x + width >= this.x &&
      x <= this.x + this.width &&
      y + height >= this.y - 200 &&
      y <= this.y - 200 + this.height + 200
    );
  }
}
