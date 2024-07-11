import { bulletMarioResources } from "../utils/loadResources";

export class BulletMario {
  frame = 0;
  actionType = "static";

  constructor() {
    this.resources = {
      static: [bulletMarioResources[0]],
      jumpLeft: [bulletMarioResources[1]],
      jumpRight: [bulletMarioResources[2]],
      left: [
        bulletMarioResources[3],
        bulletMarioResources[4],
        bulletMarioResources[5],
      ],
      right: [
        bulletMarioResources[6],
        bulletMarioResources[7],
        bulletMarioResources[8],
      ],
      attackLeft: [bulletMarioResources[9]],
      attackRight: [bulletMarioResources[10]],
    };
  }

  getInfo(options) {
    const { actionType } = options;
    if (actionType !== this.actionType) {
      this.frame = 0;
    }
    this.actionType = actionType;

    const resource = this.resources[actionType][~~this.frame];
    this.frame =
      this.frame >= this.resources[actionType].length - 1
        ? 0
        : this.frame + 0.1;

    return {
      resource,
    };
  }
}
