"use strict";

import Exception from "../../exception";

import { define } from "../../elements";
import { NODE_TYPE } from "../../types";
import { expressionFromNodes } from "../../utilities/element";

export default define(class NodesQuery {
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
      const expressionString = expression.getString(),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const expressionNode = expression.getNode();

    if (expressionNode === null) {
      const expressionString = expression.getString(),
            message = `The ${expressionString} expression's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = expressionNode; ///

    const nodes = this.query.execute(node);

    expression = expressionFromNodes(nodes, context);

    context.debug(`...evaluated the '${nodesQueryString}' nodes query.`);

    return expression;
  }

  static name = "NodesQuery";
});
