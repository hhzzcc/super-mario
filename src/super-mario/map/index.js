import { BuildingLand } from "../building/building-land";

export class Map {
  constructor() {}

  serialization() {}

  deserialization(mapData) {
    const { data } = mapData;

    // 静态精灵
    const statics = {};

    // 动态精灵
    const dynamics = [];
    data.forEach((v) => {
      switch (v.type) {
        case "building-land":
          statics[`${v.x}-${v.y}`] = new BuildingLand({
            x: v.x,
            y: v.y,
          });
          break;

        case "building-ask":
          statics[`${v.x}-${v.y}`] = new BuildingLand({
            x: v.x,
            y: v.y,
          });
          break;
      }
    });

    return {
      statics,
      dynamics,
    };
  }

  import() {}

  export() {}
}
