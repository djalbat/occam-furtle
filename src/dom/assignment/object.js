"use strict";

import dom from "../../dom";
import Exception from "../../exception";
import nodeProperties from "../../nodeProperties";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { NODE_TYPE, NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../../types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../../parameterNames";

const stepObjectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

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

    const expression = this.variable.evaluate(context),
          expressionType = expression.getType();

    if (expressionType !== NODE_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    nodeProperties.matchNamedParameters(this.namedParameters, context);

    this.namedParameters.forEachNamedParameter((namedParameter) => {
      this.evaluateNamedParameter(namedParameter, expression, context);
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateNamedParameter(namedParameter, expression, context) {
    const expressionString = expression.asString(context),
          namedParameterString = namedParameter.getString();

    context.trace(`Evaluating the '${namedParameterString}' named parameter against the ${expressionString} expression...`);

    const name = namedParameter.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        expression = this.evaluateContentNamedParameter(namedParameter, expression, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        expression = this.evaluateTerminalNamedParameter(namedParameter, expression, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        expression = this.evaluateChildNodesNamedParameter(namedParameter, expression, context);

        break;
      }
    }

    const { Variable } = dom,
          variable = Variable.fromNamedParameter(namedParameter, context);

    variable.assign(expression, context);

    context.debug(`...evaluated the '${namedParameterString}' parameter named against the ${expressionString} expression.`);
  }

  evaluateContentNamedParameter(namedParameter, expression, context) {
    const type = namedParameter.getType();

    if (type !== STRING_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${STRING_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = expression.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's node must be terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Expression } = dom,
          terminalNode = node,  ///
          content = terminalNode.getContent(),
          string = content;  ///

    expression = Expression.fromString(string, context);  ///

    return expression;
  }

  evaluateTerminalNamedParameter(namedParameter, expression, context) {
    const type = namedParameter.getType();

    if (type !== BOOLEAN_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = expression.getNode(),
          nodeTerminalNode = node.isTerminalNode(),
          terminal = nodeTerminalNode;  ///

    const { Expression } = dom,
          boolean = terminal; ///

    expression = Expression.fromBoolean(boolean, context);  ///

    return expression;
  }

  evaluateChildNodesNamedParameter(namedParameter, expression, context) {
    const type = namedParameter.getType();

    if (type !== NODES_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const node = expression.getNode(),
          nodeNonTerminalNode = node.isNonTerminalNode();

    if (!nodeNonTerminalNode) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's node must be non-terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Expression } = dom,
          nonTerminalNode = node,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes;  ///

    expression = Expression.fromNodes(nodes, context);  ///

    return expression;
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const stepObjectAssignmentNode = stepObjectAssignmentNodeQuery(stepNode);

    if (stepObjectAssignmentNode !== null) {
      const objectAssignmentNode = stepObjectAssignmentNode;  ///

      objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
    }

    return objectAssignment;
  }
});

function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
  const { Variable, NamedParameters, ObjectAssigment } = dom,
        namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context),
        variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context),
        string = stringFromVariableAndNamesParameters(variable, namedParameters, context),
        objectAssignment = new ObjectAssigment(string, variable, namedParameters);

  return objectAssignment;
}

function stringFromVariableAndNamesParameters(variable, namedParameters, context) {
  const namedParametersString = namedParameters.getString(),
        variableString = variable.getString(),
        string = `{ ${namedParametersString} } = ${variableString};`;

  return string;
}
