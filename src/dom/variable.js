"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const someVariableNodeQuery = nodeQuery("/some/variable"),
      valueVariableNodeQuery = nodeQuery("/value/variable"),
      nodeQueryVariableNodeQuery = nodeQuery("/nodeQuery/variable"),
      nodesQueryVariableNodeQuery = nodeQuery("/nodesQuery/variable"),
      variableNameTerminalNodeQuery = nodeQuery("/variable/@name"),
      arrayAssignmentVariableNodeQuery = nodeQuery("/arrayAssignment/variable"),
      objectAssignmentVariableNodeQuery = nodeQuery("/objectAssignment/variable"),
      variableAssignmentVariableNodeQuery = nodeQuery("/variableAssignment/variable");

export default domAssigned(class Variable {
  constructor(string, type, name, value) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.value = value;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  matchVariableName(variableName) {
    const nameMatches = (this.name === variableName);

    return nameMatches;
  }

  evaluate(context) {
    const variableString = this.string; ///

    context.trace(`Evaluating the '${variableString}' variable...`);

    const variableName = this.name, ///
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (!variablePresent) {
      const message = `The '${variableString}; variable is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const variable = context.findVariableByVariableName(variableName),
          value = variable.getValue(),
          valueString = value.asString(context);

    context.debug(`...evaluated the '${variableString}' variable to the ${valueString} value.`);

    return value;
  }

  assign(context) {
    const variableName = this.name, ///
          variableString = this.string, ///
          variablePresent = context.isVariablePresentByVariableName(variableName);

    context.trace(`Assigning a value to the '${variableString}' variable...`);

    if (!variablePresent) {
      const message = `The '${variableString}' variable is not present.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const value = this.value.evaluate(context),
          valueType = value.getType(),
          variableType = this.type;

    if (valueType !== variableType) {
      const message = `The '${variableString} variable's '${variableType}' type does not match the assigned value's '${valueType}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.value = value;

    const valueString = value.asString(context);

    context.debug(`...assigned the ${valueString} value to the '${variableString}' variable.`);
  }

  static name = "Variable";

  static fromSomeNode(someLoopNode, context) {
    const someVariableNode = someVariableNodeQuery(someLoopNode),
          variableNode = someVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromValueNode(valueNode, context) {
    let variable = null;

    const valueVariableNode = valueVariableNodeQuery(valueNode);

    if (valueVariableNode !== null) {
      const variableNode = valueVariableNode; ///

      variable = variableFromVariableNode(variableNode, context);
    }

    return variable;
  }

  static fromNodeQueryNode(nodeQueryNode, context) {
    const nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode),
          variableNode = nodeQueryVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromNodesQueryNode(nodesQueryNode, context) {
    const nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode),
          variableNode = nodesQueryVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromValueAndParameter(value, parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          string = name,  ///
          variable = new Variable(string, type, name, value);

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, context) {
    const node = variableNode,  ///
          string = context.nodeAsString(node),
          name = nameFromVariableNode(variableNode),
          value = null,
          variable = new Variable(string, type, name, value);

    return variable;
  }

  static fromArrayAssignmentNode(arrayAssignmentNode, context) {
    const arrayAssignmentVariableNode = arrayAssignmentVariableNodeQuery(arrayAssignmentNode),
          variableNode = arrayAssignmentVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromObjectAssignmentNode(objectAssignmentNode, context) {
    const objectAssignmentVariableNode = objectAssignmentVariableNodeQuery(objectAssignmentNode),
          variableNode = objectAssignmentVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromValueAndNamedParameter(value, namedParameter, context) {
    const asName = namedParameter.getAsName(),
          name = (asName !== null) ?
                   asName : ///
                     namedParameter.getName(),
          type = namedParameter.getType(),
          string = name,  ///
          variable = new Variable(string, type, name, value);

    return variable;
  }

  static fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const variableAssignmentVariableNode = variableAssignmentVariableNodeQuery(variableAssignmentNode),
          variableNode = variableAssignmentVariableNode,  ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }
});

function variableFromVariableNode(variableNode, context) {
  const { Variable } = dom,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = null,
        name = nameFromVariableNode(variableNode),
        value = null,
        variable = new Variable(string, type, name, value);

  return variable;
}

function nameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        name = variableNameTerminalNodeContent; ///

  return name;
}

/*

  static fromNamedParameterAndAssignment(namedParameter, assignment, context) {
    const asName = namedParameter.getAsName(),
          name = (asName !== null) ?
                   asName : ///
                    namedParameter.getName(),
          type = namedParameter.getType(),
          value = null,
          string = name,  ///
          variable = new Variable(string, type, name, value, assignment);

    return variable;
  }

 */