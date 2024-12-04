"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const typeTerminalNodeQuery = nodeQuery("/parameter/@type");

export default domAssigned(class Parameter {
  constructor(type, variable) {
    this.type = type;
    this.variable = variable;
  }

  getType() {
    return this.type;
  }

  getVariable() {
    return this.variable;
  }

  getString() {
    const typeString = this.type, ///
          variableString = this.variable.getString(),
          string = `${typeString} ${variableString}`;

    return string;
  }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    const { Variable } = dom,
          type = typeFromParameterNode(parameterNode),
          variable = Variable.fromParameterNode(parameterNode, context),
          parameter = new Parameter(type, variable);

    return parameter;
  }
});

function typeFromParameterNode(parameterNode) {
  const typeTerminalNode = typeTerminalNodeQuery(parameterNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
