const collectBTop = (a, b) => {
  return a.vy > 0 && a.y + a.height <= b.y;
};

const collectBBottom = (a, b) => {
  return a.vy < 0 && a.y >= b.y + b.height;
};

const collectBLeft = (a, b) => {
  return a.vx > 0 && a.x + a.width <= b.x;
};

const collectBRight = (a, b) => {
  return a.vx < 0 && a.x >= b.x + b.width;
};

export const isCollectBTop = (a, b) => {
  return (
    collectBTop(a, b) &&
    !collectBBottom(a, b) &&
    !collectBLeft(a, b) &&
    !collectBRight(a, b)
  );
};

export const isCollectBBottom = (a, b) => {
  return (
    collectBBottom(a, b) &&
    !collectBTop(a, b) &&
    !collectBLeft(a, b) &&
    !collectBRight(a, b)
  );
};

export const isCollectBLeft = (a, b) => {
  return (
    collectBLeft(a, b) &&
    !collectBRight(a, b) &&
    !collectBTop(a, b) &&
    !collectBBottom(a, b)
  );
};

export const isCollectBRight = (a, b) => {
  return (
    collectBRight(a, b) &&
    !collectBLeft(a, b) &&
    !collectBTop(a, b) &&
    !collectBBottom(a, b)
  );
};

export function isCollect(rectA, rectB) {
  const x1 = rectA.x + rectA.vx;
  const y1 = rectA.y + rectA.vy;
  const w1 = rectA.width;
  const h1 = rectA.height;

  const x2 = rectB.x + (rectB.vx || 0);
  const y2 = rectB.y + (rectB.vy || 0);
  const w2 = rectB.width;
  const h2 = rectB.height;

  // 判断两个矩形是否碰撞
  const isCollide =
    x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
  return isCollide;
}
