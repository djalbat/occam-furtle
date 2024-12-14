"use strict";

import dom from "../../dom";
import Exception from "../../exception";
import nodeParameters from "../../parameters/node";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { NODE_TYPE, STRING_TYPE } from "../../types";
import { CONTENT_PARAMETER_NAME } from "../../parameterNames";

const objectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

export default domAssigned(class ObjectAssigment {
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

  getParameters() {
    return this.parameters;
  }

  resolve(context) {
    const objectAssignmentString = this.string; ///

    context.trace(`Resolving the '${objectAssignmentString}' object assignment...`);

    const value = this.variable.resolve(context),
          valueType = value.getType();

    if (valueType !== NODE_TYPE) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    nodeParameters.matchParameters(this.parameters, context);

    this.parameters.forEachParameter((parameter) => {
      if (parameter !== null) {
        this.resolveParameter(parameter, value, context);
      }
    });

    context.debug(`...resolved the '${objectAssignmentString}' object assignment.`);
  }

  resolveParameter(parameter, value, context) {
    const valueString = value.getString(),
          parameterString = parameter.getString();

    context.trace(`Resolving the '${parameterString}' parameter against the '${valueString}' value...`);

    const node = value.getNode(),
          name = parameter.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        const type = parameter.getType();

        if (type !== STRING_TYPE) {
          const parameterString = parameter.getString(),
                message = `The '${parameterString}' parameter's type should be '${STRING_TYPE}'.`,
                exception = Exception.fromMessage(message);

          throw exception;
        }

        const nodeTerminalNode = node.isTerminalNode();

        if (!nodeTerminalNode) {
          const valueString = value.getString(),
                message = `The '${valueString}' value's node must be terminal.`,
                exception = Exception.fromMessage(message);

          throw exception;
        }

        const { Value, Variable, Assignment } = dom,
              terminalNode = node,  ///
              content = terminalNode.getContent(),
              stringLiteral = content,  ///
              value = Value.fromStringLiteral(stringLiteral, context),
              assignment = Assignment.fromValue(value, context),
              variable = Variable.fromParameterAndAssignment(parameter, assignment);

        context.addVariable(variable);

        variable.assign(context);

        break;
      }

      default: {
        debugger
      }
    }
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      const { Variable, Parameters } = dom,
            node = objectAssignmentNode,  ///
            string = context.nodeAsString(node),
            variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context),
            parameters = Parameters.fromObjectAssignmentNode(objectAssignmentNode, context);

      objectAssignment = new ObjectAssigment(string, variable, parameters);
    }

    return objectAssignment;
  }
});
