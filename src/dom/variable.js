"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/parameter/variable/@name");

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

  static fromParameterNode(parameterNode, context) {
    const name = nameFromParameterNode(parameterNode),
          variable = new Variable(name);

    return variable;
  }
});

function nameFromParameterNode(parameterNode) {
  const nameTerminalNode = nameTerminalNodeQuery(parameterNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}
