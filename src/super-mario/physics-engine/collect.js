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

// export const isCollectLeftRight = (a, b) => {
//   return (
//     ((a.x + a.vx > b.x && a.x + a.vx < b.x + b.width) ||
//       (a.x + a.width + a.vx > b.x && a.x + a.width + a.vx < b.x + b.width)) &&
//     a.y !== b.y - a.height &&
//     a.y !== b.y + b.height
//   );
// };

// export const isCollectTopBottom = (a, b) => {
//   return (
//     ((a.y + a.vy > b.y && a.y + a.vy < b.y + b.height) ||
//       (a.y + a.height + a.vy > b.y &&
//         a.y + a.height + a.vy < b.y + b.height)) &&
//     a.x !== b.x - a.width &&
//     a.x !== b.x + b.width
//   );
// };

export function isCollection(rectA, rectB) {
  if (rectA.vx === 0 && rectA.vy === 0) return false;
  const nextX1 = rectA.x + rectA.vx;
  const nextY1 = rectA.y + rectA.vy;
  const w1 = rectA.width;
  const h1 = rectA.height;

  const x2 = rectB.x;
  const y2 = rectB.y;
  const w2 = rectB.width;
  const h2 = rectB.height;

  // 判断两个矩形是否碰撞
  const isCollide =
    nextX1 < x2 + w2 &&
    nextX1 + w1 > x2 &&
    nextY1 < y2 + h2 &&
    nextY1 + h1 > y2;
  return isCollide;
}
