"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const variablesDeclarationNodeQuery = nodeQuery("/step/variablesDeclaration");

export default domAssigned(class VariablesDeclaration {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "VariablesDeclaration";

  static fromStepNode(stepNode, context) {
    let variablesDeclaration = null;

    const variablesDeclarationNode = variablesDeclarationNodeQuery(stepNode);

    if (variablesDeclarationNode !== null) {
      debugger
    }

    return variablesDeclaration;
  }
});
