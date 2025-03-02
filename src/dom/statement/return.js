"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const returnStatementNodeQuery = nodeQuery("/returnBlock/returnStatement");

export default domAssigned(class ReturnStatement {
  constructor(string, value) {
    this.string = string;
    this.value = value;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    let value;

    const returnStatementString = this.string;  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    value = this.value.evaluate(context);

    context.debug(`...evaluated the '${returnStatementString}' return statement.`);

    return value;
  }

  static name = "ReturnStatement";

  static fromReturnBlockNode(returnBlockNode, context) {
    const { Value } = dom,
          returnStatementNode = returnStatementNodeQuery(returnBlockNode),
          value = Value.fromReturnStatementNode(returnStatementNode, context),
          string = stringFromValue(value, context),
          returnStatement = new ReturnStatement(string, value);

    return returnStatement;
  }
});

function stringFromValue(value, context) {
  const valueString = value.asString(context),
        string = `Return ${valueString};`;

  return string;
}
