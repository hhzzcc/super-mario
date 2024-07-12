import { spriteGoldResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { StaticSprite } from "./static-sprite";

export class SpriteGold extends StaticSprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });

    this.frame = 0;
  }

  draw(context, camera) {
    const resource = spriteGoldResources[~~this.frame];
    this.frame =
      this.frame >= spriteGoldResources.length - 1 ? 0 : this.frame + 0.1;

    context.drawImage(
      resource,
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
