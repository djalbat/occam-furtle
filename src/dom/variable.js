"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const someVariableNodeQuery = nodeQuery("/some/variable"),
      everyVariableNodeQuery = nodeQuery("/every/variable"),
      reduceVariableNodeQuery = nodeQuery("/reduce/variable"),
      nodeQueryVariableNodeQuery = nodeQuery("/nodeQuery/variable"),
      expressionVariableNodeQuery = nodeQuery("/expression/variable"),
      nodesQueryVariableNodeQuery = nodeQuery("/nodesQuery/variable"),
      arrayAssignmentVariableNodeQuery = nodeQuery("/arrayAssignment/variable"),
      objectAssignmentVariableNodeQuery = nodeQuery("/objectAssignment/variable"),
      variableAssignmentVariableNodeQuery = nodeQuery("/variableAssignment/variable"),
      variableIdentifierTerminalNodeQuery = nodeQuery("/variable/@identifier");

export default domAssigned(class Variable {
  constructor(string, type, identifier, expression) {
    this.string = string;
    this.type = type;
    this.identifier = identifier;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getIdentifier() {
    return this.identifier;
  }

  getExpression() {
    return this.expression;
  }

  matchVariableIdentifier(variableIdentifier) {
    const nameMatches = (this.identifier === variableIdentifier);

    return nameMatches;
  }

  evaluate(context) {
    const variableString = this.string; ///

    context.trace(`Evaluating the '${variableString}' variable...`);

    const nested = true,
          variableIdentifier = this.identifier, ///
          variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier, nested);

    if (!variablePresent) {
      const message = `The '${variableString}; variable is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const variable = context.findVariableByVariableIdentifier(variableIdentifier),
          expression = variable.getExpression(),
          expressionString = expression.asString(context);

    context.debug(`...evaluated the '${variableString}' variable to the ${expressionString} expression.`);

    return expression;
  }

  assign(expression, context) {
    const nested = false,
          expressionString = expression.asString(context), ///
          variableIdentifier = this.identifier, ///
          variableString = this.string, ///
          variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier, nested);

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

  static identifier = "Variable";

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
          identifier = parameter.getName(),
          expression = null,
          string = stringFromName(identifier, context),
          variable = new Variable(string, type, identifier, expression);

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
          identifier = (asName !== null) ?
                   asName : ///
                     namedParameter.getName(),
          expression = null,
          string = stringFromName(identifier, context),
          variable = new Variable(string, type, identifier, expression);

    return variable;
  }

  static fromExpressionAndParameter(expression, parameter, context) {
    const type = parameter.getType(),
          identifier = parameter.getName(),
          string = stringFromName(identifier, context),
          variable = new Variable(string, type, identifier, expression);

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
  const { Variable } = dom,
        identifier = nameFromVariableNode(variableNode),
        expression = null,
        string = stringFromName(identifier, context),
        variable = new Variable(string, type, identifier, expression);

  return variable;
}

function variableFromVariableNode(variableNode, context) {
  const { Variable } = dom,
        type = null,
        identifier = nameFromVariableNode(variableNode),
        expression = null,
        string = stringFromName(identifier, context),
        variable = new Variable(string, type, identifier, expression);

  return variable;
}

function nameFromVariableNode(variableNode) {
  const variableIdentifierTerminalNode = variableIdentifierTerminalNodeQuery(variableNode),
        variableIdentifierTerminalNodeContent = variableIdentifierTerminalNode.getContent(),
        identifier = variableIdentifierTerminalNodeContent; ///

  return identifier;
}

function stringFromName(identifier, context) {
  const nameString = identifier,  ///
        string = nameString;  ///

  return string;
}