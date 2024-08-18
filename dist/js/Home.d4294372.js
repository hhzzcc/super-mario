"use strict";
(self["webpackChunksuper_mario"] = self["webpackChunksuper_mario"] || []).push([[274],{

/***/ 749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.2.13/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(111);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.2.13/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(586);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.2.13/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(471);
;// CONCATENATED MODULE: ./src/super-mario/utils/loadResources.js
function loadImages(urls) {
  const promises = [];
  urls.forEach(url => {
    promises.push(new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = err => reject(err);
      image.src = url;
    }));
  });
  return Promise.all(promises);
}
function loadBaseMarioResources() {
  return loadImages(["imgs/mario/base/static/static.jpg", "imgs/mario/base/jump/jump-left.jpg", "imgs/mario/base/jump/jump-right.jpg", "imgs/mario/base/left/frame-1.jpg", "imgs/mario/base/left/frame-2.jpg", "imgs/mario/base/left/frame-3.jpg", "imgs/mario/base/right/frame-1.jpg", "imgs/mario/base/right/frame-2.jpg", "imgs/mario/base/right/frame-3.jpg", "imgs/mario/base/die/frame-1.jpg"]);
}
function loadBigMarioResources() {
  return loadImages(["imgs/mario/big/static/static.jpg", "imgs/mario/big/jump/jump-left.jpg", "imgs/mario/big/jump/jump-right.jpg", "imgs/mario/big/left/frame-1.jpg", "imgs/mario/big/left/frame-2.jpg", "imgs/mario/big/left/frame-3.jpg", "imgs/mario/big/right/frame-1.jpg", "imgs/mario/big/right/frame-2.jpg", "imgs/mario/big/right/frame-3.jpg"]);
}
function loadBulletMarioResources() {
  return loadImages(["imgs/mario/bullet/static/static.jpg", "imgs/mario/bullet/jump/jump-left.jpg", "imgs/mario/bullet/jump/jump-right.jpg", "imgs/mario/bullet/left/frame-1.jpg", "imgs/mario/bullet/left/frame-2.jpg", "imgs/mario/bullet/left/frame-3.jpg", "imgs/mario/bullet/right/frame-1.jpg", "imgs/mario/bullet/right/frame-2.jpg", "imgs/mario/bullet/right/frame-3.jpg", "imgs/mario/bullet/attack/left.jpg", "imgs/mario/bullet/attack/right.jpg"]);
}
function loadBackgroundResources() {
  return loadImages(["imgs/scene/scene.jpg"]);
}
function loadSpriteLandResources() {
  return loadImages(["imgs/building/land/land.jpg"]);
}
function loadSpriteRockResources() {
  return loadImages(["imgs/building/rock/rock.jpg"]);
}
function loadSpriteStoneResources() {
  return loadImages(["imgs/building/stone/stone.jpg"]);
}
function loadSpriteStoneBornResources() {
  return loadImages(["imgs/building/stone/stone-born.jpg"]);
}
function loadSpriteAskResources() {
  return loadImages(["imgs/building/ask/frame-1.jpg", "imgs/building/ask/frame-2.jpg", "imgs/building/ask/frame-3.jpg", "imgs/building/ask/frame-4.jpg", "imgs/building/ask/frame-5.jpg", "imgs/building/ask/frame-6.jpg", "imgs/building/ask/empty.jpg"]);
}
function loadSpriteWinResources() {
  return loadImages(["imgs/building/win/flag.jpg", "imgs/building/win/round.jpg", "imgs/building/win/rod.jpg"]);
}
function loadSpriteFlowerResources() {
  return loadImages(["imgs/props/flow/frame-1.jpg", "imgs/props/flow/frame-2.jpg", "imgs/props/flow/frame-3.jpg", "imgs/props/flow/frame-4.jpg"]);
}
function loadSpriteGoldResources() {
  return loadImages(["imgs/props/gold/frame-1.jpg", "imgs/props/gold/frame-2.jpg", "imgs/props/gold/frame-3.jpg", "imgs/props/gold/frame-4.jpg", "imgs/props/gold/frame-5.jpg", "imgs/props/gold/frame-6.jpg"]);
}
function loadSpriteGrowMushroomResources() {
  return loadImages(["imgs/props/grow-mushroom/frame-1.jpg"]);
}
function loadSpriteBadMushroomResources() {
  return loadImages(["imgs/bad/mushroom/frame-1.jpg", "imgs/bad/mushroom/frame-2.jpg", "imgs/bad/mushroom/die-frame-1.jpg", "imgs/bad/mushroom/die-frame-2.jpg", "imgs/bad/mushroom/die.jpg"]);
}
function loadSpriteHorrorResources() {
  return loadImages(["imgs/bad/horror/frame-1.jpg", "imgs/bad/horror/frame-2.jpg", "imgs/bad/horror/die-frame-1.jpg", "imgs/bad/horror/die-frame-2.jpg"]);
}
function loadSpriteTurtleResources() {
  return loadImages(["imgs/bad/turtle/frame-1.jpg", "imgs/bad/turtle/frame-2.jpg", "imgs/bad/turtle/hide-frame-1.jpg", "imgs/bad/turtle/hide-frame-2.jpg", "imgs/bad/turtle/die-frame-1.jpg", "imgs/bad/turtle/die-frame-2.jpg", "imgs/bad/turtle/fly-frame-1.jpg", "imgs/bad/turtle/fly-frame-2.jpg"]);
}
function loadSpriteShellResources() {
  return loadImages(["imgs/bad/shell/frame-1.jpg", "imgs/bad/shell/frame-2.jpg", "imgs/bad/shell/hide.jpg"]);
}
function loadSpriteBulletResources() {
  return loadImages(["imgs/bullet/frame-1.jpg", "imgs/bullet/frame-2.jpg", "imgs/bullet/frame-3.jpg", "imgs/bullet/frame-4.jpg"]);
}
let backgroundResources;
let baseMarioResources;
let bigMarioResources;
let bulletMarioResources;
let spriteBulletResources;
let spriteLandResources;
let spriteRockResources;
let spriteStoneResources;
let spriteStoneBornResources;
let SpriteAskResources;
let spriteFlowerResources;
let spriteGoldResources;
let spriteGrowMushroomResources;
let spriteBadMushroomResources;
let spriteHorrorResources;
let spriteTurtleResources;
let spriteShellResources;
let spriteWinResources;
async function loadAllResources() {
  [backgroundResources, baseMarioResources, bigMarioResources, bulletMarioResources, spriteBulletResources, spriteLandResources, spriteRockResources, spriteStoneResources, spriteStoneBornResources, SpriteAskResources, spriteFlowerResources, spriteGoldResources, spriteGrowMushroomResources, spriteBadMushroomResources, spriteHorrorResources, spriteTurtleResources, spriteShellResources, spriteWinResources] = await Promise.all([loadBackgroundResources(), loadBaseMarioResources(), loadBigMarioResources(), loadBulletMarioResources(), loadSpriteBulletResources(), loadSpriteLandResources(), loadSpriteRockResources(), loadSpriteStoneResources(), loadSpriteStoneBornResources(), loadSpriteAskResources(), loadSpriteFlowerResources(), loadSpriteGoldResources(), loadSpriteGrowMushroomResources(), loadSpriteBadMushroomResources(), loadSpriteHorrorResources(), loadSpriteTurtleResources(), loadSpriteShellResources(), loadSpriteWinResources()]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@leafer+core@1.0.0/node_modules/@leafer/core/lib/core.esm.js
const Platform = {
  toURL(text, fileType) {
    let url = encodeURIComponent(text);
    if (fileType === 'text') url = 'data:text/plain;charset=utf-8,' + url;else if (fileType === 'svg') url = 'data:image/svg+xml,' + url;
    return url;
  },
  image: {
    hitCanvasSize: 100,
    maxCacheSize: 2560 * 1600,
    maxPatternSize: 4096 * 2160,
    crossOrigin: 'anonymous',
    getRealURL(url) {
      const {
        prefix,
        suffix
      } = Platform.image;
      if (suffix && !url.startsWith('data:') && !url.startsWith('blob:')) url += (url.includes("?") ? "&" : "?") + suffix;
      if (prefix && url[0] === '/') url = prefix + url;
      return url;
    }
  }
};
const Creator = {};
const IncrementId = {
  RUNTIME: 'runtime',
  LEAF: 'leaf',
  TASK: 'task',
  CNAVAS: 'canvas',
  IMAGE: 'image',
  types: {},
  create(typeName) {
    const {
      types
    } = I$1;
    if (types[typeName]) {
      return types[typeName]++;
    } else {
      types[typeName] = 1;
      return 0;
    }
  }
};
const I$1 = IncrementId;
const {
  round,
  pow: pow$1,
  PI: PI$2
} = Math;
const MathHelper = {
  within(value, min, max) {
    if (min !== undefined && value < min) value = min;
    if (max !== undefined && value > max) value = max;
    return value;
  },
  fourNumber(num, maxValue) {
    let data;
    if (num instanceof Array) {
      switch (num.length) {
        case 4:
          data = maxValue === undefined ? num : [...num];
          break;
        case 2:
          data = [num[0], num[1], num[0], num[1]];
          break;
        case 3:
          data = [num[0], num[1], num[2], num[1]];
          break;
        case 1:
          num = num[0];
          break;
        default:
          num = 0;
      }
    }
    if (!data) data = [num, num, num, num];
    if (maxValue) for (let i = 0; i < 4; i++) if (data[i] > maxValue) data[i] = maxValue;
    return data;
  },
  formatRotation(rotation, unsign) {
    rotation %= 360;
    if (unsign) {
      if (rotation < 0) rotation += 360;
    } else {
      if (rotation > 180) rotation -= 360;
      if (rotation < -180) rotation += 360;
    }
    return MathHelper.float(rotation);
  },
  getGapRotation(addRotation, gap, oldRotation = 0) {
    let rotation = addRotation + oldRotation;
    if (gap > 1) {
      const r = Math.abs(rotation % gap);
      if (r < 1 || r > gap - 1) rotation = Math.round(rotation / gap) * gap;
    }
    return rotation - oldRotation;
  },
  float(num, maxLength) {
    const a = maxLength ? pow$1(10, maxLength) : 1000000000000;
    num = round(num * a) / a;
    return num === -0 ? 0 : num;
  }
};
const OneRadian = PI$2 / 180;
const PI2 = PI$2 * 2;
const PI_2 = PI$2 / 2;
function getPointData() {
  return {
    x: 0,
    y: 0
  };
}
function getBoundsData() {
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
}
function getMatrixData() {
  return {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
}
const {
  sin: sin$3,
  cos: cos$3,
  acos,
  sqrt: sqrt$3
} = Math;
const {
  float: float$1
} = MathHelper;
const tempPoint$3 = {};
function getWorld() {
  return Object.assign(Object.assign(Object.assign({}, getMatrixData()), getBoundsData()), {
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    skewX: 0,
    skewY: 0
  });
}
const MatrixHelper = {
  defaultMatrix: getMatrixData(),
  defaultWorld: getWorld(),
  tempMatrix: {},
  set(t, a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
    t.a = a;
    t.b = b;
    t.c = c;
    t.d = d;
    t.e = e;
    t.f = f;
  },
  get: getMatrixData,
  getWorld,
  copy(t, matrix) {
    t.a = matrix.a;
    t.b = matrix.b;
    t.c = matrix.c;
    t.d = matrix.d;
    t.e = matrix.e;
    t.f = matrix.f;
  },
  translate(t, x, y) {
    t.e += x;
    t.f += y;
  },
  translateInner(t, x, y, isMoveOrigin) {
    t.e += t.a * x + t.c * y;
    t.f += t.b * x + t.d * y;
    if (isMoveOrigin) t.e -= x, t.f -= y;
  },
  scale(t, scaleX, scaleY = scaleX) {
    t.a *= scaleX;
    t.b *= scaleX;
    t.c *= scaleY;
    t.d *= scaleY;
  },
  scaleOfOuter(t, origin, scaleX, scaleY) {
    M$6.toInnerPoint(t, origin, tempPoint$3);
    M$6.scaleOfInner(t, tempPoint$3, scaleX, scaleY);
  },
  scaleOfInner(t, origin, scaleX, scaleY = scaleX) {
    M$6.translateInner(t, origin.x, origin.y);
    M$6.scale(t, scaleX, scaleY);
    M$6.translateInner(t, -origin.x, -origin.y);
  },
  rotate(t, rotation) {
    const {
      a,
      b,
      c,
      d
    } = t;
    rotation *= OneRadian;
    const cosR = cos$3(rotation);
    const sinR = sin$3(rotation);
    t.a = a * cosR - b * sinR;
    t.b = a * sinR + b * cosR;
    t.c = c * cosR - d * sinR;
    t.d = c * sinR + d * cosR;
  },
  rotateOfOuter(t, origin, rotation) {
    M$6.toInnerPoint(t, origin, tempPoint$3);
    M$6.rotateOfInner(t, tempPoint$3, rotation);
  },
  rotateOfInner(t, origin, rotation) {
    M$6.translateInner(t, origin.x, origin.y);
    M$6.rotate(t, rotation);
    M$6.translateInner(t, -origin.x, -origin.y);
  },
  skew(t, skewX, skewY) {
    const {
      a,
      b,
      c,
      d
    } = t;
    if (skewY) {
      skewY *= OneRadian;
      t.a = a + c * skewY;
      t.b = b + d * skewY;
    }
    if (skewX) {
      skewX *= OneRadian;
      t.c = c + a * skewX;
      t.d = d + b * skewX;
    }
  },
  skewOfOuter(t, origin, skewX, skewY) {
    M$6.toInnerPoint(t, origin, tempPoint$3);
    M$6.skewOfInner(t, tempPoint$3, skewX, skewY);
  },
  skewOfInner(t, origin, skewX, skewY = 0) {
    M$6.translateInner(t, origin.x, origin.y);
    M$6.skew(t, skewX, skewY);
    M$6.translateInner(t, -origin.x, -origin.y);
  },
  multiply(t, child) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = t;
    t.a = child.a * a + child.b * c;
    t.b = child.a * b + child.b * d;
    t.c = child.c * a + child.d * c;
    t.d = child.c * b + child.d * d;
    t.e = child.e * a + child.f * c + e;
    t.f = child.e * b + child.f * d + f;
  },
  multiplyParent(t, parent, to, abcdChanged, childScaleData, scrollData) {
    let {
      e,
      f
    } = t;
    if (scrollData) e += scrollData.scrollX, f += scrollData.scrollY;
    to || (to = t);
    if (abcdChanged === undefined) abcdChanged = t.a !== 1 || t.b || t.c || t.d !== 1;
    if (abcdChanged) {
      const {
        a,
        b,
        c,
        d
      } = t;
      to.a = a * parent.a + b * parent.c;
      to.b = a * parent.b + b * parent.d;
      to.c = c * parent.a + d * parent.c;
      to.d = c * parent.b + d * parent.d;
      if (childScaleData) {
        to.scaleX = parent.scaleX * childScaleData.scaleX;
        to.scaleY = parent.scaleY * childScaleData.scaleY;
      }
    } else {
      to.a = parent.a;
      to.b = parent.b;
      to.c = parent.c;
      to.d = parent.d;
      if (childScaleData) {
        to.scaleX = parent.scaleX;
        to.scaleY = parent.scaleY;
      }
    }
    to.e = e * parent.a + f * parent.c + parent.e;
    to.f = e * parent.b + f * parent.d + parent.f;
  },
  divide(t, child) {
    M$6.multiply(t, M$6.tempInvert(child));
  },
  divideParent(t, parent) {
    M$6.multiplyParent(t, M$6.tempInvert(parent));
  },
  tempInvert(t) {
    const {
      tempMatrix
    } = M$6;
    M$6.copy(tempMatrix, t);
    M$6.invert(tempMatrix);
    return tempMatrix;
  },
  invert(t) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = t;
    if (!b && !c) {
      if (a === 1 && d === 1) {
        t.e = -e;
        t.f = -f;
      } else {
        const s = 1 / (a * d);
        t.a = d * s;
        t.d = a * s;
        t.e = -e * d * s;
        t.f = -f * a * s;
      }
    } else {
      const s = 1 / (a * d - b * c);
      t.a = d * s;
      t.b = -b * s;
      t.c = -c * s;
      t.d = a * s;
      t.e = -(e * d - f * c) * s;
      t.f = -(f * a - e * b) * s;
    }
  },
  toOuterPoint(t, inner, to, distance) {
    const {
      x,
      y
    } = inner;
    to || (to = inner);
    to.x = x * t.a + y * t.c;
    to.y = x * t.b + y * t.d;
    if (!distance) {
      to.x += t.e;
      to.y += t.f;
    }
  },
  toInnerPoint(t, outer, to, distance) {
    const {
      a,
      b,
      c,
      d
    } = t;
    const s = 1 / (a * d - b * c);
    const {
      x,
      y
    } = outer;
    to || (to = outer);
    to.x = (x * d - y * c) * s;
    to.y = (y * a - x * b) * s;
    if (!distance) {
      const {
        e,
        f
      } = t;
      to.x -= (e * d - f * c) * s;
      to.y -= (f * a - e * b) * s;
    }
  },
  setLayout(t, layout, origin, bcChanged) {
    const {
      x,
      y,
      scaleX,
      scaleY
    } = layout;
    if (bcChanged === undefined) bcChanged = layout.rotation || layout.skewX || layout.skewY;
    if (bcChanged) {
      const {
        rotation,
        skewX,
        skewY
      } = layout;
      const r = rotation * OneRadian;
      const cosR = cos$3(r);
      const sinR = sin$3(r);
      if (skewX || skewY) {
        const sx = skewX * OneRadian;
        const sy = skewY * OneRadian;
        t.a = (cosR + sy * -sinR) * scaleX;
        t.b = (sinR + sy * cosR) * scaleX;
        t.c = (-sinR + sx * cosR) * scaleY;
        t.d = (cosR + sx * sinR) * scaleY;
      } else {
        t.a = cosR * scaleX;
        t.b = sinR * scaleX;
        t.c = -sinR * scaleY;
        t.d = cosR * scaleY;
      }
    } else {
      t.a = scaleX;
      t.b = 0;
      t.c = 0;
      t.d = scaleY;
    }
    t.e = x;
    t.f = y;
    if (origin) M$6.translateInner(t, -origin.x, -origin.y, true);
  },
  getLayout(t, origin, firstSkewY) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = t;
    let x = e,
      y = f,
      scaleX,
      scaleY,
      rotation,
      skewX,
      skewY;
    if (b || c) {
      const s = a * d - b * c;
      if (c && !firstSkewY) {
        scaleX = sqrt$3(a * a + b * b);
        scaleY = s / scaleX;
        const cosR = a / scaleX;
        rotation = b > 0 ? acos(cosR) : -acos(cosR);
      } else {
        scaleY = sqrt$3(c * c + d * d);
        scaleX = s / scaleY;
        const cosR = c / scaleY;
        rotation = PI_2 - (d > 0 ? acos(-cosR) : -acos(cosR));
      }
      const cosR = float$1(cos$3(rotation));
      const sinR = sin$3(rotation);
      scaleX = float$1(scaleX), scaleY = float$1(scaleY);
      skewX = cosR ? float$1((c / scaleY + sinR) / cosR / OneRadian, 9) : 0;
      skewY = cosR ? float$1((b / scaleX - sinR) / cosR / OneRadian, 9) : 0;
      rotation = float$1(rotation / OneRadian);
    } else {
      scaleX = a;
      scaleY = d;
      rotation = skewX = skewY = 0;
    }
    if (origin) {
      x += origin.x * a + origin.y * c;
      y += origin.x * b + origin.y * d;
    }
    return {
      x,
      y,
      scaleX,
      scaleY,
      rotation,
      skewX,
      skewY
    };
  },
  withScale(t, scaleX, scaleY = scaleX) {
    const world = t;
    if (!scaleX || !scaleY) {
      const {
        a,
        b,
        c,
        d
      } = t;
      if (b || c) {
        scaleX = sqrt$3(a * a + b * b);
        scaleY = (a * d - b * c) / scaleX;
      } else {
        scaleX = a;
        scaleY = d;
      }
    }
    world.scaleX = scaleX;
    world.scaleY = scaleY;
    return world;
  },
  reset(t) {
    M$6.set(t);
  }
};
const M$6 = MatrixHelper;
const {
  toInnerPoint: toInnerPoint$2,
  toOuterPoint: toOuterPoint$2
} = MatrixHelper;
const {
  sin: sin$2,
  cos: cos$2,
  abs: abs$2,
  sqrt: sqrt$2,
  atan2: atan2$2,
  min: min$1,
  PI: PI$1
} = Math;
const PointHelper = {
  defaultPoint: getPointData(),
  tempPoint: {},
  tempRadiusPoint: {},
  set(t, x = 0, y = 0) {
    t.x = x;
    t.y = y;
  },
  setRadius(t, x, y) {
    t.radiusX = x;
    t.radiusY = y === undefined ? x : y;
  },
  copy(t, point) {
    t.x = point.x;
    t.y = point.y;
  },
  copyFrom(t, x, y) {
    t.x = x;
    t.y = y;
  },
  move(t, x, y) {
    t.x += x;
    t.y += y;
  },
  scale(t, scaleX, scaleY = scaleX) {
    if (t.x) t.x *= scaleX;
    if (t.y) t.y *= scaleY;
  },
  scaleOf(t, origin, scaleX, scaleY = scaleX) {
    t.x += (t.x - origin.x) * (scaleX - 1);
    t.y += (t.y - origin.y) * (scaleY - 1);
  },
  rotate(t, rotation, origin) {
    if (!origin) origin = P$5.defaultPoint;
    rotation *= OneRadian;
    const cosR = cos$2(rotation);
    const sinR = sin$2(rotation);
    const rx = t.x - origin.x;
    const ry = t.y - origin.y;
    t.x = origin.x + rx * cosR - ry * sinR;
    t.y = origin.y + rx * sinR + ry * cosR;
  },
  tempToInnerOf(t, matrix) {
    const {
      tempPoint: temp
    } = P$5;
    copy$7(temp, t);
    toInnerPoint$2(matrix, temp, temp);
    return temp;
  },
  tempToOuterOf(t, matrix) {
    const {
      tempPoint: temp
    } = P$5;
    copy$7(temp, t);
    toOuterPoint$2(matrix, temp, temp);
    return temp;
  },
  tempToInnerRadiusPointOf(t, matrix) {
    const {
      tempRadiusPoint: temp
    } = P$5;
    copy$7(temp, t);
    P$5.toInnerRadiusPointOf(t, matrix, temp);
    return temp;
  },
  toInnerRadiusPointOf(t, matrix, to) {
    to || (to = t);
    toInnerPoint$2(matrix, t, to);
    to.radiusX = Math.abs(t.radiusX / matrix.scaleX);
    to.radiusY = Math.abs(t.radiusY / matrix.scaleY);
  },
  toInnerOf(t, matrix, to) {
    toInnerPoint$2(matrix, t, to);
  },
  toOuterOf(t, matrix, to) {
    toOuterPoint$2(matrix, t, to);
  },
  getCenter(t, to) {
    return {
      x: t.x + (to.x - t.x) / 2,
      y: t.y + (to.y - t.y) / 2
    };
  },
  getCenterX(x1, x2) {
    return x1 + (x2 - x1) / 2;
  },
  getCenterY(y1, y2) {
    return y1 + (y2 - y1) / 2;
  },
  getDistance(t, point) {
    return getDistanceFrom(t.x, t.y, point.x, point.y);
  },
  getDistanceFrom(x1, y1, x2, y2) {
    const x = abs$2(x2 - x1);
    const y = abs$2(y2 - y1);
    return sqrt$2(x * x + y * y);
  },
  getMinDistanceFrom(x1, y1, x2, y2, x3, y3) {
    return min$1(getDistanceFrom(x1, y1, x2, y2), getDistanceFrom(x2, y2, x3, y3));
  },
  getAngle(t, to) {
    return getAtan2(t, to) / OneRadian;
  },
  getRotation(t, origin, to, toOrigin) {
    if (!toOrigin) toOrigin = origin;
    return P$5.getRadianFrom(t.x, t.y, origin.x, origin.y, to.x, to.y, toOrigin.x, toOrigin.y) / OneRadian;
  },
  getRadianFrom(fromX, fromY, originX, originY, toX, toY, toOriginX, toOriginY) {
    if (toOriginX === undefined) toOriginX = originX, toOriginY = originY;
    let fromAngle = atan2$2(fromY - originY, fromX - originX);
    let toAngle = atan2$2(toY - toOriginY, toX - toOriginX);
    const radian = toAngle - fromAngle;
    return radian < -PI$1 ? radian + PI2 : radian;
  },
  getAtan2(t, to) {
    return atan2$2(to.y - t.y, to.x - t.x);
  },
  getDistancePoint(t, to, distance, changeTo) {
    const r = getAtan2(t, to);
    to = changeTo ? to : {};
    to.x = t.x + cos$2(r) * distance;
    to.y = t.y + sin$2(r) * distance;
    return to;
  },
  reset(t) {
    P$5.reset(t);
  }
};
const P$5 = PointHelper;
const {
  getDistanceFrom,
  copy: copy$7,
  getAtan2
} = P$5;
class Point {
  constructor(x, y) {
    this.set(x, y);
  }
  set(x, y) {
    typeof x === 'object' ? PointHelper.copy(this, x) : PointHelper.set(this, x, y);
    return this;
  }
  get() {
    const {
      x,
      y
    } = this;
    return {
      x,
      y
    };
  }
  clone() {
    return new Point(this);
  }
  move(x, y) {
    PointHelper.move(this, x, y);
    return this;
  }
  scale(scaleX, scaleY) {
    PointHelper.scale(this, scaleX, scaleY);
    return this;
  }
  scaleOf(origin, scaleX, scaleY) {
    PointHelper.scaleOf(this, origin, scaleX, scaleY);
    return this;
  }
  rotate(rotation, origin) {
    PointHelper.rotate(this, rotation, origin);
    return this;
  }
  rotateOf(origin, rotation) {
    PointHelper.rotate(this, rotation, origin);
    return this;
  }
  getRotation(origin, to, toOrigin) {
    return PointHelper.getRotation(this, origin, to, toOrigin);
  }
  toInnerOf(matrix, to) {
    PointHelper.toInnerOf(this, matrix, to);
    return this;
  }
  toOuterOf(matrix, to) {
    PointHelper.toOuterOf(this, matrix, to);
    return this;
  }
  getCenter(to) {
    return new Point(PointHelper.getCenter(this, to));
  }
  getDistance(to) {
    return PointHelper.getDistance(this, to);
  }
  getDistancePoint(to, distance, changeTo) {
    return new Point(PointHelper.getDistancePoint(this, to, distance, changeTo));
  }
  getAngle(to) {
    return PointHelper.getAngle(this, to);
  }
  getAtan2(to) {
    return PointHelper.getAtan2(this, to);
  }
  reset() {
    PointHelper.reset(this);
    return this;
  }
}
const tempPoint$2 = new Point();
class Matrix {
  constructor(a, b, c, d, e, f) {
    this.set(a, b, c, d, e, f);
  }
  set(a, b, c, d, e, f) {
    typeof a === 'object' ? MatrixHelper.copy(this, a) : MatrixHelper.set(this, a, b, c, d, e, f);
    return this;
  }
  setWith(dataWithScale) {
    MatrixHelper.copy(this, dataWithScale);
    this.scaleX = dataWithScale.scaleX;
    this.scaleY = dataWithScale.scaleY;
    return this;
  }
  get() {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    return {
      a,
      b,
      c,
      d,
      e,
      f
    };
  }
  clone() {
    return new Matrix(this);
  }
  translate(x, y) {
    MatrixHelper.translate(this, x, y);
    return this;
  }
  translateInner(x, y) {
    MatrixHelper.translateInner(this, x, y);
    return this;
  }
  scale(x, y) {
    MatrixHelper.scale(this, x, y);
    return this;
  }
  scaleWith(x, y) {
    MatrixHelper.scale(this, x, y);
    this.scaleX *= x;
    this.scaleY *= y || x;
    return this;
  }
  scaleOfOuter(origin, x, y) {
    MatrixHelper.scaleOfOuter(this, origin, x, y);
    return this;
  }
  scaleOfInner(origin, x, y) {
    MatrixHelper.scaleOfInner(this, origin, x, y);
    return this;
  }
  rotate(angle) {
    MatrixHelper.rotate(this, angle);
    return this;
  }
  rotateOfOuter(origin, angle) {
    MatrixHelper.rotateOfOuter(this, origin, angle);
    return this;
  }
  rotateOfInner(origin, angle) {
    MatrixHelper.rotateOfInner(this, origin, angle);
    return this;
  }
  skew(x, y) {
    MatrixHelper.skew(this, x, y);
    return this;
  }
  skewOfOuter(origin, x, y) {
    MatrixHelper.skewOfOuter(this, origin, x, y);
    return this;
  }
  skewOfInner(origin, x, y) {
    MatrixHelper.skewOfInner(this, origin, x, y);
    return this;
  }
  multiply(child) {
    MatrixHelper.multiply(this, child);
    return this;
  }
  multiplyParent(parent) {
    MatrixHelper.multiplyParent(this, parent);
    return this;
  }
  divide(child) {
    MatrixHelper.divide(this, child);
    return this;
  }
  divideParent(parent) {
    MatrixHelper.divideParent(this, parent);
    return this;
  }
  invert() {
    MatrixHelper.invert(this);
    return this;
  }
  invertWith() {
    MatrixHelper.invert(this);
    this.scaleX = 1 / this.scaleX;
    this.scaleY = 1 / this.scaleY;
    return this;
  }
  toOuterPoint(inner, to, distance) {
    MatrixHelper.toOuterPoint(this, inner, to, distance);
  }
  toInnerPoint(outer, to, distance) {
    MatrixHelper.toInnerPoint(this, outer, to, distance);
  }
  setLayout(data, origin) {
    MatrixHelper.setLayout(this, data, origin);
    return this;
  }
  getLayout(origin, firstSkewY) {
    return MatrixHelper.getLayout(this, origin, firstSkewY);
  }
  withScale(scaleX, scaleY) {
    return MatrixHelper.withScale(this, scaleX, scaleY);
  }
  reset() {
    MatrixHelper.reset(this);
  }
}
const tempMatrix = new Matrix();
const TwoPointBoundsHelper = {
  tempPointBounds: {},
  setPoint(t, minX, minY) {
    t.minX = t.maxX = minX;
    t.minY = t.maxY = minY;
  },
  addPoint(t, x, y) {
    t.minX = x < t.minX ? x : t.minX;
    t.minY = y < t.minY ? y : t.minY;
    t.maxX = x > t.maxX ? x : t.maxX;
    t.maxY = y > t.maxY ? y : t.maxY;
  },
  addBounds(t, x, y, width, height) {
    addPoint$3(t, x, y);
    addPoint$3(t, x + width, y + height);
  },
  copy(t, pb) {
    t.minX = pb.minX;
    t.minY = pb.minY;
    t.maxX = pb.maxX;
    t.maxY = pb.maxY;
  },
  addPointBounds(t, pb) {
    t.minX = pb.minX < t.minX ? pb.minX : t.minX;
    t.minY = pb.minY < t.minY ? pb.minY : t.minY;
    t.maxX = pb.maxX > t.maxX ? pb.maxX : t.maxX;
    t.maxY = pb.maxY > t.maxY ? pb.maxY : t.maxY;
  },
  toBounds(t, setBounds) {
    setBounds.x = t.minX;
    setBounds.y = t.minY;
    setBounds.width = t.maxX - t.minX;
    setBounds.height = t.maxY - t.minY;
  }
};
const {
  addPoint: addPoint$3
} = TwoPointBoundsHelper;
const {
  tempPointBounds: tempPointBounds$1,
  setPoint: setPoint$2,
  addPoint: addPoint$2,
  toBounds: toBounds$2
} = TwoPointBoundsHelper;
const {
  toOuterPoint: toOuterPoint$1
} = MatrixHelper;
const {
  float: core_esm_float,
  fourNumber
} = MathHelper;
const {
  floor,
  ceil: ceil$1
} = Math;
let right, bottom, boundsRight, boundsBottom;
const point = {};
const toPoint$2 = {};
const BoundsHelper = {
  tempBounds: {},
  set(t, x = 0, y = 0, width = 0, height = 0) {
    t.x = x;
    t.y = y;
    t.width = width;
    t.height = height;
  },
  copy(t, bounds) {
    t.x = bounds.x;
    t.y = bounds.y;
    t.width = bounds.width;
    t.height = bounds.height;
  },
  copyAndSpread(t, bounds, spread, isShrink) {
    if (spread instanceof Array) {
      const four = fourNumber(spread);
      isShrink ? B.set(t, bounds.x + four[3], bounds.y + four[0], bounds.width - four[1] - four[3], bounds.height - four[2] - four[0]) : B.set(t, bounds.x - four[3], bounds.y - four[0], bounds.width + four[1] + four[3], bounds.height + four[2] + four[0]);
    } else {
      if (isShrink) spread = -spread;
      B.set(t, bounds.x - spread, bounds.y - spread, bounds.width + spread * 2, bounds.height + spread * 2);
    }
  },
  minX(t) {
    return t.width > 0 ? t.x : t.x + t.width;
  },
  minY(t) {
    return t.height > 0 ? t.y : t.y + t.height;
  },
  maxX(t) {
    return t.width > 0 ? t.x + t.width : t.x;
  },
  maxY(t) {
    return t.height > 0 ? t.y + t.height : t.y;
  },
  move(t, x, y) {
    t.x += x;
    t.y += y;
  },
  getByMove(t, x, y) {
    t = Object.assign({}, t);
    B.move(t, x, y);
    return t;
  },
  toOffsetOutBounds(t, to, parent) {
    if (!to) {
      to = t;
    } else {
      copy$6(to, t);
    }
    if (parent) {
      to.offsetX = -(B.maxX(parent) - t.x);
      to.offsetY = -(B.maxY(parent) - t.y);
    } else {
      to.offsetX = t.x + t.width;
      to.offsetY = t.y + t.height;
    }
    B.move(to, -to.offsetX, -to.offsetY);
  },
  scale(t, scaleX, scaleY = scaleX) {
    PointHelper.scale(t, scaleX, scaleY);
    t.width *= scaleX;
    t.height *= scaleY;
  },
  scaleOf(t, origin, scaleX, scaleY = scaleX) {
    PointHelper.scaleOf(t, origin, scaleX, scaleY);
    t.width *= scaleX;
    t.height *= scaleY;
  },
  tempToOuterOf(t, matrix) {
    B.copy(B.tempBounds, t);
    B.toOuterOf(B.tempBounds, matrix);
    return B.tempBounds;
  },
  getOuterOf(t, matrix) {
    t = Object.assign({}, t);
    B.toOuterOf(t, matrix);
    return t;
  },
  toOuterOf(t, matrix, to) {
    to || (to = t);
    if (matrix.b === 0 && matrix.c === 0) {
      const {
        a,
        d
      } = matrix;
      if (a > 0) {
        to.width = t.width * a;
        to.x = matrix.e + t.x * a;
      } else {
        to.width = t.width * -a;
        to.x = matrix.e + t.x * a - to.width;
      }
      if (d > 0) {
        to.height = t.height * d;
        to.y = matrix.f + t.y * d;
      } else {
        to.height = t.height * -d;
        to.y = matrix.f + t.y * d - to.height;
      }
    } else {
      point.x = t.x;
      point.y = t.y;
      toOuterPoint$1(matrix, point, toPoint$2);
      setPoint$2(tempPointBounds$1, toPoint$2.x, toPoint$2.y);
      point.x = t.x + t.width;
      toOuterPoint$1(matrix, point, toPoint$2);
      addPoint$2(tempPointBounds$1, toPoint$2.x, toPoint$2.y);
      point.y = t.y + t.height;
      toOuterPoint$1(matrix, point, toPoint$2);
      addPoint$2(tempPointBounds$1, toPoint$2.x, toPoint$2.y);
      point.x = t.x;
      toOuterPoint$1(matrix, point, toPoint$2);
      addPoint$2(tempPointBounds$1, toPoint$2.x, toPoint$2.y);
      toBounds$2(tempPointBounds$1, to);
    }
  },
  toInnerOf(t, matrix, to) {
    to || (to = t);
    B.move(to, -matrix.e, -matrix.f);
    B.scale(to, 1 / matrix.a, 1 / matrix.d);
  },
  getFitMatrix(t, put, baseScale = 1) {
    const scale = Math.min(baseScale, Math.min(t.width / put.width, t.height / put.height));
    return new Matrix(scale, 0, 0, scale, -put.x * scale, -put.y * scale);
  },
  getSpread(t, spread) {
    const n = {};
    B.copyAndSpread(n, t, spread);
    return n;
  },
  spread(t, spread) {
    B.copyAndSpread(t, t, spread);
  },
  shrink(t, shrink) {
    B.copyAndSpread(t, t, shrink, true);
  },
  ceil(t) {
    const {
      x,
      y
    } = t;
    t.x = floor(t.x);
    t.y = floor(t.y);
    t.width = x > t.x ? ceil$1(t.width + x - t.x) : ceil$1(t.width);
    t.height = y > t.y ? ceil$1(t.height + y - t.y) : ceil$1(t.height);
  },
  unsign(t) {
    if (t.width < 0) {
      t.x += t.width;
      t.width = -t.width;
    }
    if (t.height < 0) {
      t.y += t.height;
      t.height = -t.height;
    }
  },
  float(t, maxLength) {
    t.x = core_esm_float(t.x, maxLength);
    t.y = core_esm_float(t.y, maxLength);
    t.width = core_esm_float(t.width, maxLength);
    t.height = core_esm_float(t.height, maxLength);
  },
  add(t, bounds, isPoint) {
    right = t.x + t.width;
    bottom = t.y + t.height;
    boundsRight = bounds.x;
    boundsBottom = bounds.y;
    if (!isPoint) {
      boundsRight += bounds.width;
      boundsBottom += bounds.height;
    }
    right = right > boundsRight ? right : boundsRight;
    bottom = bottom > boundsBottom ? bottom : boundsBottom;
    t.x = t.x < bounds.x ? t.x : bounds.x;
    t.y = t.y < bounds.y ? t.y : bounds.y;
    t.width = right - t.x;
    t.height = bottom - t.y;
  },
  addList(t, list) {
    B.setListWithFn(t, list, undefined, true);
  },
  setList(t, list, addMode = false) {
    B.setListWithFn(t, list, undefined, addMode);
  },
  addListWithFn(t, list, boundsDataFn) {
    B.setListWithFn(t, list, boundsDataFn, true);
  },
  setListWithFn(t, list, boundsDataFn, addMode = false) {
    let bounds,
      first = true;
    for (let i = 0, len = list.length; i < len; i++) {
      bounds = boundsDataFn ? boundsDataFn(list[i]) : list[i];
      if (bounds && (bounds.width || bounds.height)) {
        if (first) {
          first = false;
          if (!addMode) copy$6(t, bounds);
        } else {
          add(t, bounds);
        }
      }
    }
    if (first) B.reset(t);
  },
  setPoints(t, points) {
    points.forEach((point, index) => index === 0 ? setPoint$2(tempPointBounds$1, point.x, point.y) : addPoint$2(tempPointBounds$1, point.x, point.y));
    toBounds$2(tempPointBounds$1, t);
  },
  setPoint(t, point) {
    B.set(t, point.x, point.y);
  },
  addPoint(t, point) {
    add(t, point, true);
  },
  getPoints(t) {
    const {
      x,
      y,
      width,
      height
    } = t;
    return [{
      x,
      y
    }, {
      x: x + width,
      y
    }, {
      x: x + width,
      y: y + height
    }, {
      x,
      y: y + height
    }];
  },
  hitRadiusPoint(t, point, pointMatrix) {
    if (pointMatrix) point = PointHelper.tempToInnerRadiusPointOf(point, pointMatrix);
    return point.x >= t.x - point.radiusX && point.x <= t.x + t.width + point.radiusX && point.y >= t.y - point.radiusY && point.y <= t.y + t.height + point.radiusY;
  },
  hitPoint(t, point, pointMatrix) {
    if (pointMatrix) point = PointHelper.tempToInnerOf(point, pointMatrix);
    return point.x >= t.x && point.x <= t.x + t.width && point.y >= t.y && point.y <= t.y + t.height;
  },
  hit(t, other, otherMatrix) {
    if (otherMatrix) other = B.tempToOuterOf(other, otherMatrix);
    return !(t.y + t.height < other.y || other.y + other.height < t.y || t.x + t.width < other.x || other.x + other.width < t.x);
  },
  includes(t, other, otherMatrix) {
    if (otherMatrix) other = B.tempToOuterOf(other, otherMatrix);
    return t.x <= other.x && t.y <= other.y && t.x + t.width >= other.x + other.width && t.y + t.height >= other.y + other.height;
  },
  getIntersectData(t, other, otherMatrix) {
    if (otherMatrix) other = B.tempToOuterOf(other, otherMatrix);
    if (!B.hit(t, other)) return getBoundsData();
    let {
      x,
      y,
      width,
      height
    } = other;
    right = x + width;
    bottom = y + height;
    boundsRight = t.x + t.width;
    boundsBottom = t.y + t.height;
    x = x > t.x ? x : t.x;
    y = y > t.y ? y : t.y;
    right = right < boundsRight ? right : boundsRight;
    bottom = bottom < boundsBottom ? bottom : boundsBottom;
    width = right - x;
    height = bottom - y;
    return {
      x,
      y,
      width,
      height
    };
  },
  intersect(t, other, otherMatrix) {
    B.copy(t, B.getIntersectData(t, other, otherMatrix));
  },
  isSame(t, bounds) {
    return t.x === bounds.x && t.y === bounds.y && t.width === bounds.width && t.height === bounds.height;
  },
  isEmpty(t) {
    return t.x === 0 && t.y === 0 && t.width === 0 && t.height === 0;
  },
  reset(t) {
    B.set(t);
  }
};
const B = BoundsHelper;
const {
  add,
  copy: copy$6
} = B;
class Bounds {
  get minX() {
    return BoundsHelper.minX(this);
  }
  get minY() {
    return BoundsHelper.minY(this);
  }
  get maxX() {
    return BoundsHelper.maxX(this);
  }
  get maxY() {
    return BoundsHelper.maxY(this);
  }
  constructor(x, y, width, height) {
    this.set(x, y, width, height);
  }
  set(x, y, width, height) {
    typeof x === 'object' ? BoundsHelper.copy(this, x) : BoundsHelper.set(this, x, y, width, height);
    return this;
  }
  get() {
    const {
      x,
      y,
      width,
      height
    } = this;
    return {
      x,
      y,
      width,
      height
    };
  }
  clone() {
    return new Bounds(this);
  }
  move(x, y) {
    BoundsHelper.move(this, x, y);
    return this;
  }
  scale(scaleX, scaleY) {
    BoundsHelper.scale(this, scaleX, scaleY);
    return this;
  }
  scaleOf(origin, scaleX, scaleY) {
    BoundsHelper.scaleOf(this, origin, scaleX, scaleY);
    return this;
  }
  toOuterOf(matrix, to) {
    BoundsHelper.toOuterOf(this, matrix, to);
    return this;
  }
  toInnerOf(matrix, to) {
    BoundsHelper.toInnerOf(this, matrix, to);
    return this;
  }
  getFitMatrix(put, baseScale) {
    return BoundsHelper.getFitMatrix(this, put, baseScale);
  }
  spread(fourNumber) {
    BoundsHelper.spread(this, fourNumber);
    return this;
  }
  shrink(fourNumber) {
    BoundsHelper.shrink(this, fourNumber);
    return this;
  }
  ceil() {
    BoundsHelper.ceil(this);
    return this;
  }
  unsign() {
    BoundsHelper.unsign(this);
    return this;
  }
  float(maxLength) {
    BoundsHelper.float(this, maxLength);
    return this;
  }
  add(bounds) {
    BoundsHelper.add(this, bounds);
    return this;
  }
  addList(boundsList) {
    BoundsHelper.setList(this, boundsList, true);
    return this;
  }
  setList(boundsList) {
    BoundsHelper.setList(this, boundsList);
    return this;
  }
  addListWithFn(list, boundsDataFn) {
    BoundsHelper.setListWithFn(this, list, boundsDataFn, true);
    return this;
  }
  setListWithFn(list, boundsDataFn) {
    BoundsHelper.setListWithFn(this, list, boundsDataFn);
    return this;
  }
  setPoint(point) {
    BoundsHelper.setPoint(this, point);
    return this;
  }
  setPoints(points) {
    BoundsHelper.setPoints(this, points);
    return this;
  }
  addPoint(point) {
    BoundsHelper.addPoint(this, point);
    return this;
  }
  getPoints() {
    return BoundsHelper.getPoints(this);
  }
  hitPoint(point, pointMatrix) {
    return BoundsHelper.hitPoint(this, point, pointMatrix);
  }
  hitRadiusPoint(point, pointMatrix) {
    return BoundsHelper.hitRadiusPoint(this, point, pointMatrix);
  }
  hit(bounds, boundsMatrix) {
    return BoundsHelper.hit(this, bounds, boundsMatrix);
  }
  includes(bounds, boundsMatrix) {
    return BoundsHelper.includes(this, bounds, boundsMatrix);
  }
  intersect(bounds, boundsMatrix) {
    BoundsHelper.intersect(this, bounds, boundsMatrix);
    return this;
  }
  getIntersect(bounds, boundsMatrix) {
    return new Bounds(BoundsHelper.getIntersectData(this, bounds, boundsMatrix));
  }
  isSame(bounds) {
    return BoundsHelper.isSame(this, bounds);
  }
  isEmpty() {
    return BoundsHelper.isEmpty(this);
  }
  reset() {
    BoundsHelper.reset(this);
  }
}
const tempBounds = new Bounds();
class AutoBounds {
  constructor(top, right, bottom, left, width, height) {
    typeof top === 'object' ? this.copy(top) : this.set(top, right, bottom, left, width, height);
  }
  set(top = 0, right = 0, bottom = 0, left = 0, width = 0, height = 0) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.width = width;
    this.height = height;
  }
  copy(autoSize) {
    const {
      top,
      right,
      bottom,
      left,
      width,
      height
    } = autoSize;
    this.set(top, right, bottom, left, width, height);
  }
  getBoundsFrom(parent) {
    const {
      top,
      right,
      bottom,
      left,
      width,
      height
    } = this;
    return new Bounds(left, top, width ? width : parent.width - left - right, height ? height : parent.height - top - bottom);
  }
}
var Direction4;
(function (Direction4) {
  Direction4[Direction4["top"] = 0] = "top";
  Direction4[Direction4["right"] = 1] = "right";
  Direction4[Direction4["bottom"] = 2] = "bottom";
  Direction4[Direction4["left"] = 3] = "left";
})(Direction4 || (Direction4 = {}));
var Direction9;
(function (Direction9) {
  Direction9[Direction9["topLeft"] = 0] = "topLeft";
  Direction9[Direction9["top"] = 1] = "top";
  Direction9[Direction9["topRight"] = 2] = "topRight";
  Direction9[Direction9["right"] = 3] = "right";
  Direction9[Direction9["bottomRight"] = 4] = "bottomRight";
  Direction9[Direction9["bottom"] = 5] = "bottom";
  Direction9[Direction9["bottomLeft"] = 6] = "bottomLeft";
  Direction9[Direction9["left"] = 7] = "left";
  Direction9[Direction9["center"] = 8] = "center";
  Direction9[Direction9["top-left"] = 0] = "top-left";
  Direction9[Direction9["top-right"] = 2] = "top-right";
  Direction9[Direction9["bottom-right"] = 4] = "bottom-right";
  Direction9[Direction9["bottom-left"] = 6] = "bottom-left";
})(Direction9 || (Direction9 = {}));
const directionData = [{
  x: 0,
  y: 0
}, {
  x: 0.5,
  y: 0
}, {
  x: 1,
  y: 0
}, {
  x: 1,
  y: 0.5
}, {
  x: 1,
  y: 1
}, {
  x: 0.5,
  y: 1
}, {
  x: 0,
  y: 1
}, {
  x: 0,
  y: 0.5
}, {
  x: 0.5,
  y: 0.5
}];
directionData.forEach(item => item.type = 'percent');
const AroundHelper = {
  directionData,
  tempPoint: {},
  get,
  toPoint(around, bounds, to, onlySize, pointBounds) {
    to || (to = {});
    const point = get(around);
    to.x = point.x;
    to.y = point.y;
    if (point.type === 'percent') {
      to.x *= bounds.width;
      to.y *= bounds.height;
      if (pointBounds) {
        to.x -= pointBounds.x;
        to.y -= pointBounds.y;
        if (point.x) to.x -= point.x === 1 ? pointBounds.width : point.x === 0.5 ? point.x * pointBounds.width : 0;
        if (point.y) to.y -= point.y === 1 ? pointBounds.height : point.y === 0.5 ? point.y * pointBounds.height : 0;
      }
    }
    if (!onlySize) {
      to.x += bounds.x;
      to.y += bounds.y;
    }
  }
};
function get(around) {
  return typeof around === 'string' ? directionData[Direction9[around]] : around;
}
const {
  toPoint: toPoint$1
} = AroundHelper;
const AlignHelper = {
  toPoint(align, contentBounds, bounds, to, onlySize) {
    toPoint$1(align, bounds, to, onlySize, contentBounds);
  }
};
const StringNumberMap = {
  '0': 1,
  '1': 1,
  '2': 1,
  '3': 1,
  '4': 1,
  '5': 1,
  '6': 1,
  '7': 1,
  '8': 1,
  '9': 1,
  '.': 1,
  'e': 1,
  'E': 1
};
class Debug {
  constructor(name) {
    this.repeatMap = {};
    this.name = name;
  }
  static get(name) {
    return new Debug(name);
  }
  static set filter(name) {
    this.filterList = getNameList(name);
  }
  static set exclude(name) {
    this.excludeList = getNameList(name);
  }
  log(...messages) {
    if (D$4.enable) {
      if (D$4.filterList.length && D$4.filterList.every(name => name !== this.name)) return;
      if (D$4.excludeList.length && D$4.excludeList.some(name => name === this.name)) return;
      console.log('%c' + this.name, 'color:#21ae62', ...messages);
    }
  }
  tip(...messages) {
    if (D$4.enable) this.warn(...messages);
  }
  warn(...messages) {
    if (D$4.showWarn) console.warn(this.name, ...messages);
  }
  repeat(name, ...messages) {
    if (!this.repeatMap[name]) {
      this.warn('repeat:' + name, ...messages);
      this.repeatMap[name] = true;
    }
  }
  error(...messages) {
    try {
      throw new Error();
    } catch (e) {
      console.error(this.name, ...messages, e);
    }
  }
}
Debug.filterList = [];
Debug.excludeList = [];
Debug.showWarn = true;
function getNameList(name) {
  if (!name) name = [];else if (typeof name === 'string') name = [name];
  return name;
}
const D$4 = Debug;
const debug$8 = Debug.get('RunTime');
const Run = {
  currentId: 0,
  currentName: '',
  idMap: {},
  nameMap: {},
  nameToIdMap: {},
  start(name, microsecond) {
    const id = IncrementId.create(IncrementId.RUNTIME);
    R.currentId = R.idMap[id] = microsecond ? performance.now() : Date.now();
    R.currentName = R.nameMap[id] = name;
    R.nameToIdMap[name] = id;
    return id;
  },
  end(id, microsecond) {
    const time = R.idMap[id],
      name = R.nameMap[id];
    const duration = microsecond ? (performance.now() - time) / 1000 : Date.now() - time;
    R.idMap[id] = R.nameMap[id] = R.nameToIdMap[name] = undefined;
    debug$8.log(name, duration, 'ms');
  },
  endOfName(name, microsecond) {
    const id = R.nameToIdMap[name];
    if (id !== undefined) R.end(id, microsecond);
  }
};
const R = Run;
const debug$7 = Debug.get('UICreator');
const UICreator = {
  list: {},
  register(UI) {
    const {
      __tag: tag
    } = UI.prototype;
    if (list$1[tag]) {
      debug$7.repeat(tag);
    } else {
      list$1[tag] = UI;
    }
  },
  get(tag, data, x, y, width, height) {
    const ui = new list$1[tag](data);
    if (x !== undefined) {
      ui.x = x;
      if (y) ui.y = y;
      if (width) ui.width = width;
      if (height) ui.height = height;
    }
    return ui;
  }
};
const {
  list: list$1
} = UICreator;
const debug$6 = Debug.get('EventCreator');
const EventCreator = {
  nameList: {},
  register(Event) {
    let name;
    Object.keys(Event).forEach(key => {
      name = Event[key];
      if (typeof name === 'string') nameList[name] ? debug$6.repeat(name) : nameList[name] = Event;
    });
  },
  changeName(oldName, newName) {
    const Event = nameList[oldName];
    if (Event) {
      const constName = Object.keys(Event).find(key => Event[key] === oldName);
      if (constName) {
        Event[constName] = newName;
        nameList[newName] = Event;
      }
    }
  },
  has(type) {
    return !!this.nameList[type];
  },
  get(type, ...params) {
    return new nameList[type](...params);
  }
};
const {
  nameList
} = EventCreator;
class CanvasManager {
  constructor() {
    this.list = [];
  }
  add(canvas) {
    canvas.manager = this;
    this.list.push(canvas);
  }
  get(size) {
    let old;
    const {
      list
    } = this;
    for (let i = 0, len = list.length; i < len; i++) {
      old = list[i];
      if (old.recycled && old.isSameSize(size)) {
        old.recycled = false;
        old.manager || (old.manager = this);
        return old;
      }
    }
    const canvas = Creator.canvas(size);
    this.add(canvas);
    return canvas;
  }
  recycle(old) {
    old.recycled = true;
  }
  clearRecycled() {
    let canvas;
    const filter = [];
    for (let i = 0, len = this.list.length; i < len; i++) {
      canvas = this.list[i];
      canvas.recycled ? canvas.destroy() : filter.push(canvas);
    }
    this.list = filter;
  }
  clear() {
    this.list.forEach(item => {
      item.destroy();
    });
    this.list.length = 0;
  }
  destroy() {
    this.clear();
  }
}
const DataHelper = {
  default(t, defaultData) {
    core_esm_assign(defaultData, t);
    core_esm_assign(t, defaultData);
    return t;
  },
  assign(t, merge) {
    let value;
    Object.keys(merge).forEach(key => {
      var _a;
      value = merge[key];
      if ((value === null || value === void 0 ? void 0 : value.constructor) === Object) {
        ((_a = t[key]) === null || _a === void 0 ? void 0 : _a.constructor) === Object ? core_esm_assign(t[key], merge[key]) : t[key] = merge[key];
      } else {
        t[key] = merge[key];
      }
    });
  },
  copyAttrs(t, from, include) {
    include.forEach(key => {
      if (from[key] !== undefined) t[key] = from[key];
    });
    return t;
  },
  clone(data) {
    return JSON.parse(JSON.stringify(data));
  },
  toMap(list) {
    const map = {};
    for (let i = 0, len = list.length; i < len; i++) map[list[i]] = true;
    return map;
  }
};
const {
  assign: core_esm_assign
} = DataHelper;
class LeafData {
  get __useNaturalRatio() {
    return true;
  }
  get __isLinePath() {
    return this.path && this.path.length === 6;
  }
  get __blendMode() {
    if (this.eraser && this.eraser !== 'path') return 'destination-out';
    const {
      blendMode
    } = this;
    return blendMode === 'pass-through' ? null : blendMode;
  }
  constructor(leaf) {
    this.__leaf = leaf;
  }
  __get(name) {
    if (this.__input) {
      const value = this.__input[name];
      if (value !== undefined) return value;
    }
    return this[name];
  }
  __getData() {
    const data = {
        tag: this.__leaf.tag
      },
      {
        __input
      } = this;
    let inputValue;
    for (let key in this) {
      if (key[0] !== '_') {
        inputValue = __input ? __input[key] : undefined;
        data[key] = inputValue === undefined ? this[key] : inputValue;
      }
    }
    return data;
  }
  __setInput(name, value) {
    this.__input || (this.__input = {});
    this.__input[name] = value;
  }
  __getInput(name) {
    if (this.__input) {
      const value = this.__input[name];
      if (value !== undefined) return value;
    }
    if (name === 'path' && !this.__pathInputed) return;
    return this['_' + name];
  }
  __removeInput(name) {
    if (this.__input && this.__input[name] !== undefined) this.__input[name] = undefined;
  }
  __getInputData(names, options) {
    const data = {};
    if (names) {
      if (names instanceof Array) {
        for (let name of names) data[name] = this.__getInput(name);
      } else {
        for (let name in names) data[name] = this.__getInput(name);
      }
    } else {
      let value,
        inputValue,
        {
          __input
        } = this;
      data.tag = this.__leaf.tag;
      for (let key in this) {
        if (key[0] !== '_') {
          value = this['_' + key];
          if (value !== undefined) {
            if (key === 'path' && !this.__pathInputed) continue;
            inputValue = __input ? __input[key] : undefined;
            data[key] = inputValue === undefined ? value : inputValue;
          }
        }
      }
    }
    if (options) {
      if (options.matrix) {
        const {
          a,
          b,
          c,
          d,
          e,
          f
        } = this.__leaf.__localMatrix;
        data.matrix = {
          a,
          b,
          c,
          d,
          e,
          f
        };
      }
    }
    return data;
  }
  __setMiddle(name, value) {
    this.__middle || (this.__middle = {});
    this.__middle[name] = value;
  }
  __getMiddle(name) {
    return this.__middle && this.__middle[name];
  }
  __checkSingle() {
    const t = this;
    if (t.blendMode === 'pass-through') {
      const leaf = this.__leaf;
      if (t.opacity < 1 && leaf.isBranch || leaf.__hasEraser || t.eraser) {
        t.__single = true;
      } else if (t.__single) {
        t.__single = false;
      }
    } else {
      t.__single = true;
    }
  }
  __removeNaturalSize() {
    this.__naturalWidth = this.__naturalHeight = undefined;
  }
  destroy() {
    this.__input = this.__middle = null;
  }
}
var Answer;
(function (Answer) {
  Answer[Answer["No"] = 0] = "No";
  Answer[Answer["Yes"] = 1] = "Yes";
  Answer[Answer["NoAndSkip"] = 2] = "NoAndSkip";
  Answer[Answer["YesAndSkip"] = 3] = "YesAndSkip";
})(Answer || (Answer = {}));
const emptyData = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function contextAttr(realName) {
  return (target, key) => {
    if (!realName) realName = key;
    Object.defineProperty(target, key, {
      get() {
        return this.context[realName];
      },
      set(value) {
        this.context[realName] = value;
      }
    });
  };
}
const contextMethodNameList = [];
function contextMethod() {
  return (_target, key) => {
    contextMethodNameList.push(key);
  };
}
const emptyArray = [];
class Canvas {
  set blendMode(value) {
    if (value === 'normal') value = 'source-over';
    this.context.globalCompositeOperation = value;
  }
  get blendMode() {
    return this.context.globalCompositeOperation;
  }
  set dashPattern(value) {
    this.context.setLineDash(value || emptyArray);
  }
  get dashPattern() {
    return this.context.getLineDash();
  }
  __bindContext() {
    let method;
    contextMethodNameList.forEach(name => {
      method = this.context[name];
      if (method) this[name] = method.bind(this.context);
    });
    this.textBaseline = "alphabetic";
  }
  setTransform(_a, _b, _c, _d, _e, _f) {}
  resetTransform() {}
  getTransform() {
    return void 0;
  }
  save() {}
  restore() {}
  transform(a, b, c, d, e, f) {
    if (typeof a === 'object') {
      this.context.transform(a.a, a.b, a.c, a.d, a.e, a.f);
    } else {
      this.context.transform(a, b, c, d, e, f);
    }
  }
  translate(_x, _y) {}
  scale(_x, _y) {}
  rotate(_angle) {}
  fill(_path2d, _rule) {}
  stroke(_path2d) {}
  clip(_path2d, _rule) {}
  fillRect(_x, _y, _width, _height) {}
  strokeRect(_x, _y, _width, _height) {}
  clearRect(_x, _y, _width, _height) {}
  drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    switch (arguments.length) {
      case 9:
        if (sx < 0) {
          const d = -sx / sw * dw;
          sw += sx;
          sx = 0;
          dx += d;
          dw -= d;
        }
        if (sy < 0) {
          const d = -sy / sh * dh;
          sh += sy;
          sy = 0;
          dy += d;
          dh -= d;
        }
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        break;
      case 5:
        this.context.drawImage(image, sx, sy, sw, sh);
        break;
      case 3:
        this.context.drawImage(image, sx, sy);
    }
  }
  beginPath() {}
  moveTo(_x, _y) {}
  lineTo(_x, _y) {}
  bezierCurveTo(_cp1x, _cp1y, _cp2x, _cp2y, _x, _y) {}
  quadraticCurveTo(_cpx, _cpy, _x, _y) {}
  closePath() {}
  arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) {}
  arcTo(_x1, _y1, _x2, _y2, _radius) {}
  ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) {}
  rect(_x, _y, _width, _height) {}
  roundRect(_x, _y, _width, _height, _radius) {}
  createConicGradient(_startAngle, _x, _y) {
    return void 0;
  }
  createLinearGradient(_x0, _y0, _x1, _y1) {
    return void 0;
  }
  createPattern(_image, _repetition) {
    return void 0;
  }
  createRadialGradient(_x0, _y0, _r0, _x1, _y1, _r1) {
    return void 0;
  }
  fillText(_text, _x, _y, _maxWidth) {}
  measureText(_text) {
    return void 0;
  }
  strokeText(_text, _x, _y, _maxWidth) {}
  destroy() {
    this.context = null;
  }
}
__decorate([contextAttr('imageSmoothingEnabled')], Canvas.prototype, "smooth", void 0);
__decorate([contextAttr('imageSmoothingQuality')], Canvas.prototype, "smoothLevel", void 0);
__decorate([contextAttr('globalAlpha')], Canvas.prototype, "opacity", void 0);
__decorate([contextAttr()], Canvas.prototype, "fillStyle", void 0);
__decorate([contextAttr()], Canvas.prototype, "strokeStyle", void 0);
__decorate([contextAttr('lineWidth')], Canvas.prototype, "strokeWidth", void 0);
__decorate([contextAttr('lineCap')], Canvas.prototype, "strokeCap", void 0);
__decorate([contextAttr('lineJoin')], Canvas.prototype, "strokeJoin", void 0);
__decorate([contextAttr('lineDashOffset')], Canvas.prototype, "dashOffset", void 0);
__decorate([contextAttr()], Canvas.prototype, "miterLimit", void 0);
__decorate([contextAttr()], Canvas.prototype, "shadowBlur", void 0);
__decorate([contextAttr()], Canvas.prototype, "shadowColor", void 0);
__decorate([contextAttr()], Canvas.prototype, "shadowOffsetX", void 0);
__decorate([contextAttr()], Canvas.prototype, "shadowOffsetY", void 0);
__decorate([contextAttr()], Canvas.prototype, "filter", void 0);
__decorate([contextAttr()], Canvas.prototype, "font", void 0);
__decorate([contextAttr()], Canvas.prototype, "fontKerning", void 0);
__decorate([contextAttr()], Canvas.prototype, "fontStretch", void 0);
__decorate([contextAttr()], Canvas.prototype, "fontVariantCaps", void 0);
__decorate([contextAttr()], Canvas.prototype, "textAlign", void 0);
__decorate([contextAttr()], Canvas.prototype, "textBaseline", void 0);
__decorate([contextAttr()], Canvas.prototype, "textRendering", void 0);
__decorate([contextAttr()], Canvas.prototype, "wordSpacing", void 0);
__decorate([contextAttr()], Canvas.prototype, "letterSpacing", void 0);
__decorate([contextAttr()], Canvas.prototype, "direction", void 0);
__decorate([contextMethod()], Canvas.prototype, "setTransform", null);
__decorate([contextMethod()], Canvas.prototype, "resetTransform", null);
__decorate([contextMethod()], Canvas.prototype, "getTransform", null);
__decorate([contextMethod()], Canvas.prototype, "save", null);
__decorate([contextMethod()], Canvas.prototype, "restore", null);
__decorate([contextMethod()], Canvas.prototype, "translate", null);
__decorate([contextMethod()], Canvas.prototype, "scale", null);
__decorate([contextMethod()], Canvas.prototype, "rotate", null);
__decorate([contextMethod()], Canvas.prototype, "fill", null);
__decorate([contextMethod()], Canvas.prototype, "stroke", null);
__decorate([contextMethod()], Canvas.prototype, "clip", null);
__decorate([contextMethod()], Canvas.prototype, "fillRect", null);
__decorate([contextMethod()], Canvas.prototype, "strokeRect", null);
__decorate([contextMethod()], Canvas.prototype, "clearRect", null);
__decorate([contextMethod()], Canvas.prototype, "beginPath", null);
__decorate([contextMethod()], Canvas.prototype, "moveTo", null);
__decorate([contextMethod()], Canvas.prototype, "lineTo", null);
__decorate([contextMethod()], Canvas.prototype, "bezierCurveTo", null);
__decorate([contextMethod()], Canvas.prototype, "quadraticCurveTo", null);
__decorate([contextMethod()], Canvas.prototype, "closePath", null);
__decorate([contextMethod()], Canvas.prototype, "arc", null);
__decorate([contextMethod()], Canvas.prototype, "arcTo", null);
__decorate([contextMethod()], Canvas.prototype, "ellipse", null);
__decorate([contextMethod()], Canvas.prototype, "rect", null);
__decorate([contextMethod()], Canvas.prototype, "roundRect", null);
__decorate([contextMethod()], Canvas.prototype, "createConicGradient", null);
__decorate([contextMethod()], Canvas.prototype, "createLinearGradient", null);
__decorate([contextMethod()], Canvas.prototype, "createPattern", null);
__decorate([contextMethod()], Canvas.prototype, "createRadialGradient", null);
__decorate([contextMethod()], Canvas.prototype, "fillText", null);
__decorate([contextMethod()], Canvas.prototype, "measureText", null);
__decorate([contextMethod()], Canvas.prototype, "strokeText", null);
const {
  copy: copy$5
} = MatrixHelper;
const minSize = {
  width: 1,
  height: 1,
  pixelRatio: 1
};
const canvasSizeAttrs = ['width', 'height', 'pixelRatio'];
class LeaferCanvasBase extends Canvas {
  get width() {
    return this.size.width;
  }
  get height() {
    return this.size.height;
  }
  get pixelRatio() {
    return this.size.pixelRatio;
  }
  get pixelWidth() {
    return this.width * this.pixelRatio;
  }
  get pixelHeight() {
    return this.height * this.pixelRatio;
  }
  get allowBackgroundColor() {
    return this.view && this.parentView;
  }
  constructor(config, manager) {
    super();
    this.size = {};
    this.worldTransform = {};
    if (!config) config = minSize;
    if (!config.pixelRatio) config.pixelRatio = Platform.devicePixelRatio;
    this.manager = manager;
    this.innerId = IncrementId.create(IncrementId.CNAVAS);
    const {
      width,
      height,
      pixelRatio
    } = config;
    this.autoLayout = !width || !height;
    this.size.pixelRatio = pixelRatio;
    this.config = config;
    this.init();
  }
  init() {}
  __createContext() {
    const {
      view
    } = this;
    const {
      contextSettings
    } = this.config;
    this.context = contextSettings ? view.getContext('2d', contextSettings) : view.getContext('2d');
    this.__bindContext();
  }
  export(_filename, _options) {
    return undefined;
  }
  toBlob(_type, _quality) {
    return undefined;
  }
  toDataURL(_type, _quality) {
    return undefined;
  }
  saveAs(_filename, _quality) {
    return undefined;
  }
  resize(size) {
    if (this.isSameSize(size)) return;
    let takeCanvas;
    if (this.context && !this.unreal && this.width) {
      takeCanvas = this.getSameCanvas();
      takeCanvas.copyWorld(this);
    }
    DataHelper.copyAttrs(this.size, size, canvasSizeAttrs);
    this.size.pixelRatio || (this.size.pixelRatio = 1);
    this.bounds = new Bounds(0, 0, this.width, this.height);
    if (!this.unreal) {
      this.updateViewSize();
      this.smooth = this.config.smooth;
    }
    this.updateClientBounds();
    if (this.context && !this.unreal && takeCanvas) {
      this.clearWorld(takeCanvas.bounds);
      this.copyWorld(takeCanvas);
      takeCanvas.recycle();
    }
  }
  updateViewSize() {}
  updateClientBounds() {}
  getClientBounds(update) {
    if (update) this.updateClientBounds();
    return this.clientBounds || this.bounds;
  }
  startAutoLayout(_autoBounds, _listener) {}
  stopAutoLayout() {}
  setCursor(_cursor) {}
  setWorld(matrix, parentMatrix) {
    const {
      pixelRatio
    } = this;
    const w = this.worldTransform;
    if (parentMatrix) {
      const {
        a,
        b,
        c,
        d,
        e,
        f
      } = parentMatrix;
      this.setTransform(w.a = (matrix.a * a + matrix.b * c) * pixelRatio, w.b = (matrix.a * b + matrix.b * d) * pixelRatio, w.c = (matrix.c * a + matrix.d * c) * pixelRatio, w.d = (matrix.c * b + matrix.d * d) * pixelRatio, w.e = (matrix.e * a + matrix.f * c + e) * pixelRatio, w.f = (matrix.e * b + matrix.f * d + f) * pixelRatio);
    } else {
      this.setTransform(w.a = matrix.a * pixelRatio, w.b = matrix.b * pixelRatio, w.c = matrix.c * pixelRatio, w.d = matrix.d * pixelRatio, w.e = matrix.e * pixelRatio, w.f = matrix.f * pixelRatio);
    }
  }
  useWorldTransform(worldTransform) {
    if (worldTransform) this.worldTransform = worldTransform;
    const w = this.worldTransform;
    if (w) this.setTransform(w.a, w.b, w.c, w.d, w.e, w.f);
  }
  setStroke(color, strokeWidth, options) {
    if (strokeWidth) this.strokeWidth = strokeWidth;
    if (color) this.strokeStyle = color;
    if (options) this.setStrokeOptions(options);
  }
  setStrokeOptions(options) {
    this.strokeCap = options.strokeCap === 'none' ? 'butt' : options.strokeCap;
    this.strokeJoin = options.strokeJoin;
    this.dashPattern = options.dashPattern;
    this.dashOffset = options.dashOffset;
    this.miterLimit = options.miterLimit;
  }
  saveBlendMode(blendMode) {
    this.savedBlendMode = this.blendMode;
    this.blendMode = blendMode;
  }
  restoreBlendMode() {
    this.blendMode = this.savedBlendMode;
  }
  hitFill(_point, _fillRule) {
    return true;
  }
  hitStroke(_point, _strokeWidth) {
    return true;
  }
  hitPixel(_radiusPoint, _offset, _scale = 1) {
    return true;
  }
  setWorldShadow(x, y, blur, color) {
    const {
      pixelRatio
    } = this;
    this.shadowOffsetX = x * pixelRatio;
    this.shadowOffsetY = y * pixelRatio;
    this.shadowBlur = blur * pixelRatio;
    this.shadowColor = color || 'black';
  }
  setWorldBlur(blur) {
    const {
      pixelRatio
    } = this;
    this.filter = `blur(${blur * pixelRatio}px)`;
  }
  copyWorld(canvas, from, to, blendMode) {
    if (blendMode) this.blendMode = blendMode;
    if (from) {
      const {
        pixelRatio
      } = this;
      if (!to) to = from;
      this.drawImage(canvas.view, from.x * pixelRatio, from.y * pixelRatio, from.width * pixelRatio, from.height * pixelRatio, to.x * pixelRatio, to.y * pixelRatio, to.width * pixelRatio, to.height * pixelRatio);
    } else {
      this.drawImage(canvas.view, 0, 0);
    }
    if (blendMode) this.blendMode = 'source-over';
  }
  copyWorldToInner(canvas, fromWorld, toInnerBounds, blendMode) {
    if (blendMode) this.blendMode = blendMode;
    if (fromWorld.b || fromWorld.c) {
      this.save();
      this.resetTransform();
      this.copyWorld(canvas, fromWorld, BoundsHelper.tempToOuterOf(toInnerBounds, fromWorld));
      this.restore();
    } else {
      const {
        pixelRatio
      } = this;
      this.drawImage(canvas.view, fromWorld.x * pixelRatio, fromWorld.y * pixelRatio, fromWorld.width * pixelRatio, fromWorld.height * pixelRatio, toInnerBounds.x, toInnerBounds.y, toInnerBounds.width, toInnerBounds.height);
    }
    if (blendMode) this.blendMode = 'source-over';
  }
  copyWorldByReset(canvas, from, to, blendMode, onlyResetTransform) {
    this.resetTransform();
    this.copyWorld(canvas, from, to, blendMode);
    if (!onlyResetTransform) this.useWorldTransform();
  }
  useMask(maskCanvas, fromBounds, toBounds) {
    this.copyWorld(maskCanvas, fromBounds, toBounds, 'destination-in');
  }
  useEraser(eraserCanvas, fromBounds, toBounds) {
    this.copyWorld(eraserCanvas, fromBounds, toBounds, 'destination-out');
  }
  fillWorld(bounds, color, blendMode) {
    if (blendMode) this.blendMode = blendMode;
    this.fillStyle = color;
    tempBounds.set(bounds).scale(this.pixelRatio);
    this.fillRect(tempBounds.x, tempBounds.y, tempBounds.width, tempBounds.height);
    if (blendMode) this.blendMode = 'source-over';
  }
  strokeWorld(bounds, color, blendMode) {
    if (blendMode) this.blendMode = blendMode;
    this.strokeStyle = color;
    tempBounds.set(bounds).scale(this.pixelRatio);
    this.strokeRect(tempBounds.x, tempBounds.y, tempBounds.width, tempBounds.height);
    if (blendMode) this.blendMode = 'source-over';
  }
  clearWorld(bounds, ceilPixel) {
    tempBounds.set(bounds).scale(this.pixelRatio);
    if (ceilPixel) tempBounds.ceil();
    this.clearRect(tempBounds.x, tempBounds.y, tempBounds.width, tempBounds.height);
  }
  clipWorld(bounds, ceilPixel) {
    this.beginPath();
    tempBounds.set(bounds).scale(this.pixelRatio);
    if (ceilPixel) tempBounds.ceil();
    this.rect(tempBounds.x, tempBounds.y, tempBounds.width, tempBounds.height);
    this.clip();
  }
  clear() {
    const {
      pixelRatio
    } = this;
    this.clearRect(0, 0, this.width * pixelRatio + 2, this.height * pixelRatio + 2);
  }
  isSameSize(size) {
    return this.width === size.width && this.height === size.height && this.pixelRatio === size.pixelRatio;
  }
  getSameCanvas(useSameWorldTransform, useSameSmooth) {
    const canvas = this.manager ? this.manager.get(this.size) : Creator.canvas(Object.assign({}, this.size));
    canvas.save();
    if (useSameWorldTransform) copy$5(canvas.worldTransform, this.worldTransform), canvas.useWorldTransform();
    if (useSameSmooth) canvas.smooth = this.smooth;
    return canvas;
  }
  recycle(clearBounds) {
    if (!this.recycled) {
      this.restore();
      clearBounds ? this.clearWorld(clearBounds, true) : this.clear();
      this.manager ? this.manager.recycle(this) : this.destroy();
    }
  }
  updateRender() {}
  unrealCanvas() {}
  destroy() {
    this.manager = this.view = this.parentView = null;
  }
}
const PathHelper = {
  creator: {},
  parse(_pathString, _curveMode) {
    return undefined;
  },
  convertToCanvasData(_old, _curveMode) {
    return undefined;
  }
};
const CanvasCommandOnlyMap = {
  N: 21,
  D: 22,
  X: 23,
  G: 24,
  F: 25,
  O: 26,
  P: 27,
  U: 28
};
const PathCommandMap = Object.assign({
  M: 1,
  m: 10,
  L: 2,
  l: 20,
  H: 3,
  h: 30,
  V: 4,
  v: 40,
  C: 5,
  c: 50,
  S: 6,
  s: 60,
  Q: 7,
  q: 70,
  T: 8,
  t: 80,
  A: 9,
  a: 90,
  Z: 11,
  z: 11,
  R: 12
}, CanvasCommandOnlyMap);
const PathCommandLengthMap = {
  M: 3,
  m: 3,
  L: 3,
  l: 3,
  H: 2,
  h: 2,
  V: 2,
  v: 2,
  C: 7,
  c: 7,
  S: 5,
  s: 5,
  Q: 5,
  q: 5,
  T: 3,
  t: 3,
  A: 8,
  a: 8,
  Z: 1,
  z: 1,
  N: 5,
  D: 9,
  X: 6,
  G: 9,
  F: 5,
  O: 7,
  P: 4,
  U: 6
};
const NeedConvertToCanvasCommandMap = {
  m: 10,
  l: 20,
  H: 3,
  h: 30,
  V: 4,
  v: 40,
  c: 50,
  S: 6,
  s: 60,
  q: 70,
  T: 8,
  t: 80,
  A: 9,
  a: 90
};
const NeedConvertToCurveCommandMap = Object.assign(Object.assign({}, NeedConvertToCanvasCommandMap), CanvasCommandOnlyMap);
const P$4 = PathCommandMap;
const PathNumberCommandMap = {};
for (let key in P$4) {
  PathNumberCommandMap[P$4[key]] = key;
}
const PathNumberCommandLengthMap = {};
for (let key in P$4) {
  PathNumberCommandLengthMap[P$4[key]] = PathCommandLengthMap[key];
}
const RectHelper = {
  drawRoundRect(drawer, x, y, width, height, cornerRadius) {
    const data = MathHelper.fourNumber(cornerRadius, Math.min(width / 2, height / 2));
    const right = x + width;
    const bottom = y + height;
    data[0] ? drawer.moveTo(x + data[0], y) : drawer.moveTo(x, y);
    data[1] ? drawer.arcTo(right, y, right, bottom, data[1]) : drawer.lineTo(right, y);
    data[2] ? drawer.arcTo(right, bottom, x, bottom, data[2]) : drawer.lineTo(right, bottom);
    data[3] ? drawer.arcTo(x, bottom, x, y, data[3]) : drawer.lineTo(x, bottom);
    data[0] ? drawer.arcTo(x, y, right, y, data[0]) : drawer.lineTo(x, y);
  }
};
const {
  sin: sin$1,
  cos: cos$1,
  atan2: atan2$1,
  ceil,
  abs: abs$1,
  PI,
  sqrt: sqrt$1,
  pow
} = Math;
const {
  setPoint: setPoint$1,
  addPoint: addPoint$1
} = TwoPointBoundsHelper;
const {
  set
} = PointHelper;
const {
  M: M$5,
  L: L$6,
  C: C$5,
  Q: Q$4,
  Z: Z$5
} = PathCommandMap;
const tempPoint$1 = {};
const BezierHelper = {
  points(data, points, curve, close) {
    data.push(M$5, points[0], points[1]);
    if (curve && points.length > 5) {
      let aX, aY, bX, bY, cX, cY, c1X, c1Y, c2X, c2Y;
      let ba,
        cb,
        d,
        len = points.length;
      const t = curve === true ? 0.5 : curve;
      if (close) {
        points = [points[len - 2], points[len - 1], ...points, points[0], points[1], points[2], points[3]];
        len = points.length;
      }
      for (let i = 2; i < len - 2; i += 2) {
        aX = points[i - 2];
        aY = points[i - 1];
        bX = points[i];
        bY = points[i + 1];
        cX = points[i + 2];
        cY = points[i + 3];
        ba = sqrt$1(pow(bX - aX, 2) + pow(bY - aY, 2));
        cb = sqrt$1(pow(cX - bX, 2) + pow(cY - bY, 2));
        d = ba + cb;
        ba = t * ba / d;
        cb = t * cb / d;
        cX -= aX;
        cY -= aY;
        c1X = bX - ba * cX;
        c1Y = bY - ba * cY;
        if (i === 2) {
          if (!close) data.push(Q$4, c1X, c1Y, bX, bY);
        } else {
          data.push(C$5, c2X, c2Y, c1X, c1Y, bX, bY);
        }
        c2X = bX + cb * cX;
        c2Y = bY + cb * cY;
      }
      if (!close) data.push(Q$4, c2X, c2Y, points[len - 2], points[len - 1]);
    } else {
      for (let i = 2, len = points.length; i < len; i += 2) {
        data.push(L$6, points[i], points[i + 1]);
      }
    }
    if (close) data.push(Z$5);
  },
  rect(data, x, y, width, height) {
    PathHelper.creator.path = data;
    PathHelper.creator.moveTo(x, y).lineTo(x + width, y).lineTo(x + width, y + height).lineTo(x, y + height).lineTo(x, y);
  },
  roundRect(data, x, y, width, height, radius) {
    PathHelper.creator.path = [];
    RectHelper.drawRoundRect(PathHelper.creator, x, y, width, height, radius);
    data.push(...PathHelper.convertToCanvasData(PathHelper.creator.path, true));
  },
  arcTo(data, fromX, fromY, x1, y1, toX, toY, radius, setPointBounds, setEndPoint, setStartPoint) {
    const BAx = x1 - fromX;
    const BAy = y1 - fromY;
    const CBx = toX - x1;
    const CBy = toY - y1;
    let startRadian = atan2$1(BAy, BAx);
    let endRadian = atan2$1(CBy, CBx);
    let totalRadian = endRadian - startRadian;
    if (totalRadian < 0) totalRadian += PI2;
    if (totalRadian === PI || abs$1(BAx + BAy) < 1.e-12 || abs$1(CBx + CBy) < 1.e-12) {
      if (data) data.push(L$6, x1, y1);
      if (setPointBounds) {
        setPoint$1(setPointBounds, fromX, fromY);
        addPoint$1(setPointBounds, x1, y1);
      }
      if (setStartPoint) set(setStartPoint, fromX, fromY);
      if (setEndPoint) set(setEndPoint, x1, y1);
      return;
    }
    const anticlockwise = BAx * CBy - CBx * BAy < 0;
    const sign = anticlockwise ? -1 : 1;
    const c = radius / cos$1(totalRadian / 2);
    const centerX = x1 + c * cos$1(startRadian + totalRadian / 2 + PI_2 * sign);
    const centerY = y1 + c * sin$1(startRadian + totalRadian / 2 + PI_2 * sign);
    startRadian -= PI_2 * sign;
    endRadian -= PI_2 * sign;
    return ellipse$5(data, centerX, centerY, radius, radius, 0, startRadian / OneRadian, endRadian / OneRadian, anticlockwise, setPointBounds, setEndPoint, setStartPoint);
  },
  arc(data, x, y, radius, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint) {
    return ellipse$5(data, x, y, radius, radius, 0, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint);
  },
  ellipse(data, cx, cy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint) {
    const rotationRadian = rotation * OneRadian;
    const rotationSin = sin$1(rotationRadian);
    const rotationCos = cos$1(rotationRadian);
    let startRadian = startAngle * OneRadian;
    let endRadian = endAngle * OneRadian;
    if (startRadian > PI) startRadian -= PI2;
    if (endRadian < 0) endRadian += PI2;
    let totalRadian = endRadian - startRadian;
    if (totalRadian < 0) totalRadian += PI2;else if (totalRadian > PI2) totalRadian -= PI2;
    if (anticlockwise) totalRadian -= PI2;
    const parts = ceil(abs$1(totalRadian / PI_2));
    const partRadian = totalRadian / parts;
    const partRadian4Sin = sin$1(partRadian / 4);
    const control = 8 / 3 * partRadian4Sin * partRadian4Sin / sin$1(partRadian / 2);
    endRadian = startRadian + partRadian;
    let startCos = cos$1(startRadian);
    let startSin = sin$1(startRadian);
    let endCos, endSin;
    let x, y, x1, y1, x2, y2;
    let startX = x = rotationCos * radiusX * startCos - rotationSin * radiusY * startSin;
    let startY = y = rotationSin * radiusX * startCos + rotationCos * radiusY * startSin;
    let fromX = cx + x,
      fromY = cy + y;
    if (data) data.push(L$6, fromX, fromY);
    if (setPointBounds) setPoint$1(setPointBounds, fromX, fromY);
    if (setStartPoint) set(setStartPoint, fromX, fromY);
    for (let i = 0; i < parts; i++) {
      endCos = cos$1(endRadian);
      endSin = sin$1(endRadian);
      x = rotationCos * radiusX * endCos - rotationSin * radiusY * endSin;
      y = rotationSin * radiusX * endCos + rotationCos * radiusY * endSin;
      x1 = cx + startX - control * (rotationCos * radiusX * startSin + rotationSin * radiusY * startCos);
      y1 = cy + startY - control * (rotationSin * radiusX * startSin - rotationCos * radiusY * startCos);
      x2 = cx + x + control * (rotationCos * radiusX * endSin + rotationSin * radiusY * endCos);
      y2 = cy + y + control * (rotationSin * radiusX * endSin - rotationCos * radiusY * endCos);
      if (data) data.push(C$5, x1, y1, x2, y2, cx + x, cy + y);
      if (setPointBounds) toTwoPointBounds$1(cx + startX, cy + startY, x1, y1, x2, y2, cx + x, cy + y, setPointBounds, true);
      startX = x;
      startY = y;
      startCos = endCos;
      startSin = endSin;
      startRadian = endRadian;
      endRadian += partRadian;
    }
    if (setEndPoint) set(setEndPoint, cx + x, cy + y);
  },
  quadraticCurveTo(data, fromX, fromY, x1, y1, toX, toY) {
    data.push(C$5, (fromX + 2 * x1) / 3, (fromY + 2 * y1) / 3, (toX + 2 * x1) / 3, (toY + 2 * y1) / 3, toX, toY);
  },
  toTwoPointBoundsByQuadraticCurve(fromX, fromY, x1, y1, toX, toY, pointBounds, addMode) {
    toTwoPointBounds$1(fromX, fromY, (fromX + 2 * x1) / 3, (fromY + 2 * y1) / 3, (toX + 2 * x1) / 3, (toY + 2 * y1) / 3, toX, toY, pointBounds, addMode);
  },
  toTwoPointBounds(fromX, fromY, x1, y1, x2, y2, toX, toY, pointBounds, addMode) {
    const tList = [];
    let a, b, c, t, t1, t2, v, sqrtV;
    let f = fromX,
      z1 = x1,
      z2 = x2,
      o = toX;
    for (let i = 0; i < 2; ++i) {
      if (i == 1) {
        f = fromY, z1 = y1, z2 = y2, o = toY;
      }
      a = -3 * f + 9 * z1 - 9 * z2 + 3 * o;
      b = 6 * f - 12 * z1 + 6 * z2;
      c = 3 * z1 - 3 * f;
      if (Math.abs(a) < 1e-12) {
        if (Math.abs(b) < 1e-12) continue;
        t = -c / b;
        if (0 < t && t < 1) tList.push(t);
        continue;
      }
      v = b * b - 4 * c * a;
      sqrtV = Math.sqrt(v);
      if (v < 0) continue;
      t1 = (-b + sqrtV) / (2 * a);
      if (0 < t1 && t1 < 1) tList.push(t1);
      t2 = (-b - sqrtV) / (2 * a);
      if (0 < t2 && t2 < 1) tList.push(t2);
    }
    addMode ? addPoint$1(pointBounds, fromX, fromY) : setPoint$1(pointBounds, fromX, fromY);
    addPoint$1(pointBounds, toX, toY);
    for (let i = 0, len = tList.length; i < len; i++) {
      getPointAndSet(tList[i], fromX, fromY, x1, y1, x2, y2, toX, toY, tempPoint$1);
      addPoint$1(pointBounds, tempPoint$1.x, tempPoint$1.y);
    }
  },
  getPointAndSet(t, fromX, fromY, x1, y1, x2, y2, toX, toY, setPoint) {
    const o = 1 - t,
      a = o * o * o,
      b = 3 * o * o * t,
      c = 3 * o * t * t,
      d = t * t * t;
    setPoint.x = a * fromX + b * x1 + c * x2 + d * toX;
    setPoint.y = a * fromY + b * y1 + c * y2 + d * toY;
  },
  getPoint(t, fromX, fromY, x1, y1, x2, y2, toX, toY) {
    const point = {};
    getPointAndSet(t, fromX, fromY, x1, y1, x2, y2, toX, toY, point);
    return point;
  }
};
const {
  getPointAndSet,
  toTwoPointBounds: toTwoPointBounds$1,
  ellipse: ellipse$5
} = BezierHelper;
const {
  sin,
  cos,
  sqrt,
  atan2
} = Math;
const {
  ellipse: ellipse$4
} = BezierHelper;
const EllipseHelper = {
  ellipticalArc(data, fromX, fromY, radiusX, radiusY, rotation, largeFlag, sweepFlag, toX, toY, curveMode) {
    const halfX = (toX - fromX) / 2;
    const halfY = (toY - fromY) / 2;
    const rotationRadian = rotation * OneRadian;
    const rotationSin = sin(rotationRadian);
    const rotationCos = cos(rotationRadian);
    const px = -rotationCos * halfX - rotationSin * halfY;
    const py = -rotationCos * halfY + rotationSin * halfX;
    const rxSquare = radiusX * radiusX;
    const rySquare = radiusY * radiusY;
    const pySquare = py * py;
    const pxSquare = px * px;
    const a = rxSquare * rySquare - rxSquare * pySquare - rySquare * pxSquare;
    let s = 0;
    if (a < 0) {
      const t = sqrt(1 - a / (rxSquare * rySquare));
      radiusX *= t;
      radiusY *= t;
    } else {
      s = (largeFlag === sweepFlag ? -1 : 1) * sqrt(a / (rxSquare * pySquare + rySquare * pxSquare));
    }
    const cx = s * radiusX * py / radiusY;
    const cy = -s * radiusY * px / radiusX;
    const startRadian = atan2((py - cy) / radiusY, (px - cx) / radiusX);
    const endRadian = atan2((-py - cy) / radiusY, (-px - cx) / radiusX);
    let totalRadian = endRadian - startRadian;
    if (sweepFlag === 0 && totalRadian > 0) {
      totalRadian -= PI2;
    } else if (sweepFlag === 1 && totalRadian < 0) {
      totalRadian += PI2;
    }
    const centerX = fromX + halfX + rotationCos * cx - rotationSin * cy;
    const centerY = fromY + halfY + rotationSin * cx + rotationCos * cy;
    const anticlockwise = totalRadian < 0 ? 1 : 0;
    if (curveMode || Platform.ellipseToCurve) {
      ellipse$4(data, centerX, centerY, radiusX, radiusY, rotation, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
    } else {
      if (radiusX === radiusY && !rotation) {
        data.push(PathCommandMap.O, centerX, centerY, radiusX, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
      } else {
        data.push(PathCommandMap.G, centerX, centerY, radiusX, radiusY, rotation, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
      }
    }
  }
};
const {
  M: M$4,
  m,
  L: L$5,
  l,
  H,
  h,
  V,
  v,
  C: C$4,
  c,
  S,
  s,
  Q: Q$3,
  q,
  T,
  t,
  A,
  a,
  Z: Z$4,
  z,
  N: N$3,
  D: D$3,
  X: X$3,
  G: G$3,
  F: F$4,
  O: O$3,
  P: P$3,
  U: U$3
} = PathCommandMap;
const {
  rect: rect$1,
  roundRect: roundRect$2,
  arcTo: arcTo$3,
  arc: arc$3,
  ellipse: ellipse$3,
  quadraticCurveTo: quadraticCurveTo$1
} = BezierHelper;
const {
  ellipticalArc
} = EllipseHelper;
const debug$5 = Debug.get('PathConvert');
const setEndPoint$1 = {};
const PathConvert = {
  current: {
    dot: 0
  },
  stringify(data, floatLength) {
    let i = 0,
      len = data.length,
      count,
      str = '',
      command,
      lastCommand;
    while (i < len) {
      command = data[i];
      count = PathNumberCommandLengthMap[command];
      if (command === lastCommand) {
        str += ' ';
      } else {
        str += PathNumberCommandMap[command];
      }
      for (let j = 1; j < count; j++) {
        str += MathHelper.float(data[i + j], floatLength);
        j === count - 1 || (str += ' ');
      }
      lastCommand = command;
      i += count;
    }
    return str;
  },
  parse(pathString, curveMode) {
    let needConvert,
      char,
      lastChar,
      num = '';
    const data = [];
    const convertCommand = curveMode ? NeedConvertToCurveCommandMap : NeedConvertToCanvasCommandMap;
    for (let i = 0, len = pathString.length; i < len; i++) {
      char = pathString[i];
      if (StringNumberMap[char]) {
        if (char === '.') {
          if (current.dot) {
            pushData(data, num);
            num = '';
          }
          current.dot++;
        }
        if (num === '0' && char !== '.') {
          pushData(data, num);
          num = '';
        }
        num += char;
      } else if (PathCommandMap[char]) {
        if (num) {
          pushData(data, num);
          num = '';
        }
        current.name = PathCommandMap[char];
        current.length = PathCommandLengthMap[char];
        current.index = 0;
        pushData(data, current.name);
        if (!needConvert && convertCommand[char]) needConvert = true;
      } else {
        if (char === '-' || char === '+') {
          if (lastChar === 'e' || lastChar === 'E') {
            num += char;
          } else {
            if (num) pushData(data, num);
            num = char;
          }
        } else {
          if (num) {
            pushData(data, num);
            num = '';
          }
        }
      }
      lastChar = char;
    }
    if (num) pushData(data, num);
    return needConvert ? PathConvert.toCanvasData(data, curveMode) : data;
  },
  toCanvasData(old, curveMode) {
    let x = 0,
      y = 0,
      x1 = 0,
      y1 = 0,
      i = 0,
      len = old.length,
      controlX,
      controlY,
      command,
      lastCommand,
      smooth;
    const data = [];
    while (i < len) {
      command = old[i];
      switch (command) {
        case m:
          old[i + 1] += x;
          old[i + 2] += y;
        case M$4:
          x = old[i + 1];
          y = old[i + 2];
          data.push(M$4, x, y);
          i += 3;
          break;
        case h:
          old[i + 1] += x;
        case H:
          x = old[i + 1];
          data.push(L$5, x, y);
          i += 2;
          break;
        case v:
          old[i + 1] += y;
        case V:
          y = old[i + 1];
          data.push(L$5, x, y);
          i += 2;
          break;
        case l:
          old[i + 1] += x;
          old[i + 2] += y;
        case L$5:
          x = old[i + 1];
          y = old[i + 2];
          data.push(L$5, x, y);
          i += 3;
          break;
        case s:
          old[i + 1] += x;
          old[i + 2] += y;
          old[i + 3] += x;
          old[i + 4] += y;
          command = S;
        case S:
          smooth = lastCommand === C$4 || lastCommand === S;
          x1 = smooth ? x * 2 - controlX : old[i + 1];
          y1 = smooth ? y * 2 - controlY : old[i + 2];
          controlX = old[i + 1];
          controlY = old[i + 2];
          x = old[i + 3];
          y = old[i + 4];
          data.push(C$4, x1, y1, controlX, controlY, x, y);
          i += 5;
          break;
        case c:
          old[i + 1] += x;
          old[i + 2] += y;
          old[i + 3] += x;
          old[i + 4] += y;
          old[i + 5] += x;
          old[i + 6] += y;
          command = C$4;
        case C$4:
          controlX = old[i + 3];
          controlY = old[i + 4];
          x = old[i + 5];
          y = old[i + 6];
          data.push(C$4, old[i + 1], old[i + 2], controlX, controlY, x, y);
          i += 7;
          break;
        case t:
          old[i + 1] += x;
          old[i + 2] += y;
          command = T;
        case T:
          smooth = lastCommand === Q$3 || lastCommand === T;
          controlX = smooth ? x * 2 - controlX : old[i + 1];
          controlY = smooth ? y * 2 - controlY : old[i + 2];
          curveMode ? quadraticCurveTo$1(data, x, y, controlX, controlY, old[i + 1], old[i + 2]) : data.push(Q$3, controlX, controlY, old[i + 1], old[i + 2]);
          x = old[i + 1];
          y = old[i + 2];
          i += 3;
          break;
        case q:
          old[i + 1] += x;
          old[i + 2] += y;
          old[i + 3] += x;
          old[i + 4] += y;
          command = Q$3;
        case Q$3:
          controlX = old[i + 1];
          controlY = old[i + 2];
          curveMode ? quadraticCurveTo$1(data, x, y, controlX, controlY, old[i + 3], old[i + 4]) : data.push(Q$3, controlX, controlY, old[i + 3], old[i + 4]);
          x = old[i + 3];
          y = old[i + 4];
          i += 5;
          break;
        case a:
          old[i + 6] += x;
          old[i + 7] += y;
        case A:
          ellipticalArc(data, x, y, old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], old[i + 7], curveMode);
          x = old[i + 6];
          y = old[i + 7];
          i += 8;
          break;
        case z:
        case Z$4:
          data.push(Z$4);
          i++;
          break;
        case N$3:
          x = old[i + 1];
          y = old[i + 2];
          curveMode ? rect$1(data, x, y, old[i + 3], old[i + 4]) : copyData(data, old, i, 5);
          i += 5;
          break;
        case D$3:
          x = old[i + 1];
          y = old[i + 2];
          curveMode ? roundRect$2(data, x, y, old[i + 3], old[i + 4], [old[i + 5], old[i + 6], old[i + 7], old[i + 8]]) : copyData(data, old, i, 9);
          i += 9;
          break;
        case X$3:
          x = old[i + 1];
          y = old[i + 2];
          curveMode ? roundRect$2(data, x, y, old[i + 3], old[i + 4], old[i + 5]) : copyData(data, old, i, 6);
          i += 6;
          break;
        case G$3:
          ellipse$3(curveMode ? data : copyData(data, old, i, 9), old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], old[i + 7], old[i + 8], null, setEndPoint$1);
          x = setEndPoint$1.x;
          y = setEndPoint$1.y;
          i += 9;
          break;
        case F$4:
          curveMode ? ellipse$3(data, old[i + 1], old[i + 2], old[i + 3], old[i + 4], 0, 0, 360, false) : copyData(data, old, i, 5);
          x = old[i + 1] + old[i + 3];
          y = old[i + 2];
          i += 5;
          break;
        case O$3:
          arc$3(curveMode ? data : copyData(data, old, i, 7), old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], null, setEndPoint$1);
          x = setEndPoint$1.x;
          y = setEndPoint$1.y;
          i += 7;
          break;
        case P$3:
          curveMode ? arc$3(data, old[i + 1], old[i + 2], old[i + 3], 0, 360, false) : copyData(data, old, i, 4);
          x = old[i + 1] + old[i + 3];
          y = old[i + 2];
          i += 4;
          break;
        case U$3:
          arcTo$3(curveMode ? data : copyData(data, old, i, 6), x, y, old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], null, setEndPoint$1);
          x = setEndPoint$1.x;
          y = setEndPoint$1.y;
          i += 6;
          break;
        default:
          debug$5.error(`command: ${command} [index:${i}]`, old);
          return data;
      }
      lastCommand = command;
    }
    return data;
  },
  copyData(data, old, index, count) {
    for (let i = index, end = index + count; i < end; i++) {
      data.push(old[i]);
    }
  },
  pushData(data, strNum) {
    if (current.index === current.length) {
      current.index = 1;
      data.push(current.name);
    }
    data.push(Number(strNum));
    current.index++;
    current.dot = 0;
  }
};
const {
  current,
  pushData,
  copyData
} = PathConvert;
const {
  M: M$3,
  L: L$4,
  C: C$3,
  Q: Q$2,
  Z: Z$3,
  N: N$2,
  D: D$2,
  X: X$2,
  G: G$2,
  F: F$3,
  O: O$2,
  P: P$2,
  U: U$2
} = PathCommandMap;
const {
  getMinDistanceFrom,
  getRadianFrom
} = PointHelper;
const {
  tan,
  min,
  abs
} = Math;
const startPoint = {};
const PathCommandDataHelper = {
  beginPath(data) {
    data.length = 0;
  },
  moveTo(data, x, y) {
    data.push(M$3, x, y);
  },
  lineTo(data, x, y) {
    data.push(L$4, x, y);
  },
  bezierCurveTo(data, x1, y1, x2, y2, x, y) {
    data.push(C$3, x1, y1, x2, y2, x, y);
  },
  quadraticCurveTo(data, x1, y1, x, y) {
    data.push(Q$2, x1, y1, x, y);
  },
  closePath(data) {
    data.push(Z$3);
  },
  rect(data, x, y, width, height) {
    data.push(N$2, x, y, width, height);
  },
  roundRect(data, x, y, width, height, cornerRadius) {
    if (typeof cornerRadius === 'number') {
      data.push(X$2, x, y, width, height, cornerRadius);
    } else {
      const fourCorners = MathHelper.fourNumber(cornerRadius);
      if (fourCorners) {
        data.push(D$2, x, y, width, height, ...fourCorners);
      } else {
        data.push(N$2, x, y, width, height);
      }
    }
  },
  ellipse(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    if (rotation === undefined) {
      data.push(F$3, x, y, radiusX, radiusY);
    } else {
      if (startAngle === undefined) startAngle = 0;
      if (endAngle === undefined) endAngle = 360;
      data.push(G$2, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise ? 1 : 0);
    }
  },
  arc(data, x, y, radius, startAngle, endAngle, anticlockwise) {
    if (startAngle === undefined) {
      data.push(P$2, x, y, radius);
    } else {
      if (endAngle === undefined) endAngle = 360;
      data.push(O$2, x, y, radius, startAngle, endAngle, anticlockwise ? 1 : 0);
    }
  },
  arcTo(data, x1, y1, x2, y2, radius, lastX, lastY) {
    if (lastX !== undefined) {
      const maxRadius = tan(getRadianFrom(lastX, lastY, x1, y1, x2, y2) / 2) * (getMinDistanceFrom(lastX, lastY, x1, y1, x2, y2) / 2);
      data.push(U$2, x1, y1, x2, y2, min(radius, abs(maxRadius)));
    } else {
      data.push(U$2, x1, y1, x2, y2, radius);
    }
  },
  drawEllipse(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    BezierHelper.ellipse(null, x, y, radiusX, radiusY, rotation === undefined ? 0 : rotation, startAngle === undefined ? 0 : startAngle, endAngle === undefined ? 360 : endAngle, anticlockwise, null, null, startPoint);
    data.push(M$3, startPoint.x, startPoint.y);
    ellipse$2(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
  },
  drawArc(data, x, y, radius, startAngle, endAngle, anticlockwise) {
    BezierHelper.arc(null, x, y, radius, startAngle === undefined ? 0 : startAngle, endAngle === undefined ? 360 : endAngle, anticlockwise, null, null, startPoint);
    data.push(M$3, startPoint.x, startPoint.y);
    arc$2(data, x, y, radius, startAngle, endAngle, anticlockwise);
  },
  drawPoints(data, points, curve, close) {
    BezierHelper.points(data, points, curve, close);
  }
};
const {
  ellipse: ellipse$2,
  arc: arc$2
} = PathCommandDataHelper;
const {
  moveTo,
  lineTo,
  quadraticCurveTo,
  bezierCurveTo,
  closePath,
  beginPath,
  rect,
  roundRect: roundRect$1,
  ellipse: ellipse$1,
  arc: arc$1,
  arcTo: arcTo$2,
  drawEllipse,
  drawArc,
  drawPoints
} = PathCommandDataHelper;
class PathCreator {
  set path(value) {
    this.__path = value;
  }
  get path() {
    return this.__path;
  }
  constructor(path) {
    this.clearPath = this.beginPath;
    this.set(path);
  }
  set(path) {
    if (path) {
      this.__path = typeof path === 'string' ? PathHelper.parse(path) : path;
    } else {
      this.__path = [];
    }
    return this;
  }
  beginPath() {
    beginPath(this.__path);
    return this;
  }
  moveTo(x, y) {
    moveTo(this.__path, x, y);
    return this;
  }
  lineTo(x, y) {
    lineTo(this.__path, x, y);
    return this;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    bezierCurveTo(this.__path, x1, y1, x2, y2, x, y);
    return this;
  }
  quadraticCurveTo(x1, y1, x, y) {
    quadraticCurveTo(this.__path, x1, y1, x, y);
    return this;
  }
  closePath() {
    closePath(this.__path);
    return this;
  }
  rect(x, y, width, height) {
    rect(this.__path, x, y, width, height);
    return this;
  }
  roundRect(x, y, width, height, cornerRadius) {
    roundRect$1(this.__path, x, y, width, height, cornerRadius);
    return this;
  }
  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    ellipse$1(this.__path, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    return this;
  }
  arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    arc$1(this.__path, x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  arcTo(x1, y1, x2, y2, radius) {
    arcTo$2(this.__path, x1, y1, x2, y2, radius);
    return this;
  }
  drawEllipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    drawEllipse(this.__path, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    return this;
  }
  drawArc(x, y, radius, startAngle, endAngle, anticlockwise) {
    drawArc(this.__path, x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  drawPoints(points, curve, close) {
    drawPoints(this.__path, points, curve, close);
    return this;
  }
}
const {
  M: M$2,
  L: L$3,
  C: C$2,
  Q: Q$1,
  Z: Z$2,
  N: N$1,
  D: D$1,
  X: X$1,
  G: G$1,
  F: F$2,
  O: O$1,
  P: P$1,
  U: U$1
} = PathCommandMap;
const debug$4 = Debug.get('PathDrawer');
const PathDrawer = {
  drawPathByData(drawer, data) {
    if (!data) return;
    let command;
    let i = 0,
      len = data.length;
    while (i < len) {
      command = data[i];
      switch (command) {
        case M$2:
          drawer.moveTo(data[i + 1], data[i + 2]);
          i += 3;
          break;
        case L$3:
          drawer.lineTo(data[i + 1], data[i + 2]);
          i += 3;
          break;
        case C$2:
          drawer.bezierCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
          i += 7;
          break;
        case Q$1:
          drawer.quadraticCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
          i += 5;
          break;
        case Z$2:
          drawer.closePath();
          i += 1;
          break;
        case N$1:
          drawer.rect(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
          i += 5;
          break;
        case D$1:
          drawer.roundRect(data[i + 1], data[i + 2], data[i + 3], data[i + 4], [data[i + 5], data[i + 6], data[i + 7], data[i + 8]]);
          i += 9;
          break;
        case X$1:
          drawer.roundRect(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5]);
          i += 6;
          break;
        case G$1:
          drawer.ellipse(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5] * OneRadian, data[i + 6] * OneRadian, data[i + 7] * OneRadian, data[i + 8]);
          i += 9;
          break;
        case F$2:
          drawer.ellipse(data[i + 1], data[i + 2], data[i + 3], data[i + 4], 0, 0, PI2, false);
          i += 5;
          break;
        case O$1:
          drawer.arc(data[i + 1], data[i + 2], data[i + 3], data[i + 4] * OneRadian, data[i + 5] * OneRadian, data[i + 6]);
          i += 7;
          break;
        case P$1:
          drawer.arc(data[i + 1], data[i + 2], data[i + 3], 0, PI2, false);
          i += 4;
          break;
        case U$1:
          drawer.arcTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5]);
          i += 6;
          break;
        default:
          debug$4.error(`command: ${command} [index:${i}]`, data);
          return;
      }
    }
  }
};
const {
  M: M$1,
  L: L$2,
  C: C$1,
  Q,
  Z: Z$1,
  N,
  D,
  X,
  G,
  F: F$1,
  O,
  P,
  U
} = PathCommandMap;
const {
  toTwoPointBounds,
  toTwoPointBoundsByQuadraticCurve,
  arcTo: arcTo$1,
  arc,
  ellipse
} = BezierHelper;
const {
  addPointBounds,
  copy: copy$4,
  addPoint,
  setPoint,
  addBounds,
  toBounds: toBounds$1
} = TwoPointBoundsHelper;
const debug$3 = Debug.get('PathBounds');
let radius, radiusX, radiusY;
const tempPointBounds = {};
const setPointBounds = {};
const setEndPoint = {};
const PathBounds = {
  toBounds(data, setBounds) {
    PathBounds.toTwoPointBounds(data, setPointBounds);
    toBounds$1(setPointBounds, setBounds);
  },
  toTwoPointBounds(data, setPointBounds) {
    if (!data || !data.length) return setPoint(setPointBounds, 0, 0);
    let command;
    let i = 0,
      x = 0,
      y = 0,
      x1,
      y1,
      toX,
      toY;
    const len = data.length;
    while (i < len) {
      command = data[i];
      if (i === 0) {
        if (command === Z$1 || command === C$1 || command === Q) {
          setPoint(setPointBounds, x, y);
        } else {
          setPoint(setPointBounds, data[i + 1], data[i + 2]);
        }
      }
      switch (command) {
        case M$1:
        case L$2:
          x = data[i + 1];
          y = data[i + 2];
          addPoint(setPointBounds, x, y);
          i += 3;
          break;
        case C$1:
          toX = data[i + 5];
          toY = data[i + 6];
          toTwoPointBounds(x, y, data[i + 1], data[i + 2], data[i + 3], data[i + 4], toX, toY, tempPointBounds);
          addPointBounds(setPointBounds, tempPointBounds);
          x = toX;
          y = toY;
          i += 7;
          break;
        case Q:
          x1 = data[i + 1];
          y1 = data[i + 2];
          toX = data[i + 3];
          toY = data[i + 4];
          toTwoPointBoundsByQuadraticCurve(x, y, x1, y1, toX, toY, tempPointBounds);
          addPointBounds(setPointBounds, tempPointBounds);
          x = toX;
          y = toY;
          i += 5;
          break;
        case Z$1:
          i += 1;
          break;
        case N:
          x = data[i + 1];
          y = data[i + 2];
          addBounds(setPointBounds, x, y, data[i + 3], data[i + 4]);
          i += 5;
          break;
        case D:
        case X:
          x = data[i + 1];
          y = data[i + 2];
          addBounds(setPointBounds, x, y, data[i + 3], data[i + 4]);
          i += command === D ? 9 : 6;
          break;
        case G:
          ellipse(null, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], data[i + 7], data[i + 8], tempPointBounds, setEndPoint);
          i === 0 ? copy$4(setPointBounds, tempPointBounds) : addPointBounds(setPointBounds, tempPointBounds);
          x = setEndPoint.x;
          y = setEndPoint.y;
          i += 9;
          break;
        case F$1:
          x = data[i + 1];
          y = data[i + 2];
          radiusX = data[i + 3];
          radiusY = data[i + 4];
          addBounds(setPointBounds, x - radiusX, y - radiusY, radiusX * 2, radiusY * 2);
          x += radiusX;
          i += 5;
          break;
        case O:
          arc(null, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], tempPointBounds, setEndPoint);
          i === 0 ? copy$4(setPointBounds, tempPointBounds) : addPointBounds(setPointBounds, tempPointBounds);
          x = setEndPoint.x;
          y = setEndPoint.y;
          i += 7;
          break;
        case P:
          x = data[i + 1];
          y = data[i + 2];
          radius = data[i + 3];
          addBounds(setPointBounds, x - radius, y - radius, radius * 2, radius * 2);
          x += radius;
          i += 4;
          break;
        case U:
          arcTo$1(null, x, y, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], tempPointBounds, setEndPoint);
          i === 0 ? copy$4(setPointBounds, tempPointBounds) : addPointBounds(setPointBounds, tempPointBounds);
          x = setEndPoint.x;
          y = setEndPoint.y;
          i += 6;
          break;
        default:
          debug$3.error(`command: ${command} [index:${i}]`, data);
          return;
      }
    }
  }
};
const {
  M,
  L: L$1,
  C,
  Z
} = PathCommandMap;
const {
  getCenterX,
  getCenterY
} = PointHelper;
const {
  arcTo
} = PathCommandDataHelper;
const PathCorner = {
  smooth(data, cornerRadius, _cornerSmoothing) {
    let command;
    let i = 0,
      x = 0,
      y = 0,
      startX = 0,
      startY = 0,
      secondX = 0,
      secondY = 0,
      lastX = 0,
      lastY = 0;
    const len = data.length;
    const smooth = [];
    while (i < len) {
      command = data[i];
      switch (command) {
        case M:
          startX = lastX = data[i + 1];
          startY = lastY = data[i + 2];
          i += 3;
          if (data[i] === L$1) {
            secondX = data[i + 1];
            secondY = data[i + 2];
            smooth.push(M, getCenterX(startX, secondX), getCenterY(startY, secondY));
          } else {
            smooth.push(M, startX, startY);
          }
          break;
        case L$1:
          x = data[i + 1];
          y = data[i + 2];
          i += 3;
          switch (data[i]) {
            case L$1:
              arcTo(smooth, x, y, data[i + 1], data[i + 2], cornerRadius, lastX, lastY);
              break;
            case Z:
              arcTo(smooth, x, y, startX, startY, cornerRadius, lastX, lastY);
              break;
            default:
              smooth.push(L$1, x, y);
          }
          lastX = x;
          lastY = y;
          break;
        case C:
          smooth.push(C, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
          i += 7;
          break;
        case Z:
          arcTo(smooth, startX, startY, secondX, secondY, cornerRadius, lastX, lastY);
          smooth.push(Z);
          i += 1;
          break;
      }
    }
    if (command !== Z) {
      smooth[1] = startX;
      smooth[2] = startY;
    }
    return smooth;
  }
};
PathHelper.creator = new PathCreator();
PathHelper.parse = PathConvert.parse;
PathHelper.convertToCanvasData = PathConvert.toCanvasData;
const pen = new PathCreator();
const {
  drawRoundRect
} = RectHelper;
function roundRect(drawer) {
  if (drawer && !drawer.roundRect) {
    drawer.roundRect = function (x, y, width, height, cornerRadius) {
      drawRoundRect(this, x, y, width, height, cornerRadius);
    };
  }
}
function canvasPatch(drawer) {
  roundRect(drawer);
}
const FileHelper = {
  opacityTypes: ['png', 'webp', 'svg'],
  upperCaseTypeMap: {},
  mineType(type) {
    if (!type || type.startsWith('image')) return type;
    if (type === 'jpg') type = 'jpeg';
    return 'image/' + type;
  },
  fileType(filename) {
    const l = filename.split('.');
    return l[l.length - 1];
  },
  isOpaqueImage(filename) {
    const type = F.fileType(filename);
    return ['jpg', 'jpeg'].some(item => item === type);
  },
  getExportOptions(options) {
    switch (typeof options) {
      case 'object':
        return options;
      case 'number':
        return {
          quality: options
        };
      case 'boolean':
        return {
          blob: options
        };
      default:
        return {};
    }
  }
};
const F = FileHelper;
F.opacityTypes.forEach(type => F.upperCaseTypeMap[type] = type.toUpperCase());
const debug$2 = Debug.get('TaskProcessor');
class TaskItem {
  constructor(task) {
    this.parallel = true;
    this.time = 1;
    this.id = IncrementId.create(IncrementId.TASK);
    this.task = task;
  }
  run() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.task && !this.isComplete && this.parent.running) yield this.task();
      } catch (error) {
        debug$2.error(error);
      }
    });
  }
  complete() {
    this.isComplete = true;
    this.parent = null;
    this.task = null;
  }
  cancel() {
    this.isCancel = true;
    this.complete();
  }
}
class TaskProcessor {
  get total() {
    return this.list.length + this.delayNumber;
  }
  get finishedIndex() {
    return this.isComplete ? 0 : this.index + this.parallelSuccessNumber;
  }
  get remain() {
    return this.isComplete ? this.total : this.total - this.finishedIndex;
  }
  get percent() {
    const {
      total
    } = this;
    let totalTime = 0,
      runTime = 0;
    for (let i = 0; i < total; i++) {
      if (i <= this.finishedIndex) {
        runTime += this.list[i].time;
        if (i === this.finishedIndex) totalTime = runTime;
      } else {
        totalTime += this.list[i].time;
      }
    }
    return this.isComplete ? 1 : runTime / totalTime;
  }
  constructor(config) {
    this.config = {
      parallel: 6
    };
    this.list = [];
    this.running = false;
    this.isComplete = true;
    this.index = 0;
    this.delayNumber = 0;
    if (config) DataHelper.assign(this.config, config);
    this.empty();
  }
  add(taskCallback, options) {
    let start, parallel, time, delay;
    const task = new TaskItem(taskCallback);
    task.parent = this;
    if (typeof options === 'number') {
      delay = options;
    } else if (options) {
      parallel = options.parallel;
      start = options.start;
      time = options.time;
      delay = options.delay;
    }
    if (time) task.time = time;
    if (parallel === false) task.parallel = false;
    if (delay === undefined) {
      this.push(task, start);
    } else {
      this.delayNumber++;
      setTimeout(() => {
        if (this.delayNumber) {
          this.delayNumber--;
          this.push(task, start);
        }
      }, delay);
    }
    this.isComplete = false;
    return task;
  }
  push(task, start) {
    this.list.push(task);
    if (start !== false && !this.timer) {
      this.timer = setTimeout(() => this.start());
    }
  }
  empty() {
    this.index = 0;
    this.parallelSuccessNumber = 0;
    this.list = [];
    this.parallelList = [];
    this.delayNumber = 0;
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.isComplete = false;
      this.run();
    }
  }
  pause() {
    clearTimeout(this.timer);
    this.timer = null;
    this.running = false;
  }
  resume() {
    this.start();
  }
  skip() {
    this.index++;
    this.resume();
  }
  stop() {
    this.isComplete = true;
    this.list.forEach(task => {
      if (!task.isComplete) task.cancel();
    });
    this.pause();
    this.empty();
  }
  run() {
    if (!this.running) return;
    this.setParallelList();
    if (this.parallelList.length > 1) {
      this.runParallelTasks();
    } else {
      this.remain ? this.runTask() : this.onComplete();
    }
  }
  runTask() {
    const task = this.list[this.index];
    if (!task) {
      this.nextTask();
      return;
    }
    task.run().then(() => {
      this.onTask(task);
      this.index++;
      this.nextTask();
    }).catch(error => {
      this.onError(error);
    });
  }
  runParallelTasks() {
    this.parallelList.forEach(task => this.runParallelTask(task));
  }
  runParallelTask(task) {
    task.run().then(() => {
      this.onTask(task);
      this.fillParallelTask();
    }).catch(error => {
      this.onParallelError(error);
    });
  }
  nextTask() {
    if (this.total === this.finishedIndex) {
      this.onComplete();
    } else {
      this.timer = setTimeout(() => this.run());
    }
  }
  setParallelList() {
    let task;
    this.parallelList = [];
    this.parallelSuccessNumber = 0;
    let end = this.index + this.config.parallel;
    if (end > this.list.length) end = this.list.length;
    for (let i = this.index; i < end; i++) {
      task = this.list[i];
      if (task.parallel) {
        this.parallelList.push(task);
      } else {
        break;
      }
    }
  }
  fillParallelTask() {
    let task;
    const parallelList = this.parallelList;
    this.parallelSuccessNumber++;
    parallelList.pop();
    const parallelWaitNumber = parallelList.length;
    const nextIndex = this.finishedIndex + parallelWaitNumber;
    if (parallelList.length) {
      if (!this.running) return;
      if (nextIndex < this.total) {
        task = this.list[nextIndex];
        if (task && task.parallel) {
          parallelList.push(task);
          this.runParallelTask(task);
        }
      }
    } else {
      this.index += this.parallelSuccessNumber;
      this.parallelSuccessNumber = 0;
      this.nextTask();
    }
  }
  onComplete() {
    this.stop();
    if (this.config.onComplete) this.config.onComplete();
  }
  onTask(task) {
    task.complete();
    if (this.config.onTask) this.config.onTask();
  }
  onParallelError(error) {
    this.parallelList.forEach(task => {
      task.parallel = false;
    });
    this.parallelList.length = 0;
    this.parallelSuccessNumber = 0;
    this.onError(error);
  }
  onError(error) {
    this.pause();
    if (this.config.onError) this.config.onError(error);
  }
  destroy() {
    this.stop();
  }
}
const ImageManager = {
  map: {},
  recycledList: [],
  tasker: new TaskProcessor(),
  patternTasker: new TaskProcessor(),
  get isComplete() {
    return I.tasker.isComplete;
  },
  get(config) {
    let image = I.map[config.url];
    if (!image) {
      image = Creator.image(config);
      I.map[config.url] = image;
    }
    image.use++;
    return image;
  },
  recycle(image) {
    image.use--;
    setTimeout(() => {
      if (!image.use) I.recycledList.push(image);
    });
  },
  clearRecycled() {
    const list = I.recycledList;
    if (list.length > 100) {
      list.forEach(image => {
        if (!image.use && image.url) {
          delete I.map[image.url];
          image.destroy();
        }
      });
      list.length = 0;
    }
  },
  hasOpacityPixel(config) {
    return FileHelper.opacityTypes.some(item => I.isFormat(item, config));
  },
  isFormat(format, config) {
    if (config.format === format) return true;
    const {
      url
    } = config;
    if (url.startsWith('data:')) {
      if (url.startsWith('data:' + FileHelper.mineType(format))) return true;
    } else {
      if (url.includes('.' + format) || url.includes('.' + FileHelper.upperCaseTypeMap[format])) return true;
    }
    return false;
  },
  destroy() {
    I.map = {};
    I.recycledList = [];
  }
};
const I = ImageManager;
const {
  IMAGE,
  create: create$1
} = IncrementId;
class LeaferImage {
  get url() {
    return this.config.url;
  }
  get completed() {
    return this.ready || !!this.error;
  }
  constructor(config) {
    this.use = 0;
    this.waitComplete = [];
    this.innerId = create$1(IMAGE);
    this.config = config || {
      url: ''
    };
    this.isSVG = ImageManager.isFormat('svg', config);
    this.hasOpacityPixel = ImageManager.hasOpacityPixel(config);
  }
  load(onSuccess, onError) {
    if (!this.loading) {
      this.loading = true;
      ImageManager.tasker.add(() => __awaiter(this, void 0, void 0, function* () {
        return yield Platform.origin.loadImage(this.url).then(img => {
          this.ready = true;
          this.width = img.naturalWidth || img.width;
          this.height = img.naturalHeight || img.height;
          this.view = img;
          this.onComplete(true);
        }).catch(e => {
          this.error = e;
          this.onComplete(false);
        });
      }));
    }
    this.waitComplete.push(onSuccess, onError);
    return this.waitComplete.length - 2;
  }
  unload(index, stopEvent) {
    const l = this.waitComplete;
    if (stopEvent) {
      const error = l[index + 1];
      if (error) error({
        type: 'stop'
      });
    }
    l[index] = l[index + 1] = undefined;
  }
  onComplete(isSuccess) {
    let odd;
    this.waitComplete.forEach((item, index) => {
      odd = index % 2;
      if (item) {
        if (isSuccess) {
          if (!odd) item(this);
        } else {
          if (odd) item(this.error);
        }
      }
    });
    this.waitComplete.length = 0;
    this.loading = false;
  }
  getCanvas(width, height, opacity, _filters) {
    width || (width = this.width);
    height || (height = this.height);
    if (this.cache) {
      let {
        params,
        data
      } = this.cache;
      for (let i in params) {
        if (params[i] !== arguments[i]) {
          data = null;
          break;
        }
      }
      if (data) return data;
    }
    const canvas = Platform.origin.createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    if (opacity) ctx.globalAlpha = opacity;
    ctx.drawImage(this.view, 0, 0, width, height);
    this.cache = this.use > 1 ? {
      data: canvas,
      params: arguments
    } : null;
    return canvas;
  }
  getPattern(canvas, repeat, transform, paint) {
    const pattern = Platform.canvas.createPattern(canvas, repeat);
    try {
      if (transform && pattern.setTransform) {
        pattern.setTransform(transform);
        transform = null;
      }
    } catch (_a) {}
    if (paint) paint.transform = transform;
    return pattern;
  }
  destroy() {
    this.config = {
      url: ''
    };
    this.cache = null;
    this.waitComplete.length = 0;
  }
}
function defineKey(target, key, descriptor, noConfigurable) {
  if (!noConfigurable) descriptor.configurable = descriptor.enumerable = true;
  Object.defineProperty(target, key, descriptor);
}
function getDescriptor(object, name) {
  return Object.getOwnPropertyDescriptor(object, name);
}
function getNames(object) {
  return Object.getOwnPropertyNames(object);
}
function decorateLeafAttr(defaultValue, descriptorFn) {
  return (target, key) => defineLeafAttr(target, key, defaultValue, descriptorFn && descriptorFn(key));
}
function attr(partDescriptor) {
  return partDescriptor;
}
function defineLeafAttr(target, key, defaultValue, partDescriptor) {
  const defaultDescriptor = {
    get() {
      return this.__getAttr(key);
    },
    set(value) {
      this.__setAttr(key, value);
    }
  };
  defineKey(target, key, Object.assign(defaultDescriptor, partDescriptor || {}));
  defineDataProcessor(target, key, defaultValue);
}
function dataType(defaultValue) {
  return decorateLeafAttr(defaultValue);
}
function positionType(defaultValue, checkFiniteNumber) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value, checkFiniteNumber) && (this.__layout.matrixChanged || this.__layout.matrixChange());
    }
  }));
}
function autoLayoutType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      if (this.__setAttr(key, value)) {
        this.__layout.matrixChanged || this.__layout.matrixChange();
        this.__hasAutoLayout = !!value;
        if (!this.__local) this.__layout.createLocal();
      }
    }
  }));
}
function scaleType(defaultValue, checkFiniteNumber) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value, checkFiniteNumber) && (this.__layout.scaleChanged || this.__layout.scaleChange());
    }
  }));
}
function rotationType(defaultValue, checkFiniteNumber) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value, checkFiniteNumber) && (this.__layout.rotationChanged || this.__layout.rotationChange());
    }
  }));
}
function boundsType(defaultValue, checkFiniteNumber) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value, checkFiniteNumber) && doBoundsType(this);
    }
  }));
}
function naturalBoundsType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value) && (doBoundsType(this), this.__.__removeNaturalSize());
    }
  }));
}
function doBoundsType(leaf) {
  leaf.__layout.boxChanged || leaf.__layout.boxChange();
  if (leaf.__hasAutoLayout) leaf.__layout.matrixChanged || leaf.__layout.matrixChange();
}
function pathInputType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      const data = this.__;
      if (data.__pathInputed !== 2) data.__pathInputed = value ? 1 : 0;
      if (!value) data.__pathForRender = undefined;
      this.__setAttr(key, value);
      doBoundsType(this);
    }
  }));
}
const pathType = boundsType;
function affectStrokeBoundsType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value) && doStrokeType(this);
    }
  }));
}
function doStrokeType(leaf) {
  leaf.__layout.strokeChanged || leaf.__layout.strokeChange();
  if (leaf.__.__useArrow) doBoundsType(leaf);
}
const strokeType = affectStrokeBoundsType;
function affectRenderBoundsType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value);
      this.__layout.renderChanged || this.__layout.renderChange();
    }
  }));
}
function surfaceType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value) && (this.__layout.surfaceChanged || this.__layout.surfaceChange());
    }
  }));
}
function opacityType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value) && (this.__layout.opacityChanged || this.__layout.opacityChange());
    }
  }));
}
function visibleType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      const oldValue = this.visible;
      if (this.__setAttr(key, value)) {
        this.__layout.opacityChanged || this.__layout.opacityChange();
        if (oldValue === 0 || value === 0) doBoundsType(this);
      }
    }
  }));
}
function sortType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      if (this.__setAttr(key, value)) {
        this.__layout.surfaceChanged || this.__layout.surfaceChange();
        this.waitParent(() => {
          this.parent.__layout.childrenSortChange();
        });
      }
    }
  }));
}
function maskType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      if (this.__setAttr(key, value)) {
        this.__layout.boxChanged || this.__layout.boxChange();
        this.waitParent(() => {
          this.parent.__updateMask(value);
        });
      }
    }
  }));
}
function eraserType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value) && this.waitParent(() => {
        this.parent.__updateEraser(value);
      });
    }
  }));
}
function hitType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      if (this.__setAttr(key, value)) {
        this.__layout.hitCanvasChanged = true;
        if (Debug.showHitView) {
          this.__layout.surfaceChanged || this.__layout.surfaceChange();
        }
        if (this.leafer) this.leafer.updateCursor();
      }
    }
  }));
}
function cursorType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value);
      if (this.leafer) this.leafer.updateCursor();
    }
  }));
}
function dataProcessor(processor) {
  return (target, _key) => {
    defineKey(target, '__DataProcessor', {
      get() {
        return processor;
      }
    });
  };
}
function layoutProcessor(processor) {
  return (target, _key) => {
    defineKey(target, '__LayoutProcessor', {
      get() {
        return processor;
      }
    });
  };
}
function getSetMethodName(key) {
  return 'set' + key.charAt(0).toUpperCase() + key.slice(1);
}
function defineDataProcessor(target, key, defaultValue) {
  const data = target.__DataProcessor.prototype;
  const computedKey = '_' + key;
  const setMethodName = getSetMethodName(key);
  const property = {
    get() {
      const v = this[computedKey];
      return v === undefined ? defaultValue : v;
    },
    set(value) {
      this[computedKey] = value;
    }
  };
  if (defaultValue === undefined) {
    property.get = function () {
      return this[computedKey];
    };
  } else if (key === 'width') {
    property.get = function () {
      const v = this[computedKey];
      if (v === undefined) {
        const t = this;
        return t._height && t.__naturalWidth && t.__useNaturalRatio ? t._height * t.__naturalWidth / t.__naturalHeight : t.__naturalWidth || defaultValue;
      } else {
        return v;
      }
    };
  } else if (key === 'height') {
    property.get = function () {
      const v = this[computedKey];
      if (v === undefined) {
        const t = this;
        return t._width && t.__naturalHeight && t.__useNaturalRatio ? t._width * t.__naturalHeight / t.__naturalWidth : t.__naturalHeight || defaultValue;
      } else {
        return v;
      }
    };
  }
  let descriptor,
    find = data;
  while (!descriptor && find) {
    descriptor = getDescriptor(find, key);
    find = find.__proto__;
  }
  if (descriptor && descriptor.set) property.set = descriptor.set;
  if (data[setMethodName]) {
    property.set = data[setMethodName];
    delete data[setMethodName];
  }
  defineKey(data, key, property);
}
const debug$1 = new Debug('rewrite');
const list = [];
const excludeNames = ['destroy', 'constructor'];
function rewrite(method) {
  return (target, key) => {
    list.push({
      name: target.constructor.name + '.' + key,
      run: () => {
        target[key] = method;
      }
    });
  };
}
function rewriteAble() {
  return _target => {
    doRewrite();
  };
}
function doRewrite(error) {
  if (list.length) {
    list.forEach(item => {
      if (error) debug$1.error(item.name, '需在Class上装饰@rewriteAble()');
      item.run();
    });
    list.length = 0;
  }
}
setTimeout(() => doRewrite(true));
function useModule(module, exclude) {
  return target => {
    const names = module.prototype ? getNames(module.prototype) : Object.keys(module);
    names.forEach(name => {
      if (!excludeNames.includes(name) && (!exclude || !exclude.includes(name))) {
        if (module.prototype) {
          const d = getDescriptor(module.prototype, name);
          if (d.writable) target.prototype[name] = module.prototype[name];
        } else {
          target.prototype[name] = module[name];
        }
      }
    });
  };
}
function registerUI() {
  return target => {
    UICreator.register(target);
  };
}
function registerUIEvent() {
  return target => {
    EventCreator.register(target);
  };
}
const {
  copy: copy$3,
  toInnerPoint: toInnerPoint$1,
  scaleOfOuter,
  rotateOfOuter,
  skewOfOuter,
  multiplyParent: multiplyParent$2,
  divideParent,
  getLayout
} = MatrixHelper;
const matrix = {};
const LeafHelper = {
  updateAllMatrix(leaf, checkAutoLayout, waitAutoLayout) {
    if (checkAutoLayout && leaf.__hasAutoLayout && leaf.__layout.matrixChanged) waitAutoLayout = true;
    updateMatrix$1(leaf, checkAutoLayout, waitAutoLayout);
    if (leaf.isBranch) {
      const {
        children
      } = leaf;
      for (let i = 0, len = children.length; i < len; i++) {
        updateAllMatrix$1(children[i], checkAutoLayout, waitAutoLayout);
      }
    }
  },
  updateMatrix(leaf, checkAutoLayout, waitAutoLayout) {
    const layout = leaf.__layout;
    if (checkAutoLayout) {
      if (waitAutoLayout) {
        layout.waitAutoLayout = true;
        if (leaf.__hasAutoLayout) layout.matrixChanged = false;
      }
    } else if (layout.waitAutoLayout) {
      layout.waitAutoLayout = false;
    }
    if (layout.matrixChanged) leaf.__updateLocalMatrix();
    if (!layout.waitAutoLayout) leaf.__updateWorldMatrix();
  },
  updateBounds(leaf) {
    const layout = leaf.__layout;
    if (layout.boundsChanged) leaf.__updateLocalBounds();
    if (!layout.waitAutoLayout) leaf.__updateWorldBounds();
  },
  updateAllWorldOpacity(leaf) {
    leaf.__updateWorldOpacity();
    if (leaf.isBranch) {
      const {
        children
      } = leaf;
      for (let i = 0, len = children.length; i < len; i++) {
        updateAllWorldOpacity(children[i]);
      }
    }
  },
  updateAllChange(leaf) {
    updateAllWorldOpacity(leaf);
    leaf.__updateChange();
    if (leaf.isBranch) {
      const {
        children
      } = leaf;
      for (let i = 0, len = children.length; i < len; i++) {
        updateAllChange(children[i]);
      }
    }
  },
  worldHittable(t) {
    while (t) {
      if (!t.__.hittable) return false;
      t = t.parent;
    }
    return true;
  },
  moveWorld(t, x, y = 0) {
    const local = typeof x === 'object' ? Object.assign({}, x) : {
      x,
      y
    };
    if (t.parent) toInnerPoint$1(t.parent.worldTransform, local, local, true);
    L.moveLocal(t, local.x, local.y);
  },
  moveLocal(t, x, y = 0) {
    if (typeof x === 'object') {
      t.x += x.x;
      t.y += x.y;
    } else {
      t.x += x;
      t.y += y;
    }
  },
  zoomOfWorld(t, origin, scaleX, scaleY, resize) {
    L.zoomOfLocal(t, getTempLocal(t, origin), scaleX, scaleY, resize);
  },
  zoomOfLocal(t, origin, scaleX, scaleY = scaleX, resize) {
    copy$3(matrix, t.__localMatrix);
    scaleOfOuter(matrix, origin, scaleX, scaleY);
    moveByMatrix(t, matrix);
    t.scaleResize(scaleX, scaleY, resize !== true);
  },
  rotateOfWorld(t, origin, angle) {
    L.rotateOfLocal(t, getTempLocal(t, origin), angle);
  },
  rotateOfLocal(t, origin, angle) {
    copy$3(matrix, t.__localMatrix);
    rotateOfOuter(matrix, origin, angle);
    moveByMatrix(t, matrix);
    t.rotation = MathHelper.formatRotation(t.rotation + angle);
  },
  skewOfWorld(t, origin, skewX, skewY, resize) {
    L.skewOfLocal(t, getTempLocal(t, origin), skewX, skewY, resize);
  },
  skewOfLocal(t, origin, skewX, skewY = 0, resize) {
    copy$3(matrix, t.__localMatrix);
    skewOfOuter(matrix, origin, skewX, skewY);
    L.setTransform(t, matrix, resize);
  },
  transformWorld(t, transform, resize) {
    copy$3(matrix, t.worldTransform);
    multiplyParent$2(matrix, transform);
    if (t.parent) divideParent(matrix, t.parent.worldTransform);
    L.setTransform(t, matrix, resize);
  },
  transform(t, transform, resize) {
    copy$3(matrix, t.localTransform);
    multiplyParent$2(matrix, transform);
    L.setTransform(t, matrix, resize);
  },
  setTransform(t, transform, resize) {
    const layout = getLayout(transform);
    if (resize) {
      const scaleX = layout.scaleX / t.scaleX;
      const scaleY = layout.scaleY / t.scaleY;
      delete layout.scaleX;
      delete layout.scaleY;
      t.set(layout);
      t.scaleResize(scaleX, scaleY, resize !== true);
    } else {
      t.set(layout);
    }
  },
  getLocalOrigin(t, origin) {
    return PointHelper.tempToOuterOf(L.getInnerOrigin(t, origin), t.localTransform);
  },
  getInnerOrigin(t, origin) {
    if (typeof origin === 'string') AroundHelper.toPoint(origin, t.boxBounds, origin = {});
    return origin;
  },
  getRelativeWorld(t, relative, temp) {
    copy$3(matrix, t.worldTransform);
    divideParent(matrix, relative.worldTransform);
    return temp ? matrix : Object.assign({}, matrix);
  },
  drop(t, parent, index, resize) {
    t.setTransform(L.getRelativeWorld(t, parent, true), resize);
    parent.add(t, index);
  },
  hasParent(p, parent) {
    if (!parent) return false;
    while (p) {
      if (parent === p) return true;
      p = p.parent;
    }
  }
};
const L = LeafHelper;
const {
  updateAllMatrix: updateAllMatrix$1,
  updateMatrix: updateMatrix$1,
  updateAllWorldOpacity,
  updateAllChange
} = L;
function moveByMatrix(t, matrix) {
  const {
    e,
    f
  } = t.__localMatrix;
  t.x += matrix.e - e;
  t.y += matrix.f - f;
}
function getTempLocal(t, world) {
  t.__layout.update();
  return t.parent ? PointHelper.tempToInnerOf(world, t.parent.__world) : world;
}
const LeafBoundsHelper = {
  worldBounds(target) {
    return target.__world;
  },
  localBoxBounds(target) {
    return target.__.eraser || target.__.visible === 0 ? null : target.__local || target.__layout;
  },
  localStrokeBounds(target) {
    return target.__.eraser || target.__.visible === 0 ? null : target.__layout.localStrokeBounds;
  },
  localRenderBounds(target) {
    return target.__.eraser || target.__.visible === 0 ? null : target.__layout.localRenderBounds;
  },
  maskLocalBoxBounds(target) {
    return target.__.mask ? target.__localBoxBounds : null;
  },
  maskLocalStrokeBounds(target) {
    return target.__.mask ? target.__layout.localStrokeBounds : null;
  },
  maskLocalRenderBounds(target) {
    return target.__.mask ? target.__layout.localRenderBounds : null;
  },
  excludeRenderBounds(child, options) {
    if (options.bounds && !options.bounds.hit(child.__world, options.matrix)) return true;
    if (options.hideBounds && options.hideBounds.includes(child.__world, options.matrix)) return true;
    return false;
  }
};
const {
  updateBounds: updateBounds$1
} = LeafHelper;
const BranchHelper = {
  sort(a, b) {
    return a.__.zIndex === b.__.zIndex ? a.__tempNumber - b.__tempNumber : a.__.zIndex - b.__.zIndex;
  },
  pushAllChildBranch(branch, leafList) {
    branch.__tempNumber = 1;
    if (branch.__.__childBranchNumber) {
      const {
        children
      } = branch;
      for (let i = 0, len = children.length; i < len; i++) {
        branch = children[i];
        if (branch.isBranch) {
          branch.__tempNumber = 1;
          leafList.add(branch);
          pushAllChildBranch(branch, leafList);
        }
      }
    }
  },
  pushAllParent(leaf, leafList) {
    const {
      keys
    } = leafList;
    if (keys) {
      while (leaf.parent) {
        if (keys[leaf.parent.innerId] === undefined) {
          leafList.add(leaf.parent);
          leaf = leaf.parent;
        } else {
          break;
        }
      }
    } else {
      while (leaf.parent) {
        leafList.add(leaf.parent);
        leaf = leaf.parent;
      }
    }
  },
  pushAllBranchStack(branch, pushList) {
    let start = pushList.length;
    const {
      children
    } = branch;
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].isBranch) {
        pushList.push(children[i]);
      }
    }
    for (let i = start, len = pushList.length; i < len; i++) {
      pushAllBranchStack(pushList[i], pushList);
    }
  },
  updateBounds(branch, exclude) {
    const branchStack = [branch];
    pushAllBranchStack(branch, branchStack);
    updateBoundsByBranchStack(branchStack, exclude);
  },
  updateBoundsByBranchStack(branchStack, exclude) {
    let branch, children;
    for (let i = branchStack.length - 1; i > -1; i--) {
      branch = branchStack[i];
      children = branch.children;
      for (let j = 0, len = children.length; j < len; j++) {
        updateBounds$1(children[j]);
      }
      if (exclude && exclude === branch) continue;
      updateBounds$1(branch);
    }
  }
};
const {
  pushAllChildBranch,
  pushAllBranchStack,
  updateBoundsByBranchStack
} = BranchHelper;
const WaitHelper = {
  run(wait) {
    if (wait && wait.length) {
      const len = wait.length;
      for (let i = 0; i < len; i++) {
        wait[i]();
      }
      wait.length === len ? wait.length = 0 : wait.splice(0, len);
    }
  }
};
const {
  getRelativeWorld: getRelativeWorld$1
} = LeafHelper;
const {
  toOuterOf: toOuterOf$2,
  getPoints,
  copy: copy$2
} = BoundsHelper;
const localContent = '_localContentBounds';
const worldContent = '_worldContentBounds',
  worldBox = '_worldBoxBounds',
  worldStroke = '_worldStrokeBounds';
class LeafLayout {
  get contentBounds() {
    return this._contentBounds || this.boxBounds;
  }
  set contentBounds(bounds) {
    this._contentBounds = bounds;
  }
  get strokeBounds() {
    return this._strokeBounds || this.boxBounds;
  }
  get renderBounds() {
    return this._renderBounds || this.boxBounds;
  }
  get localContentBounds() {
    toOuterOf$2(this.contentBounds, this.leaf.__localMatrix, this[localContent] || (this[localContent] = {}));
    return this[localContent];
  }
  get localStrokeBounds() {
    return this._localStrokeBounds || this;
  }
  get localRenderBounds() {
    return this._localRenderBounds || this;
  }
  get worldContentBounds() {
    toOuterOf$2(this.contentBounds, this.leaf.__world, this[worldContent] || (this[worldContent] = {}));
    return this[worldContent];
  }
  get worldBoxBounds() {
    toOuterOf$2(this.boxBounds, this.leaf.__world, this[worldBox] || (this[worldBox] = {}));
    return this[worldBox];
  }
  get worldStrokeBounds() {
    toOuterOf$2(this.strokeBounds, this.leaf.__world, this[worldStroke] || (this[worldStroke] = {}));
    return this[worldStroke];
  }
  get a() {
    return 1;
  }
  get b() {
    return 0;
  }
  get c() {
    return 0;
  }
  get d() {
    return 1;
  }
  get e() {
    return this.leaf.__.x;
  }
  get f() {
    return this.leaf.__.y;
  }
  get x() {
    return this.e + this.boxBounds.x;
  }
  get y() {
    return this.f + this.boxBounds.y;
  }
  get width() {
    return this.boxBounds.width;
  }
  get height() {
    return this.boxBounds.height;
  }
  constructor(leaf) {
    this.leaf = leaf;
    this.boxBounds = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (this.leaf.__local) this._localRenderBounds = this._localStrokeBounds = this.leaf.__local;
    this.boxChange();
    this.matrixChange();
  }
  createLocal() {
    const local = this.leaf.__local = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (!this._localStrokeBounds) this._localStrokeBounds = local;
    if (!this._localRenderBounds) this._localRenderBounds = local;
  }
  update() {
    const {
      leafer
    } = this.leaf;
    if (leafer) {
      if (leafer.ready) {
        if (leafer.watcher.changed) leafer.layouter.layout();
      } else {
        leafer.start();
      }
    } else {
      let root = this.leaf;
      while (root.parent && !root.parent.leafer) {
        root = root.parent;
      }
      Platform.layout(root);
    }
  }
  getTransform(relative = 'world') {
    this.update();
    const {
      leaf
    } = this;
    switch (relative) {
      case 'world':
        return leaf.__world;
      case 'local':
        return leaf.__localMatrix;
      case 'inner':
        return MatrixHelper.defaultMatrix;
      case 'page':
        relative = leaf.zoomLayer;
      default:
        return getRelativeWorld$1(leaf, relative);
    }
  }
  getBounds(type, relative = 'world') {
    this.update();
    switch (relative) {
      case 'world':
        return this.getWorldBounds(type);
      case 'local':
        return this.getLocalBounds(type);
      case 'inner':
        return this.getInnerBounds(type);
      case 'page':
        relative = this.leaf.zoomLayer;
      default:
        return new Bounds(this.getInnerBounds(type)).toOuterOf(this.getTransform(relative));
    }
  }
  getInnerBounds(type = 'box') {
    switch (type) {
      case 'render':
        return this.renderBounds;
      case 'content':
        if (this.contentBounds) return this.contentBounds;
      case 'box':
        return this.boxBounds;
      case 'stroke':
        return this.strokeBounds;
    }
  }
  getLocalBounds(type = 'box') {
    switch (type) {
      case 'render':
        return this.localRenderBounds;
      case 'stroke':
        return this.localStrokeBounds;
      case 'content':
        if (this.contentBounds) return this.localContentBounds;
      case 'box':
        return this.leaf.__localBoxBounds;
    }
  }
  getWorldBounds(type = 'box') {
    switch (type) {
      case 'render':
        return this.leaf.__world;
      case 'stroke':
        return this.worldStrokeBounds;
      case 'content':
        if (this.contentBounds) return this.worldContentBounds;
      case 'box':
        return this.worldBoxBounds;
    }
  }
  getLayoutBounds(type, relative = 'world', unscale) {
    const {
      leaf
    } = this;
    let point,
      matrix,
      bounds = this.getInnerBounds(type);
    switch (relative) {
      case 'world':
        point = leaf.getWorldPoint(bounds);
        matrix = leaf.__world;
        break;
      case 'local':
        point = leaf.getLocalPointByInner(bounds);
        matrix = leaf.__localMatrix;
        break;
      case 'inner':
        point = bounds;
        matrix = MatrixHelper.defaultMatrix;
        break;
      case 'page':
        relative = leaf.zoomLayer;
      default:
        point = leaf.getWorldPoint(bounds, relative);
        matrix = getRelativeWorld$1(leaf, relative, true);
    }
    const layoutBounds = MatrixHelper.getLayout(matrix);
    copy$2(layoutBounds, bounds);
    PointHelper.copy(layoutBounds, point);
    if (unscale) {
      const {
        scaleX,
        scaleY
      } = layoutBounds;
      const uScaleX = Math.abs(scaleX);
      const uScaleY = Math.abs(scaleY);
      if (uScaleX !== 1 || uScaleY !== 1) {
        layoutBounds.scaleX /= uScaleX;
        layoutBounds.scaleY /= uScaleY;
        layoutBounds.width *= uScaleX;
        layoutBounds.height *= uScaleY;
      }
    }
    return layoutBounds;
  }
  getLayoutPoints(type, relative = 'world') {
    const {
      leaf
    } = this;
    const points = getPoints(this.getInnerBounds(type));
    let relativeLeaf;
    switch (relative) {
      case 'world':
        relativeLeaf = null;
        break;
      case 'local':
        relativeLeaf = leaf.parent;
        break;
      case 'inner':
        break;
      case 'page':
        relative = leaf.zoomLayer;
      default:
        relativeLeaf = relative;
    }
    if (relativeLeaf !== undefined) points.forEach(point => leaf.innerToWorld(point, null, false, relativeLeaf));
    return points;
  }
  shrinkContent() {
    const {
      x,
      y,
      width,
      height
    } = this.boxBounds;
    this._contentBounds = {
      x,
      y,
      width,
      height
    };
  }
  spreadStroke() {
    const {
      x,
      y,
      width,
      height
    } = this.strokeBounds;
    this._strokeBounds = {
      x,
      y,
      width,
      height
    };
    this._localStrokeBounds = {
      x,
      y,
      width,
      height
    };
    if (!this.renderSpread) this.spreadRenderCancel();
  }
  spreadRender() {
    const {
      x,
      y,
      width,
      height
    } = this.renderBounds;
    this._renderBounds = {
      x,
      y,
      width,
      height
    };
    this._localRenderBounds = {
      x,
      y,
      width,
      height
    };
  }
  shrinkContentCancel() {
    this._contentBounds = undefined;
  }
  spreadStrokeCancel() {
    const same = this.renderBounds === this.strokeBounds;
    this._strokeBounds = this.boxBounds;
    this._localStrokeBounds = this.leaf.__localBoxBounds;
    if (same) this.spreadRenderCancel();
  }
  spreadRenderCancel() {
    this._renderBounds = this._strokeBounds;
    this._localRenderBounds = this._localStrokeBounds;
  }
  boxChange() {
    this.boxChanged = true;
    this.localBoxChanged || this.localBoxChange();
    this.hitCanvasChanged = true;
  }
  localBoxChange() {
    this.localBoxChanged = true;
    this.boundsChanged = true;
  }
  strokeChange() {
    this.strokeChanged = true;
    this.strokeSpread || (this.strokeSpread = 1);
    this.boundsChanged = true;
    this.hitCanvasChanged = true;
  }
  renderChange() {
    this.renderChanged = true;
    this.renderSpread || (this.renderSpread = 1);
    this.boundsChanged = true;
  }
  scaleChange() {
    this.scaleChanged = true;
    this._scaleOrRotationChange();
  }
  rotationChange() {
    this.rotationChanged = true;
    this.affectRotation = true;
    this._scaleOrRotationChange();
  }
  _scaleOrRotationChange() {
    this.affectScaleOrRotation = true;
    this.matrixChange();
    if (!this.leaf.__local) this.createLocal();
  }
  matrixChange() {
    this.matrixChanged = true;
    this.localBoxChanged || this.localBoxChange();
  }
  surfaceChange() {
    this.surfaceChanged = true;
  }
  opacityChange() {
    this.opacityChanged = true;
    this.surfaceChanged || this.surfaceChange();
  }
  childrenSortChange() {
    if (!this.childrenSortChanged) {
      this.childrenSortChanged = true;
      this.leaf.forceUpdate('surface');
    }
  }
  destroy() {}
}
const empty = {};
const LeafEventer = {
  on(type, listener, options) {
    let capture, once;
    if (options) {
      if (typeof options === 'boolean') {
        capture = options;
      } else {
        capture = options.capture;
        once = options.once;
      }
    }
    let events;
    const map = __getListenerMap(this, capture, true);
    const typeList = typeof type === 'string' ? type.split(' ') : type;
    const item = once ? {
      listener,
      once
    } : {
      listener
    };
    typeList.forEach(type => {
      if (type) {
        events = map[type];
        if (events) {
          if (events.findIndex(item => item.listener === listener) === -1) events.push(item);
        } else {
          map[type] = [item];
        }
      }
    });
  },
  off(type, listener, options) {
    if (type) {
      const typeList = typeof type === 'string' ? type.split(' ') : type;
      if (listener) {
        let capture;
        if (options) capture = typeof options === 'boolean' ? options : options.capture;
        let events, index;
        const map = __getListenerMap(this, capture);
        typeList.forEach(type => {
          if (type) {
            events = map[type];
            if (events) {
              index = events.findIndex(item => item.listener === listener);
              if (index > -1) events.splice(index, 1);
              if (!events.length) delete map[type];
            }
          }
        });
      } else {
        const {
          __bubbleMap: b,
          __captureMap: c
        } = this;
        typeList.forEach(type => {
          if (b) delete b[type];
          if (c) delete c[type];
        });
      }
    } else {
      this.__bubbleMap = this.__captureMap = undefined;
    }
  },
  on_(type, listener, bind, options) {
    if (bind) listener = listener.bind(bind);
    this.on(type, listener, options);
    return {
      type,
      current: this,
      listener,
      options
    };
  },
  off_(id) {
    if (!id) return;
    const list = id instanceof Array ? id : [id];
    list.forEach(item => item.current.off(item.type, item.listener, item.options));
    list.length = 0;
  },
  once(type, listener, capture) {
    this.on(type, listener, {
      once: true,
      capture
    });
  },
  emit(type, event, capture) {
    if (!event && EventCreator.has(type)) event = EventCreator.get(type, {
      type,
      target: this,
      current: this
    });
    const map = __getListenerMap(this, capture);
    const list = map[type];
    if (list) {
      let item;
      for (let i = 0, len = list.length; i < len; i++) {
        item = list[i];
        item.listener(event);
        if (item.once) {
          this.off(type, item.listener, capture);
          i--, len--;
        }
        if (event && event.isStopNow) break;
      }
    }
    this.syncEventer && this.syncEventer.emitEvent(event, capture);
  },
  emitEvent(event, capture) {
    event.current = this;
    this.emit(event.type, event, capture);
  },
  hasEvent(type, capture) {
    if (this.syncEventer && this.syncEventer.hasEvent(type, capture)) return true;
    const {
      __bubbleMap: b,
      __captureMap: c
    } = this;
    const hasB = b && b[type],
      hasC = c && c[type];
    return !!(capture === undefined ? hasB || hasC : capture ? hasC : hasB);
  }
};
function __getListenerMap(eventer, capture, create) {
  if (capture) {
    const {
      __captureMap: c
    } = eventer;
    if (c) {
      return c;
    } else {
      return create ? eventer.__captureMap = {} : empty;
    }
  } else {
    const {
      __bubbleMap: b
    } = eventer;
    if (b) {
      return b;
    } else {
      return create ? eventer.__bubbleMap = {} : empty;
    }
  }
}
class Event {
  constructor(type, target) {
    this.bubbles = false;
    this.type = type;
    if (target) this.target = target;
  }
  stopDefault() {
    this.isStopDefault = true;
    if (this.origin) Platform.event.stopDefault(this.origin);
  }
  stopNow() {
    this.isStopNow = true;
    this.isStop = true;
    if (this.origin) Platform.event.stopNow(this.origin);
  }
  stop() {
    this.isStop = true;
    if (this.origin) Platform.event.stop(this.origin);
  }
}
class ChildEvent extends Event {
  constructor(type, child, parent) {
    super(type, child);
    this.parent = parent;
    this.child = child;
  }
}
ChildEvent.ADD = 'child.add';
ChildEvent.REMOVE = 'child.remove';
ChildEvent.DESTROY = 'child.destroy';
class PropertyEvent extends Event {
  constructor(type, target, attrName, oldValue, newValue) {
    super(type, target);
    this.attrName = attrName;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
}
PropertyEvent.CHANGE = 'property.change';
PropertyEvent.LEAFER_CHANGE = 'property.leafer_change';
class ImageEvent extends Event {
  constructor(type, data) {
    super(type);
    Object.assign(this, data);
  }
}
ImageEvent.LOAD = 'image.load';
ImageEvent.LOADED = 'image.loaded';
ImageEvent.ERROR = 'image.error';
class ResizeEvent extends Event {
  get bigger() {
    if (!this.old) return true;
    const {
      width,
      height
    } = this.old;
    return this.width >= width && this.height >= height;
  }
  get smaller() {
    return !this.bigger;
  }
  get samePixelRatio() {
    if (!this.old) return true;
    return this.pixelRatio === this.old.pixelRatio;
  }
  constructor(size, oldSize) {
    if (typeof size === 'object') {
      super(ResizeEvent.RESIZE);
      Object.assign(this, size);
    } else {
      super(size);
    }
    this.old = oldSize;
  }
}
ResizeEvent.RESIZE = 'resize';
class WatchEvent extends Event {
  constructor(type, data) {
    super(type);
    this.data = data;
  }
}
WatchEvent.REQUEST = 'watch.request';
WatchEvent.DATA = 'watch.data';
class LayoutEvent extends Event {
  constructor(type, data, times) {
    super(type);
    if (data) {
      this.data = data;
      this.times = times;
    }
  }
}
LayoutEvent.CHECK_UPDATE = 'layout.check_update';
LayoutEvent.REQUEST = 'layout.request';
LayoutEvent.START = 'layout.start';
LayoutEvent.BEFORE = 'layout.before';
LayoutEvent.LAYOUT = 'layout';
LayoutEvent.AFTER = 'layout.after';
LayoutEvent.AGAIN = 'layout.again';
LayoutEvent.END = 'layout.end';
class AnimateEvent extends Event {}
AnimateEvent.FRAME = 'animate.frame';
class RenderEvent extends Event {
  constructor(type, times, bounds, options) {
    super(type);
    if (times) this.times = times;
    if (bounds) {
      this.renderBounds = bounds;
      this.renderOptions = options;
    }
  }
}
RenderEvent.REQUEST = 'render.request';
RenderEvent.START = 'render.start';
RenderEvent.BEFORE = 'render.before';
RenderEvent.RENDER = 'render';
RenderEvent.AFTER = 'render.after';
RenderEvent.AGAIN = 'render.again';
RenderEvent.END = 'render.end';
RenderEvent.NEXT = 'render.next';
class LeaferEvent extends Event {}
LeaferEvent.START = 'leafer.start';
LeaferEvent.BEFORE_READY = 'leafer.before_ready';
LeaferEvent.READY = 'leafer.ready';
LeaferEvent.AFTER_READY = 'leafer.after_ready';
LeaferEvent.VIEW_READY = 'leafer.view_ready';
LeaferEvent.VIEW_COMPLETED = 'leafer.view_completed';
LeaferEvent.STOP = 'leafer.stop';
LeaferEvent.RESTART = 'leafer.restart';
LeaferEvent.END = 'leafer.end';
const {
  isFinite: core_esm_isFinite
} = Number;
const debug = Debug.get('setAttr');
const LeafDataProxy = {
  __setAttr(name, newValue, checkFiniteNumber) {
    if (this.leafer && this.leafer.created) {
      const oldValue = this.__.__getInput(name);
      if (checkFiniteNumber && !core_esm_isFinite(newValue) && newValue !== undefined) {
        debug.warn(this.innerName, name, newValue);
        newValue = undefined;
      }
      if (typeof newValue === 'object' || oldValue !== newValue) {
        this.__[name] = newValue;
        if (this.__proxyData) this.setProxyAttr(name, newValue);
        const {
          CHANGE
        } = PropertyEvent;
        const event = new PropertyEvent(CHANGE, this, name, oldValue, newValue);
        if (this.isLeafer) {
          this.emitEvent(new PropertyEvent(PropertyEvent.LEAFER_CHANGE, this, name, oldValue, newValue));
        } else {
          if (this.hasEvent(CHANGE)) this.emitEvent(event);
        }
        this.leafer.emitEvent(event);
        return true;
      } else {
        return false;
      }
    } else {
      this.__[name] = newValue;
      if (this.__proxyData) this.setProxyAttr(name, newValue);
      return true;
    }
  },
  __getAttr(name) {
    if (this.__proxyData) return this.getProxyAttr(name);
    return this.__.__get(name);
  }
};
const {
  setLayout,
  multiplyParent: multiplyParent$1,
  translateInner,
  defaultWorld
} = MatrixHelper;
const {
  toPoint,
  tempPoint
} = AroundHelper;
const LeafMatrix = {
  __updateWorldMatrix() {
    multiplyParent$1(this.__local || this.__layout, this.parent ? this.parent.__world : defaultWorld, this.__world, !!this.__layout.affectScaleOrRotation, this.__, this.parent && this.parent.__);
  },
  __updateLocalMatrix() {
    if (this.__local) {
      const layout = this.__layout,
        local = this.__local,
        data = this.__;
      if (layout.affectScaleOrRotation) {
        if (layout.scaleChanged || layout.rotationChanged) {
          setLayout(local, data, null, layout.affectRotation);
          layout.scaleChanged = layout.rotationChanged = false;
        }
      }
      local.e = data.x + data.offsetX;
      local.f = data.y + data.offsetY;
      if (data.around || data.origin) {
        toPoint(data.around || data.origin, layout.boxBounds, tempPoint);
        translateInner(local, -tempPoint.x, -tempPoint.y, data.origin);
      }
    }
    this.__layout.matrixChanged = false;
  }
};
const {
  updateMatrix,
  updateAllMatrix
} = LeafHelper;
const {
  updateBounds
} = BranchHelper;
const {
  toOuterOf: toOuterOf$1,
  copyAndSpread,
  copy: copy$1
} = BoundsHelper;
const {
  toBounds
} = PathBounds;
const LeafBounds = {
  __updateWorldBounds() {
    toOuterOf$1(this.__layout.renderBounds, this.__world, this.__world);
    if (this.__layout.resized) {
      this.__onUpdateSize();
      this.__layout.resized = false;
    }
  },
  __updateLocalBounds() {
    const layout = this.__layout;
    if (layout.boxChanged) {
      if (!this.__.__pathInputed) this.__updatePath();
      this.__updateRenderPath();
      this.__updateBoxBounds();
      layout.resized = true;
    }
    if (layout.localBoxChanged) {
      if (this.__local) this.__updateLocalBoxBounds();
      layout.localBoxChanged = false;
      if (layout.strokeSpread) layout.strokeChanged = true;
      if (layout.renderSpread) layout.renderChanged = true;
      if (this.parent) this.parent.__layout.boxChange();
    }
    layout.boxChanged = false;
    if (layout.strokeChanged) {
      layout.strokeSpread = this.__updateStrokeSpread();
      if (layout.strokeSpread) {
        if (layout.strokeBounds === layout.boxBounds) layout.spreadStroke();
        this.__updateStrokeBounds();
        this.__updateLocalStrokeBounds();
      } else {
        layout.spreadStrokeCancel();
      }
      layout.strokeChanged = false;
      if (layout.renderSpread || layout.strokeSpread !== layout.strokeBoxSpread) layout.renderChanged = true;
      if (this.parent) this.parent.__layout.strokeChange();
      layout.resized = true;
    }
    if (layout.renderChanged) {
      layout.renderSpread = this.__updateRenderSpread();
      if (layout.renderSpread) {
        if (layout.renderBounds === layout.boxBounds || layout.renderBounds === layout.strokeBounds) layout.spreadRender();
        this.__updateRenderBounds();
        this.__updateLocalRenderBounds();
      } else {
        layout.spreadRenderCancel();
      }
      layout.renderChanged = false;
      if (this.parent) this.parent.__layout.renderChange();
    }
    layout.boundsChanged = false;
  },
  __updateLocalBoxBounds() {
    if (this.__hasAutoLayout) this.__updateAutoLayout();
    toOuterOf$1(this.__layout.boxBounds, this.__local, this.__local);
  },
  __updateLocalStrokeBounds() {
    toOuterOf$1(this.__layout.strokeBounds, this.__localMatrix, this.__layout.localStrokeBounds);
  },
  __updateLocalRenderBounds() {
    toOuterOf$1(this.__layout.renderBounds, this.__localMatrix, this.__layout.localRenderBounds);
  },
  __updateBoxBounds() {
    const b = this.__layout.boxBounds;
    const data = this.__;
    if (data.__pathInputed) {
      toBounds(data.__pathForRender, b);
    } else {
      b.x = 0;
      b.y = 0;
      b.width = data.width;
      b.height = data.height;
    }
  },
  __updateAutoLayout() {
    this.__layout.matrixChanged = true;
    if (this.isBranch) {
      if (this.leafer && this.leafer.ready) this.leafer.layouter.addExtra(this);
      if (this.__.flow) {
        if (this.__layout.boxChanged) this.__updateFlowLayout();
        updateAllMatrix(this);
        updateBounds(this, this);
        if (this.__.__autoSide) this.__updateBoxBounds();
      } else {
        updateAllMatrix(this);
        updateBounds(this, this);
      }
    } else {
      updateMatrix(this);
    }
  },
  __updateNaturalSize() {
    const {
      __: data,
      __layout: layout
    } = this;
    data.__naturalWidth = layout.boxBounds.width;
    data.__naturalHeight = layout.boxBounds.height;
  },
  __updateStrokeBounds() {
    const layout = this.__layout;
    copyAndSpread(layout.strokeBounds, layout.boxBounds, layout.strokeBoxSpread);
  },
  __updateRenderBounds() {
    const layout = this.__layout;
    layout.renderSpread > 0 ? copyAndSpread(layout.renderBounds, layout.boxBounds, layout.renderSpread) : copy$1(layout.renderBounds, layout.strokeBounds);
  }
};
const LeafRender = {
  __render(canvas, options) {
    if (this.__worldOpacity) {
      canvas.setWorld(this.__nowWorld = this.__getNowWorld(options));
      canvas.opacity = this.__.opacity;
      if (this.__.__single) {
        if (this.__.eraser === 'path') return this.__renderEraser(canvas, options);
        const tempCanvas = canvas.getSameCanvas(true, true);
        this.__draw(tempCanvas, options);
        if (this.__worldFlipped) {
          canvas.copyWorldByReset(tempCanvas, this.__nowWorld, null, this.__.__blendMode, true);
        } else {
          canvas.copyWorldToInner(tempCanvas, this.__nowWorld, this.__layout.renderBounds, this.__.__blendMode);
        }
        tempCanvas.recycle(this.__nowWorld);
      } else {
        this.__draw(canvas, options);
      }
    }
  },
  __clip(canvas, options) {
    if (this.__worldOpacity) {
      canvas.setWorld(this.__nowWorld = this.__getNowWorld(options));
      this.__drawRenderPath(canvas);
      this.__.windingRule ? canvas.clip(this.__.windingRule) : canvas.clip();
    }
  },
  __updateWorldOpacity() {
    this.__worldOpacity = this.__.visible ? this.parent ? this.parent.__worldOpacity * this.__.opacity : this.__.opacity : 0;
    if (this.__layout.opacityChanged) this.__layout.opacityChanged = false;
  }
};
const {
  excludeRenderBounds
} = LeafBoundsHelper;
const BranchRender = {
  __updateChange() {
    const {
      __layout: layout
    } = this;
    if (layout.childrenSortChanged) {
      this.__updateSortChildren();
      layout.childrenSortChanged = false;
    }
    this.__.__checkSingle();
  },
  __render(canvas, options) {
    if (this.__worldOpacity) {
      if (this.__.__single) {
        if (this.__.eraser === 'path') return this.__renderEraser(canvas, options);
        const tempCanvas = canvas.getSameCanvas(false, true);
        this.__renderBranch(tempCanvas, options);
        const nowWorld = this.__getNowWorld(options);
        canvas.opacity = this.__.opacity;
        canvas.copyWorldByReset(tempCanvas, nowWorld, nowWorld, this.__.__blendMode, true);
        tempCanvas.recycle(nowWorld);
      } else {
        this.__renderBranch(canvas, options);
      }
    }
  },
  __renderBranch(canvas, options) {
    if (this.__hasMask) {
      this.__renderMask(canvas, options);
    } else {
      const {
        children
      } = this;
      for (let i = 0, len = children.length; i < len; i++) {
        if (excludeRenderBounds(children[i], options)) continue;
        children[i].__render(canvas, options);
      }
    }
  },
  __clip(canvas, options) {
    if (this.__worldOpacity) {
      const {
        children
      } = this;
      for (let i = 0, len = children.length; i < len; i++) {
        if (excludeRenderBounds(children[i], options)) continue;
        children[i].__clip(canvas, options);
      }
    }
  }
};
const {
  LEAF,
  create
} = IncrementId;
const {
  toInnerPoint,
  toOuterPoint,
  multiplyParent
} = MatrixHelper;
const {
  toOuterOf
} = BoundsHelper;
const {
  copy
} = PointHelper;
const {
  moveLocal,
  zoomOfLocal,
  rotateOfLocal,
  skewOfLocal,
  moveWorld,
  zoomOfWorld,
  rotateOfWorld,
  skewOfWorld,
  transform,
  transformWorld,
  setTransform,
  getLocalOrigin,
  getRelativeWorld,
  drop
} = LeafHelper;
let Leaf = class Leaf {
  get tag() {
    return this.__tag;
  }
  set tag(_value) {}
  get __tag() {
    return 'Leaf';
  }
  get innerName() {
    return this.__.name || this.tag + this.innerId;
  }
  get __DataProcessor() {
    return LeafData;
  }
  get __LayoutProcessor() {
    return LeafLayout;
  }
  get isLeafer() {
    return false;
  }
  get isBranch() {
    return false;
  }
  get isBranchLeaf() {
    return false;
  }
  get __localMatrix() {
    return this.__local || this.__layout;
  }
  get __localBoxBounds() {
    return this.__local || this.__layout;
  }
  get worldTransform() {
    return this.__layout.getTransform('world');
  }
  get localTransform() {
    return this.__layout.getTransform('local');
  }
  get boxBounds() {
    return this.getBounds('box', 'inner');
  }
  get renderBounds() {
    return this.getBounds('render', 'inner');
  }
  get worldBoxBounds() {
    return this.getBounds('box');
  }
  get worldStrokeBounds() {
    return this.getBounds('stroke');
  }
  get worldRenderBounds() {
    return this.getBounds('render');
  }
  get worldOpacity() {
    this.__layout.update();
    return this.__worldOpacity;
  }
  get __worldFlipped() {
    return this.__world.scaleX < 0 || this.__world.scaleY < 0;
  }
  get __onlyHitMask() {
    return this.__hasMask && !this.__.hitChildren;
  }
  get __ignoreHitWorld() {
    return (this.__hasMask || this.__hasEraser) && this.__.hitChildren;
  }
  get __inLazyBounds() {
    const {
      leafer
    } = this;
    return leafer && leafer.created && leafer.lazyBounds.hit(this.__world);
  }
  get pathInputed() {
    return this.__.__pathInputed;
  }
  constructor(data) {
    this.innerId = create(LEAF);
    this.reset(data);
  }
  reset(data) {
    this.__world = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      scaleX: 1,
      scaleY: 1
    };
    if (data !== null) this.__local = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.__worldOpacity = 1;
    this.__ = new this.__DataProcessor(this);
    this.__layout = new this.__LayoutProcessor(this);
    if (this.__level) this.resetCustom();
    if (data) {
      if (data.__) data = data.toJSON();
      data.children ? this.set(data) : Object.assign(this, data);
    }
  }
  resetCustom() {
    this.__hasMask = this.__hasEraser = null;
    this.forceUpdate();
  }
  waitParent(item, bind) {
    if (bind) item = item.bind(bind);
    this.parent ? item() : this.__parentWait ? this.__parentWait.push(item) : this.__parentWait = [item];
  }
  waitLeafer(item, bind) {
    if (bind) item = item.bind(bind);
    this.leafer ? item() : this.__leaferWait ? this.__leaferWait.push(item) : this.__leaferWait = [item];
  }
  nextRender(item, bind, off) {
    this.leafer ? this.leafer.nextRender(item, bind, off) : this.waitLeafer(() => this.leafer.nextRender(item, bind, off));
  }
  removeNextRender(item) {
    this.nextRender(item, null, 'off');
  }
  __bindLeafer(leafer) {
    if (this.isLeafer) {
      if (leafer !== null) leafer = this;
    }
    if (this.leafer && !leafer) this.leafer.leafs--;
    this.leafer = leafer;
    if (leafer) {
      leafer.leafs++;
      this.__level = this.parent ? this.parent.__level + 1 : 1;
      if (this.__leaferWait) WaitHelper.run(this.__leaferWait);
    }
    if (this.isBranch) {
      const {
        children
      } = this;
      for (let i = 0, len = children.length; i < len; i++) {
        children[i].__bindLeafer(leafer);
      }
    }
  }
  set(_data) {}
  get(_name) {
    return undefined;
  }
  setAttr(name, value) {
    this[name] = value;
  }
  getAttr(name) {
    return this[name];
  }
  getComputedAttr(name) {
    return this.__[name];
  }
  toJSON(options) {
    if (options) this.__layout.update();
    return this.__.__getInputData(null, options);
  }
  toString(options) {
    return JSON.stringify(this.toJSON(options));
  }
  toSVG() {
    return undefined;
  }
  __SVG(_data) {}
  toHTML() {
    return undefined;
  }
  __setAttr(_attrName, _newValue) {
    return true;
  }
  __getAttr(_attrName) {
    return undefined;
  }
  setProxyAttr(_attrName, _newValue) {}
  getProxyAttr(_attrName) {
    return undefined;
  }
  find(_condition, _options) {
    return undefined;
  }
  findTag(_tag) {
    return undefined;
  }
  findOne(_condition, _options) {
    return undefined;
  }
  findId(_id) {
    return undefined;
  }
  focus(_value) {}
  updateLayout() {
    this.__layout.update();
  }
  forceUpdate(attrName) {
    if (attrName === undefined) attrName = 'width';else if (attrName === 'surface') attrName = 'blendMode';
    const value = this.__.__getInput(attrName);
    this.__[attrName] = value === undefined ? null : undefined;
    this[attrName] = value;
  }
  forceRender(_bounds) {
    this.forceUpdate('surface');
  }
  __updateWorldMatrix() {}
  __updateLocalMatrix() {}
  __updateWorldBounds() {}
  __updateLocalBounds() {}
  __updateLocalBoxBounds() {}
  __updateLocalStrokeBounds() {}
  __updateLocalRenderBounds() {}
  __updateBoxBounds() {}
  __updateContentBounds() {}
  __updateStrokeBounds() {}
  __updateRenderBounds() {}
  __updateAutoLayout() {}
  __updateFlowLayout() {}
  __updateNaturalSize() {}
  __updateStrokeSpread() {
    return 0;
  }
  __updateRenderSpread() {
    return 0;
  }
  __onUpdateSize() {}
  __updateEraser(value) {
    this.__hasEraser = value ? true : this.children.some(item => item.__.eraser);
  }
  __renderEraser(canvas, options) {
    canvas.save();
    this.__clip(canvas, options);
    const {
      renderBounds: r
    } = this.__layout;
    canvas.clearRect(r.x, r.y, r.width, r.height);
    canvas.restore();
  }
  __updateMask(value) {
    this.__hasMask = value ? true : this.children.some(item => item.__.mask);
  }
  __renderMask(_canvas, _options) {}
  __getNowWorld(options) {
    if (options.matrix) {
      if (!this.__cameraWorld) this.__cameraWorld = {};
      const cameraWorld = this.__cameraWorld;
      multiplyParent(this.__world, options.matrix, cameraWorld, undefined, this.__world);
      toOuterOf(this.__layout.renderBounds, cameraWorld, cameraWorld);
      return cameraWorld;
    } else {
      return this.__world;
    }
  }
  getTransform(relative) {
    return this.__layout.getTransform(relative || 'local');
  }
  getBounds(type, relative) {
    return this.__layout.getBounds(type, relative);
  }
  getLayoutBounds(type, relative, unscale) {
    return this.__layout.getLayoutBounds(type, relative, unscale);
  }
  getLayoutPoints(type, relative) {
    return this.__layout.getLayoutPoints(type, relative);
  }
  getWorldBounds(inner, relative, change) {
    const matrix = relative ? getRelativeWorld(this, relative) : this.worldTransform;
    const to = change ? inner : {};
    toOuterOf(inner, matrix, to);
    return to;
  }
  worldToLocal(world, to, distance, relative) {
    if (this.parent) {
      this.parent.worldToInner(world, to, distance, relative);
    } else {
      if (to) copy(to, world);
    }
  }
  localToWorld(local, to, distance, relative) {
    if (this.parent) {
      this.parent.innerToWorld(local, to, distance, relative);
    } else {
      if (to) copy(to, local);
    }
  }
  worldToInner(world, to, distance, relative) {
    if (relative) {
      relative.innerToWorld(world, to, distance);
      world = to ? to : world;
    }
    toInnerPoint(this.worldTransform, world, to, distance);
  }
  innerToWorld(inner, to, distance, relative) {
    toOuterPoint(this.worldTransform, inner, to, distance);
    if (relative) relative.worldToInner(to ? to : inner, null, distance);
  }
  getInnerPoint(world, relative, distance, change) {
    const point = change ? world : {};
    this.worldToInner(world, point, distance, relative);
    return point;
  }
  getInnerPointByLocal(local, _relative, distance, change) {
    return this.getInnerPoint(local, this.parent, distance, change);
  }
  getLocalPoint(world, relative, distance, change) {
    const point = change ? world : {};
    this.worldToLocal(world, point, distance, relative);
    return point;
  }
  getLocalPointByInner(inner, _relative, distance, change) {
    return this.getWorldPoint(inner, this.parent, distance, change);
  }
  getWorldPoint(inner, relative, distance, change) {
    const point = change ? inner : {};
    this.innerToWorld(inner, point, distance, relative);
    return point;
  }
  getWorldPointByLocal(local, relative, distance, change) {
    const point = change ? local : {};
    this.localToWorld(local, point, distance, relative);
    return point;
  }
  getPagePoint(world, relative, distance, change) {
    const layer = this.leafer ? this.leafer.zoomLayer : this;
    return layer.getInnerPoint(world, relative, distance, change);
  }
  getWorldPointByPage(page, relative, distance, change) {
    const layer = this.leafer ? this.leafer.zoomLayer : this;
    return layer.getWorldPoint(page, relative, distance, change);
  }
  setTransform(matrix, resize) {
    setTransform(this, matrix, resize);
  }
  transform(matrix, resize) {
    transform(this, matrix, resize);
  }
  move(x, y) {
    moveLocal(this, x, y);
  }
  scaleOf(origin, scaleX, scaleY, resize) {
    zoomOfLocal(this, getLocalOrigin(this, origin), scaleX, scaleY, resize);
  }
  rotateOf(origin, rotation) {
    rotateOfLocal(this, getLocalOrigin(this, origin), rotation);
  }
  skewOf(origin, skewX, skewY, resize) {
    skewOfLocal(this, getLocalOrigin(this, origin), skewX, skewY, resize);
  }
  transformWorld(worldTransform, resize) {
    transformWorld(this, worldTransform, resize);
  }
  moveWorld(x, y) {
    moveWorld(this, x, y);
  }
  scaleOfWorld(worldOrigin, scaleX, scaleY, resize) {
    zoomOfWorld(this, worldOrigin, scaleX, scaleY, resize);
  }
  rotateOfWorld(worldOrigin, rotation) {
    rotateOfWorld(this, worldOrigin, rotation);
  }
  skewOfWorld(worldOrigin, skewX, skewY, resize) {
    skewOfWorld(this, worldOrigin, skewX, skewY, resize);
  }
  scaleResize(scaleX, scaleY = scaleX, _noResize) {
    this.scaleX *= scaleX;
    this.scaleY *= scaleY;
  }
  __scaleResize(_scaleX, _scaleY) {}
  resizeWidth(_width) {}
  resizeHeight(_height) {}
  __hitWorld(_point) {
    return true;
  }
  __hit(_local) {
    return true;
  }
  __hitFill(_inner) {
    return true;
  }
  __hitStroke(_inner, _strokeWidth) {
    return true;
  }
  __hitPixel(_inner) {
    return true;
  }
  __drawHitPath(_canvas) {}
  __updateHitCanvas() {}
  __render(_canvas, _options) {}
  __drawFast(_canvas, _options) {}
  __draw(_canvas, _options) {}
  __clip(_canvas, _options) {}
  __renderShape(_canvas, _options, _ignoreFill, _ignoreStroke) {}
  __updateWorldOpacity() {}
  __updateChange() {}
  __drawPath(_canvas) {}
  __drawRenderPath(_canvas) {}
  __updatePath() {}
  __updateRenderPath() {}
  __updateSortChildren() {}
  add(_child, _index) {}
  remove(_child, destroy) {
    if (this.parent) this.parent.remove(this, destroy);
  }
  dropTo(parent, index, resize) {
    drop(this, parent, index, resize);
  }
  on(_type, _listener, _options) {}
  off(_type, _listener, _options) {}
  on_(_type, _listener, _bind, _options) {
    return undefined;
  }
  off_(_id) {}
  once(_type, _listener, _capture) {}
  emit(_type, _event, _capture) {}
  emitEvent(_event, _capture) {}
  hasEvent(_type, _capture) {
    return false;
  }
  static changeAttr(attrName, defaultValue, fn) {
    fn ? this.addAttr(attrName, defaultValue, fn) : defineDataProcessor(this.prototype, attrName, defaultValue);
  }
  static addAttr(attrName, defaultValue, fn) {
    if (!fn) fn = boundsType;
    fn(defaultValue)(this.prototype, attrName);
  }
  destroy() {
    if (!this.destroyed) {
      const {
        parent
      } = this;
      if (parent) this.remove();
      if (this.children) this.removeAll(true);
      if (this.hasEvent(ChildEvent.DESTROY)) this.emitEvent(new ChildEvent(ChildEvent.DESTROY, this, parent));
      this.__.destroy();
      this.__layout.destroy();
      this.__captureMap = this.__bubbleMap = this.__parentWait = this.__leaferWait = null;
      this.destroyed = true;
    }
  }
};
Leaf = __decorate([useModule(LeafDataProxy), useModule(LeafMatrix), useModule(LeafBounds), useModule(LeafEventer), useModule(LeafRender)], Leaf);
const {
  setListWithFn
} = BoundsHelper;
const {
  sort
} = BranchHelper;
const {
  localBoxBounds,
  localStrokeBounds,
  localRenderBounds,
  maskLocalBoxBounds,
  maskLocalStrokeBounds,
  maskLocalRenderBounds
} = LeafBoundsHelper;
let Branch = class Branch extends Leaf {
  __updateStrokeSpread() {
    const {
      children
    } = this;
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].__layout.strokeSpread) return 1;
    }
    return 0;
  }
  __updateRenderSpread() {
    const {
      children
    } = this;
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].__layout.renderSpread) return 1;
    }
    return 0;
  }
  __updateBoxBounds() {
    setListWithFn(this.__layout.boxBounds, this.children, this.__hasMask ? maskLocalBoxBounds : localBoxBounds);
  }
  __updateStrokeBounds() {
    setListWithFn(this.__layout.strokeBounds, this.children, this.__hasMask ? maskLocalStrokeBounds : localStrokeBounds);
  }
  __updateRenderBounds() {
    setListWithFn(this.__layout.renderBounds, this.children, this.__hasMask ? maskLocalRenderBounds : localRenderBounds);
  }
  __updateSortChildren() {
    let affectSort;
    const {
      children
    } = this;
    if (children.length > 1) {
      for (let i = 0, len = children.length; i < len; i++) {
        children[i].__tempNumber = i;
        if (children[i].__.zIndex) affectSort = true;
      }
      children.sort(sort);
      this.__layout.affectChildrenSort = affectSort;
    }
  }
  add(child, index) {
    if (child === this) return;
    if (child.parent) child.parent.remove(child);
    child.parent = this;
    index === undefined ? this.children.push(child) : this.children.splice(index, 0, child);
    if (child.isBranch) this.__.__childBranchNumber = (this.__.__childBranchNumber || 0) + 1;
    child.__layout.boxChanged || child.__layout.boxChange();
    child.__layout.matrixChanged || child.__layout.matrixChange();
    if (child.__parentWait) WaitHelper.run(child.__parentWait);
    if (this.leafer) {
      child.__bindLeafer(this.leafer);
      if (this.leafer.created) this.__emitChildEvent(ChildEvent.ADD, child);
    }
    this.__layout.affectChildrenSort && this.__layout.childrenSortChange();
  }
  addMany(...children) {
    children.forEach(child => this.add(child));
  }
  remove(child, destroy) {
    if (child) {
      const index = this.children.indexOf(child);
      if (index > -1) {
        this.children.splice(index, 1);
        if (child.isBranch) this.__.__childBranchNumber = (this.__.__childBranchNumber || 1) - 1;
        this.__preRemove();
        this.__realRemoveChild(child);
        if (destroy) child.destroy();
      }
    } else if (child === undefined) {
      super.remove(null, destroy);
    }
  }
  removeAll(destroy) {
    const {
      children
    } = this;
    if (children.length) {
      this.children = [];
      this.__preRemove();
      this.__.__childBranchNumber = 0;
      children.forEach(child => {
        this.__realRemoveChild(child);
        if (destroy) child.destroy();
      });
    }
  }
  clear() {
    this.removeAll(true);
  }
  __preRemove() {
    if (this.__hasMask) this.__updateMask();
    if (this.__hasEraser) this.__updateEraser();
    this.__layout.boxChange();
    this.__layout.affectChildrenSort && this.__layout.childrenSortChange();
  }
  __realRemoveChild(child) {
    child.parent = null;
    if (this.leafer) {
      child.__bindLeafer(null);
      if (this.leafer.created) {
        this.__emitChildEvent(ChildEvent.REMOVE, child);
        if (this.leafer.hitCanvasManager) this.leafer.hitCanvasManager.clear();
      }
    }
  }
  __emitChildEvent(type, child) {
    const event = new ChildEvent(type, child, this);
    if (child.hasEvent(type)) child.emitEvent(event);
    if (this.hasEvent(type) && !this.isLeafer) this.emitEvent(event);
    this.leafer.emitEvent(event);
  }
};
Branch = __decorate([useModule(BranchRender)], Branch);
class LeafList {
  get length() {
    return this.list.length;
  }
  constructor(item) {
    this.reset();
    if (item) item instanceof Array ? this.addList(item) : this.add(item);
  }
  has(leaf) {
    return leaf && this.keys[leaf.innerId] !== undefined;
  }
  indexAt(index) {
    return this.list[index];
  }
  indexOf(leaf) {
    const index = this.keys[leaf.innerId];
    return index === undefined ? -1 : index;
  }
  add(leaf) {
    const {
      list,
      keys
    } = this;
    if (keys[leaf.innerId] === undefined) {
      list.push(leaf);
      keys[leaf.innerId] = list.length - 1;
    }
  }
  addAt(leaf, index = 0) {
    const {
      keys
    } = this;
    if (keys[leaf.innerId] === undefined) {
      const {
        list
      } = this;
      for (let i = index, len = list.length; i < len; i++) keys[list[i].innerId]++;
      if (index === 0) {
        list.unshift(leaf);
      } else {
        if (index > list.length) index = list.length;
        list.splice(index, 0, leaf);
      }
      keys[leaf.innerId] = index;
    }
  }
  addList(list) {
    for (let i = 0; i < list.length; i++) this.add(list[i]);
  }
  remove(leaf) {
    const {
      list
    } = this;
    let findIndex;
    for (let i = 0, len = list.length; i < len; i++) {
      if (findIndex !== undefined) {
        this.keys[list[i].innerId] = i - 1;
      } else if (list[i].innerId === leaf.innerId) {
        findIndex = i;
        delete this.keys[leaf.innerId];
      }
    }
    if (findIndex !== undefined) list.splice(findIndex, 1);
  }
  sort(reverse) {
    const {
      list
    } = this;
    if (reverse) {
      list.sort((a, b) => b.__level - a.__level);
    } else {
      list.sort((a, b) => a.__level - b.__level);
    }
  }
  forEach(itemCallback) {
    this.list.forEach(itemCallback);
  }
  clone() {
    const list = new LeafList();
    list.list = [...this.list];
    list.keys = Object.assign({}, this.keys);
    return list;
  }
  update() {
    this.keys = {};
    const {
      list,
      keys
    } = this;
    for (let i = 0, len = list.length; i < len; i++) keys[list[i].innerId] = i;
  }
  reset() {
    this.list = [];
    this.keys = {};
  }
  destroy() {
    this.reset();
  }
}
class LeafLevelList {
  get length() {
    return this._length;
  }
  constructor(item) {
    this._length = 0;
    this.reset();
    if (item) item instanceof Array ? this.addList(item) : this.add(item);
  }
  has(leaf) {
    return this.keys[leaf.innerId] !== undefined;
  }
  without(leaf) {
    return this.keys[leaf.innerId] === undefined;
  }
  sort(reverse) {
    const {
      levels
    } = this;
    if (reverse) {
      levels.sort((a, b) => b - a);
    } else {
      levels.sort((a, b) => a - b);
    }
  }
  addList(list) {
    list.forEach(leaf => {
      this.add(leaf);
    });
  }
  add(leaf) {
    const {
      keys,
      levelMap
    } = this;
    if (!keys[leaf.innerId]) {
      keys[leaf.innerId] = 1;
      if (!levelMap[leaf.__level]) {
        levelMap[leaf.__level] = [leaf];
        this.levels.push(leaf.__level);
      } else {
        levelMap[leaf.__level].push(leaf);
      }
      this._length++;
    }
  }
  forEach(itemCallback) {
    let list;
    this.levels.forEach(level => {
      list = this.levelMap[level];
      for (let i = 0, len = list.length; i < len; i++) {
        itemCallback(list[i]);
      }
    });
  }
  reset() {
    this.levelMap = {};
    this.keys = {};
    this.levels = [];
    this._length = 0;
  }
  destroy() {
    this.levelMap = null;
  }
}
const version = "1.0.0-rc.30";
const inviteCode = {};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@leafer-ui+draw@1.0.0/node_modules/@leafer-ui/draw/lib/draw.esm.js



/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function draw_esm_decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
const TextConvert = {};
const ColorConvert = {};
const PathArrow = {};
const Paint = {};
const PaintImage = {};
const PaintGradient = {};
const Effect = {};
const Export = {};
const State = {};
function stateType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value);
      this.waitLeafer(() => {
        if (State.setStyle) State.setStyle(this, key + 'Style', value);
      });
    }
  }));
}
function arrowType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      if (this.__setAttr(key, value)) {
        const data = this.__;
        data.__useArrow = data.startArrow !== 'none' || data.endArrow !== 'none';
        doStrokeType(this);
      }
    }
  }));
}
function effectType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value);
      if (value) this.__.__useEffect = true;
      this.__layout.renderChanged || this.__layout.renderChange();
    }
  }));
}
function resizeType(defaultValue) {
  return decorateLeafAttr(defaultValue, key => attr({
    set(value) {
      this.__setAttr(key, value);
      this.__layout.boxChanged || this.__layout.boxChange();
      this.__updateSize();
    }
  }));
}
function zoomLayerType() {
  return (target, key) => {
    const privateKey = '_' + key;
    defineKey(target, key, {
      set(value) {
        if (this.isLeafer) this[privateKey] = value;
      },
      get() {
        return this.isApp ? this.tree.zoomLayer : this.isLeafer ? this[privateKey] || this : this.leafer && this.leafer.zoomLayer;
      }
    });
  };
}
const {
  parse
} = PathConvert;
const emptyPaint = {};
const draw_esm_debug$1 = Debug.get('UIData');
class UIData extends LeafData {
  get __strokeWidth() {
    const {
      strokeWidth,
      strokeWidthFixed
    } = this;
    if (strokeWidthFixed) {
      const ui = this.__leaf;
      let {
        scaleX
      } = ui.__nowWorld || ui.__world;
      if (scaleX < 0) scaleX = -scaleX;
      return scaleX > 1 ? strokeWidth / scaleX : strokeWidth;
    } else {
      return strokeWidth;
    }
  }
  get __autoWidth() {
    return !this._width;
  }
  get __autoHeight() {
    return !this._height;
  }
  get __autoSide() {
    return !this._width || !this._height;
  }
  get __autoSize() {
    return !this._width && !this._height;
  }
  setVisible(value) {
    if (this.__leaf.leafer) this.__leaf.leafer.watcher.hasVisible = true;
    this._visible = value;
  }
  setWidth(value) {
    if (value < 0) {
      this._width = -value;
      this.__leaf.scaleX *= -1;
      draw_esm_debug$1.warn('width < 0, instead -scaleX ', this);
    } else {
      this._width = value;
    }
  }
  setHeight(value) {
    if (value < 0) {
      this._height = -value;
      this.__leaf.scaleY *= -1;
      draw_esm_debug$1.warn('height < 0, instead -scaleY', this);
    } else {
      this._height = value;
    }
  }
  setFill(value) {
    if (this.__naturalWidth) this.__removeNaturalSize();
    if (typeof value === 'string' || !value) {
      if (this.__isFills) {
        this.__removeInput('fill');
        PaintImage.recycleImage('fill', this);
        this.__isFills = false;
        if (this.__pixelFill) this.__pixelFill = false;
      }
      this._fill = value;
    } else if (typeof value === 'object') {
      this.__setInput('fill', value);
      this.__leaf.__layout.boxChanged || this.__leaf.__layout.boxChange();
      this.__isFills = true;
      this._fill || (this._fill = emptyPaint);
    }
  }
  setStroke(value) {
    if (typeof value === 'string' || !value) {
      if (this.__isStrokes) {
        this.__removeInput('stroke');
        PaintImage.recycleImage('stroke', this);
        this.__isStrokes = false;
        if (this.__pixelStroke) this.__pixelStroke = false;
      }
      this._stroke = value;
    } else if (typeof value === 'object') {
      this.__setInput('stroke', value);
      this.__leaf.__layout.boxChanged || this.__leaf.__layout.boxChange();
      this.__isStrokes = true;
      this._stroke || (this._stroke = emptyPaint);
    }
  }
  setPath(value) {
    if (typeof value === 'string') {
      this.__setInput('path', value);
      this._path = parse(value);
    } else {
      if (this.__input) this.__removeInput('path');
      this._path = value;
    }
  }
  setShadow(value) {
    this.__setInput('shadow', value);
    if (value instanceof Array) {
      if (value.some(item => item.visible === false)) value = value.filter(item => item.visible !== false);
      this._shadow = value.length ? value : null;
    } else if (value) {
      this._shadow = value.visible === false ? null : [value];
    } else {
      this._shadow = null;
    }
  }
  setInnerShadow(value) {
    this.__setInput('innerShadow', value);
    if (value instanceof Array) {
      if (value.some(item => item.visible === false)) value = value.filter(item => item.visible !== false);
      this._innerShadow = value.length ? value : null;
    } else if (value) {
      this._innerShadow = value.visible === false ? null : [value];
    } else {
      this._innerShadow = null;
    }
  }
  __computePaint() {
    const {
      fill,
      stroke
    } = this.__input;
    if (fill) Paint.compute('fill', this.__leaf);
    if (stroke) Paint.compute('stroke', this.__leaf);
    this.__needComputePaint = false;
  }
}
const UnitConvert = {
  number(value, percentRefer) {
    if (typeof value === 'object') return value.type === 'percent' ? value.value * percentRefer : value.value;
    return value;
  }
};
class GroupData extends UIData {}
class BoxData extends GroupData {
  get __boxStroke() {
    return !this.__pathInputed;
  }
}
class LeaferData extends GroupData {}
class FrameData extends BoxData {}
class LineData extends UIData {}
class RectData extends UIData {
  get __boxStroke() {
    return !this.__pathInputed;
  }
}
class EllipseData extends UIData {
  get __boxStroke() {
    return !this.__pathInputed;
  }
}
class PolygonData extends UIData {}
class StarData extends UIData {}
class PathData extends UIData {}
class PenData extends GroupData {}
const fontWeightMap = {
  'thin': 100,
  'extra-light': 200,
  'light': 300,
  'normal': 400,
  'medium': 500,
  'semi-bold': 600,
  'bold': 700,
  'extra-bold': 800,
  'black': 900
};
class TextData extends UIData {
  get __useNaturalRatio() {
    return false;
  }
  setFontWeight(value) {
    if (typeof value === 'string') {
      this.__setInput('fontWeight', value);
      this._fontWeight = fontWeightMap[value] || 400;
    } else {
      if (this.__input) this.__removeInput('fontWeight');
      this._fontWeight = value;
    }
  }
}
class ImageData extends RectData {
  setUrl(value) {
    this.__setImageFill(value);
    this._url = value;
  }
  __setImageFill(value) {
    if (this.__leaf.image) this.__leaf.image = null;
    this.fill = value ? {
      type: 'image',
      mode: 'strench',
      url: value
    } : undefined;
  }
  __getData() {
    const data = super.__getData();
    delete data.fill;
    return data;
  }
  __getInputData() {
    const data = super.__getInputData();
    delete data.fill;
    return data;
  }
}
class CanvasData extends RectData {}
const UIBounds = {
  __updateStrokeSpread() {
    let width = 0,
      boxWidth = 0;
    const data = this.__,
      {
        strokeAlign,
        strokeWidth
      } = data;
    if ((data.stroke || data.hitStroke === 'all') && strokeWidth && strokeAlign !== 'inside') {
      boxWidth = width = strokeAlign === 'center' ? strokeWidth / 2 : strokeWidth;
      if (!data.__boxStroke) {
        const miterLimitAddWidth = data.__isLinePath ? 0 : 10 * width;
        const storkeCapAddWidth = data.strokeCap === 'none' ? 0 : strokeWidth;
        width += Math.max(miterLimitAddWidth, storkeCapAddWidth);
      }
    }
    if (data.__useArrow) width += strokeWidth * 5;
    this.__layout.strokeBoxSpread = boxWidth;
    return width;
  },
  __updateRenderSpread() {
    let width = 0;
    const {
      shadow,
      innerShadow,
      blur,
      backgroundBlur
    } = this.__;
    if (shadow) shadow.forEach(item => {
      width = Math.max(width, Math.max(Math.abs(item.y), Math.abs(item.x)) + (item.spread > 0 ? item.spread : 0) + item.blur * 1.5);
    });
    if (blur) width = Math.max(width, blur);
    let shapeWidth = width = Math.ceil(width);
    if (innerShadow) innerShadow.forEach(item => {
      shapeWidth = Math.max(shapeWidth, Math.max(Math.abs(item.y), Math.abs(item.x)) + (item.spread < 0 ? -item.spread : 0) + item.blur * 1.5);
    });
    if (backgroundBlur) shapeWidth = Math.max(shapeWidth, backgroundBlur);
    this.__layout.renderShapeSpread = shapeWidth;
    return width + (this.__layout.strokeSpread || 0);
  }
};
const UIRender = {
  __updateChange() {
    const data = this.__;
    if (data.__useEffect) {
      const {
        shadow,
        innerShadow,
        blur,
        backgroundBlur
      } = this.__;
      data.__useEffect = !!(shadow || innerShadow || blur || backgroundBlur);
    }
    data.__checkSingle();
    const complex = data.__isFills || data.__isStrokes || data.cornerRadius || data.__useEffect;
    if (complex) {
      data.__complex = true;
    } else {
      data.__complex && (data.__complex = false);
    }
  },
  __drawFast(canvas, options) {
    drawFast(this, canvas, options);
  },
  __draw(canvas, options) {
    const data = this.__;
    if (data.__complex) {
      if (data.__needComputePaint) data.__computePaint();
      const {
        fill,
        stroke,
        __drawAfterFill
      } = data;
      this.__drawRenderPath(canvas);
      if (data.__useEffect) {
        const shape = Paint.shape(this, canvas, options);
        this.__nowWorld = this.__getNowWorld(options);
        const {
          shadow,
          innerShadow
        } = data;
        if (shadow) Effect.shadow(this, canvas, shape);
        if (fill) data.__isFills ? Paint.fills(fill, this, canvas) : Paint.fill(fill, this, canvas);
        if (__drawAfterFill) this.__drawAfterFill(canvas, options);
        if (innerShadow) Effect.innerShadow(this, canvas, shape);
        if (stroke) data.__isStrokes ? Paint.strokes(stroke, this, canvas) : Paint.stroke(stroke, this, canvas);
        if (shape.worldCanvas) shape.worldCanvas.recycle();
        shape.canvas.recycle();
      } else {
        if (fill) data.__isFills ? Paint.fills(fill, this, canvas) : Paint.fill(fill, this, canvas);
        if (__drawAfterFill) this.__drawAfterFill(canvas, options);
        if (stroke) data.__isStrokes ? Paint.strokes(stroke, this, canvas) : Paint.stroke(stroke, this, canvas);
      }
    } else {
      if (data.__pathInputed) {
        drawFast(this, canvas, options);
      } else {
        this.__drawFast(canvas, options);
      }
    }
  },
  __renderShape(canvas, options, ignoreFill, ignoreStroke) {
    if (this.__worldOpacity) {
      canvas.setWorld(this.__nowWorld = this.__getNowWorld(options));
      const {
        fill,
        stroke
      } = this.__;
      this.__drawRenderPath(canvas);
      if (fill && !ignoreFill) this.__.__pixelFill ? Paint.fills(fill, this, canvas) : Paint.fill('#000000', this, canvas);
      if (this.__.__isCanvas) this.__drawAfterFill(canvas, options);
      if (stroke && !ignoreStroke) this.__.__pixelStroke ? Paint.strokes(stroke, this, canvas) : Paint.stroke('#000000', this, canvas);
    }
  }
};
function drawFast(ui, canvas, options) {
  const {
    fill,
    stroke,
    __drawAfterFill
  } = ui.__;
  ui.__drawRenderPath(canvas);
  if (fill) Paint.fill(fill, ui, canvas);
  if (__drawAfterFill) ui.__drawAfterFill(canvas, options);
  if (stroke) Paint.stroke(stroke, ui, canvas);
}
const RectRender = {
  __drawFast(canvas, options) {
    let {
      width,
      height,
      fill,
      stroke,
      __drawAfterFill
    } = this.__;
    if (fill) {
      canvas.fillStyle = fill;
      canvas.fillRect(0, 0, width, height);
    }
    if (__drawAfterFill) this.__drawAfterFill(canvas, options);
    if (stroke) {
      const {
        strokeAlign,
        __strokeWidth
      } = this.__;
      if (!__strokeWidth) return;
      canvas.setStroke(stroke, __strokeWidth, this.__);
      const half = __strokeWidth / 2;
      switch (strokeAlign) {
        case 'center':
          canvas.strokeRect(0, 0, width, height);
          break;
        case 'inside':
          width -= __strokeWidth, height -= __strokeWidth;
          if (width < 0 || height < 0) {
            canvas.save();
            this.__clip(canvas, options);
            canvas.strokeRect(half, half, width, height);
            canvas.restore();
          } else {
            canvas.strokeRect(half, half, width, height);
          }
          break;
        case 'outside':
          canvas.strokeRect(-half, -half, width + __strokeWidth, height + __strokeWidth);
          break;
      }
    }
  }
};
var UI_1;
let UI = UI_1 = class UI extends Leaf {
  get app() {
    return this.leafer && this.leafer.app;
  }
  get isFrame() {
    return false;
  }
  set scale(value) {
    if (typeof value === 'number') {
      this.scaleX = this.scaleY = value;
    } else {
      this.scaleX = value.x;
      this.scaleY = value.y;
    }
  }
  get scale() {
    const {
      scaleX,
      scaleY
    } = this;
    return scaleX !== scaleY ? {
      x: scaleX,
      y: scaleY
    } : scaleX;
  }
  get pen() {
    const {
      path
    } = this.__;
    pen.set(this.path = path || []);
    if (!path) this.__drawPathByBox(pen);
    return pen;
  }
  get editConfig() {
    return undefined;
  }
  get editOuter() {
    return this.__.__isLinePath ? 'LineEditTool' : 'EditTool';
  }
  get editInner() {
    return 'PathEditor';
  }
  constructor(data) {
    super(data);
  }
  reset(_data) {}
  set(data) {
    Object.assign(this, data);
  }
  get(name) {
    return typeof name === 'string' ? this.__.__getInput(name) : this.__.__getInputData(name);
  }
  createProxyData() {
    return undefined;
  }
  find(_condition, _options) {
    return undefined;
  }
  findTag(tag) {
    return this.find({
      tag
    });
  }
  findOne(_condition, _options) {
    return undefined;
  }
  findId(id) {
    return this.findOne({
      id
    });
  }
  getPath(curve, pathForRender) {
    this.__layout.update();
    let path = pathForRender ? this.__.__pathForRender : this.__.path;
    if (!path) pen.set(path = []), this.__drawPathByBox(pen);
    return curve ? PathConvert.toCanvasData(path, true) : path;
  }
  getPathString(curve, pathForRender) {
    return PathConvert.stringify(this.getPath(curve, pathForRender));
  }
  load() {
    this.__.__computePaint();
  }
  __onUpdateSize() {
    if (this.__.__input) {
      const data = this.__;
      data.lazy && !this.__inLazyBounds && !Export.running ? data.__needComputePaint = true : data.__computePaint();
    }
  }
  __updateRenderPath() {
    if (this.__.path) {
      const data = this.__;
      data.__pathForRender = data.cornerRadius ? PathCorner.smooth(data.path, data.cornerRadius, data.cornerSmoothing) : data.path;
      if (data.__useArrow) PathArrow.addArrows(this, !data.cornerRadius);
    }
  }
  __drawRenderPath(canvas) {
    canvas.beginPath();
    this.__drawPathByData(canvas, this.__.__pathForRender);
  }
  __drawPath(canvas) {
    canvas.beginPath();
    this.__drawPathByData(canvas, this.__.path);
  }
  __drawPathByData(drawer, data) {
    if (data) {
      PathDrawer.drawPathByData(drawer, data);
    } else {
      this.__drawPathByBox(drawer);
    }
  }
  __drawPathByBox(drawer) {
    const {
      x,
      y,
      width,
      height
    } = this.__layout.boxBounds;
    if (this.__.cornerRadius) {
      const {
        cornerRadius
      } = this.__;
      drawer.roundRect(x, y, width, height, typeof cornerRadius === 'number' ? [cornerRadius] : cornerRadius);
    } else {
      drawer.rect(x, y, width, height);
    }
  }
  export(filename, options) {
    return Export.export(this, filename, options);
  }
  clone() {
    return UI_1.one(this.toJSON());
  }
  static one(data, x, y, width, height) {
    return UICreator.get(data.tag || this.prototype.__tag, data, x, y, width, height);
  }
  static registerUI() {
    registerUI()(this);
  }
  static registerData(data) {
    dataProcessor(data)(this.prototype);
  }
  static setEditConfig(_config) {}
  static setEditOuter(_toolName) {}
  static setEditInner(_editorName) {}
  destroy() {
    this.fill = this.stroke = null;
    super.destroy();
  }
};
draw_esm_decorate([dataProcessor(UIData)], UI.prototype, "__", void 0);
draw_esm_decorate([zoomLayerType()], UI.prototype, "zoomLayer", void 0);
draw_esm_decorate([dataType('')], UI.prototype, "id", void 0);
draw_esm_decorate([dataType('')], UI.prototype, "name", void 0);
draw_esm_decorate([dataType('')], UI.prototype, "className", void 0);
draw_esm_decorate([surfaceType('pass-through')], UI.prototype, "blendMode", void 0);
draw_esm_decorate([opacityType(1)], UI.prototype, "opacity", void 0);
draw_esm_decorate([visibleType(true)], UI.prototype, "visible", void 0);
draw_esm_decorate([stateType(false)], UI.prototype, "selected", void 0);
draw_esm_decorate([stateType(false)], UI.prototype, "disabled", void 0);
draw_esm_decorate([surfaceType(false)], UI.prototype, "locked", void 0);
draw_esm_decorate([sortType(0)], UI.prototype, "zIndex", void 0);
draw_esm_decorate([maskType(false)], UI.prototype, "mask", void 0);
draw_esm_decorate([eraserType(false)], UI.prototype, "eraser", void 0);
draw_esm_decorate([positionType(0, true)], UI.prototype, "x", void 0);
draw_esm_decorate([positionType(0, true)], UI.prototype, "y", void 0);
draw_esm_decorate([boundsType(100, true)], UI.prototype, "width", void 0);
draw_esm_decorate([boundsType(100, true)], UI.prototype, "height", void 0);
draw_esm_decorate([scaleType(1, true)], UI.prototype, "scaleX", void 0);
draw_esm_decorate([scaleType(1, true)], UI.prototype, "scaleY", void 0);
draw_esm_decorate([rotationType(0, true)], UI.prototype, "rotation", void 0);
draw_esm_decorate([rotationType(0, true)], UI.prototype, "skewX", void 0);
draw_esm_decorate([rotationType(0, true)], UI.prototype, "skewY", void 0);
draw_esm_decorate([positionType(0, true)], UI.prototype, "offsetX", void 0);
draw_esm_decorate([positionType(0, true)], UI.prototype, "offsetY", void 0);
draw_esm_decorate([positionType(0, true)], UI.prototype, "scrollX", void 0);
draw_esm_decorate([positionType(0, true)], UI.prototype, "scrollY", void 0);
draw_esm_decorate([autoLayoutType()], UI.prototype, "origin", void 0);
draw_esm_decorate([autoLayoutType()], UI.prototype, "around", void 0);
draw_esm_decorate([dataType(false)], UI.prototype, "lazy", void 0);
draw_esm_decorate([naturalBoundsType(1)], UI.prototype, "pixelRatio", void 0);
draw_esm_decorate([pathInputType()], UI.prototype, "path", void 0);
draw_esm_decorate([pathType()], UI.prototype, "windingRule", void 0);
draw_esm_decorate([pathType(true)], UI.prototype, "closed", void 0);
draw_esm_decorate([autoLayoutType(false)], UI.prototype, "flow", void 0);
draw_esm_decorate([boundsType(0)], UI.prototype, "padding", void 0);
draw_esm_decorate([boundsType(0)], UI.prototype, "gap", void 0);
draw_esm_decorate([boundsType('top-left')], UI.prototype, "flowAlign", void 0);
draw_esm_decorate([boundsType(false)], UI.prototype, "flowWrap", void 0);
draw_esm_decorate([boundsType('box')], UI.prototype, "itemBox", void 0);
draw_esm_decorate([boundsType(true)], UI.prototype, "inFlow", void 0);
draw_esm_decorate([boundsType()], UI.prototype, "autoWidth", void 0);
draw_esm_decorate([boundsType()], UI.prototype, "autoHeight", void 0);
draw_esm_decorate([boundsType()], UI.prototype, "lockRatio", void 0);
draw_esm_decorate([boundsType()], UI.prototype, "autoBox", void 0);
draw_esm_decorate([boundsType()], UI.prototype, "widthRange", void 0);
draw_esm_decorate([boundsType()], UI.prototype, "heightRange", void 0);
draw_esm_decorate([dataType(false)], UI.prototype, "draggable", void 0);
draw_esm_decorate([dataType()], UI.prototype, "dragBounds", void 0);
draw_esm_decorate([dataType(false)], UI.prototype, "editable", void 0);
draw_esm_decorate([hitType(true)], UI.prototype, "hittable", void 0);
draw_esm_decorate([hitType('path')], UI.prototype, "hitFill", void 0);
draw_esm_decorate([strokeType('path')], UI.prototype, "hitStroke", void 0);
draw_esm_decorate([hitType(false)], UI.prototype, "hitBox", void 0);
draw_esm_decorate([hitType(true)], UI.prototype, "hitChildren", void 0);
draw_esm_decorate([hitType(true)], UI.prototype, "hitSelf", void 0);
draw_esm_decorate([hitType()], UI.prototype, "hitRadius", void 0);
draw_esm_decorate([cursorType('')], UI.prototype, "cursor", void 0);
draw_esm_decorate([surfaceType()], UI.prototype, "fill", void 0);
draw_esm_decorate([strokeType()], UI.prototype, "stroke", void 0);
draw_esm_decorate([strokeType('inside')], UI.prototype, "strokeAlign", void 0);
draw_esm_decorate([strokeType(1)], UI.prototype, "strokeWidth", void 0);
draw_esm_decorate([strokeType(false)], UI.prototype, "strokeWidthFixed", void 0);
draw_esm_decorate([strokeType('none')], UI.prototype, "strokeCap", void 0);
draw_esm_decorate([strokeType('miter')], UI.prototype, "strokeJoin", void 0);
draw_esm_decorate([strokeType()], UI.prototype, "dashPattern", void 0);
draw_esm_decorate([strokeType()], UI.prototype, "dashOffset", void 0);
draw_esm_decorate([strokeType(10)], UI.prototype, "miterLimit", void 0);
draw_esm_decorate([arrowType('none')], UI.prototype, "startArrow", void 0);
draw_esm_decorate([arrowType('none')], UI.prototype, "endArrow", void 0);
draw_esm_decorate([pathType(0)], UI.prototype, "cornerRadius", void 0);
draw_esm_decorate([pathType()], UI.prototype, "cornerSmoothing", void 0);
draw_esm_decorate([effectType()], UI.prototype, "shadow", void 0);
draw_esm_decorate([effectType()], UI.prototype, "innerShadow", void 0);
draw_esm_decorate([effectType()], UI.prototype, "blur", void 0);
draw_esm_decorate([effectType()], UI.prototype, "backgroundBlur", void 0);
draw_esm_decorate([effectType()], UI.prototype, "grayscale", void 0);
draw_esm_decorate([dataType()], UI.prototype, "normalStyle", void 0);
draw_esm_decorate([dataType()], UI.prototype, "hoverStyle", void 0);
draw_esm_decorate([dataType()], UI.prototype, "pressStyle", void 0);
draw_esm_decorate([dataType()], UI.prototype, "focusStyle", void 0);
draw_esm_decorate([dataType()], UI.prototype, "selectedStyle", void 0);
draw_esm_decorate([dataType()], UI.prototype, "disabledStyle", void 0);
draw_esm_decorate([dataType({})], UI.prototype, "data", void 0);
draw_esm_decorate([rewrite(Leaf.prototype.reset)], UI.prototype, "reset", null);
UI = UI_1 = draw_esm_decorate([useModule(UIBounds), useModule(UIRender), rewriteAble()], UI);
let Group = class Group extends UI {
  get __tag() {
    return 'Group';
  }
  get isBranch() {
    return true;
  }
  constructor(data) {
    super(data);
  }
  reset(data) {
    this.__setBranch();
    super.reset(data);
  }
  __setBranch() {
    if (!this.children) this.children = [];
  }
  set(data) {
    if (data.children) {
      const {
        children
      } = data;
      delete data.children;
      if (!this.children) {
        this.__setBranch();
      } else {
        this.clear();
      }
      super.set(data);
      let child;
      children.forEach(childData => {
        child = childData.__ ? childData : UICreator.get(childData.tag, childData);
        this.add(child);
      });
      data.children = children;
    } else {
      super.set(data);
    }
  }
  toJSON(options) {
    const data = super.toJSON(options);
    data.children = this.children.map(child => child.toJSON(options));
    return data;
  }
  pick(_hitPoint, _options) {
    return undefined;
  }
  addAt(child, index) {
    this.add(child, index);
  }
  addAfter(child, after) {
    this.add(child, this.children.indexOf(after) + 1);
  }
  addBefore(child, before) {
    this.add(child, this.children.indexOf(before));
  }
  add(_child, _index) {}
  addMany(..._children) {}
  remove(_child, _destroy) {}
  removeAll(_destroy) {}
  clear() {}
};
draw_esm_decorate([dataProcessor(GroupData)], Group.prototype, "__", void 0);
Group = draw_esm_decorate([useModule(Branch), registerUI()], Group);
var Leafer_1;
const draw_esm_debug = Debug.get('Leafer');
let Leafer = Leafer_1 = class Leafer extends Group {
  get __tag() {
    return 'Leafer';
  }
  get isApp() {
    return false;
  }
  get app() {
    return this.parent || this;
  }
  get isLeafer() {
    return true;
  }
  get imageReady() {
    return this.viewReady && ImageManager.isComplete;
  }
  get layoutLocked() {
    return !this.layouter.running;
  }
  get FPS() {
    return this.renderer ? this.renderer.FPS : 60;
  }
  get cursorPoint() {
    return this.interaction && this.interaction.hoverData || {
      x: this.width / 2,
      y: this.height / 2
    };
  }
  get clientBounds() {
    return this.canvas && this.canvas.getClientBounds();
  }
  constructor(userConfig, data) {
    super(data);
    this.config = {
      type: 'design',
      start: true,
      hittable: true,
      smooth: true,
      lazySpeard: 100,
      zoom: {
        min: 0.01,
        max: 256
      },
      move: {
        holdSpaceKey: true,
        holdMiddleKey: true,
        autoDistance: 2
      }
    };
    this.leafs = 0;
    this.__eventIds = [];
    this.__controllers = [];
    this.__readyWait = [];
    this.__viewReadyWait = [];
    this.__viewCompletedWait = [];
    this.__nextRenderWait = [];
    this.userConfig = userConfig;
    if (userConfig && (userConfig.view || userConfig.width)) this.init(userConfig);
    Leafer_1.list.add(this);
  }
  init(userConfig, parentApp) {
    if (this.canvas) return;
    this.__setLeafer(this);
    if (userConfig) DataHelper.assign(this.config, userConfig);
    let start;
    const {
      config
    } = this;
    this.initType(config.type);
    const canvas = this.canvas = Creator.canvas(config);
    this.__controllers.push(this.renderer = Creator.renderer(this, canvas, config), this.watcher = Creator.watcher(this, config), this.layouter = Creator.layouter(this, config));
    if (this.isApp) this.__setApp();
    this.__checkAutoLayout(config);
    this.view = canvas.view;
    if (parentApp) {
      this.__bindApp(parentApp);
      start = parentApp.running;
    } else {
      this.selector = Creator.selector(this);
      this.interaction = Creator.interaction(this, canvas, this.selector, config);
      if (this.interaction) {
        this.__controllers.unshift(this.interaction);
        this.hitCanvasManager = Creator.hitCanvasManager();
      }
      this.canvasManager = new CanvasManager();
      start = config.start;
    }
    this.hittable = config.hittable;
    this.fill = config.fill;
    this.canvasManager.add(canvas);
    this.__listenEvents();
    if (start) this.__startTimer = setTimeout(this.start.bind(this));
    WaitHelper.run(this.__initWait);
    this.onInit();
  }
  onInit() {}
  initType(_type) {}
  set(data) {
    this.waitInit(() => {
      super.set(data);
    });
  }
  start() {
    clearTimeout(this.__startTimer);
    if (!this.running && this.canvas) {
      this.ready ? this.emitLeafer(LeaferEvent.RESTART) : this.emitLeafer(LeaferEvent.START);
      this.__controllers.forEach(item => item.start());
      if (!this.isApp) this.renderer.render();
      this.running = true;
    }
  }
  stop() {
    clearTimeout(this.__startTimer);
    if (this.running && this.canvas) {
      this.__controllers.forEach(item => item.stop());
      this.running = false;
      this.emitLeafer(LeaferEvent.STOP);
    }
  }
  unlockLayout() {
    this.layouter.start();
    this.updateLayout();
  }
  lockLayout() {
    this.updateLayout();
    this.layouter.stop();
  }
  resize(size) {
    const data = DataHelper.copyAttrs({}, size, canvasSizeAttrs);
    Object.keys(data).forEach(key => this[key] = data[key]);
  }
  forceRender(bounds) {
    this.renderer.addBlock(bounds ? new Bounds(bounds) : this.canvas.bounds);
    if (this.viewReady) this.renderer.update();
  }
  updateCursor(cursor) {
    const i = this.interaction;
    if (i) cursor ? i.setCursor(cursor) : i.updateCursor();
  }
  updateLazyBounds() {
    this.lazyBounds = this.canvas.bounds.clone().spread(this.config.lazySpeard);
  }
  __doResize(size) {
    const {
      canvas
    } = this;
    if (!canvas || canvas.isSameSize(size)) return;
    const old = DataHelper.copyAttrs({}, this.canvas, canvasSizeAttrs);
    canvas.resize(size);
    this.updateLazyBounds();
    this.__onResize(new ResizeEvent(size, old));
  }
  __onResize(event) {
    this.emitEvent(event);
    DataHelper.copyAttrs(this.__, event, canvasSizeAttrs);
    if (!event.width || !event.height) draw_esm_debug.warn('w = 0 or h = 0');
    setTimeout(() => {
      if (this.canvasManager) this.canvasManager.clearRecycled();
    }, 0);
  }
  __setApp() {}
  __bindApp(app) {
    this.selector = app.selector;
    this.interaction = app.interaction;
    this.canvasManager = app.canvasManager;
    this.hitCanvasManager = app.hitCanvasManager;
  }
  __setLeafer(leafer) {
    this.leafer = leafer;
    this.__level = 1;
  }
  __checkAutoLayout(config) {
    if (!config.width || !config.height) {
      this.autoLayout = new AutoBounds(config);
      this.canvas.startAutoLayout(this.autoLayout, this.__onResize.bind(this));
    }
  }
  __setAttr(attrName, newValue) {
    if (this.canvas) {
      if (canvasSizeAttrs.includes(attrName)) {
        if (!newValue) draw_esm_debug.warn(attrName + ' is 0');
        this.__changeCanvasSize(attrName, newValue);
      } else if (attrName === 'fill') {
        this.__changeFill(newValue);
      } else if (attrName === 'hittable') {
        if (!this.parent) this.canvas.hittable = newValue;
      } else if (attrName === 'zIndex') {
        this.canvas.zIndex = newValue;
        setTimeout(() => this.parent && this.parent.__updateSortChildren());
      }
    }
    return super.__setAttr(attrName, newValue);
  }
  __getAttr(attrName) {
    if (this.canvas && canvasSizeAttrs.includes(attrName)) return this.canvas[attrName];
    return super.__getAttr(attrName);
  }
  __changeCanvasSize(attrName, newValue) {
    const data = DataHelper.copyAttrs({}, this.canvas, canvasSizeAttrs);
    data[attrName] = this.config[attrName] = newValue;
    if (newValue) this.canvas.stopAutoLayout();
    this.__doResize(data);
  }
  __changeFill(newValue) {
    this.config.fill = newValue;
    if (this.canvas.allowBackgroundColor) {
      this.canvas.backgroundColor = newValue;
    } else {
      this.forceRender();
    }
  }
  __onCreated() {
    this.created = true;
  }
  __onReady() {
    if (this.ready) return;
    this.ready = true;
    this.emitLeafer(LeaferEvent.BEFORE_READY);
    this.emitLeafer(LeaferEvent.READY);
    this.emitLeafer(LeaferEvent.AFTER_READY);
    WaitHelper.run(this.__readyWait);
  }
  __onViewReady() {
    if (this.viewReady) return;
    this.viewReady = true;
    this.emitLeafer(LeaferEvent.VIEW_READY);
    WaitHelper.run(this.__viewReadyWait);
  }
  __onNextRender() {
    if (this.viewReady) {
      WaitHelper.run(this.__nextRenderWait);
      const {
        imageReady
      } = this;
      if (imageReady && !this.viewCompleted) this.__checkViewCompleted();
      if (!imageReady) this.viewCompleted = false;
    }
  }
  __checkViewCompleted(emit = true) {
    this.nextRender(() => {
      if (this.imageReady) {
        if (emit) this.emitLeafer(LeaferEvent.VIEW_COMPLETED);
        WaitHelper.run(this.__viewCompletedWait);
        this.viewCompleted = true;
      }
    });
  }
  __onWatchData() {
    if (this.watcher.childrenChanged && this.interaction) {
      this.nextRender(() => this.interaction.updateCursor());
    }
  }
  waitInit(item, bind) {
    if (bind) item = item.bind(bind);
    if (!this.__initWait) this.__initWait = [];
    this.canvas ? item() : this.__initWait.push(item);
  }
  waitReady(item, bind) {
    if (bind) item = item.bind(bind);
    this.ready ? item() : this.__readyWait.push(item);
  }
  waitViewReady(item, bind) {
    if (bind) item = item.bind(bind);
    this.viewReady ? item() : this.__viewReadyWait.push(item);
  }
  waitViewCompleted(item, bind) {
    if (bind) item = item.bind(bind);
    this.__viewCompletedWait.push(item);
    if (this.viewCompleted) {
      this.__checkViewCompleted(false);
    } else {
      if (!this.running) this.start();
    }
  }
  nextRender(item, bind, off) {
    if (bind) item = item.bind(bind);
    const list = this.__nextRenderWait;
    if (off) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
          list.splice(i, 1);
          break;
        }
      }
    } else {
      list.push(item);
    }
  }
  zoom(_zoomType, _padding, _fixedScale) {
    return undefined;
  }
  getValidMove(moveX, moveY) {
    return {
      x: moveX,
      y: moveY
    };
  }
  getValidScale(changeScale) {
    return changeScale;
  }
  getWorldPointByClient(clientPoint, updateClient) {
    return this.interaction && this.interaction.getLocal(clientPoint, updateClient);
  }
  __checkUpdateLayout() {
    this.__layout.update();
  }
  emitLeafer(type) {
    this.emitEvent(new LeaferEvent(type, this));
  }
  __listenEvents() {
    const runId = Run.start('FirstCreate ' + this.innerName);
    this.once(LeaferEvent.START, () => Run.end(runId));
    this.once(LayoutEvent.START, () => this.updateLazyBounds());
    this.once(LayoutEvent.END, () => this.__onReady());
    this.once(RenderEvent.START, () => this.__onCreated());
    this.once(RenderEvent.END, () => this.__onViewReady());
    this.__eventIds.push(this.on_(WatchEvent.DATA, this.__onWatchData, this), this.on_(RenderEvent.NEXT, this.__onNextRender, this), this.on_(LayoutEvent.CHECK_UPDATE, this.__checkUpdateLayout, this));
  }
  __removeListenEvents() {
    this.off_(this.__eventIds);
    this.__eventIds.length = 0;
  }
  destroy(sync) {
    const doDestory = () => {
      if (!this.destroyed) {
        Leafer_1.list.remove(this);
        try {
          this.stop();
          this.emitEvent(new LeaferEvent(LeaferEvent.END, this));
          this.__removeListenEvents();
          this.__controllers.forEach(item => {
            if (!(this.parent && item === this.interaction)) item.destroy();
          });
          this.__controllers.length = 0;
          if (!this.parent) {
            if (this.selector) this.selector.destroy();
            if (this.hitCanvasManager) this.hitCanvasManager.destroy();
            this.canvasManager.destroy();
          }
          this.canvas.destroy();
          this.config.view = this.view = null;
          if (this.userConfig) this.userConfig.view = null;
          super.destroy();
          setTimeout(() => {
            ImageManager.clearRecycled();
          }, 100);
        } catch (e) {
          draw_esm_debug.error(e);
        }
      }
    };
    sync ? doDestory() : setTimeout(doDestory);
  }
};
Leafer.list = new LeafList();
draw_esm_decorate([dataProcessor(LeaferData)], Leafer.prototype, "__", void 0);
draw_esm_decorate([boundsType()], Leafer.prototype, "pixelRatio", void 0);
Leafer = Leafer_1 = draw_esm_decorate([registerUI()], Leafer);
let Rect = class Rect extends UI {
  get __tag() {
    return 'Rect';
  }
  constructor(data) {
    super(data);
  }
};
draw_esm_decorate([dataProcessor(RectData)], Rect.prototype, "__", void 0);
Rect = draw_esm_decorate([useModule(RectRender), rewriteAble(), registerUI()], Rect);
const draw_esm_rect = Rect.prototype;
const group = Group.prototype;
const childrenRenderBounds = {};
const {
  copy: draw_esm_copy,
  add: draw_esm_add,
  includes: includes$1
} = BoundsHelper;
let Box = class Box extends Group {
  get __tag() {
    return 'Box';
  }
  get isBranchLeaf() {
    return true;
  }
  constructor(data) {
    super(data);
    this.__layout.renderChanged || this.__layout.renderChange();
  }
  __updateStrokeSpread() {
    return 0;
  }
  __updateRectRenderSpread() {
    return 0;
  }
  __updateRenderSpread() {
    return this.__updateRectRenderSpread() || -1;
  }
  __updateRectBoxBounds() {}
  __updateBoxBounds() {
    const data = this.__;
    if (this.children.length) {
      if (data.__autoSide) {
        if (this.leafer && this.leafer.ready) this.leafer.layouter.addExtra(this);
        super.__updateBoxBounds();
        if (!data.__autoSize) {
          const b = this.__layout.boxBounds;
          if (!data.__autoWidth) b.height += b.y, b.width = data.width, b.x = b.y = 0;
          if (!data.__autoHeight) b.width += b.x, b.height = data.height, b.y = b.x = 0;
        }
      } else {
        this.__updateRectBoxBounds();
      }
      if (data.flow) this.__updateContentBounds();
    } else {
      this.__updateRectBoxBounds();
    }
  }
  __updateStrokeBounds() {}
  __updateRenderBounds() {
    let isOverflow;
    const {
      renderBounds
    } = this.__layout;
    if (this.children.length) {
      super.__updateRenderBounds();
      draw_esm_copy(childrenRenderBounds, renderBounds);
      this.__updateRectRenderBounds();
      isOverflow = !includes$1(renderBounds, childrenRenderBounds) || undefined;
    } else {
      this.__updateRectRenderBounds();
    }
    this.isOverflow !== isOverflow && (this.isOverflow = isOverflow);
    if (isOverflow && !(this.__.__drawAfterFill = this.__.overflow === 'hide')) draw_esm_add(renderBounds, childrenRenderBounds);
  }
  __updateRectRenderBounds() {}
  __updateRectChange() {}
  __updateChange() {
    super.__updateChange();
    this.__updateRectChange();
  }
  __renderRect(_canvas, _options) {}
  __renderGroup(_canvas, _options) {}
  __render(canvas, options) {
    if (this.__.__drawAfterFill) {
      this.__renderRect(canvas, options);
    } else {
      this.__renderRect(canvas, options);
      if (this.children.length) this.__renderGroup(canvas, options);
    }
  }
  __drawAfterFill(canvas, options) {
    const {
      length
    } = this.children;
    if (this.isOverflow) {
      canvas.save();
      canvas.clip();
      if (length) this.__renderGroup(canvas, options);
      canvas.restore();
    } else {
      if (length) this.__renderGroup(canvas, options);
    }
    if (this.__.stroke && length) {
      canvas.setWorld(this.__nowWorld);
      this.__drawRenderPath(canvas);
    }
  }
};
draw_esm_decorate([dataProcessor(BoxData)], Box.prototype, "__", void 0);
draw_esm_decorate([dataType(false)], Box.prototype, "resizeChildren", void 0);
draw_esm_decorate([affectRenderBoundsType('show')], Box.prototype, "overflow", void 0);
draw_esm_decorate([rewrite(draw_esm_rect.__updateStrokeSpread)], Box.prototype, "__updateStrokeSpread", null);
draw_esm_decorate([rewrite(draw_esm_rect.__updateRenderSpread)], Box.prototype, "__updateRectRenderSpread", null);
draw_esm_decorate([rewrite(draw_esm_rect.__updateBoxBounds)], Box.prototype, "__updateRectBoxBounds", null);
draw_esm_decorate([rewrite(draw_esm_rect.__updateStrokeBounds)], Box.prototype, "__updateStrokeBounds", null);
draw_esm_decorate([rewrite(draw_esm_rect.__updateRenderBounds)], Box.prototype, "__updateRectRenderBounds", null);
draw_esm_decorate([rewrite(draw_esm_rect.__updateChange)], Box.prototype, "__updateRectChange", null);
draw_esm_decorate([rewrite(draw_esm_rect.__render)], Box.prototype, "__renderRect", null);
draw_esm_decorate([rewrite(group.__render)], Box.prototype, "__renderGroup", null);
Box = draw_esm_decorate([rewriteAble(), registerUI()], Box);
let Frame = class Frame extends Box {
  get __tag() {
    return 'Frame';
  }
  get isFrame() {
    return true;
  }
  constructor(data) {
    super(data);
  }
};
draw_esm_decorate([dataProcessor(FrameData)], Frame.prototype, "__", void 0);
draw_esm_decorate([surfaceType('#FFFFFF')], Frame.prototype, "fill", void 0);
draw_esm_decorate([affectRenderBoundsType('hide')], Frame.prototype, "overflow", void 0);
Frame = draw_esm_decorate([registerUI()], Frame);
const {
  moveTo: moveTo$3,
  closePath: closePath$2,
  ellipse: draw_esm_ellipse
} = PathCommandDataHelper;
let Ellipse = class Ellipse extends UI {
  get __tag() {
    return 'Ellipse';
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const {
      width,
      height,
      innerRadius,
      startAngle,
      endAngle
    } = this.__;
    const rx = width / 2,
      ry = height / 2;
    const path = this.__.path = [];
    if (innerRadius) {
      if (startAngle || endAngle) {
        if (innerRadius < 1) draw_esm_ellipse(path, rx, ry, rx * innerRadius, ry * innerRadius, 0, startAngle, endAngle, false);
        draw_esm_ellipse(path, rx, ry, rx, ry, 0, endAngle, startAngle, true);
        if (innerRadius < 1) closePath$2(path);
      } else {
        if (innerRadius < 1) {
          draw_esm_ellipse(path, rx, ry, rx * innerRadius, ry * innerRadius);
          moveTo$3(path, width, ry);
        }
        draw_esm_ellipse(path, rx, ry, rx, ry, 0, 360, 0, true);
      }
      if (Platform.ellipseToCurve) this.__.path = this.getPath(true);
    } else {
      if (startAngle || endAngle) {
        moveTo$3(path, rx, ry);
        draw_esm_ellipse(path, rx, ry, rx, ry, 0, startAngle, endAngle, false);
        closePath$2(path);
      } else {
        draw_esm_ellipse(path, rx, ry, rx, ry);
      }
    }
  }
};
draw_esm_decorate([dataProcessor(EllipseData)], Ellipse.prototype, "__", void 0);
draw_esm_decorate([pathType(0)], Ellipse.prototype, "innerRadius", void 0);
draw_esm_decorate([pathType(0)], Ellipse.prototype, "startAngle", void 0);
draw_esm_decorate([pathType(0)], Ellipse.prototype, "endAngle", void 0);
Ellipse = draw_esm_decorate([registerUI()], Ellipse);
const {
  moveTo: moveTo$2,
  lineTo: lineTo$2,
  drawPoints: drawPoints$1
} = PathCommandDataHelper;
const {
  rotate,
  getAngle,
  getDistance,
  defaultPoint
} = PointHelper;
const {
  toBounds: draw_esm_toBounds
} = PathBounds;
let Line = class Line extends UI {
  get __tag() {
    return 'Line';
  }
  get toPoint() {
    const {
      width,
      rotation
    } = this.__;
    const to = getPointData();
    if (width) to.x = width;
    if (rotation) rotate(to, rotation);
    return to;
  }
  set toPoint(value) {
    this.width = getDistance(defaultPoint, value);
    this.rotation = getAngle(defaultPoint, value);
    if (this.height) this.height = 0;
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const data = this.__;
    const path = data.path = [];
    if (data.points) {
      drawPoints$1(path, data.points, false, data.closed);
    } else {
      moveTo$2(path, 0, 0);
      lineTo$2(path, this.width, 0);
    }
  }
  __updateRenderPath() {
    const data = this.__;
    if (!this.pathInputed && data.points && data.curve) {
      drawPoints$1(data.__pathForRender = [], data.points, data.curve, data.closed);
      if (data.__useArrow) PathArrow.addArrows(this, false);
    } else {
      super.__updateRenderPath();
    }
  }
  __updateBoxBounds() {
    if (this.points) {
      draw_esm_toBounds(this.__.__pathForRender, this.__layout.boxBounds);
    } else {
      super.__updateBoxBounds();
    }
  }
};
draw_esm_decorate([dataProcessor(LineData)], Line.prototype, "__", void 0);
draw_esm_decorate([affectStrokeBoundsType('center')], Line.prototype, "strokeAlign", void 0);
draw_esm_decorate([boundsType(0)], Line.prototype, "height", void 0);
draw_esm_decorate([pathType()], Line.prototype, "points", void 0);
draw_esm_decorate([pathType(0)], Line.prototype, "curve", void 0);
draw_esm_decorate([pathType(false)], Line.prototype, "closed", void 0);
Line = draw_esm_decorate([registerUI()], Line);
const {
  sin: draw_esm_sin$1,
  cos: draw_esm_cos$1,
  PI: draw_esm_PI$1
} = Math;
const {
  moveTo: moveTo$1,
  lineTo: lineTo$1,
  closePath: closePath$1,
  drawPoints: draw_esm_drawPoints
} = PathCommandDataHelper;
const line = Line.prototype;
let Polygon = class Polygon extends UI {
  get __tag() {
    return 'Polygon';
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const path = this.__.path = [];
    if (this.__.points) {
      draw_esm_drawPoints(path, this.__.points, false, true);
    } else {
      const {
        width,
        height,
        sides
      } = this.__;
      const rx = width / 2,
        ry = height / 2;
      moveTo$1(path, rx, 0);
      for (let i = 1; i < sides; i++) {
        lineTo$1(path, rx + rx * draw_esm_sin$1(i * 2 * draw_esm_PI$1 / sides), ry - ry * draw_esm_cos$1(i * 2 * draw_esm_PI$1 / sides));
      }
    }
    closePath$1(path);
  }
  __updateRenderPath() {}
  __updateBoxBounds() {}
};
draw_esm_decorate([dataProcessor(PolygonData)], Polygon.prototype, "__", void 0);
draw_esm_decorate([pathType(3)], Polygon.prototype, "sides", void 0);
draw_esm_decorate([pathType()], Polygon.prototype, "points", void 0);
draw_esm_decorate([pathType(0)], Polygon.prototype, "curve", void 0);
draw_esm_decorate([rewrite(line.__updateRenderPath)], Polygon.prototype, "__updateRenderPath", null);
draw_esm_decorate([rewrite(line.__updateBoxBounds)], Polygon.prototype, "__updateBoxBounds", null);
Polygon = draw_esm_decorate([rewriteAble(), registerUI()], Polygon);
const {
  sin: draw_esm_sin,
  cos: draw_esm_cos,
  PI: draw_esm_PI
} = Math;
const {
  moveTo: draw_esm_moveTo,
  lineTo: draw_esm_lineTo,
  closePath: draw_esm_closePath
} = PathCommandDataHelper;
let Star = class Star extends UI {
  get __tag() {
    return 'Star';
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const {
      width,
      height,
      corners,
      innerRadius
    } = this.__;
    const rx = width / 2,
      ry = height / 2;
    const path = this.__.path = [];
    draw_esm_moveTo(path, rx, 0);
    for (let i = 1; i < corners * 2; i++) {
      draw_esm_lineTo(path, rx + (i % 2 === 0 ? rx : rx * innerRadius) * draw_esm_sin(i * draw_esm_PI / corners), ry - (i % 2 === 0 ? ry : ry * innerRadius) * draw_esm_cos(i * draw_esm_PI / corners));
    }
    draw_esm_closePath(path);
  }
};
draw_esm_decorate([dataProcessor(StarData)], Star.prototype, "__", void 0);
draw_esm_decorate([pathType(5)], Star.prototype, "corners", void 0);
draw_esm_decorate([pathType(0.382)], Star.prototype, "innerRadius", void 0);
Star = draw_esm_decorate([registerUI()], Star);
let draw_esm_Image = class Image extends Rect {
  get __tag() {
    return 'Image';
  }
  get ready() {
    return this.image ? this.image.ready : false;
  }
  constructor(data) {
    super(data);
    this.on(ImageEvent.LOADED, e => {
      if (e.attrName === 'fill' && e.attrValue.url === this.url) this.image = e.image;
    });
  }
  destroy() {
    this.image = null;
    super.destroy();
  }
};
draw_esm_decorate([dataProcessor(ImageData)], draw_esm_Image.prototype, "__", void 0);
draw_esm_decorate([boundsType('')], draw_esm_Image.prototype, "url", void 0);
draw_esm_Image = draw_esm_decorate([registerUI()], draw_esm_Image);
let draw_esm_Canvas = class Canvas extends Rect {
  get __tag() {
    return 'Canvas';
  }
  constructor(data) {
    super(data);
    this.canvas = Creator.canvas(this.__);
    this.context = this.canvas.context;
    this.__.__isCanvas = this.__.__drawAfterFill = true;
  }
  draw(ui, offset, scale, rotation) {
    ui.__layout.update();
    const matrix = new Matrix(ui.__world).invert();
    const m = new Matrix();
    if (offset) m.translate(offset.x, offset.y);
    if (scale) typeof scale === 'number' ? m.scale(scale) : m.scale(scale.x, scale.y);
    if (rotation) m.rotate(rotation);
    matrix.multiplyParent(m);
    ui.__render(this.canvas, {
      matrix: matrix.withScale()
    });
    this.paint();
  }
  paint() {
    this.forceUpdate('fill');
  }
  __drawAfterFill(canvas, _options) {
    const origin = this.canvas.view;
    const {
      width,
      height
    } = this;
    if (this.__.cornerRadius || this.pathInputed) {
      canvas.save();
      canvas.clip();
      canvas.drawImage(this.canvas.view, 0, 0, origin.width, origin.height, 0, 0, width, height);
      canvas.restore();
    } else {
      canvas.drawImage(this.canvas.view, 0, 0, origin.width, origin.height, 0, 0, width, height);
    }
  }
  __updateSize() {
    const {
      canvas
    } = this;
    if (canvas) {
      const {
        smooth
      } = this.__;
      if (canvas.smooth !== smooth) canvas.smooth = smooth;
      canvas.resize(this.__);
    }
  }
  destroy() {
    if (this.canvas) {
      this.canvas.destroy();
      this.canvas = null;
      this.context = null;
    }
    super.destroy();
  }
};
draw_esm_decorate([dataProcessor(CanvasData)], draw_esm_Canvas.prototype, "__", void 0);
draw_esm_decorate([resizeType(100)], draw_esm_Canvas.prototype, "width", void 0);
draw_esm_decorate([resizeType(100)], draw_esm_Canvas.prototype, "height", void 0);
draw_esm_decorate([resizeType(Platform.devicePixelRatio)], draw_esm_Canvas.prototype, "pixelRatio", void 0);
draw_esm_decorate([resizeType(true)], draw_esm_Canvas.prototype, "smooth", void 0);
draw_esm_decorate([resizeType()], draw_esm_Canvas.prototype, "contextSettings", void 0);
draw_esm_Canvas = draw_esm_decorate([registerUI()], draw_esm_Canvas);
const {
  copyAndSpread: draw_esm_copyAndSpread,
  includes,
  isSame,
  spread,
  setList
} = BoundsHelper;
let draw_esm_Text = class Text extends UI {
  get __tag() {
    return 'Text';
  }
  get editInner() {
    return 'TextEditor';
  }
  get textDrawData() {
    this.__layout.update();
    return this.__.__textDrawData;
  }
  constructor(data) {
    super(data);
  }
  __drawHitPath(canvas) {
    const {
      __lineHeight,
      __baseLine,
      __textDrawData: data
    } = this.__;
    canvas.beginPath();
    if (this.__.__letterSpacing < 0) {
      this.__drawPathByData(canvas);
    } else {
      data.rows.forEach(row => canvas.rect(row.x, row.y - __baseLine, row.width, __lineHeight));
    }
  }
  __drawPathByData(drawer, _data) {
    const {
      x,
      y,
      width,
      height
    } = this.__layout.boxBounds;
    drawer.rect(x, y, width, height);
  }
  __drawRenderPath(canvas) {
    canvas.font = this.__.__font;
  }
  __updateTextDrawData() {
    const data = this.__;
    data.__textDrawData = TextConvert.getDrawData(data.text, this.__);
  }
  __updateBoxBounds() {
    const data = this.__;
    const layout = this.__layout;
    const {
      lineHeight,
      letterSpacing,
      fontFamily,
      fontSize,
      fontWeight,
      italic,
      textCase,
      textOverflow,
      padding
    } = data;
    const autoWidth = data.__autoWidth;
    const autoHeight = data.__autoHeight;
    data.__lineHeight = UnitConvert.number(lineHeight, fontSize);
    data.__letterSpacing = UnitConvert.number(letterSpacing, fontSize);
    data.__padding = padding ? MathHelper.fourNumber(padding) : undefined;
    data.__baseLine = data.__lineHeight - (data.__lineHeight - fontSize * 0.7) / 2;
    data.__font = `${italic ? 'italic ' : ''}${textCase === 'small-caps' ? 'small-caps ' : ''}${fontWeight !== 'normal' ? fontWeight + ' ' : ''}${fontSize}px ${fontFamily}`;
    data.__clipText = textOverflow !== 'show' && !data.__autoSize;
    this.__updateTextDrawData();
    const {
      bounds
    } = data.__textDrawData;
    const b = layout.boxBounds;
    if (data.__lineHeight < fontSize) spread(bounds, fontSize / 2);
    if (autoWidth || autoHeight) {
      b.x = autoWidth ? bounds.x : 0;
      b.y = autoHeight ? bounds.y : 0;
      b.width = autoWidth ? bounds.width : data.width;
      b.height = autoHeight ? bounds.height : data.height;
      if (padding) {
        const [top, right, bottom, left] = data.__padding;
        if (autoWidth) {
          b.x -= left;
          b.width += right + left;
        }
        if (autoHeight) {
          b.y -= top;
          b.height += bottom + top;
        }
      }
      this.__updateNaturalSize();
    } else {
      super.__updateBoxBounds();
    }
    if (italic) b.width += fontSize * 0.16;
    const contentBounds = includes(b, bounds) ? b : bounds;
    if (!isSame(contentBounds, layout.contentBounds)) {
      layout.contentBounds = contentBounds;
      layout.renderChanged = true;
      setList(data.__textBoxBounds = {}, [b, bounds]);
    } else {
      data.__textBoxBounds = contentBounds;
    }
  }
  __updateRenderSpread() {
    let width = super.__updateRenderSpread();
    if (!width) width = this.__layout.boxBounds === this.__layout.contentBounds ? 0 : 1;
    return width;
  }
  __updateRenderBounds() {
    draw_esm_copyAndSpread(this.__layout.renderBounds, this.__.__textBoxBounds, this.__layout.renderSpread);
  }
};
draw_esm_decorate([dataProcessor(TextData)], draw_esm_Text.prototype, "__", void 0);
draw_esm_decorate([boundsType(0)], draw_esm_Text.prototype, "width", void 0);
draw_esm_decorate([boundsType(0)], draw_esm_Text.prototype, "height", void 0);
draw_esm_decorate([dataType(false)], draw_esm_Text.prototype, "resizeFontSize", void 0);
draw_esm_decorate([surfaceType('#000000')], draw_esm_Text.prototype, "fill", void 0);
draw_esm_decorate([affectStrokeBoundsType('outside')], draw_esm_Text.prototype, "strokeAlign", void 0);
draw_esm_decorate([hitType('all')], draw_esm_Text.prototype, "hitFill", void 0);
draw_esm_decorate([boundsType('')], draw_esm_Text.prototype, "text", void 0);
draw_esm_decorate([boundsType('L')], draw_esm_Text.prototype, "fontFamily", void 0);
draw_esm_decorate([boundsType(12)], draw_esm_Text.prototype, "fontSize", void 0);
draw_esm_decorate([boundsType('normal')], draw_esm_Text.prototype, "fontWeight", void 0);
draw_esm_decorate([boundsType(false)], draw_esm_Text.prototype, "italic", void 0);
draw_esm_decorate([boundsType('none')], draw_esm_Text.prototype, "textCase", void 0);
draw_esm_decorate([boundsType('none')], draw_esm_Text.prototype, "textDecoration", void 0);
draw_esm_decorate([boundsType(0)], draw_esm_Text.prototype, "letterSpacing", void 0);
draw_esm_decorate([boundsType({
  type: 'percent',
  value: 1.5
})], draw_esm_Text.prototype, "lineHeight", void 0);
draw_esm_decorate([boundsType(0)], draw_esm_Text.prototype, "paraIndent", void 0);
draw_esm_decorate([boundsType(0)], draw_esm_Text.prototype, "paraSpacing", void 0);
draw_esm_decorate([boundsType('left')], draw_esm_Text.prototype, "textAlign", void 0);
draw_esm_decorate([boundsType('top')], draw_esm_Text.prototype, "verticalAlign", void 0);
draw_esm_decorate([boundsType('normal')], draw_esm_Text.prototype, "textWrap", void 0);
draw_esm_decorate([boundsType('show')], draw_esm_Text.prototype, "textOverflow", void 0);
draw_esm_Text = draw_esm_decorate([registerUI()], draw_esm_Text);
let Path = class Path extends UI {
  get __tag() {
    return 'Path';
  }
  constructor(data) {
    super(data);
    this.__.__pathInputed = 2;
  }
};
draw_esm_decorate([dataProcessor(PathData)], Path.prototype, "__", void 0);
draw_esm_decorate([affectStrokeBoundsType('center')], Path.prototype, "strokeAlign", void 0);
Path = draw_esm_decorate([registerUI()], Path);
let Pen = class Pen extends Group {
  get __tag() {
    return 'Pen';
  }
  constructor(data) {
    super(data);
  }
  setStyle(data) {
    const path = this.pathElement = new Path(data);
    this.pathStyle = data;
    this.__path = path.path || (path.path = []);
    this.add(path);
    return this;
  }
  beginPath() {
    this.__path.length = 0;
    this.paint();
    return this;
  }
  moveTo(_x, _y) {
    return this;
  }
  lineTo(_x, _y) {
    return this;
  }
  bezierCurveTo(_x1, _y1, _x2, _y2, _x, _y) {
    return this;
  }
  quadraticCurveTo(_x1, _y1, _x, _y) {
    return this;
  }
  closePath() {
    return this;
  }
  rect(_x, _y, _width, _height) {
    return this;
  }
  roundRect(_x, _y, _width, _height, _cornerRadius) {
    return this;
  }
  ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  arcTo(_x1, _y1, _x2, _y2, _radius) {
    return this;
  }
  drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  drawArc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  drawPoints(_points, _curve, _close) {
    return this;
  }
  clearPath() {
    return this;
  }
  paint() {
    this.pathElement.forceUpdate('path');
  }
};
draw_esm_decorate([dataProcessor(PenData)], Pen.prototype, "__", void 0);
draw_esm_decorate([penPathType()], Pen.prototype, "path", void 0);
Pen = draw_esm_decorate([useModule(PathCreator, ['set', 'beginPath', 'path']), registerUI()], Pen);
function penPathType() {
  return (target, key) => {
    defineKey(target, key, {
      get() {
        return this.__path;
      }
    });
  };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@leafer-ui+core@1.0.0/node_modules/@leafer-ui/core/lib/core.esm.js




/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function core_esm_decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
let App = class App extends Leafer {
  get __tag() {
    return 'App';
  }
  get isApp() {
    return true;
  }
  constructor(userConfig, data) {
    super(userConfig, data);
  }
  init(userConfig, parentApp) {
    super.init(userConfig, parentApp);
    if (userConfig) {
      const {
        ground,
        tree,
        sky,
        editor
      } = userConfig;
      if (ground) this.ground = this.addLeafer(ground);
      if (tree || editor) this.tree = this.addLeafer(tree);
      if (sky || editor) this.sky = this.addLeafer(sky || {
        type: 'draw',
        usePartRender: false
      });
      if (editor) {
        this.editor = Creator.editor(editor);
        this.sky.add(this.editor);
      }
    }
  }
  __setApp() {
    const {
      canvas
    } = this;
    const {
      realCanvas,
      view
    } = this.config;
    if (realCanvas || view === this.canvas.view || !canvas.parentView) {
      this.realCanvas = true;
    } else {
      canvas.unrealCanvas();
    }
    this.leafer = this;
    this.watcher.disable();
    this.layouter.disable();
    this.__eventIds.push(this.on_(PropertyEvent.CHANGE, this.__onPropertyChange, this));
  }
  start() {
    super.start();
    this.children.forEach(leafer => leafer.start());
  }
  stop() {
    this.children.forEach(leafer => leafer.stop());
    super.stop();
  }
  unlockLayout() {
    super.unlockLayout();
    this.children.forEach(leafer => leafer.unlockLayout());
  }
  lockLayout() {
    super.lockLayout();
    this.children.forEach(leafer => leafer.lockLayout());
  }
  forceRender(bounds) {
    this.children.forEach(leafer => leafer.forceRender(bounds));
  }
  addLeafer(merge) {
    const leafer = new Leafer(merge);
    this.add(leafer);
    return leafer;
  }
  add(leafer, index) {
    if (!leafer.view) {
      if (this.realCanvas && !this.canvas.bounds) {
        setTimeout(() => this.add(leafer, index), 10);
        return;
      }
      leafer.init(this.__getChildConfig(leafer.userConfig), this);
    }
    super.add(leafer, index);
    if (index !== undefined) leafer.canvas.childIndex = index;
    this.__listenChildEvents(leafer);
  }
  __onPropertyChange() {
    if (Debug.showHitView) this.children.forEach(leafer => leafer.forceUpdate('surface'));
  }
  __onCreated() {
    this.created = this.children.every(child => child.created);
  }
  __onReady() {
    if (this.children.every(child => child.ready)) super.__onReady();
  }
  __onViewReady() {
    if (this.children.every(child => child.viewReady)) super.__onViewReady();
  }
  __onChildRenderEnd(e) {
    this.renderer.addBlock(e.renderBounds);
    if (this.viewReady) this.renderer.update();
  }
  __render(canvas, options) {
    if (options.matrix) {
      const {
        a,
        b,
        c,
        d,
        e,
        f
      } = options.matrix;
      canvas.setTransform(a, b, c, d, e, f);
    }
    this.children.forEach(leafer => canvas.copyWorld(leafer.canvas));
  }
  __onResize(event) {
    this.children.forEach(leafer => leafer.resize(event));
    super.__onResize(event);
  }
  __checkUpdateLayout() {
    this.children.forEach(leafer => leafer.__layout.update());
  }
  __getChildConfig(userConfig) {
    let config = Object.assign({}, this.config);
    config.hittable = config.realCanvas = undefined;
    if (userConfig) DataHelper.assign(config, userConfig);
    if (this.autoLayout) DataHelper.copyAttrs(config, this, canvasSizeAttrs);
    config.view = this.realCanvas ? undefined : this.view;
    config.fill = undefined;
    return config;
  }
  __listenChildEvents(leafer) {
    leafer.once(LayoutEvent.END, () => this.__onReady());
    leafer.once(RenderEvent.START, () => this.__onCreated());
    leafer.once(RenderEvent.END, () => this.__onViewReady());
    if (this.realCanvas) this.__eventIds.push(leafer.on_(RenderEvent.END, this.__onChildRenderEnd, this));
  }
};
App = core_esm_decorate([registerUI()], App);
const downKeyMap = {};
const Keyboard = {
  isHoldSpaceKey() {
    return Keyboard.isHold('Space');
  },
  isHold(code) {
    return downKeyMap[code];
  },
  setDownCode(code) {
    if (!downKeyMap[code]) downKeyMap[code] = true;
  },
  setUpCode(code) {
    downKeyMap[code] = false;
  }
};
const PointerButton = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4,
  defaultLeft(event) {
    if (!event.buttons) event.buttons = 1;
  },
  left(event) {
    return event.buttons === 1;
  },
  right(event) {
    return event.buttons === 2;
  },
  middle(event) {
    return event.buttons === 4;
  }
};
class UIEvent extends Event {
  get spaceKey() {
    return Keyboard.isHoldSpaceKey();
  }
  get left() {
    return PointerButton.left(this);
  }
  get right() {
    return PointerButton.right(this);
  }
  get middle() {
    return PointerButton.middle(this);
  }
  constructor(params) {
    super(params.type);
    this.bubbles = true;
    Object.assign(this, params);
  }
  getPage() {
    return this.current.getPagePoint(this);
  }
  getInner(relative) {
    if (!relative) relative = this.current;
    return relative.getInnerPoint(this);
  }
  getLocal(relative) {
    if (!relative) relative = this.current;
    return relative.getLocalPoint(this);
  }
  static changeName(oldName, newName) {
    EventCreator.changeName(oldName, newName);
  }
}
let PointerEvent = class PointerEvent extends UIEvent {};
PointerEvent.POINTER = 'pointer';
PointerEvent.BEFORE_DOWN = 'pointer.before_down';
PointerEvent.BEFORE_MOVE = 'pointer.before_move';
PointerEvent.BEFORE_UP = 'pointer.before_up';
PointerEvent.DOWN = 'pointer.down';
PointerEvent.MOVE = 'pointer.move';
PointerEvent.UP = 'pointer.up';
PointerEvent.OVER = 'pointer.over';
PointerEvent.OUT = 'pointer.out';
PointerEvent.ENTER = 'pointer.enter';
PointerEvent.LEAVE = 'pointer.leave';
PointerEvent.TAP = 'tap';
PointerEvent.DOUBLE_TAP = 'double_tap';
PointerEvent.CLICK = 'click';
PointerEvent.DOUBLE_CLICK = 'double_click';
PointerEvent.LONG_PRESS = 'long_press';
PointerEvent.LONG_TAP = 'long_tap';
PointerEvent.MENU = 'pointer.menu';
PointerEvent.MENU_TAP = 'pointer.menu_tap';
PointerEvent = core_esm_decorate([registerUIEvent()], PointerEvent);
const move = {};
let DragEvent = class DragEvent extends PointerEvent {
  static setList(data) {
    this.list = data instanceof LeafList ? data : new LeafList(data);
  }
  static setData(data) {
    this.data = data;
  }
  static getValidMove(leaf, start, total) {
    const {
      draggable,
      dragBounds,
      x,
      y
    } = leaf;
    const move = leaf.getLocalPoint(total, null, true);
    move.x += start.x - x;
    move.y += start.y - y;
    if (dragBounds) this.getMoveInDragBounds(leaf.__local, dragBounds === 'parent' ? leaf.parent.boxBounds : dragBounds, move, true);
    if (draggable === 'x') move.y = 0;
    if (draggable === 'y') move.x = 0;
    return move;
  }
  static getMoveInDragBounds(childBox, dragBounds, move, change) {
    const x = childBox.x + move.x,
      y = childBox.y + move.y;
    const right = x + childBox.width,
      bottom = y + childBox.height;
    const boundsRight = dragBounds.x + dragBounds.width,
      boundsBottom = dragBounds.y + dragBounds.height;
    if (!change) move = Object.assign({}, move);
    if (BoundsHelper.includes(childBox, dragBounds)) {
      if (x > dragBounds.x) move.x += dragBounds.x - x;else if (right < boundsRight) move.x += boundsRight - right;
      if (y > dragBounds.y) move.y += dragBounds.y - y;else if (bottom < boundsBottom) move.y += boundsBottom - bottom;
    } else {
      if (x < dragBounds.x) move.x += dragBounds.x - x;else if (right > boundsRight) move.x += boundsRight - right;
      if (y < dragBounds.y) move.y += dragBounds.y - y;else if (bottom > boundsBottom) move.y += boundsBottom - bottom;
    }
    return move;
  }
  getPageMove(total) {
    this.assignMove(total);
    return this.current.getPagePoint(move, null, true);
  }
  getInnerMove(relative, total) {
    if (!relative) relative = this.current;
    this.assignMove(total);
    return relative.getInnerPoint(move, null, true);
  }
  getLocalMove(relative, total) {
    if (!relative) relative = this.current;
    this.assignMove(total);
    return relative.getLocalPoint(move, null, true);
  }
  getPageTotal() {
    return this.getPageMove(true);
  }
  getInnerTotal(relative) {
    return this.getInnerMove(relative, true);
  }
  getLocalTotal(relative) {
    return this.getLocalMove(relative, true);
  }
  getPageBounds() {
    const total = this.getPageTotal();
    const start = this.getPage();
    const bounds = {};
    BoundsHelper.set(bounds, start.x - total.x, start.y - total.y, total.x, total.y);
    BoundsHelper.unsign(bounds);
    return bounds;
  }
  assignMove(total) {
    move.x = total ? this.totalX : this.moveX;
    move.y = total ? this.totalY : this.moveY;
  }
};
DragEvent.BEFORE_DRAG = 'drag.before_drag';
DragEvent.START = 'drag.start';
DragEvent.DRAG = 'drag';
DragEvent.END = 'drag.end';
DragEvent.OVER = 'drag.over';
DragEvent.OUT = 'drag.out';
DragEvent.ENTER = 'drag.enter';
DragEvent.LEAVE = 'drag.leave';
DragEvent = core_esm_decorate([registerUIEvent()], DragEvent);
let DropEvent = class DropEvent extends PointerEvent {
  static setList(data) {
    DragEvent.setList(data);
  }
  static setData(data) {
    DragEvent.setData(data);
  }
};
DropEvent.DROP = 'drop';
DropEvent = core_esm_decorate([registerUIEvent()], DropEvent);
let MoveEvent = class MoveEvent extends DragEvent {};
MoveEvent.BEFORE_MOVE = 'move.before_move';
MoveEvent.START = 'move.start';
MoveEvent.MOVE = 'move';
MoveEvent.END = 'move.end';
MoveEvent = core_esm_decorate([registerUIEvent()], MoveEvent);
let RotateEvent = class RotateEvent extends UIEvent {};
RotateEvent.BEFORE_ROTATE = 'rotate.before_rotate';
RotateEvent.START = 'rotate.start';
RotateEvent.ROTATE = 'rotate';
RotateEvent.END = 'rotate.end';
RotateEvent = core_esm_decorate([registerUIEvent()], RotateEvent);
let SwipeEvent = class SwipeEvent extends DragEvent {};
SwipeEvent.SWIPE = 'swipe';
SwipeEvent.LEFT = 'swipe.left';
SwipeEvent.RIGHT = 'swipe.right';
SwipeEvent.UP = 'swipe.up';
SwipeEvent.DOWN = 'swipe.down';
SwipeEvent = core_esm_decorate([registerUIEvent()], SwipeEvent);
let ZoomEvent = class ZoomEvent extends UIEvent {};
ZoomEvent.BEFORE_ZOOM = 'zoom.before_zoom';
ZoomEvent.START = 'zoom.start';
ZoomEvent.ZOOM = 'zoom';
ZoomEvent.END = 'zoom.end';
ZoomEvent = core_esm_decorate([registerUIEvent()], ZoomEvent);
let KeyEvent = class KeyEvent extends UIEvent {};
KeyEvent.DOWN = 'key.down';
KeyEvent.HOLD = 'key.hold';
KeyEvent.UP = 'key.up';
KeyEvent = core_esm_decorate([registerUIEvent()], KeyEvent);
function addInteractionWindow(leafer) {
  if (leafer.isApp) return;
  leafer.__eventIds.push(leafer.on_(MoveEvent.BEFORE_MOVE, e => {
    leafer.zoomLayer.move(leafer.getValidMove(e.moveX, e.moveY));
  }), leafer.on_(ZoomEvent.BEFORE_ZOOM, e => {
    const {
      zoomLayer
    } = leafer;
    const changeScale = leafer.getValidScale(e.scale);
    if (changeScale !== 1) {
      PointHelper.scaleOf(zoomLayer, e, changeScale);
      zoomLayer.scale = zoomLayer.__.scaleX * changeScale;
    }
  }));
}
function core_esm_document(leafer) {
  addInteractionWindow(leafer);
  leafer.config.move.scroll = 'limit';
  leafer.config.zoom.min = 1;
}
const core_esm_debug$1 = Debug.get('LeaferTypeCreator');
const LeaferTypeCreator = {
  list: {},
  register(name, fn) {
    if (core_esm_list[name]) {
      core_esm_debug$1.repeat(name);
    } else {
      core_esm_list[name] = fn;
    }
  },
  run(name, leafer) {
    const fn = core_esm_list[name];
    if (fn) {
      fn(leafer);
    } else {
      core_esm_debug$1.error('no', name);
    }
  }
};
const {
  list: core_esm_list,
  register
} = LeaferTypeCreator;
register('draw', () => {});
register('custom', () => {});
register('design', addInteractionWindow);
register('document', core_esm_document);
const leafer = Leafer.prototype;
leafer.initType = function (type) {
  LeaferTypeCreator.run(type, this);
};
leafer.getValidMove = function (moveX, moveY) {
  const {
    scroll,
    disabled
  } = this.app.config.move;
  if (scroll) {
    if (Math.abs(moveX) > Math.abs(moveY)) moveY = 0;else moveX = 0;
    if (scroll === 'limit') {
      const {
        x,
        y,
        width,
        height
      } = new Bounds(this.__world).addPoint(this.zoomLayer);
      const right = x + width - this.width,
        bottom = y + height - this.height;
      if (x >= 0 && right <= 0) moveX = 0;else if (moveX > 0) {
        if (x + moveX > 0) moveX = -x;
      } else if (moveX < 0 && right + moveX < 0) moveX = -right;
      if (y >= 0 && bottom <= 0) moveY = 0;else if (moveY > 0) {
        if (y + moveY > 0) moveY = -y;
      } else if (moveY < 0 && bottom + moveY < 0) moveY = -bottom;
    }
  }
  return {
    x: disabled ? 0 : moveX,
    y: disabled ? 0 : moveY
  };
};
leafer.getValidScale = function (changeScale) {
  const {
      scaleX
    } = this.zoomLayer.__,
    {
      min,
      max,
      disabled
    } = this.app.config.zoom,
    absScale = Math.abs(scaleX * changeScale);
  if (absScale < min) changeScale = min / scaleX;else if (absScale > max) changeScale = max / scaleX;
  return disabled ? 1 : changeScale;
};
class Transformer {
  constructor(interaction) {
    this.interaction = interaction;
  }
  move(data) {
    const {
      interaction
    } = this;
    if (!this.moveData) {
      const {
        path
      } = interaction.selector.getByPoint(data, interaction.hitRadius);
      data.path = path;
      this.moveData = Object.assign(Object.assign({}, data), {
        moveX: 0,
        moveY: 0
      });
      interaction.cancelHover();
      interaction.emit(MoveEvent.START, this.moveData);
    }
    data.path = this.moveData.path;
    interaction.emit(MoveEvent.BEFORE_MOVE, data);
    interaction.emit(MoveEvent.MOVE, data);
    this.transformEndWait();
  }
  zoom(data) {
    const {
      interaction
    } = this;
    if (!this.zoomData) {
      const {
        path
      } = interaction.selector.getByPoint(data, interaction.hitRadius);
      data.path = path;
      this.zoomData = Object.assign(Object.assign({}, data), {
        scale: 1
      });
      interaction.cancelHover();
      interaction.emit(ZoomEvent.START, this.zoomData);
    }
    data.path = this.zoomData.path;
    interaction.emit(ZoomEvent.BEFORE_ZOOM, data);
    interaction.emit(ZoomEvent.ZOOM, data);
    this.transformEndWait();
  }
  rotate(data) {
    const {
      interaction
    } = this;
    if (!this.rotateData) {
      const {
        path
      } = interaction.selector.getByPoint(data, interaction.hitRadius);
      data.path = path;
      this.rotateData = Object.assign(Object.assign({}, data), {
        rotation: 0
      });
      interaction.cancelHover();
      interaction.emit(RotateEvent.START, this.rotateData);
    }
    data.path = this.rotateData.path;
    interaction.emit(RotateEvent.BEFORE_ROTATE, data);
    interaction.emit(RotateEvent.ROTATE, data);
    this.transformEndWait();
  }
  transformEndWait() {
    clearTimeout(this.transformTimer);
    this.transformTimer = setTimeout(() => {
      this.transformEnd();
    }, this.interaction.config.pointer.transformTime);
  }
  transformEnd() {
    this.moveEnd();
    this.zoomEnd();
    this.rotateEnd();
  }
  moveEnd() {
    if (this.moveData) {
      this.interaction.emit(MoveEvent.END, this.moveData);
      this.moveData = null;
    }
  }
  zoomEnd() {
    if (this.zoomData) {
      this.interaction.emit(ZoomEvent.END, this.zoomData);
      this.zoomData = null;
    }
  }
  rotateEnd() {
    if (this.rotateData) {
      this.interaction.emit(RotateEvent.END, this.rotateData);
      this.rotateData = null;
    }
  }
  destroy() {
    this.zoomData = this.moveData = this.rotateData = null;
  }
}
const InteractionHelper = {
  getMoveEventData(center, move, event) {
    return Object.assign(Object.assign({}, event), {
      x: center.x,
      y: center.y,
      moveX: move.x,
      moveY: move.y
    });
  },
  getRotateEventData(center, angle, event) {
    return Object.assign(Object.assign({}, event), {
      x: center.x,
      y: center.y,
      rotation: angle
    });
  },
  getZoomEventData(center, scale, event) {
    return Object.assign(Object.assign({}, event), {
      x: center.x,
      y: center.y,
      scale
    });
  },
  getDragEventData(startPoint, lastPoint, event) {
    return Object.assign(Object.assign({}, event), {
      x: event.x,
      y: event.y,
      moveX: event.x - lastPoint.x,
      moveY: event.y - lastPoint.y,
      totalX: event.x - startPoint.x,
      totalY: event.y - startPoint.y
    });
  },
  getDropEventData(event, list, data) {
    return Object.assign(Object.assign({}, event), {
      list,
      data
    });
  },
  getSwipeDirection(angle) {
    if (angle < -45 && angle > -135) {
      return SwipeEvent.UP;
    } else if (angle > 45 && angle < 135) {
      return SwipeEvent.DOWN;
    } else if (angle <= 45 && angle >= -45) {
      return SwipeEvent.RIGHT;
    } else {
      return SwipeEvent.LEFT;
    }
  },
  getSwipeEventData(startPoint, lastDragData, event) {
    return Object.assign(Object.assign({}, event), {
      moveX: lastDragData.moveX,
      moveY: lastDragData.moveY,
      totalX: event.x - startPoint.x,
      totalY: event.y - startPoint.y,
      type: core_esm_I.getSwipeDirection(PointHelper.getAngle(startPoint, event))
    });
  },
  getBase(e) {
    const pointerUpButtons = e.button === 1 ? 4 : e.button;
    return {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      buttons: e.buttons === undefined ? 1 : e.buttons === 0 ? pointerUpButtons : e.buttons,
      origin: e
    };
  },
  pathHasEventType(path, type) {
    const {
      list
    } = path;
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].hasEvent(type)) return true;
    }
    return false;
  },
  filterPathByEventType(path, type) {
    const find = new LeafList();
    const {
      list
    } = path;
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].hasEvent(type)) find.add(list[i]);
    }
    return find;
  }
};
const core_esm_I = InteractionHelper;
const emptyList = new LeafList();
const {
  getDragEventData,
  getDropEventData,
  getSwipeEventData
} = InteractionHelper;
class Dragger {
  constructor(interaction) {
    this.interaction = interaction;
  }
  setDragData(data) {
    if (this.animateWait) this.dragEndReal();
    this.downData = this.interaction.downData;
    this.dragData = getDragEventData(data, data, data);
    this.canAnimate = this.canDragOut = true;
  }
  getList() {
    const {
      proxy
    } = this.interaction.selector;
    return this.dragging && (!proxy || !proxy.list.length) ? DragEvent.list || this.dragableList || emptyList : emptyList;
  }
  checkDrag(data, canDrag) {
    const {
      interaction
    } = this;
    if (this.moving && data.buttons < 1) {
      this.canAnimate = false;
      interaction.pointerCancel();
      return;
    }
    if (!this.moving && canDrag) {
      if (this.moving = interaction.canMove(this.downData) || interaction.isHoldRightKey || interaction.isMobileDragEmpty) interaction.emit(MoveEvent.START, this.dragData);
    }
    if (!this.moving) {
      this.dragStart(data, canDrag);
    }
    this.drag(data);
  }
  dragStart(data, canDrag) {
    if (!this.dragging) {
      this.dragging = canDrag && PointerButton.left(data);
      if (this.dragging) {
        this.interaction.emit(DragEvent.START, this.dragData);
        this.getDragableList(this.dragData.path);
        this.setDragStartPoints(this.realDragableList = this.getList());
      }
    }
  }
  setDragStartPoints(list) {
    this.dragStartPoints = {};
    list.forEach(leaf => this.dragStartPoints[leaf.innerId] = {
      x: leaf.x,
      y: leaf.y
    });
  }
  getDragableList(path) {
    let leaf;
    for (let i = 0, len = path.length; i < len; i++) {
      leaf = path.list[i];
      if ((leaf.__.draggable || leaf.__.editable) && leaf.__.hitSelf && !leaf.__.locked) {
        this.dragableList = new LeafList(leaf);
        break;
      }
    }
  }
  drag(data) {
    const {
      interaction,
      dragData,
      downData
    } = this;
    const {
      path,
      throughPath
    } = downData;
    this.dragData = getDragEventData(downData, dragData, data);
    if (throughPath) this.dragData.throughPath = throughPath;
    this.dragData.path = path;
    if (this.moving) {
      interaction.emit(MoveEvent.BEFORE_MOVE, this.dragData);
      interaction.emit(MoveEvent.MOVE, this.dragData);
    } else if (this.dragging) {
      this.dragReal();
      interaction.emit(DragEvent.BEFORE_DRAG, this.dragData);
      interaction.emit(DragEvent.DRAG, this.dragData);
    }
  }
  dragReal() {
    const {
      running
    } = this.interaction;
    const list = this.realDragableList;
    if (list.length && running) {
      const {
        totalX,
        totalY
      } = this.dragData;
      list.forEach(leaf => leaf.draggable && leaf.move(DragEvent.getValidMove(leaf, this.dragStartPoints[leaf.innerId], {
        x: totalX,
        y: totalY
      })));
    }
  }
  dragOverOrOut(data) {
    const {
      interaction
    } = this;
    const {
      dragOverPath
    } = this;
    const {
      path
    } = data;
    this.dragOverPath = path;
    if (dragOverPath) {
      if (path.indexAt(0) !== dragOverPath.indexAt(0)) {
        interaction.emit(DragEvent.OUT, data, dragOverPath);
        interaction.emit(DragEvent.OVER, data, path);
      }
    } else {
      interaction.emit(DragEvent.OVER, data, path);
    }
  }
  dragEnterOrLeave(data) {
    const {
      interaction
    } = this;
    const {
      dragEnterPath
    } = this;
    const {
      path
    } = data;
    interaction.emit(DragEvent.LEAVE, data, dragEnterPath, path);
    interaction.emit(DragEvent.ENTER, data, path, dragEnterPath);
    this.dragEnterPath = path;
  }
  dragEnd(data, speed) {
    if (!this.dragging && !this.moving) return;
    const {
      moveX,
      moveY
    } = this.dragData;
    if (this.interaction.config.move.dragAnimate && this.canAnimate && this.moving && (Math.abs(moveX) > 1 || Math.abs(moveY) > 1)) {
      data = Object.assign({}, data);
      speed = (speed || (data.pointerType === 'touch' ? 2 : 1)) * 0.9;
      PointHelper.move(data, moveX * speed, moveY * speed);
      this.drag(data);
      this.animate(() => {
        this.dragEnd(data, 1);
      });
    } else {
      this.dragEndReal(data);
    }
  }
  dragEndReal(data) {
    const {
      interaction,
      downData,
      dragData
    } = this;
    if (!data) data = dragData;
    const {
      path,
      throughPath
    } = downData;
    const endDragData = getDragEventData(downData, data, data);
    if (throughPath) endDragData.throughPath = throughPath;
    endDragData.path = path;
    if (this.moving) {
      this.moving = false;
      interaction.emit(MoveEvent.END, endDragData);
    }
    if (this.dragging) {
      const dropList = this.getList();
      this.dragging = false;
      interaction.emit(DragEvent.END, endDragData);
      this.swipe(data, downData, dragData, endDragData);
      this.drop(data, dropList, this.dragEnterPath);
    }
    this.autoMoveCancel();
    this.dragReset();
    this.animate(null, 'off');
  }
  animate(func, off) {
    const animateWait = func || this.animateWait;
    if (animateWait) this.interaction.target.nextRender(animateWait, null, off);
    this.animateWait = func;
  }
  swipe(data, downData, dragData, endDragData) {
    const {
      interaction
    } = this;
    if (PointHelper.getDistance(downData, data) > interaction.config.pointer.swipeDistance) {
      const swipeData = getSwipeEventData(downData, dragData, endDragData);
      this.interaction.emit(swipeData.type, swipeData);
    }
  }
  drop(data, dropList, dragEnterPath) {
    const dropData = getDropEventData(data, dropList, DragEvent.data);
    dropData.path = dragEnterPath;
    this.interaction.emit(DropEvent.DROP, dropData);
    this.interaction.emit(DragEvent.LEAVE, data, dragEnterPath);
  }
  dragReset() {
    DragEvent.list = DragEvent.data = this.dragableList = this.dragData = this.downData = this.dragOverPath = this.dragEnterPath = null;
  }
  checkDragOut(data) {
    const {
      interaction
    } = this;
    this.autoMoveCancel();
    if (this.dragging && !interaction.shrinkCanvasBounds.hitPoint(data)) this.autoMoveOnDragOut(data);
  }
  autoMoveOnDragOut(data) {
    const {
      interaction,
      downData,
      canDragOut
    } = this;
    const {
      autoDistance,
      dragOut
    } = interaction.config.move;
    if (!dragOut || !canDragOut || !autoDistance) return;
    const bounds = interaction.shrinkCanvasBounds;
    const {
      x,
      y
    } = bounds;
    const right = BoundsHelper.maxX(bounds);
    const bottom = BoundsHelper.maxY(bounds);
    const moveX = data.x < x ? autoDistance : right < data.x ? -autoDistance : 0;
    const moveY = data.y < y ? autoDistance : bottom < data.y ? -autoDistance : 0;
    let totalX = 0,
      totalY = 0;
    this.autoMoveTimer = setInterval(() => {
      totalX += moveX;
      totalY += moveY;
      PointHelper.move(downData, moveX, moveY);
      PointHelper.move(this.dragData, moveX, moveY);
      interaction.move(Object.assign(Object.assign({}, data), {
        moveX,
        moveY,
        totalX,
        totalY
      }));
      interaction.pointerMoveReal(data);
    }, 10);
  }
  autoMoveCancel() {
    if (this.autoMoveTimer) {
      clearInterval(this.autoMoveTimer);
      this.autoMoveTimer = 0;
    }
  }
  destroy() {
    this.dragReset();
  }
}
const core_esm_debug = Debug.get('emit');
function emit(type, data, path, excludePath) {
  if (!path && !data.path) return;
  let leaf;
  data.type = type;
  if (path) {
    data = Object.assign(Object.assign({}, data), {
      path
    });
  } else {
    path = data.path;
  }
  data.target = path.indexAt(0);
  try {
    for (let i = path.length - 1; i > -1; i--) {
      leaf = path.list[i];
      if (emitEvent(leaf, type, data, true, excludePath)) return;
      if (leaf.isApp) emitAppChildren(leaf, type, data, true, excludePath);
    }
    for (let i = 0, len = path.length; i < len; i++) {
      leaf = path.list[i];
      if (leaf.isApp) emitAppChildren(leaf, type, data, false, excludePath);
      if (emitEvent(leaf, type, data, false, excludePath)) return;
    }
  } catch (e) {
    core_esm_debug.error(e);
  }
}
const allowTypes = ['move', 'zoom', 'rotate', 'key'];
function emitAppChildren(leaf, type, data, capture, excludePath) {
  if (allowTypes.some(name => type.startsWith(name)) && leaf.__.hitChildren && !exclude(leaf, excludePath)) {
    let child;
    for (let i = 0, len = leaf.children.length; i < len; i++) {
      child = leaf.children[i];
      if (!data.path.has(child) && child.__.hittable) emitEvent(child, type, data, capture, excludePath);
    }
  }
}
function emitEvent(leaf, type, data, capture, excludePath) {
  if (leaf.destroyed) return false;
  if (leaf.__.hitSelf && !exclude(leaf, excludePath)) {
    if (State.updateEventStyle) State.updateEventStyle(leaf, type);
    if (leaf.hasEvent(type, capture)) {
      data.phase = capture ? 1 : leaf === data.target ? 2 : 3;
      const event = EventCreator.get(type, data);
      leaf.emitEvent(event, capture);
      if (event.isStop) return true;
    }
  }
  return false;
}
function exclude(leaf, excludePath) {
  return excludePath && excludePath.has(leaf);
}
const MultiTouchHelper = {
  getData(list) {
    const a = list[0];
    const b = list[1];
    const lastCenter = PointHelper.getCenter(a.from, b.from);
    const center = PointHelper.getCenter(a.to, b.to);
    const move = {
      x: center.x - lastCenter.x,
      y: center.y - lastCenter.y
    };
    const lastDistance = PointHelper.getDistance(a.from, b.from);
    const distance = PointHelper.getDistance(a.to, b.to);
    const scale = distance / lastDistance;
    const angle = PointHelper.getRotation(a.from, b.from, a.to, b.to);
    return {
      move,
      scale,
      angle,
      center
    };
  }
};
const config = {
  wheel: {
    zoomSpeed: 0.5,
    moveSpeed: 0.5,
    rotateSpeed: 0.5,
    delta: {
      x: 80 / 4,
      y: 8.0
    },
    preventDefault: true
  },
  pointer: {
    hitRadius: 5,
    tapTime: 120,
    longPressTime: 800,
    transformTime: 500,
    hover: true,
    dragHover: true,
    dragDistance: 2,
    swipeDistance: 20,
    preventDefaultMenu: true
  },
  cursor: true,
  keyEvent: true
};
const {
  pathHasEventType,
  getMoveEventData,
  getZoomEventData,
  getRotateEventData
} = InteractionHelper;
class InteractionBase {
  get dragging() {
    return this.dragger.dragging;
  }
  get moveMode() {
    return this.config.move.drag || this.isHoldSpaceKey || this.isHoldMiddleKey || this.isHoldRightKey && this.dragger.moving || this.isDragEmpty;
  }
  get isDragEmpty() {
    return this.config.move.dragEmpty && this.isRootPath(this.hoverData) && (!this.downData || this.isRootPath(this.downData));
  }
  get isMobileDragEmpty() {
    return this.config.move.dragEmpty && !this.config.pointer.hover && this.downData && this.isTreePath(this.downData);
  }
  get isHoldMiddleKey() {
    return this.config.move.holdMiddleKey && this.downData && PointerButton.middle(this.downData);
  }
  get isHoldRightKey() {
    return this.config.move.holdRightKey && this.downData && PointerButton.right(this.downData);
  }
  get isHoldSpaceKey() {
    return this.config.move.holdSpaceKey && Keyboard.isHoldSpaceKey();
  }
  get hitRadius() {
    return this.config.pointer.hitRadius;
  }
  constructor(target, canvas, selector, userConfig) {
    this.config = config;
    this.tapCount = 0;
    this.downKeyMap = {};
    this.target = target;
    this.canvas = canvas;
    this.selector = selector;
    this.defaultPath = new LeafList(target);
    this.transformer = new Transformer(this);
    this.dragger = new Dragger(this);
    if (userConfig) this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
  }
  start() {
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  receive(_event) {}
  pointerDown(data, useDefaultPath) {
    if (!data) data = this.hoverData;
    if (!data) return;
    PointerButton.defaultLeft(data);
    this.updateDownData(data);
    this.checkPath(data, useDefaultPath);
    this.downTime = Date.now();
    this.emit(PointerEvent.BEFORE_DOWN, data);
    this.emit(PointerEvent.DOWN, data);
    if (PointerButton.left(data)) {
      this.tapWait();
      this.longPressWait(data);
    }
    this.waitMenuTap = PointerButton.right(data);
    this.dragger.setDragData(data);
    if (!this.isHoldRightKey) this.updateCursor(data);
  }
  pointerMove(data) {
    if (!data) data = this.hoverData;
    if (!data) return;
    const {
      downData
    } = this;
    if (downData) PointerButton.defaultLeft(data);
    const hit = this.canvas.bounds.hitPoint(data);
    if (hit || downData) {
      this.pointerMoveReal(data);
      if (downData) this.dragger.checkDragOut(data);
    }
  }
  pointerMoveReal(data) {
    const {
      dragHover,
      dragDistance
    } = this.config.pointer;
    this.emit(PointerEvent.BEFORE_MOVE, data, this.defaultPath);
    if (this.downData) {
      const canDrag = PointHelper.getDistance(this.downData, data) > dragDistance;
      if (canDrag) {
        if (this.waitTap) this.pointerWaitCancel();
        this.waitMenuTap = false;
      }
      this.dragger.checkDrag(data, canDrag);
    }
    if (!this.dragger.moving) {
      this.updateHoverData(data);
      this.checkPath(data);
      this.emit(PointerEvent.MOVE, data);
      if (!(this.dragging && !dragHover)) this.pointerHover(data);
      if (this.dragger.dragging) {
        this.dragger.dragOverOrOut(data);
        this.dragger.dragEnterOrLeave(data);
      }
    }
    this.updateCursor(this.downData || data);
  }
  pointerUp(data) {
    const {
      downData
    } = this;
    if (!data) data = downData;
    if (!downData) return;
    PointerButton.defaultLeft(data);
    this.findPath(data);
    const upData = Object.assign(Object.assign({}, data), {
      path: data.path.clone()
    });
    data.path.addList(downData.path.list);
    this.checkPath(data);
    this.downData = null;
    this.emit(PointerEvent.BEFORE_UP, data);
    this.emit(PointerEvent.UP, data);
    this.touchLeave(data);
    if (!data.isCancel) {
      this.tap(data);
      this.menuTap(data);
    }
    this.dragger.dragEnd(data);
    this.updateCursor(upData);
  }
  pointerCancel() {
    const data = Object.assign({}, this.dragger.dragData);
    data.isCancel = true;
    this.pointerUp(data);
  }
  multiTouch(data, list) {
    const {
      move,
      angle,
      scale,
      center
    } = MultiTouchHelper.getData(list);
    this.rotate(getRotateEventData(center, angle, data));
    this.zoom(getZoomEventData(center, scale, data));
    this.move(getMoveEventData(center, move, data));
  }
  menu(data) {
    this.findPath(data);
    this.emit(PointerEvent.MENU, data);
  }
  menuTap(data) {
    if (this.waitMenuTap) this.emit(PointerEvent.MENU_TAP, data);
  }
  move(data) {
    this.transformer.move(data);
  }
  zoom(data) {
    this.transformer.zoom(data);
  }
  rotate(data) {
    this.transformer.rotate(data);
  }
  transformEnd() {
    this.transformer.transformEnd();
  }
  keyDown(data) {
    if (!this.config.keyEvent) return;
    const {
      code
    } = data;
    if (!this.downKeyMap[code]) {
      this.downKeyMap[code] = true;
      Keyboard.setDownCode(code);
      this.emit(KeyEvent.HOLD, data, this.defaultPath);
      if (this.moveMode) {
        this.cancelHover();
        this.updateCursor();
      }
    }
    this.emit(KeyEvent.DOWN, data, this.defaultPath);
  }
  keyUp(data) {
    if (!this.config.keyEvent) return;
    const {
      code
    } = data;
    this.downKeyMap[code] = false;
    Keyboard.setUpCode(code);
    this.emit(KeyEvent.UP, data, this.defaultPath);
    if (this.cursor === 'grab') this.updateCursor();
  }
  pointerHover(data) {
    if (this.config.pointer.hover) {
      this.pointerOverOrOut(data);
      this.pointerEnterOrLeave(data);
    }
  }
  pointerOverOrOut(data) {
    const {
      path
    } = data;
    const {
      overPath
    } = this;
    this.overPath = path;
    if (overPath) {
      if (path.indexAt(0) !== overPath.indexAt(0)) {
        this.emit(PointerEvent.OUT, data, overPath);
        this.emit(PointerEvent.OVER, data, path);
      }
    } else {
      this.emit(PointerEvent.OVER, data, path);
    }
  }
  pointerEnterOrLeave(data) {
    let {
      path
    } = data;
    if (this.downData && !this.moveMode) {
      path = path.clone();
      this.downData.path.forEach(leaf => path.add(leaf));
    }
    const {
      enterPath
    } = this;
    this.enterPath = path;
    this.emit(PointerEvent.LEAVE, data, enterPath, path);
    this.emit(PointerEvent.ENTER, data, path, enterPath);
  }
  touchLeave(data) {
    if (data.pointerType === 'touch') {
      if (this.enterPath) {
        this.emit(PointerEvent.LEAVE, data);
        if (this.dragger.dragging) this.emit(DropEvent.LEAVE, data);
      }
    }
  }
  tap(data) {
    const {
      pointer
    } = this.config;
    const hasLong = this.longTap(data);
    if (!pointer.tapMore && hasLong) return;
    if (!this.waitTap) return;
    if (pointer.tapMore) this.emitTap(data);
    const useTime = Date.now() - this.downTime;
    const hasDouble = [PointerEvent.DOUBLE_TAP, PointerEvent.DOUBLE_CLICK].some(type => pathHasEventType(data.path, type));
    if (useTime < pointer.tapTime + 50 && hasDouble) {
      this.tapCount++;
      if (this.tapCount === 2) {
        this.tapWaitCancel();
        this.emitDoubleTap(data);
      } else {
        clearTimeout(this.tapTimer);
        this.tapTimer = setTimeout(() => {
          if (!pointer.tapMore) {
            this.tapWaitCancel();
            this.emitTap(data);
          }
        }, pointer.tapTime);
      }
    } else {
      if (!pointer.tapMore) {
        this.tapWaitCancel();
        this.emitTap(data);
      }
    }
  }
  findPath(data, options) {
    const {
      hitRadius,
      through
    } = this.config.pointer;
    const {
      bottomList
    } = this;
    const find = this.selector.getByPoint(data, hitRadius, Object.assign({
      bottomList,
      name: data.type
    }, options || {
      through
    }));
    if (find.throughPath) data.throughPath = find.throughPath;
    data.path = find.path;
    return find.path;
  }
  isRootPath(data) {
    return data && data.path.list[0].isLeafer;
  }
  isTreePath(data) {
    const app = this.target.app;
    if (!app || !app.isApp) return false;
    return app.editor && !data.path.has(app.editor) && data.path.has(app.tree) && !data.target.syncEventer;
  }
  checkPath(data, useDefaultPath) {
    if (useDefaultPath || this.canMove(data)) data.path = this.defaultPath;
  }
  canMove(data) {
    return this.moveMode && data && data.path.list.every(item => !item.isOutside);
  }
  isDrag(leaf) {
    return this.dragger.getList().has(leaf);
  }
  isPress(leaf) {
    return this.downData && this.downData.path.has(leaf);
  }
  isHover(leaf) {
    return this.enterPath && this.enterPath.has(leaf);
  }
  isFocus(leaf) {
    return this.focusData === leaf;
  }
  cancelHover() {
    const {
      hoverData
    } = this;
    if (hoverData) {
      hoverData.path = this.defaultPath;
      this.pointerHover(hoverData);
    }
  }
  updateDownData(data, options, merge) {
    const {
      downData
    } = this;
    if (!data && downData) data = downData;
    if (!data) return;
    this.findPath(data, options);
    if (merge && downData) data.path.addList(downData.path.list);
    this.downData = data;
  }
  updateHoverData(data) {
    if (!data) data = this.hoverData;
    if (!data) return;
    this.findPath(data, {
      exclude: this.dragger.getList(),
      name: PointerEvent.MOVE
    });
    this.hoverData = data;
  }
  updateCursor(data) {
    if (!this.config.cursor || !this.config.pointer.hover) return;
    if (!data) {
      this.updateHoverData();
      data = this.downData || this.hoverData;
    }
    if (this.dragger.moving) {
      return this.setCursor('grabbing');
    } else if (this.canMove(data)) {
      return this.setCursor(this.downData ? 'grabbing' : 'grab');
    } else if (!data) return;
    let leaf, cursor;
    const {
      path
    } = data;
    for (let i = 0, len = path.length; i < len; i++) {
      leaf = path.list[i];
      cursor = leaf.syncEventer ? leaf.syncEventer.cursor : leaf.cursor;
      if (cursor) break;
    }
    this.setCursor(cursor);
  }
  setCursor(cursor) {
    this.cursor = cursor;
  }
  getLocal(clientPoint, updateClient) {
    const clientBounds = this.canvas.getClientBounds(updateClient);
    return {
      x: clientPoint.clientX - clientBounds.x,
      y: clientPoint.clientY - clientBounds.y
    };
  }
  emitTap(data) {
    this.emit(PointerEvent.TAP, data);
    this.emit(PointerEvent.CLICK, data);
  }
  emitDoubleTap(data) {
    this.emit(PointerEvent.DOUBLE_TAP, data);
    this.emit(PointerEvent.DOUBLE_CLICK, data);
  }
  pointerWaitCancel() {
    this.tapWaitCancel();
    this.longPressWaitCancel();
  }
  tapWait() {
    clearTimeout(this.tapTimer);
    this.waitTap = true;
  }
  tapWaitCancel() {
    clearTimeout(this.tapTimer);
    this.waitTap = false;
    this.tapCount = 0;
  }
  longPressWait(data) {
    clearTimeout(this.longPressTimer);
    this.longPressTimer = setTimeout(() => {
      this.longPressed = true;
      this.emit(PointerEvent.LONG_PRESS, data);
    }, this.config.pointer.longPressTime);
  }
  longTap(data) {
    let hasLong;
    if (this.longPressed) {
      this.emit(PointerEvent.LONG_TAP, data);
      if (pathHasEventType(data.path, PointerEvent.LONG_TAP) || pathHasEventType(data.path, PointerEvent.LONG_PRESS)) hasLong = true;
    }
    this.longPressWaitCancel();
    return hasLong;
  }
  longPressWaitCancel() {
    clearTimeout(this.longPressTimer);
    this.longPressed = false;
  }
  __onResize() {
    this.shrinkCanvasBounds = new Bounds(this.canvas.bounds);
    this.shrinkCanvasBounds.spread(-2);
  }
  __listenEvents() {
    const {
      target
    } = this;
    this.__eventIds = [target.on_(ResizeEvent.RESIZE, this.__onResize, this)];
    target.once(LeaferEvent.READY, () => this.__onResize());
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
    this.__eventIds.length = 0;
  }
  emit(type, data, path, excludePath) {
    if (this.running) emit(type, data, path, excludePath);
  }
  destroy() {
    if (this.__eventIds.length) {
      this.stop();
      this.__removeListenEvents();
      this.dragger.destroy();
      this.transformer.destroy();
      this.downData = this.overPath = this.enterPath = null;
    }
  }
}
class Cursor {
  static set(name, value) {
    this.custom[name] = value;
  }
  static get(name) {
    return this.custom[name];
  }
}
Cursor.custom = {};
class HitCanvasManager extends CanvasManager {
  constructor() {
    super(...arguments);
    this.maxTotal = 1000;
    this.pathList = new LeafList();
    this.pixelList = new LeafList();
  }
  getPixelType(leaf, config) {
    this.__autoClear();
    this.pixelList.add(leaf);
    return Creator.hitCanvas(config);
  }
  getPathType(leaf) {
    this.__autoClear();
    this.pathList.add(leaf);
    return Creator.hitCanvas();
  }
  clearImageType() {
    this.__clearLeafList(this.pixelList);
  }
  clearPathType() {
    this.__clearLeafList(this.pathList);
  }
  __clearLeafList(leafList) {
    if (leafList.length) {
      leafList.forEach(leaf => {
        if (leaf.__hitCanvas) {
          leaf.__hitCanvas.destroy();
          leaf.__hitCanvas = null;
        }
      });
      leafList.reset();
    }
  }
  __autoClear() {
    if (this.pathList.length + this.pixelList.length > this.maxTotal) this.clear();
  }
  clear() {
    this.clearPathType();
    this.clearImageType();
  }
}
const {
  toInnerRadiusPointOf,
  copy: core_esm_copy,
  setRadius
} = PointHelper;
const inner = {};
const leaf = Leaf.prototype;
leaf.__hitWorld = function (point) {
  if (!this.__.hitSelf) return false;
  if (this.__.hitRadius) {
    core_esm_copy(inner, point), point = inner;
    setRadius(point, this.__.hitRadius);
  }
  toInnerRadiusPointOf(point, this.__world, inner);
  const {
    width,
    height
  } = this.__world;
  const isSmall = width < 10 && height < 10;
  if (this.__.hitBox || isSmall) {
    if (BoundsHelper.hitRadiusPoint(this.__layout.boxBounds, inner)) return true;
    if (isSmall) return false;
  }
  if (this.__layout.hitCanvasChanged || !this.__hitCanvas) {
    this.__updateHitCanvas();
    if (!this.__layout.boundsChanged) this.__layout.hitCanvasChanged = false;
  }
  return this.__hit(inner);
};
leaf.__hitFill = function (inner) {
  var _a;
  return (_a = this.__hitCanvas) === null || _a === void 0 ? void 0 : _a.hitFill(inner, this.__.windingRule);
};
leaf.__hitStroke = function (inner, strokeWidth) {
  var _a;
  return (_a = this.__hitCanvas) === null || _a === void 0 ? void 0 : _a.hitStroke(inner, strokeWidth);
};
leaf.__hitPixel = function (inner) {
  var _a;
  return (_a = this.__hitCanvas) === null || _a === void 0 ? void 0 : _a.hitPixel(inner, this.__layout.renderBounds, this.__hitCanvas.hitScale);
};
leaf.__drawHitPath = function (canvas) {
  if (canvas) this.__drawRenderPath(canvas);
};
const core_esm_matrix = new Matrix();
const ui$2 = UI.prototype;
ui$2.__updateHitCanvas = function () {
  const data = this.__,
    {
      hitCanvasManager
    } = this.leafer;
  const isHitPixelFill = (data.__pixelFill || data.__isCanvas) && data.hitFill === 'pixel';
  const isHitPixelStroke = data.__pixelStroke && data.hitStroke === 'pixel';
  const isHitPixel = isHitPixelFill || isHitPixelStroke;
  if (!this.__hitCanvas) this.__hitCanvas = isHitPixel ? hitCanvasManager.getPixelType(this, {
    contextSettings: {
      willReadFrequently: true
    }
  }) : hitCanvasManager.getPathType(this);
  const h = this.__hitCanvas;
  if (isHitPixel) {
    const {
      renderBounds
    } = this.__layout;
    const size = Platform.image.hitCanvasSize;
    const scale = h.hitScale = tempBounds.set(0, 0, size, size).getFitMatrix(renderBounds, 0.5).a;
    const {
      x,
      y,
      width,
      height
    } = tempBounds.set(renderBounds).scale(scale);
    h.resize({
      width,
      height,
      pixelRatio: 1
    });
    h.clear();
    ImageManager.patternLocked = true;
    this.__renderShape(h, {
      matrix: core_esm_matrix.setWith(this.__world).scaleWith(1 / scale).invertWith().translate(-x, -y)
    }, !isHitPixelFill, !isHitPixelStroke);
    ImageManager.patternLocked = false;
    h.resetTransform();
    data.__isHitPixel = true;
  } else {
    data.__isHitPixel && (data.__isHitPixel = false);
  }
  this.__drawHitPath(h);
  h.setStrokeOptions(data);
};
ui$2.__hit = function (inner) {
  if (Platform.name === 'miniapp') this.__drawHitPath(this.__hitCanvas);
  const data = this.__;
  if (data.__isHitPixel && this.__hitPixel(inner)) return true;
  const {
    hitFill
  } = data;
  const needHitFillPath = (data.fill || data.__isCanvas) && (hitFill === 'path' || hitFill === 'pixel' && !(data.__pixelFill || data.__isCanvas)) || hitFill === 'all';
  if (needHitFillPath && this.__hitFill(inner)) return true;
  const {
    hitStroke,
    __strokeWidth
  } = data;
  const needHitStrokePath = data.stroke && (hitStroke === 'path' || hitStroke === 'pixel' && !data.__pixelStroke) || hitStroke === 'all';
  if (!needHitFillPath && !needHitStrokePath) return false;
  const radiusWidth = inner.radiusX * 2;
  let hitWidth = radiusWidth;
  if (needHitStrokePath) {
    switch (data.strokeAlign) {
      case 'inside':
        hitWidth += __strokeWidth * 2;
        if (!needHitFillPath && this.__hitFill(inner) && this.__hitStroke(inner, hitWidth)) return true;
        hitWidth = radiusWidth;
        break;
      case 'center':
        hitWidth += __strokeWidth;
        break;
      case 'outside':
        hitWidth += __strokeWidth * 2;
        if (!needHitFillPath) {
          if (!this.__hitFill(inner) && this.__hitStroke(inner, hitWidth)) return true;
          hitWidth = radiusWidth;
        }
        break;
    }
  }
  return hitWidth ? this.__hitStroke(inner, hitWidth) : false;
};
const ui$1 = new UI();
const core_esm_rect = Rect.prototype;
core_esm_rect.__updateHitCanvas = function () {
  if (this.stroke || this.cornerRadius || (this.fill || this.__.__isCanvas) && this.hitFill === 'pixel' || this.hitStroke === 'all') ui$1.__updateHitCanvas.call(this);else if (this.__hitCanvas) this.__hitCanvas = null;
};
core_esm_rect.__hitFill = function (inner) {
  return this.__hitCanvas ? ui$1.__hitFill.call(this, inner) : BoundsHelper.hitRadiusPoint(this.__layout.boxBounds, inner);
};
const ui = UI.prototype,
  core_esm_group = Group.prototype;
ui.find = function (condition, options) {
  return this.leafer ? this.leafer.selector.getBy(condition, this, false, options) : [];
};
ui.findOne = function (condition, options) {
  return this.leafer ? this.leafer.selector.getBy(condition, this, true, options) : null;
};
core_esm_group.pick = function (hitPoint, options) {
  this.__layout.update();
  if (!options) options = {};
  return this.leafer ? this.leafer.selector.getByPoint(hitPoint, options.hitRadius || 0, Object.assign(Object.assign({}, options), {
    target: this
  })) : null;
};
const canvas = LeaferCanvasBase.prototype;
canvas.hitFill = function (point, fillRule) {
  return fillRule ? this.context.isPointInPath(point.x, point.y, fillRule) : this.context.isPointInPath(point.x, point.y);
};
canvas.hitStroke = function (point, strokeWidth) {
  this.strokeWidth = strokeWidth;
  return this.context.isPointInStroke(point.x, point.y);
};
canvas.hitPixel = function (radiusPoint, offset, scale = 1) {
  let {
    x,
    y,
    radiusX,
    radiusY
  } = radiusPoint;
  if (offset) x -= offset.x, y -= offset.y;
  tempBounds.set(x - radiusX, y - radiusY, radiusX * 2, radiusY * 2).scale(scale).ceil();
  const {
    data
  } = this.context.getImageData(tempBounds.x, tempBounds.y, tempBounds.width || 1, tempBounds.height || 1);
  for (let i = 0, len = data.length; i < len; i += 4) {
    if (data[i + 3] > 0) return true;
  }
  return data[3] > 0;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/leafer-ui@1.0.0/node_modules/leafer-ui/dist/web.esm.js






const web_esm_debug$3 = Debug.get('LeaferCanvas');
class LeaferCanvas extends LeaferCanvasBase {
  set zIndex(zIndex) {
    const {
      style
    } = this.view;
    style.zIndex = zIndex;
    this.setAbsolute(this.view);
  }
  set childIndex(index) {
    const {
      view,
      parentView
    } = this;
    if (view && parentView) {
      const beforeNode = parentView.children[index];
      if (beforeNode) {
        this.setAbsolute(beforeNode);
        parentView.insertBefore(view, beforeNode);
      } else {
        parentView.appendChild(beforeNode);
      }
    }
  }
  init() {
    const {
      view
    } = this.config;
    view ? this.__createViewFrom(view) : this.__createView();
    const {
      style
    } = this.view;
    style.display || (style.display = 'block');
    this.parentView = this.view.parentElement;
    if (this.parentView) {
      const pStyle = this.parentView.style;
      pStyle.webkitUserSelect = pStyle.userSelect = 'none';
    }
    if (Platform.syncDomFont && !this.parentView) {
      style.display = 'none';
      document.body.appendChild(this.view);
    }
    this.__createContext();
    if (!this.autoLayout) this.resize(this.config);
  }
  set backgroundColor(color) {
    this.view.style.backgroundColor = color;
  }
  get backgroundColor() {
    return this.view.style.backgroundColor;
  }
  set hittable(hittable) {
    this.view.style.pointerEvents = hittable ? 'auto' : 'none';
  }
  get hittable() {
    return this.view.style.pointerEvents !== 'none';
  }
  __createView() {
    this.view = document.createElement('canvas');
  }
  __createViewFrom(inputView) {
    let find = typeof inputView === 'string' ? document.getElementById(inputView) : inputView;
    if (find) {
      if (find instanceof HTMLCanvasElement) {
        this.view = find;
      } else {
        let parent = find;
        if (find === window || find === document) {
          const div = document.createElement('div');
          const {
            style
          } = div;
          style.position = 'absolute';
          style.top = style.bottom = style.left = style.right = '0px';
          document.body.appendChild(div);
          parent = div;
        }
        this.__createView();
        const view = this.view;
        if (parent.hasChildNodes()) {
          this.setAbsolute(view);
          parent.style.position || (parent.style.position = 'relative');
        }
        parent.appendChild(view);
      }
    } else {
      web_esm_debug$3.error(`no id: ${inputView}`);
      this.__createView();
    }
  }
  setAbsolute(view) {
    const {
      style
    } = view;
    style.position = 'absolute';
    style.top = style.left = '0px';
  }
  updateViewSize() {
    const {
      width,
      height,
      pixelRatio
    } = this;
    const {
      style
    } = this.view;
    style.width = width + 'px';
    style.height = height + 'px';
    this.view.width = Math.ceil(width * pixelRatio);
    this.view.height = Math.ceil(height * pixelRatio);
  }
  updateClientBounds() {
    this.clientBounds = this.view.getBoundingClientRect();
  }
  startAutoLayout(autoBounds, listener) {
    this.autoBounds = autoBounds;
    this.resizeListener = listener;
    try {
      this.resizeObserver = new ResizeObserver(entries => {
        this.updateClientBounds();
        for (const entry of entries) this.checkAutoBounds(entry.contentRect);
      });
      const parent = this.parentView;
      if (parent) {
        this.resizeObserver.observe(parent);
        this.checkAutoBounds(parent.getBoundingClientRect());
      } else {
        this.checkAutoBounds(this.view);
        web_esm_debug$3.warn('no parent');
      }
    } catch (_a) {
      this.imitateResizeObserver();
    }
  }
  imitateResizeObserver() {
    if (this.autoLayout) {
      if (this.parentView) this.checkAutoBounds(this.parentView.getBoundingClientRect());
      Platform.requestRender(this.imitateResizeObserver.bind(this));
    }
  }
  checkAutoBounds(parentSize) {
    const view = this.view;
    const {
      x,
      y,
      width,
      height
    } = this.autoBounds.getBoundsFrom(parentSize);
    if (width !== this.width || height !== this.height) {
      const {
        style
      } = view;
      const {
        pixelRatio
      } = this;
      style.marginLeft = x + 'px';
      style.marginTop = y + 'px';
      const size = {
        width,
        height,
        pixelRatio
      };
      const oldSize = {};
      DataHelper.copyAttrs(oldSize, this, canvasSizeAttrs);
      this.resize(size);
      if (this.width !== undefined) this.resizeListener(new ResizeEvent(size, oldSize));
    }
  }
  stopAutoLayout() {
    this.autoLayout = false;
    this.resizeListener = null;
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  unrealCanvas() {
    if (!this.unreal && this.parentView) {
      const view = this.view;
      if (view) view.remove();
      this.view = this.parentView;
      this.unreal = true;
    }
  }
  destroy() {
    if (this.view) {
      this.stopAutoLayout();
      if (!this.unreal) {
        const view = this.view;
        if (view.parentElement) view.remove();
      }
      super.destroy();
    }
  }
}
canvasPatch(CanvasRenderingContext2D.prototype);
canvasPatch(Path2D.prototype);
const {
  mineType,
  fileType
} = FileHelper;
Object.assign(Creator, {
  canvas: (options, manager) => new LeaferCanvas(options, manager),
  image: options => new LeaferImage(options)
});
function useCanvas(_canvasType, _power) {
  Platform.origin = {
    createCanvas(width, height) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      return canvas;
    },
    canvasToDataURL: (canvas, type, quality) => canvas.toDataURL(mineType(type), quality),
    canvasToBolb: (canvas, type, quality) => new Promise(resolve => canvas.toBlob(resolve, mineType(type), quality)),
    canvasSaveAs: (canvas, filename, quality) => {
      const url = canvas.toDataURL(mineType(fileType(filename)), quality);
      return Platform.origin.download(url, filename);
    },
    download(url, filename) {
      return new Promise(resolve => {
        let el = document.createElement('a');
        el.href = url;
        el.download = filename;
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
        resolve();
      });
    },
    loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const {
          crossOrigin
        } = Platform.image;
        if (crossOrigin) {
          img.setAttribute('crossOrigin', crossOrigin);
          img.crossOrigin = crossOrigin;
        }
        img.onload = () => {
          resolve(img);
        };
        img.onerror = e => {
          reject(e);
        };
        img.src = Platform.image.getRealURL(src);
      });
    }
  };
  Platform.event = {
    stopDefault(origin) {
      origin.preventDefault();
    },
    stopNow(origin) {
      origin.stopImmediatePropagation();
    },
    stop(origin) {
      origin.stopPropagation();
    }
  };
  Platform.canvas = Creator.canvas();
  Platform.conicGradientSupport = !!Platform.canvas.context.createConicGradient;
}
Platform.name = 'web';
Platform.isMobile = 'ontouchstart' in window;
Platform.requestRender = function (render) {
  window.requestAnimationFrame(render);
};
Platform.devicePixelRatio = Math.max(1, devicePixelRatio);
const {
  userAgent
} = navigator;
if (userAgent.indexOf("Firefox") > -1) {
  Platform.conicGradientRotate90 = true;
  Platform.intWheelDeltaY = true;
  Platform.syncDomFont = true;
} else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
  Platform.fullImageShadow = true;
}
if (userAgent.indexOf('Windows') > -1) {
  Platform.os = 'Windows';
  Platform.intWheelDeltaY = true;
} else if (userAgent.indexOf('Mac') > -1) {
  Platform.os = 'Mac';
} else if (userAgent.indexOf('Linux') > -1) {
  Platform.os = 'Linux';
}
class Watcher {
  get childrenChanged() {
    return this.hasAdd || this.hasRemove || this.hasVisible;
  }
  get updatedList() {
    if (this.hasRemove) {
      const updatedList = new LeafList();
      this.__updatedList.list.forEach(item => {
        if (item.leafer) updatedList.add(item);
      });
      return updatedList;
    } else {
      return this.__updatedList;
    }
  }
  constructor(target, userConfig) {
    this.totalTimes = 0;
    this.config = {};
    this.__updatedList = new LeafList();
    this.target = target;
    if (userConfig) this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
  }
  start() {
    if (this.disabled) return;
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  disable() {
    this.stop();
    this.__removeListenEvents();
    this.disabled = true;
  }
  update() {
    this.changed = true;
    if (this.running) this.target.emit(RenderEvent.REQUEST);
  }
  __onAttrChange(event) {
    this.__updatedList.add(event.target);
    this.update();
  }
  __onChildEvent(event) {
    if (event.type === ChildEvent.ADD) {
      this.hasAdd = true;
      this.__pushChild(event.child);
    } else {
      this.hasRemove = true;
      this.__updatedList.add(event.parent);
    }
    this.update();
  }
  __pushChild(child) {
    this.__updatedList.add(child);
    if (child.isBranch) this.__loopChildren(child);
  }
  __loopChildren(parent) {
    const {
      children
    } = parent;
    for (let i = 0, len = children.length; i < len; i++) this.__pushChild(children[i]);
  }
  __onRquestData() {
    this.target.emitEvent(new WatchEvent(WatchEvent.DATA, {
      updatedList: this.updatedList
    }));
    this.__updatedList = new LeafList();
    this.totalTimes++;
    this.changed = false;
    this.hasVisible = false;
    this.hasRemove = false;
    this.hasAdd = false;
  }
  __listenEvents() {
    const {
      target
    } = this;
    this.__eventIds = [target.on_(PropertyEvent.CHANGE, this.__onAttrChange, this), target.on_([ChildEvent.ADD, ChildEvent.REMOVE], this.__onChildEvent, this), target.on_(WatchEvent.REQUEST, this.__onRquestData, this)];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
  }
  destroy() {
    if (this.target) {
      this.stop();
      this.__removeListenEvents();
      this.target = null;
      this.__updatedList = null;
    }
  }
}
const {
  updateAllMatrix: web_esm_updateAllMatrix$1,
  updateBounds: updateOneBounds,
  updateAllWorldOpacity: web_esm_updateAllWorldOpacity
} = LeafHelper;
const {
  pushAllChildBranch: web_esm_pushAllChildBranch,
  pushAllParent
} = BranchHelper;
function web_esm_updateMatrix(updateList, levelList) {
  let layout;
  updateList.list.forEach(leaf => {
    layout = leaf.__layout;
    if (levelList.without(leaf) && !layout.proxyZoom) {
      if (layout.matrixChanged) {
        web_esm_updateAllMatrix$1(leaf, true);
        levelList.add(leaf);
        if (leaf.isBranch) web_esm_pushAllChildBranch(leaf, levelList);
        pushAllParent(leaf, levelList);
      } else if (layout.boundsChanged) {
        levelList.add(leaf);
        if (leaf.isBranch) leaf.__tempNumber = 0;
        pushAllParent(leaf, levelList);
      }
    }
  });
}
function web_esm_updateBounds(boundsList) {
  let list, branch, children;
  boundsList.sort(true);
  boundsList.levels.forEach(level => {
    list = boundsList.levelMap[level];
    for (let i = 0, len = list.length; i < len; i++) {
      branch = list[i];
      if (branch.isBranch && branch.__tempNumber) {
        children = branch.children;
        for (let j = 0, jLen = children.length; j < jLen; j++) {
          if (!children[j].isBranch) {
            updateOneBounds(children[j]);
          }
        }
      }
      updateOneBounds(branch);
    }
  });
}
function updateChange(updateList) {
  updateList.list.forEach(leaf => {
    if (leaf.__layout.opacityChanged) web_esm_updateAllWorldOpacity(leaf);
    leaf.__updateChange();
  });
}
const {
  worldBounds
} = LeafBoundsHelper;
const bigBounds = {
  x: 0,
  y: 0,
  width: 100000,
  height: 100000
};
class LayoutBlockData {
  constructor(list) {
    this.updatedBounds = new Bounds();
    this.beforeBounds = new Bounds();
    this.afterBounds = new Bounds();
    if (list instanceof Array) list = new LeafList(list);
    this.updatedList = list;
  }
  setBefore() {
    this.beforeBounds.setListWithFn(this.updatedList.list, worldBounds);
  }
  setAfter() {
    const {
      list
    } = this.updatedList;
    if (list.some(leaf => leaf.noBounds)) {
      this.afterBounds.set(bigBounds);
    } else {
      this.afterBounds.setListWithFn(list, worldBounds);
    }
    this.updatedBounds.setList([this.beforeBounds, this.afterBounds]);
  }
  merge(data) {
    this.updatedList.addList(data.updatedList.list);
    this.beforeBounds.add(data.beforeBounds);
    this.afterBounds.add(data.afterBounds);
    this.updatedBounds.add(data.updatedBounds);
  }
  destroy() {
    this.updatedList = null;
  }
}
const {
  updateAllMatrix: web_esm_updateAllMatrix,
  updateAllChange: web_esm_updateAllChange
} = LeafHelper;
const web_esm_debug$2 = Debug.get('Layouter');
class Layouter {
  constructor(target, userConfig) {
    this.totalTimes = 0;
    this.config = {};
    this.__levelList = new LeafLevelList();
    this.target = target;
    if (userConfig) this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
  }
  start() {
    if (this.disabled) return;
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  disable() {
    this.stop();
    this.__removeListenEvents();
    this.disabled = true;
  }
  layout() {
    if (!this.running) return;
    const {
      target
    } = this;
    this.times = 0;
    try {
      target.emit(LayoutEvent.START);
      this.layoutOnce();
      target.emitEvent(new LayoutEvent(LayoutEvent.END, this.layoutedBlocks, this.times));
    } catch (e) {
      web_esm_debug$2.error(e);
    }
    this.layoutedBlocks = null;
  }
  layoutAgain() {
    if (this.layouting) {
      this.waitAgain = true;
    } else {
      this.layoutOnce();
    }
  }
  layoutOnce() {
    if (this.layouting) return web_esm_debug$2.warn('layouting');
    if (this.times > 3) return web_esm_debug$2.warn('layout max times');
    this.times++;
    this.totalTimes++;
    this.layouting = true;
    this.target.emit(WatchEvent.REQUEST);
    if (this.totalTimes > 1) {
      this.partLayout();
    } else {
      this.fullLayout();
    }
    this.layouting = false;
    if (this.waitAgain) {
      this.waitAgain = false;
      this.layoutOnce();
    }
  }
  partLayout() {
    var _a;
    if (!((_a = this.__updatedList) === null || _a === void 0 ? void 0 : _a.length)) return;
    const t = Run.start('PartLayout');
    const {
      target,
      __updatedList: updateList
    } = this;
    const {
      BEFORE,
      LAYOUT,
      AFTER
    } = LayoutEvent;
    const blocks = this.getBlocks(updateList);
    blocks.forEach(item => item.setBefore());
    target.emitEvent(new LayoutEvent(BEFORE, blocks, this.times));
    this.extraBlock = null;
    updateList.sort();
    web_esm_updateMatrix(updateList, this.__levelList);
    web_esm_updateBounds(this.__levelList);
    updateChange(updateList);
    if (this.extraBlock) blocks.push(this.extraBlock);
    blocks.forEach(item => item.setAfter());
    target.emitEvent(new LayoutEvent(LAYOUT, blocks, this.times));
    target.emitEvent(new LayoutEvent(AFTER, blocks, this.times));
    this.addBlocks(blocks);
    this.__levelList.reset();
    this.__updatedList = null;
    Run.end(t);
  }
  fullLayout() {
    const t = Run.start('FullLayout');
    const {
      target
    } = this;
    const {
      BEFORE,
      LAYOUT,
      AFTER
    } = LayoutEvent;
    const blocks = this.getBlocks(new LeafList(target));
    target.emitEvent(new LayoutEvent(BEFORE, blocks, this.times));
    Layouter.fullLayout(target);
    blocks.forEach(item => {
      item.setAfter();
    });
    target.emitEvent(new LayoutEvent(LAYOUT, blocks, this.times));
    target.emitEvent(new LayoutEvent(AFTER, blocks, this.times));
    this.addBlocks(blocks);
    Run.end(t);
  }
  static fullLayout(target) {
    web_esm_updateAllMatrix(target, true);
    if (target.isBranch) {
      BranchHelper.updateBounds(target);
    } else {
      LeafHelper.updateBounds(target);
    }
    web_esm_updateAllChange(target);
  }
  addExtra(leaf) {
    if (!this.__updatedList.has(leaf)) {
      const {
        updatedList,
        beforeBounds
      } = this.extraBlock || (this.extraBlock = new LayoutBlockData([]));
      updatedList.length ? beforeBounds.add(leaf.__world) : beforeBounds.set(leaf.__world);
      updatedList.add(leaf);
    }
  }
  createBlock(data) {
    return new LayoutBlockData(data);
  }
  getBlocks(list) {
    return [this.createBlock(list)];
  }
  addBlocks(current) {
    this.layoutedBlocks ? this.layoutedBlocks.push(...current) : this.layoutedBlocks = current;
  }
  __onReceiveWatchData(event) {
    this.__updatedList = event.data.updatedList;
  }
  __listenEvents() {
    const {
      target
    } = this;
    this.__eventIds = [target.on_(LayoutEvent.REQUEST, this.layout, this), target.on_(LayoutEvent.AGAIN, this.layoutAgain, this), target.on_(WatchEvent.DATA, this.__onReceiveWatchData, this)];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
  }
  destroy() {
    if (this.target) {
      this.stop();
      this.__removeListenEvents();
      this.target = this.config = null;
    }
  }
}
const web_esm_debug$1 = Debug.get('Renderer');
class Renderer {
  get needFill() {
    return !!(!this.canvas.allowBackgroundColor && this.config.fill);
  }
  constructor(target, canvas, userConfig) {
    this.FPS = 60;
    this.totalTimes = 0;
    this.times = 0;
    this.config = {
      usePartRender: true,
      maxFPS: 60
    };
    this.target = target;
    this.canvas = canvas;
    if (userConfig) this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
    this.__requestRender();
  }
  start() {
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  update() {
    this.changed = true;
  }
  requestLayout() {
    this.target.emit(LayoutEvent.REQUEST);
  }
  render(callback) {
    if (!(this.running && this.canvas.view)) {
      this.changed = true;
      return;
    }
    const {
      target
    } = this;
    this.times = 0;
    this.totalBounds = new Bounds();
    web_esm_debug$1.log(target.innerName, '--->');
    try {
      this.emitRender(RenderEvent.START);
      this.renderOnce(callback);
      this.emitRender(RenderEvent.END, this.totalBounds);
      ImageManager.clearRecycled();
    } catch (e) {
      this.rendering = false;
      web_esm_debug$1.error(e);
    }
    web_esm_debug$1.log('-------------|');
  }
  renderAgain() {
    if (this.rendering) {
      this.waitAgain = true;
    } else {
      this.renderOnce();
    }
  }
  renderOnce(callback) {
    if (this.rendering) return web_esm_debug$1.warn('rendering');
    if (this.times > 3) return web_esm_debug$1.warn('render max times');
    this.times++;
    this.totalTimes++;
    this.rendering = true;
    this.changed = false;
    this.renderBounds = new Bounds();
    this.renderOptions = {};
    if (callback) {
      this.emitRender(RenderEvent.BEFORE);
      callback();
    } else {
      this.requestLayout();
      if (this.ignore) {
        this.ignore = this.rendering = false;
        return;
      }
      this.emitRender(RenderEvent.BEFORE);
      if (this.config.usePartRender && this.totalTimes > 1) {
        this.partRender();
      } else {
        this.fullRender();
      }
    }
    this.emitRender(RenderEvent.RENDER, this.renderBounds, this.renderOptions);
    this.emitRender(RenderEvent.AFTER, this.renderBounds, this.renderOptions);
    this.updateBlocks = null;
    this.rendering = false;
    if (this.waitAgain) {
      this.waitAgain = false;
      this.renderOnce();
    }
  }
  partRender() {
    const {
      canvas,
      updateBlocks: list
    } = this;
    if (!list) return web_esm_debug$1.warn('PartRender: need update attr');
    this.mergeBlocks();
    list.forEach(block => {
      if (canvas.bounds.hit(block) && !block.isEmpty()) this.clipRender(block);
    });
  }
  clipRender(block) {
    const t = Run.start('PartRender');
    const {
      canvas
    } = this;
    const bounds = block.getIntersect(canvas.bounds);
    const includes = block.includes(this.target.__world);
    const realBounds = new Bounds(bounds);
    canvas.save();
    if (includes && !Debug.showRepaint) {
      canvas.clear();
    } else {
      bounds.spread(10 + 1 / this.canvas.pixelRatio).ceil();
      canvas.clearWorld(bounds, true);
      canvas.clipWorld(bounds, true);
    }
    this.__render(bounds, includes, realBounds);
    canvas.restore();
    Run.end(t);
  }
  fullRender() {
    const t = Run.start('FullRender');
    const {
      canvas
    } = this;
    canvas.save();
    canvas.clear();
    this.__render(canvas.bounds, true);
    canvas.restore();
    Run.end(t);
  }
  __render(bounds, includes, realBounds) {
    const options = bounds.includes(this.target.__world) ? {
      includes
    } : {
      bounds,
      includes
    };
    if (this.needFill) this.canvas.fillWorld(bounds, this.config.fill);
    if (Debug.showRepaint) this.canvas.strokeWorld(bounds, 'red');
    this.target.__render(this.canvas, options);
    this.renderBounds = realBounds || bounds;
    this.renderOptions = options;
    this.totalBounds.isEmpty() ? this.totalBounds = this.renderBounds : this.totalBounds.add(this.renderBounds);
    if (Debug.showHitView) this.renderHitView(options);
    if (Debug.showBoundsView) this.renderBoundsView(options);
    this.canvas.updateRender();
  }
  renderHitView(_options) {}
  renderBoundsView(_options) {}
  addBlock(block) {
    if (!this.updateBlocks) this.updateBlocks = [];
    this.updateBlocks.push(block);
  }
  mergeBlocks() {
    const {
      updateBlocks: list
    } = this;
    if (list) {
      const bounds = new Bounds();
      bounds.setList(list);
      list.length = 0;
      list.push(bounds);
    }
  }
  __requestRender() {
    const startTime = Date.now();
    Platform.requestRender(() => {
      this.FPS = Math.min(60, Math.ceil(1000 / (Date.now() - startTime)));
      if (this.running) {
        this.target.emit(AnimateEvent.FRAME);
        if (this.changed && this.canvas.view) this.render();
        this.target.emit(RenderEvent.NEXT);
      }
      if (this.target) this.__requestRender();
    });
  }
  __onResize(e) {
    if (this.canvas.unreal) return;
    if (e.bigger || !e.samePixelRatio) {
      const {
        width,
        height
      } = e.old;
      const bounds = new Bounds(0, 0, width, height);
      if (!bounds.includes(this.target.__world) || this.needFill || !e.samePixelRatio) {
        this.addBlock(this.canvas.bounds);
        this.target.forceUpdate('surface');
        return;
      }
    }
    this.addBlock(new Bounds(0, 0, 1, 1));
    this.changed = true;
  }
  __onLayoutEnd(event) {
    if (event.data) event.data.map(item => {
      let empty;
      if (item.updatedList) item.updatedList.list.some(leaf => {
        empty = !leaf.__world.width || !leaf.__world.height;
        if (empty) {
          if (!leaf.isLeafer) web_esm_debug$1.tip(leaf.innerName, ': empty');
          empty = !leaf.isBranch || leaf.isBranchLeaf;
        }
        return empty;
      });
      this.addBlock(empty ? this.canvas.bounds : item.updatedBounds);
    });
  }
  emitRender(type, bounds, options) {
    this.target.emitEvent(new RenderEvent(type, this.times, bounds, options));
  }
  __listenEvents() {
    const {
      target
    } = this;
    this.__eventIds = [target.on_(RenderEvent.REQUEST, this.update, this), target.on_(LayoutEvent.END, this.__onLayoutEnd, this), target.on_(RenderEvent.AGAIN, this.renderAgain, this), target.on_(ResizeEvent.RESIZE, this.__onResize, this)];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
  }
  destroy() {
    if (this.target) {
      this.stop();
      this.__removeListenEvents();
      this.target = this.canvas = this.config = null;
    }
  }
}
const {
  hitRadiusPoint
} = BoundsHelper;
class Picker {
  constructor(target, selector) {
    this.target = target;
    this.selector = selector;
  }
  getByPoint(hitPoint, hitRadius, options) {
    if (!hitRadius) hitRadius = 0;
    if (!options) options = {};
    const through = options.through || false;
    const ignoreHittable = options.ignoreHittable || false;
    const target = options.target || this.target;
    this.exclude = options.exclude || null;
    this.point = {
      x: hitPoint.x,
      y: hitPoint.y,
      radiusX: hitRadius,
      radiusY: hitRadius
    };
    this.findList = new LeafList(options.findList);
    if (!options.findList) this.hitBranch(target);
    const {
      list
    } = this.findList;
    const leaf = this.getBestMatchLeaf(list, options.bottomList, ignoreHittable);
    const path = ignoreHittable ? this.getPath(leaf) : this.getHitablePath(leaf);
    this.clear();
    return through ? {
      path,
      target: leaf,
      throughPath: list.length ? this.getThroughPath(list) : path
    } : {
      path,
      target: leaf
    };
  }
  getBestMatchLeaf(list, bottomList, ignoreHittable) {
    if (list.length) {
      let find;
      this.findList = new LeafList();
      const {
        x,
        y
      } = this.point;
      const point = {
        x,
        y,
        radiusX: 0,
        radiusY: 0
      };
      for (let i = 0, len = list.length; i < len; i++) {
        find = list[i];
        if (ignoreHittable || LeafHelper.worldHittable(find)) {
          this.hitChild(find, point);
          if (this.findList.length) return this.findList.list[0];
        }
      }
    }
    if (bottomList) {
      for (let i = 0, len = bottomList.length; i < len; i++) {
        this.hitChild(bottomList[i].target, this.point, bottomList[i].proxy);
        if (this.findList.length) return this.findList.list[0];
      }
    }
    return list[0];
  }
  getPath(leaf) {
    const path = new LeafList();
    while (leaf) {
      path.add(leaf);
      leaf = leaf.parent;
    }
    path.add(this.target);
    return path;
  }
  getHitablePath(leaf) {
    const path = this.getPath(leaf && leaf.hittable ? leaf : null);
    let item,
      hittablePath = new LeafList();
    for (let i = path.list.length - 1; i > -1; i--) {
      item = path.list[i];
      if (!item.__.hittable) break;
      hittablePath.addAt(item, 0);
      if (!item.__.hitChildren) break;
    }
    return hittablePath;
  }
  getThroughPath(list) {
    const throughPath = new LeafList();
    const pathList = [];
    for (let i = list.length - 1; i > -1; i--) {
      pathList.push(this.getPath(list[i]));
    }
    let path, nextPath, leaf;
    for (let i = 0, len = pathList.length; i < len; i++) {
      path = pathList[i], nextPath = pathList[i + 1];
      for (let j = 0, jLen = path.length; j < jLen; j++) {
        leaf = path.list[j];
        if (nextPath && nextPath.has(leaf)) break;
        throughPath.add(leaf);
      }
    }
    return throughPath;
  }
  hitBranch(branch) {
    this.eachFind(branch.children, branch.__onlyHitMask);
  }
  eachFind(children, hitMask) {
    let child, hit;
    const {
        point
      } = this,
      len = children.length;
    for (let i = len - 1; i > -1; i--) {
      child = children[i];
      if (!child.__.visible || hitMask && !child.__.mask) continue;
      hit = child.__.hitRadius ? true : hitRadiusPoint(child.__world, point);
      if (child.isBranch) {
        if (hit || child.__ignoreHitWorld) {
          this.eachFind(child.children, child.__onlyHitMask);
          if (child.isBranchLeaf && !this.findList.length) this.hitChild(child, point);
        }
      } else {
        if (hit) this.hitChild(child, point);
      }
    }
  }
  hitChild(child, point, proxy) {
    if (this.exclude && this.exclude.has(child)) return;
    if (child.__hitWorld(point)) {
      const {
        parent
      } = child;
      if (parent && parent.__hasMask && !child.__.mask && !parent.children.some(item => item.__.mask && item.__hitWorld(point))) return;
      this.findList.add(proxy || child);
    }
  }
  clear() {
    this.point = null;
    this.findList = null;
    this.exclude = null;
  }
  destroy() {
    this.clear();
  }
}
const {
  Yes,
  NoAndSkip,
  YesAndSkip
} = Answer;
const idCondition = {},
  classNameCondition = {},
  tagCondition = {};
class Selector {
  constructor(target, userConfig) {
    this.config = {};
    this.innerIdMap = {};
    this.idMap = {};
    this.methods = {
      id: (leaf, name) => leaf.id === name ? (this.idMap[name] = leaf, 1) : 0,
      innerId: (leaf, innerId) => leaf.innerId === innerId ? (this.innerIdMap[innerId] = leaf, 1) : 0,
      className: (leaf, name) => leaf.className === name ? 1 : 0,
      tag: (leaf, name) => leaf.__tag === name ? 1 : 0,
      tags: (leaf, nameMap) => nameMap[leaf.__tag] ? 1 : 0
    };
    this.target = target;
    if (userConfig) this.config = DataHelper.default(userConfig, this.config);
    this.picker = new Picker(target, this);
    this.__listenEvents();
  }
  getBy(condition, branch, one, options) {
    switch (typeof condition) {
      case 'number':
        const leaf = this.getByInnerId(condition, branch);
        return one ? leaf : leaf ? [leaf] : [];
      case 'string':
        switch (condition[0]) {
          case '#':
            idCondition.id = condition.substring(1), condition = idCondition;
            break;
          case '.':
            classNameCondition.className = condition.substring(1), condition = classNameCondition;
            break;
          default:
            tagCondition.tag = condition, condition = tagCondition;
        }
      case 'object':
        if (condition.id !== undefined) {
          const leaf = this.getById(condition.id, branch);
          return one ? leaf : leaf ? [leaf] : [];
        } else if (condition.tag) {
          const {
              tag
            } = condition,
            isArray = tag instanceof Array;
          return this.getByMethod(isArray ? this.methods.tags : this.methods.tag, branch, one, isArray ? DataHelper.toMap(tag) : tag);
        } else {
          return this.getByMethod(this.methods.className, branch, one, condition.className);
        }
      case 'function':
        return this.getByMethod(condition, branch, one, options);
    }
  }
  getByPoint(hitPoint, hitRadius, options) {
    if (Platform.name === 'node') this.target.emit(LayoutEvent.CHECK_UPDATE);
    return this.picker.getByPoint(hitPoint, hitRadius, options);
  }
  getByInnerId(innerId, branch) {
    const cache = this.innerIdMap[innerId];
    if (cache) return cache;
    this.eachFind(this.toChildren(branch), this.methods.innerId, null, innerId);
    return this.findLeaf;
  }
  getById(id, branch) {
    const cache = this.idMap[id];
    if (cache && LeafHelper.hasParent(cache, branch || this.target)) return cache;
    this.eachFind(this.toChildren(branch), this.methods.id, null, id);
    return this.findLeaf;
  }
  getByClassName(className, branch) {
    return this.getByMethod(this.methods.className, branch, false, className);
  }
  getByTag(tag, branch) {
    return this.getByMethod(this.methods.tag, branch, false, tag);
  }
  getByMethod(method, branch, one, options) {
    const list = one ? null : [];
    this.eachFind(this.toChildren(branch), method, list, options);
    return list || this.findLeaf;
  }
  eachFind(children, method, list, options) {
    let child, result;
    for (let i = 0, len = children.length; i < len; i++) {
      child = children[i];
      result = method(child, options);
      if (result === Yes || result === YesAndSkip) {
        if (list) {
          list.push(child);
        } else {
          this.findLeaf = child;
          return;
        }
      }
      if (child.isBranch && result < NoAndSkip) this.eachFind(child.children, method, list, options);
    }
  }
  toChildren(branch) {
    this.findLeaf = null;
    return [branch || this.target];
  }
  __onRemoveChild(event) {
    const {
      id,
      innerId
    } = event.child;
    if (this.idMap[id]) delete this.idMap[id];
    if (this.innerIdMap[innerId]) delete this.innerIdMap[innerId];
  }
  __checkIdChange(event) {
    if (event.attrName === 'id') {
      const id = event.oldValue;
      if (this.idMap[id]) delete this.idMap[id];
    }
  }
  __listenEvents() {
    this.__eventIds = [this.target.on_(ChildEvent.REMOVE, this.__onRemoveChild, this), this.target.on_(PropertyEvent.CHANGE, this.__checkIdChange, this)];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
    this.__eventIds.length = 0;
  }
  destroy() {
    if (this.__eventIds.length) {
      this.__removeListenEvents();
      this.picker.destroy();
      this.findLeaf = null;
      this.innerIdMap = {};
      this.idMap = {};
    }
  }
}
Object.assign(Creator, {
  watcher: (target, options) => new Watcher(target, options),
  layouter: (target, options) => new Layouter(target, options),
  renderer: (target, canvas, options) => new Renderer(target, canvas, options),
  selector: (target, options) => new Selector(target, options)
});
Platform.layout = Layouter.fullLayout;
const PointerEventHelper = {
  convert(e, local) {
    const base = InteractionHelper.getBase(e);
    const data = Object.assign(Object.assign({}, base), {
      x: local.x,
      y: local.y,
      width: e.width,
      height: e.height,
      pointerType: e.pointerType,
      pressure: e.pressure
    });
    if (data.pointerType === 'pen') {
      data.tangentialPressure = e.tangentialPressure;
      data.tiltX = e.tiltX;
      data.tiltY = e.tiltY;
      data.twist = e.twist;
    }
    return data;
  },
  convertMouse(e, local) {
    const base = InteractionHelper.getBase(e);
    return Object.assign(Object.assign({}, base), {
      x: local.x,
      y: local.y,
      width: 1,
      height: 1,
      pointerType: 'mouse',
      pressure: 0.5
    });
  },
  convertTouch(e, local) {
    const touch = PointerEventHelper.getTouch(e);
    const base = InteractionHelper.getBase(e);
    return Object.assign(Object.assign({}, base), {
      x: local.x,
      y: local.y,
      width: 1,
      height: 1,
      pointerType: 'touch',
      pressure: touch.force
    });
  },
  getTouch(e) {
    return e.targetTouches[0] || e.changedTouches[0];
  }
};
const WheelEventHelper = {
  getMove(e, config) {
    let {
      moveSpeed
    } = config;
    let {
      deltaX,
      deltaY
    } = e;
    if (e.shiftKey && !deltaX) {
      deltaX = deltaY;
      deltaY = 0;
    }
    if (deltaX > 50) deltaX = Math.max(50, deltaX / 3);
    if (deltaY > 50) deltaY = Math.max(50, deltaY / 3);
    return {
      x: -deltaX * moveSpeed * 2,
      y: -deltaY * moveSpeed * 2
    };
  },
  getScale(e, config) {
    let zoom;
    let scale = 1;
    let {
      zoomMode,
      zoomSpeed
    } = config;
    const delta = e.deltaY || e.deltaX;
    if (zoomMode) {
      zoom = zoomMode === 'mouse' ? true : !e.deltaX && (Platform.intWheelDeltaY ? Math.abs(delta) > 17 : Math.ceil(delta) !== delta);
      if (e.shiftKey || e.metaKey || e.ctrlKey) zoom = true;
    } else {
      zoom = !e.shiftKey && (e.metaKey || e.ctrlKey);
    }
    if (zoom) {
      zoomSpeed = MathHelper.within(zoomSpeed, 0, 1);
      const min = e.deltaY ? config.delta.y : config.delta.x;
      scale = 1 - delta / (min * 4) * zoomSpeed;
      if (scale < 0.5) scale = 0.5;
      if (scale >= 1.5) scale = 1.5;
    }
    return scale;
  }
};
const KeyEventHelper = {
  convert(e) {
    const base = InteractionHelper.getBase(e);
    const data = Object.assign(Object.assign({}, base), {
      code: e.code,
      key: e.key
    });
    return data;
  }
};
const {
  getMoveEventData: web_esm_getMoveEventData,
  getZoomEventData: web_esm_getZoomEventData,
  getRotateEventData: web_esm_getRotateEventData
} = InteractionHelper;
class Interaction extends InteractionBase {
  __listenEvents() {
    super.__listenEvents();
    const view = this.view = this.canvas.view;
    this.viewEvents = {
      'pointerdown': this.onPointerDown,
      'mousedown': this.onMouseDown,
      'touchstart': this.onTouchStart,
      'contextmenu': this.onContextMenu,
      'wheel': this.onWheel,
      'gesturestart': this.onGesturestart,
      'gesturechange': this.onGesturechange,
      'gestureend': this.onGestureend
    };
    this.windowEvents = {
      'pointermove': this.onPointerMove,
      'pointerup': this.onPointerUp,
      'pointercancel': this.onPointerCancel,
      'mousemove': this.onMouseMove,
      'mouseup': this.onMouseUp,
      'touchmove': this.onTouchMove,
      'touchend': this.onTouchEnd,
      'touchcancel': this.onTouchCancel,
      'keydown': this.onKeyDown,
      'keyup': this.onKeyUp,
      'scroll': this.onScroll
    };
    const {
      viewEvents,
      windowEvents
    } = this;
    for (let name in viewEvents) {
      viewEvents[name] = viewEvents[name].bind(this);
      view.addEventListener(name, viewEvents[name]);
    }
    for (let name in windowEvents) {
      windowEvents[name] = windowEvents[name].bind(this);
      window.addEventListener(name, windowEvents[name]);
    }
  }
  __removeListenEvents() {
    super.__removeListenEvents();
    const {
      viewEvents,
      windowEvents
    } = this;
    for (let name in viewEvents) {
      this.view.removeEventListener(name, viewEvents[name]);
      this.viewEvents = {};
    }
    for (let name in windowEvents) {
      window.removeEventListener(name, windowEvents[name]);
      this.windowEvents = {};
    }
  }
  getTouches(touches) {
    const list = [];
    for (let i = 0, len = touches.length; i < len; i++) {
      list.push(touches[i]);
    }
    return list;
  }
  preventDefaultPointer(e) {
    const {
      pointer
    } = this.config;
    if (pointer.preventDefault) e.preventDefault();
  }
  preventDefaultWheel(e) {
    const {
      wheel
    } = this.config;
    if (wheel.preventDefault) e.preventDefault();
  }
  preventWindowPointer(e) {
    return !this.downData && e.target !== this.view;
  }
  onKeyDown(e) {
    this.keyDown(KeyEventHelper.convert(e));
  }
  onKeyUp(e) {
    this.keyUp(KeyEventHelper.convert(e));
  }
  onContextMenu(e) {
    if (this.config.pointer.preventDefaultMenu) e.preventDefault();
    this.menu(PointerEventHelper.convert(e, this.getLocal(e)));
  }
  onScroll() {
    this.canvas.updateClientBounds();
  }
  onPointerDown(e) {
    this.preventDefaultPointer(e);
    this.usePointer || (this.usePointer = true);
    if (this.useMultiTouch) return;
    this.pointerDown(PointerEventHelper.convert(e, this.getLocal(e)));
  }
  onPointerMove(e) {
    this.usePointer || (this.usePointer = true);
    if (this.useMultiTouch || this.preventWindowPointer(e)) return;
    this.pointerMove(PointerEventHelper.convert(e, this.getLocal(e, true)));
  }
  onPointerUp(e) {
    if (this.downData) this.preventDefaultPointer(e);
    if (this.useMultiTouch || this.preventWindowPointer(e)) return;
    this.pointerUp(PointerEventHelper.convert(e, this.getLocal(e)));
  }
  onPointerCancel() {
    if (this.useMultiTouch) return;
    this.pointerCancel();
  }
  onMouseDown(e) {
    this.preventDefaultPointer(e);
    if (this.useTouch || this.usePointer) return;
    this.pointerDown(PointerEventHelper.convertMouse(e, this.getLocal(e)));
  }
  onMouseMove(e) {
    if (this.useTouch || this.usePointer || this.preventWindowPointer(e)) return;
    this.pointerMove(PointerEventHelper.convertMouse(e, this.getLocal(e, true)));
  }
  onMouseUp(e) {
    if (this.downData) this.preventDefaultPointer(e);
    if (this.useTouch || this.usePointer || this.preventWindowPointer(e)) return;
    this.pointerUp(PointerEventHelper.convertMouse(e, this.getLocal(e)));
  }
  onMouseCancel() {
    if (this.useTouch || this.usePointer) return;
    this.pointerCancel();
  }
  onTouchStart(e) {
    e.preventDefault();
    this.multiTouchStart(e);
    if (this.usePointer) return;
    if (this.touchTimer) {
      window.clearTimeout(this.touchTimer);
      this.touchTimer = 0;
    }
    this.useTouch = true;
    const touch = PointerEventHelper.getTouch(e);
    this.pointerDown(PointerEventHelper.convertTouch(e, this.getLocal(touch, true)));
  }
  onTouchMove(e) {
    this.multiTouchMove(e);
    if (this.usePointer || this.preventWindowPointer(e)) return;
    const touch = PointerEventHelper.getTouch(e);
    this.pointerMove(PointerEventHelper.convertTouch(e, this.getLocal(touch)));
  }
  onTouchEnd(e) {
    this.multiTouchEnd();
    if (this.usePointer || this.preventWindowPointer(e)) return;
    if (this.touchTimer) clearTimeout(this.touchTimer);
    this.touchTimer = setTimeout(() => {
      this.useTouch = false;
    }, 500);
    const touch = PointerEventHelper.getTouch(e);
    this.pointerUp(PointerEventHelper.convertTouch(e, this.getLocal(touch)));
  }
  onTouchCancel() {
    if (this.usePointer) return;
    this.pointerCancel();
  }
  multiTouchStart(e) {
    this.useMultiTouch = e.touches.length >= 2;
    this.touches = this.useMultiTouch ? this.getTouches(e.touches) : undefined;
    if (this.useMultiTouch) this.pointerCancel();
  }
  multiTouchMove(e) {
    if (!this.useMultiTouch) return;
    if (e.touches.length > 1) {
      const touches = this.getTouches(e.touches);
      const list = this.getKeepTouchList(this.touches, touches);
      if (list.length > 1) {
        this.multiTouch(InteractionHelper.getBase(e), list);
        this.touches = touches;
      }
    }
  }
  multiTouchEnd() {
    this.touches = null;
    this.useMultiTouch = false;
    this.transformEnd();
  }
  getKeepTouchList(old, touches) {
    let to;
    const list = [];
    old.forEach(from => {
      to = touches.find(touch => touch.identifier === from.identifier);
      if (to) list.push({
        from: this.getLocal(from),
        to: this.getLocal(to)
      });
    });
    return list;
  }
  getLocalTouchs(points) {
    return points.map(point => this.getLocal(point));
  }
  onWheel(e) {
    this.preventDefaultWheel(e);
    const {
      wheel
    } = this.config;
    if (wheel.disabled) return;
    const scale = wheel.getScale ? wheel.getScale(e, wheel) : WheelEventHelper.getScale(e, wheel);
    const local = this.getLocal(e);
    const eventBase = InteractionHelper.getBase(e);
    scale !== 1 ? this.zoom(web_esm_getZoomEventData(local, scale, eventBase)) : this.move(web_esm_getMoveEventData(local, wheel.getMove ? wheel.getMove(e, wheel) : WheelEventHelper.getMove(e, wheel), eventBase));
  }
  onGesturestart(e) {
    if (this.useMultiTouch) return;
    this.preventDefaultWheel(e);
    this.lastGestureScale = 1;
    this.lastGestureRotation = 0;
  }
  onGesturechange(e) {
    if (this.useMultiTouch) return;
    this.preventDefaultWheel(e);
    const local = this.getLocal(e);
    const eventBase = InteractionHelper.getBase(e);
    const changeScale = e.scale / this.lastGestureScale;
    const changeAngle = e.rotation - this.lastGestureRotation;
    let {
      rotateSpeed
    } = this.config.wheel;
    rotateSpeed = MathHelper.within(rotateSpeed, 0, 1);
    this.zoom(web_esm_getZoomEventData(local, changeScale * changeScale, eventBase));
    this.rotate(web_esm_getRotateEventData(local, changeAngle / Math.PI * 180 * (rotateSpeed / 4 + 0.1), eventBase));
    this.lastGestureScale = e.scale;
    this.lastGestureRotation = e.rotation;
  }
  onGestureend(e) {
    if (this.useMultiTouch) return;
    this.preventDefaultWheel(e);
    this.transformEnd();
  }
  setCursor(cursor) {
    super.setCursor(cursor);
    const list = [];
    this.eachCursor(cursor, list);
    if (typeof list[list.length - 1] === 'object') list.push('default');
    this.canvas.view.style.cursor = list.map(item => typeof item === 'object' ? `url(${item.url}) ${item.x || 0} ${item.y || 0}` : item).join(',');
  }
  eachCursor(cursor, list, level = 0) {
    level++;
    if (cursor instanceof Array) {
      cursor.forEach(item => this.eachCursor(item, list, level));
    } else {
      const custom = typeof cursor === 'string' && Cursor.get(cursor);
      if (custom && level < 2) {
        this.eachCursor(custom, list, level);
      } else {
        list.push(cursor);
      }
    }
  }
  destroy() {
    if (this.view) {
      super.destroy();
      this.view = null;
      this.touches = null;
    }
  }
}
function fillText(ui, canvas) {
  let row;
  const {
    rows,
    decorationY,
    decorationHeight
  } = ui.__.__textDrawData;
  for (let i = 0, len = rows.length; i < len; i++) {
    row = rows[i];
    if (row.text) {
      canvas.fillText(row.text, row.x, row.y);
    } else if (row.data) {
      row.data.forEach(charData => {
        canvas.fillText(charData.char, charData.x, row.y);
      });
    }
    if (decorationY) canvas.fillRect(row.x, row.y + decorationY, row.width, decorationHeight);
  }
}
function fill(fill, ui, canvas) {
  canvas.fillStyle = fill;
  ui.__.__font ? fillText(ui, canvas) : ui.__.windingRule ? canvas.fill(ui.__.windingRule) : canvas.fill();
}
function fills(fills, ui, canvas) {
  let item;
  const {
    windingRule,
    __font
  } = ui.__;
  for (let i = 0, len = fills.length; i < len; i++) {
    item = fills[i];
    if (item.image && PaintImage.checkImage(ui, canvas, item, !__font)) continue;
    if (item.style) {
      canvas.fillStyle = item.style;
      if (item.transform) {
        canvas.save();
        canvas.transform(item.transform);
        if (item.blendMode) canvas.blendMode = item.blendMode;
        __font ? fillText(ui, canvas) : windingRule ? canvas.fill(windingRule) : canvas.fill();
        canvas.restore();
      } else {
        if (item.blendMode) {
          canvas.saveBlendMode(item.blendMode);
          __font ? fillText(ui, canvas) : windingRule ? canvas.fill(windingRule) : canvas.fill();
          canvas.restoreBlendMode();
        } else {
          __font ? fillText(ui, canvas) : windingRule ? canvas.fill(windingRule) : canvas.fill();
        }
      }
    }
  }
}
function strokeText(stroke, ui, canvas) {
  const {
    strokeAlign
  } = ui.__;
  const isStrokes = typeof stroke !== 'string';
  switch (strokeAlign) {
    case 'center':
      canvas.setStroke(isStrokes ? undefined : stroke, ui.__.strokeWidth, ui.__);
      isStrokes ? drawStrokesStyle(stroke, true, ui, canvas) : drawTextStroke(ui, canvas);
      break;
    case 'inside':
      drawAlignStroke('inside', stroke, isStrokes, ui, canvas);
      break;
    case 'outside':
      drawAlignStroke('outside', stroke, isStrokes, ui, canvas);
      break;
  }
}
function drawAlignStroke(align, stroke, isStrokes, ui, canvas) {
  const {
    __strokeWidth,
    __font
  } = ui.__;
  const out = canvas.getSameCanvas(true, true);
  out.setStroke(isStrokes ? undefined : stroke, __strokeWidth * 2, ui.__);
  out.font = __font;
  isStrokes ? drawStrokesStyle(stroke, true, ui, out) : drawTextStroke(ui, out);
  out.blendMode = align === 'outside' ? 'destination-out' : 'destination-in';
  fillText(ui, out);
  out.blendMode = 'normal';
  if (ui.__worldFlipped) {
    canvas.copyWorldByReset(out, ui.__nowWorld);
  } else {
    canvas.copyWorldToInner(out, ui.__nowWorld, ui.__layout.renderBounds);
  }
  out.recycle(ui.__nowWorld);
}
function drawTextStroke(ui, canvas) {
  let row;
  const {
    rows,
    decorationY,
    decorationHeight
  } = ui.__.__textDrawData;
  for (let i = 0, len = rows.length; i < len; i++) {
    row = rows[i];
    if (row.text) {
      canvas.strokeText(row.text, row.x, row.y);
    } else if (row.data) {
      row.data.forEach(charData => {
        canvas.strokeText(charData.char, charData.x, row.y);
      });
    }
    if (decorationY) canvas.strokeRect(row.x, row.y + decorationY, row.width, decorationHeight);
  }
}
function drawStrokesStyle(strokes, isText, ui, canvas) {
  let item;
  for (let i = 0, len = strokes.length; i < len; i++) {
    item = strokes[i];
    if (item.image && PaintImage.checkImage(ui, canvas, item, false)) continue;
    if (item.style) {
      canvas.strokeStyle = item.style;
      if (item.blendMode) {
        canvas.saveBlendMode(item.blendMode);
        isText ? drawTextStroke(ui, canvas) : canvas.stroke();
        canvas.restoreBlendMode();
      } else {
        isText ? drawTextStroke(ui, canvas) : canvas.stroke();
      }
    }
  }
}
function stroke(stroke, ui, canvas) {
  const options = ui.__;
  const {
    __strokeWidth,
    strokeAlign,
    __font
  } = options;
  if (!__strokeWidth) return;
  if (__font) {
    strokeText(stroke, ui, canvas);
  } else {
    switch (strokeAlign) {
      case 'center':
        canvas.setStroke(stroke, __strokeWidth, options);
        canvas.stroke();
        break;
      case 'inside':
        canvas.save();
        canvas.setStroke(stroke, __strokeWidth * 2, options);
        options.windingRule ? canvas.clip(options.windingRule) : canvas.clip();
        canvas.stroke();
        canvas.restore();
        break;
      case 'outside':
        const out = canvas.getSameCanvas(true, true);
        out.setStroke(stroke, __strokeWidth * 2, options);
        ui.__drawRenderPath(out);
        out.stroke();
        options.windingRule ? out.clip(options.windingRule) : out.clip();
        out.clearWorld(ui.__layout.renderBounds);
        if (ui.__worldFlipped) {
          canvas.copyWorldByReset(out, ui.__nowWorld);
        } else {
          canvas.copyWorldToInner(out, ui.__nowWorld, ui.__layout.renderBounds);
        }
        out.recycle(ui.__nowWorld);
        break;
    }
  }
}
function strokes(strokes, ui, canvas) {
  const options = ui.__;
  const {
    __strokeWidth,
    strokeAlign,
    __font
  } = options;
  if (!__strokeWidth) return;
  if (__font) {
    strokeText(strokes, ui, canvas);
  } else {
    switch (strokeAlign) {
      case 'center':
        canvas.setStroke(undefined, __strokeWidth, options);
        drawStrokesStyle(strokes, false, ui, canvas);
        break;
      case 'inside':
        canvas.save();
        canvas.setStroke(undefined, __strokeWidth * 2, options);
        options.windingRule ? canvas.clip(options.windingRule) : canvas.clip();
        drawStrokesStyle(strokes, false, ui, canvas);
        canvas.restore();
        break;
      case 'outside':
        const {
          renderBounds
        } = ui.__layout;
        const out = canvas.getSameCanvas(true, true);
        ui.__drawRenderPath(out);
        out.setStroke(undefined, __strokeWidth * 2, options);
        drawStrokesStyle(strokes, false, ui, out);
        options.windingRule ? out.clip(options.windingRule) : out.clip();
        out.clearWorld(renderBounds);
        if (ui.__worldFlipped) {
          canvas.copyWorldByReset(out, ui.__nowWorld);
        } else {
          canvas.copyWorldToInner(out, ui.__nowWorld, renderBounds);
        }
        out.recycle(ui.__nowWorld);
        break;
    }
  }
}
const {
  getSpread,
  getOuterOf,
  getByMove,
  getIntersectData
} = BoundsHelper;
function shape(ui, current, options) {
  const canvas = current.getSameCanvas();
  const nowWorld = ui.__nowWorld;
  let bounds, fitMatrix, shapeBounds, worldCanvas;
  let {
    scaleX,
    scaleY
  } = nowWorld;
  if (scaleX < 0) scaleX = -scaleX;
  if (scaleY < 0) scaleY = -scaleY;
  if (current.bounds.includes(nowWorld)) {
    worldCanvas = canvas;
    bounds = shapeBounds = nowWorld;
  } else {
    const {
      renderShapeSpread: spread
    } = ui.__layout;
    const worldClipBounds = getIntersectData(spread ? getSpread(current.bounds, scaleX === scaleY ? spread * scaleX : [spread * scaleY, spread * scaleX]) : current.bounds, nowWorld);
    fitMatrix = current.bounds.getFitMatrix(worldClipBounds);
    let {
      a: fitScaleX,
      d: fitScaleY
    } = fitMatrix;
    if (fitMatrix.a < 1) {
      worldCanvas = current.getSameCanvas();
      ui.__renderShape(worldCanvas, options);
      scaleX *= fitScaleX;
      scaleY *= fitScaleY;
    }
    shapeBounds = getOuterOf(nowWorld, fitMatrix);
    bounds = getByMove(shapeBounds, -fitMatrix.e, -fitMatrix.f);
    if (options.matrix) {
      const {
        matrix
      } = options;
      fitMatrix.multiply(matrix);
      fitScaleX *= matrix.scaleX;
      fitScaleY *= matrix.scaleY;
    }
    options = Object.assign(Object.assign({}, options), {
      matrix: fitMatrix.withScale(fitScaleX, fitScaleY)
    });
  }
  ui.__renderShape(canvas, options);
  return {
    canvas,
    matrix: fitMatrix,
    bounds,
    worldCanvas,
    shapeBounds,
    scaleX,
    scaleY
  };
}
let recycleMap;
function compute(attrName, ui) {
  const data = ui.__,
    leafPaints = [];
  let paints = data.__input[attrName],
    hasOpacityPixel;
  if (!(paints instanceof Array)) paints = [paints];
  recycleMap = PaintImage.recycleImage(attrName, data);
  for (let i = 0, len = paints.length, item; i < len; i++) {
    item = getLeafPaint(attrName, paints[i], ui);
    if (item) leafPaints.push(item);
  }
  data['_' + attrName] = leafPaints.length ? leafPaints : undefined;
  if (leafPaints.length && leafPaints[0].image) hasOpacityPixel = leafPaints[0].image.hasOpacityPixel;
  if (attrName === 'fill') {
    data.__pixelFill = hasOpacityPixel;
  } else {
    data.__pixelStroke = hasOpacityPixel;
  }
}
function getLeafPaint(attrName, paint, ui) {
  if (typeof paint !== 'object' || paint.visible === false || paint.opacity === 0) return undefined;
  const {
    boxBounds
  } = ui.__layout;
  switch (paint.type) {
    case 'solid':
      let {
        type,
        blendMode,
        color,
        opacity
      } = paint;
      return {
        type,
        blendMode,
        style: ColorConvert.string(color, opacity)
      };
    case 'image':
      return PaintImage.image(ui, attrName, paint, boxBounds, !recycleMap || !recycleMap[paint.url]);
    case 'linear':
      return PaintGradient.linearGradient(paint, boxBounds);
    case 'radial':
      return PaintGradient.radialGradient(paint, boxBounds);
    case 'angular':
      return PaintGradient.conicGradient(paint, boxBounds);
    default:
      return paint.r !== undefined ? {
        type: 'solid',
        style: ColorConvert.string(paint)
      } : undefined;
  }
}
const PaintModule = {
  compute,
  fill,
  fills,
  fillText,
  stroke,
  strokes,
  strokeText,
  drawTextStroke,
  shape
};
let origin = {};
const {
  get: get$3,
  rotateOfOuter: rotateOfOuter$1,
  translate: translate$1,
  scaleOfOuter: scaleOfOuter$1,
  scale: scaleHelper,
  rotate: web_esm_rotate
} = MatrixHelper;
function fillOrFitMode(data, box, x, y, scaleX, scaleY, rotation) {
  const transform = get$3();
  translate$1(transform, box.x + x, box.y + y);
  scaleHelper(transform, scaleX, scaleY);
  if (rotation) rotateOfOuter$1(transform, {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2
  }, rotation);
  data.transform = transform;
}
function clipMode(data, box, x, y, scaleX, scaleY, rotation) {
  const transform = get$3();
  translate$1(transform, box.x + x, box.y + y);
  if (scaleX) scaleHelper(transform, scaleX, scaleY);
  if (rotation) web_esm_rotate(transform, rotation);
  data.transform = transform;
}
function repeatMode(data, box, width, height, x, y, scaleX, scaleY, rotation, align) {
  const transform = get$3();
  if (rotation) {
    if (align === 'center') {
      rotateOfOuter$1(transform, {
        x: width / 2,
        y: height / 2
      }, rotation);
    } else {
      web_esm_rotate(transform, rotation);
      switch (rotation) {
        case 90:
          translate$1(transform, height, 0);
          break;
        case 180:
          translate$1(transform, width, height);
          break;
        case 270:
          translate$1(transform, 0, width);
          break;
      }
    }
  }
  origin.x = box.x + x;
  origin.y = box.y + y;
  translate$1(transform, origin.x, origin.y);
  if (scaleX) scaleOfOuter$1(transform, origin, scaleX, scaleY);
  data.transform = transform;
}
const {
  get: get$2,
  translate
} = MatrixHelper;
const tempBox = new Bounds();
const web_esm_tempPoint = {};
function createData(leafPaint, image, paint, box) {
  const {
    blendMode
  } = paint;
  if (blendMode) leafPaint.blendMode = blendMode;
  leafPaint.data = getPatternData(paint, box, image);
}
function getPatternData(paint, box, image) {
  let {
    width,
    height
  } = image;
  if (paint.padding) box = tempBox.set(box).shrink(paint.padding);
  const {
    opacity,
    mode,
    align,
    offset,
    scale,
    size,
    rotation,
    repeat
  } = paint;
  const sameBox = box.width === width && box.height === height;
  const data = {
    mode
  };
  const swapSize = align !== 'center' && (rotation || 0) % 180 === 90;
  const swapWidth = swapSize ? height : width,
    swapHeight = swapSize ? width : height;
  let x = 0,
    y = 0,
    scaleX,
    scaleY;
  if (!mode || mode === 'cover' || mode === 'fit') {
    if (!sameBox || rotation) {
      const sw = box.width / swapWidth,
        sh = box.height / swapHeight;
      scaleX = scaleY = mode === 'fit' ? Math.min(sw, sh) : Math.max(sw, sh);
      x += (box.width - width * scaleX) / 2, y += (box.height - height * scaleY) / 2;
    }
  } else if (size) {
    scaleX = (typeof size === 'number' ? size : size.width) / width;
    scaleY = (typeof size === 'number' ? size : size.height) / height;
  } else if (scale) {
    scaleX = typeof scale === 'number' ? scale : scale.x;
    scaleY = typeof scale === 'number' ? scale : scale.y;
  }
  if (align) {
    const imageBounds = {
      x,
      y,
      width: swapWidth,
      height: swapHeight
    };
    if (scaleX) imageBounds.width *= scaleX, imageBounds.height *= scaleY;
    AlignHelper.toPoint(align, imageBounds, box, web_esm_tempPoint, true);
    x += web_esm_tempPoint.x, y += web_esm_tempPoint.y;
  }
  if (offset) x += offset.x, y += offset.y;
  switch (mode) {
    case 'strench':
      if (!sameBox) width = box.width, height = box.height;
      break;
    case 'normal':
    case 'clip':
      if (x || y || scaleX || rotation) clipMode(data, box, x, y, scaleX, scaleY, rotation);
      break;
    case 'repeat':
      if (!sameBox || scaleX || rotation) repeatMode(data, box, width, height, x, y, scaleX, scaleY, rotation, align);
      if (!repeat) data.repeat = 'repeat';
      break;
    case 'fit':
    case 'cover':
    default:
      if (scaleX) fillOrFitMode(data, box, x, y, scaleX, scaleY, rotation);
  }
  if (!data.transform) {
    if (box.x || box.y) {
      data.transform = get$2();
      translate(data.transform, box.x, box.y);
    }
  }
  if (scaleX && mode !== 'strench') {
    data.scaleX = scaleX;
    data.scaleY = scaleY;
  }
  data.width = width;
  data.height = height;
  if (opacity) data.opacity = opacity;
  if (repeat) data.repeat = typeof repeat === 'string' ? repeat === 'x' ? 'repeat-x' : 'repeat-y' : 'repeat';
  return data;
}
let cache,
  box = new Bounds();
const {
  isSame: web_esm_isSame
} = BoundsHelper;
function web_esm_image(ui, attrName, paint, boxBounds, firstUse) {
  let leafPaint, event;
  const image = ImageManager.get(paint);
  if (cache && paint === cache.paint && web_esm_isSame(boxBounds, cache.boxBounds)) {
    leafPaint = cache.leafPaint;
  } else {
    leafPaint = {
      type: paint.type,
      image
    };
    cache = image.use > 1 ? {
      leafPaint,
      paint,
      boxBounds: box.set(boxBounds)
    } : null;
  }
  if (firstUse || image.loading) event = {
    image,
    attrName,
    attrValue: paint
  };
  if (image.ready) {
    checkSizeAndCreateData(ui, attrName, paint, image, leafPaint, boxBounds);
    if (firstUse) {
      onLoad(ui, event);
      onLoadSuccess(ui, event);
    }
  } else if (image.error) {
    if (firstUse) onLoadError(ui, event, image.error);
  } else {
    ignoreRender(ui, true);
    if (firstUse) onLoad(ui, event);
    leafPaint.loadId = image.load(() => {
      ignoreRender(ui, false);
      if (!ui.destroyed) {
        if (checkSizeAndCreateData(ui, attrName, paint, image, leafPaint, boxBounds)) {
          if (image.hasOpacityPixel) ui.__layout.hitCanvasChanged = true;
          ui.forceUpdate('surface');
        }
        onLoadSuccess(ui, event);
      }
      leafPaint.loadId = null;
    }, error => {
      ignoreRender(ui, false);
      onLoadError(ui, event, error);
      leafPaint.loadId = null;
    });
  }
  return leafPaint;
}
function checkSizeAndCreateData(ui, attrName, paint, image, leafPaint, boxBounds) {
  if (attrName === 'fill' && !ui.__.__naturalWidth) {
    const data = ui.__;
    data.__naturalWidth = image.width / data.pixelRatio;
    data.__naturalHeight = image.height / data.pixelRatio;
    if (data.__autoSide) {
      ui.forceUpdate('width');
      if (ui.__proxyData) {
        ui.setProxyAttr('width', data.width);
        ui.setProxyAttr('height', data.height);
      }
      return false;
    }
  }
  if (!leafPaint.data) createData(leafPaint, image, paint, boxBounds);
  return true;
}
function onLoad(ui, event) {
  web_esm_emit(ui, ImageEvent.LOAD, event);
}
function onLoadSuccess(ui, event) {
  web_esm_emit(ui, ImageEvent.LOADED, event);
}
function onLoadError(ui, event, error) {
  event.error = error;
  ui.forceUpdate('surface');
  web_esm_emit(ui, ImageEvent.ERROR, event);
}
function web_esm_emit(ui, type, data) {
  if (ui.hasEvent(type)) ui.emitEvent(new ImageEvent(type, data));
}
function ignoreRender(ui, value) {
  const {
    leafer
  } = ui;
  if (leafer && leafer.viewReady) leafer.renderer.ignore = value;
}
const {
  get: get$1,
  scale,
  copy: web_esm_copy$1
} = MatrixHelper;
const {
  ceil: web_esm_ceil,
  abs: web_esm_abs$1
} = Math;
function createPattern(ui, paint, pixelRatio) {
  let {
    scaleX,
    scaleY
  } = ImageManager.patternLocked ? ui.__world : ui.__nowWorld;
  const id = scaleX + '-' + scaleY;
  if (paint.patternId !== id && !ui.destroyed) {
    scaleX = web_esm_abs$1(scaleX);
    scaleY = web_esm_abs$1(scaleY);
    const {
      image,
      data
    } = paint;
    let imageScale,
      imageMatrix,
      {
        width,
        height,
        scaleX: sx,
        scaleY: sy,
        opacity,
        transform,
        repeat
      } = data;
    if (sx) {
      imageMatrix = get$1();
      web_esm_copy$1(imageMatrix, transform);
      scale(imageMatrix, 1 / sx, 1 / sy);
      scaleX *= sx;
      scaleY *= sy;
    }
    scaleX *= pixelRatio;
    scaleY *= pixelRatio;
    width *= scaleX;
    height *= scaleY;
    const size = width * height;
    if (!repeat) {
      if (size > Platform.image.maxCacheSize) return false;
    }
    let maxSize = Platform.image.maxPatternSize;
    if (!image.isSVG) {
      const imageSize = image.width * image.height;
      if (maxSize > imageSize) maxSize = imageSize;
    }
    if (size > maxSize) imageScale = Math.sqrt(size / maxSize);
    if (imageScale) {
      scaleX /= imageScale;
      scaleY /= imageScale;
      width /= imageScale;
      height /= imageScale;
    }
    if (sx) {
      scaleX /= sx;
      scaleY /= sy;
    }
    if (transform || scaleX !== 1 || scaleY !== 1) {
      if (!imageMatrix) {
        imageMatrix = get$1();
        if (transform) web_esm_copy$1(imageMatrix, transform);
      }
      scale(imageMatrix, 1 / scaleX, 1 / scaleY);
    }
    const canvas = image.getCanvas(web_esm_ceil(width) || 1, web_esm_ceil(height) || 1, opacity);
    const pattern = image.getPattern(canvas, repeat || Platform.origin.noRepeat || 'no-repeat', imageMatrix, paint);
    paint.style = pattern;
    paint.patternId = id;
    return true;
  } else {
    return false;
  }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function web_esm_awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
const {
  abs: web_esm_abs
} = Math;
function checkImage(ui, canvas, paint, allowPaint) {
  const {
    scaleX,
    scaleY
  } = ImageManager.patternLocked ? ui.__world : ui.__nowWorld;
  if (!paint.data || paint.patternId === scaleX + '-' + scaleY) {
    return false;
  } else {
    const {
      data
    } = paint;
    if (allowPaint) {
      if (!data.repeat) {
        let {
          width,
          height
        } = data;
        width *= web_esm_abs(scaleX) * canvas.pixelRatio;
        height *= web_esm_abs(scaleY) * canvas.pixelRatio;
        if (data.scaleX) {
          width *= data.scaleX;
          height *= data.scaleY;
        }
        allowPaint = width * height > Platform.image.maxCacheSize || Export.running;
      } else {
        allowPaint = false;
      }
    }
    if (allowPaint) {
      canvas.save();
      canvas.clip();
      if (paint.blendMode) canvas.blendMode = paint.blendMode;
      if (data.opacity) canvas.opacity *= data.opacity;
      if (data.transform) canvas.transform(data.transform);
      canvas.drawImage(paint.image.view, 0, 0, data.width, data.height);
      canvas.restore();
      return true;
    } else {
      if (!paint.style || Export.running) {
        createPattern(ui, paint, canvas.pixelRatio);
      } else {
        if (!paint.patternTask) {
          paint.patternTask = ImageManager.patternTasker.add(() => web_esm_awaiter(this, void 0, void 0, function* () {
            paint.patternTask = null;
            if (canvas.bounds.hit(ui.__nowWorld)) createPattern(ui, paint, canvas.pixelRatio);
            ui.forceUpdate('surface');
          }), 300);
        }
      }
      return false;
    }
  }
}
function recycleImage(attrName, data) {
  const paints = data['_' + attrName];
  if (paints instanceof Array) {
    let image, recycleMap, input, url;
    for (let i = 0, len = paints.length; i < len; i++) {
      image = paints[i].image;
      url = image && image.url;
      if (url) {
        if (!recycleMap) recycleMap = {};
        recycleMap[url] = true;
        ImageManager.recycle(image);
        if (image.loading) {
          if (!input) {
            input = data.__input && data.__input[attrName] || [];
            if (!(input instanceof Array)) input = [input];
          }
          image.unload(paints[i].loadId, !input.some(item => item.url === url));
        }
      }
    }
    return recycleMap;
  }
  return null;
}
const PaintImageModule = {
  image: web_esm_image,
  checkImage,
  createPattern,
  recycleImage,
  createData,
  getPatternData,
  fillOrFitMode,
  clipMode,
  repeatMode
};
const {
  toPoint: web_esm_toPoint$2
} = AroundHelper;
const realFrom$2 = {};
const realTo$2 = {};
function linearGradient(paint, box) {
  let {
    from,
    to,
    type,
    blendMode,
    opacity
  } = paint;
  web_esm_toPoint$2(from || 'top', box, realFrom$2);
  web_esm_toPoint$2(to || 'bottom', box, realTo$2);
  const style = Platform.canvas.createLinearGradient(realFrom$2.x, realFrom$2.y, realTo$2.x, realTo$2.y);
  applyStops(style, paint.stops, opacity);
  const data = {
    type,
    style
  };
  if (blendMode) data.blendMode = blendMode;
  return data;
}
function applyStops(gradient, stops, opacity) {
  let stop;
  for (let i = 0, len = stops.length; i < len; i++) {
    stop = stops[i];
    if (typeof stop === 'string') {
      gradient.addColorStop(i / (len - 1), ColorConvert.string(stop, opacity));
    } else {
      gradient.addColorStop(stop.offset, ColorConvert.string(stop.color, opacity));
    }
  }
}
const {
  getAngle: web_esm_getAngle,
  getDistance: getDistance$1
} = PointHelper;
const {
  get: web_esm_get,
  rotateOfOuter: web_esm_rotateOfOuter,
  scaleOfOuter: web_esm_scaleOfOuter
} = MatrixHelper;
const {
  toPoint: web_esm_toPoint$1
} = AroundHelper;
const realFrom$1 = {};
const realTo$1 = {};
function radialGradient(paint, box) {
  let {
    from,
    to,
    type,
    opacity,
    blendMode,
    stretch
  } = paint;
  web_esm_toPoint$1(from || 'center', box, realFrom$1);
  web_esm_toPoint$1(to || 'bottom', box, realTo$1);
  const style = Platform.canvas.createRadialGradient(realFrom$1.x, realFrom$1.y, 0, realFrom$1.x, realFrom$1.y, getDistance$1(realFrom$1, realTo$1));
  applyStops(style, paint.stops, opacity);
  const data = {
    type,
    style
  };
  const transform = getTransform(box, realFrom$1, realTo$1, stretch, true);
  if (transform) data.transform = transform;
  if (blendMode) data.blendMode = blendMode;
  return data;
}
function getTransform(box, from, to, stretch, rotate90) {
  let transform;
  const {
    width,
    height
  } = box;
  if (width !== height || stretch) {
    const angle = web_esm_getAngle(from, to);
    transform = web_esm_get();
    if (rotate90) {
      web_esm_scaleOfOuter(transform, from, width / height * (stretch || 1), 1);
      web_esm_rotateOfOuter(transform, from, angle + 90);
    } else {
      web_esm_scaleOfOuter(transform, from, 1, width / height * (stretch || 1));
      web_esm_rotateOfOuter(transform, from, angle);
    }
  }
  return transform;
}
const {
  getDistance: web_esm_getDistance
} = PointHelper;
const {
  toPoint: web_esm_toPoint
} = AroundHelper;
const realFrom = {};
const realTo = {};
function conicGradient(paint, box) {
  let {
    from,
    to,
    type,
    opacity,
    blendMode,
    stretch
  } = paint;
  web_esm_toPoint(from || 'center', box, realFrom);
  web_esm_toPoint(to || 'bottom', box, realTo);
  const style = Platform.conicGradientSupport ? Platform.canvas.createConicGradient(0, realFrom.x, realFrom.y) : Platform.canvas.createRadialGradient(realFrom.x, realFrom.y, 0, realFrom.x, realFrom.y, web_esm_getDistance(realFrom, realTo));
  applyStops(style, paint.stops, opacity);
  const data = {
    type,
    style
  };
  const transform = getTransform(box, realFrom, realTo, stretch || 1, Platform.conicGradientRotate90);
  if (transform) data.transform = transform;
  if (blendMode) data.blendMode = blendMode;
  return data;
}
const PaintGradientModule = {
  linearGradient,
  radialGradient,
  conicGradient,
  getTransform
};
const {
  copy: web_esm_copy,
  toOffsetOutBounds: toOffsetOutBounds$1
} = BoundsHelper;
const web_esm_tempBounds = {};
const offsetOutBounds$1 = {};
function shadow(ui, current, shape) {
  let copyBounds, spreadScale;
  const {
    __nowWorld: nowWorld,
    __layout
  } = ui;
  const {
    shadow
  } = ui.__;
  const {
    worldCanvas,
    bounds,
    shapeBounds,
    scaleX,
    scaleY
  } = shape;
  const other = current.getSameCanvas();
  const end = shadow.length - 1;
  toOffsetOutBounds$1(bounds, offsetOutBounds$1);
  shadow.forEach((item, index) => {
    other.setWorldShadow(offsetOutBounds$1.offsetX + item.x * scaleX, offsetOutBounds$1.offsetY + item.y * scaleY, item.blur * scaleX, item.color);
    spreadScale = item.spread ? 1 + item.spread * 2 / (__layout.boxBounds.width + (__layout.strokeBoxSpread || 0) * 2) : 0;
    drawWorldShadow(other, offsetOutBounds$1, spreadScale, shape);
    copyBounds = bounds;
    if (item.box) {
      other.restore();
      other.save();
      if (worldCanvas) {
        other.copyWorld(other, bounds, nowWorld, 'copy');
        copyBounds = nowWorld;
      }
      worldCanvas ? other.copyWorld(worldCanvas, nowWorld, nowWorld, 'destination-out') : other.copyWorld(shape.canvas, shapeBounds, bounds, 'destination-out');
    }
    if (ui.__worldFlipped) {
      current.copyWorldByReset(other, copyBounds, nowWorld, item.blendMode);
    } else {
      current.copyWorldToInner(other, copyBounds, __layout.renderBounds, item.blendMode);
    }
    if (end && index < end) other.clearWorld(copyBounds, true);
  });
  other.recycle(copyBounds);
}
function drawWorldShadow(canvas, outBounds, spreadScale, shape) {
  const {
    bounds,
    shapeBounds
  } = shape;
  if (Platform.fullImageShadow) {
    web_esm_copy(web_esm_tempBounds, canvas.bounds);
    web_esm_tempBounds.x += outBounds.x - shapeBounds.x;
    web_esm_tempBounds.y += outBounds.y - shapeBounds.y;
    if (spreadScale) {
      const {
        matrix
      } = shape;
      web_esm_tempBounds.x -= (bounds.x + (matrix ? matrix.e : 0) + bounds.width / 2) * (spreadScale - 1);
      web_esm_tempBounds.y -= (bounds.y + (matrix ? matrix.f : 0) + bounds.height / 2) * (spreadScale - 1);
      web_esm_tempBounds.width *= spreadScale;
      web_esm_tempBounds.height *= spreadScale;
    }
    canvas.copyWorld(shape.canvas, canvas.bounds, web_esm_tempBounds);
  } else {
    if (spreadScale) {
      web_esm_copy(web_esm_tempBounds, outBounds);
      web_esm_tempBounds.x -= outBounds.width / 2 * (spreadScale - 1);
      web_esm_tempBounds.y -= outBounds.height / 2 * (spreadScale - 1);
      web_esm_tempBounds.width *= spreadScale;
      web_esm_tempBounds.height *= spreadScale;
    }
    canvas.copyWorld(shape.canvas, shapeBounds, spreadScale ? web_esm_tempBounds : outBounds);
  }
}
const {
  toOffsetOutBounds
} = BoundsHelper;
const offsetOutBounds = {};
function innerShadow(ui, current, shape) {
  let copyBounds, spreadScale;
  const {
    __nowWorld: nowWorld,
    __layout: __layout
  } = ui;
  const {
    innerShadow
  } = ui.__;
  const {
    worldCanvas,
    bounds,
    shapeBounds,
    scaleX,
    scaleY
  } = shape;
  const other = current.getSameCanvas();
  const end = innerShadow.length - 1;
  toOffsetOutBounds(bounds, offsetOutBounds);
  innerShadow.forEach((item, index) => {
    other.save();
    other.setWorldShadow(offsetOutBounds.offsetX + item.x * scaleX, offsetOutBounds.offsetY + item.y * scaleY, item.blur * scaleX);
    spreadScale = item.spread ? 1 - item.spread * 2 / (__layout.boxBounds.width + (__layout.strokeBoxSpread || 0) * 2) : 0;
    drawWorldShadow(other, offsetOutBounds, spreadScale, shape);
    other.restore();
    if (worldCanvas) {
      other.copyWorld(other, bounds, nowWorld, 'copy');
      other.copyWorld(worldCanvas, nowWorld, nowWorld, 'source-out');
      copyBounds = nowWorld;
    } else {
      other.copyWorld(shape.canvas, shapeBounds, bounds, 'source-out');
      copyBounds = bounds;
    }
    other.fillWorld(copyBounds, item.color, 'source-in');
    if (ui.__worldFlipped) {
      current.copyWorldByReset(other, copyBounds, nowWorld, item.blendMode);
    } else {
      current.copyWorldToInner(other, copyBounds, __layout.renderBounds, item.blendMode);
    }
    if (end && index < end) other.clearWorld(copyBounds, true);
  });
  other.recycle(copyBounds);
}
function web_esm_blur(ui, current, origin) {
  const {
    blur
  } = ui.__;
  origin.setWorldBlur(blur * ui.__nowWorld.a);
  origin.copyWorldToInner(current, ui.__nowWorld, ui.__layout.renderBounds);
  origin.filter = 'none';
}
function backgroundBlur(_ui, _current, _shape) {}
const EffectModule = {
  shadow,
  innerShadow,
  blur: web_esm_blur,
  backgroundBlur
};
const {
  excludeRenderBounds: web_esm_excludeRenderBounds
} = LeafBoundsHelper;
Group.prototype.__renderMask = function (canvas, options) {
  let child, maskCanvas, contentCanvas, maskOpacity, currentMask;
  const {
    children
  } = this;
  for (let i = 0, len = children.length; i < len; i++) {
    child = children[i];
    if (child.__.mask) {
      if (currentMask) {
        maskEnd(this, currentMask, canvas, contentCanvas, maskCanvas, maskOpacity);
        maskCanvas = contentCanvas = null;
      }
      if (child.__.mask === 'path') {
        if (child.opacity < 1) {
          currentMask = 'opacity-path';
          maskOpacity = child.opacity;
          if (!contentCanvas) contentCanvas = getCanvas(canvas);
        } else {
          currentMask = 'path';
          canvas.save();
        }
        child.__clip(contentCanvas || canvas, options);
      } else {
        currentMask = 'alpha';
        if (!maskCanvas) maskCanvas = getCanvas(canvas);
        if (!contentCanvas) contentCanvas = getCanvas(canvas);
        child.__render(maskCanvas, options);
      }
      if (child.__.mask !== 'clipping') continue;
    }
    if (web_esm_excludeRenderBounds(child, options)) continue;
    child.__render(contentCanvas || canvas, options);
  }
  maskEnd(this, currentMask, canvas, contentCanvas, maskCanvas, maskOpacity);
};
function maskEnd(leaf, maskMode, canvas, contentCanvas, maskCanvas, maskOpacity) {
  switch (maskMode) {
    case 'alpha':
      usePixelMask(leaf, canvas, contentCanvas, maskCanvas);
      break;
    case 'opacity-path':
      copyContent(leaf, canvas, contentCanvas, maskOpacity);
      break;
    case 'path':
      canvas.restore();
  }
}
function getCanvas(canvas) {
  return canvas.getSameCanvas(false, true);
}
function usePixelMask(leaf, canvas, content, mask) {
  const realBounds = leaf.__nowWorld;
  content.resetTransform();
  content.opacity = 1;
  content.useMask(mask, realBounds);
  mask.recycle(realBounds);
  copyContent(leaf, canvas, content, 1);
}
function copyContent(leaf, canvas, content, maskOpacity) {
  const realBounds = leaf.__nowWorld;
  canvas.resetTransform();
  canvas.opacity = maskOpacity;
  canvas.copyWorld(content, realBounds);
  content.recycle(realBounds);
}
const money = '¥￥＄€£￡¢￠';
const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
const langBefore = '《（「〈『〖【〔｛┌＜‘“＝' + money;
const langAfter = '》）」〉』〗】〕｝┐＞’”！？，、。：；‰';
const langSymbol = '≮≯≈≠＝…';
const langBreak$1 = '—／～｜┆·';
const beforeChar = '{[(<\'"' + langBefore;
const afterChar = '>)]}%!?,.:;\'"' + langAfter;
const symbolChar = afterChar + '_#~&*+\\=|' + langSymbol;
const breakChar = '- ' + langBreak$1;
const cjkRangeList = [[0x4E00, 0x9FFF], [0x3400, 0x4DBF], [0x20000, 0x2A6DF], [0x2A700, 0x2B73F], [0x2B740, 0x2B81F], [0x2B820, 0x2CEAF], [0x2CEB0, 0x2EBEF], [0x30000, 0x3134F], [0x31350, 0x323AF], [0x2E80, 0x2EFF], [0x2F00, 0x2FDF], [0x2FF0, 0x2FFF], [0x3000, 0x303F], [0x31C0, 0x31EF], [0x3200, 0x32FF], [0x3300, 0x33FF], [0xF900, 0xFAFF], [0xFE30, 0xFE4F], [0x1F200, 0x1F2FF], [0x2F800, 0x2FA1F]];
const cjkReg = new RegExp(cjkRangeList.map(([start, end]) => `[\\u${start.toString(16)}-\\u${end.toString(16)}]`).join('|'));
function mapChar(str) {
  const map = {};
  str.split('').forEach(char => map[char] = true);
  return map;
}
const letterMap = mapChar(letter);
const beforeMap = mapChar(beforeChar);
const afterMap = mapChar(afterChar);
const symbolMap = mapChar(symbolChar);
const breakMap = mapChar(breakChar);
var CharType;
(function (CharType) {
  CharType[CharType["Letter"] = 0] = "Letter";
  CharType[CharType["Single"] = 1] = "Single";
  CharType[CharType["Before"] = 2] = "Before";
  CharType[CharType["After"] = 3] = "After";
  CharType[CharType["Symbol"] = 4] = "Symbol";
  CharType[CharType["Break"] = 5] = "Break";
})(CharType || (CharType = {}));
const {
  Letter: Letter$1,
  Single: Single$1,
  Before: Before$1,
  After: After$1,
  Symbol: Symbol$1,
  Break: Break$1
} = CharType;
function getCharType(char) {
  if (letterMap[char]) {
    return Letter$1;
  } else if (breakMap[char]) {
    return Break$1;
  } else if (beforeMap[char]) {
    return Before$1;
  } else if (afterMap[char]) {
    return After$1;
  } else if (symbolMap[char]) {
    return Symbol$1;
  } else if (cjkReg.test(char)) {
    return Single$1;
  } else {
    return Letter$1;
  }
}
const TextRowHelper = {
  trimRight(row) {
    const {
      words
    } = row;
    let trimRight = 0,
      len = words.length,
      char;
    for (let i = len - 1; i > -1; i--) {
      char = words[i].data[0];
      if (char.char === ' ') {
        trimRight++;
        row.width -= char.width;
      } else {
        break;
      }
    }
    if (trimRight) words.splice(len - trimRight, trimRight);
  }
};
function getTextCase(char, textCase, firstChar) {
  switch (textCase) {
    case 'title':
      return firstChar ? char.toUpperCase() : char;
    case 'upper':
      return char.toUpperCase();
    case 'lower':
      return char.toLowerCase();
    default:
      return char;
  }
}
const {
  trimRight
} = TextRowHelper;
const {
  Letter,
  Single,
  Before,
  After,
  Symbol: web_esm_Symbol,
  Break
} = CharType;
let word, row, wordWidth, rowWidth, realWidth;
let web_esm_char, charWidth, startCharSize, charSize, charType, lastCharType, langBreak, afterBreak, paraStart;
let textDrawData,
  rows = [],
  bounds;
function createRows(drawData, content, style) {
  textDrawData = drawData;
  rows = drawData.rows;
  bounds = drawData.bounds;
  const {
    __letterSpacing,
    paraIndent,
    textCase
  } = style;
  const {
    canvas
  } = Platform;
  const {
    width,
    height
  } = bounds;
  const charMode = width || height || __letterSpacing || textCase !== 'none';
  if (charMode) {
    const wrap = style.textWrap !== 'none';
    const breakAll = style.textWrap === 'break';
    paraStart = true;
    lastCharType = null;
    startCharSize = charWidth = charSize = wordWidth = rowWidth = 0;
    word = {
      data: []
    }, row = {
      words: []
    };
    for (let i = 0, len = content.length; i < len; i++) {
      web_esm_char = content[i];
      if (web_esm_char === '\n') {
        if (wordWidth) addWord();
        row.paraEnd = true;
        addRow();
        paraStart = true;
      } else {
        charType = getCharType(web_esm_char);
        if (charType === Letter && textCase !== 'none') web_esm_char = getTextCase(web_esm_char, textCase, !wordWidth);
        charWidth = canvas.measureText(web_esm_char).width;
        if (__letterSpacing) {
          if (__letterSpacing < 0) charSize = charWidth;
          charWidth += __letterSpacing;
        }
        langBreak = charType === Single && (lastCharType === Single || lastCharType === Letter) || lastCharType === Single && charType !== After;
        afterBreak = (charType === Before || charType === Single) && (lastCharType === web_esm_Symbol || lastCharType === After);
        realWidth = paraStart && paraIndent ? width - paraIndent : width;
        if (wrap && width && rowWidth + wordWidth + charWidth > realWidth) {
          if (breakAll) {
            if (wordWidth) addWord();
            if (rowWidth) addRow();
          } else {
            if (!afterBreak) afterBreak = charType === Letter && lastCharType == After;
            if (langBreak || afterBreak || charType === Break || charType === Before || charType === Single || wordWidth + charWidth > realWidth) {
              if (wordWidth) addWord();
              if (rowWidth) addRow();
            } else {
              if (rowWidth) addRow();
            }
          }
        }
        if (web_esm_char === ' ' && paraStart !== true && rowWidth + wordWidth === 0) ;else {
          if (charType === Break) {
            if (web_esm_char === ' ' && wordWidth) addWord();
            addChar(web_esm_char, charWidth);
            addWord();
          } else if (langBreak || afterBreak) {
            if (wordWidth) addWord();
            addChar(web_esm_char, charWidth);
          } else {
            addChar(web_esm_char, charWidth);
          }
        }
        lastCharType = charType;
      }
    }
    if (wordWidth) addWord();
    if (rowWidth) addRow();
    rows.length > 0 && (rows[rows.length - 1].paraEnd = true);
  } else {
    content.split('\n').forEach(content => {
      textDrawData.paraNumber++;
      rows.push({
        x: paraIndent || 0,
        text: content,
        width: canvas.measureText(content).width,
        paraStart: true
      });
    });
  }
}
function addChar(char, width) {
  if (charSize && !startCharSize) startCharSize = charSize;
  word.data.push({
    char,
    width
  });
  wordWidth += width;
}
function addWord() {
  rowWidth += wordWidth;
  word.width = wordWidth;
  row.words.push(word);
  word = {
    data: []
  };
  wordWidth = 0;
}
function addRow() {
  if (paraStart) {
    textDrawData.paraNumber++;
    row.paraStart = true;
    paraStart = false;
  }
  if (charSize) {
    row.startCharSize = startCharSize;
    row.endCharSize = charSize;
    startCharSize = 0;
  }
  row.width = rowWidth;
  if (bounds.width) trimRight(row);
  rows.push(row);
  row = {
    words: []
  };
  rowWidth = 0;
}
const CharMode = 0;
const WordMode = 1;
const TextMode = 2;
function layoutChar(drawData, style, width, _height) {
  const {
    rows
  } = drawData;
  const {
    textAlign,
    paraIndent,
    letterSpacing
  } = style;
  let charX, addWordWidth, indentWidth, mode, wordChar;
  rows.forEach(row => {
    if (row.words) {
      indentWidth = paraIndent && row.paraStart ? paraIndent : 0;
      addWordWidth = width && textAlign === 'justify' && row.words.length > 1 ? (width - row.width - indentWidth) / (row.words.length - 1) : 0;
      mode = letterSpacing || row.isOverflow ? CharMode : addWordWidth > 0.01 ? WordMode : TextMode;
      if (row.isOverflow && !letterSpacing) row.textMode = true;
      if (mode === TextMode) {
        row.x += indentWidth;
        toTextChar$1(row);
      } else {
        row.x += indentWidth;
        charX = row.x;
        row.data = [];
        row.words.forEach(word => {
          if (mode === WordMode) {
            wordChar = {
              char: '',
              x: charX
            };
            charX = toWordChar(word.data, charX, wordChar);
            if (row.isOverflow || wordChar.char !== ' ') row.data.push(wordChar);
          } else {
            charX = toChar(word.data, charX, row.data, row.isOverflow);
          }
          if (!row.paraEnd && addWordWidth) {
            charX += addWordWidth;
            row.width += addWordWidth;
          }
        });
      }
      row.words = null;
    }
  });
}
function toTextChar$1(row) {
  row.text = '';
  row.words.forEach(word => {
    word.data.forEach(char => {
      row.text += char.char;
    });
  });
}
function toWordChar(data, charX, wordChar) {
  data.forEach(char => {
    wordChar.char += char.char;
    charX += char.width;
  });
  return charX;
}
function toChar(data, charX, rowData, isOverflow) {
  data.forEach(char => {
    if (isOverflow || char.char !== ' ') {
      char.x = charX;
      rowData.push(char);
    }
    charX += char.width;
  });
  return charX;
}
function layoutText(drawData, style) {
  const {
    rows,
    bounds
  } = drawData;
  const {
    __lineHeight,
    __baseLine,
    __letterSpacing,
    __clipText,
    textAlign,
    verticalAlign,
    paraSpacing
  } = style;
  let {
      x,
      y,
      width,
      height
    } = bounds,
    realHeight = __lineHeight * rows.length + (paraSpacing ? paraSpacing * (drawData.paraNumber - 1) : 0);
  let starY = __baseLine;
  if (__clipText && realHeight > height) {
    realHeight = Math.max(height, __lineHeight);
    drawData.overflow = rows.length;
  } else {
    switch (verticalAlign) {
      case 'middle':
        y += (height - realHeight) / 2;
        break;
      case 'bottom':
        y += height - realHeight;
    }
  }
  starY += y;
  let row, rowX, rowWidth;
  for (let i = 0, len = rows.length; i < len; i++) {
    row = rows[i];
    row.x = x;
    if (row.width < width || row.width > width && !__clipText) {
      switch (textAlign) {
        case 'center':
          row.x += (width - row.width) / 2;
          break;
        case 'right':
          row.x += width - row.width;
      }
    }
    if (row.paraStart && paraSpacing && i > 0) starY += paraSpacing;
    row.y = starY;
    starY += __lineHeight;
    if (drawData.overflow > i && starY > realHeight) {
      row.isOverflow = true;
      drawData.overflow = i + 1;
    }
    rowX = row.x;
    rowWidth = row.width;
    if (__letterSpacing < 0) {
      if (row.width < 0) {
        rowWidth = -row.width + style.fontSize + __letterSpacing;
        rowX -= rowWidth;
        rowWidth += style.fontSize;
      } else {
        rowWidth -= __letterSpacing;
      }
    }
    if (rowX < bounds.x) bounds.x = rowX;
    if (rowWidth > bounds.width) bounds.width = rowWidth;
    if (__clipText && width && width < rowWidth) {
      row.isOverflow = true;
      if (!drawData.overflow) drawData.overflow = rows.length;
    }
  }
  bounds.y = y;
  bounds.height = realHeight;
}
function clipText(drawData, style, x, width) {
  if (!width) return;
  const {
    rows,
    overflow
  } = drawData;
  let {
    textOverflow
  } = style;
  rows.splice(overflow);
  if (textOverflow && textOverflow !== 'show') {
    if (textOverflow === 'hide') textOverflow = '';else if (textOverflow === 'ellipsis') textOverflow = '...';
    let char, charRight;
    const ellipsisWidth = textOverflow ? Platform.canvas.measureText(textOverflow).width : 0;
    const right = x + width - ellipsisWidth;
    const list = style.textWrap === 'none' ? rows : [rows[overflow - 1]];
    list.forEach(row => {
      if (row.isOverflow && row.data) {
        let end = row.data.length - 1;
        for (let i = end; i > -1; i--) {
          char = row.data[i];
          charRight = char.x + char.width;
          if (i === end && charRight < right) {
            break;
          } else if (charRight < right && char.char !== ' ') {
            row.data.splice(i + 1);
            row.width -= char.width;
            break;
          }
          row.width -= char.width;
        }
        row.width += ellipsisWidth;
        row.data.push({
          char: textOverflow,
          x: charRight
        });
        if (row.textMode) toTextChar(row);
      }
    });
  }
}
function toTextChar(row) {
  row.text = '';
  row.data.forEach(char => {
    row.text += char.char;
  });
  row.data = null;
}
function decorationText(drawData, style) {
  const {
    fontSize
  } = style;
  drawData.decorationHeight = fontSize / 11;
  switch (style.textDecoration) {
    case 'under':
      drawData.decorationY = fontSize * 0.15;
      break;
    case 'delete':
      drawData.decorationY = -fontSize * 0.35;
  }
}
const {
  top: web_esm_top,
  right: web_esm_right,
  bottom: web_esm_bottom,
  left
} = Direction4;
function getDrawData(content, style) {
  if (typeof content !== 'string') content = String(content);
  let x = 0,
    y = 0;
  let width = style.__getInput('width') || 0;
  let height = style.__getInput('height') || 0;
  const {
    textDecoration,
    __font,
    __padding: padding
  } = style;
  if (padding) {
    if (width) {
      x = padding[left];
      width -= padding[web_esm_right] + padding[left];
    }
    if (height) {
      y = padding[web_esm_top];
      height -= padding[web_esm_top] + padding[web_esm_bottom];
    }
  }
  const drawData = {
    bounds: {
      x,
      y,
      width,
      height
    },
    rows: [],
    paraNumber: 0,
    font: Platform.canvas.font = __font
  };
  createRows(drawData, content, style);
  if (padding) padAutoText(padding, drawData, style, width, height);
  layoutText(drawData, style);
  layoutChar(drawData, style, width);
  if (drawData.overflow) clipText(drawData, style, x, width);
  if (textDecoration !== 'none') decorationText(drawData, style);
  return drawData;
}
function padAutoText(padding, drawData, style, width, height) {
  if (!width) {
    switch (style.textAlign) {
      case 'left':
        offsetText(drawData, 'x', padding[left]);
        break;
      case 'right':
        offsetText(drawData, 'x', -padding[web_esm_right]);
    }
  }
  if (!height) {
    switch (style.verticalAlign) {
      case 'top':
        offsetText(drawData, 'y', padding[web_esm_top]);
        break;
      case 'bottom':
        offsetText(drawData, 'y', -padding[web_esm_bottom]);
    }
  }
}
function offsetText(drawData, attrName, value) {
  const {
    bounds,
    rows
  } = drawData;
  bounds[attrName] += value;
  for (let i = 0; i < rows.length; i++) rows[i][attrName] += value;
}
const TextConvertModule = {
  getDrawData
};
function string(color, opacity) {
  if (typeof color === 'string') return color;
  let a = color.a === undefined ? 1 : color.a;
  if (opacity) a *= opacity;
  const rgb = color.r + ',' + color.g + ',' + color.b;
  return a === 1 ? 'rgb(' + rgb + ')' : 'rgba(' + rgb + ',' + a + ')';
}
const ColorConvertModule = {
  string
};
const {
  setPoint: web_esm_setPoint,
  addPoint: web_esm_addPoint,
  toBounds: web_esm_toBounds
} = TwoPointBoundsHelper;
function getTrimBounds(canvas) {
  const {
    width,
    height
  } = canvas.view;
  const {
    data
  } = canvas.context.getImageData(0, 0, width, height);
  let x,
    y,
    pointBounds,
    index = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] !== 0) {
      x = index % width;
      y = (index - x) / width;
      pointBounds ? web_esm_addPoint(pointBounds, x, y) : web_esm_setPoint(pointBounds = {}, x, y);
    }
    index++;
  }
  const bounds = new Bounds();
  web_esm_toBounds(pointBounds, bounds);
  return bounds.scale(1 / canvas.pixelRatio).ceil();
}
const ExportModule = {
  export(leaf, filename, options) {
    this.running = true;
    const fileType = FileHelper.fileType(filename);
    options = FileHelper.getExportOptions(options);
    return addTask(success => new Promise(resolve => {
      const over = result => {
        success(result);
        resolve();
        this.running = false;
      };
      const {
        toURL
      } = Platform;
      const {
        download
      } = Platform.origin;
      if (filename === 'json') {
        return over({
          data: leaf.toJSON(options.json)
        });
      } else if (fileType === 'json') {
        download(toURL(JSON.stringify(leaf.toJSON(options.json)), 'text'), filename);
        return over({
          data: true
        });
      }
      if (filename === 'svg') {
        return over({
          data: leaf.toSVG()
        });
      } else if (fileType === 'svg') {
        download(toURL(leaf.toSVG(), 'svg'), filename);
        return over({
          data: true
        });
      }
      const {
        leafer
      } = leaf;
      if (leafer) {
        checkLazy(leaf);
        leafer.waitViewCompleted(() => web_esm_awaiter(this, void 0, void 0, function* () {
          let renderBounds,
            trimBounds,
            scaleX = 1,
            scaleY = 1;
          const {
            worldTransform,
            isLeafer,
            isFrame
          } = leaf;
          const {
            slice,
            trim,
            onCanvas
          } = options;
          let scale = options.scale || 1;
          let pixelRatio = options.pixelRatio || 1;
          const smooth = options.smooth === undefined ? leafer.config.smooth : options.smooth;
          const contextSettings = options.contextSettings || leafer.config.contextSettings;
          if (leaf.isApp) {
            scale *= pixelRatio;
            pixelRatio = leaf.app.pixelRatio;
          }
          const screenshot = options.screenshot || leaf.isApp;
          const fill = isLeafer && screenshot ? options.fill === undefined ? leaf.fill : options.fill : options.fill;
          const needFill = FileHelper.isOpaqueImage(filename) || fill,
            matrix = new Matrix();
          if (screenshot) {
            renderBounds = screenshot === true ? isLeafer ? leafer.canvas.bounds : leaf.worldRenderBounds : screenshot;
          } else {
            let relative = options.relative || (isLeafer ? 'inner' : 'local');
            scaleX = worldTransform.scaleX;
            scaleY = worldTransform.scaleY;
            switch (relative) {
              case 'inner':
                matrix.set(worldTransform);
                break;
              case 'local':
                matrix.set(worldTransform).divide(leaf.localTransform);
                scaleX /= leaf.scaleX;
                scaleY /= leaf.scaleY;
                break;
              case 'world':
                scaleX = 1;
                scaleY = 1;
                break;
              case 'page':
                relative = leaf.leafer;
              default:
                matrix.set(worldTransform).divide(leaf.getTransform(relative));
                const l = relative.worldTransform;
                scaleX /= scaleX / l.scaleX;
                scaleY /= scaleY / l.scaleY;
            }
            renderBounds = leaf.getBounds('render', relative);
          }
          const {
            x,
            y,
            width,
            height
          } = new Bounds(renderBounds).scale(scale);
          let canvas = Creator.canvas({
            width: Math.round(width),
            height: Math.round(height),
            pixelRatio,
            smooth,
            contextSettings
          });
          const renderOptions = {
            matrix: matrix.scale(1 / scale).invert().translate(-x, -y).withScale(1 / scaleX * scale, 1 / scaleY * scale)
          };
          if (slice) {
            leaf = leafer;
            renderOptions.bounds = canvas.bounds;
          }
          canvas.save();
          if (isFrame && fill !== undefined) {
            const oldFill = leaf.get('fill');
            leaf.fill = '';
            leaf.__render(canvas, renderOptions);
            leaf.fill = oldFill;
          } else {
            leaf.__render(canvas, renderOptions);
          }
          canvas.restore();
          if (trim) {
            trimBounds = getTrimBounds(canvas);
            const old = canvas,
              {
                width,
                height
              } = trimBounds;
            const config = {
              x: 0,
              y: 0,
              width,
              height,
              pixelRatio
            };
            canvas = Creator.canvas(config);
            canvas.copyWorld(old, trimBounds, config);
          }
          if (needFill) canvas.fillWorld(canvas.bounds, fill || '#FFFFFF', 'destination-over');
          if (onCanvas) onCanvas(canvas);
          const data = filename === 'canvas' ? canvas : yield canvas.export(filename, options);
          over({
            data,
            width: canvas.pixelWidth,
            height: canvas.pixelHeight,
            renderBounds,
            trimBounds
          });
        }));
      } else {
        over({
          data: false
        });
      }
    }));
  }
};
let tasker;
function addTask(task) {
  if (!tasker) tasker = new TaskProcessor();
  return new Promise(resolve => {
    tasker.add(() => web_esm_awaiter(this, void 0, void 0, function* () {
      return yield task(resolve);
    }), {
      parallel: false
    });
  });
}
function checkLazy(leaf) {
  if (leaf.__.__needComputePaint) leaf.__.__computePaint();
  if (leaf.isBranch) leaf.children.forEach(child => checkLazy(child));
}
const web_esm_canvas = LeaferCanvasBase.prototype;
const web_esm_debug = Debug.get('@leafer-ui/export');
web_esm_canvas.export = function (filename, options) {
  const {
    quality,
    blob
  } = FileHelper.getExportOptions(options);
  if (filename.includes('.')) {
    return this.saveAs(filename, quality);
  } else if (blob) {
    return this.toBlob(filename, quality);
  } else {
    return this.toDataURL(filename, quality);
  }
};
web_esm_canvas.toBlob = function (type, quality) {
  return new Promise(resolve => {
    Platform.origin.canvasToBolb(this.view, type, quality).then(blob => {
      resolve(blob);
    }).catch(e => {
      web_esm_debug.error(e);
      resolve(null);
    });
  });
};
web_esm_canvas.toDataURL = function (type, quality) {
  return Platform.origin.canvasToDataURL(this.view, type, quality);
};
web_esm_canvas.saveAs = function (filename, quality) {
  return new Promise(resolve => {
    Platform.origin.canvasSaveAs(this.view, filename, quality).then(() => {
      resolve(true);
    }).catch(e => {
      web_esm_debug.error(e);
      resolve(false);
    });
  });
};
Object.assign(TextConvert, TextConvertModule);
Object.assign(ColorConvert, ColorConvertModule);
Object.assign(Paint, PaintModule);
Object.assign(PaintImage, PaintImageModule);
Object.assign(PaintGradient, PaintGradientModule);
Object.assign(Effect, EffectModule);
Object.assign(Export, ExportModule);
Object.assign(Creator, {
  interaction: (target, canvas, selector, options) => new Interaction(target, canvas, selector, options),
  hitCanvas: (options, manager) => new LeaferCanvas(options, manager),
  hitCanvasManager: () => new HitCanvasManager()
});
useCanvas();

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// CONCATENATED MODULE: ./src/super-mario/scene/index.js


class Scene {
  constructor(options) {
    _defineProperty(this, "staticSpriteMaps", {});
    _defineProperty(this, "staticSprites", []);
    _defineProperty(this, "dynamicSprites", []);
    const {
      camera
    } = options;
    this._core = new Leafer();
    const canvas = new draw_esm_Canvas({
      x: camera.x,
      y: camera.y,
      width: camera.width,
      height: camera.height,
      pixelRatio: devicePixelRatio
    });
    this._core.add(canvas);
    this._canvas = canvas;
    this._camera = camera;
  }

  // 添加静态精灵
  addStaticSprites(staticSprite) {
    this.staticSpriteMaps[`${staticSprite.x}-${staticSprite.y}`] = staticSprite;
    this.staticSprites.push(staticSprite);
  }

  // 添加动态精灵
  addDynamicSprites(dynamicSprite) {
    this.dynamicSprites.push(dynamicSprite);
  }
  run() {
    this._canvas.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._canvas.context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    // 动态精灵渲染
    for (let i = 0; i < this.dynamicSprites.length; i++) {
      const child = this.dynamicSprites[i];
      if (child.isDestroy) {
        this.dynamicSprites.splice(i, 1);
      }
      // 只绘制相机内的精灵
      else if (this._camera.isInView(child)) {
        child.draw(this._canvas.context, this._camera);
      }
    }

    // 静态精灵渲染
    for (let i = 0; i < this.staticSprites.length; i++) {
      const child = this.staticSprites[i];
      if (child.isDestroy) {
        this.staticSprites.splice(i, 1);
        delete this.staticSpriteMaps[`${child.x}-${child.y}`];
      }
      // 只绘制相机内的精灵
      else if (this._camera.isInView(child)) {
        child.draw(this._canvas.context, this._camera);
      }
    }
    this._canvas.paint();
  }
  getCore() {
    return this._core;
  }
}
;// CONCATENATED MODULE: ./src/super-mario/camera/index.js
class Camera {
  constructor(options) {
    const {
      width,
      height,
      x,
      y
    } = options;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  isInView(options) {
    let {
      x,
      y,
      width,
      height
    } = options;

    // y轴上允许向上超出屏幕200
    return x + width >= this.x && x <= this.x + this.width && y + height >= this.y - 200 && y <= this.y - 200 + this.height + 200;
  }
}
;// CONCATENATED MODULE: ./src/super-mario/constants/index.js
const SIZE = 32;
const constants_G = 0.4;
const MARIO_VIEW_OFFSET = SIZE * 6;
;// CONCATENATED MODULE: ./src/super-mario/sprite/static-sprite.js

class StaticSprite {
  constructor(options) {
    _defineProperty(this, "isDestroy", false);
    const {
      x,
      y,
      width,
      height
    } = options;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  destroy() {
    this.isDestroy = true;
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-land.js



class SpriteLand extends StaticSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
  }
  draw(context, camera) {
    context.drawImage(spriteLandResources[0], this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-ask.js



const COLLECT_OFFSET = 6;
class SpriteAsk extends StaticSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.resources = {
      default: [SpriteAskResources[0], SpriteAskResources[1], SpriteAskResources[2], SpriteAskResources[3], SpriteAskResources[4], SpriteAskResources[5]],
      empty: [SpriteAskResources[6]]
    };
    this.type = "default";
  }
  hit() {
    if (this.type === "empty") {
      return;
    }
    this.type = "empty";
    this.frame = 0;
    this.collectY = this.y - COLLECT_OFFSET;
  }
  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame = this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;
    if (this.collectY) {
      this.collectY++;
      this.collectStep++;
      if (this.collectStep > COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
      }
    }
    context.drawImage(resource, this.x - camera.x, this.collectY || this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/dynamic-sprite.js

class DynamicSprite {
  constructor(options) {
    _defineProperty(this, "isActive", false);
    _defineProperty(this, "isDestroy", false);
    const {
      x,
      y,
      vx = 0,
      vy = 0,
      width,
      height
    } = options;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.width = width;
    this.height = height;
  }
  active() {
    this.isActive = true;
  }
  unActive() {
    this.isActive = false;
  }
  destroy() {
    this.unActive();
    this.isDestroy = true;
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-flower.js



const sprite_flower_COLLECT_OFFSET = 6;
class SpriteFlower extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.resources = {
      default: [spriteFlowerResources[0], spriteFlowerResources[1], spriteFlowerResources[2], spriteFlowerResources[3]]
    };
    this.type = "default";
  }
  appear() {
    if (this.isActive) {
      return;
    }
    this.collectY = this.y - sprite_flower_COLLECT_OFFSET;
  }
  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame = this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;
    if (this.collectY) {
      this.y = this.collectY;
      this.collectY--;
      this.collectStep++;
      if (this.collectStep > this.height - sprite_flower_COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
        this.active();
      }
    }
    context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-grow-mushroom.js



const sprite_grow_mushroom_COLLECT_OFFSET = 6;
class SpriteGrowMushroom extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.collectY = null;
    this.collectStep = 0;
  }
  appear() {
    if (this.isActive) {
      return;
    }
    this.collectY = this.y - sprite_grow_mushroom_COLLECT_OFFSET;
  }
  draw(context, camera) {
    if (this.collectY) {
      this.y = this.collectY;
      this.collectY--;
      this.collectStep++;
      if (this.collectStep > this.height - sprite_grow_mushroom_COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
        this.vx = -1;
        this.active();
      }
    }
    this.x += this.vx;
    this.y += this.vy;
    context.drawImage(spriteGrowMushroomResources[0], this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-bad-mushroom.js



class SpriteBadMushroom extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.vx = -this.width / SIZE;
    this.vy = 0;
    this.resources = {
      default: [spriteBadMushroomResources[0], spriteBadMushroomResources[1]],
      dieByBullet: [spriteBadMushroomResources[2], spriteBadMushroomResources[3]],
      dieByTrample: [spriteBadMushroomResources[4]]
    };
    this.type = "default";
    this.active();
  }
  dieByTrample() {
    this.unActive();
    this.type = "dieByTrample";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;
    setTimeout(() => {
      this.destroy();
    }, 200);
  }
  dieByBullet() {
    this.unActive();
    this.type = "dieByBullet";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;
    const animate = () => {
      if (this.beginX === undefined) {
        this.beginX = this.x;
        this.beginY = this.y;
        this.animatedX = 0;
      }
      this.animatedX += 1;
      this.animatedY = 0.2 * this.animatedX * this.animatedX - 5 * this.animatedX;
      this.x = this.beginX + this.animatedX;
      this.y = this.beginY + this.animatedY;
      if (this.y > this.beginY + 300) {
        this.destroy();
        return;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }
  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame = ~~(this.frame + 0.03) > this.resources[this.type].length - 1 ? 0 : this.frame + 0.03;
    this.x += this.vx;
    this.y += this.vy;
    context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-stone.js



const sprite_stone_COLLECT_OFFSET = 6;
class SpriteStone extends StaticSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.collectY = null;
    this.collectStep = 0;
  }
  hit() {
    this.collectY = this.y - sprite_stone_COLLECT_OFFSET;
  }
  draw(context, camera) {
    if (this.collectY) {
      this.collectY++;
      this.collectStep++;
      if (this.collectStep > sprite_stone_COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
      }
    }
    context.drawImage(spriteStoneResources[0], this.x - camera.x, this.collectY || this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-win.js



class SpriteWin extends StaticSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
  }
  draw(context, camera) {
    this.height = camera.height - SIZE;
    context.drawImage(spriteWinResources[0], this.x - camera.x - SIZE / 2, this.y, SIZE, SIZE);
    context.drawImage(spriteWinResources[1], this.x - camera.x, this.y - SIZE / 2, SIZE, SIZE);
    for (let i = 0; i < this.height - SIZE; i++) {
      context.drawImage(spriteWinResources[2], this.x - camera.x, this.y - SIZE / 2 + SIZE * (i + 1), SIZE, SIZE);
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-gold.js



class SpriteGold extends StaticSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
  }
  draw(context, camera) {
    const resource = spriteGoldResources[~~this.frame];
    this.frame = this.frame >= spriteGoldResources.length - 1 ? 0 : this.frame + 0.1;
    context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-rock.js



class SpriteRock extends StaticSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
  }
  draw(context, camera) {
    context.drawImage(spriteRockResources[0], this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-horror.js



class SpriteHorror extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.vx = -this.width / SIZE;
    this.vy = 0;
    this.resources = {
      default: [spriteHorrorResources[0], spriteHorrorResources[1]],
      dieByBullet: [spriteHorrorResources[2], spriteHorrorResources[3]]
    };
    this.type = "default";
    this.active();
  }
  dieByBullet() {
    this.unActive();
    this.type = "dieByBullet";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;
    const animate = () => {
      if (this.beginX === undefined) {
        this.beginX = this.x;
        this.beginY = this.y;
        this.animatedX = 0;
      }
      this.animatedX += 1;
      this.animatedY = 0.2 * this.animatedX * this.animatedX - 5 * this.animatedX;
      this.x = this.beginX + this.animatedX;
      this.y = this.beginY + this.animatedY;
      if (this.y > this.beginY + 300) {
        this.destroy();
        return;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }
  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame = ~~(this.frame + 0.03) > this.resources[this.type].length - 1 ? 0 : this.frame + 0.03;
    this.x += this.vx;
    this.y += this.vy;
    context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-turtle.js



class SpriteTurtle extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.vx = -this.width / SIZE;
    this.vy = 0;
    this.resources = {
      default: [spriteTurtleResources[0], spriteTurtleResources[1]],
      hide: [spriteTurtleResources[2]],
      dieByBullet: [spriteTurtleResources[4], spriteTurtleResources[5]]
    };
    this.type = "default";
    this.active();
  }
  isAttacking() {
    return this.vx !== 0 & this.type === "hide";
  }
  isHiding() {
    return this.vx === 0 & this.type === "hide";
  }
  trampleLeft() {
    this.frame = 0;
    if (this.type !== "hide") {
      this.type = "hide";
      this.vx = 0;
    } else {
      this.vx = this.vx === 0 ? 5 : 0;
    }
  }
  trampleRight() {
    this.frame = 0;
    if (this.type !== "hide") {
      this.type = "hide";
      this.vx = 0;
    } else {
      this.vx = this.vx === 0 ? -5 : 0;
    }
  }
  dieByBullet() {
    this.unActive();
    this.type = "dieByBullet";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;
    const animate = () => {
      if (this.beginX === undefined) {
        this.beginX = this.x;
        this.beginY = this.y;
        this.animatedX = 0;
      }
      this.animatedX += 1;
      this.animatedY = 0.2 * this.animatedX * this.animatedX - 5 * this.animatedX;
      this.x = this.beginX + this.animatedX;
      this.y = this.beginY + this.animatedY;
      if (this.y > this.beginY + 300) {
        this.destroy();
        return;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }
  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame = ~~(this.frame + 0.03) > this.resources[this.type].length - 1 ? 0 : this.frame + 0.03;
    this.x += this.vx;
    this.y += this.vy;
    if (this.vx > 0) {
      context.save();
      context.translate(this.x - camera.x + this.width, this.y);
      context.scale(-1, 1);
      context.drawImage(resource, 0, 0, this.width, this.height);
      context.restore();
    } else {
      context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-shell.js



class SpriteShell extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE
    });
    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.vx = -this.width / SIZE;
    this.vy = 0;
    this.resources = {
      default: [spriteShellResources[0], spriteShellResources[1]],
      hide: [spriteShellResources[2]],
      dieByBullet: [spriteShellResources[0], spriteShellResources[1]]
    };
    this.type = "default";
    this.active();
  }
  isAttacking() {
    return this.vx !== 0 & this.type === "hide";
  }
  isHiding() {
    return this.vx === 0 & this.type === "hide";
  }
  trampleLeft() {
    this.frame = 0;
    if (this.type !== "hide") {
      this.type = "hide";
      this.vx = 0;
    } else {
      this.vx = this.vx === 0 ? 10 : 0;
    }
  }
  trampleRight() {
    this.frame = 0;
    if (this.type !== "hide") {
      this.type = "hide";
      this.vx = 0;
    } else {
      this.vx = this.vx === 0 ? -10 : 0;
    }
  }
  dieByBullet() {
    this.unActive();
    this.type = "dieByBullet";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;
    const animate = () => {
      if (this.beginX === undefined) {
        this.beginX = this.x;
        this.beginY = this.y;
        this.animatedX = 0;
      }
      this.animatedX += 1;
      this.animatedY = 0.2 * this.animatedX * this.animatedX - 5 * this.animatedX;
      this.x = this.beginX + this.animatedX;
      this.y = this.beginY + this.animatedY;
      if (this.y > this.beginY + 300) {
        this.destroy();
        return;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }
  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame = ~~(this.frame + 0.03) > this.resources[this.type].length - 1 ? 0 : this.frame + 0.03;
    this.x += this.vx;
    this.y += this.vy;
    if (this.vx > 0) {
      context.save();
      context.translate(this.x - camera.x + this.width, this.y);
      context.scale(-1, 1);
      context.drawImage(resource, 0, 0, this.width, this.height);
      context.restore();
    } else {
      context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/map/index.js












function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
class map_Map {
  constructor() {}
  serialization(scene, title) {
    const mapData = {
      title,
      data: []
    };
    scene.dynamicSprites.forEach(sprite => {
      mapData.data.push({
        type: toKebabCase(sprite.constructor.name),
        x: sprite.x,
        y: sprite.y
      });
    });
    scene.staticSprites.forEach(sprite => {
      mapData.data.push({
        type: toKebabCase(sprite.constructor.name),
        x: sprite.x,
        y: sprite.y
      });
    });
    return mapData;
  }
  deserialization(mapData) {
    const {
      data
    } = mapData;

    // 静态精灵
    const statics = [];

    // 动态精灵
    const dynamics = [];
    data.forEach(v => {
      switch (v.type) {
        case "sprite-land":
          statics.push(new SpriteLand({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-ask":
          statics.push(new SpriteAsk({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-stone":
          statics.push(new SpriteStone({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-rock":
          statics.push(new SpriteRock({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-win":
          statics.push(new SpriteWin({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-gold":
          statics.push(new SpriteGold({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-flower":
          dynamics.push(new SpriteFlower({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-grow-mushroom":
          dynamics.push(new SpriteGrowMushroom({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-bad-mushroom":
          dynamics.push(new SpriteBadMushroom({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-horror":
          dynamics.push(new SpriteHorror({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-turtle":
          dynamics.push(new SpriteTurtle({
            x: v.x,
            y: v.y
          }));
          break;
        case "sprite-shell":
          dynamics.push(new SpriteShell({
            x: v.x,
            y: v.y
          }));
          break;
      }
    });
    return {
      statics,
      dynamics
    };
  }
  import() {}
  export() {}
}
;// CONCATENATED MODULE: ./src/super-mario/background/index.js


class Background {
  constructor(options) {
    const {
      camera
    } = options;
    const {
      width: imageWidth,
      height: imageHeight,
      src: imageUrl
    } = backgroundResources[0];
    this._camera = camera;
    this.init({
      sceneWidth: camera.width,
      sceneHeight: camera.height,
      imageWidth,
      imageHeight,
      imageUrl
    });
  }
  init(options) {
    const {
      sceneWidth,
      sceneHeight,
      imageWidth,
      imageHeight,
      imageUrl
    } = options;
    const imageAr = imageWidth / imageHeight;
    this._core = new Leafer();
    const group = new Group({
      x: 0,
      y: 0,
      width: sceneWidth,
      height: sceneHeight
    });
    const bgWidth = imageAr * sceneHeight;
    // 第一张背景图
    group.add(new Rect({
      x: 0,
      y: 0,
      width: bgWidth,
      height: sceneHeight,
      fill: {
        type: "image",
        url: imageUrl,
        mode: "fit"
      }
    }));

    // 第二张背景图
    this.breakPoint = bgWidth - 1;
    group.add(new Rect({
      x: this.breakPoint,
      y: 0,
      width: bgWidth,
      height: sceneHeight,
      fill: {
        type: "image",
        url: imageUrl,
        mode: "fit"
      }
    }));
    this._core.add(group);
  }
  getCore() {
    return this._core;
  }
  run() {
    const group = this.getCore().children[0];
    // 到达断点，背景图位置重置
    group.set({
      x: this._camera.x <= this.breakPoint ? -this._camera.x : this.breakPoint - this._camera.x
    });
  }
}
;// CONCATENATED MODULE: ./src/super-mario/score/index.js








class Score {
  constructor(options) {
    _defineProperty(this, "children", []);
    _defineProperty(this, "totalScore", 0);
    const {
      camera
    } = options;
    this._core = new Leafer();
    const group = new Group({
      x: 0,
      y: 0,
      width: camera.width,
      height: camera.height
    });
    this.totalScoreText = new draw_esm_Text({
      x: 0,
      y: 0,
      width: camera.width - 20,
      text: "分数：0",
      fill: "rgb(255,255,255)",
      fontSize: 20,
      fontWeight: "black",
      textAlign: "right",
      fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    });
    group.add(this.totalScoreText);
    this._core.add(group);
    this._group = group;
    this._camera = camera;
  }
  add(x, y, sprite) {
    let score;
    if (sprite instanceof SpriteGold) {
      score = 500;
    } else if (sprite instanceof SpriteBadMushroom) {
      score = 400;
    } else if (sprite instanceof SpriteGrowMushroom || sprite instanceof SpriteFlower) {
      score = 2000;
    } else {
      score = 200;
    }
    const text = new draw_esm_Text({
      _x: x,
      _y: y,
      x,
      y,
      text: score,
      fill: "rgb(255,255,255)",
      fontWeight: "black",
      fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    });
    this._group.add(text);
    this.children.push(text);
    this.totalScore += score;
    this.totalScoreText.text = "分数：" + this.totalScore;
  }
  getCore() {
    return this._core;
  }
  run() {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.set({
        x: child._x - this._camera.x,
        y: child.y - 1
      });
      if (child._y - child.y > 20) {
        this.children.splice(i, 1);
        this._group.remove(child);
        i--;
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/mario/base.js


class BaseMario {
  constructor() {
    _defineProperty(this, "frame", 0);
    _defineProperty(this, "actionType", "static");
    this.resources = {
      static: [baseMarioResources[0]],
      jumpLeft: [baseMarioResources[1]],
      jumpRight: [baseMarioResources[2]],
      left: [baseMarioResources[3], baseMarioResources[4], baseMarioResources[5]],
      right: [baseMarioResources[6], baseMarioResources[7], baseMarioResources[8]],
      die: [baseMarioResources[9]]
    };
  }
  getInfo(options) {
    const {
      actionType
    } = options;
    if (actionType !== this.actionType) {
      this.frame = 0;
    }
    this.actionType = actionType;
    const resource = this.resources[actionType][~~this.frame];
    this.frame = this.frame >= this.resources[actionType].length - 1 ? 0 : this.frame + 0.1;
    return {
      resource
    };
  }
}
;// CONCATENATED MODULE: ./src/super-mario/mario/big.js


class BigMario {
  constructor() {
    _defineProperty(this, "frame", 0);
    _defineProperty(this, "actionType", "static");
    this.resources = {
      static: [bigMarioResources[0]],
      jumpLeft: [bigMarioResources[1]],
      jumpRight: [bigMarioResources[2]],
      left: [bigMarioResources[3], bigMarioResources[4], bigMarioResources[5]],
      right: [bigMarioResources[6], bigMarioResources[7], bigMarioResources[8]]
    };
  }
  getInfo(options) {
    const {
      actionType
    } = options;
    if (actionType !== this.actionType) {
      this.frame = 0;
    }
    this.actionType = actionType;
    const resource = this.resources[actionType][~~this.frame];
    this.frame = this.frame >= this.resources[actionType].length - 1 ? 0 : this.frame + 0.1;
    return {
      resource
    };
  }
}
;// CONCATENATED MODULE: ./src/super-mario/mario/bullet.js


class BulletMario {
  constructor() {
    _defineProperty(this, "frame", 0);
    _defineProperty(this, "actionType", "static");
    this.resources = {
      static: [bulletMarioResources[0]],
      jumpLeft: [bulletMarioResources[1]],
      jumpRight: [bulletMarioResources[2]],
      left: [bulletMarioResources[3], bulletMarioResources[4], bulletMarioResources[5]],
      right: [bulletMarioResources[6], bulletMarioResources[7], bulletMarioResources[8]],
      attackLeft: [bulletMarioResources[9]],
      attackRight: [bulletMarioResources[10]]
    };
  }
  getInfo(options) {
    const {
      actionType
    } = options;
    if (actionType !== this.actionType) {
      this.frame = 0;
    }
    this.actionType = actionType;
    const resource = this.resources[actionType][~~this.frame];
    this.frame = this.frame >= this.resources[actionType].length - 1 ? 0 : this.frame + 0.1;
    return {
      resource
    };
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-bullet.js



class SpriteBullet extends DynamicSprite {
  constructor(options) {
    const {
      x,
      y,
      vx = 4,
      vy = 4
    } = options;
    super({
      x,
      y,
      width: SIZE / 2,
      height: SIZE / 2,
      vx,
      vy
    });
    this.frame = 0;
    this.resources = [spriteBulletResources[0], spriteBulletResources[1], spriteBulletResources[2], spriteBulletResources[3]];
    this.active();
    this.step = 0;
  }
  draw(context, camera) {
    const resource = this.resources[~~this.frame];
    this.frame = this.frame >= this.resources.length - 1 ? 0 : this.frame + 0.1;
    this.x += this.vx;
    this.y += this.vy;
    this.step += 1;
    if (this.step >= 60) {
      this.destroy();
    }
    context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/mario/index.js






function getActionTypeBySpeed(vx, vy, isAttack, isDie) {
  if (isDie) {
    return "die";
  }
  if (isAttack) {
    if (vx < 0) {
      return "attackLeft";
    }
    return "attackRight";
  }
  if (vx === 0 && vy === 0) {
    if (isAttack) {
      return "attackRight";
    }
    return "static";
  }
  // 往右边跳

  if (vy !== 0 && vx >= 0) {
    return "jumpRight";
  }
  // 往左边跳

  if (vy !== 0 && vx < 0) {
    return "jumpLeft";
  }

  // 往左边走
  if (vy === 0 && vx < 0) {
    return "left";
  }

  // 往右边走
  return "right";
}
class Mario extends DynamicSprite {
  constructor({
    x,
    y
  }) {
    super({
      x,
      y,
      width: SIZE - 4,
      height: SIZE
    });
    this.isAttack = false;
    this.isInvincibility = false;
    this.invincibilityNum = 0;
    this.isDie = false;
    this.isWin = false;
    this.growType = "base";
    this.mario = new BaseMario();
    this.active();
  }
  grow() {
    if (this.growType === "base") {
      this.growType = "big";
      this.y -= SIZE;
      this.height = 2 * SIZE;
      this.mario = new BigMario();
    }
  }
  bullet() {
    if (this.growType === "base") {
      this.y -= SIZE;
      this.height = 2 * SIZE;
    }
    this.growType = "bullet";
    this.mario = new BulletMario();
  }
  attack() {
    if (this.growType !== "bullet") {
      return;
    }
    this.isAttack = true;
    // 添加子弹
    return new SpriteBullet({
      x: this.vx >= 0 ? this.x + this.width : this.x,
      y: this.y,
      vx: this.vx >= 0 ? 8 : -8
    });
  }
  die() {
    if (this.isInvincibility) return;
    if (this.growType !== "base") {
      this.growType = "base";
      this.mario = new BaseMario();
      this.height = SIZE;
      this.y += SIZE;
      this.isInvincibility = true;

      // 无敌两秒
      setTimeout(() => {
        this.isInvincibility = false;
      }, 2000);
    } else {
      this.died();
    }
  }
  died() {
    if (this.growType !== "base") {
      this.growType = "base";
      this.mario = new BaseMario();
      this.height = SIZE;
      this.y += SIZE;
    }
    this.isDie = true;
    this.unActive();
    this.vy = -1;
    this.vx = 0;
  }
  win() {
    this.isWin = true;
  }
  unAttack() {
    this.isAttack = false;
  }
  draw(context, camera) {
    const {
      vx,
      vy
    } = this;
    const actionType = getActionTypeBySpeed(vx, vy, this.isAttack, this.isDie);
    const {
      resource
    } = this.mario.getInfo({
      actionType
    });
    this.x += vx;
    this.y += vy;

    // 无敌状态
    if (this.isInvincibility) {
      if (Math.sin(this.invincibilityNum) >= 1) {
        this.invincibilityNum -= 0.8;
      } else if (Math.sin(this.invincibilityNum) <= -1) {
        this.invincibilityNum += 0.8;
      } else {
        this.invincibilityNum += 0.8;
      }
      if (Math.sin(this.invincibilityNum) >= 0) {
        return;
      }
    }
    context.drawImage(resource, this.x - camera.x, this.y, this.width, this.height);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/physics-engine/keyboard.js

class keyboard_Keyboard {
  constructor() {
    _defineProperty(this, "xDirection", void 0);
    _defineProperty(this, "yDirection", void 0);
    _defineProperty(this, "pressBlank", false);
    _defineProperty(this, "handleKeydown", e => {
      switch (e.keyCode) {
        case 38:
          this.yDirection = "top";
          break;
        case 37:
          this.xDirection = "left";
          break;
        case 39:
          this.xDirection = "right";
          break;
        case 32:
          this.pressBlank = true;
          break;
      }
    });
    _defineProperty(this, "handleKeyup", e => {
      switch (e.keyCode) {
        case 38:
          this.yDirection = undefined;
          break;
        case 37:
        case 39:
          this.xDirection = undefined;
          break;
        case 32:
          this.pressBlank = false;
          break;
      }
    });
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
  }
}
;// CONCATENATED MODULE: ./src/super-mario/physics-engine/collect.js
const isCollectBTop = (a, b) => {
  return a.vy > 0 && a.y + a.height <= b.y && a.x + a.width !== b.x && a.x !== b.x + b.width;
};
const isCollectBBottom = (a, b) => {
  return a.vy < 0 && a.y >= b.y + b.height && a.x + a.width !== b.x && a.x !== b.x + b.width;
};
const isCollectBLeft = (a, b) => {
  return a.vx > 0 && a.x + a.width <= b.x && a.y + a.height !== b.y && a.y !== b.y + b.height;
};
const isCollectBRight = (a, b) => {
  return a.vx < 0 && a.x >= b.x + b.width && a.y + a.height !== b.y && a.y !== b.y + b.height;
};
function isCollect(rectA, rectB) {
  const x1 = rectA.x + rectA.vx;
  const y1 = rectA.y + rectA.vy;
  const w1 = rectA.width;
  const h1 = rectA.height;
  const x2 = rectB.x + (rectB.vx || 0);
  const y2 = rectB.y + (rectB.vy || 0);
  const w2 = rectB.width;
  const h2 = rectB.height;

  // 判断两个矩形是否碰撞
  const isCollide = x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
  return isCollide;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ var lodash_es_isObject = (isObject);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ var _freeGlobal = (freeGlobal);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();
/* harmony default export */ var _root = (root);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return _root.Date.now();
};
/* harmony default export */ var lodash_es_now = (now);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ var _trimmedEndIndex = (trimmedEndIndex);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ var _baseTrim = (baseTrim);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;
/* harmony default export */ var _Symbol = (_Symbol_Symbol);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ var _getRawTag = (getRawTag);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}
/* harmony default export */ var _objectToString = (objectToString);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}
/* harmony default export */ var _baseGetTag = (baseGetTag);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag;
}
/* harmony default export */ var lodash_es_isSymbol = (isSymbol);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ var lodash_es_toNumber = (toNumber);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if (lodash_es_isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }
  function debounced() {
    var time = lodash_es_now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/* harmony default export */ var lodash_es_debounce = (debounce);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js



/** Error message constants. */
var throttle_FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(throttle_FUNC_ERROR_TEXT);
  }
  if (lodash_es_isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return lodash_es_debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
/* harmony default export */ var lodash_es_throttle = (throttle);
;// CONCATENATED MODULE: ./src/super-mario/physics-engine/jumping.js

class Jumping {
  constructor({
    G
  }) {
    _defineProperty(this, "jumping", []);
    this.G = G;
  }
  getJumpSprite(sprite) {
    return this.jumping.find(v => v.sprite === sprite);
  }
  add(sprite, v0 = 9) {
    const jumpSprite = this.getJumpSprite(sprite);
    if (jumpSprite) {
      // 按得越久，受力越小，跳的越高
      if (jumpSprite.a > 0.5 * this.G) {
        jumpSprite.a -= 0.015;
      }
      return;
    }
    sprite.vy = 0;
    const item = {
      // 初速度
      v0,
      // 加速度
      a: this.G,
      jumping: true,
      sprite
    };
    this.jumping.push(item);
  }
  remove(sprite) {
    for (let i = 0; i < this.jumping.length; i++) {
      if (this.jumping[i].sprite === sprite) {
        this.jumping.splice(i, 1);
        break;
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/sprite/sprite-stone-born.js



class SpriteStoneBorn extends StaticSprite {
  constructor(options) {
    const width = SIZE / 2;
    const height = SIZE / 2;
    let x, y;
    if (options.index === 0) {
      x = options.x;
      y = options.y;
    } else if (options.index === 1) {
      x = options.x + width;
      y = options.y;
    } else if (options.index === 2) {
      x = options.x;
      y = options.y + height;
    } else {
      x = options.x + width;
      y = options.y + height;
    }
    super({
      x,
      y,
      width,
      height
    });
    // 碎块位置
    this.index = options.index;
    this.animatedX = 0;
    this.animatedY = 0;
    this.beginX = x;
    this.beginY = y;
  }

  // 根据碎块位置做抛物线运动
  draw(context, camera) {
    if (this.index === 0 || this.index === 2) {
      const b = this.index === 0 ? 5 : 3;
      this.animatedX += 2;
      this.animatedY = 0.1 * this.animatedX * this.animatedX - b * this.animatedX;
      context.drawImage(spriteStoneBornResources[0], this.beginX - this.animatedX - camera.x, this.beginY + this.animatedY, this.width, this.height);
    }
    if (this.index === 1 || this.index === 3) {
      const b = this.index === 1 ? 5 : 3;
      this.animatedX += 2;
      this.animatedY = 0.1 * this.animatedX * this.animatedX - b * this.animatedX;
      context.drawImage(spriteStoneBornResources[0], this.beginX + this.animatedX - camera.x, this.beginY + this.animatedY, this.width, this.height);
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/physics-engine/index.js


















const handleMarioAttack = lodash_es_throttle((scene, mario) => {
  const bullet = mario.attack();
  if (bullet) {
    // 添加子弹
    scene.addDynamicSprites(bullet);
  }
}, 200);
class PhysicsEngine {
  constructor() {
    this.keyboard = new keyboard_Keyboard();
    this.jumping = new Jumping({
      G: constants_G
    });
  }
  run(options) {
    const {
      scene,
      camera,
      onScore
    } = options;
    this.onScore = onScore;
    const {
      staticSpriteMaps,
      dynamicSprites
    } = scene;
    for (let i = 0; i < dynamicSprites.length; i++) {
      const dynamicSprite = dynamicSprites[i];

      // 没在相机内，不需要物理检测
      if (!camera.isInView({
        x: dynamicSprite.x,
        y: dynamicSprite.y,
        width: dynamicSprite.width,
        height: dynamicSprite.height
      })) {
        if (dynamicSprite instanceof SpriteBullet) {
          dynamicSprite.destroy();
        }
        continue;
      }
      if (!dynamicSprite.isActive || dynamicSprite.isDestroy) {
        continue;
      }

      // 键盘操作人物
      if (dynamicSprite instanceof Mario) {
        this.handleKeyBoardControlMario(dynamicSprite, scene);
        if (dynamicSprite.y + dynamicSprite.height >= camera.y + camera.height) {
          dynamicSprite.died();
        }
      }

      // 上抛运动
      const jumpSprite = this.jumping.getJumpSprite(dynamicSprite);
      if (jumpSprite && !jumpSprite.jumping && jumpSprite.sprite.vy === 0) {
        this.jumping.remove(dynamicSprite);
      } else if (jumpSprite && jumpSprite.jumping) {
        jumpSprite.v0 -= jumpSprite.a;
        jumpSprite.sprite.vy = Math.min(1, -jumpSprite.v0);
        if (jumpSprite.sprite.vy === 1) {
          jumpSprite.jumping = false;
        }
      }

      // 自由落体
      else if (!(dynamicSprite instanceof SpriteBullet)) {
        // 最大速度不超过10
        dynamicSprite.vy = Math.min(10, dynamicSprite.vy + constants_G);
      }

      // 和其他动态精灵做检测
      for (let j = 0; j < dynamicSprites.length; j++) {
        const otherDynamicSprite = dynamicSprites[j];
        // 没在相机内，不需要检测
        if (!camera.isInView({
          x: otherDynamicSprite.x,
          y: otherDynamicSprite.y,
          width: otherDynamicSprite.width,
          height: otherDynamicSprite.height
        }) || otherDynamicSprite === dynamicSprite || otherDynamicSprite.isDestroy) {
          continue;
        }
        if (isCollect(dynamicSprite, otherDynamicSprite)) {
          this.handleDySpriteCollectDySprite(dynamicSprite, otherDynamicSprite);
        }
      }

      // 使用包围盒做碰撞检测，提升性能
      const boxX = (~~(dynamicSprite.x / SIZE) - 1) * SIZE;
      const boxY = 0;
      const boxWidth = (Math.ceil(dynamicSprite.width / SIZE) + 2) * SIZE;
      const boxHeight = camera.height;
      const collectBottoms = [];
      const collectTops = [];
      const collectLefts = [];
      const collectRights = [];
      for (let i = 0; i < boxWidth + 1; i += SIZE) {
        for (let j = 0; j < boxHeight + 1; j += SIZE) {
          const staticSprite = staticSpriteMaps[`${boxX + i}-${boxY + j}`];

          // 检测到静态精灵进入动态精灵的检测范围内，才开始做碰撞检测
          if (staticSprite && !staticSprite.isDestroy && isCollect(dynamicSprite, staticSprite)) {
            // 胜利
            if (dynamicSprite instanceof Mario) {
              if (staticSprite instanceof SpriteWin) {
                dynamicSprite.win();
                return;
              }
            }

            // 金币
            if (staticSprite instanceof SpriteGold) {
              if (dynamicSprite instanceof Mario) {
                staticSprite.destroy();
                this.onScore(staticSprite.x, staticSprite.y, staticSprite);
              }
              continue;
            }
            if (isCollectBBottom(dynamicSprite, staticSprite)) {
              collectBottoms.push(staticSprite);

              // 头顶碎石砖
              if (staticSprite instanceof SpriteStone && dynamicSprite instanceof Mario && dynamicSprite.growType !== "base") {
                staticSprite.destroy();
                this.onScore(staticSprite.x, staticSprite.y, staticSprite);
                for (let i = 0; i < 4; i++) {
                  scene.addDynamicSprites(new SpriteStoneBorn({
                    x: staticSprite.x,
                    y: staticSprite.y,
                    index: i
                  }));
                }
              } else if (dynamicSprite instanceof Mario && (staticSprite instanceof SpriteAsk || staticSprite instanceof SpriteStone)) {
                staticSprite.hit();
              }
            }
            if (isCollectBTop(dynamicSprite, staticSprite)) {
              collectTops.push(staticSprite);
            }
            if (isCollectBRight(dynamicSprite, staticSprite)) {
              collectRights.push(staticSprite);
            }
            if (isCollectBLeft(dynamicSprite, staticSprite)) {
              collectLefts.push(staticSprite);
            }
          }
        }
      }
      if (collectBottoms.length) {
        this.handleDySpriteCollectStSpriteBottom(dynamicSprite, collectBottoms[0], jumpSprite);
      }
      if (collectTops.length) {
        this.handleDySpriteCollectStSpriteTop(dynamicSprite, collectTops[0]);
      }
      if (collectRights.length) {
        this.handleDySpriteCollectStSpriteRight(dynamicSprite, collectRights[0]);
      }
      if (collectLefts.length) {
        this.handleDySpriteCollectStSpriteLeft(dynamicSprite, collectLefts[0]);
      }
    }
  }

  // 动态精灵之间的碰撞
  handleDySpriteCollectDySprite(dynamicSprite, otherDynamicSprite) {
    if (dynamicSprite instanceof Mario) {
      // 成长花、成长蘑菇
      if (otherDynamicSprite instanceof SpriteFlower || otherDynamicSprite instanceof SpriteGrowMushroom) {
        this.handleGetProps(dynamicSprite, otherDynamicSprite);
      }
      // 敌人蘑菇
      else if (otherDynamicSprite instanceof SpriteBadMushroom && otherDynamicSprite.isActive) {
        if (isCollectBTop(dynamicSprite, otherDynamicSprite)) {
          this.jumping.remove(dynamicSprite);
          this.jumping.add(dynamicSprite, 4);
          otherDynamicSprite.dieByTrample();
          this.onScore(otherDynamicSprite.x, otherDynamicSprite.y, otherDynamicSprite);
        } else {
          dynamicSprite.die();
        }
      }
      // 敌人乌龟
      else if ((otherDynamicSprite instanceof SpriteShell || otherDynamicSprite instanceof SpriteTurtle) && otherDynamicSprite.isActive) {
        if (isCollectBTop(dynamicSprite, otherDynamicSprite)) {
          this.jumping.remove(dynamicSprite);
          this.jumping.add(dynamicSprite, 4);
          if (dynamicSprite.x <= otherDynamicSprite.x + otherDynamicSprite.width / 2) {
            otherDynamicSprite.trampleLeft();
          } else {
            otherDynamicSprite.trampleRight();
          }
          this.onScore(otherDynamicSprite.x, otherDynamicSprite.y, otherDynamicSprite);
        } else if (!isCollectBTop(dynamicSprite, otherDynamicSprite) && otherDynamicSprite.isHiding()) {
          if (dynamicSprite.x <= otherDynamicSprite.x - dynamicSprite.width) {
            otherDynamicSprite.trampleLeft();
          } else {
            otherDynamicSprite.trampleRight();
          }
          this.onScore(otherDynamicSprite.x, otherDynamicSprite.y, otherDynamicSprite);
        } else {
          dynamicSprite.die();
        }
      } else if (otherDynamicSprite instanceof SpriteHorror && otherDynamicSprite.isActive) {
        dynamicSprite.die();
      }
    }

    // 子弹击中敌人
    else if (dynamicSprite instanceof SpriteBullet && (otherDynamicSprite instanceof SpriteBadMushroom || otherDynamicSprite instanceof SpriteHorror || otherDynamicSprite instanceof SpriteTurtle || otherDynamicSprite instanceof SpriteShell) && otherDynamicSprite.isActive) {
      dynamicSprite.destroy();
      if (otherDynamicSprite instanceof SpriteBadMushroom || otherDynamicSprite instanceof SpriteTurtle) {
        otherDynamicSprite.dieByBullet();
        this.onScore(otherDynamicSprite.x, otherDynamicSprite.y, otherDynamicSprite);
      }
    }

    // 龟壳击中敌人
    else if ((dynamicSprite instanceof SpriteShell || dynamicSprite instanceof SpriteTurtle) && dynamicSprite.isAttacking() && (otherDynamicSprite instanceof SpriteHorror || otherDynamicSprite instanceof SpriteBadMushroom || otherDynamicSprite instanceof SpriteTurtle || otherDynamicSprite instanceof SpriteShell) && otherDynamicSprite.isActive) {
      otherDynamicSprite.dieByBullet();
      this.onScore(otherDynamicSprite.x, otherDynamicSprite.y, otherDynamicSprite);
    }
  }
  handleGetProps(dynamicSprite, otherDynamicSprite) {
    // 已经激活，销毁
    if (otherDynamicSprite.isActive) {
      otherDynamicSprite.destroy();
      this.onScore(otherDynamicSprite.x, otherDynamicSprite.y, otherDynamicSprite);
      if (otherDynamicSprite instanceof SpriteGrowMushroom) {
        dynamicSprite.grow();
      } else if (otherDynamicSprite instanceof SpriteFlower) {
        dynamicSprite.bullet();
      }
    }
    // 头顶未激活，出现
    else if (!otherDynamicSprite.isActive && isCollectBBottom(dynamicSprite, otherDynamicSprite)) {
      otherDynamicSprite.appear();
    }
  }

  // 动态精灵碰撞到静态精灵下面
  handleDySpriteCollectStSpriteBottom(dynamicSprite, staticSprite, jumpSprite) {
    dynamicSprite.y = staticSprite.y + staticSprite.height;

    // 子弹反弹
    if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vy = -dynamicSprite.vy;
    } // 击落跳跃中的精灵
    else if (jumpSprite && jumpSprite.jumping) {
      jumpSprite.jumping = false;
      requestAnimationFrame(() => {
        dynamicSprite.vy = 1;
      });
    }
  }

  // 动态精灵碰撞到静态精灵上面
  handleDySpriteCollectStSpriteTop(dynamicSprite, staticSprite) {
    dynamicSprite.y = staticSprite.y - dynamicSprite.height;

    // 子弹反弹
    if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vy = -dynamicSprite.vy;
    } else {
      dynamicSprite.vy = 0;
    }
  }

  // 动态精灵碰撞到静态精灵左边
  handleDySpriteCollectStSpriteLeft(dynamicSprite, staticSprite) {
    dynamicSprite.x = staticSprite.x - dynamicSprite.width;

    // 蘑菇碰撞后，朝相反方向行动
    if (dynamicSprite instanceof SpriteGrowMushroom || dynamicSprite instanceof SpriteBadMushroom || dynamicSprite instanceof SpriteHorror || dynamicSprite instanceof SpriteTurtle || dynamicSprite instanceof SpriteShell) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else {
      dynamicSprite.vx = 0;
    }
  }

  // 动态精灵碰撞到静态精灵右边
  handleDySpriteCollectStSpriteRight(dynamicSprite, staticSprite) {
    dynamicSprite.x = staticSprite.x + staticSprite.width;

    // 蘑菇碰撞后，朝相反方向行动
    if (dynamicSprite instanceof SpriteGrowMushroom || dynamicSprite instanceof SpriteBadMushroom || dynamicSprite instanceof SpriteHorror || dynamicSprite instanceof SpriteTurtle || dynamicSprite instanceof SpriteShell) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else if (dynamicSprite instanceof SpriteBullet) {
      dynamicSprite.vx = -dynamicSprite.vx;
    } else {
      dynamicSprite.vx = 0;
    }
  }

  // 键盘操作
  handleKeyBoardControlMario(mario, scene) {
    if (this.keyboard.xDirection === "left") {
      mario.vx = Math.max(-4, mario.vx - 0.15);
      if (mario.vx + mario.x < 0) {
        mario.x = 0;
      }
    } else if (this.keyboard.xDirection === "right") {
      mario.vx = Math.min(4, mario.vx + 0.15);
    } else {
      mario.vx = 0;
    }

    // 跳跃
    if (this.keyboard.yDirection === "top") {
      this.jumping.add(mario);
    }
    if (this.keyboard.pressBlank) {
      handleMarioAttack(scene, mario);
    } else {
      mario.unAttack();
    }
  }
}
;// CONCATENATED MODULE: ./src/super-mario/renderer/index.js










class renderer_Renderer {
  constructor(options) {
    const {
      view,
      mapData,
      readonly
    } = options;
    Platform.image.crossOrigin = null;
    const app = new App({
      view
    });
    const camera = new Camera({
      x: 0,
      y: 0,
      width: view.offsetWidth,
      height: view.offsetHeight
    });
    const background = new Background({
      camera
    });
    const score = new Score({
      camera
    });
    const scene = new Scene({
      camera
    });
    const mario = new Mario({
      x: 0,
      y: 0
    });
    app.add(background.getCore());

    // 导入地图
    const map = new map_Map();
    if (mapData) {
      const sprites = map.deserialization(mapData);
      sprites.dynamics.forEach(sprite => {
        if (readonly) {
          sprite.vx = 0;
          sprite.vy = 0;
        }
        scene.addDynamicSprites(sprite);
      });
      sprites.statics.forEach(sprite => {
        scene.addStaticSprites(sprite);
      });
    }
    !readonly && scene.addDynamicSprites(mario);
    app.add(scene.getCore());
    !readonly && app.add(score.getCore());
    this._app = app;
    this.scene = scene;
    this._background = background;
    this._score = score;
    this.camera = camera;
    this._mario = mario;
    this.readonly = readonly;
    this._physicsEngine = new PhysicsEngine();
  }
  run(onEnd, onWin) {
    if (this.isDestroy) {
      return;
    }
    if (!this.readonly && this._mario.isDie) {
      onEnd(this._score.totalScore);
      return false;
    }
    if (!this.readonly && this._mario.isWin) {
      onWin(this._score.totalScore);
      return false;
    }

    // 运行物理引擎
    !this.readonly && this._physicsEngine.run({
      camera: this.camera,
      scene: this.scene,
      onScore: (...v) => {
        this._score.add(...v);
      }
    });

    // 运行场景中的精灵
    this.scene.run();

    // 运行背景
    this._background.run();
    !this.readonly && this._score.run();

    // 相机跟随玛丽
    if (!this.readonly) {
      this.camera.x = this._mario.x < MARIO_VIEW_OFFSET ? 0 : this._mario.x - MARIO_VIEW_OFFSET;
    }
    requestAnimationFrame(this.run.bind(this, onEnd, onWin));
  }
  destroy() {
    this.isDestroy = true;
    this._app.destroy();
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  return extends_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, extends_extends.apply(null, arguments);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/config-provider/context.js


const defaultIconPrefixCls = 'anticon';
const GlobalFormContextKey = Symbol('GlobalFormContextKey');
const useProvideGlobalForm = state => {
  provide(GlobalFormContextKey, state);
};
const useInjectGlobalForm = () => {
  return inject(GlobalFormContextKey, {
    validateMessages: computed(() => undefined)
  });
};
const GlobalConfigContextKey = Symbol('GlobalConfigContextKey');
const configProviderProps = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: objectType(),
  input: objectType(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: undefined
  },
  locale: objectType(),
  pageHeader: objectType(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: undefined
  },
  direction: {
    type: String,
    default: 'ltr'
  },
  space: objectType(),
  virtual: {
    type: Boolean,
    default: undefined
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: true
  },
  form: objectType(),
  pagination: objectType(),
  theme: objectType(),
  select: objectType(),
  wave: objectType()
});
const configProviderKey = Symbol('configProvider');
const defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : 'ant';
  },
  iconPrefixCls: (0,reactivity_esm_bundler/* computed */.EW)(() => defaultIconPrefixCls),
  getPopupContainer: (0,reactivity_esm_bundler/* computed */.EW)(() => () => document.body),
  direction: (0,reactivity_esm_bundler/* computed */.EW)(() => 'ltr')
};
const useConfigContextInject = () => {
  return (0,runtime_core_esm_bundler/* inject */.WQ)(configProviderKey, defaultConfigProvider);
};
const useConfigContextProvider = props => {
  return provide(configProviderKey, props);
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/config-provider/DisabledContext.js

const DisabledContextKey = Symbol('DisabledContextKey');
const useInjectDisabled = () => {
  return (0,runtime_core_esm_bundler/* inject */.WQ)(DisabledContextKey, (0,reactivity_esm_bundler/* ref */.KR)(undefined));
};
const useProviderDisabled = disabled => {
  const parentDisabled = useInjectDisabled();
  provide(DisabledContextKey, computed(() => {
    var _a;
    return (_a = disabled.value) !== null && _a !== void 0 ? _a : parentDisabled.value;
  }));
  return disabled;
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/util.js
const isFunction = val => typeof val === 'function';
const controlDefaultValue = Symbol('controlDefaultValue');
const isArray = Array.isArray;
const isString = val => typeof val === 'string';
const util_isSymbol = val => typeof val === 'symbol';
const util_isObject = val => val !== null && typeof val === 'object';
const onRE = /^on[^a-z]/;
const util_isOn = key => onRE.test(key);
const cacheStringFunction = fn => {
  const cache = Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const util_camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});
const hyphenateRE = /\B([A-Z])/g;
const util_hyphenate = cacheStringFunction(str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
const capitalize = cacheStringFunction(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const util_hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => util_hasOwnProperty.call(val, key);
// change from vue sourcecode
function util_resolvePropValue(options, props, key, value) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, 'default');
    // default values
    if (hasDefault && value === undefined) {
      const defaultValue = opt.default;
      value = opt.type !== Function && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    // boolean casting
    if (opt.type === Boolean) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (value === '') {
        value = true;
      }
    }
  }
  return value;
}
function getDataAndAriaProps(props) {
  return Object.keys(props).reduce((memo, key) => {
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      memo[key] = props[key];
    }
    return memo;
  }, {});
}
function toPx(val) {
  if (typeof val === 'number') return `${val}px`;
  return val;
}
function renderHelper(v) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let defaultV = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof v === 'function') {
    return v(props);
  }
  return v !== null && v !== void 0 ? v : defaultV;
}
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/classNames.js

function classNames_classNames() {
  const classes = [];
  for (let i = 0; i < arguments.length; i++) {
    const value = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!value) continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const inner = classNames_classNames(value[i]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (util_isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(' ');
}
/* harmony default export */ var _util_classNames = (classNames_classNames);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-pagination/locale/en_US.js
/* harmony default export */ var en_US = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-picker/locale/en_US.js
const locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ var locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/time-picker/locale/en_US.js
const en_US_locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ var time_picker_locale_en_US = (en_US_locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/date-picker/locale/en_US.js



// Merge into a locale object
const locale_en_US_locale = {
  lang: extends_extends({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US),
  timePickerLocale: extends_extends({}, time_picker_locale_en_US)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ var date_picker_locale_en_US = (locale_en_US_locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/calendar/locale/en_US.js

/* harmony default export */ var calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/locale/en_US.js
/* eslint-disable no-template-curly-in-string */




const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh',
    scanned: 'Scanned'
  }
};
/* harmony default export */ var es_locale_en_US = (localeValues);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/locale/LocaleReceiver.js



/* harmony default export */ var LocaleReceiver = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  name: 'LocaleReceiver',
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = (0,runtime_core_esm_bundler/* inject */.WQ)('localeData', {});
    const locale = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const {
        componentName = 'global',
        defaultLocale
      } = props;
      const locale = defaultLocale || es_locale_en_US[componentName || 'global'];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return extends_extends(extends_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    });
    const localeCode = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const {
        antLocale
      } = localeData;
      const localeCode = antLocale && antLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return es_locale_en_US.locale;
      }
      return localeCode;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale.value, localeCode.value, antLocale);
    };
  }
}));
function useLocaleReceiver(componentName, defaultLocale, propsLocale) {
  const localeData = inject('localeData', {});
  const componentLocale = computed(() => {
    const {
      antLocale
    } = localeData;
    const locale = unref(defaultLocale) || defaultLocaleData[componentName || 'global'];
    const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/locale-provider/LocaleReceiver.js


/* harmony default export */ var locale_provider_LocaleReceiver = (LocaleReceiver);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/theme/ThemeCache.js
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  constructor() {
    this.cache = new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach(derivative => {
      var _a;
      if (!cache) {
        cache = undefined;
      } else {
        cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative);
      }
    });
    if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache === null || cache === void 0 ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    // New cache
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative, index) => {
      if (index === derivativeOption.length - 1) {
        cache.set(derivative, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative);
        if (!cacheValue) {
          cache.set(derivative, {
            map: new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = new Map();
        }
        cache = cache.get(derivative).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    // If cache exists
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter(item => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return undefined;
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/warning.js


function noop() {}
// eslint-disable-next-line import/no-mutable-exports
let warning = noop;
if (false) {}
/* harmony default export */ var _util_warning = (warning);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/theme/Theme.js

let uuid = 0;
/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use `createTheme` first which will help to manage the theme instance cache.
 */
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      _util_warning(derivatives.length > 0, '[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function.');
    }
    uuid += 1;
  }
  getDerivativeToken(token) {
    return this.derivatives.reduce((result, derivative) => derivative(token, result), undefined);
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/theme/createTheme.js


const cacheThemes = new ThemeCache();
/**
 * Same as new Theme, but will always return same one if `derivative` not changed.
 */
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  // Create new theme if not exist
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  // Get theme from cache and return
  return cacheThemes.get(derivativeArr);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/Cache.js
const SPLIT = '%';
class Entity {
  constructor(instanceId) {
    /** @private Internal cache map. Do not access this directly */
    this.cache = new Map();
    this.instanceId = instanceId;
  }
  get(keys) {
    return this.cache.get(Array.isArray(keys) ? keys.join(SPLIT) : keys) || null;
  }
  update(keys, valueFn) {
    const path = Array.isArray(keys) ? keys.join(SPLIT) : keys;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}
/* harmony default export */ var Cache = (Entity);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/type.js
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
const tuple = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
const tupleNum = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args;
};
const withInstall = comp => {
  const c = comp;
  c.install = function (app) {
    app.component(c.displayName || c.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function type_objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function functionType(defaultVal) {
  return {
    type: Function,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function vNodeType() {
  return {
    validator: () => true
  };
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/StyleContext.js




const StyleContext_ATTR_TOKEN = 'data-token-hash';
const StyleContext_ATTR_MARK = 'data-css-hash';
const ATTR_CACHE_PATH = 'data-cache-path';
// Mark css-in-js instance in style element
const CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  // Tricky SSR: Move all inline style to the head.
  // PS: We do not recommend tricky mode.
  if (typeof document !== 'undefined' && document.head && document.body) {
    const styles = document.body.querySelectorAll(`style[${StyleContext_ATTR_MARK}]`) || [];
    const {
      firstChild
    } = document.head;
    Array.from(styles).forEach(style => {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      // Not force move if no head
      // Not force move if no head
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });
    // Deduplicate of moved styles
    const styleHash = {};
    Array.from(document.querySelectorAll(`style[${StyleContext_ATTR_MARK}]`)).forEach(style => {
      var _a;
      const hash = style.getAttribute(StyleContext_ATTR_MARK);
      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Cache(cssinjsInstanceId);
}
const StyleContextKey = Symbol('StyleContextKey');
// fix: https://github.com/vueComponent/ant-design-vue/issues/7023
const getCache = () => {
  var _a, _b, _c;
  const instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
  let cache;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache = globalCache;
    } else {
      cache = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache;
      }
    }
  } else {
    cache = createCache();
  }
  return cache;
};
const defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: 'low'
};
// fix: https://github.com/vueComponent/ant-design-vue/issues/6912
const useStyleInject = () => {
  const cache = getCache();
  return (0,runtime_core_esm_bundler/* inject */.WQ)(StyleContextKey, (0,reactivity_esm_bundler/* shallowRef */.IJ)(extends_extends(extends_extends({}, defaultStyleContext), {
    cache
  })));
};
const useStyleProvider = props => {
  const parentContext = useStyleInject();
  const context = (0,reactivity_esm_bundler/* shallowRef */.IJ)(extends_extends(extends_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  (0,runtime_core_esm_bundler/* watch */.wB)([() => (0,reactivity_esm_bundler/* unref */.R1)(props), parentContext], () => {
    const mergedContext = extends_extends({}, parentContext.value);
    const propsValue = (0,reactivity_esm_bundler/* unref */.R1)(props);
    Object.keys(propsValue).forEach(key => {
      const value = propsValue[key];
      if (propsValue[key] !== undefined) {
        mergedContext[key] = value;
      }
    });
    const {
      cache
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  (0,runtime_core_esm_bundler/* provide */.Gt)(StyleContextKey, context);
  return context;
};
const styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: type_objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
const StyleProvider = withInstall((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'AStyleProvider',
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));
/* harmony default export */ var StyleContext = ({
  useStyleInject,
  useStyleProvider,
  StyleProvider
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useHMR.js
function useProdHMR() {
  return false;
}
let webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
/* harmony default export */ var useHMR = ( true ? useProdHMR : 0);
// Webpack `module.hot.accept` do not support any deps update trigger
// We have to hack handler to force mark as HRM
if (false) {}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useGlobalCache.js



function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = (0,reactivity_esm_bundler/* shallowRef */.IJ)('');
  const res = (0,reactivity_esm_bundler/* shallowRef */.IJ)();
  (0,runtime_core_esm_bundler/* watchEffect */.nT)(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join('%');
  });
  const HMRUpdate = useHMR();
  const clearCache = pathStr => {
    styleContext.value.cache.update(pathStr, prevCache => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
        return null;
      }
      return [times - 1, cache];
    });
  };
  (0,runtime_core_esm_bundler/* watch */.wB)(fullPathStr, (newStr, oldStr) => {
    if (oldStr) clearCache(oldStr);
    // Create cache
    styleContext.value.cache.update(newStr, prevCache => {
      const [times = 0, cache] = prevCache || [];
      // HMR should always ignore cache since developer may change it
      let tmpCache = cache;
      if (false) {}
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
    clearCache(fullPathStr.value);
  });
  return res;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/canUseDom.js
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
/* harmony default export */ var _util_canUseDom = (canUseDom);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-util/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }
  return false;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-util/Dom/dynamicCSS.js


const APPEND_ORDER = 'data-vc-order';
const MARK_KEY = `vc-util-key`;
const containerCache = new Map();
function getMark() {
  let {
    mark
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (mark) {
    return mark.startsWith('data-') ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}
/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(node => node.tagName === 'STYLE');
}
function injectCSS(css) {
  let option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!_util_canUseDom()) {
    return null;
  }
  const {
    csp,
    prepend
  } = option;
  const styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      const existStyle = findStyles(container).filter(node => ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER)));
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  let option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const container = getContainer(option);
  return findStyles(container).find(node => node.getAttribute(getMark(option)) === key);
}
function removeCSS(key) {
  let option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const existNode = findExistNode(key, option);
  if (existNode) {
    const container = getContainer(option);
    container.removeChild(existNode);
  }
}
/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS('', option);
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  let option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _a, _b, _c;
  const container = getContainer(option);
  // Sync real parent
  syncRealContainer(container, option);
  const existNode = findExistNode(key, option);
  if (existNode) {
    if (((_a = option.csp) === null || _a === void 0 ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) === null || _b === void 0 ? void 0 : _b.nonce)) {
      existNode.nonce = (_c = option.csp) === null || _c === void 0 ? void 0 : _c.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/util.js




// Create a cache here to avoid always loop generate
const flattenTokenCache = new WeakMap();
function flattenToken(token) {
  let str = flattenTokenCache.get(token) || '';
  if (!str) {
    Object.keys(token).forEach(key => {
      const value = token[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === 'object') {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    // Put in cache
    flattenTokenCache.set(token, str);
  }
  return str;
}
/**
 * Convert derivative token to key string
 */
function token2key(token, salt) {
  return murmur2(`${salt}_${flattenToken(token)}`);
}
const randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(/\./g, '');
// Magic `content` for detect selector support
const checkContent = '_bAmBoO_';
function supportSelector(styleStr, handleElement, supportCheck) {
  var _a, _b;
  if (_util_canUseDom()) {
    updateCSS(styleStr, randomSelectorKey);
    const ele = document.createElement('div');
    ele.style.position = 'fixed';
    ele.style.left = '0';
    ele.style.top = '0';
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
    document.body.appendChild(ele);
    if (false) {}
    const support = supportCheck ? supportCheck(ele) : (_a = getComputedStyle(ele).content) === null || _a === void 0 ? void 0 : _a.includes(checkContent);
    (_b = ele.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
let canLayer = undefined;
function supportLayer() {
  if (canLayer === undefined) {
    canLayer = supportSelector(`@layer ${randomSelectorKey} { .${randomSelectorKey} { content: "${checkContent}"!important; } }`, ele => {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}
let canWhere = (/* unused pure expression or super */ null && (undefined));
function supportWhere() {
  if (canWhere === undefined) {
    canWhere = supportSelector(`:where(.${randomSelectorKey}) { content: "${checkContent}"!important; }`, ele => {
      ele.className = randomSelectorKey;
    });
  }
  return canWhere;
}
let canLogic = (/* unused pure expression or super */ null && (undefined));
function supportLogicProps() {
  if (canLogic === undefined) {
    canLogic = supportSelector(`.${randomSelectorKey} { inset-block: 93px !important; }`, ele => {
      ele.className = randomSelectorKey;
    }, ele => getComputedStyle(ele).bottom === '93px');
  }
  return canLogic;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useCacheToken.js






const EMPTY_OVERRIDE = {};
const isProduction = "production" === 'production';
// nuxt generate when NODE_ENV is prerender
const isPrerender = "production" === 'prerender';
// Generate different prefix to make user selector break in production env.
// This helps developer not to do style override directly on the hash id.
const hashPrefix = !isProduction && !isPrerender ? 'css-dev-only-do-not-override' : 'css';
const tokenKeys = new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== 'undefined') {
    const styles = document.querySelectorAll(`style[${StyleContext_ATTR_TOKEN}="${key}"]`);
    styles.forEach(style => {
      var _a;
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
      }
    });
  }
}
const TOKEN_THRESHOLD = 0;
// Remove will check current keys first
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter(key => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  // Should keep tokens under threshold for not to insert style too often
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(key => {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
const getComputedToken = (originToken, overrideToken, theme, format) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  // Merge with override
  let mergedDerivativeToken = extends_extends(extends_extends({}, derivativeToken), overrideToken);
  // Format if needed
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
/**
 * Cache theme derivative token as global shared one
 * @param theme Theme entity
 * @param tokens List of tokens, used for cache. Please do not dynamic generate object directly
 * @param option Additional config
 * @returns Call Theme.getDerivativeToken(tokenObject) to get token
 */
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,reactivity_esm_bundler/* ref */.KR)({});
  const style = useStyleInject();
  // Basic - We do basic cache here
  const mergedToken = (0,reactivity_esm_bundler/* computed */.EW)(() => extends_extends({}, ...tokens.value));
  const tokenStr = (0,reactivity_esm_bundler/* computed */.EW)(() => flattenToken(mergedToken.value));
  const overrideTokenStr = (0,reactivity_esm_bundler/* computed */.EW)(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache('token', (0,reactivity_esm_bundler/* computed */.EW)(() => [option.value.salt || '', theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = '',
      override = EMPTY_OVERRIDE,
      formatToken,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken);
    // Optimize for `useStyleRegister` performance
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId; // Not used
    return [mergedDerivativeToken, hashId];
  }, cache => {
    var _a;
    // Remove token will remove all related style
    cleanTokenStyle(cache[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/version/version.js
/* harmony default export */ var version_version = ('4.2.3');
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/version/index.js
/* eslint import/no-unresolved: 0 */
// @ts-ignore

/* harmony default export */ var es_version = (version_version);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }
  // Convert into [0, 1] range if it isn't already
  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = n % max / parseFloat(String(max));
  }
  return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function util_pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    v: v
  };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
  var hex = [util_pad2(Math.round(r).toString(16)), util_pad2(Math.round(g).toString(16)), util_pad2(Math.round(b).toString(16))];
  // Return a 3 character hex if possible
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [util_pad2(Math.round(r).toString(16)), util_pad2(Math.round(g).toString(16)), util_pad2(Math.round(b).toString(16)), util_pad2(convertDecimalToHex(a))];
  // Return a 4 character hex if possible
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 0xff00) >> 8,
    b: color & 0xff
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }
  if (typeof color === 'object') {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = 'hsl';
    }
    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === 'transparent') {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: 'name'
    };
  }
  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match = matchers.rgb.exec(color);
  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? 'name' : 'hex8'
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? 'name' : 'hex'
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? 'name' : 'hex8'
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? 'name' : 'hex'
    };
  }
  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+colors@6.0.0/node_modules/@ant-design/colors/dist/index.esm.js

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`

function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.

function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正

  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间

  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  } // dark theme patterns

  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;

;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genControlHeight.js
const genControlHeight = token => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
/* harmony default export */ var shared_genControlHeight = (genControlHeight);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genSizeMapToken.js
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3) // 4
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/seed.js

const defaultPresetColors = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911'
};
const seedToken = extends_extends(extends_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorTextBase: '',
  colorBgBase: '',
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: 'solid',
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
/* harmony default export */ var seed = (seedToken);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/index.js




var TinyColor = /** @class */function () {
  function TinyColor(color, opts) {
    if (color === void 0) {
      color = '';
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    // If input is already a tinycolor, return itself
    if (color instanceof TinyColor) {
      // eslint-disable-next-line no-constructor-return
      return color;
    }
    if (typeof color === 'number') {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };
  TinyColor.prototype.isLight = function () {
    return !this.isDark();
  };
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  TinyColor.prototype.getBrightness = function () {
    // http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  };
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  TinyColor.prototype.getLuminance = function () {
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  TinyColor.prototype.getAlpha = function () {
    return this.a;
  };
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  TinyColor.prototype.setAlpha = function (alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  /**
   * Returns whether the color is monochrome.
   */
  TinyColor.prototype.isMonochrome = function () {
    var s = this.toHsl().s;
    return s === 0;
  };
  /**
   * Returns the object as a HSVA object.
   */
  TinyColor.prototype.toHsv = function () {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this.a
    };
  };
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toHsvString = function () {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a HSLA object.
   */
  TinyColor.prototype.toHsl = function () {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this.a
    };
  };
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toHslString = function () {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  TinyColor.prototype.toHex = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  TinyColor.prototype.toHexString = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return '#' + this.toHex(allow3Char);
  };
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  TinyColor.prototype.toHex8 = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  TinyColor.prototype.toHex8String = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return '#' + this.toHex8(allow4Char);
  };
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  TinyColor.prototype.toHexShortString = function (allowShortChar) {
    if (allowShortChar === void 0) {
      allowShortChar = false;
    }
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  };
  /**
   * Returns the object as a RGBA object.
   */
  TinyColor.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toRgbString = function () {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a RGBA object.
   */
  TinyColor.prototype.toPercentageRgb = function () {
    var fmt = function (x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  TinyColor.prototype.toPercentageRgbString = function () {
    var rnd = function (x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  /**
   * The 'real' name of the color -if there is one.
   */
  TinyColor.prototype.toName = function () {
    if (this.a === 0) {
      return 'transparent';
    }
    if (this.a < 1) {
      return false;
    }
    var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i],
        key = _b[0],
        value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor.prototype.toString = function (format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === 'name' && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === 'rgb') {
      formattedString = this.toRgbString();
    }
    if (format === 'prgb') {
      formattedString = this.toPercentageRgbString();
    }
    if (format === 'hex' || format === 'hex6') {
      formattedString = this.toHexString();
    }
    if (format === 'hex3') {
      formattedString = this.toHexString(true);
    }
    if (format === 'hex4') {
      formattedString = this.toHex8String(true);
    }
    if (format === 'hex8') {
      formattedString = this.toHex8String();
    }
    if (format === 'name') {
      formattedString = this.toName();
    }
    if (format === 'hsl') {
      formattedString = this.toHslString();
    }
    if (format === 'hsv') {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor.prototype.clone = function () {
    return new TinyColor(this.toString());
  };
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.lighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.brighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor(rgb);
  };
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.darken = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.tint = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix('white', amount);
  };
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.shade = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix('black', amount);
  };
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.desaturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.saturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  TinyColor.prototype.greyscale = function () {
    return this.desaturate(100);
  };
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  TinyColor.prototype.spin = function (amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor(hsl);
  };
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  TinyColor.prototype.mix = function (color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor(rgba);
  };
  TinyColor.prototype.analogous = function (results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor(hsl));
    }
    return ret;
  };
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  TinyColor.prototype.complement = function () {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor(hsl);
  };
  TinyColor.prototype.monochromatic = function (results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor.prototype.splitcomplement = function () {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [this, new TinyColor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), new TinyColor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  };
  /**
   * Compute how the color would appear on a background
   */
  TinyColor.prototype.onBackground = function (background) {
    var fg = this.toRgb();
    var bg = new TinyColor(background).toRgb();
    var alpha = fg.a + bg.a * (1 - fg.a);
    return new TinyColor({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  };
  /**
   * Alias for `polyad(3)`
   */
  TinyColor.prototype.triad = function () {
    return this.polyad(3);
  };
  /**
   * Alias for `polyad(4)`
   */
  TinyColor.prototype.tetrad = function () {
    return this.polyad(4);
  };
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  TinyColor.prototype.polyad = function (n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor({
        h: (h + i * increment) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  };
  /**
   * compare color vs current color
   */
  TinyColor.prototype.equals = function (color) {
    return this.toRgbString() === new TinyColor(color).toRgbString();
  };
  return TinyColor;
}();

// kept for backwards compatability with v1
function tinycolor(color, opts) {
  if (color === void 0) {
    color = '';
  }
  if (opts === void 0) {
    opts = {};
  }
  return new TinyColor(color, opts);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genColorMapToken.js


function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes,
    generateNeutralColorPalettes
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes(colorPrimaryBase);
  const successColors = generateColorPalettes(colorSuccessBase);
  const warningColors = generateColorPalettes(colorWarningBase);
  const errorColors = generateColorPalettes(colorErrorBase);
  const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  return extends_extends(extends_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genRadius.js
const genRadius = radiusBase => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  // radiusLG
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  // radiusSM
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  // radiusXS
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  // radiusOuter
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
/* harmony default export */ var shared_genRadius = (genRadius);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genCommonMapToken.js


function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return extends_extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, shared_genRadius(borderRadius));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/default/colorAlgorithm.js

const getAlphaColor = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/default/colors.js


const generateColorPalettes = baseColor => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#000';
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genFontSizes.js
// https://zhuanlan.zhihu.com/p/32746810
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    // Convert to even
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map(size => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/shared/genFontMapToken.js

const genFontMapToken = fontSize => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map(pair => pair.size);
  const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
/* harmony default export */ var shared_genFontMapToken = (genFontMapToken);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/themes/default/index.js









function derivative(token) {
  const colorPalettes = Object.keys(defaultPresetColors).map(colorKey => {
    const colors = generate(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = extends_extends(extends_extends({}, prev), cur);
    return prev;
  }, {});
  return extends_extends(extends_extends(extends_extends(extends_extends(extends_extends(extends_extends(extends_extends({}, token), colorPalettes), genColorMapToken(token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  })), shared_genFontMapToken(token.fontSize)), genSizeMapToken(token)), shared_genControlHeight(token)), genCommonMapToken(token));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/util/getAlphaColor.js

function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor_getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  // fallback
  /* istanbul ignore next */
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
/* harmony default export */ var util_getAlphaColor = (getAlphaColor_getAlphaColor);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/util/alias.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



/**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */
function formatToken(derivativeToken) {
  const {
      override
    } = derivativeToken,
    restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = extends_extends({}, override);
  Object.keys(seed).forEach(token => {
    delete overrideTokens[token];
  });
  const mergedToken = extends_extends(extends_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2000;
  // Generate alias token
  const aliasToken = extends_extends(extends_extends(extends_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: util_getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: util_getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: util_getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: util_getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: 'none',
    linkHoverDecoration: 'none',
    linkFocusDecoration: 'none',
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new TinyColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new TinyColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
  }), overrideTokens);
  return aliasToken;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/internal.js











const defaultTheme = createTheme(derivative);

// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
const defaultConfig = {
  token: seed,
  hashed: true
};
//defaultConfig
const DesignTokenContextKey = Symbol('DesignTokenContext');
const globalDesignTokenApi = (0,reactivity_esm_bundler/* shallowRef */.IJ)();
const useDesignTokenProvider = value => {
  (0,runtime_core_esm_bundler/* provide */.Gt)(DesignTokenContextKey, value);
  (0,runtime_core_esm_bundler/* watch */.wB)(value, () => {
    globalDesignTokenApi.value = (0,reactivity_esm_bundler/* unref */.R1)(value);
    (0,reactivity_esm_bundler/* triggerRef */.mu)(globalDesignTokenApi);
  }, {
    immediate: true,
    deep: true
  });
};
const useDesignTokenInject = () => {
  return inject(DesignTokenContextKey, computed(() => globalDesignTokenApi.value || defaultConfig));
};
const DesignTokenProvider = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    value: type_objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider((0,reactivity_esm_bundler/* computed */.EW)(() => props.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
// ================================== Hook ==================================
function useToken() {
  const designTokenContext = (0,runtime_core_esm_bundler/* inject */.WQ)(DesignTokenContextKey, (0,reactivity_esm_bundler/* computed */.EW)(() => globalDesignTokenApi.value || defaultConfig));
  const salt = (0,reactivity_esm_bundler/* computed */.EW)(() => `${es_version}-${designTokenContext.value.hashed || ''}`);
  const mergedTheme = (0,reactivity_esm_bundler/* computed */.EW)(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, (0,reactivity_esm_bundler/* computed */.EW)(() => [seed, designTokenContext.value.token]), (0,reactivity_esm_bundler/* computed */.EW)(() => ({
    salt: salt.value,
    override: extends_extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken: formatToken
  })));
  return [mergedTheme, (0,reactivity_esm_bundler/* computed */.EW)(() => cacheToken.value[0]), (0,reactivity_esm_bundler/* computed */.EW)(() => designTokenContext.value.hashed ? cacheToken.value[1] : '')];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/empty/empty.js




const Empty = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const themeStyle = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const bgColor = new TinyColor(token.value.colorBgBase);
      // Dark Theme need more dark of this
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => (0,runtime_core_esm_bundler/* createVNode */.bF)("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("g", {
      "transform": "translate(24 31.67)"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = true;
/* harmony default export */ var empty_empty = (Empty);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/empty/simple.js




const Simple = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token] = useToken();
    const color = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => (0,runtime_core_esm_bundler/* createVNode */.bF)("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [(0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
/* harmony default export */ var simple = (Simple);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/isValid.js
const isValid = value => {
  return value !== undefined && value !== null && value !== '';
};
/* harmony default export */ var _util_isValid = (isValid);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/props-util/index.js






// function getType(fn) {
//   const match = fn && fn.toString().match(/^\s*function (\w+)/);
//   return match ? match[1] : '';
// }
const splitAttrs = attrs => {
  const allAttrs = Object.keys(attrs);
  const eventAttrs = {};
  const onEvents = {};
  const extraAttrs = {};
  for (let i = 0, l = allAttrs.length; i < l; i++) {
    const key = allAttrs[i];
    if (isOn(key)) {
      eventAttrs[key[2].toLowerCase() + key.slice(3)] = attrs[key];
      onEvents[key] = attrs[key];
    } else {
      extraAttrs[key] = attrs[key];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
const parseStyleText = function () {
  let cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let camel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  if (typeof cssText === 'object') return cssText;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};
const hasProp = (instance, prop) => {
  return instance[prop] !== undefined;
};
const skipFlattenKey = Symbol('skipFlatten');
const flattenChildren = function () {
  let children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let filterEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach(child => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty));
    } else if (child && child.type === runtime_core_esm_bundler/* Fragment */.FK) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty));
      }
    } else if (child && (0,runtime_core_esm_bundler/* isVNode */.vv)(child)) {
      if (filterEmpty && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty) {
        res.push(child);
      }
    } else if (_util_isValid(child)) {
      res.push(child);
    }
  });
  return res;
};
const getSlot = function (self) {
  let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isVNode(self)) {
    if (self.type === Fragment) {
      return name === 'default' ? flattenChildren(self.children) : [];
    } else if (self.children && self.children[name]) {
      return flattenChildren(self.children[name](options));
    } else {
      return [];
    }
  } else {
    const res = self.$slots[name] && self.$slots[name](options);
    return flattenChildren(res);
  }
};
const findDOMNode = instance => {
  var _a;
  let node = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
const getOptionProps = instance => {
  const res = {};
  if (instance.$ && instance.$.vnode) {
    const props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach(k => {
      const v = instance.$props[k];
      const hyphenateKey = hyphenate(k);
      if (v !== undefined || hyphenateKey in props) {
        res[k] = v; // 直接取 $props[k]
      }
    });
  } else if (isVNode(instance) && typeof instance.type === 'object') {
    const originProps = instance.props || {};
    const props = {};
    Object.keys(originProps).forEach(key => {
      props[camelize(key)] = originProps[key];
    });
    const options = instance.type.props || {};
    Object.keys(options).forEach(k => {
      const v = resolvePropValue(options, props, k, props[k]);
      if (v !== undefined || k in props) {
        res[k] = v;
      }
    });
  }
  return res;
};
const getComponent = function (instance) {
  let prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  let execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let com = undefined;
  if (instance.$) {
    const temp = instance[prop];
    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    const temp = instance.props && instance.props[prop];
    if (temp !== undefined && instance.props !== null) {
      return typeof temp === 'function' && execute ? temp(options) : temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? undefined : com;
  }
  return com;
};
const getKey = ele => {
  const key = ele.key;
  return key;
};
function getEvents() {
  let ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let on = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let props = {};
  if (ele.$) {
    props = _extends(_extends({}, props), ele.$attrs);
  } else {
    props = _extends(_extends({}, props), ele.props);
  }
  return splitAttrs(props)[on ? 'onEvents' : 'events'];
}
function getClass(ele) {
  const props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  const tempCls = props.class || {};
  let cls = {};
  if (typeof tempCls === 'string') {
    tempCls.split(' ').forEach(c => {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(tempCls)) {
    classNames(tempCls).split(' ').forEach(c => {
      cls[c.trim()] = true;
    });
  } else {
    cls = _extends(_extends({}, cls), tempCls);
  }
  return cls;
}
function getStyle(ele, camel) {
  const props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  let style = props.style || {};
  if (typeof style === 'string') {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    // 驼峰化
    const res = {};
    Object.keys(style).forEach(k => res[camelize(k)] = style[k]);
    return res;
  }
  return style;
}
function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}
function isFragment(c) {
  return c.length === 1 && c[0].type === Fragment;
}
function isEmptyContent(c) {
  return c === undefined || c === null || c === '' || Array.isArray(c) && c.length === 0;
}
function isEmptyElement(c) {
  return c && (c.type === runtime_core_esm_bundler/* Comment */.Mw || c.type === runtime_core_esm_bundler/* Fragment */.FK && c.children.length === 0 || c.type === runtime_core_esm_bundler/* Text */.EY && c.children.trim() === '');
}
function isEmptySlot(c) {
  return !c || c().every(isEmptyElement);
}
function isStringElement(c) {
  return c && c.type === Text;
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const res = [];
  children.forEach(child => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === runtime_core_esm_bundler/* Fragment */.FK) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter(c => !isEmptyElement(c));
}
function filterEmptyWithUndefined(children) {
  if (children) {
    const coms = filterEmpty(children);
    return coms.length ? coms : undefined;
  } else {
    return children;
  }
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && typeof element.type !== 'symbol'; // remove text node
}
function getPropsSlot(slots, props) {
  let prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  var _a, _b;
  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}
const getTextFromElement = ele => {
  if (isValidElement(ele) && isStringElement(ele[0])) {
    return ele[0].children;
  }
  return ele;
};

/* harmony default export */ var props_util = ((/* unused pure expression or super */ null && (hasProp)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+unitless@0.8.1/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Enum.js
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
;// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var Utility_abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash(value, length) {
  return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}

/**
 * @param {string} value
 * @return {string}
 */
function trim(value) {
  return value.trim();
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof(value, search, position) {
  return value.indexOf(search, position);
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr(value, begin, end) {
  return value.slice(begin, end);
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen(value) {
  return value.length;
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof(value) {
  return value.length;
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append(value, array) {
  return array.push(value), value;
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine(array, callback) {
  return array.map(callback).join('');
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter(array, pattern) {
  return array.filter(function (value) {
    return !match(value, pattern);
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize(children, callback) {
  var output = '';
  for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || '';
  return output;
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return '';
    case KEYFRAMES:
      return element.return = element.value + '{' + serialize(element.children, callback) + '}';
    case RULESET:
      if (!strlen(element.value = element.props.join(','))) return '';
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Tokenizer.js

var Tokenizer_line = 1;
var column = 1;
var Tokenizer_length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node(value, root, parent, type, props, children, length, siblings) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: Tokenizer_line,
    column: column,
    length: length,
    return: '',
    siblings: siblings
  };
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function Tokenizer_copy(root, props) {
  return assign(node('', null, null, '', null, null, 0, root.siblings), root, {
    length: -root.length
  }, props);
}

/**
 * @param {object} root
 */
function lift(root) {
  while (root.root) root = Tokenizer_copy(root.root, {
    children: [root]
  });
  append(root, root.siblings);
}

/**
 * @return {number}
 */
function Tokenizer_char() {
  return character;
}

/**
 * @return {number}
 */
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, Tokenizer_line--;
  return character;
}

/**
 * @return {number}
 */
function next() {
  character = position < Tokenizer_length ? charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, Tokenizer_line++;
  return character;
}

/**
 * @return {number}
 */
function peek() {
  return charat(characters, position);
}

/**
 * @return {number}
 */
function caret() {
  return position;
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice(begin, end) {
  return substr(characters, begin, end);
}

/**
 * @param {number} type
 * @return {number}
 */
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc(value) {
  return Tokenizer_line = column = 1, Tokenizer_length = strlen(characters = value), position = 0, [];
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc(value) {
  return characters = '', value;
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize(value) {
  return dealloc(tokenizer(alloc(value)));
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer(children) {
  while (next()) switch (token(character)) {
    case 0:
      append(identifier(position - 1), children);
      break;
    case 2:
      append(delimit(character), children);
      break;
    default:
      append(from(character), children);
  }
  return children;
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping(index, count) {
  while (--count && next())
  // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '
    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (
    case 40:
      if (type === 41) delimiter(type);
      break;
    // \
    case 92:
      next();
      break;
  }
  return position;
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter(type, index) {
  while (next())
  // //
  if (type + character === 47 + 10) break;
  // /*
  else if (type + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next());
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.3.2/node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile(value) {
  return dealloc(Parser_parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function Parser_parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;
  while (scanning) switch (previous = character, character = next()) {
    // (
    case 40:
      if (previous != 108 && charat(characters, length - 1) == 58) {
        if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', Utility_abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
        break;
      }
    // " ' [
    case 34:
    case 39:
    case 91:
      characters += delimit(character);
      break;
    // \t \n \r \s
    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace(previous);
      break;
    // \
    case 92:
      characters += escaping(caret() - 1, 7);
      continue;
    // /
    case 47:
      switch (peek()) {
        case 42:
        case 47:
          Utility_append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
          break;
        default:
          characters += '/';
      }
      break;
    // {
    case 123 * variable:
      points[index++] = strlen(characters) * ampersand;
    // } ; \0
    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;
        case 59 + offset:
          if (ampersand == -1) characters = replace(characters, /\f/g, '');
          if (property > 0 && strlen(characters) - length) Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
          break;
        // @ ;
        case 59:
          characters += ';';
        // { rule/at-rule
        default:
          Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
          if (character === 123) if (offset === 0) Parser_parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
            // d l m s
            case 100:
            case 108:
            case 109:
            case 115:
              Parser_parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
              break;
            default:
              Parser_parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }
      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :
    case 58:
      length = 1 + strlen(characters), property = previous;
    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
      switch (characters += Utility_from(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,
        case 44:
          points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @
        case 64:
          // -
          if (peek() === 45) characters += delimit(next());
          atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
          break;
        // -
        case 45:
          if (previous === 45 && strlen(characters) == 2) variable = 0;
      }
  }
  return rulesets;
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = Utility_abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), substr(value, 2, -2), 0, siblings);
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration(value, root, parent, length, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister/cacheMapUtil.js


const cacheMapUtil_ATTR_CACHE_MAP = 'data-ant-cssinjs-cache-path';
/**
 * This marks style from the css file.
 * Which means not exist in `<style />` tag.
 */
const CSS_FILE_STYLE = '_FILE_STYLE__';
function cacheMapUtil_serialize(cachePathMap) {
  return Object.keys(cachePathMap).map(path => {
    const hash = cachePathMap[path];
    return `${path}:${hash}`;
  }).join(';');
}
let cachePathMap;
let fromCSSFile = true;
/**
 * @private Test usage only. Can save remove if no need.
 */
function cacheMapUtil_reset(mockCache) {
  let fromFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  cachePathMap = mockCache;
  fromCSSFile = fromFile;
}
function prepare() {
  var _a;
  if (!cachePathMap) {
    cachePathMap = {};
    if (_util_canUseDom()) {
      const div = document.createElement('div');
      div.className = cacheMapUtil_ATTR_CACHE_MAP;
      div.style.position = 'fixed';
      div.style.visibility = 'hidden';
      div.style.top = '-9999px';
      document.body.appendChild(div);
      let content = getComputedStyle(div).content || '';
      content = content.replace(/^"/, '').replace(/"$/, '');
      // Fill data
      content.split(';').forEach(item => {
        const [path, hash] = item.split(':');
        cachePathMap[path] = hash;
      });
      // Remove inline record style
      const inlineMapStyle = document.querySelector(`style[${cacheMapUtil_ATTR_CACHE_MAP}]`);
      if (inlineMapStyle) {
        fromCSSFile = false;
        (_a = inlineMapStyle.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash = cachePathMap[path];
  let styleStr = null;
  if (hash && _util_canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      const style = document.querySelector(`style[${StyleContext_ATTR_MARK}="${cachePathMap[path]}"]`);
      if (style) {
        styleStr = style.innerHTML;
      } else {
        // Clean up since not exist anymore
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister/index.js


// @ts-ignore










const isClientSide = _util_canUseDom();
const SKIP_CHECK = '_skip_check_';
const MULTI_VALUE = '_multi_value_';
// ============================================================================
// ==                                 Parser                                 ==
// ============================================================================
// Preprocessor style content to browser support one
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
  return typeof value === 'object' && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
// 注入 hash 值
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === 'low' ? `:where(${hashClassName})` : hashClassName;
  // 注入 hashId
  const keys = key.split(',').map(k => {
    var _a;
    const fullPath = k.trim().split(/\s+/);
    // 如果 Selector 第一个是 HTML Element，那我们就插到它的后面。反之，就插到最前面。
    let firstPath = fullPath[0] || '';
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(' ');
  });
  return keys.join(',');
}
// Global effect style will mount once and not removed
// The effect will not save in SSR cache (e.g. keyframes)
const globalEffectStyleKeys = new Set();
/**
 * @private Test only. Clear the global effect style keys.
 */
const _cf = (/* unused pure expression or super */ null && ( false ? 0 : undefined));
// Parse CSSObject to style content
const parseStyle = function (interpolation) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let {
    root,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = '';
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    list.forEach(item => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(originStyle => {
    // Only root level can use raw string
    const style = typeof originStyle === 'string' && !root ? {} : originStyle;
    if (typeof style === 'string') {
      styleStr += `${style}\n`;
    } else if (style._keyframe) {
      // Keyframe
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev)) || prev;
      }, style);
      // Normal CSSObject
      Object.keys(mergedStyle).forEach(key => {
        var _a;
        const value = mergedStyle[key];
        if (typeof value === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          // 当成嵌套对象来处理
          let mergedKey = key.trim();
          // Whether treat child as root. In most case it is false.
          let nextRoot = false;
          // 拆分多个选择器
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith('@')) {
              // 略过媒体查询，交给子节点继续插入 hashId
              subInjectHash = true;
            } else {
              // 注入 hashId
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
            // In case of `{ '&': { a: { color: 'red' } } }` or `{ '': { a: { color: 'red' } } }` without hashId,
            // we will get `&{a:{color:red;}}` or `{a:{color:red;}}` string for stylis to compile.
            // But it does not conform to stylis syntax,
            // and finally we will get `{color:red;}` as css, which is wrong.
            // So we need to remove key in root, and treat child `{ a: { color: 'red' } }` as root.
            mergedKey = '';
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = extends_extends(extends_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          function appendStyle(cssKey, cssValue) {
            if (false) {}
            // 如果是样式则直接插入
            const styleName = cssKey.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
            // Auto suffix with px
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === 'number' && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            // handle animationName & Keyframe value
            if (cssKey === 'animationName' && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          }
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === 'object' && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach(item => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(',');
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    // Order of layer if needed
    if (layerCells.length > 1) {
      // zombieJ: stylis do not support layer order, so we need to handle it manually.
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
// ============================================================================
// ==                                Register                                ==
// ============================================================================
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join('%')}${styleStr}`);
}
// function Empty() {
//   return null;
// }
/**
 * Register a style to the global style sheet.
 */
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = (0,reactivity_esm_bundler/* computed */.EW)(() => info.value.token._tokenKey);
  const fullPath = (0,reactivity_esm_bundler/* computed */.EW)(() => [tokenKey.value, ...info.value.path]);
  // Check if need insert style
  let isMergedClientSide = isClientSide;
  if (false) {}
  // const [cacheStyle[0], cacheStyle[1], cacheStyle[2]]
  useClientCache('style', fullPath,
  // Create cache if needed
  () => {
    const {
      path,
      hashId,
      layer,
      nonce,
      clientOnly,
      order = 0
    } = info.value;
    const cachePath = fullPath.value.join('|');
    // Get style from SSR inline style directly
    if (existPath(cachePath)) {
      const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
      if (inlineCacheStyleStr) {
        return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
      }
    }
    const styleObj = styleFn();
    const {
      hashPriority,
      container,
      transformers,
      linters,
      cache
    } = styleContext.value;
    const [parsedStyle, effectStyle] = parseStyle(styleObj, {
      hashId,
      hashPriority,
      layer,
      path: path.join('-'),
      transformers,
      linters
    });
    const styleStr = normalizeStyle(parsedStyle);
    const styleId = uniqueHash(fullPath.value, styleStr);
    if (isMergedClientSide) {
      const mergedCSSConfig = {
        mark: StyleContext_ATTR_MARK,
        prepend: 'queue',
        attachTo: container,
        priority: order
      };
      const nonceStr = typeof nonce === 'function' ? nonce() : nonce;
      if (nonceStr) {
        mergedCSSConfig.csp = {
          nonce: nonceStr
        };
      }
      const style = updateCSS(styleStr, styleId, mergedCSSConfig);
      style[CSS_IN_JS_INSTANCE] = cache.instanceId;
      // Used for `useCacheToken` to remove on batch when token removed
      style.setAttribute(StyleContext_ATTR_TOKEN, tokenKey.value);
      // Dev usage to find which cache path made this easily
      if (false) {}
      // Inject client side effect style
      Object.keys(effectStyle).forEach(effectKey => {
        if (!globalEffectStyleKeys.has(effectKey)) {
          globalEffectStyleKeys.add(effectKey);
          // Inject
          updateCSS(normalizeStyle(effectStyle[effectKey]), `_effect-${effectKey}`, {
            mark: StyleContext_ATTR_MARK,
            prepend: 'queue',
            attachTo: container
          });
        }
      });
    }
    return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
  },
  // Remove cache if no need
  (_ref, fromHMR) => {
    let [,, styleId] = _ref;
    if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
      removeCSS(styleId, {
        mark: StyleContext_ATTR_MARK
      });
    }
  });
  return node => {
    return node;
    // let styleNode: VueNode;
    // if (!styleContext.ssrInline || isMergedClientSide || !styleContext.defaultCache) {
    //   styleNode = <Empty />;
    // } else {
    //   styleNode = (
    //     <style
    //       {...{
    //         [ATTR_TOKEN]: cacheStyle.value[1],
    //         [ATTR_MARK]: cacheStyle.value[2],
    //       }}
    //       innerHTML={cacheStyle.value[0]}
    //     />
    //   );
    // }
    // return (
    //   <>
    //     {styleNode}
    //     {node}
    //   </>
    // );
  };
}
// ============================================================================
// ==                                  SSR                                   ==
// ============================================================================
function extractStyle(cache) {
  let plain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const matchPrefix = `style%`;
  // prefix with `style` is used for `useStyleRegister` to cache style context
  const styleKeys = Array.from(cache.cache.keys()).filter(key => key.startsWith(matchPrefix));
  // Common effect styles like animation
  const effectStyles = {};
  // Mapping of cachePath to style hash
  const cachePathMap = {};
  let styleText = '';
  function toStyleStr(style, tokenKey, styleId) {
    let customizeAttrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const attrs = _extends(_extends({}, customizeAttrs), {
      [ATTR_TOKEN]: tokenKey,
      [ATTR_MARK]: styleId
    });
    const attrStr = Object.keys(attrs).map(attr => {
      const val = attrs[attr];
      return val ? `${attr}="${val}"` : null;
    }).filter(v => v).join(' ');
    return plain ? style : `<style ${attrStr}>${style}</style>`;
  }
  const orderStyles = styleKeys.map(key => {
    const cachePath = key.slice(matchPrefix.length).replace(/%/g, '|');
    const [styleStr, tokenKey, styleId, effectStyle, clientOnly, order] = cache.cache.get(key)[1];
    // Skip client only style
    if (clientOnly) {
      return null;
    }
    // ====================== Style ======================
    // Used for vc-util
    const sharedAttrs = {
      'data-vc-order': 'prependQueue',
      'data-vc-priority': `${order}`
    };
    let keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs);
    // Save cache path with hash mapping
    cachePathMap[cachePath] = styleId;
    // =============== Create effect style ===============
    if (effectStyle) {
      Object.keys(effectStyle).forEach(effectKey => {
        // Effect style can be reused
        if (!effectStyles[effectKey]) {
          effectStyles[effectKey] = true;
          keyStyleText += toStyleStr(normalizeStyle(effectStyle[effectKey]), tokenKey, `_effect-${effectKey}`, sharedAttrs);
        }
      });
    }
    const ret = [order, keyStyleText];
    return ret;
  }).filter(o => o);
  orderStyles.sort((o1, o2) => o1[0] - o2[0]).forEach(_ref2 => {
    let [, style] = _ref2;
    styleText += style;
  });
  // ==================== Fill Cache Path ====================
  styleText += toStyleStr(`.${ATTR_CACHE_MAP}{content:"${serializeCacheMap(cachePathMap)}";}`, undefined, undefined, {
    [ATTR_CACHE_MAP]: ATTR_CACHE_MAP
  });
  return styleText;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/style/index.js




const textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
const resetComponent = token => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: 'none',
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const resetIcon = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'inherit',
  fontStyle: 'normal',
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  '> *': {
    lineHeight: 1
  },
  svg: {
    display: 'inline-block'
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  '&::before': {
    display: 'table',
    content: '""'
  },
  '&::after': {
    // https://github.com/ant-design/ant-design/issues/21864
    display: 'table',
    clear: 'both',
    content: '""'
  }
});
const genLinkStyle = token => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${token.motionDurationSlow}`,
    '-webkit-text-decoration-skip': 'objects',
    '&:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      },
      [rootPrefixSelector]: {
        boxSizing: 'border-box',
        '&::before, &::after': {
          boxSizing: 'border-box'
        }
      }
    }
  };
};
const genFocusOutline = token => ({
  outline: `${token.lineWidthBold}px solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: 'outline-offset 0s, outline 0s'
});
const genFocusStyle = token => ({
  '&:focus-visible': extends_extends({}, genFocusOutline(token))
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/util/statistic.js

const enableStatistic =  false || typeof CSSINJS_STATISTIC !== 'undefined';
let recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return extends_extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @private Internal Usage. Not use in your production. */
const statistic = {};
/** @private Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
const _statistic_build_ = {};
/* istanbul ignore next */
function statistic_noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
function statisticToken(token) {
  let tokenKeys;
  let proxy = token;
  let flush = statistic_noop;
  if (enableStatistic) {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: componentToken
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/theme/util/genComponentStyleHook.js

/* eslint-disable no-redeclare */





function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return _prefixCls => {
    const prefixCls = (0,reactivity_esm_bundler/* computed */.EW)(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = (0,reactivity_esm_bundler/* computed */.EW)(() => getPrefixCls());
    const sharedInfo = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: ['Shared', rootPrefixCls.value]
      };
    });
    // Generate style for all a tags in antd component.
    useStyleRegister(sharedInfo, () => [{
      // Link
      '&': genLinkStyle(token.value)
    }]);
    const componentInfo = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      return {
        theme: theme.value,
        token: token.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token.value);
      const defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = extends_extends(extends_extends({}, defaultComponentToken), token.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/empty/style/index.js

// ============================== Shared ==============================
const genSharedEmptyStyle = token => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: '100%'
        },
        svg: {
          height: '100%',
          margin: 'auto'
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      '&-normal': {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      '&-small': {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style = (genComponentStyleHook('Empty', token => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = merge(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/empty/index.js



var empty_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const defaultEmptyImg = (0,runtime_core_esm_bundler/* createVNode */.bF)(empty_empty, null, null);
const simpleEmptyImg = (0,runtime_core_esm_bundler/* createVNode */.bF)(simple, null, null);
const emptyProps = () => ({
  prefixCls: String,
  imageStyle: type_objectType(),
  image: anyType(),
  description: anyType()
});
const empty_Empty = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'AEmpty',
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject('empty', props);
    const [wrapSSR, hashId] = style(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = extends_extends(extends_extends({}, props), attrs),
        {
          image = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultEmptyImg,
          description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || undefined,
          imageStyle,
          class: className = ''
        } = _c,
        restProps = empty_rest(_c, ["image", "description", "imageStyle", "class"]);
      return wrapSSR((0,runtime_core_esm_bundler/* createVNode */.bF)(locale_provider_LocaleReceiver, {
        "componentName": "Empty",
        "children": locale => {
          const des = typeof description !== 'undefined' ? description : locale.description;
          const alt = typeof des === 'string' ? des : 'empty';
          let imageNode = null;
          if (typeof image === 'string') {
            imageNode = (0,runtime_core_esm_bundler/* createVNode */.bF)("img", {
              "alt": alt,
              "src": image
            }, null);
          } else {
            imageNode = image;
          }
          return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", _objectSpread2({
            "class": _util_classNames(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: image === simpleEmptyImg,
              [`${prefixCls}-rtl`]: direction.value === 'rtl'
            })
          }, restProps), [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && (0,runtime_core_esm_bundler/* createVNode */.bF)("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
empty_Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
empty_Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
/* harmony default export */ var es_empty = (withInstall(empty_Empty));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/config-provider/renderEmpty.js



const DefaultRenderEmpty = props => {
  const {
    prefixCls
  } = useConfigInject('empty', props);
  const renderHtml = componentName => {
    switch (componentName) {
      case 'Table':
      case 'List':
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(es_empty, {
          "image": es_empty.PRESENTED_IMAGE_SIMPLE
        }, null);
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(es_empty, {
          "image": es_empty.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(es_empty, null, null);
    }
  };
  return renderHtml(props.componentName);
};
function renderEmpty(componentName) {
  return _createVNode(DefaultRenderEmpty, {
    "componentName": componentName
  }, null);
}
/* harmony default export */ var config_provider_renderEmpty = ((/* unused pure expression or super */ null && (renderEmpty)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/config-provider/SizeContext.js

const SizeContextKey = Symbol('SizeContextKey');
const useInjectSize = () => {
  return (0,runtime_core_esm_bundler/* inject */.WQ)(SizeContextKey, (0,reactivity_esm_bundler/* ref */.KR)(undefined));
};
const useProviderSize = size => {
  const parentSize = useInjectSize();
  provide(SizeContextKey, computed(() => size.value || parentSize.value));
  return size;
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/config-provider/hooks/useConfigInject.js






/* harmony default export */ var useConfigInject = ((name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = (0,runtime_core_esm_bundler/* inject */.WQ)(configProviderKey, extends_extends(extends_extends({}, defaultConfigProvider), {
    renderEmpty: name => (0,runtime_core_esm_bundler.h)(DefaultRenderEmpty, {
      componentName: name
    })
  }));
  const prefixCls = (0,reactivity_esm_bundler/* computed */.EW)(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = (0,reactivity_esm_bundler/* computed */.EW)(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a;
    return (props.virtual === undefined ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = (0,reactivity_esm_bundler/* computed */.EW)(() => props.size || sizeContext.value);
  const autocomplete = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-util/Dom/isVisible.js
/* harmony default export */ var isVisible = (element => {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    const box = element.getBBox();
    if (box.width || box.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    const box = element.getBoundingClientRect();
    if (box.width || box.height) {
      return true;
    }
  }
  return false;
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/wave/style.js

const genWaveStyle = token => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(','),
        '&-active': {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
/* harmony default export */ var wave_style = (genComponentStyleHook('Wave', token => [genWaveStyle(token)]));
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.2.13/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(784);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/hooks/useState.js

function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  const innerValue = (0,reactivity_esm_bundler/* ref */.KR)(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/wave/util.js
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) &&
  // any transparent rgba color
  color !== 'transparent';
}
function getTargetWaveColor(node) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/raf.js
let raf = callback => setTimeout(callback, 16);
let caf = num => clearTimeout(num);
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = callback => window.requestAnimationFrame(callback);
  caf = handle => window.cancelAnimationFrame(handle);
}
let rafUUID = 0;
const rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  let times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  const id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);
      // Trigger
      callback();
    } else {
      // Next raf
      const realId = raf(() => {
        callRef(leftTimes - 1);
      });
      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = id => {
  const realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/wave/WaveEffect.js






function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  props: {
    target: type_objectType(),
    className: String
  },
  setup(props) {
    const divRef = (0,reactivity_esm_bundler/* shallowRef */.IJ)(null);
    const [color, setWaveColor] = useState(null);
    const [borderRadius, setBorderRadius] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [enabled, setEnabled] = useState(false);
    function syncPos() {
      const {
        target
      } = props;
      const nodeStyle = getComputedStyle(target);
      // Get wave color from target
      setWaveColor(getTargetWaveColor(target));
      const isStatic = nodeStyle.position === 'static';
      // Rect
      const {
        borderLeftWidth,
        borderTopWidth
      } = nodeStyle;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      // Get border radius
      const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius
      } = nodeStyle;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(radius => validateNum(parseFloat(radius))));
    }
    // Add resize observer to follow size
    let resizeObserver;
    let rafId;
    let timeoutId;
    const clear = () => {
      clearTimeout(timeoutId);
      wrapperRaf.cancel(rafId);
      resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
    };
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
      if (holder) {
        (0,runtime_dom_esm_bundler/* render */.XX)(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      clear();
      timeoutId = setTimeout(() => {
        removeDom();
      }, 5000);
      const {
        target
      } = props;
      if (target) {
        // We need delay to check position here
        // since UI may change after click
        rafId = wrapperRaf(() => {
          syncPos();
          setEnabled(true);
        });
        if (typeof ResizeObserver !== 'undefined') {
          resizeObserver = new ResizeObserver(syncPos);
          resizeObserver.observe(target);
        }
      }
    });
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
      clear();
    });
    const onTransitionend = e => {
      if (e.propertyName === 'opacity') {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map(radius => `${radius}px`).join(' ')
      };
      if (color) {
        waveStyle['--wave-color'] = color.value;
      }
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(runtime_dom_esm_bundler/* Transition */.eB, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [(0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
          "ref": divRef,
          "class": props.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node, className) {
  // Create holder
  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node === null || node === void 0 ? void 0 : node.insertBefore(holder, node === null || node === void 0 ? void 0 : node.firstChild);
  (0,runtime_dom_esm_bundler/* render */.XX)((0,runtime_core_esm_bundler/* createVNode */.bF)(WaveEffect, {
    "target": node,
    "className": className
  }, null), holder);
}
/* harmony default export */ var wave_WaveEffect = (showWaveEffect);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/wave/useWave.js


function useWave(instance, className, wave) {
  function showWave() {
    var _a;
    const node = findDOMNode(instance);
    if (((_a = wave === null || wave === void 0 ? void 0 : wave.value) === null || _a === void 0 ? void 0 : _a.disabled) || !node) {
      return;
    }
    wave_WaveEffect(node, className.value);
  }
  return showWave;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/wave/index.js







/* harmony default export */ var wave = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  name: 'Wave',
  props: {
    disabled: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
    const {
      prefixCls,
      wave
    } = useConfigInject('wave', props);
    // ============================== Style ===============================
    const [, hashId] = wave_style(prefixCls);
    // =============================== Wave ===============================
    const showWave = useWave(instance, (0,reactivity_esm_bundler/* computed */.EW)(() => _util_classNames(prefixCls.value, hashId.value)), wave);
    let onClick;
    const clear = () => {
      const node = findDOMNode(instance);
      node.removeEventListener('click', onClick, true);
    };
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      (0,runtime_core_esm_bundler/* watch */.wB)(() => props.disabled, () => {
        clear();
        (0,runtime_core_esm_bundler/* nextTick */.dY)(() => {
          const node = findDOMNode(instance);
          node === null || node === void 0 ? void 0 : node.removeEventListener('click', onClick, true);
          if (!node || node.nodeType !== 1 || props.disabled) {
            return;
          }
          // Click handler
          onClick = e => {
            // Fix radio button click twice
            if (e.target.tagName === 'INPUT' || !isVisible(e.target) ||
            // No need wave
            !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
              return;
            }
            showWave();
          };
          // Bind events
          node.addEventListener('click', onClick, true);
        });
      }, {
        immediate: true,
        flush: 'post'
      });
    });
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
      clear();
    });
    return () => {
      var _a;
      // ============================== Render ==============================
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      return children;
    };
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-types@3.0.2_vue@3.2.13/node_modules/vue-types/dist/vue-types.m.js
function e(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vue_types_m_t(t, n, r) {
  return n && e(t.prototype, n), r && e(t, r), t;
}
function n() {
  return (n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function i(e, t) {
  if (null == e) return {};
  var n,
    r,
    i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
  return i;
}
function o(e) {
  return 1 == (null != (t = e) && "object" == typeof t && !1 === Array.isArray(t)) && "[object Object]" === Object.prototype.toString.call(e);
  var t;
}
var u = Object.prototype,
  vue_types_m_a = u.toString,
  f = u.hasOwnProperty,
  vue_types_m_c = /^\s*function (\w+)/;
function vue_types_m_l(e) {
  var t,
    n = null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : e;
  if (n) {
    var r = n.toString().match(vue_types_m_c);
    return r ? r[1] : "";
  }
  return "";
}
var vue_types_m_s = function (e) {
    var t, n;
    return !1 !== o(e) && "function" == typeof (t = e.constructor) && !1 !== o(n = t.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf");
  },
  vue_types_m_v = function (e) {
    return e;
  },
  y = vue_types_m_v;
if (false) { var p; }
var d = function (e, t) {
    return f.call(e, t);
  },
  vue_types_m_h = Number.isInteger || function (e) {
    return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
  },
  b = Array.isArray || function (e) {
    return "[object Array]" === vue_types_m_a.call(e);
  },
  vue_types_m_O = function (e) {
    return "[object Function]" === vue_types_m_a.call(e);
  },
  g = function (e) {
    return vue_types_m_s(e) && d(e, "_vueTypes_name");
  },
  vue_types_m_m = function (e) {
    return vue_types_m_s(e) && (d(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function (t) {
      return d(e, t);
    }));
  };
function j(e, t) {
  return Object.defineProperty(e.bind(t), "__original", {
    value: e
  });
}
function _(e, t, n) {
  var r;
  void 0 === n && (n = !1);
  var i = !0,
    o = "";
  r = vue_types_m_s(e) ? e : {
    type: e
  };
  var u = g(r) ? r._vueTypes_name + " - " : "";
  if (vue_types_m_m(r) && null !== r.type) {
    if (void 0 === r.type || !0 === r.type) return i;
    if (!r.required && void 0 === t) return i;
    b(r.type) ? (i = r.type.some(function (e) {
      return !0 === _(e, t, !0);
    }), o = r.type.map(function (e) {
      return vue_types_m_l(e);
    }).join(" or ")) : i = "Array" === (o = vue_types_m_l(r)) ? b(t) : "Object" === o ? vue_types_m_s(t) : "String" === o || "Number" === o || "Boolean" === o || "Function" === o ? function (e) {
      if (null == e) return "";
      var t = e.constructor.toString().match(vue_types_m_c);
      return t ? t[1] : "";
    }(t) === o : t instanceof r.type;
  }
  if (!i) {
    var a = u + 'value "' + t + '" should be of type "' + o + '"';
    return !1 === n ? (y(a), !1) : a;
  }
  if (d(r, "validator") && vue_types_m_O(r.validator)) {
    var f = y,
      v = [];
    if (y = function (e) {
      v.push(e);
    }, i = r.validator(t), y = f, !i) {
      var p = (v.length > 1 ? "* " : "") + v.join("\n* ");
      return v.length = 0, !1 === n ? (y(p), i) : p;
    }
  }
  return i;
}
function vue_types_m_T(e, t) {
  var n = Object.defineProperties(t, {
      _vueTypes_name: {
        value: e,
        writable: !0
      },
      isRequired: {
        get: function () {
          return this.required = !0, this;
        }
      },
      def: {
        value: function (e) {
          return void 0 !== e || this.default ? vue_types_m_O(e) || !0 === _(this, e, !0) ? (this.default = b(e) ? function () {
            return [].concat(e);
          } : vue_types_m_s(e) ? function () {
            return Object.assign({}, e);
          } : e, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e + '"'), this) : this;
        }
      }
    }),
    r = n.validator;
  return vue_types_m_O(r) && (n.validator = j(r, n)), n;
}
function w(e, t) {
  var n = vue_types_m_T(e, t);
  return Object.defineProperty(n, "validate", {
    value: function (e) {
      return vue_types_m_O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e, this), this;
    }
  });
}
function k(e, t, n) {
  var r,
    o,
    u = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function (e) {
      o[e] = Object.getOwnPropertyDescriptor(r, e);
    }), Object.defineProperties({}, o));
  if (u._vueTypes_name = e, !vue_types_m_s(n)) return u;
  var a,
    f,
    c = n.validator,
    l = i(n, ["validator"]);
  if (vue_types_m_O(c)) {
    var v = u.validator;
    v && (v = null !== (f = (a = v).__original) && void 0 !== f ? f : a), u.validator = j(v ? function (e) {
      return v.call(this, e) && c.call(this, e);
    } : c, u);
  }
  return Object.assign(u, l);
}
function vue_types_m_P(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var x = function () {
    return w("any", {});
  },
  vue_types_m_A = function () {
    return w("function", {
      type: Function
    });
  },
  E = function () {
    return w("boolean", {
      type: Boolean
    });
  },
  vue_types_m_N = function () {
    return w("string", {
      type: String
    });
  },
  vue_types_m_q = function () {
    return w("number", {
      type: Number
    });
  },
  vue_types_m_S = function () {
    return w("array", {
      type: Array
    });
  },
  vue_types_m_V = function () {
    return w("object", {
      type: Object
    });
  },
  vue_types_m_F = function () {
    return vue_types_m_T("integer", {
      type: Number,
      validator: function (e) {
        return vue_types_m_h(e);
      }
    });
  },
  vue_types_m_D = function () {
    return vue_types_m_T("symbol", {
      validator: function (e) {
        return "symbol" == typeof e;
      }
    });
  };
function vue_types_m_L(e, t) {
  if (void 0 === t && (t = "custom validation failed"), "function" != typeof e) throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return vue_types_m_T(e.name || "<<anonymous function>>", {
    validator: function (n) {
      var r = e(n);
      return r || y(this._vueTypes_name + " - " + t), r;
    }
  });
}
function Y(e) {
  if (!b(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
    n = e.reduce(function (e, t) {
      if (null != t) {
        var n = t.constructor;
        -1 === e.indexOf(n) && e.push(n);
      }
      return e;
    }, []);
  return vue_types_m_T("oneOf", {
    type: n.length > 0 ? n : void 0,
    validator: function (n) {
      var r = -1 !== e.indexOf(n);
      return r || y(t), r;
    }
  });
}
function vue_types_m_B(e) {
  if (!b(e)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var i = e[r];
    if (vue_types_m_m(i)) {
      if (g(i) && "oneOf" === i._vueTypes_name) {
        n = n.concat(i.type);
        continue;
      }
      if (vue_types_m_O(i.validator) && (t = !0), !0 !== i.type && i.type) {
        n = n.concat(i.type);
        continue;
      }
    }
    n.push(i);
  }
  return n = n.filter(function (e, t) {
    return n.indexOf(e) === t;
  }), vue_types_m_T("oneOfType", t ? {
    type: n,
    validator: function (t) {
      var n = [],
        r = e.some(function (e) {
          var r = _(g(e) && "oneOf" === e._vueTypes_name ? e.type || null : e, t, !0);
          return "string" == typeof r && n.push(r), !0 === r;
        });
      return r || y("oneOfType - provided value does not match any of the " + n.length + " passed-in validators:\n" + vue_types_m_P(n.join("\n"))), r;
    }
  } : {
    type: n
  });
}
function vue_types_m_I(e) {
  return vue_types_m_T("arrayOf", {
    type: Array,
    validator: function (t) {
      var n,
        r = t.every(function (t) {
          return !0 === (n = _(e, t, !0));
        });
      return r || y("arrayOf - value validation error:\n" + vue_types_m_P(n)), r;
    }
  });
}
function J(e) {
  return vue_types_m_T("instanceOf", {
    type: e
  });
}
function vue_types_m_M(e) {
  return vue_types_m_T("objectOf", {
    type: Object,
    validator: function (t) {
      var n,
        r = Object.keys(t).every(function (r) {
          return !0 === (n = _(e, t[r], !0));
        });
      return r || y("objectOf - value validation error:\n" + vue_types_m_P(n)), r;
    }
  });
}
function vue_types_m_R(e) {
  var t = Object.keys(e),
    n = t.filter(function (t) {
      var n;
      return !!(null === (n = e[t]) || void 0 === n ? void 0 : n.required);
    }),
    r = vue_types_m_T("shape", {
      type: Object,
      validator: function (r) {
        var i = this;
        if (!vue_types_m_s(r)) return !1;
        var o = Object.keys(r);
        if (n.length > 0 && n.some(function (e) {
          return -1 === o.indexOf(e);
        })) {
          var u = n.filter(function (e) {
            return -1 === o.indexOf(e);
          });
          return y(1 === u.length ? 'shape - required property "' + u[0] + '" is not defined.' : 'shape - required properties "' + u.join('", "') + '" are not defined.'), !1;
        }
        return o.every(function (n) {
          if (-1 === t.indexOf(n)) return !0 === i._vueTypes_isLoose || (y('shape - shape definition does not include a "' + n + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
          var o = _(e[n], r[n], !0);
          return "string" == typeof o && y('shape - "' + n + '" property validation error:\n ' + vue_types_m_P(o)), !0 === o;
        });
      }
    });
  return Object.defineProperty(r, "_vueTypes_isLoose", {
    writable: !0,
    value: !1
  }), Object.defineProperty(r, "loose", {
    get: function () {
      return this._vueTypes_isLoose = !0, this;
    }
  }), r;
}
var $ = function () {
  function e() {}
  return e.extend = function (e) {
    var t = this;
    if (b(e)) return e.forEach(function (e) {
      return t.extend(e);
    }), this;
    var n = e.name,
      r = e.validate,
      o = void 0 !== r && r,
      u = e.getter,
      a = void 0 !== u && u,
      f = i(e, ["name", "validate", "getter"]);
    if (d(this, n)) throw new TypeError('[VueTypes error]: Type "' + n + '" already defined');
    var c,
      l = f.type;
    return g(l) ? (delete f.type, Object.defineProperty(this, n, a ? {
      get: function () {
        return k(n, l, f);
      }
    } : {
      value: function () {
        var e,
          t = k(n, l, f);
        return t.validator && (t.validator = (e = t.validator).bind.apply(e, [t].concat([].slice.call(arguments)))), t;
      }
    })) : (c = a ? {
      get: function () {
        var e = Object.assign({}, f);
        return o ? w(n, e) : vue_types_m_T(n, e);
      },
      enumerable: !0
    } : {
      value: function () {
        var e,
          t,
          r = Object.assign({}, f);
        return e = o ? w(n, r) : vue_types_m_T(n, r), r.validator && (e.validator = (t = r.validator).bind.apply(t, [e].concat([].slice.call(arguments)))), e;
      },
      enumerable: !0
    }, Object.defineProperty(this, n, c));
  }, vue_types_m_t(e, null, [{
    key: "any",
    get: function () {
      return x();
    }
  }, {
    key: "func",
    get: function () {
      return vue_types_m_A().def(this.defaults.func);
    }
  }, {
    key: "bool",
    get: function () {
      return E().def(this.defaults.bool);
    }
  }, {
    key: "string",
    get: function () {
      return vue_types_m_N().def(this.defaults.string);
    }
  }, {
    key: "number",
    get: function () {
      return vue_types_m_q().def(this.defaults.number);
    }
  }, {
    key: "array",
    get: function () {
      return vue_types_m_S().def(this.defaults.array);
    }
  }, {
    key: "object",
    get: function () {
      return vue_types_m_V().def(this.defaults.object);
    }
  }, {
    key: "integer",
    get: function () {
      return vue_types_m_F().def(this.defaults.integer);
    }
  }, {
    key: "symbol",
    get: function () {
      return vue_types_m_D();
    }
  }]), e;
}();
function vue_types_m_z(e) {
  var i;
  return void 0 === e && (e = {
    func: function () {},
    bool: !0,
    string: "",
    number: 0,
    array: function () {
      return [];
    },
    object: function () {
      return {};
    },
    integer: 0
  }), (i = function (i) {
    function o() {
      return i.apply(this, arguments) || this;
    }
    return r(o, i), vue_types_m_t(o, null, [{
      key: "sensibleDefaults",
      get: function () {
        return n({}, this.defaults);
      },
      set: function (t) {
        this.defaults = !1 !== t ? n({}, !0 !== t ? t : e) : {};
      }
    }]), o;
  }($)).defaults = n({}, e), i;
}
$.defaults = {}, $.custom = vue_types_m_L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = vue_types_m_B, $.arrayOf = vue_types_m_I, $.objectOf = vue_types_m_M, $.shape = vue_types_m_R, $.utils = {
  validate: function (e, t) {
    return !0 === _(t, e, !0);
  },
  toType: function (e, t, n) {
    return void 0 === n && (n = !1), n ? w(e, t) : vue_types_m_T(e, t);
  }
};
var vue_types_m_C = function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return r(t, e), t;
}(vue_types_m_z());
/* harmony default export */ var vue_types_m = ((/* unused pure expression or super */ null && (vue_types_m_C)));

;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/vue-types/index.js

const PropTypes = vue_types_m_z({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined
});
PropTypes.extend([{
  name: 'looseBool',
  getter: true,
  type: Boolean,
  default: undefined
}, {
  name: 'style',
  getter: true,
  type: [String, Object],
  default: undefined
}, {
  name: 'VueNode',
  getter: true,
  type: null
}]);
function withUndefined(type) {
  type.default = undefined;
  return type;
}
/* harmony default export */ var vue_types = (PropTypes);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/buttonTypes.js


function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: 'button'
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  ghost: {
    type: Boolean,
    default: undefined
  },
  block: {
    type: Boolean,
    default: undefined
  },
  danger: {
    type: Boolean,
    default: undefined
  },
  icon: vue_types.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
});
/* harmony default export */ var buttonTypes = (buttonProps);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/props-util/initDefaultProps.js

const initDefaultProps = (types, defaultProps) => {
  const propTypes = extends_extends({}, types);
  Object.keys(defaultProps).forEach(k => {
    const prop = propTypes[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k];
      } else if (prop.def) {
        prop.def(defaultProps[k]);
      } else {
        propTypes[k] = {
          type: prop,
          default: defaultProps[k]
        };
      }
    } else {
      throw new Error(`not have ${k} prop`);
    }
  });
  return propTypes;
};
/* harmony default export */ var props_util_initDefaultProps = (initDefaultProps);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-util/warning.js
/* eslint-disable no-console */
let warned = {};
function warning_warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning_warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ var vc_util_warning = (warningOnce);
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/vc-util/devWarning.js


/* harmony default export */ var devWarning = ((valid, component, message) => {
  vc_util_warning(valid, `[ant-design-vue: ${component}] ${message}`);
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
// This icon file is generated automatically.
var LoadingOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "0 0 1024 1024",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      }
    }]
  },
  "name": "loading",
  "theme": "outlined"
};
/* harmony default export */ var asn_LoadingOutlined = (LoadingOutlined);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/components/Context.js

var contextKey = Symbol('iconContext');
var useProvideIconContext = function useProvideIconContext(props) {
  provide(contextKey, props);
  return props;
};
var useInjectIconContext = function useInjectIconContext() {
  return (0,runtime_core_esm_bundler/* inject */.WQ)(contextKey, {
    prefixCls: (0,reactivity_esm_bundler/* ref */.KR)('anticon'),
    rootClassName: (0,reactivity_esm_bundler/* ref */.KR)(''),
    csp: (0,reactivity_esm_bundler/* ref */.KR)()
  });
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/dynamicCSS.js
function dynamicCSS_canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function dynamicCSS_contains(root, n) {
  if (!root) {
    return false;
  } // Use native if support

  if (root.contains) {
    return root.contains(n);
  }
  return false;
}
var dynamicCSS_APPEND_ORDER = 'data-vc-order';
var dynamicCSS_MARK_KEY = "vc-icon-key";
var dynamicCSS_containerCache = new Map();
function dynamicCSS_getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return dynamicCSS_MARK_KEY;
}
function dynamicCSS_getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function dynamicCSS_getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}
/**
 * Find style which inject by rc-util
 */

function dynamicCSS_findStyles(container) {
  return Array.from((dynamicCSS_containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function dynamicCSS_injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!dynamicCSS_canUseDom()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(dynamicCSS_APPEND_ORDER, dynamicCSS_getOrder(prepend));
  if (csp && csp.nonce) {
    styleNode.nonce = csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = dynamicCSS_getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      var existStyle = dynamicCSS_findStyles(container).filter(function (node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(dynamicCSS_APPEND_ORDER));
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    } // Use `insertBefore` as `prepend`

    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function dynamicCSS_findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = dynamicCSS_getContainer(option);
  return dynamicCSS_findStyles(container).find(function (node) {
    return node.getAttribute(dynamicCSS_getMark(option)) === key;
  });
}
function dynamicCSS_removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = dynamicCSS_findExistNode(key, option);
  if (existNode) {
    var container = dynamicCSS_getContainer(option);
    container.removeChild(existNode);
  }
}
/**
 * qiankun will inject `appendChild` to insert into other
 */

function dynamicCSS_syncRealContainer(container, option) {
  var cachedRealContainer = dynamicCSS_containerCache.get(container); // Find real container when not cached or cached container removed

  if (!cachedRealContainer || !dynamicCSS_contains(document, cachedRealContainer)) {
    var placeholderStyle = dynamicCSS_injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    dynamicCSS_containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
/**
 * manually clear container cache to avoid global cache in unit testes
 */

function dynamicCSS_clearContainerCache() {
  dynamicCSS_containerCache.clear();
}
function dynamicCSS_updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = dynamicCSS_getContainer(option); // Sync real parent

  dynamicCSS_syncRealContainer(container, option);
  var existNode = dynamicCSS_findExistNode(key, option);
  if (existNode) {
    if (option.csp && option.csp.nonce && existNode.nonce !== option.csp.nonce) {
      existNode.nonce = option.csp.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = dynamicCSS_injectCSS(css, option);
  newNode.setAttribute(dynamicCSS_getMark(option), key);
  return newNode;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/utils.js
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      utils_defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function utils_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}




function warn(valid, message) {
  // Support uglify
  if (false) {}
}
function utils_warning(valid, message) {
  warn(valid, "[@ant-design/icons-vue] ".concat(message));
}
function camelCase(input) {
  return input.replace(/-(.)/g, function (_match, g) {
    return g.toUpperCase();
  });
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc["class"];
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function utils_generate(node, key, rootProps) {
  if (!rootProps) {
    return (0,runtime_core_esm_bundler.h)(node.tag, _objectSpread({
      key: key
    }, node.attrs), (node.children || []).map(function (child, index) {
      return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return (0,runtime_core_esm_bundler.h)(node.tag, _objectSpread({
    key: key
  }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
    return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
function getRoot(ele) {
  return ele && ele.getRootNode && ele.getRootNode();
}
/**
 * Check if is in shadowRoot
 */

function inShadow(ele) {
  if (!dynamicCSS_canUseDom()) {
    return false;
  }
  return getRoot(ele) instanceof ShadowRoot;
}
/**
 * Return shadowRoot if possible
 */

function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}
var useInsertStyles = function useInsertStyles() {
  var _useInjectIconContext = useInjectIconContext(),
    prefixCls = _useInjectIconContext.prefixCls,
    csp = _useInjectIconContext.csp;
  var instance = (0,runtime_core_esm_bundler/* getCurrentInstance */.nI)();
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls.value);
  }
  (0,runtime_core_esm_bundler/* nextTick */.dY)(function () {
    if (!dynamicCSS_canUseDom()) {
      return;
    }
    var ele = instance.vnode.el;
    var shadowRoot = getShadowRoot(ele);
    dynamicCSS_updateCSS(mergedStyleStr, '@ant-design-vue-icons', {
      prepend: true,
      csp: csp.value,
      attachTo: shadowRoot
    });
  });
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/components/IconBase.js
var _excluded = ["icon", "primaryColor", "secondaryColor"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function IconBase_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      IconBase_defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function IconBase_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}


var twoToneColorPalette = (0,reactivity_esm_bundler/* reactive */.Kh)({
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
});
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return IconBase_objectSpread({}, twoToneColorPalette);
}
var IconBase = function IconBase(props, context) {
  var _props$context$attrs = IconBase_objectSpread({}, props, context.attrs),
    icon = _props$context$attrs.icon,
    primaryColor = _props$context$attrs.primaryColor,
    secondaryColor = _props$context$attrs.secondaryColor,
    restProps = _objectWithoutProperties(_props$context$attrs, _excluded);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = IconBase_objectSpread({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return utils_generate(target.icon, "svg-".concat(target.name), IconBase_objectSpread({}, restProps, {
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  })); // },
};
IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ var components_IconBase = (IconBase);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/components/twoTonePrimaryColor.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/components/InsertStyle.js


var InsertStyles = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'InsertStyles',
  setup: function setup() {
    useInsertStyles();
    return function () {
      return null;
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/components/AntdIcon.js
var AntdIcon_excluded = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];

function AntdIcon_slicedToArray(arr, i) {
  return AntdIcon_arrayWithHoles(arr) || AntdIcon_iterableToArrayLimit(arr, i) || AntdIcon_unsupportedIterableToArray(arr, i) || AntdIcon_nonIterableRest();
}
function AntdIcon_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function AntdIcon_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return AntdIcon_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AntdIcon_arrayLikeToArray(o, minLen);
}
function AntdIcon_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function AntdIcon_iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function AntdIcon_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function AntdIcon_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      AntdIcon_defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function AntdIcon_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function AntdIcon_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = AntdIcon_objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function AntdIcon_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}





 // Initial setting

setTwoToneColor(blue.primary);
var Icon = function Icon(props, context) {
  var _classObj;
  var _props$context$attrs = AntdIcon_objectSpread({}, props, context.attrs),
    cls = _props$context$attrs["class"],
    icon = _props$context$attrs.icon,
    spin = _props$context$attrs.spin,
    rotate = _props$context$attrs.rotate,
    tabindex = _props$context$attrs.tabindex,
    twoToneColor = _props$context$attrs.twoToneColor,
    onClick = _props$context$attrs.onClick,
    restProps = AntdIcon_objectWithoutProperties(_props$context$attrs, AntdIcon_excluded);
  var _useInjectIconContext = useInjectIconContext(),
    prefixCls = _useInjectIconContext.prefixCls,
    rootClassName = _useInjectIconContext.rootClassName;
  var classObj = (_classObj = {}, AntdIcon_defineProperty(_classObj, rootClassName.value, !!rootClassName.value), AntdIcon_defineProperty(_classObj, prefixCls.value, true), AntdIcon_defineProperty(_classObj, "".concat(prefixCls.value, "-").concat(icon.name), Boolean(icon.name)), AntdIcon_defineProperty(_classObj, "".concat(prefixCls.value, "-spin"), !!spin || icon.name === 'loading'), _classObj);
  var iconTabIndex = tabindex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = AntdIcon_slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return (0,runtime_core_esm_bundler/* createVNode */.bF)("span", AntdIcon_objectSpread({
    "role": "img",
    "aria-label": icon.name
  }, restProps, {
    "onClick": onClick,
    "class": [classObj, cls],
    "tabindex": iconTabIndex
  }), [(0,runtime_core_esm_bundler/* createVNode */.bF)(components_IconBase, {
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null), (0,runtime_core_esm_bundler/* createVNode */.bF)(InsertStyles, null, null)]);
};
Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var AntdIcon = (Icon);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.2.13/node_modules/@ant-design/icons-vue/es/icons/LoadingOutlined.js

function LoadingOutlined_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      LoadingOutlined_defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function LoadingOutlined_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY


var LoadingOutlined_LoadingOutlined = function LoadingOutlined(props, context) {
  var p = LoadingOutlined_objectSpread({}, props, context.attrs);
  return (0,runtime_core_esm_bundler/* createVNode */.bF)(AntdIcon, LoadingOutlined_objectSpread({}, p, {
    "icon": asn_LoadingOutlined
  }), null);
};
LoadingOutlined_LoadingOutlined.displayName = 'LoadingOutlined';
LoadingOutlined_LoadingOutlined.inheritAttrs = false;
/* harmony default export */ var icons_LoadingOutlined = (LoadingOutlined_LoadingOutlined);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/transition.js



const SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
const getTransitionDirection = placement => {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return `slide-down`;
  }
  return `slide-up`;
};
const getTransitionProps = function (transitionName) {
  let opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const transitionProps = transitionName ? _extends({
    name: transitionName,
    appear: true,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName}-enter ${transitionName}-enter-prepare ${transitionName}-enter-start`,
    enterActiveClass: `${transitionName}-enter ${transitionName}-enter-prepare`,
    enterToClass: `${transitionName}-enter ${transitionName}-enter-active`,
    leaveFromClass: ` ${transitionName}-leave`,
    leaveActiveClass: `${transitionName}-leave ${transitionName}-leave-active`,
    leaveToClass: `${transitionName}-leave ${transitionName}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionGroupProps = function (transitionName) {
  let opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const transitionProps = transitionName ? _extends({
    name: transitionName,
    appear: true,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${transitionName}`,
    appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName}-appear ${transitionName}-enter ${transitionName}-appear-prepare ${transitionName}-enter-prepare`,
    enterActiveClass: `${transitionName}`,
    enterToClass: `${transitionName}-enter ${transitionName}-appear ${transitionName}-appear-active ${transitionName}-enter-active`,
    leaveActiveClass: `${transitionName} ${transitionName}-leave`,
    leaveToClass: `${transitionName}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
// ================== Collapse Motion ==================
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = node => ({
  height: `${node.scrollHeight}px`,
  opacity: 1
});
const getCurrentHeight = node => ({
  height: `${node.offsetHeight}px`
});
const collapseMotion = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant-motion-collapse';
  let style = arguments.length > 1 ? arguments[1] : undefined;
  let className = arguments.length > 2 ? arguments[2] : undefined;
  return {
    name,
    appear: true,
    css: true,
    onBeforeEnter: node => {
      className.value = name;
      style.value = getCollapsedHeight(node);
    },
    onEnter: node => {
      nextTick(() => {
        style.value = getRealHeight(node);
      });
    },
    onAfterEnter: () => {
      className.value = '';
      style.value = {};
    },
    onBeforeLeave: node => {
      className.value = name;
      style.value = getCurrentHeight(node);
    },
    onLeave: node => {
      setTimeout(() => {
        style.value = getCollapsedHeight(node);
      });
    },
    onAfterLeave: () => {
      className.value = '';
      style.value = {};
    }
  };
};
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

/* harmony default export */ var transition = (runtime_dom_esm_bundler/* Transition */.eB);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/LoadingIcon.js




const getCollapsedWidth = node => {
  if (node) {
    node.style.width = '0px';
    node.style.opacity = '0';
    node.style.transform = 'scale(0)';
  }
};
const getRealWidth = node => {
  (0,runtime_core_esm_bundler/* nextTick */.dY)(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';
    }
  });
};
const resetStyle = node => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
/* harmony default export */ var LoadingIcon = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  name: 'LoadingIcon',
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(props) {
    return () => {
      const {
        existIcon,
        prefixCls,
        loading
      } = props;
      if (existIcon) {
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
          "class": `${prefixCls}-loading-icon`
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(icons_LoadingOutlined, null, null)]);
      }
      const visible = !!loading;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)(transition, {
        "name": `${prefixCls}-loading-icon-motion`,
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": node => {
          setTimeout(() => {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: () => [visible ? (0,runtime_core_esm_bundler/* createVNode */.bF)("span", {
          "class": `${prefixCls}-loading-icon`
        }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(icons_LoadingOutlined, null, null)]) : null]
      });
    };
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/style/group.js
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    '&:not(:last-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }
    },
    '&:not(:first-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = token => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [{
      position: 'relative',
      display: 'inline-flex',
      // Border
      [`> span, > ${componentCls}`]: {
        '&:not(:last-child)': {
          [`&, & > ${componentCls}`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        '&:not(:first-child)': {
          marginInlineStart: -lineWidth,
          [`&, & > ${componentCls}`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      },
      [componentCls]: {
        position: 'relative',
        zIndex: 1,
        [`&:hover,
          &:focus,
          &:active`]: {
          zIndex: 2
        },
        '&[disabled]': {
          zIndex: 0
        }
      },
      [`${componentCls}-icon-only`]: {
        fontSize
      }
    },
    // Border Color
    genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover), genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)]
  };
};
/* harmony default export */ var style_group = (genGroupStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/style/compact-item.js

// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => `&:${n} ${childCombinator}`).join(',');
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    '&-item': extends_extends(extends_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : '';
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: extends_extends(extends_extends({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/style/compact-item-vertical.js

function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: -token.lineWidth
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: extends_extends(extends_extends({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/style/index.js






// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight: 400,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      lineHeight: token.lineHeight,
      color: token.colorText,
      '> span': {
        display: 'inline-block'
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': extends_extends({}, genFocusStyle(token)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: 'none'
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: 'inline-block',
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      '&-compact-vertical-item': {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: 'inline-block',
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  '&:not(:disabled)': {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
// =============================== Type ===============================
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: extends_extends(extends_extends({
    color: textColor || undefined,
    backgroundColor: 'transparent',
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(extends_extends({
    backgroundColor: 'transparent'
  }, hoverStyle), extends_extends({
    backgroundColor: 'transparent'
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  '&:disabled': extends_extends({}, genDisabledStyle(token))
});
const genSolidButtonStyle = token => extends_extends({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = token => ({
  '&:disabled': {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// Type: Default
const genDefaultButtonStyle = token => extends_extends(extends_extends(extends_extends(extends_extends(extends_extends({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: extends_extends(extends_extends(extends_extends({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
// Type: Primary
const genPrimaryButtonStyle = token => extends_extends(extends_extends(extends_extends(extends_extends(extends_extends({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: extends_extends(extends_extends(extends_extends({
    backgroundColor: token.colorError,
    boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
// Type: Dashed
const genDashedButtonStyle = token => extends_extends(extends_extends({}, genDefaultButtonStyle(token)), {
  borderStyle: 'dashed'
});
// Type: Link
const genLinkButtonStyle = token => extends_extends(extends_extends(extends_extends({
  color: token.colorLink
}, genHoverActiveButtonStyle({
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: extends_extends(extends_extends({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
// Type: Text
const genTextButtonStyle = token => extends_extends(extends_extends(extends_extends({}, genHoverActiveButtonStyle({
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: extends_extends(extends_extends({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
// Href and Disabled
const genDisabledButtonStyle = token => extends_extends(extends_extends({}, genDisabledStyle(token)), {
  [`&${token.componentCls}:hover`]: extends_extends({}, genDisabledStyle(token))
});
const genTypeButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-disabled`]: genDisabledButtonStyle(token)
  };
};
// =============================== Size ===============================
const genSizeButtonStyle = function (token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
  // Size
  {
    [`${componentCls}${sizePrefixCls}`]: {
      fontSize,
      height: controlHeight,
      padding: `${paddingVertical}px ${paddingHorizontal}px`,
      borderRadius,
      [`&${iconOnlyCls}`]: {
        width: controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        [`&${componentCls}-round`]: {
          width: 'auto'
        },
        '> span': {
          transform: 'scale(1.143)' // 14px -> 16px
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: token.opacityLoading,
        cursor: 'default'
      },
      [`${componentCls}-loading-icon`]: {
        transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
      },
      [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
        marginInlineEnd: token.marginXS
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
  }, {
    [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = token => {
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = merge(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var button_style = (genComponentStyleHook('Button', token => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = merge(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeSmallButtonStyle(buttonToken), genSizeBaseButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Group (type, ghost, danger, disabled, loading)
  genTypeButtonStyle(buttonToken),
  // Button Group
  style_group(buttonToken),
  // Space Compact
  genCompactItemStyle(token, {
    focus: false
  }), genCompactItemVerticalStyle(token)];
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/_util/createContext.js


function createContext(defaultValue) {
  const contextKey = Symbol('contextKey');
  const useProvide = (props, newProps) => {
    const mergedProps = (0,reactivity_esm_bundler/* reactive */.Kh)({});
    (0,runtime_core_esm_bundler/* provide */.Gt)(contextKey, mergedProps);
    (0,runtime_core_esm_bundler/* watchEffect */.nT)(() => {
      extends_extends(mergedProps, props, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return (0,runtime_core_esm_bundler/* inject */.WQ)(contextKey, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
/* harmony default export */ var _util_createContext = (createContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/button-group.js







const buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
});
const GroupSizeContext = _util_createContext();
/* harmony default export */ var button_group = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  name: 'AButtonGroup',
  props: buttonGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject('btn-group', props);
    const [,, hashId] = useToken();
    GroupSizeContext.useProvide((0,reactivity_esm_bundler/* reactive */.Kh)({
      size: (0,reactivity_esm_bundler/* computed */.EW)(() => props.size)
    }));
    const classes = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const {
        size
      } = props;
      let sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        case 'middle':
        case undefined:
          break;
        default:
          // eslint-disable-next-line no-console
          devWarning(!size, 'Button.Group', 'Invalid prop `size`.');
      }
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-${sizeCls}`]: sizeCls,
        [`${prefixCls.value}-rtl`]: direction.value === 'rtl',
        [hashId.value]: true
      };
    });
    return () => {
      var _a;
      return (0,runtime_core_esm_bundler/* createVNode */.bF)("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/space/style/compact.js
const genSpaceCompactStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-block': {
        display: 'flex',
        width: '100%'
      },
      '&-vertical': {
        flexDirection: 'column'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var compact = (genSpaceCompactStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/space/style/index.js


const genSpaceStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center'
        },
        '&-start': {
          alignItems: 'flex-start'
        },
        '&-end': {
          alignItems: 'flex-end'
        },
        '&-baseline': {
          alignItems: 'baseline'
        }
      },
      [`${componentCls}-item`]: {
        '&:empty': {
          display: 'none'
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var space_style = (genComponentStyleHook('Space', token => [genSpaceStyle(token), compact(token)]));
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || _isPrototype_objectProto;
  return value === proto;
}
/* harmony default export */ var _isPrototype = (isPrototype);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ var _overArg = (overArg);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);
/* harmony default export */ var _nativeKeys = (nativeKeys);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ var _baseKeys = (baseKeys);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction_isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ var lodash_es_isFunction = (isFunction_isFunction);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];
/* harmony default export */ var _coreJsData = (coreJsData);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ var _isMasked = (isMasked);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ var _toSource = (toSource);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
  _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}
/* harmony default export */ var _baseIsNative = (baseIsNative);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function _getValue_getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ var _getValue = (_getValue_getValue);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}
/* harmony default export */ var _getNative = (getNative);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');
/* harmony default export */ var _DataView = (DataView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var _Map_Map = _getNative(_root, 'Map');
/* harmony default export */ var _Map = (_Map_Map);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = _getNative(_root, 'Promise');
/* harmony default export */ var _Promise = (_Promise_Promise);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var _Set_Set = _getNative(_root, 'Set');
/* harmony default export */ var _Set = (_Set_Set);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var _WeakMap_WeakMap = _getNative(_root, 'WeakMap');
/* harmony default export */ var _WeakMap = (_WeakMap_WeakMap);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
  mapCtorString = _toSource(_Map),
  promiseCtorString = _toSource(_Promise),
  setCtorString = _toSource(_Set),
  weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag || _Map && getTag(new _Map()) != mapTag || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag || _WeakMap && getTag(new _WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = _baseGetTag(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? _toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ var _getTag = (getTag);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}
/* harmony default export */ var _baseIsArguments = (baseIsArguments);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ var lodash_es_isArguments = (isArguments);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray_isArray = Array.isArray;
/* harmony default export */ var lodash_es_isArray = (isArray_isArray);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ var lodash_es_isLength = (isLength);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}
/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ var lodash_es_stubFalse = (stubFalse);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || lodash_es_stubFalse;
/* harmony default export */ var lodash_es_isBuffer = (isBuffer);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  _baseIsTypedArray_funcTag = '[object Function]',
  _baseIsTypedArray_mapTag = '[object Map]',
  numberTag = '[object Number]',
  _baseIsTypedArray_objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  _baseIsTypedArray_setTag = '[object Set]',
  stringTag = '[object String]',
  _baseIsTypedArray_weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  _baseIsTypedArray_dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[_baseIsTypedArray_dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] = typedArrayTags[_baseIsTypedArray_mapTag] = typedArrayTags[numberTag] = typedArrayTags[_baseIsTypedArray_objectTag] = typedArrayTags[regexpTag] = typedArrayTags[_baseIsTypedArray_setTag] = typedArrayTags[stringTag] = typedArrayTags[_baseIsTypedArray_weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) && lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}
/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ var _baseUnary = (baseUnary);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js


/** Detect free variable `exports`. */
var _nodeUtil_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _nodeUtil_freeModule = _nodeUtil_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _nodeUtil_moduleExports = _nodeUtil_freeModule && _nodeUtil_freeModule.exports === _nodeUtil_freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = _nodeUtil_moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = _nodeUtil_freeModule && _nodeUtil_freeModule.require && _nodeUtil_freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ var _nodeUtil = (nodeUtil);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);
;// CONCATENATED MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js









/** `Object#toString` result references. */
var isEmpty_mapTag = '[object Map]',
  isEmpty_setTag = '[object Set]';

/** Used for built-in method references. */
var isEmpty_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isEmpty_hasOwnProperty = isEmpty_objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (lodash_es_isArrayLike(value) && (lodash_es_isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || lodash_es_isBuffer(value) || lodash_es_isTypedArray(value) || lodash_es_isArguments(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == isEmpty_mapTag || tag == isEmpty_setTag) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (isEmpty_hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ var lodash_es_isEmpty = (isEmpty);
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/space/Compact.js











const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: vue_types.oneOf(tuple('horizontal', 'vertical')).def('horizontal'),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
});
const SpaceCompactItemContext = _util_createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = SpaceCompactItemContext.useInject();
  const compactItemClassnames = (0,reactivity_esm_bundler/* computed */.EW)(() => {
    if (!compactItemContext || lodash_es_isEmpty(compactItemContext)) return '';
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return _util_classNames({
      [`${prefixCls.value}-compact${separator}item`]: true,
      [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === 'rtl'
    });
  });
  return {
    compactSize: (0,reactivity_esm_bundler/* computed */.EW)(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize),
    compactDirection: (0,reactivity_esm_bundler/* computed */.EW)(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection),
    compactItemClassnames
  };
};
const NoCompactStyle = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'NoCompactStyle',
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    SpaceCompactItemContext.useProvide(null);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: vue_types.oneOf(tuple('horizontal', 'vertical')).def('horizontal'),
  align: vue_types.oneOf(tuple('start', 'end', 'center', 'baseline')),
  block: {
    type: Boolean,
    default: undefined
  }
});
const CompactItem = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'CompactItem',
  props: spaceCompactItemProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    SpaceCompactItemContext.useProvide(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const Compact = (0,runtime_core_esm_bundler/* defineComponent */.pM)({
  name: 'ASpaceCompact',
  inheritAttrs: false,
  props: spaceCompactProps(),
  setup(props, _ref3) {
    let {
      attrs,
      slots
    } = _ref3;
    const {
      prefixCls,
      direction: directionConfig
    } = useConfigInject('space-compact', props);
    const compactItemContext = SpaceCompactItemContext.useInject();
    const [wrapSSR, hashId] = space_style(prefixCls);
    const clx = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      return _util_classNames(prefixCls.value, hashId.value, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === 'rtl',
        [`${prefixCls.value}-block`]: props.block,
        [`${prefixCls.value}-vertical`]: props.direction === 'vertical'
      });
    });
    return () => {
      var _a;
      const childNodes = flattenChildren(((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []);
      // =========================== Render ===========================
      if (childNodes.length === 0) {
        return null;
      }
      return wrapSSR((0,runtime_core_esm_bundler/* createVNode */.bF)("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": [clx.value, attrs.class]
      }), [childNodes.map((child, i) => {
        var _a;
        const key = child && child.key || `${prefixCls.value}-item-${i}`;
        const noCompactItemContext = !compactItemContext || lodash_es_isEmpty(compactItemContext);
        return (0,runtime_core_esm_bundler/* createVNode */.bF)(CompactItem, {
          "key": key,
          "compactSize": (_a = props.size) !== null && _a !== void 0 ? _a : 'middle',
          "compactDirection": props.direction,
          "isFirstItem": i === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
          "isLastItem": i === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
        }, {
          default: () => [child]
        });
      })]));
    };
  }
});
/* harmony default export */ var space_Compact = ((/* unused pure expression or super */ null && (Compact)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/button.js














const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}

/* harmony default export */ var button_button = ((0,runtime_core_esm_bundler/* defineComponent */.pM)({
  compatConfig: {
    MODE: 3
  },
  name: 'AButton',
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: props_util_initDefaultProps(buttonTypes(), {
    type: 'default'
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const {
      prefixCls,
      autoInsertSpaceInButton,
      direction,
      size
    } = useConfigInject('btn', props);
    const [wrapSSR, hashId] = button_style(prefixCls);
    const groupSizeContext = GroupSizeContext.useInject();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      var _a;
      return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
    });
    const buttonNodeRef = (0,reactivity_esm_bundler/* shallowRef */.IJ)(null);
    const delayTimeoutRef = (0,reactivity_esm_bundler/* shallowRef */.IJ)(undefined);
    let isNeedInserted = false;
    const innerLoading = (0,reactivity_esm_bundler/* shallowRef */.IJ)(false);
    const hasTwoCNChar = (0,reactivity_esm_bundler/* shallowRef */.IJ)(false);
    const autoInsertSpace = (0,reactivity_esm_bundler/* computed */.EW)(() => autoInsertSpaceInButton.value !== false);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    // =============== Update Loading ===============
    const loadingOrDelay = (0,reactivity_esm_bundler/* computed */.EW)(() => typeof props.loading === 'object' && props.loading.delay ? props.loading.delay || true : !!props.loading);
    (0,runtime_core_esm_bundler/* watch */.wB)(loadingOrDelay, val => {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === 'number') {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    const classes = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const {
        type,
        shape = 'default',
        ghost,
        block,
        danger
      } = props;
      const pre = prefixCls.value;
      const sizeClassNameMap = {
        large: 'lg',
        small: 'sm',
        middle: undefined
      };
      const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === void 0 ? void 0 : groupSizeContext.size) || size.value;
      const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
      return [compactItemClassnames.value, {
        [hashId.value]: true,
        [`${pre}`]: true,
        [`${pre}-${shape}`]: shape !== 'default' && shape,
        [`${pre}-${type}`]: type,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === 'rtl'
      }];
    });
    const fixTwoCNChar = () => {
      // Fix for HOC usage like <FormatMessage />
      const node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      const buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    const handleClick = event => {
      // https://github.com/ant-design/ant-design/issues/30207
      if (innerLoading.value || mergedDisabled.value) {
        event.preventDefault();
        return;
      }
      emit('click', event);
    };
    const handleMousedown = event => {
      emit('mousedown', event);
    };
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? ' ' : '';
      if (child.type === runtime_core_esm_bundler/* Text */.EY) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split('').join(SPACE);
        }
        return (0,runtime_core_esm_bundler/* createVNode */.bF)("span", null, [text]);
      }
      return child;
    };
    (0,runtime_core_esm_bundler/* watchEffect */.nT)(() => {
      devWarning(!(props.ghost && isUnBorderedButtonType(props.type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(fixTwoCNChar);
    (0,runtime_core_esm_bundler/* onUpdated */.$u)(fixTwoCNChar);
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    const focus = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a, _b;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      const children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props.type);
      const {
        type,
        htmlType,
        href,
        title,
        target
      } = props;
      const iconType = innerLoading.value ? 'loading' : icon;
      const buttonProps = extends_extends(extends_extends({}, attrs), {
        title,
        disabled: mergedDisabled.value,
        class: [classes.value, attrs.class, {
          [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
        }],
        onClick: handleClick,
        onMousedown: handleMousedown
      });
      // https://github.com/vueComponent/ant-design-vue/issues/4930
      if (!mergedDisabled.value) {
        delete buttonProps.disabled;
      }
      const iconNode = icon && !innerLoading.value ? icon : (0,runtime_core_esm_bundler/* createVNode */.bF)(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      const kids = children.map(child => insertSpace(child, isNeedInserted && autoInsertSpace.value));
      if (href !== undefined) {
        return wrapSSR((0,runtime_core_esm_bundler/* createVNode */.bF)("a", _objectSpread2(_objectSpread2({}, buttonProps), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]));
      }
      let buttonNode = (0,runtime_core_esm_bundler/* createVNode */.bF)("button", _objectSpread2(_objectSpread2({}, buttonProps), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (!isUnBorderedButtonType(type)) {
        const _buttonNode = function () {
          return buttonNode;
        }();
        buttonNode = (0,runtime_core_esm_bundler/* createVNode */.bF)(wave, {
          "ref": "wave",
          "disabled": !!innerLoading.value
        }, {
          default: () => [_buttonNode]
        });
      }
      return wrapSSR(buttonNode);
    };
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.3_vue@3.2.13/node_modules/ant-design-vue/es/button/index.js


button_button.Group = button_group;
/* istanbul ignore next */
button_button.install = function (app) {
  app.component(button_button.name, button_button);
  app.component(button_group.name, button_group);
  return app;
};

/* harmony default export */ var es_button = (button_button);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.92.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.7_webpack@5.92.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/add-sprite.vue?vue&type=script&setup=true&lang=js

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 请选择要添加的元素 ");
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)("编辑完成，生成地图");
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["src"];












/* harmony default export */ var add_spritevue_type_script_setup_true_lang_js = ({
  emits: ["check", "mul-check", "finish"],
  setup(__props, {
    emit: emits
  }) {
    const list = [{
      imgs: ["imgs/building/land/land.jpg"],
      handler(scene, x, y) {
        scene.addStaticSprites(new SpriteLand({
          x,
          y
        }));
      }
    }, {
      imgs: ["imgs/building/ask/frame-4.jpg", "imgs/props/grow-mushroom/frame-1.jpg"],
      handler(scene, x, y) {
        scene.addStaticSprites(new SpriteAsk({
          x,
          y
        }));
        scene.addDynamicSprites(new SpriteGrowMushroom({
          x,
          y
        }));
      }
    }, {
      imgs: ["imgs/building/ask/frame-4.jpg", "imgs/props/flow/frame-1.jpg"],
      handler(scene, x, y) {
        scene.addStaticSprites(new SpriteAsk({
          x,
          y
        }));
        scene.addDynamicSprites(new SpriteFlower({
          x,
          y
        }));
      }
    }, {
      imgs: ["imgs/building/stone/stone.jpg"],
      handler(scene, x, y) {
        scene.addStaticSprites(new SpriteStone({
          x,
          y
        }));
      }
    }, {
      imgs: ["imgs/building/rock/rock.jpg"],
      handler(scene, x, y) {
        scene.addStaticSprites(new SpriteRock({
          x,
          y
        }));
      }
    }, {
      imgs: ["imgs/bad/mushroom/frame-1.jpg"],
      handler(scene, x, y) {
        const sprite = new SpriteBadMushroom({
          x,
          y
        });
        sprite.vx = 0;
        scene.addDynamicSprites(sprite);
      }
    }, {
      imgs: ["imgs/bad/horror/frame-1.jpg"],
      handler(scene, x, y) {
        const sprite = new SpriteHorror({
          x,
          y
        });
        sprite.vx = 0;
        scene.addDynamicSprites(sprite);
      }
    }, {
      imgs: ["imgs/bad/turtle/frame-1.jpg"],
      handler(scene, x, y) {
        const sprite = new SpriteTurtle({
          x,
          y
        });
        sprite.vx = 0;
        scene.addDynamicSprites(sprite);
      }
    }, {
      imgs: ["imgs/bad/shell/frame-1.jpg"],
      handler(scene, x, y) {
        const sprite = new SpriteShell({
          x,
          y
        });
        sprite.vx = 0;
        scene.addDynamicSprites(sprite);
      }
    }];
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      emits("check", list[0]);
    });
    return (_ctx, _cache) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Title)
      }, [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(es_button), {
        onClick: _cache[0] || (_cache[0] = $event => emits('finish'))
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_hoisted_2]),
        _: 1
      })], 2), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.List)
      }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(list, (item, i) => {
        return (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          key: i,
          onClick: $event => emits('check', item)
        }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Item)
        }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(item.imgs, img => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("img", {
            src: img,
            key: img
          }, null, 8, _hoisted_4);
        }), 128))], 2)], 8, _hoisted_3);
      }), 64))], 2), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.List)
      }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(list, (item, i) => {
        return (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          key: i,
          onClick: $event => emits('mul-check', item)
        }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Item)
        }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(item.imgs, img => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("img", {
            src: img,
            key: img
          }, null, 8, _hoisted_6);
        }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Text)
        }, "多", 2)], 2)], 8, _hoisted_5);
      }), 64))], 2)]);
    };
  }
});
;// CONCATENATED MODULE: ./src/components/add-sprite.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-31.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-31.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.39_webpack@5.92.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-31.use[2]!./node_modules/.pnpm/less-loader@8.0.0_less@4.0.0_webpack@5.92.1/node_modules/less-loader/dist/cjs.js??clonedRuleSet-31.use[3]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/add-sprite.vue?vue&type=style&index=0&id=45a0e7bb&lang=less&module=true
// extracted by mini-css-extract-plugin
/* harmony default export */ var add_spritevue_type_style_index_0_id_45a0e7bb_lang_less_module_true = ({"Title":"add-sprite_Title_h1r1X","List":"add-sprite_List_l9Lg2","Item":"add-sprite_Item_nQEMD","Text":"add-sprite_Text_M4h8W"});
;// CONCATENATED MODULE: ./src/components/add-sprite.vue?vue&type=style&index=0&id=45a0e7bb&lang=less&module=true
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(727);
;// CONCATENATED MODULE: ./src/components/add-sprite.vue



const cssModules = {}
;
cssModules["$style"] = add_spritevue_type_style_index_0_id_45a0e7bb_lang_less_module_true

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(add_spritevue_type_script_setup_true_lang_js, [['__cssModules',cssModules]])

/* harmony default export */ var add_sprite = (__exports__);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.92.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.7_webpack@5.92.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/mario.vue?vue&type=script&setup=true&lang=js

const mariovue_type_script_setup_true_lang_js_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 总得分：");
const mariovue_type_script_setup_true_lang_js_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 历史最高：");
const mariovue_type_script_setup_true_lang_js_hoisted_3 = ["onClick", "onMouseenter"];





/* harmony default export */ var mariovue_type_script_setup_true_lang_js = ({
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    mapData: {
      type: Object,
      default: null
    }
  },
  emits: ["add-map"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const map = new map_Map();
    const width = 672;
    const height = 480;
    const viewRef = (0,reactivity_esm_bundler/* ref */.KR)();
    const isFail = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const isWin = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const maxScore = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const score = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const handleAdd = (0,reactivity_esm_bundler/* ref */.KR)();
    const currentGrid = (0,reactivity_esm_bundler/* ref */.KR)();
    const mulCheckSprit = (0,reactivity_esm_bundler/* ref */.KR)();
    const startCheckPosition = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const girds = (0,reactivity_esm_bundler/* computed */.EW)(() => {
      const arr = [];
      for (let i = 0; i < height; i += SIZE) {
        for (let j = 0; j < width; j += SIZE) {
          arr.push({
            x: j,
            y: i
          });
        }
      }
      return arr;
    });
    function handleMoveLeft() {
      renderer.camera.x = Math.max(0, renderer.camera.x - SIZE * 5);
    }
    function handleMoveRight() {
      renderer.camera.x += SIZE * 5;
    }
    function getGridBackground({
      x,
      y
    }) {
      if ((startCheckPosition.value && startCheckPosition.value.x === x && startCheckPosition.value.y) === y) {
        return "rgba(0, 0, 0, 0.5)";
      }
      if (startCheckPosition.value && currentGrid.value) {
        const minX = Math.min(startCheckPosition.value.x, currentGrid.value.x);
        const minY = Math.min(startCheckPosition.value.y, currentGrid.value.y);
        const maxX = Math.max(startCheckPosition.value.x, currentGrid.value.x);
        const maxY = Math.max(startCheckPosition.value.y, currentGrid.value.y);
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
          return "rgba(0, 0, 0, 0.5)";
        }
      }
    }
    function handleFinish() {
      const mapData = map.serialization(renderer.scene);
      console.log(mapData);
      let maxX = 0;
      mapData.data.forEach(v => {
        maxX = Math.max(v.x, maxX);
      });
      mapData.data.push({
        x: maxX,
        y: SIZE * 2,
        type: "sprite-win"
      });
      document.body.style.cursor = null;
      emits("add-map", mapData);
    }
    function handleCheckSprite(v) {
      mulCheckSprit.value = undefined;
      startCheckPosition.value = false;
      handleAdd.value = v.handler;
      document.body.style.cursor = `url(${v.imgs[0]}), pointer`;
    }
    function handleMulCheckSprite(v) {
      mulCheckSprit.value = v;
      handleAdd.value = undefined;
      document.body.style.cursor = `url(${v.imgs[0]}), pointer`;
    }
    function handleAddSprite(item) {
      const {
        x,
        y
      } = item;
      if (handleAdd.value) {
        handleAdd.value(renderer.scene, renderer.camera.x + x, y);
      }
      if (mulCheckSprit.value) {
        if (!startCheckPosition.value) {
          startCheckPosition.value = {
            x,
            y
          };
        } else {
          const minX = Math.min(startCheckPosition.value.x, x);
          const minY = Math.min(startCheckPosition.value.y, y);
          const maxX = Math.max(startCheckPosition.value.x, x);
          const maxY = Math.max(startCheckPosition.value.y, y);
          for (let i = minX; i <= maxX; i += SIZE) {
            for (let j = minY; j <= maxY; j += SIZE) {
              mulCheckSprit.value.handler(renderer.scene, renderer.camera.x + i, j);
            }
          }
          startCheckPosition.value = undefined;
        }
      }
    }
    let renderer;
    function handleStartGame() {
      isFail.value = false;
      isWin.value = false;
      if (renderer) {
        renderer.destroy();
      }
      renderer = new renderer_Renderer({
        view: viewRef.value,
        readonly: props.isEdit,
        mapData: props.mapData
      });
      renderer.run(v => {
        isFail.value = true;
        isWin.value = false;
        score.value = v;
        maxScore.value = Math.max(v, maxScore.value);
      }, v => {
        isFail.value = false;
        isWin.value = true;
        score.value = v;
        maxScore.value = Math.max(v, maxScore.value);
      });
    }
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      handleStartGame();
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
      if (renderer) {
        renderer.destroy();
      }
      document.body.style.cursor = null;
    });
    return (_ctx, _cache) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Container),
        style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
          width: width + 'px',
          height: height + 'px'
        })
      }, [props.isEdit ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: 0,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.MoveLeft),
        onClick: handleMoveLeft
      }, " ‹ ", 2)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        ref: (_value, _refs) => {
          _refs['viewRef'] = _value;
          viewRef.value = _value;
        },
        style: {
          "width": "100%",
          "height": "100%"
        }
      }, null, 512), isFail.value || isWin.value ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: 1,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.End)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.EndTitle)
      }, (0,shared_esm_bundler/* toDisplayString */.v_)(isWin.value ? "恭喜您过关啦!" : "游戏结束"), 3), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Score)
      }, [mariovue_type_script_setup_true_lang_js_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("b", null, (0,shared_esm_bundler/* toDisplayString */.v_)(score.value), 1)], 2), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Score)
      }, [mariovue_type_script_setup_true_lang_js_hoisted_2, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("b", null, (0,shared_esm_bundler/* toDisplayString */.v_)(maxScore.value), 1)], 2)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
        style: {
          "margin-top": "20px"
        },
        onClick: handleStartGame
      }, " 再玩一次 ")])], 2)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), props.isEdit ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: 2,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.GridEditor)
      }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)((0,reactivity_esm_bundler/* unref */.R1)(girds), (item, i) => {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
          key: i,
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
            width: (0,reactivity_esm_bundler/* unref */.R1)(SIZE) + 'px',
            height: (0,reactivity_esm_bundler/* unref */.R1)(SIZE) + 'px',
            background: getGridBackground(item)
          }),
          onClick: $event => handleAddSprite(item),
          onMouseenter: $event => currentGrid.value = item
        }, null, 44, mariovue_type_script_setup_true_lang_js_hoisted_3);
      }), 128))], 2)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), props.isEdit ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: 3,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.MoveRight),
        onClick: handleMoveRight
      }, " › ", 2)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 6), props.isEdit ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(add_sprite, {
        key: 0,
        onCheck: handleCheckSprite,
        onMulCheck: handleMulCheckSprite,
        onFinish: handleFinish
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]);
    };
  }
});
;// CONCATENATED MODULE: ./src/components/mario.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-31.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-31.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.39_webpack@5.92.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-31.use[2]!./node_modules/.pnpm/less-loader@8.0.0_less@4.0.0_webpack@5.92.1/node_modules/less-loader/dist/cjs.js??clonedRuleSet-31.use[3]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/mario.vue?vue&type=style&index=0&id=4cb8fcbb&lang=less&module=true
// extracted by mini-css-extract-plugin
/* harmony default export */ var mariovue_type_style_index_0_id_4cb8fcbb_lang_less_module_true = ({"Container":"mario_Container_TbvVA","MoveLeft":"mario_MoveLeft_OPvUy","MoveRight":"mario_MoveRight_qZQ8f","End":"mario_End_nUh95","GridEditor":"mario_GridEditor_Te7PO","EndTitle":"mario_EndTitle_gFNNq","Score":"mario_Score_xOzyJ"});
;// CONCATENATED MODULE: ./src/components/mario.vue?vue&type=style&index=0&id=4cb8fcbb&lang=less&module=true
 
;// CONCATENATED MODULE: ./src/components/mario.vue



const mario_cssModules = {}
;
mario_cssModules["$style"] = mariovue_type_style_index_0_id_4cb8fcbb_lang_less_module_true

;
const mario_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(mariovue_type_script_setup_true_lang_js, [['__cssModules',mario_cssModules]])

/* harmony default export */ var mario = (mario_exports_);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.92.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.7_webpack@5.92.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=script&setup=true&lang=js

const menuvue_type_script_setup_true_lang_js_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 自定义地图 ");
const menuvue_type_script_setup_true_lang_js_hoisted_2 = ["onClick"];
const menuvue_type_script_setup_true_lang_js_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
  src: "https://aiad-prod.oss-cn-heyuan.aliyuncs.com/public/783dac4cf0234219876add4eb68bc5f4.jpg"
}, null, -1);
const menuvue_type_script_setup_true_lang_js_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)("扫码关注公众号"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.eW)("每天领外卖打车红包")], -1);
const menuvue_type_script_setup_true_lang_js_hoisted_5 = [menuvue_type_script_setup_true_lang_js_hoisted_3, menuvue_type_script_setup_true_lang_js_hoisted_4];
/* harmony default export */ var menuvue_type_script_setup_true_lang_js = ({
  props: {
    active: {
      type: String,
      required: true
    },
    maps: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Container)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Content)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)([_ctx.$style.Item, props.active === '' ? _ctx.$style.ItemActive : null]),
        onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('add'))
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Add)
      }, "+", 2), menuvue_type_script_setup_true_lang_js_hoisted_1], 2), ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(props.maps, (item, i) => {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
          class: (0,shared_esm_bundler/* normalizeClass */.C4)([_ctx.$style.Item, item.title === props.active ? _ctx.$style.ItemActive : null]),
          key: i,
          onClick: $event => _ctx.$emit('check', item.title)
        }, (0,shared_esm_bundler/* toDisplayString */.v_)(item.title), 11, menuvue_type_script_setup_true_lang_js_hoisted_2);
      }), 128))], 2), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.QRcode)
      }, menuvue_type_script_setup_true_lang_js_hoisted_5, 2)], 2);
    };
  }
});
;// CONCATENATED MODULE: ./src/components/menu.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-31.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-31.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.39_webpack@5.92.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-31.use[2]!./node_modules/.pnpm/less-loader@8.0.0_less@4.0.0_webpack@5.92.1/node_modules/less-loader/dist/cjs.js??clonedRuleSet-31.use[3]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=style&index=0&id=cf8e33a4&lang=less&module=true
// extracted by mini-css-extract-plugin
/* harmony default export */ var menuvue_type_style_index_0_id_cf8e33a4_lang_less_module_true = ({"Container":"menu_Container_K1VA8","Content":"menu_Content_reEtU","QRcode":"menu_QRcode_CLGGa","Item":"menu_Item_nOPQ7","ItemActive":"menu_ItemActive_pVQHY","Add":"menu_Add_zt1uR"});
;// CONCATENATED MODULE: ./src/components/menu.vue?vue&type=style&index=0&id=cf8e33a4&lang=less&module=true
 
;// CONCATENATED MODULE: ./src/components/menu.vue



const menu_cssModules = {}
;
menu_cssModules["$style"] = menuvue_type_style_index_0_id_cf8e33a4_lang_less_module_true

;
const menu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(menuvue_type_script_setup_true_lang_js, [['__cssModules',menu_cssModules]])

/* harmony default export */ var menu = (menu_exports_);
;// CONCATENATED MODULE: ./src/maps/map1.js
const data = {
  data: [{
    type: "sprite-grow-mushroom",
    x: 288,
    y: 288
  }, {
    type: "sprite-stone",
    x: 288,
    y: 384
  }, {
    type: "sprite-shell",
    x: 450,
    y: 340
  }, {
    type: "sprite-stone",
    x: 480,
    y: 384
  }, {
    type: "sprite-bad-mushroom",
    x: 800,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 832,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 864,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 1408,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 1248,
    y: 352
  }, {
    type: "sprite-flower",
    x: 1600,
    y: 288
  }, {
    type: "sprite-bad-mushroom",
    x: 2272,
    y: 96
  }, {
    type: "sprite-bad-mushroom",
    x: 2272,
    y: 128
  }, {
    type: "sprite-bad-mushroom",
    x: 2272,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 2304,
    y: 96
  }, {
    type: "sprite-bad-mushroom",
    x: 2304,
    y: 128
  }, {
    type: "sprite-bad-mushroom",
    x: 2304,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 2336,
    y: 96
  }, {
    type: "sprite-bad-mushroom",
    x: 2336,
    y: 128
  }, {
    type: "sprite-bad-mushroom",
    x: 2336,
    y: 160
  }, {
    type: "sprite-land",
    x: 0,
    y: 416
  }, {
    type: "sprite-land",
    x: 0,
    y: 448
  }, {
    type: "sprite-land",
    x: 32,
    y: 416
  }, {
    type: "sprite-land",
    x: 32,
    y: 448
  }, {
    type: "sprite-land",
    x: 64,
    y: 416
  }, {
    type: "sprite-land",
    x: 64,
    y: 448
  }, {
    type: "sprite-land",
    x: 96,
    y: 416
  }, {
    type: "sprite-land",
    x: 96,
    y: 448
  }, {
    type: "sprite-land",
    x: 128,
    y: 416
  }, {
    type: "sprite-land",
    x: 128,
    y: 448
  }, {
    type: "sprite-land",
    x: 160,
    y: 416
  }, {
    type: "sprite-land",
    x: 160,
    y: 448
  }, {
    type: "sprite-land",
    x: 192,
    y: 416
  }, {
    type: "sprite-land",
    x: 192,
    y: 448
  }, {
    type: "sprite-land",
    x: 224,
    y: 416
  }, {
    type: "sprite-land",
    x: 224,
    y: 448
  }, {
    type: "sprite-land",
    x: 256,
    y: 416
  }, {
    type: "sprite-land",
    x: 256,
    y: 448
  }, {
    type: "sprite-land",
    x: 288,
    y: 416
  }, {
    type: "sprite-land",
    x: 288,
    y: 448
  }, {
    type: "sprite-land",
    x: 320,
    y: 416
  }, {
    type: "sprite-land",
    x: 320,
    y: 448
  }, {
    type: "sprite-land",
    x: 352,
    y: 416
  }, {
    type: "sprite-land",
    x: 352,
    y: 448
  }, {
    type: "sprite-land",
    x: 384,
    y: 416
  }, {
    type: "sprite-land",
    x: 384,
    y: 448
  }, {
    type: "sprite-land",
    x: 416,
    y: 416
  }, {
    type: "sprite-land",
    x: 416,
    y: 448
  }, {
    type: "sprite-land",
    x: 448,
    y: 416
  }, {
    type: "sprite-land",
    x: 448,
    y: 448
  }, {
    type: "sprite-stone",
    x: 192,
    y: 288
  }, {
    type: "sprite-stone",
    x: 224,
    y: 288
  }, {
    type: "sprite-stone",
    x: 256,
    y: 288
  }, {
    type: "sprite-ask",
    x: 288,
    y: 288
  }, {
    type: "sprite-stone",
    x: 320,
    y: 288
  }, {
    type: "sprite-stone",
    x: 352,
    y: 288
  }, {
    type: "sprite-land",
    x: 576,
    y: 416
  }, {
    type: "sprite-land",
    x: 576,
    y: 448
  }, {
    type: "sprite-land",
    x: 608,
    y: 416
  }, {
    type: "sprite-land",
    x: 608,
    y: 448
  }, {
    type: "sprite-land",
    x: 640,
    y: 416
  }, {
    type: "sprite-land",
    x: 640,
    y: 448
  }, {
    type: "sprite-land",
    x: 672,
    y: 416
  }, {
    type: "sprite-land",
    x: 672,
    y: 448
  }, {
    type: "sprite-land",
    x: 704,
    y: 416
  }, {
    type: "sprite-land",
    x: 704,
    y: 448
  }, {
    type: "sprite-land",
    x: 736,
    y: 416
  }, {
    type: "sprite-land",
    x: 736,
    y: 448
  }, {
    type: "sprite-land",
    x: 768,
    y: 416
  }, {
    type: "sprite-land",
    x: 768,
    y: 448
  }, {
    type: "sprite-land",
    x: 800,
    y: 416
  }, {
    type: "sprite-land",
    x: 800,
    y: 448
  }, {
    type: "sprite-land",
    x: 832,
    y: 416
  }, {
    type: "sprite-land",
    x: 832,
    y: 448
  }, {
    type: "sprite-land",
    x: 864,
    y: 416
  }, {
    type: "sprite-land",
    x: 864,
    y: 448
  }, {
    type: "sprite-land",
    x: 896,
    y: 416
  }, {
    type: "sprite-land",
    x: 896,
    y: 448
  }, {
    type: "sprite-land",
    x: 928,
    y: 416
  }, {
    type: "sprite-land",
    x: 928,
    y: 448
  }, {
    type: "sprite-land",
    x: 960,
    y: 416
  }, {
    type: "sprite-land",
    x: 960,
    y: 448
  }, {
    type: "sprite-land",
    x: 992,
    y: 416
  }, {
    type: "sprite-land",
    x: 992,
    y: 448
  }, {
    type: "sprite-rock",
    x: 736,
    y: 320
  }, {
    type: "sprite-rock",
    x: 736,
    y: 352
  }, {
    type: "sprite-rock",
    x: 736,
    y: 384
  }, {
    type: "sprite-rock",
    x: 928,
    y: 320
  }, {
    type: "sprite-rock",
    x: 928,
    y: 352
  }, {
    type: "sprite-rock",
    x: 928,
    y: 384
  }, {
    type: "sprite-stone",
    x: 672,
    y: 288
  }, {
    type: "sprite-stone",
    x: 768,
    y: 256
  }, {
    type: "sprite-stone",
    x: 832,
    y: 224
  }, {
    type: "sprite-stone",
    x: 864,
    y: 256
  }, {
    type: "sprite-stone",
    x: 896,
    y: 224
  }, {
    type: "sprite-stone",
    x: 1056,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1088,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1184,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1216,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1248,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1312,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1344,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1376,
    y: 416
  }, {
    type: "sprite-stone",
    x: 1408,
    y: 416
  }, {
    type: "sprite-land",
    x: 1472,
    y: 416
  }, {
    type: "sprite-land",
    x: 1472,
    y: 448
  }, {
    type: "sprite-land",
    x: 1504,
    y: 416
  }, {
    type: "sprite-land",
    x: 1504,
    y: 448
  }, {
    type: "sprite-land",
    x: 1536,
    y: 416
  }, {
    type: "sprite-land",
    x: 1536,
    y: 448
  }, {
    type: "sprite-land",
    x: 1568,
    y: 416
  }, {
    type: "sprite-land",
    x: 1568,
    y: 448
  }, {
    type: "sprite-land",
    x: 1600,
    y: 416
  }, {
    type: "sprite-land",
    x: 1600,
    y: 448
  }, {
    type: "sprite-land",
    x: 1632,
    y: 416
  }, {
    type: "sprite-land",
    x: 1632,
    y: 448
  }, {
    type: "sprite-land",
    x: 1664,
    y: 416
  }, {
    type: "sprite-land",
    x: 1664,
    y: 448
  }, {
    type: "sprite-land",
    x: 1696,
    y: 416
  }, {
    type: "sprite-land",
    x: 1696,
    y: 448
  }, {
    type: "sprite-ask",
    x: 1600,
    y: 288
  }, {
    type: "sprite-stone",
    x: 1568,
    y: 288
  }, {
    type: "sprite-stone",
    x: 1632,
    y: 288
  }, {
    type: "sprite-land",
    x: 1792,
    y: 352
  }, {
    type: "sprite-land",
    x: 1856,
    y: 288
  }, {
    type: "sprite-land",
    x: 1920,
    y: 224
  }, {
    type: "sprite-land",
    x: 1952,
    y: 224
  }, {
    type: "sprite-land",
    x: 2016,
    y: 160
  }, {
    type: "sprite-land",
    x: 2048,
    y: 160
  }, {
    type: "sprite-rock",
    x: 2144,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2144,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2176,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2176,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2208,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2208,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2240,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2240,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2272,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2272,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2304,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2304,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2336,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2336,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2368,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2368,
    y: 224
  }, {
    type: "sprite-rock",
    x: 2400,
    y: 192
  }, {
    type: "sprite-rock",
    x: 2400,
    y: 224
  }, {
    type: "sprite-land",
    x: 2400,
    y: 96
  }, {
    type: "sprite-land",
    x: 2400,
    y: 128
  }, {
    type: "sprite-land",
    x: 2400,
    y: 160
  }, {
    type: "sprite-land",
    x: 2464,
    y: 416
  }, {
    type: "sprite-land",
    x: 2464,
    y: 448
  }, {
    type: "sprite-land",
    x: 2528,
    y: 416
  }, {
    type: "sprite-land",
    x: 2528,
    y: 448
  }, {
    type: "sprite-land",
    x: 2560,
    y: 416
  }, {
    type: "sprite-land",
    x: 2560,
    y: 448
  }, {
    type: "sprite-land",
    x: 2624,
    y: 416
  }, {
    type: "sprite-land",
    x: 2624,
    y: 448
  }, {
    type: "sprite-land",
    x: 2656,
    y: 416
  }, {
    type: "sprite-land",
    x: 2656,
    y: 448
  }, {
    type: "sprite-land",
    x: 2688,
    y: 416
  }, {
    type: "sprite-land",
    x: 2688,
    y: 448
  }, {
    type: "sprite-land",
    x: 2752,
    y: 416
  }, {
    type: "sprite-land",
    x: 2752,
    y: 448
  }, {
    type: "sprite-land",
    x: 2784,
    y: 416
  }, {
    type: "sprite-land",
    x: 2784,
    y: 448
  }, {
    type: "sprite-land",
    x: 2816,
    y: 416
  }, {
    type: "sprite-land",
    x: 2816,
    y: 448
  }, {
    type: "sprite-land",
    x: 2848,
    y: 416
  }, {
    type: "sprite-land",
    x: 2848,
    y: 448
  }, {
    type: "sprite-land",
    x: 2912,
    y: 416
  }, {
    type: "sprite-land",
    x: 2912,
    y: 448
  }, {
    type: "sprite-land",
    x: 2944,
    y: 416
  }, {
    type: "sprite-land",
    x: 2944,
    y: 448
  }, {
    type: "sprite-land",
    x: 2976,
    y: 416
  }, {
    type: "sprite-land",
    x: 2976,
    y: 448
  }, {
    type: "sprite-land",
    x: 3008,
    y: 416
  }, {
    type: "sprite-land",
    x: 3008,
    y: 448
  }, {
    type: "sprite-land",
    x: 3040,
    y: 416
  }, {
    type: "sprite-land",
    x: 3040,
    y: 448
  }, {
    type: "sprite-land",
    x: 3072,
    y: 416
  }, {
    type: "sprite-land",
    x: 3072,
    y: 448
  }, {
    type: "sprite-land",
    x: 3104,
    y: 416
  }, {
    type: "sprite-land",
    x: 3104,
    y: 448
  }, {
    type: "sprite-land",
    x: 3136,
    y: 416
  }, {
    type: "sprite-land",
    x: 3136,
    y: 448
  }, {
    type: "sprite-land",
    x: 3168,
    y: 416
  }, {
    type: "sprite-land",
    x: 3168,
    y: 448
  }, {
    type: "sprite-land",
    x: 3200,
    y: 416
  }, {
    type: "sprite-land",
    x: 3200,
    y: 448
  }, {
    type: "sprite-land",
    x: 3232,
    y: 416
  }, {
    type: "sprite-land",
    x: 3232,
    y: 448
  }, {
    type: "sprite-land",
    x: 3264,
    y: 416
  }, {
    type: "sprite-land",
    x: 3264,
    y: 448
  }, {
    type: "sprite-land",
    x: 3296,
    y: 416
  }, {
    type: "sprite-land",
    x: 3296,
    y: 448
  }, {
    type: "sprite-land",
    x: 3328,
    y: 416
  }, {
    type: "sprite-land",
    x: 3328,
    y: 448
  }, {
    type: "sprite-rock",
    x: 3008,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3040,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3040,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3072,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3072,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3072,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3104,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3104,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3104,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3136,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3136,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3136,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3136,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3136,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3168,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3168,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3168,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3168,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3168,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3168,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3200,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 160
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3232,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 128
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 160
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3264,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 96
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 128
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 160
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3296,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3104,
    y: 384
  }, {
    type: "sprite-land",
    x: 3360,
    y: 416
  }, {
    type: "sprite-land",
    x: 3360,
    y: 448
  }, {
    type: "sprite-land",
    x: 3392,
    y: 416
  }, {
    type: "sprite-land",
    x: 3392,
    y: 448
  }, {
    type: "sprite-land",
    x: 3424,
    y: 416
  }, {
    type: "sprite-land",
    x: 3424,
    y: 448
  }, {
    type: "sprite-land",
    x: 3456,
    y: 416
  }, {
    type: "sprite-land",
    x: 3456,
    y: 448
  }, {
    type: "sprite-land",
    x: 3488,
    y: 416
  }, {
    type: "sprite-land",
    x: 3488,
    y: 448
  }, {
    type: "sprite-land",
    x: 3520,
    y: 416
  }, {
    type: "sprite-land",
    x: 3520,
    y: 448
  }, {
    type: "sprite-land",
    x: 3552,
    y: 416
  }, {
    type: "sprite-land",
    x: 3552,
    y: 448
  }, {
    type: "sprite-land",
    x: 3584,
    y: 416
  }, {
    type: "sprite-land",
    x: 3584,
    y: 448
  }, {
    type: "sprite-land",
    x: 3616,
    y: 416
  }, {
    type: "sprite-land",
    x: 3616,
    y: 448
  }, {
    type: "sprite-win",
    x: 3616,
    y: 32
  }]
};
;// CONCATENATED MODULE: ./src/maps/map2.js
const map2_data = {
  data: [{
    type: "sprite-turtle",
    x: 192,
    y: 256
  }, {
    type: "sprite-horror",
    x: 320,
    y: 224
  }, {
    type: "sprite-horror",
    x: 320,
    y: 256
  }, {
    type: "sprite-horror",
    x: 352,
    y: 224
  }, {
    type: "sprite-horror",
    x: 352,
    y: 256
  }, {
    type: "sprite-horror",
    x: 384,
    y: 224
  }, {
    type: "sprite-horror",
    x: 384,
    y: 256
  }, {
    type: "sprite-horror",
    x: 416,
    y: 224
  }, {
    type: "sprite-horror",
    x: 416,
    y: 256
  }, {
    type: "sprite-horror",
    x: 448,
    y: 224
  }, {
    type: "sprite-horror",
    x: 448,
    y: 256
  }, {
    type: "sprite-horror",
    x: 480,
    y: 224
  }, {
    type: "sprite-horror",
    x: 480,
    y: 256
  }, {
    type: "sprite-horror",
    x: 512,
    y: 224
  }, {
    type: "sprite-horror",
    x: 512,
    y: 256
  }, {
    type: "sprite-horror",
    x: 544,
    y: 224
  }, {
    type: "sprite-horror",
    x: 544,
    y: 256
  }, {
    type: "sprite-horror",
    x: 576,
    y: 224
  }, {
    type: "sprite-horror",
    x: 576,
    y: 256
  }, {
    type: "sprite-horror",
    x: 608,
    y: 224
  }, {
    type: "sprite-horror",
    x: 608,
    y: 256
  }, {
    type: "sprite-horror",
    x: 672,
    y: 224
  }, {
    type: "sprite-horror",
    x: 672,
    y: 256
  }, {
    type: "sprite-horror",
    x: 704,
    y: 224
  }, {
    type: "sprite-horror",
    x: 704,
    y: 256
  }, {
    type: "sprite-horror",
    x: 736,
    y: 224
  }, {
    type: "sprite-horror",
    x: 736,
    y: 256
  }, {
    type: "sprite-horror",
    x: 768,
    y: 224
  }, {
    type: "sprite-horror",
    x: 768,
    y: 256
  }, {
    type: "sprite-horror",
    x: 800,
    y: 224
  }, {
    type: "sprite-horror",
    x: 800,
    y: 256
  }, {
    type: "sprite-horror",
    x: 832,
    y: 224
  }, {
    type: "sprite-horror",
    x: 832,
    y: 256
  }, {
    type: "sprite-horror",
    x: 864,
    y: 224
  }, {
    type: "sprite-horror",
    x: 864,
    y: 256
  }, {
    type: "sprite-horror",
    x: 896,
    y: 224
  }, {
    type: "sprite-horror",
    x: 896,
    y: 256
  }, {
    type: "sprite-horror",
    x: 928,
    y: 224
  }, {
    type: "sprite-horror",
    x: 928,
    y: 256
  }, {
    type: "sprite-horror",
    x: 960,
    y: 224
  }, {
    type: "sprite-horror",
    x: 960,
    y: 256
  }, {
    type: "sprite-horror",
    x: 992,
    y: 224
  }, {
    type: "sprite-horror",
    x: 992,
    y: 256
  }, {
    type: "sprite-horror",
    x: 1024,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1024,
    y: 256
  }, {
    type: "sprite-grow-mushroom",
    x: 672,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 672,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 704,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 704,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 736,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 736,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 768,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 768,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 800,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 800,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 832,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 832,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 864,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 864,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 896,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 896,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 928,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 928,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 960,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 960,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 992,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 992,
    y: 352
  }, {
    type: "sprite-grow-mushroom",
    x: 1024,
    y: 320
  }, {
    type: "sprite-grow-mushroom",
    x: 1024,
    y: 352
  }, {
    type: "sprite-horror",
    x: 1088,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1088,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1120,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1120,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1152,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1152,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1184,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1184,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1216,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1216,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1248,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1248,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1280,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1280,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1312,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1312,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1344,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1344,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1376,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1376,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1408,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1408,
    y: 224
  }, {
    type: "sprite-horror",
    x: 1440,
    y: 192
  }, {
    type: "sprite-horror",
    x: 1440,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 1024,
    y: 96
  }, {
    type: "sprite-turtle",
    x: 1024,
    y: 128
  }, {
    type: "sprite-turtle",
    x: 1056,
    y: 96
  }, {
    type: "sprite-turtle",
    x: 1056,
    y: 128
  }, {
    type: "sprite-turtle",
    x: 1088,
    y: 96
  }, {
    type: "sprite-turtle",
    x: 1088,
    y: 128
  }, {
    type: "sprite-turtle",
    x: 1536,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 1536,
    y: 256
  }, {
    type: "sprite-turtle",
    x: 1568,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 1568,
    y: 256
  }, {
    type: "sprite-turtle",
    x: 1600,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 1600,
    y: 256
  }, {
    type: "sprite-turtle",
    x: 1632,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 1632,
    y: 256
  }, {
    type: "sprite-turtle",
    x: 1664,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 1664,
    y: 256
  }, {
    type: "sprite-bad-mushroom",
    x: 1728,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 1728,
    y: 192
  }, {
    type: "sprite-bad-mushroom",
    x: 1728,
    y: 224
  }, {
    type: "sprite-bad-mushroom",
    x: 1728,
    y: 256
  }, {
    type: "sprite-bad-mushroom",
    x: 1760,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 1760,
    y: 192
  }, {
    type: "sprite-bad-mushroom",
    x: 1760,
    y: 224
  }, {
    type: "sprite-bad-mushroom",
    x: 1760,
    y: 256
  }, {
    type: "sprite-bad-mushroom",
    x: 1792,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 1792,
    y: 192
  }, {
    type: "sprite-bad-mushroom",
    x: 1792,
    y: 224
  }, {
    type: "sprite-bad-mushroom",
    x: 1792,
    y: 256
  }, {
    type: "sprite-bad-mushroom",
    x: 1824,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 1824,
    y: 192
  }, {
    type: "sprite-bad-mushroom",
    x: 1824,
    y: 224
  }, {
    type: "sprite-bad-mushroom",
    x: 1824,
    y: 256
  }, {
    type: "sprite-bad-mushroom",
    x: 1856,
    y: 160
  }, {
    type: "sprite-bad-mushroom",
    x: 1856,
    y: 192
  }, {
    type: "sprite-bad-mushroom",
    x: 1856,
    y: 224
  }, {
    type: "sprite-bad-mushroom",
    x: 1856,
    y: 256
  }, {
    type: "sprite-rock",
    x: 0,
    y: 320
  }, {
    type: "sprite-rock",
    x: 0,
    y: 352
  }, {
    type: "sprite-rock",
    x: 32,
    y: 320
  }, {
    type: "sprite-rock",
    x: 32,
    y: 352
  }, {
    type: "sprite-rock",
    x: 64,
    y: 320
  }, {
    type: "sprite-rock",
    x: 64,
    y: 352
  }, {
    type: "sprite-rock",
    x: 96,
    y: 320
  }, {
    type: "sprite-rock",
    x: 96,
    y: 352
  }, {
    type: "sprite-rock",
    x: 128,
    y: 320
  }, {
    type: "sprite-rock",
    x: 128,
    y: 352
  }, {
    type: "sprite-rock",
    x: 160,
    y: 320
  }, {
    type: "sprite-rock",
    x: 160,
    y: 352
  }, {
    type: "sprite-rock",
    x: 192,
    y: 320
  }, {
    type: "sprite-rock",
    x: 192,
    y: 352
  }, {
    type: "sprite-rock",
    x: 224,
    y: 320
  }, {
    type: "sprite-rock",
    x: 224,
    y: 352
  }, {
    type: "sprite-rock",
    x: 256,
    y: 320
  }, {
    type: "sprite-rock",
    x: 256,
    y: 352
  }, {
    type: "sprite-rock",
    x: 288,
    y: 320
  }, {
    type: "sprite-rock",
    x: 288,
    y: 352
  }, {
    type: "sprite-rock",
    x: 320,
    y: 320
  }, {
    type: "sprite-rock",
    x: 320,
    y: 352
  }, {
    type: "sprite-rock",
    x: 352,
    y: 320
  }, {
    type: "sprite-rock",
    x: 352,
    y: 352
  }, {
    type: "sprite-rock",
    x: 384,
    y: 320
  }, {
    type: "sprite-rock",
    x: 384,
    y: 352
  }, {
    type: "sprite-rock",
    x: 416,
    y: 320
  }, {
    type: "sprite-rock",
    x: 416,
    y: 352
  }, {
    type: "sprite-rock",
    x: 448,
    y: 320
  }, {
    type: "sprite-rock",
    x: 448,
    y: 352
  }, {
    type: "sprite-rock",
    x: 480,
    y: 320
  }, {
    type: "sprite-rock",
    x: 480,
    y: 352
  }, {
    type: "sprite-rock",
    x: 512,
    y: 320
  }, {
    type: "sprite-rock",
    x: 512,
    y: 352
  }, {
    type: "sprite-rock",
    x: 544,
    y: 320
  }, {
    type: "sprite-rock",
    x: 544,
    y: 352
  }, {
    type: "sprite-rock",
    x: 576,
    y: 320
  }, {
    type: "sprite-rock",
    x: 576,
    y: 352
  }, {
    type: "sprite-rock",
    x: 608,
    y: 320
  }, {
    type: "sprite-rock",
    x: 608,
    y: 352
  }, {
    type: "sprite-rock",
    x: 640,
    y: 320
  }, {
    type: "sprite-rock",
    x: 640,
    y: 352
  }, {
    type: "sprite-ask",
    x: 672,
    y: 320
  }, {
    type: "sprite-ask",
    x: 672,
    y: 352
  }, {
    type: "sprite-ask",
    x: 704,
    y: 320
  }, {
    type: "sprite-ask",
    x: 704,
    y: 352
  }, {
    type: "sprite-ask",
    x: 736,
    y: 320
  }, {
    type: "sprite-ask",
    x: 736,
    y: 352
  }, {
    type: "sprite-ask",
    x: 768,
    y: 320
  }, {
    type: "sprite-ask",
    x: 768,
    y: 352
  }, {
    type: "sprite-ask",
    x: 800,
    y: 320
  }, {
    type: "sprite-ask",
    x: 800,
    y: 352
  }, {
    type: "sprite-ask",
    x: 832,
    y: 320
  }, {
    type: "sprite-ask",
    x: 832,
    y: 352
  }, {
    type: "sprite-ask",
    x: 864,
    y: 320
  }, {
    type: "sprite-ask",
    x: 864,
    y: 352
  }, {
    type: "sprite-ask",
    x: 896,
    y: 320
  }, {
    type: "sprite-ask",
    x: 896,
    y: 352
  }, {
    type: "sprite-ask",
    x: 928,
    y: 320
  }, {
    type: "sprite-ask",
    x: 928,
    y: 352
  }, {
    type: "sprite-ask",
    x: 960,
    y: 320
  }, {
    type: "sprite-ask",
    x: 960,
    y: 352
  }, {
    type: "sprite-ask",
    x: 992,
    y: 320
  }, {
    type: "sprite-ask",
    x: 992,
    y: 352
  }, {
    type: "sprite-ask",
    x: 1024,
    y: 320
  }, {
    type: "sprite-ask",
    x: 1024,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1056,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1056,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1088,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1088,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1120,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1120,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1152,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1152,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1184,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1184,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1216,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1216,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1248,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1248,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1280,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1280,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1312,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1312,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1376,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1376,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1408,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1408,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1440,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1440,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1472,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1472,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1504,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1504,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1536,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1536,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1568,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1568,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1632,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1632,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1664,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1664,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1696,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1696,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1728,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1728,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1760,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1760,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1792,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1792,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1824,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1824,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1856,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1856,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1888,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1888,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1920,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1920,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1952,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1952,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1984,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1984,
    y: 352
  }, {
    type: "sprite-rock",
    x: 2016,
    y: 320
  }, {
    type: "sprite-rock",
    x: 2016,
    y: 352
  }, {
    type: "sprite-rock",
    x: 2048,
    y: 320
  }, {
    type: "sprite-rock",
    x: 2048,
    y: 352
  }, {
    type: "sprite-rock",
    x: 2080,
    y: 320
  }, {
    type: "sprite-rock",
    x: 2080,
    y: 352
  }, {
    x: 2080,
    y: 64,
    type: "sprite-win"
  }]
};
;// CONCATENATED MODULE: ./src/maps/map3.js
const map3_data = {
  data: [{
    type: "sprite-grow-mushroom",
    x: 352,
    y: 256
  }, {
    type: "sprite-bad-mushroom",
    x: 512,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 544,
    y: 352
  }, {
    type: "sprite-turtle",
    x: 1056,
    y: 192
  }, {
    type: "sprite-bad-mushroom",
    x: 928,
    y: 384
  }, {
    type: "sprite-bad-mushroom",
    x: 960,
    y: 384
  }, {
    type: "sprite-shell",
    x: 1472,
    y: 384
  }, {
    type: "sprite-shell",
    x: 1440,
    y: 384
  }, {
    type: "sprite-flower",
    x: 2048,
    y: 160
  }, {
    type: "sprite-flower",
    x: 2080,
    y: 160
  }, {
    type: "sprite-horror",
    x: 2208,
    y: 96
  }, {
    type: "sprite-horror",
    x: 2240,
    y: 96
  }, {
    type: "sprite-turtle",
    x: 2176,
    y: 224
  }, {
    type: "sprite-turtle",
    x: 2208,
    y: 224
  }, {
    type: "sprite-grow-mushroom",
    x: 2720,
    y: 256
  }, {
    type: "sprite-grow-mushroom",
    x: 2752,
    y: 256
  }, {
    type: "sprite-turtle",
    x: 2688,
    y: 384
  }, {
    type: "sprite-horror",
    x: 2848,
    y: 384
  }, {
    type: "sprite-horror",
    x: 2880,
    y: 384
  }, {
    type: "sprite-horror",
    x: 2912,
    y: 384
  }, {
    type: "sprite-bad-mushroom",
    x: 3200,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 3200,
    y: 384
  }, {
    type: "sprite-bad-mushroom",
    x: 3232,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 3232,
    y: 384
  }, {
    type: "sprite-bad-mushroom",
    x: 3264,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 3264,
    y: 384
  }, {
    type: "sprite-bad-mushroom",
    x: 3296,
    y: 352
  }, {
    type: "sprite-bad-mushroom",
    x: 3296,
    y: 384
  }, {
    type: "sprite-land",
    x: 0,
    y: 416
  }, {
    type: "sprite-land",
    x: 0,
    y: 448
  }, {
    type: "sprite-land",
    x: 32,
    y: 416
  }, {
    type: "sprite-land",
    x: 32,
    y: 448
  }, {
    type: "sprite-land",
    x: 64,
    y: 416
  }, {
    type: "sprite-land",
    x: 64,
    y: 448
  }, {
    type: "sprite-land",
    x: 96,
    y: 416
  }, {
    type: "sprite-land",
    x: 96,
    y: 448
  }, {
    type: "sprite-land",
    x: 128,
    y: 416
  }, {
    type: "sprite-land",
    x: 128,
    y: 448
  }, {
    type: "sprite-land",
    x: 160,
    y: 416
  }, {
    type: "sprite-land",
    x: 160,
    y: 448
  }, {
    type: "sprite-land",
    x: 192,
    y: 416
  }, {
    type: "sprite-land",
    x: 192,
    y: 448
  }, {
    type: "sprite-land",
    x: 224,
    y: 416
  }, {
    type: "sprite-land",
    x: 224,
    y: 448
  }, {
    type: "sprite-land",
    x: 256,
    y: 416
  }, {
    type: "sprite-land",
    x: 256,
    y: 448
  }, {
    type: "sprite-land",
    x: 288,
    y: 416
  }, {
    type: "sprite-land",
    x: 288,
    y: 448
  }, {
    type: "sprite-land",
    x: 320,
    y: 416
  }, {
    type: "sprite-land",
    x: 320,
    y: 448
  }, {
    type: "sprite-land",
    x: 352,
    y: 416
  }, {
    type: "sprite-land",
    x: 352,
    y: 448
  }, {
    type: "sprite-land",
    x: 384,
    y: 416
  }, {
    type: "sprite-land",
    x: 384,
    y: 448
  }, {
    type: "sprite-land",
    x: 416,
    y: 416
  }, {
    type: "sprite-land",
    x: 416,
    y: 448
  }, {
    type: "sprite-land",
    x: 448,
    y: 416
  }, {
    type: "sprite-land",
    x: 448,
    y: 448
  }, {
    type: "sprite-land",
    x: 480,
    y: 416
  }, {
    type: "sprite-land",
    x: 480,
    y: 448
  }, {
    type: "sprite-land",
    x: 512,
    y: 416
  }, {
    type: "sprite-land",
    x: 512,
    y: 448
  }, {
    type: "sprite-land",
    x: 544,
    y: 416
  }, {
    type: "sprite-land",
    x: 544,
    y: 448
  }, {
    type: "sprite-land",
    x: 576,
    y: 416
  }, {
    type: "sprite-land",
    x: 576,
    y: 448
  }, {
    type: "sprite-land",
    x: 608,
    y: 416
  }, {
    type: "sprite-land",
    x: 608,
    y: 448
  }, {
    type: "sprite-land",
    x: 640,
    y: 416
  }, {
    type: "sprite-land",
    x: 640,
    y: 448
  }, {
    type: "sprite-stone",
    x: 192,
    y: 256
  }, {
    type: "sprite-stone",
    x: 224,
    y: 256
  }, {
    type: "sprite-stone",
    x: 256,
    y: 256
  }, {
    type: "sprite-stone",
    x: 288,
    y: 256
  }, {
    type: "sprite-stone",
    x: 320,
    y: 256
  }, {
    type: "sprite-ask",
    x: 352,
    y: 256
  }, {
    type: "sprite-stone",
    x: 384,
    y: 256
  }, {
    type: "sprite-stone",
    x: 416,
    y: 256
  }, {
    type: "sprite-land",
    x: 800,
    y: 416
  }, {
    type: "sprite-land",
    x: 800,
    y: 448
  }, {
    type: "sprite-land",
    x: 832,
    y: 416
  }, {
    type: "sprite-land",
    x: 832,
    y: 448
  }, {
    type: "sprite-land",
    x: 864,
    y: 416
  }, {
    type: "sprite-land",
    x: 864,
    y: 448
  }, {
    type: "sprite-land",
    x: 896,
    y: 416
  }, {
    type: "sprite-land",
    x: 896,
    y: 448
  }, {
    type: "sprite-land",
    x: 928,
    y: 416
  }, {
    type: "sprite-land",
    x: 928,
    y: 448
  }, {
    type: "sprite-land",
    x: 960,
    y: 416
  }, {
    type: "sprite-land",
    x: 960,
    y: 448
  }, {
    type: "sprite-land",
    x: 992,
    y: 416
  }, {
    type: "sprite-land",
    x: 992,
    y: 448
  }, {
    type: "sprite-land",
    x: 1024,
    y: 416
  }, {
    type: "sprite-land",
    x: 1024,
    y: 448
  }, {
    type: "sprite-land",
    x: 1056,
    y: 416
  }, {
    type: "sprite-land",
    x: 1056,
    y: 448
  }, {
    type: "sprite-stone",
    x: 896,
    y: 256
  }, {
    type: "sprite-stone",
    x: 928,
    y: 256
  }, {
    type: "sprite-stone",
    x: 960,
    y: 256
  }, {
    type: "sprite-stone",
    x: 992,
    y: 256
  }, {
    type: "sprite-stone",
    x: 1024,
    y: 256
  }, {
    type: "sprite-stone",
    x: 1056,
    y: 256
  }, {
    type: "sprite-stone",
    x: 1088,
    y: 256
  }, {
    type: "sprite-land",
    x: 1216,
    y: 416
  }, {
    type: "sprite-land",
    x: 1216,
    y: 448
  }, {
    type: "sprite-land",
    x: 1248,
    y: 416
  }, {
    type: "sprite-land",
    x: 1248,
    y: 448
  }, {
    type: "sprite-land",
    x: 1280,
    y: 416
  }, {
    type: "sprite-land",
    x: 1280,
    y: 448
  }, {
    type: "sprite-land",
    x: 1312,
    y: 416
  }, {
    type: "sprite-land",
    x: 1312,
    y: 448
  }, {
    type: "sprite-land",
    x: 1344,
    y: 416
  }, {
    type: "sprite-land",
    x: 1344,
    y: 448
  }, {
    type: "sprite-land",
    x: 1376,
    y: 416
  }, {
    type: "sprite-land",
    x: 1376,
    y: 448
  }, {
    type: "sprite-land",
    x: 1408,
    y: 416
  }, {
    type: "sprite-land",
    x: 1408,
    y: 448
  }, {
    type: "sprite-land",
    x: 1440,
    y: 416
  }, {
    type: "sprite-land",
    x: 1440,
    y: 448
  }, {
    type: "sprite-land",
    x: 1472,
    y: 416
  }, {
    type: "sprite-land",
    x: 1472,
    y: 448
  }, {
    type: "sprite-land",
    x: 1504,
    y: 416
  }, {
    type: "sprite-land",
    x: 1504,
    y: 448
  }, {
    type: "sprite-land",
    x: 1536,
    y: 416
  }, {
    type: "sprite-land",
    x: 1536,
    y: 448
  }, {
    type: "sprite-land",
    x: 1568,
    y: 416
  }, {
    type: "sprite-land",
    x: 1568,
    y: 448
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 256
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 288
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1344,
    y: 384
  }, {
    type: "sprite-rock",
    x: 1312,
    y: 288
  }, {
    type: "sprite-rock",
    x: 1312,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1312,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1312,
    y: 384
  }, {
    type: "sprite-rock",
    x: 1568,
    y: 288
  }, {
    type: "sprite-rock",
    x: 1568,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1568,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1568,
    y: 384
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 256
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 288
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 320
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 352
  }, {
    type: "sprite-rock",
    x: 1600,
    y: 384
  }, {
    type: "sprite-land",
    x: 1600,
    y: 416
  }, {
    type: "sprite-land",
    x: 1600,
    y: 448
  }, {
    type: "sprite-land",
    x: 1632,
    y: 416
  }, {
    type: "sprite-land",
    x: 1632,
    y: 448
  }, {
    type: "sprite-land",
    x: 1664,
    y: 416
  }, {
    type: "sprite-land",
    x: 1664,
    y: 448
  }, {
    type: "sprite-land",
    x: 1696,
    y: 416
  }, {
    type: "sprite-land",
    x: 1696,
    y: 448
  }, {
    type: "sprite-land",
    x: 1728,
    y: 416
  }, {
    type: "sprite-land",
    x: 1728,
    y: 448
  }, {
    type: "sprite-land",
    x: 1760,
    y: 416
  }, {
    type: "sprite-land",
    x: 1760,
    y: 448
  }, {
    type: "sprite-land",
    x: 1792,
    y: 416
  }, {
    type: "sprite-land",
    x: 1792,
    y: 448
  }, {
    type: "sprite-land",
    x: 1824,
    y: 416
  }, {
    type: "sprite-land",
    x: 1824,
    y: 448
  }, {
    type: "sprite-land",
    x: 1984,
    y: 416
  }, {
    type: "sprite-land",
    x: 1984,
    y: 448
  }, {
    type: "sprite-land",
    x: 2016,
    y: 416
  }, {
    type: "sprite-land",
    x: 2016,
    y: 448
  }, {
    type: "sprite-land",
    x: 2048,
    y: 416
  }, {
    type: "sprite-land",
    x: 2048,
    y: 448
  }, {
    type: "sprite-land",
    x: 2080,
    y: 416
  }, {
    type: "sprite-land",
    x: 2080,
    y: 448
  }, {
    type: "sprite-land",
    x: 2112,
    y: 416
  }, {
    type: "sprite-land",
    x: 2112,
    y: 448
  }, {
    type: "sprite-land",
    x: 2144,
    y: 416
  }, {
    type: "sprite-land",
    x: 2144,
    y: 448
  }, {
    type: "sprite-land",
    x: 2176,
    y: 416
  }, {
    type: "sprite-land",
    x: 2176,
    y: 448
  }, {
    type: "sprite-land",
    x: 2208,
    y: 416
  }, {
    type: "sprite-land",
    x: 2208,
    y: 448
  }, {
    type: "sprite-stone",
    x: 2048,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2080,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2112,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2144,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2176,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2208,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2240,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2272,
    y: 288
  }, {
    type: "sprite-stone",
    x: 2112,
    y: 160
  }, {
    type: "sprite-stone",
    x: 2144,
    y: 160
  }, {
    type: "sprite-stone",
    x: 2176,
    y: 160
  }, {
    type: "sprite-stone",
    x: 2208,
    y: 160
  }, {
    type: "sprite-stone",
    x: 2240,
    y: 160
  }, {
    type: "sprite-stone",
    x: 2272,
    y: 160
  }, {
    type: "sprite-stone",
    x: 2176,
    y: 64
  }, {
    type: "sprite-stone",
    x: 2208,
    y: 64
  }, {
    type: "sprite-stone",
    x: 2240,
    y: 64
  }, {
    type: "sprite-stone",
    x: 2272,
    y: 64
  }, {
    type: "sprite-ask",
    x: 2048,
    y: 160
  }, {
    type: "sprite-ask",
    x: 2080,
    y: 160
  }, {
    type: "sprite-land",
    x: 2240,
    y: 416
  }, {
    type: "sprite-land",
    x: 2240,
    y: 448
  }, {
    type: "sprite-land",
    x: 2272,
    y: 416
  }, {
    type: "sprite-land",
    x: 2272,
    y: 448
  }, {
    type: "sprite-land",
    x: 2304,
    y: 416
  }, {
    type: "sprite-land",
    x: 2304,
    y: 448
  }, {
    type: "sprite-land",
    x: 2336,
    y: 416
  }, {
    type: "sprite-land",
    x: 2336,
    y: 448
  }, {
    type: "sprite-land",
    x: 2368,
    y: 416
  }, {
    type: "sprite-land",
    x: 2368,
    y: 448
  }, {
    type: "sprite-land",
    x: 2400,
    y: 416
  }, {
    type: "sprite-land",
    x: 2400,
    y: 448
  }, {
    type: "sprite-land",
    x: 2432,
    y: 416
  }, {
    type: "sprite-land",
    x: 2432,
    y: 448
  }, {
    type: "sprite-land",
    x: 2560,
    y: 416
  }, {
    type: "sprite-land",
    x: 2560,
    y: 448
  }, {
    type: "sprite-land",
    x: 2592,
    y: 416
  }, {
    type: "sprite-land",
    x: 2592,
    y: 448
  }, {
    type: "sprite-land",
    x: 2624,
    y: 416
  }, {
    type: "sprite-land",
    x: 2624,
    y: 448
  }, {
    type: "sprite-land",
    x: 2656,
    y: 416
  }, {
    type: "sprite-land",
    x: 2656,
    y: 448
  }, {
    type: "sprite-land",
    x: 2688,
    y: 416
  }, {
    type: "sprite-land",
    x: 2688,
    y: 448
  }, {
    type: "sprite-land",
    x: 2720,
    y: 416
  }, {
    type: "sprite-land",
    x: 2720,
    y: 448
  }, {
    type: "sprite-land",
    x: 2752,
    y: 416
  }, {
    type: "sprite-land",
    x: 2752,
    y: 448
  }, {
    type: "sprite-land",
    x: 2784,
    y: 416
  }, {
    type: "sprite-land",
    x: 2784,
    y: 448
  }, {
    type: "sprite-land",
    x: 2816,
    y: 416
  }, {
    type: "sprite-land",
    x: 2816,
    y: 448
  }, {
    type: "sprite-land",
    x: 2848,
    y: 416
  }, {
    type: "sprite-land",
    x: 2848,
    y: 448
  }, {
    type: "sprite-land",
    x: 2880,
    y: 416
  }, {
    type: "sprite-land",
    x: 2880,
    y: 448
  }, {
    type: "sprite-land",
    x: 2912,
    y: 416
  }, {
    type: "sprite-land",
    x: 2912,
    y: 448
  }, {
    type: "sprite-land",
    x: 2944,
    y: 416
  }, {
    type: "sprite-land",
    x: 2944,
    y: 448
  }, {
    type: "sprite-land",
    x: 2976,
    y: 416
  }, {
    type: "sprite-land",
    x: 2976,
    y: 448
  }, {
    type: "sprite-land",
    x: 3008,
    y: 416
  }, {
    type: "sprite-land",
    x: 3008,
    y: 448
  }, {
    type: "sprite-ask",
    x: 2720,
    y: 256
  }, {
    type: "sprite-ask",
    x: 2752,
    y: 256
  }, {
    type: "sprite-rock",
    x: 2784,
    y: 256
  }, {
    type: "sprite-rock",
    x: 2784,
    y: 288
  }, {
    type: "sprite-rock",
    x: 2784,
    y: 320
  }, {
    type: "sprite-rock",
    x: 2784,
    y: 352
  }, {
    type: "sprite-land",
    x: 3136,
    y: 416
  }, {
    type: "sprite-land",
    x: 3136,
    y: 448
  }, {
    type: "sprite-land",
    x: 3168,
    y: 416
  }, {
    type: "sprite-land",
    x: 3168,
    y: 448
  }, {
    type: "sprite-land",
    x: 3200,
    y: 416
  }, {
    type: "sprite-land",
    x: 3200,
    y: 448
  }, {
    type: "sprite-land",
    x: 3232,
    y: 416
  }, {
    type: "sprite-land",
    x: 3232,
    y: 448
  }, {
    type: "sprite-land",
    x: 3264,
    y: 416
  }, {
    type: "sprite-land",
    x: 3264,
    y: 448
  }, {
    type: "sprite-land",
    x: 3296,
    y: 416
  }, {
    type: "sprite-land",
    x: 3296,
    y: 448
  }, {
    type: "sprite-land",
    x: 3328,
    y: 416
  }, {
    type: "sprite-land",
    x: 3328,
    y: 448
  }, {
    type: "sprite-land",
    x: 3360,
    y: 416
  }, {
    type: "sprite-land",
    x: 3360,
    y: 448
  }, {
    type: "sprite-land",
    x: 3392,
    y: 416
  }, {
    type: "sprite-land",
    x: 3392,
    y: 448
  }, {
    type: "sprite-land",
    x: 3424,
    y: 416
  }, {
    type: "sprite-land",
    x: 3424,
    y: 448
  }, {
    type: "sprite-land",
    x: 3456,
    y: 416
  }, {
    type: "sprite-land",
    x: 3456,
    y: 448
  }, {
    type: "sprite-land",
    x: 3488,
    y: 416
  }, {
    type: "sprite-land",
    x: 3488,
    y: 448
  }, {
    type: "sprite-land",
    x: 3520,
    y: 416
  }, {
    type: "sprite-land",
    x: 3520,
    y: 448
  }, {
    type: "sprite-land",
    x: 3616,
    y: 416
  }, {
    type: "sprite-land",
    x: 3616,
    y: 448
  }, {
    type: "sprite-land",
    x: 3648,
    y: 416
  }, {
    type: "sprite-land",
    x: 3648,
    y: 448
  }, {
    type: "sprite-land",
    x: 3680,
    y: 416
  }, {
    type: "sprite-land",
    x: 3680,
    y: 448
  }, {
    type: "sprite-land",
    x: 3712,
    y: 416
  }, {
    type: "sprite-land",
    x: 3712,
    y: 448
  }, {
    type: "sprite-land",
    x: 3744,
    y: 416
  }, {
    type: "sprite-land",
    x: 3744,
    y: 448
  }, {
    type: "sprite-land",
    x: 3776,
    y: 416
  }, {
    type: "sprite-land",
    x: 3776,
    y: 448
  }, {
    type: "sprite-land",
    x: 3808,
    y: 416
  }, {
    type: "sprite-land",
    x: 3808,
    y: 448
  }, {
    type: "sprite-land",
    x: 3840,
    y: 416
  }, {
    type: "sprite-land",
    x: 3840,
    y: 448
  }, {
    type: "sprite-land",
    x: 3872,
    y: 416
  }, {
    type: "sprite-land",
    x: 3872,
    y: 448
  }, {
    type: "sprite-land",
    x: 3904,
    y: 416
  }, {
    type: "sprite-land",
    x: 3904,
    y: 448
  }, {
    type: "sprite-land",
    x: 3936,
    y: 416
  }, {
    type: "sprite-land",
    x: 3936,
    y: 448
  }, {
    type: "sprite-rock",
    x: 3680,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3712,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3744,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3776,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3808,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3840,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 384
  }, {
    type: "sprite-rock",
    x: 3712,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3744,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3776,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3808,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3840,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 352
  }, {
    type: "sprite-rock",
    x: 3744,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3776,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3808,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3840,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 320
  }, {
    type: "sprite-rock",
    x: 3776,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3808,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3840,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 288
  }, {
    type: "sprite-rock",
    x: 3808,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3840,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 256
  }, {
    type: "sprite-rock",
    x: 3840,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 224
  }, {
    type: "sprite-rock",
    x: 3872,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 192
  }, {
    type: "sprite-rock",
    x: 3904,
    y: 160
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 160
  }, {
    type: "sprite-rock",
    x: 3936,
    y: 128
  }, {
    type: "sprite-land",
    x: 3968,
    y: 416
  }, {
    type: "sprite-land",
    x: 3968,
    y: 448
  }, {
    type: "sprite-land",
    x: 4000,
    y: 416
  }, {
    type: "sprite-land",
    x: 4000,
    y: 448
  }, {
    type: "sprite-land",
    x: 4032,
    y: 416
  }, {
    type: "sprite-land",
    x: 4032,
    y: 448
  }, {
    type: "sprite-land",
    x: 4064,
    y: 416
  }, {
    type: "sprite-land",
    x: 4064,
    y: 448
  }, {
    type: "sprite-land",
    x: 4096,
    y: 416
  }, {
    type: "sprite-land",
    x: 4096,
    y: 448
  }, {
    type: "sprite-land",
    x: 4128,
    y: 416
  }, {
    type: "sprite-land",
    x: 4128,
    y: 448
  }, {
    type: "sprite-land",
    x: 4160,
    y: 416
  }, {
    type: "sprite-land",
    x: 4160,
    y: 448
  }, {
    type: "sprite-land",
    x: 4192,
    y: 416
  }, {
    type: "sprite-land",
    x: 4192,
    y: 448
  }, {
    type: "sprite-land",
    x: 4224,
    y: 416
  }, {
    type: "sprite-land",
    x: 4224,
    y: 448
  }, {
    type: "sprite-land",
    x: 4256,
    y: 416
  }, {
    type: "sprite-land",
    x: 4256,
    y: 448
  }, {
    type: "sprite-land",
    x: 4288,
    y: 416
  }, {
    type: "sprite-land",
    x: 4288,
    y: 448
  }, {
    type: "sprite-land",
    x: 4320,
    y: 416
  }, {
    type: "sprite-land",
    x: 4320,
    y: 448
  }, {
    type: "sprite-land",
    x: 4352,
    y: 416
  }, {
    type: "sprite-land",
    x: 4352,
    y: 448
  }, {
    type: "sprite-land",
    x: 4384,
    y: 416
  }, {
    type: "sprite-land",
    x: 4384,
    y: 448
  }, {
    type: "sprite-land",
    x: 4416,
    y: 416
  }, {
    type: "sprite-land",
    x: 4416,
    y: 448
  }, {
    type: "sprite-land",
    x: 4448,
    y: 416
  }, {
    type: "sprite-land",
    x: 4448,
    y: 448
  }, {
    x: 4448,
    y: 64,
    type: "sprite-win"
  }]
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.92.1/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.7_webpack@5.92.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&setup=true&lang=js

const Homevue_type_script_setup_true_lang_js_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
  href: "https://github.com/hhzzcc/super-mario"
}, "Github", -1);
const Homevue_type_script_setup_true_lang_js_hoisted_2 = [Homevue_type_script_setup_true_lang_js_hoisted_1];
const Homevue_type_script_setup_true_lang_js_hoisted_3 = {
  key: 1
};








/* harmony default export */ var Homevue_type_script_setup_true_lang_js = ({
  setup(__props) {
    const loading = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const showMenu = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const maps = [{
      title: "第一关",
      mapData: data
    }, {
      title: "第二关",
      mapData: map2_data
    }, {
      title: "第三关",
      mapData: map3_data
    }];
    const active = (0,reactivity_esm_bundler/* ref */.KR)(maps[0].title);
    function handleAddMap(mapData) {
      const title = "新地图-" + maps.length;
      maps.push({
        title,
        mapData
      });
      active.value = title;
    }
    const isEdit = (0,reactivity_esm_bundler/* computed */.EW)(() => !active.value);
    (0,runtime_core_esm_bundler/* onMounted */.sV)(async () => {
      await loadAllResources();
      loading.value = false;
    });
    return (_ctx, _cache) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Container)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.MenuContainer)
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(menu, {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Menu),
        style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
          width: showMenu.value ? '240px' : '0'
        }),
        active: active.value,
        maps: maps,
        onCheck: _cache[0] || (_cache[0] = v => active.value = v),
        onAdd: _cache[1] || (_cache[1] = () => active.value = '')
      }, null, 8, ["class", "style", "active"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        onClick: _cache[2] || (_cache[2] = $event => showMenu.value = !showMenu.value),
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Btn)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, (0,shared_esm_bundler/* toDisplayString */.v_)(showMenu.value ? "‹" : "›"), 1)], 2)], 2), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Content)
      }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Header)
      }, Homevue_type_script_setup_true_lang_js_hoisted_2, 2), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Game)
      }, [loading.value ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: 0,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Loading)
      }, "资源加载中...", 2)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", Homevue_type_script_setup_true_lang_js_hoisted_3, [!(0,reactivity_esm_bundler/* unref */.R1)(isEdit) ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: 0,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(_ctx.$style.Tip)
      }, " 方向键控制人物，空格发射子弹 ", 2)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(mario, {
        isEdit: (0,reactivity_esm_bundler/* unref */.R1)(isEdit),
        mapData: (0,reactivity_esm_bundler/* unref */.R1)(isEdit) ? null : maps.find(v => v.title === active.value).mapData,
        key: active.value,
        onAddMap: handleAddMap
      }, null, 8, ["isEdit", "mapData"])]))], 2)], 2)], 2);
    };
  }
});
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.92.1/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-31.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.92.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-31.use[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.39_webpack@5.92.1/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-31.use[2]!./node_modules/.pnpm/less-loader@8.0.0_less@4.0.0_webpack@5.92.1/node_modules/less-loader/dist/cjs.js??clonedRuleSet-31.use[3]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.2.13_webpack@5.92.1/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fc82f266&lang=less&module=true
// extracted by mini-css-extract-plugin
/* harmony default export */ var Homevue_type_style_index_0_id_fc82f266_lang_less_module_true = ({"Container":"Home_Container_TvPjS","MenuContainer":"Home_MenuContainer_Jpi4d","Menu":"Home_Menu_RXuZa","Btn":"Home_Btn_oOsOI","Content":"Home_Content_JBjb0","Header":"Home_Header_YYyV4","Game":"Home_Game_OzZ_G","Loading":"Home_Loading_rTSCN","Tip":"Home_Tip_rMaU0"});
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=style&index=0&id=fc82f266&lang=less&module=true
 
;// CONCATENATED MODULE: ./src/views/Home.vue



const Home_cssModules = {}
;
Home_cssModules["$style"] = Homevue_type_style_index_0_id_fc82f266_lang_less_module_true

;
const Home_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(Homevue_type_script_setup_true_lang_js, [['__cssModules',Home_cssModules]])

/* harmony default export */ var Home = (Home_exports_);

/***/ })

}]);
//# sourceMappingURL=Home.d4294372.js.map