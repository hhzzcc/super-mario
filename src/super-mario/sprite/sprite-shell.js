import { spriteShellResources } from "../utils/loadResources";
import { SIZE } from "../constants";
import { DynamicSprite } from "./dynamic-sprite";

export class SpriteShell extends DynamicSprite {
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
      default: [spriteShellResources[0], spriteShellResources[1]],
      hide: [spriteShellResources[2]],
      dieByBullet: [spriteShellResources[0], spriteShellResources[1]],
    };
    this.type = "default";
    this.active();
  }

  isAttacking() {
    return (this.vx !== 0) & (this.type === "hide");
  }

  trampleLeft() {
    this.frame = 0;

    if (this.type !== "hide") {
      this.type = "hide";
      this.vx = 0;
    } else {
      this.vx = this.vx === 0 ? 10 : 0;
    }
  }

  trampleRight() {
    this.frame = 0;
    if (this.type !== "hide") {
      this.type = "hide";
      this.vx = 0;
    } else {
      this.vx = this.vx === 0 ? -10 : 0;
    }
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
