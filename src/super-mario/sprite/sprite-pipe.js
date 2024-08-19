import { spritePipeResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { StaticSprite } from "./static-sprite";

const DEFAULT_HEIGHT = 2 * SIZE;
export class SpritePipe extends StaticSprite {
  constructor({ x, y, height = DEFAULT_HEIGHT }) {
    super({
      x,
      y,
      width: 2 * SIZE,
      height,
    });
  }

  draw(context, camera) {
    const rest = this.height - DEFAULT_HEIGHT;
    context.drawImage(
      spritePipeResources[0],
      this.x - camera.x,
      this.y,
      this.width,
      DEFAULT_HEIGHT
    );

    for (let i = 0; i < rest; i += SIZE / 2) {
      context.drawImage(
        spritePipeResources[1],
        this.x - camera.x,
        this.y + DEFAULT_HEIGHT + i,
        this.width,
        SIZE / 2
      );
    }
  }
}
