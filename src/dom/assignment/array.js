"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { NODE_TYPE, NODES_TYPE } from "../../types";

const arrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

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

  resolve(context) {
    const arrayAssignmentString = this.string; ///

    context.trace(`Resolving the '${arrayAssignmentString}' array assignment...`);

    const value = this.variable.resolve(context),
          valueType = value.getType();

    if (valueType !== NODES_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes(),
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
        const { Value } = dom,
              node = nodes[index],
              value = Value.fromNode(node, context);

        this.resolveParameter(parameter, value, context);
      }
    });

    context.debug(`...resolved the '${arrayAssignmentString}' array assignment.`);
  }

  resolveParameter(parameter, value, context) {
    const valueString = value.asString(context),
          parameterString = parameter.getString();

    context.trace(`Resolving the '${parameterString}' parameter against the ${valueString} value...`);

    const parameterType = parameter.getType();

    if (parameterType !== NODE_TYPE) {
      const message = `The type of the '${parameterString}' parameter should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Variable, Assignment } = dom,
          assignment = Assignment.fromValue(value, context),
          variable = Variable.fromParameterAndAssignment(parameter, assignment);

    context.addVariable(variable);

    variable.assign(context);

    context.debug(`...resolved the '${parameterString}' parameter against the ${valueString} value.`);
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      const { Variable, Parameters } = dom,
            node = arrayAssignmentNode,  ///
            string = context.nodeAsString(node),
            variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context),
            parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context);

      arrayAssignment = new ArrayAssigment(string, variable, parameters);
    }

    return arrayAssignment;
  }
});
