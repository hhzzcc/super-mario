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

function loadBuildingLandResources() {
  return loadImages(["imgs/building/land/land.jpg"]);
}

function loadBuildingAskResources() {
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

function loadBuildingFlowerResources() {
  return loadImages([
    "imgs/props/flow/frame-1.jpg",
    "imgs/props/flow/frame-2.jpg",
    "imgs/props/flow/frame-3.jpg",
    "imgs/props/flow/frame-4.jpg",
  ]);
}

function loadBuildingGrowMushroomResources() {
  return loadImages(["/imgs/props/grow-mushroom/frame-1.jpg"]);
}

function loadBuildingBulletResources() {
  return loadImages([
    "/imgs/bullet/frame-1.jpg",
    "/imgs/bullet/frame-2.jpg",
    "/imgs/bullet/frame-3.jpg",
    "/imgs/bullet/frame-4.jpg",
  ]);
}

// function loadBuildingResources() {
//   return Promise.all([
//     loadImages("imgs/building/ask/frame-1.jpg"),
//     loadImages("imgs/building/ask/frame-2.jpg"),
//     loadImages("imgs/building/ask/frame-3.jpg"),
//     loadImages("imgs/building/ask/frame-4.jpg"),
//     loadImages("imgs/building/ask/frame-5.jpg"),
//     loadImages("imgs/building/ask/frame-6.jpg"),
//     loadImages("imgs/building/ask/nothing.jpg"),

//     loadImages("imgs/building/land/land.jpg"),
//     loadImages("imgs/building/stone/stone.jpg"),
//     loadImages("imgs/building/rock/rock.jpg"),

//     loadImages("imgs/building/gold/frame-1.jpg"),
//     loadImages("imgs/building/gold/frame-2.jpg"),
//     loadImages("imgs/building/gold/frame-3.jpg"),
//     loadImages("imgs/building/gold/frame-4.jpg"),
//     loadImages("imgs/building/gold/frame-5.jpg"),
//     loadImages("imgs/building/gold/frame-6.jpg"),

//     loadImages("imgs/building/flow/frame-1.jpg"),
//     loadImages("imgs/building/flow/frame-2.jpg"),
//     loadImages("imgs/building/flow/frame-3.jpg"),
//     loadImages("imgs/building/flow/frame-4.jpg"),

//     loadImages("imgs/building/pipe/pipelineL.jpg"),
//     loadImages("imgs/building/pipe/pipelineR.jpg"),
//     loadImages("imgs/building/pipe/pipelineTopL.jpg"),
//     loadImages("imgs/building/pipe/pipelineTopR.jpg"),

//     loadImages("imgs/building/win/flag.jpg"),
//     loadImages("imgs/building/win/round.jpg"),
//     loadImages("imgs/building/win/rod.jpg"),
//   ]);
// }

export let backgroundResources;
export let baseMarioResources;
export let bigMarioResources;
export let bulletMarioResources;
export let buildingBulletResources;
export let buildingLandResources;
export let buildingAskResources;
export let buildingFlowerResources;
export let buildingGrowMushroomResources;

export async function loadAllResources() {
  [
    backgroundResources,
    baseMarioResources,
    bigMarioResources,
    bulletMarioResources,
    buildingBulletResources,
    buildingLandResources,
    buildingAskResources,
    buildingFlowerResources,
    buildingGrowMushroomResources,
  ] = await Promise.all([
    loadBackgroundResources(),
    loadBaseMarioResources(),
    loadBigMarioResources(),
    loadBulletMarioResources(),
    loadBuildingBulletResources(),
    loadBuildingLandResources(),
    loadBuildingAskResources(),
    loadBuildingFlowerResources(),
    loadBuildingGrowMushroomResources(),
  ]);
}
