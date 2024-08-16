import { Group, Leafer, Text } from "leafer-ui";
import { SpriteGold } from "../sprite/sprite-gold";
import { SpriteBadMushroom } from "../sprite/sprite-bad-mushroom";
import { SpriteGrowMushroom } from "../sprite/sprite-grow-mushroom";
import { SpriteFlower } from "../sprite/sprite-flower";
import { SpriteStone } from "../sprite/sprite-stone";
import { SpriteTurtle } from "../sprite/sprite-turtle";

export class Score {
  children = [];
  totalScore = 0;
  constructor(options) {
    const { camera } = options;
    this._core = new Leafer();

    const group = new Group({
      x: 0,
      y: 0,
      width: camera.width,
      height: camera.height,
    });

    this.totalScoreText = new Text({
      x: 0,
      y: 0,
      width: camera.width - 20,
      text: "分数：0",
      fill: "rgb(255,255,255)",
      fontSize: 20,
      fontWeight: "black",
      textAlign: "right",
      fontFamily:
        "ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    });
    group.add(this.totalScoreText);
    this._core.add(group);
    this._group = group;
    this._camera = camera;
  }

  add(x, y, sprite) {
    let score;
    if (sprite instanceof SpriteGold) {
      score = 500;
    } else if (sprite instanceof SpriteBadMushroom) {
      score = 400;
    } else if (
      sprite instanceof SpriteGrowMushroom ||
      sprite instanceof SpriteFlower
    ) {
      score = 2000;
    } else {
      score = 200;
    }

    const text = new Text({
      _x: x,
      _y: y,
      x,
      y,
      text: score,
      fill: "rgb(255,255,255)",
      fontWeight: "black",
      fontFamily:
        "ui-monospace, SFMono-Regular, SF Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    });
    this._group.add(text);
    this.children.push(text);
    this.totalScore += score;
    this.totalScoreText.text = "分数：" + this.totalScore;
  }

  getCore() {
    return this._core;
  }

  run() {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.set({
        x: child._x - this._camera.x,
        y: child.y - 1,
      });
      if (child._y - child.y > 20) {
        this.children.splice(i, 1);
        this._group.remove(child);
        i--;
      }
    }
  }
}
