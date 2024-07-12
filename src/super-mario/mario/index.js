import { BaseMario } from "./base";
import { BigMario } from "./big";
import { BulletMario } from "./bullet";

import { Sprite } from "../sprite";
import { SIZE } from "../constants";
import { BuildingBullet } from "../building/building-bullet";

function getActionTypeBySpeed(vx, vy, isAttack, isDie) {
  if (isDie) {
    return "die";
  } else if (vx === 0 && vy === 0) {
    if (isAttack) {
      return "attackRight";
    }
    return "static";
  }
  // 往右边跳
  else if (vy !== 0 && vx >= 0) {
    return "jumpRight";
  }
  // 往左边跳
  else if (vy !== 0 && vx < 0) {
    return "jumpLeft";
  }
  // 往左边走
  else if (vy === 0 && vx < 0) {
    if (isAttack) {
      return "attackLeft";
    }
    return "left";
  }
  // 往右边走
  else {
    if (isAttack) {
      return "attackRight";
    }
    return "right";
  }
}

export class Mario extends Sprite {
  constructor({ x, y }) {
    super({
      x,
      y,
      width: SIZE,
      height: SIZE,
    });
    this.isAttack = false;
    this.isInvincibility = false;
    this.invincibilityNum = 0;
    this.isDie = false;
    this.isWin = false;

    this.growType = "base";
    this.mario = new BaseMario();
    this.active();
  }

  grow() {
    if (this.growType === "base") {
      this.growType = "big";
      this.y -= SIZE;
      this.height = 2 * SIZE;
      this.mario = new BigMario();
    }
  }

  bullet() {
    if (this.growType === "base") {
      this.y -= SIZE;
      this.height = 2 * SIZE;
    }
    this.growType = "bullet";
    this.mario = new BulletMario();
  }

  attack() {
    if (this.growType !== "bullet") {
      return;
    }
    this.isAttack = true;
    // 添加子弹
    return new BuildingBullet({
      x: this.x + this.width,
      y: this.y,
    });
  }

  die() {
    if (this.isInvincibility) return;

    if (this.growType !== "base") {
      this.growType = "base";
      this.mario = new BaseMario();
      this.height = SIZE;
      this.y += SIZE;
      this.isInvincibility = true;

      // 无敌两秒
      setTimeout(() => {
        this.isInvincibility = false;
      }, 2000);
    } else {
      this.isDie = true;
      this.unActive();
      this.vy = -1;
      this.vx = 0;
    }
  }
  win() {
    this.isWin = true;
  }

  unAttack() {
    this.isAttack = false;
  }

  draw(context, camera) {
    const { vx, vy } = this;
    const actionType = getActionTypeBySpeed(vx, vy, this.isAttack, this.isDie);

    const { resource } = this.mario.getInfo({
      actionType,
    });

    this.x += vx;
    this.y += vy;

    // 无敌状态
    if (this.isInvincibility) {
      if (Math.sin(this.invincibilityNum) >= 1) {
        this.invincibilityNum -= 0.8;
      } else if (Math.sin(this.invincibilityNum) <= -1) {
        this.invincibilityNum += 0.8;
      } else {
        this.invincibilityNum += 0.8;
      }

      if (Math.sin(this.invincibilityNum) >= 0) {
        return;
      }
    }

    context.drawImage(
      resource,
      this.x - camera.x,
      this.y,
      this.width,
      this.height
    );
  }
}
