"use strict";

import dom from "../../dom";
import Exception from "../../exception";
import nodeProperties from "../../nodeProperties";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { NODE_TYPE, NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../../types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../../parameterNames";

const objectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

export default domAssigned(class ObjectAssigment {
  constructor(string, variable, namedParameters) {
    this.string = string;
    this.variable = variable;
    this.namedParameters = namedParameters;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getNamedParameters() {
    return this.namedParameters;
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

    nodeProperties.matchNamedParameters(this.namedParameters, context);

    this.namedParameters.forEachNamedParameter((namedParameter) => {
      this.evaluateNamedParameter(namedParameter, value, context);
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateNamedParameter(namedParameter, value, context) {
    const valueString = value.asString(context),
          namedParameterString = namedParameter.getString();

    context.trace(`Evaluating the '${namedParameterString}' named parameter against the ${valueString} value...`);

    const name = namedParameter.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        value = this.evaluateContentNamedParameter(namedParameter, value, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        value = this.evaluateTerminalNamedParameter(namedParameter, value, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        value = this.evaluateChildNodesNamedParameter(namedParameter, value, context);

        break;
      }
    }

    const { Variable } = dom,
          variable = Variable.fromNamedParameter(namedParameter, context);

    variable.assign(value, context);

    context.debug(`...evaluated the '${namedParameterString}' parameter named against the ${valueString} value.`);
  }

  evaluateContentNamedParameter(namedParameter, value, context) {
    const type = namedParameter.getType();

    if (type !== STRING_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${STRING_TYPE}'.`,
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

    const { Value } = dom,
          terminalNode = node,  ///
          content = terminalNode.getContent(),
          string = content;  ///

    value = Value.fromString(string, context);  ///

    return value;
  }

  evaluateTerminalNamedParameter(namedParameter, value, context) {
    const type = namedParameter.getType();

    if (type !== BOOLEAN_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = value.getNode(),
          nodeTerminalNode = node.isTerminalNode(),
          terminal = nodeTerminalNode;  ///

    const { Value } = dom,
          boolean = terminal; ///

    value = Value.fromBoolean(boolean, context);  ///

    return value;
  }

  evaluateChildNodesNamedParameter(namedParameter, value, context) {
    const type = namedParameter.getType();

    if (type !== NODES_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${NODES_TYPE}'.`,
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

    const { Value } = dom,
          nonTerminalNode = node,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes;  ///

    value = Value.fromNodes(nodes, context);  ///

    return value;
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      const { Variable, NamedParameters } = dom,
            node = objectAssignmentNode,  ///
            string = context.nodeAsString(node),
            variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context),
            namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context);

      objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    }

    return objectAssignment;
  }
});
