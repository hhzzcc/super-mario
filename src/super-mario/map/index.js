import { BuildingLand } from "../building/building-land";
import { BuildingAsk } from "../building/building-ask";
import { BuildingFlower } from "../building/building-flower";
import { BuildingGrowMushroom } from "../building/building-grow-mushroom";

export class Map {
  constructor() {}

  serialization() {}

  deserialization(mapData) {
    const { data } = mapData;

    // 静态精灵
    const statics = [];

    // 动态精灵
    const dynamics = [];
    data.forEach((v) => {
      switch (v.type) {
        case "building-land":
          statics.push(
            new BuildingLand({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "building-ask":
          statics.push(
            new BuildingAsk({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "building-flower":
          dynamics.push(
            new BuildingFlower({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-grow-mushroom":
          dynamics.push(
            new BuildingGrowMushroom({
              x: v.x,
              y: v.y,
            })
          );
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
