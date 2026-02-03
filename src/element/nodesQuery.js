"use strict";

import Exception from "../exception";

import { define } from "../elements";
import { NODE_TYPE } from "../types";
import { termFromNodes } from "../utilities/term";

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
    let term;

    const nodesQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodesQueryString}' nodes query because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    term = this.variable.evaluate(context);

    const termType = term.getType();

    if (termType !== NODE_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const termNode = term.getNode();

    if (termNode === null) {
      const termString = term.getString(),
            message = `The '${termString}' term's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = termNode; ///

    const nodes = this.query.execute(node);

    term = termFromNodes(nodes, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${termString}'.`);

    return term;
  }

  static name = "NodesQuery";
});
