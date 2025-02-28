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

  evaluate(context) {
    const arrayAssignmentString = this.string; ///

    context.trace(`Evaluating the '${arrayAssignmentString}' array assignment...`);

    const value = this.variable.evaluate(context),
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

        this.evaluateParameter(parameter, value, context);
      }
    });

    context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
  }

  evaluateParameter(parameter, value, context) {
    const valueString = value.asString(context),
          parameterString = parameter.getString();

    context.trace(`Evaluating the '${parameterString}' parameter against the ${valueString} value...`);

    const parameterType = parameter.getType();

    if (parameterType !== NODE_TYPE) {
      const message = `The type of the '${parameterString}' parameter should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    debugger

    const { Variable } = dom,
          variable = Variable.fromValueAndParameter(value, parameter, context);

    context.addVariable(variable);

    variable.assign(context);

    context.debug(`...evaluated the '${parameterString}' parameter against the ${valueString} value.`);
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

/*
  static fromParameterAndAssignment(parameter, assignment, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          value = null,
          string = name,  ///
          variable = new Variable(string, type, name, value, assignment);

    return variable;
  }


 */