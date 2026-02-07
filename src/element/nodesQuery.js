"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { NODE_TYPE } from "../types";
import { termFromNodes } from "../utilities/term";

export default define(class NodesQuery extends Element {
  constructor(context, string, node, variable, query) {
    super(context, string, node)

    this.variable = variable;
    this.query = query;
  }

  getVariable() {
    return this.variable;
  }

  getQuery() {
    return this.query;
  }

  evaluate(context) {
    let term;

    const nodesQueryString = this.getString();  ///

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

    let node;

    const primitiveValue = term.getPrimitiveValue();

    node = primitiveValue;  ///

    if (node === null) {
      const termString = term.getString(),
            message = `The '${termString}' term's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = this.query.execute(node);

    term = termFromNodes(nodes, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${termString}'.`);

    return term;
  }

  static name = "NodesQuery";
});
