function loadImages(urls) {
  const promises = [];
  urls.forEach((url) => {
    promises.push(
      new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (err) => reject(err);
        image.src = url;
      })
    );
  });
  return Promise.all(promises);
}
function loadBaseMarioResources() {
  return loadImages([
    "imgs/mario/base/static/static.jpg",

    "imgs/mario/base/jump/jump-left.jpg",
    "imgs/mario/base/jump/jump-right.jpg",

    "imgs/mario/base/left/frame-1.jpg",
    "imgs/mario/base/left/frame-2.jpg",
    "imgs/mario/base/left/frame-3.jpg",

    "imgs/mario/base/right/frame-1.jpg",
    "imgs/mario/base/right/frame-2.jpg",
    "imgs/mario/base/right/frame-3.jpg",

    "imgs/mario/base/die/frame-1.jpg",
  ]);
}

function loadBigMarioResources() {
  return loadImages([
    "imgs/mario/big/static/static.jpg",

    "imgs/mario/big/jump/jump-left.jpg",
    "imgs/mario/big/jump/jump-right.jpg",

    "imgs/mario/big/left/frame-1.jpg",
    "imgs/mario/big/left/frame-2.jpg",
    "imgs/mario/big/left/frame-3.jpg",

    "imgs/mario/big/right/frame-1.jpg",
    "imgs/mario/big/right/frame-2.jpg",
    "imgs/mario/big/right/frame-3.jpg",
  ]);
}

function loadBulletMarioResources() {
  return loadImages([
    "imgs/mario/bullet/static/static.jpg",

    "imgs/mario/bullet/jump/jump-left.jpg",
    "imgs/mario/bullet/jump/jump-right.jpg",

    "imgs/mario/bullet/left/frame-1.jpg",
    "imgs/mario/bullet/left/frame-2.jpg",
    "imgs/mario/bullet/left/frame-3.jpg",

    "imgs/mario/bullet/right/frame-1.jpg",
    "imgs/mario/bullet/right/frame-2.jpg",
    "imgs/mario/bullet/right/frame-3.jpg",

    "imgs/mario/bullet/attack/left.jpg",
    "imgs/mario/bullet/attack/right.jpg",
  ]);
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
  return loadImages([
    "imgs/building/ask/frame-1.jpg",
    "imgs/building/ask/frame-2.jpg",
    "imgs/building/ask/frame-3.jpg",
    "imgs/building/ask/frame-4.jpg",
    "imgs/building/ask/frame-5.jpg",
    "imgs/building/ask/frame-6.jpg",
    "imgs/building/ask/empty.jpg",
  ]);
}

function loadSpriteWinResources() {
  return loadImages([
    "imgs/building/win/flag.jpg",
    "imgs/building/win/round.jpg",
    "imgs/building/win/rod.jpg",
  ]);
}

function loadSpritePipeResources() {
  return loadImages([
    "imgs/building/pipe/normal.jpg",
    "imgs/building/pipe/fragment.jpg",
  ]);
}

function loadSpriteFlowerResources() {
  return loadImages([
    "imgs/props/flow/frame-1.jpg",
    "imgs/props/flow/frame-2.jpg",
    "imgs/props/flow/frame-3.jpg",
    "imgs/props/flow/frame-4.jpg",
  ]);
}

function loadSpriteGoldResources() {
  return loadImages([
    "imgs/props/gold/frame-1.jpg",
    "imgs/props/gold/frame-2.jpg",
    "imgs/props/gold/frame-3.jpg",
    "imgs/props/gold/frame-4.jpg",
    "imgs/props/gold/frame-5.jpg",
    "imgs/props/gold/frame-6.jpg",
  ]);
}

function loadSpriteGrowMushroomResources() {
  return loadImages(["imgs/props/grow-mushroom/frame-1.jpg"]);
}

function loadSpriteBadMushroomResources() {
  return loadImages([
    "imgs/bad/mushroom/frame-1.jpg",
    "imgs/bad/mushroom/frame-2.jpg",
    "imgs/bad/mushroom/die-frame-1.jpg",
    "imgs/bad/mushroom/die-frame-2.jpg",
    "imgs/bad/mushroom/die.jpg",
  ]);
}

function loadSpriteHorrorResources() {
  return loadImages([
    "imgs/bad/horror/frame-1.jpg",
    "imgs/bad/horror/frame-2.jpg",
    "imgs/bad/horror/die-frame-1.jpg",
    "imgs/bad/horror/die-frame-2.jpg",
  ]);
}

function loadSpriteTurtleResources() {
  return loadImages([
    "imgs/bad/turtle/frame-1.jpg",
    "imgs/bad/turtle/frame-2.jpg",
    "imgs/bad/turtle/hide-frame-1.jpg",
    "imgs/bad/turtle/hide-frame-2.jpg",
    "imgs/bad/turtle/die-frame-1.jpg",
    "imgs/bad/turtle/die-frame-2.jpg",
    "imgs/bad/turtle/fly-frame-1.jpg",
    "imgs/bad/turtle/fly-frame-2.jpg",
  ]);
}

function loadSpriteShellResources() {
  return loadImages([
    "imgs/bad/shell/frame-1.jpg",
    "imgs/bad/shell/frame-2.jpg",
    "imgs/bad/shell/hide.jpg",
  ]);
}

function loadSpriteBulletResources() {
  return loadImages([
    "imgs/bullet/frame-1.jpg",
    "imgs/bullet/frame-2.jpg",
    "imgs/bullet/frame-3.jpg",
    "imgs/bullet/frame-4.jpg",
  ]);
}

export let backgroundResources;
export let baseMarioResources;
export let bigMarioResources;
export let bulletMarioResources;
export let spriteBulletResources;
export let spriteLandResources;
export let spriteRockResources;
export let spriteStoneResources;
export let spriteStoneBornResources;
export let SpriteAskResources;
export let spriteFlowerResources;
export let spriteGoldResources;
export let spriteGrowMushroomResources;
export let spriteBadMushroomResources;
export let spriteHorrorResources;
export let spriteTurtleResources;
export let spriteShellResources;
export let spriteWinResources;
export let spritePipeResources;

export async function loadAllResources() {
  [
    backgroundResources,
    baseMarioResources,
    bigMarioResources,
    bulletMarioResources,
    spriteBulletResources,
    spriteLandResources,
    spriteRockResources,
    spriteStoneResources,
    spriteStoneBornResources,
    SpriteAskResources,
    spriteFlowerResources,
    spriteGoldResources,
    spriteGrowMushroomResources,
    spriteBadMushroomResources,
    spriteHorrorResources,
    spriteTurtleResources,
    spriteShellResources,
    spriteWinResources,
    spritePipeResources,
  ] = await Promise.all([
    loadBackgroundResources(),
    loadBaseMarioResources(),
    loadBigMarioResources(),
    loadBulletMarioResources(),
    loadSpriteBulletResources(),
    loadSpriteLandResources(),
    loadSpriteRockResources(),
    loadSpriteStoneResources(),
    loadSpriteStoneBornResources(),
    loadSpriteAskResources(),
    loadSpriteFlowerResources(),
    loadSpriteGoldResources(),
    loadSpriteGrowMushroomResources(),
    loadSpriteBadMushroomResources(),
    loadSpriteHorrorResources(),
    loadSpriteTurtleResources(),
    loadSpriteShellResources(),
    loadSpriteWinResources(),
    loadSpritePipeResources(),
  ]);
}
