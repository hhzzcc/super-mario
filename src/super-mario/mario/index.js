import { BaseMario } from "./base";
import { BigMario } from "./big";
import { BulletMario } from "./bullet";

import { Sprite } from "../sprite";
import { SIZE } from "../constants";

function getActionTypeBySpeed(vx, vy, isAttack) {
  if (vx === 0 && vy === 0) {
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
  }

  unAttack() {
    this.isAttack = false;
  }

  getInfo() {
    const { vx, vy } = this;
    const actionType = getActionTypeBySpeed(vx, vy, this.isAttack);

    const { resource } = this.mario.getInfo({
      actionType,
    });

    this.x += vx;
    this.y += vy;

    return {
      resource,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }
}
