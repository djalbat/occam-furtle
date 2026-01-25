"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";

const someVariableNodeQuery = nodeQuery("/some/variable"),
      everyVariableNodeQuery = nodeQuery("/every/variable"),
      reduceVariableNodeQuery = nodeQuery("/reduce/variable"),
      nodeQueryVariableNodeQuery = nodeQuery("/nodeQuery/variable"),
      expressionVariableNodeQuery = nodeQuery("/expression/variable"),
      nodesQueryVariableNodeQuery = nodeQuery("/nodesQuery/variable"),
      variableNameTerminalNodeQuery = nodeQuery("/variable/@name"),
      arrayAssignmentVariableNodeQuery = nodeQuery("/arrayAssignment/variable"),
      objectAssignmentVariableNodeQuery = nodeQuery("/objectAssignment/variable"),
      variableAssignmentVariableNodeQuery = nodeQuery("/variableAssignment/variable");

export default define(class Variable {
  constructor(string, type, name, expression) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.expression = expression;
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

  getExpression() {
    return this.expression;
  }

  matchVariableName(variableName) {
    const nameMatches = (this.name === variableName);

    return nameMatches;
  }

  evaluate(context) {
    const variableString = this.string; ///

    context.trace(`Evaluating the '${variableString}' variable...`);

    const nested = true,
          variableName = this.name, ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    if (!variablePresent) {
      const message = `The '${variableString}; variable is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const variable = context.findVariableByVariableName(variableName),
          expression = variable.getExpression(),
          expressionString = expression.asString(context);

    context.debug(`...evaluated the '${variableString}' variable to the ${expressionString} expression.`);

    return expression;
  }

  assign(expression, context) {
    const nested = false,
          expressionString = expression.asString(context), ///
          variableName = this.name, ///
          variableString = this.string, ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    context.trace(`Assigning the ${expressionString} expression to the '${variableString}' variable...`);

    if (variablePresent) {
      const message = `The '${variableString}' variable is already present.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const expressionType = expression.getType(),
          variableType = this.type;

    if (expressionType !== variableType) {
      const message = `The '${variableString} variable's '${variableType}' type does not match the expression's '${expressionType}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.expression = expression;

    const variable = this;  ///

    context.addVariable(variable);

    context.debug(`...assigned the ${expressionString} expression to the '${variableString}' variable.`);
  }

  static name = "Variable";

  static fromSomeNode(someNode, context) {
    const someVariableNode = someVariableNodeQuery(someNode),
          variableNode = someVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromExpressionNode(expressionNode, context) {
    let variable = null;

    const expressionVariableNode = expressionVariableNodeQuery(expressionNode);

    if (expressionVariableNode !== null) {
      const variableNode = expressionVariableNode; ///

      variable = variableFromVariableNode(variableNode, context);
    }

    return variable;
  }

  static fromEveryNode(everyNode, context) {
    const everyVariableNode = everyVariableNodeQuery(everyNode),
          variableNode = everyVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromParameter(parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          expression = null,
          string = stringFromName(name, context),
          variable = new Variable(string, type, name, expression);

    return variable;
  }

  static fromReduceNode(reduceNode, context) {
    const reduceVariableNode = reduceVariableNodeQuery(reduceNode),
          variableNode = reduceVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

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

  static fromNamedParameter(namedParameter, context) {
    const asName = namedParameter.getAsName(),
          type = namedParameter.getType(),
          name = (asName !== null) ?
                   asName : ///
                     namedParameter.getName(),
          expression = null,
          string = stringFromName(name, context),
          variable = new Variable(string, type, name, expression);

    return variable;
  }

  static fromExpressionAndParameter(expression, parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          string = stringFromName(name, context),
          variable = new Variable(string, type, name, expression);

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

  static fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const variableAssignmentVariableNode = variableAssignmentVariableNodeQuery(variableAssignmentNode),
          variableNode = variableAssignmentVariableNode,  ///
          variable = variableFromTypeAndVariableNode(type, variableNode, context);

    return variable;
  }
});

function variableFromTypeAndVariableNode(type, variableNode, context) {
  const { Variable } = elements,
        name = nameFromVariableNode(variableNode),
        expression = null,
        string = stringFromName(name, context),
        variable = new Variable(string, type, name, expression);

  return variable;
}

function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        type = null,
        name = nameFromVariableNode(variableNode),
        expression = null,
        string = stringFromName(name, context),
        variable = new Variable(string, type, name, expression);

  return variable;
}

function nameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        name = variableNameTerminalNodeContent; ///

  return name;
}

function stringFromName(name, context) {
  const nameString = name,  ///
        string = nameString;  ///

  return string;
}