"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";
import Exception from "../exception";

import { define } from "../elements";
import { NODE_TYPE } from "../types";
import { termFromNode } from "../utilities/term";

const { first } = arrayUtilities;

export default define(class NodeQuery extends Element {
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

    const nodeQueryString = this.getString();  ///

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

    const termString = term.getString();

    context.debug(`...evaluated the '${nodeQueryString}' node query as '${termString}'.`);

    return term;
  }

  static name = "NodeQuery";
});
