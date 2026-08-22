"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

export default define(class BracketedTerm extends Element {
  constructor(context, string, node, breakPoint, term) {
    super(context, string, node, breakPoint);

    this.term = term;
  }

  getTerm() {
    return this.term;
  }

  getType() { return this.term.getType(); }

  evaluate(context, forward, back) {
    const bracketedTermString = this.getString(); ///

    context.trace(`Evaluating the '${bracketedTermString}' bracketed term...`);

    return this.term.evaluate(context, (value, back) => {
      const valueString = value.getString();

      context.debug(`...evaluated the '${bracketedTermString}' bracketed term as '${valueString}'.`);

      return forward(value, back);
    }, back);
  }

  static name = "BracketedTerm";
});
