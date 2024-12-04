"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/variable/@name");

export default domAssigned(class Variable {
  constructor(name) {
    this.name = name;
  }

  getType() {
    return this.name;
  }

  getString() {
    const string = this.name; ///

    return string;
  }

  static name = "Variable";

  static fromArgumentNode(argumentNode, context) {
    const name = nameFromArgumentNode(argumentNode),
          variable = new Variable(name);

    return variable;
  }
});

function nameFromArgumentNode(argumentNode) {
  const nameTerminalNode = nameTerminalNodeQuery(argumentNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}
