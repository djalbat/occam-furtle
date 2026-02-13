"use strict";

import { Element } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { termFromNode } from "../../utilities/term";
import { NODE_TYPE, NODES_TYPE } from "../../types";

export default define(class ArrayAssigment extends Element {
  constructor(context, string, node, variable, parameters) {
    super(context, string, node)

    this.variable = variable;
    this.parameters = parameters;
  }

  getVariable() {
    return this.variable;
  }

  getParameters() {
    return this.parameters;
  }

  evaluate(context) {
    const arrayAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${arrayAssignmentString}' array assignment...`);

    const term = this.variable.evaluate(context),
          termType = term.getType();

    if (termType !== NODES_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nodes = primitiveValue, ///
          nodesLength = nodes.length,
          parametersLength = this.parameters.getLength();

    if (parametersLength > nodesLength) {
      const parametersString = this.parameters.getString(),
            nodesString = context.nodesAsString(nodex),
            message = `The length of the '${parametersString}' parameters is greater than the length of the '${nodesString}' nodes.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.parameters.forEachParameter((parameter, index) => {
      if (parameter !== null) {
        const node = nodes[index],
              term = termFromNode(node, context);

        this.evaluateParameter(parameter, term, context);
      }
    });

    context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
  }

  evaluateParameter(parameter, expression, context) {
    const expressionString = expression.getString(),
          parameterString = parameter.getString();

    context.trace(`Evaluating the '${parameterString}' parameter against the '${expressionString}' expression...`);

    const parameterType = parameter.getType();

    if (parameterType !== NODE_TYPE) {
      const message = `The type of the '${parameterString}' parameter should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Variable } = elements,
          variable = Variable.fromParameter(parameter, context);

    variable.assign(expression, context);

    context.debug(`...evaluated the '${parameterString}' parameter against the '${expressionString}' expression.`);
  }

  static name = "ArrayAssignment";
});
