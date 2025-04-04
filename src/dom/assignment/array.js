"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { NODE_TYPE, NODES_TYPE } from "../../types";

const stepArrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

export default domAssigned(class ArrayAssigment {
  constructor(string, variable, parameters) {
    this.string = string;
    this.variable = variable;
    this.parameters = parameters;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getVariables() {
    return this.parameters;
  }

  evaluate(context) {
    const arrayAssignmentString = this.string; ///

    context.trace(`Evaluating the '${arrayAssignmentString}' array assignment...`);

    const expression = this.variable.evaluate(context),
          expressionType = expression.getType();

    if (expressionType !== NODES_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = expression.getNodes(),
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
        const { Expression } = dom,
              node = nodes[index],
              expression = Expression.fromNode(node, context);

        this.evaluateParameter(parameter, expression, context);
      }
    });

    context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
  }

  evaluateParameter(parameter, expression, context) {
    const expressionString = expression.asString(context),
          parameterString = parameter.getString();

    context.trace(`Evaluating the '${parameterString}' parameter against the ${expressionString} expression...`);

    const parameterType = parameter.getType();

    if (parameterType !== NODE_TYPE) {
      const message = `The type of the '${parameterString}' parameter should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Variable } = dom,
          variable = Variable.fromParameter(parameter, context);

    variable.assign(expression, context);

    context.debug(`...evaluated the '${parameterString}' parameter against the ${expressionString} expression.`);
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const stepArrayAssignmentNode = stepArrayAssignmentNodeQuery(stepNode);

    if (stepArrayAssignmentNode !== null) {
      const arrayAssignmentNode = stepArrayAssignmentNode;  ///

      arrayAssignment = arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context);
    }

    return arrayAssignment;
  }
});

function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const { Variable, Parameters, ArrayAssignment } = dom,
        parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context),
        variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context),
        string = stringFromVariableAndParameters(variable, parameters, context),
        arrayAssignment = new ArrayAssignment(string, variable, parameters);

  return arrayAssignment;
}

function stringFromVariableAndParameters(variable, parameters, context) {
  const variableString = variable.getString(),
        parametersString = parameters.getString(),
        string = `[ ${parametersString} ] = ${variableString};`;

  return string;
}
