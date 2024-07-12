import { SpriteAskResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { StaticSprite } from "./static-sprite";

const COLLECT_OFFSET = 6;
export class SpriteAsk extends StaticSprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.frame = 0;
    this.collectY = null;
    this.collectStep = 0;
    this.resources = {
      default: [
        SpriteAskResources[0],
        SpriteAskResources[1],
        SpriteAskResources[2],
        SpriteAskResources[3],
        SpriteAskResources[4],
        SpriteAskResources[5],
      ],
      empty: [SpriteAskResources[6]],
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
    this.frame =
      this.frame >= this.resources[this.type].length - 1 ? 0 : this.frame + 0.1;

    if (this.collectY) {
      this.collectY++;
      this.collectStep++;

      if (this.collectStep > COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
      }
    }

    context.drawImage(
      resource,
      this.x - camera.x,
      this.collectY || this.y,
      this.width,
      this.height
    );
  }
}
