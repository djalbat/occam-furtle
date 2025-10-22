"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const expressionProcedureCallNodeQuery = nodeQuery("/expression/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(string, name, expressions) {
    this.string = string;
    this.name = name;
    this.expressions = expressions;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  getExpressions() {
    return this.expressions;
  }

  evaluate(context) {
    const procedureCallString = this.string;  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const procedurePresent = context.isProcedurePresentByName(this.name);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByName(this.name),
          expressions = this.expressions.evaluate(context),
          expression = procedure.call(expressions, context);

    context.debug(`...evaluated the '${procedureCallString}' procedure call.`);

    return expression;
  }

  static name = "ProcedureCall";

  static fromExpressionNode(expressionNode, context) {
    let procedureCall = null;

    const expressionProcedureCallNode = expressionProcedureCallNodeQuery(expressionNode);

    if (expressionProcedureCallNode !== null) {
      const procedureCallNode = expressionProcedureCallNode; ///

      procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }

    return procedureCall;
  }
});

function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { Name, Expressions, ProcedureCall } = dom,
        name = Name.fromProcedureCallNode(procedureCallNode, context),
        expressions = Expressions.fromProcedureCallNode(procedureCallNode, context),
        string = stringFromExpressionsAndName(expressions, name, context),
        procedureCall = new ProcedureCall(string, name, expressions);

  return procedureCall;
}

function stringFromExpressionsAndName(expressions, name, context) {
  const expressionsString = expressions.getString(),
        referenceString = name.getString(),
        string = `${referenceString}(${expressionsString})`;

  return string;
}