import { SpriteLand } from "../sprite/sprite-land";
import { SpriteAsk } from "../sprite/sprite-ask";
import { SpriteFlower } from "../sprite/sprite-flower";
import { SpriteGrowMushroom } from "../sprite/sprite-grow-mushroom";
import { SpriteBadMushroom } from "../sprite/sprite-bad-mushroom";
import { SpriteStone } from "../sprite/sprite-stone";
import { SpriteWin } from "../sprite/sprite-win";
import { SpriteGold } from "../sprite/sprite-gold";
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
            new SpriteLand({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "building-ask":
          statics.push(
            new SpriteAsk({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "building-stone":
          statics.push(
            new SpriteStone({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-win":
          statics.push(
            new SpriteWin({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-gold":
          statics.push(
            new SpriteGold({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-flower":
          dynamics.push(
            new SpriteFlower({
              x: v.x,
              y: v.y,
            })
          );
          break;

        case "building-grow-mushroom":
          dynamics.push(
            new SpriteGrowMushroom({
              x: v.x,
              y: v.y,
            })
          );
          break;
        case "building-bad-mushroom":
          dynamics.push(
            new SpriteBadMushroom({
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
