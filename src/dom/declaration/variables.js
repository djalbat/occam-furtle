"use strict";

import { domAssigned } from "../../dom";

export default domAssigned(class VariablesDeclaration {
  constructor(fileContext, variables) {
    this.fileContext = fileContext;
    this.variables = variables;
  }

  getFileContext() {
    return this.fileContext;
  }

  getVariables() {
    return this.variables;
  }

  getString() { return this.variables.getString(); }

  verify() {
    let verified;

    const variablesDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${variablesDeclarationString}' variables declaration...`);

    const variablesVerifiedWhenDeclared = this.variables.verifyWhenDeclared(this.fileContext);

    if (variablesVerifiedWhenDeclared) {
      this.fileContext.addVariables(this.variables);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${variablesDeclarationString}' variables declaration.`);
    }

    return verified;
  }

  static name = "VariablesDeclaration";

  static fromVariablesDeclarationNode(variablesDeclarationNode, fileContext) {
    const variables = Variables.fromVariablesDeclarationNode(variablesDeclarationNode, fileContext),
          variablesDeclaration = new VariablesDeclaration(fileContext, variables);

    return variablesDeclaration;
  }
});
