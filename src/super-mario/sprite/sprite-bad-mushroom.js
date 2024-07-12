import { spriteBadMushroomResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { DynamicSprite } from "./dynamic-sprite";

export class SpriteBadMushroom extends DynamicSprite {
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
    this.vx = -this.width / SIZE;
    this.vy = 0;

    this.resources = {
      default: [spriteBadMushroomResources[0], spriteBadMushroomResources[1]],

      dieByBullet: [
        spriteBadMushroomResources[2],
        spriteBadMushroomResources[3],
      ],
      dieByTrample: [spriteBadMushroomResources[4]],
    };
    this.type = "default";
    this.active();
  }

  dieByTrample() {
    this.unActive();
    this.type = "dieByTrample";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;

    setTimeout(() => {
      this.destroy();
    }, 200);
  }

  dieByBullet() {
    this.unActive();
    this.type = "dieByBullet";
    this.vx = 0;
    this.vy = 0;
    this.frame = 0;

    const animate = () => {
      if (this.beginX === undefined) {
        this.beginX = this.x;
        this.beginY = this.y;
        this.animatedX = 0;
      }

      this.animatedX += 1;
      this.animatedY =
        0.2 * this.animatedX * this.animatedX - 5 * this.animatedX;
      this.x = this.beginX + this.animatedX;
      this.y = this.beginY + this.animatedY;

      if (this.y > this.beginY + 300) {
        this.destroy();
        return;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }

  draw(context, camera) {
    const resource = this.resources[this.type][~~this.frame];
    this.frame =
      ~~(this.frame + 0.03) > this.resources[this.type].length - 1
        ? 0
        : this.frame + 0.03;

    this.x += this.vx;
    this.y += this.vy;

    context.drawImage(
      resource,
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
