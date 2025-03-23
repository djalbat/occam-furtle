"use strict";

import { Query } from "occam-query";
import { contentUtilities } from "occam-entities";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { NODE_TYPE } from "../../types";
import { domAssigned } from "../../dom";

const { trimDoubleQuotes } = contentUtilities;

const valueNodesQueryNodeQuery = nodeQuery("/value/nodesQuery"),
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
    let value;

    const nodesQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodesQueryString}' nodes query because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NODE_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const valueNode = value.getNode();

    if (valueNode === null) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = valueNode; ///

    const nodes = this.query.execute(node);

    const { Value } = dom;

    value = Value.fromNodes(nodes, context);

    context.debug(`...evaluated the '${nodesQueryString}' nodes query.`);

    return value;
  }

  static name = "NodesQuery";

  static fromValueNode(valueNode, context) {
    let nodesQuery = null;

    const valueNodesQueryNode = valueNodesQueryNodeQuery(valueNode);

    if (valueNodesQueryNode !== null) {
      const nodesQueryNode = valueNodesQueryNode; ///

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
