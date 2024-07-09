export class Keyboard {
  xDirection;
  yDirection;

  constructor() {
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
  }

  handleKeydown = (e) => {
    // e.preventDefault();
    switch (e.keyCode) {
      case 38:
        this.yDirection = "top";
        break;
      case 37:
        this.xDirection = "left";
        break;
      case 39:
        this.xDirection = "right";
        break;
      //   case 32:
      // handler(obj, "Bullet", true);
    }
  };

  handleKeyup = (e) => {
    switch (e.keyCode) {
      case 38:
        this.yDirection = undefined;
        break;
      case 37:
      case 39:
        this.xDirection = undefined;
        break;
    }
  };
}
