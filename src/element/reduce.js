"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE } from "../types";
import { termFromNode } from "../utilities/term";

export default define(class Reduce {
  constructor(string, variable, initialExpression, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.initialExpression = initialExpression;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getInitialExpression() {
    return this.initialExpression;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate(context) {
    let term;

    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' reduce...`);

    term = this.variable.evaluate(context);

    const termType = term.getType();

    if (termType !== NODES_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = term.getNodes(),
          initialExpression = this.initialExpression.evaluate(context);

    term = nodes.reduce((currentExpression, node) => {
      let term;

      const { Terms } = elements;

      term = currentTerm; ///

      const terms = Terms.fromTerm(term, context);

      term = termFromNode(node, context);

      terms.addTerm(term);

      term = this.anonymousProcedure.call(terms, context);

      return term;
    }, initialExpression);

    const termString = term.getString();

    context.trace(`...evaluated the '${reduceString}' reduce as '${termString}'.`);

    return term;
  }

  static name = "Reduce";
});
