"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE } from "../types";
import { termFromNode } from "../utilities/term";

const { asyncReduce } = asynchronousUtilities;

export default define(class Reduce extends Element {
  constructor(context, string, node, variable, initialExpression, anonymousProcedure) {
    super(context, string, node)

    this.variable = variable;
    this.initialExpression = initialExpression;
    this.anonymousProcedure = anonymousProcedure;
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

  async evaluate(context) {
    let term;

    await this.break(context);

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
          initialExpression = await this.initialExpression.evaluate(context);

    term = await asyncReduce(nodes, async (currentExpression, node) => {
      let term;

      const { Terms } = elements;

      term = currentTerm; ///

      const terms = Terms.fromTerm(term, context);

      term = termFromNode(node, context);

      terms.addTerm(term);

      term = await this.anonymousProcedure.call(terms, context);

      return term;
    }, initialExpression);

    const termString = term.getString();

    context.trace(`...evaluated the '${reduceString}' reduce as '${termString}'.`);

    return term;
  }

  static name = "Reduce";
});
