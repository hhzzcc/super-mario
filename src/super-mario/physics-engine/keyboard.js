export class Keyboard {
  xDirection;
  yDirection;
  pressBlank = false;

  constructor() {
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("keyup", this.handleKeyup);
  }

  handleKeydown = (e) => {
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
      case 32:
        this.pressBlank = true;
        break;
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
      case 32:
        this.pressBlank = false;
        break;
    }
  };
}
