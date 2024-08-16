export class Jumping {
  jumping = [];

  constructor({ G }) {
    this.G = G;
  }

  getJumpSprite(sprite) {
    return this.jumping.find((v) => v.sprite === sprite);
  }

  add(sprite, v0 = 9) {
    const jumpSprite = this.getJumpSprite(sprite);

    if (jumpSprite) {
      // 按得越久，受力越小，跳的越高
      if (jumpSprite.a > 0.5 * this.G) {
        jumpSprite.a -= 0.015;
      }
      return;
    }

    sprite.vy = 0;
    const item = {
      // 初速度
      v0,

      // 加速度
      a: this.G,
      jumping: true,
      sprite,
    };
    this.jumping.push(item);
  }

  remove(sprite) {
    for (let i = 0; i < this.jumping.length; i++) {
      if (this.jumping[i].sprite === sprite) {
        this.jumping.splice(i, 1);
        break;
      }
    }
  }
}
