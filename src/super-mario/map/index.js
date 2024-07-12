import { BuildingLand } from "../building/building-land";
import { BuildingAsk } from "../building/building-ask";
import { BuildingFlower } from "../building/building-flower";
import { BuildingGrowMushroom } from "../building/building-grow-mushroom";
import { BuildingBadMushroom } from "../building/building-bad-mushroom";
import { BuildingStone } from "../building/building-stone";
import { BuildingWin } from "../building/building-win";
import { BuildingGold } from "../building/building-gold";
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

        case "building-stone":
          statics.push(
            new BuildingStone({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-win":
          statics.push(
            new BuildingWin({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-gold":
          statics.push(
            new BuildingGold({
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
          break;
        case "building-bad-mushroom":
          dynamics.push(
            new BuildingBadMushroom({
              x: v.x,
              y: v.y,
            })
          );
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
