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

  evaluate(context) {
    let value;

    const bracketedTermString = this.getString(); ///

    context.trace(`Evaluating the '${bracketedTermString}' bracketed term...`);

    value = this.term.evaluate(context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${bracketedTermString}' bracketed term as '${valueString}'.`);

    return value;
  }

  static name = "BracketedTerm";
});
