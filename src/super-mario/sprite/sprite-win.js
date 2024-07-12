import { spriteWinResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { StaticSprite } from "./static-sprite";

export class SpriteWin extends StaticSprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });
  }

  draw(context, camera) {
    this.height = camera.height - SIZE;
    context.drawImage(
      spriteWinResources[0],
      this.x - camera.x - SIZE / 2,
      this.y,
      SIZE,
      SIZE
    );

    context.drawImage(
      spriteWinResources[1],
      this.x - camera.x,
      this.y - SIZE / 2,
      SIZE,
      SIZE
    );

    for (let i = 0; i < this.height - SIZE; i++) {
      context.drawImage(
        spriteWinResources[2],
        this.x - camera.x,
        this.y - SIZE / 2 + SIZE * (i + 1),
        SIZE,
        SIZE
      );
    }
  }
}
