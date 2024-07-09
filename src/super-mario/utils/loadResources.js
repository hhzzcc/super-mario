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
export let buildingLandResources;
export let buildingAskResources;

export async function loadAllResources() {
  [
    backgroundResources,
    baseMarioResources,
    buildingLandResources,
    buildingAskResources,
  ] = await Promise.all([
    loadBackgroundResources(),
    loadBaseMarioResources(),
    loadBuildingLandResources(),
    loadBuildingAskResources(),
  ]);
}
