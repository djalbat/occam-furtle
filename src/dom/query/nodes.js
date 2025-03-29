"use strict";

import { Query } from "occam-query";
import { contentUtilities } from "occam-entities";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { NODE_TYPE } from "../../types";
import { domAssigned } from "../../dom";

const { trimDoubleQuotes } = contentUtilities;

const expressionNodesQueryNodeQuery = nodeQuery("/expression/nodesQuery"),
      stringLiteralTerminalNodesQuery = nodeQuery("/nodesQuery/@string-literal");

export default domAssigned(class NodesQuery {
  constructor(string, variable, query) {
    this.string = string;
    this.variable = variable;
    this.query = query;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getQuery() {
    return this.query;
  }

  evaluate(context) {
    let expression;

    const nodesQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodesQueryString}' nodes query because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    expression = this.variable.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== NODE_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const expressionNode = expression.getNode();

    if (expressionNode === null) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = expressionNode; ///

    const nodes = this.query.execute(node);

    const { Expression } = dom;

    expression = Expression.fromNodes(nodes, context);

    context.debug(`...evaluated the '${nodesQueryString}' nodes query.`);

    return expression;
  }

  static name = "NodesQuery";

  static fromExpressionNode(expressionNode, context) {
    let nodesQuery = null;

    const expressionNodesQueryNode = expressionNodesQueryNodeQuery(expressionNode);

    if (expressionNodesQueryNode !== null) {
      const nodesQueryNode = expressionNodesQueryNode; ///

      nodesQuery = nodesQueryFromNodesQueryNode(nodesQueryNode, context);
    }

    return nodesQuery;
  }
});

function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
  const { Variable, NodesQuery } = dom,
        node = nodesQueryNode,  ///
        string = context.nodeAsString(node),
        expressionString = expressionStringFromNodesQueryNode(nodesQueryNode, context),
        variable = Variable.fromNodesQueryNode(nodesQueryNode, context),
        query = Query.fromExpressionString(expressionString),
        nodesQuery = new NodesQuery(string, variable, query);

  return nodesQuery;
}

function expressionStringFromNodesQueryNode(nodesQueryNode, context) {
  const stringLiteralTerminalNode = stringLiteralTerminalNodesQuery(nodesQueryNode),
        stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(),
        expressionString = trimDoubleQuotes(stringLiteralTerminalNodeContent);

  return expressionString;
}
