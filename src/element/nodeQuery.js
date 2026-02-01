"use strict";

import { arrayUtilities } from "necessary";

import Exception from "../exception";

import { define } from "../elements";
import { NODE_TYPE } from "../types";
import { termFromNode } from "../utilities/term";

const { first } = arrayUtilities;

export default define(class NodeQuery {
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

    const nodeQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodeQueryString}' node query...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodeQueryString}' node query because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    term = this.variable.evaluate(context);

    const termType = term.getType();

    if (termType !== NODE_TYPE) {
      const termString = term.getString(),
            message = `The ${termString} term's '${termType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const termNode = term.getNode();

    if (termNode === null) {
      const termString = term.getString(),
            message = `The ${termString} term's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = termNode; ///

    const nodes = this.query.execute(node),
          nodesLength = nodes.length;

    if (nodesLength !== 1) {
      const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const firstNode = first(nodes);

    node = firstNode; ///

    term = termFromNode(node, context);

    context.debug(`...evaluated the '${nodeQueryString}' node query.`);

    return term;
  }

  static name = "NodeQuery";
});
