"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const expressionProcedureCallNodeQuery = nodeQuery("/expression/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(string, reference, expressions) {
    this.string = string;
    this.reference = reference;
    this.expressions = expressions;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getExpressions() {
    return this.expressions;
  }

  evaluate(context) {
    const procedureCallString = this.string;  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const procedurePresent = context.isProcedurePresentByReference(this.reference);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByReference(this.reference),
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
  const { Reference, Expressions, ProcedureCall } = dom,
        reference = Reference.fromProcedureCallNode(procedureCallNode, context),
        expressions = Expressions.fromProcedureCallNode(procedureCallNode, context),
        string = stringFromExpressionsAndReference(expressions, reference, context),
        procedureCall = new ProcedureCall(string, reference, expressions);

  return procedureCall;
}

function stringFromExpressionsAndReference(expressions, reference, context) {
  const expressionsString = expressions.getString(),
        referenceString = reference.getString(),
        string = `${referenceString}(${expressionsString})`;

  return string;
}