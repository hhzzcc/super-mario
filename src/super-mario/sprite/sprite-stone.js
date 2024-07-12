import { spriteStoneResources } from "../utils/loadResources";
import { StaticSprite } from "./static-sprite";
import { SIZE } from "../constants";

const COLLECT_OFFSET = 6;
export class SpriteStone extends StaticSprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.collectY = null;
    this.collectStep = 0;
  }

  hit() {
    this.collectY = this.y - COLLECT_OFFSET;
  }

  draw(context, camera) {
    if (this.collectY) {
      this.collectY++;
      this.collectStep++;

      if (this.collectStep > COLLECT_OFFSET) {
        this.collectStep = 0;
        this.collectY = null;
      }
    }

    context.drawImage(
      spriteStoneResources[0],
      this.x - camera.x,
      this.collectY || this.y,
      this.width,
      this.height
    );
  }
}
