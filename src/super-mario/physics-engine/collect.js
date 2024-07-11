export const isCollectBTop = (a, b) => {
  return (
    a.vy > 0 &&
    a.y + a.height + a.vy > b.y &&
    a.y + a.height + a.vy < b.y + b.height
  );
};

export const isCollectBBottom = (a, b) => {
  return a.vy < 0 && a.y + a.vy > b.y && a.y + a.vy < b.y + b.height;
};

export const isCollectBLeft = (a, b) => {
  return (
    a.vx > 0 &&
    a.x + a.width + a.vx > b.x &&
    a.x + a.width + a.vx < b.x + b.width
  );
};

export const isCollectBRight = (a, b) => {
  return a.vx < 0 && a.x + a.vx > b.x && a.x + a.vx < b.x + b.width;
};

export function isCollect(rectA, rectB) {
  const x1 = rectA.x + rectA.vx;
  const y1 = rectA.y + rectA.vy;
  const w1 = rectA.width;
  const h1 = rectA.height;

  const x2 = rectB.x + rectB.vx;
  const y2 = rectB.y + rectB.vy;
  const w2 = rectB.width;
  const h2 = rectB.height;

  // 判断两个矩形是否碰撞
  const isCollide =
    x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
  return isCollide;
}
