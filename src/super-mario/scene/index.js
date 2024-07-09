import { Leafer } from "leafer-ui";

export class Scene {
  children = [];
  constructor() {
    this._core = new Leafer();
  }

  add(child) {
    this.children.push(child);
    this.getCore().add(child.getCore());
  }

  remove(child) {
    for (let i = 0; i < this.children.length; i++) {
      if (child === this.children[i]) {
        this.children.splice(i, 1);
      }
    }
    this.getCore().remove(child.getCore());
  }

  run() {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].run) {
        this.children[i].run();
      }
    }
  }

  getCore() {
    return this._core;
  }
}
