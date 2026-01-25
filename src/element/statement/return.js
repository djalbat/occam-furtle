"use strict";

import elements from "../../elements";

import { define } from "../../elements";
import { nodeQuery } from "../../utilities/query";

const returnBlockReturnStatementNodeQuery = nodeQuery("/returnBlock/returnStatement");

export default define(class ReturnStatement {
  constructor(string, expression) {
    this.string = string;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getExpression() {
    return this.expression;
  }

  evaluate(context) {
    let expression;

    const returnStatementString = this.string;  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    expression = this.expression.evaluate(context);

    context.debug(`...evaluated the '${returnStatementString}' return statement.`);

    return expression;
  }

  static name = "ReturnStatement";

  static fromReturnBlockNode(returnBlockNode, context) {
    const returnBlockReturnStatementNode = returnBlockReturnStatementNodeQuery(returnBlockNode),
          returnStatementNode = returnBlockReturnStatementNode, ///
          returnStatement = returnStatementFromReturnStatementNode(returnStatementNode, context);

    return returnStatement;
  }
});

function returnStatementFromReturnStatementNode(returnStatementNode, context) {
  const { Expression, ReturnStatement } = elements,
        expression = Expression.fromReturnStatementNode(returnStatementNode, context),
        string = stringFromExpression(expression, context),
        returnStatement = new ReturnStatement(string, expression);

  return returnStatement;
}

function stringFromExpression(expression, context) {
  const expressionString = expression.asString(context),
        string = `Return ${expressionString};`;

  return string;
}
