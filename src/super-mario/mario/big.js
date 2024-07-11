import { bigMarioResources } from "../utils/loadResources";

export class BigMario {
  frame = 0;
  actionType = "static";

  constructor() {
    this.resources = {
      static: [bigMarioResources[0]],
      jumpLeft: [bigMarioResources[1]],
      jumpRight: [bigMarioResources[2]],
      left: [bigMarioResources[3], bigMarioResources[4], bigMarioResources[5]],
      right: [bigMarioResources[6], bigMarioResources[7], bigMarioResources[8]],
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
