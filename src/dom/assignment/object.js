"use strict";

import dom from "../../dom";
import Exception from "../../exception";
import nodeParameters from "../../parameters/node";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { NODE_TYPE, NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../../types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../../parameterNames";

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

  evaluate(context) {
    const objectAssignmentString = this.string; ///

    context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType();

    if (valueType !== NODE_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    nodeParameters.matchParameters(this.parameters, context);

    this.parameters.forEachParameter((parameter) => {
      if (parameter !== null) {
        this.evaluateParameter(parameter, value, context);
      }
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateParameter(parameter, value, context) {
    const valueString = value.asString(context),
          parameterString = parameter.getString();

    context.trace(`Evaluating the '${parameterString}' parameter against the ${valueString} value...`);

    const name = parameter.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        this.evaluateContentParameter(parameter, value, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        this.evaluateTerminalParameter(parameter, value, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        this.evaluateChildNodesParameter(parameter, value, context);

        break;
      }
    }

    context.debug(`...evaluated the '${parameterString}' parameter against the ${valueString} value.`);
  }

  evaluateContentParameter(parameter, value, context) {
    const type = parameter.getType();

    if (type !== STRING_TYPE) {
      const parameterString = parameter.getString(),
            message = `The '${parameterString}' parameter's type should be '${STRING_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = value.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's node must be terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Value, Variable, Assignment } = dom,
          terminalNode = node,  ///
          content = terminalNode.getContent(),
          string = content;  ///

    value = Value.fromString(string, context);  ///

    const assignment = Assignment.fromValue(value, context),
          variable = Variable.fromParameterAndAssignment(parameter, assignment);

    context.addVariable(variable);

    variable.assign(context);
  }

  evaluateTerminalParameter(parameter, value, context) {
    const type = parameter.getType();

    if (type !== BOOLEAN_TYPE) {
      const parameterString = parameter.getString(),
            message = `The '${parameterString}' parameter's type should be '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = value.getNode(),
          nodeTerminalNode = node.isTerminalNode(),
          terminal = nodeTerminalNode;  ///

    const { Value, Variable, Assignment } = dom,
          boolean = terminal; ///

    value = Value.fromBoolean(boolean, context);  ///

    const assignment = Assignment.fromValue(value, context),
          variable = Variable.fromParameterAndAssignment(parameter, assignment);

    context.addVariable(variable);

    variable.assign(context);
  }

  evaluateChildNodesParameter(parameter, value, context) {
    const type = parameter.getType();

    if (type !== NODES_TYPE) {
      const parameterString = parameter.getString(),
            message = `The '${parameterString}' parameter's type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = value.getNode(),
          nodeNonTerminalNode = node.isNonTerminalNode();

    if (!nodeNonTerminalNode) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's node must be non-terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Value, Variable, Assignment } = dom,
          nonTerminalNode = node,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes;  ///

    value = Value.fromNodes(nodes, context);  ///

    const assignment = Assignment.fromValue(value, context),
          variable = Variable.fromParameterAndAssignment(parameter, assignment);

    context.addVariable(variable);

    variable.assign(context);
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
