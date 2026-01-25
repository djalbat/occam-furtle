"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";

const expressionProcedureCallNodeQuery = nodeQuery("/expression/procedureCall");

export default define(class ProcedureCall {
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

  getName() { return this.reference.getName(); }

  evaluate(context) {
    const procedureCallString = this.string;  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const name = this.getName(),
          procedurePresent = context.isProcedurePresentByName(name);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByName(name),
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
  const { Reference, Expressions, ProcedureCall } = elements,
        expressions = Expressions.fromProcedureCallNode(procedureCallNode, context),
        reference = Reference.fromProcedureCallNode(procedureCallNode, context),
        string = stringFromReferenceAndExpressions(reference, expressions, context),
        procedureCall = new ProcedureCall(string, reference, expressions);

  return procedureCall;
}

function stringFromReferenceAndExpressions(reference, expressions, context) {
  const expressionsString = expressions.getString(),
        referenceString = reference.getString(),
        string = `${referenceString}(${expressionsString})`;

  return string;
}
