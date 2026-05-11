"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { NOMINAL_VALUE_TYPE } from "../types";
import { termFromNodesAndNominalValue } from "../utilities/nominal";

export default define(class NodesQuery extends Element {
  constructor(context, string, node, breakPoint, variable, query) {
    super(context, string, node, breakPoint);

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

    if (termType !== NOMINAL_VALUE_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NOMINAL_VALUE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    const primitiveValue = term.getPrimitiveValue(),
          nominalValue = primitiveValue;  ///

    node = nominalValue.getNode();

    if (node === null) {
      const termString = term.getString(),
            message = `The '${termString}' term's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = this.query.execute(node);

    term = termFromNodesAndNominalValue(nodes, nominalValue);

    const termString = term.getString();

    context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${termString}'.`);

    return term;
  }

  static name = "NodesQuery";
});
