"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

export default define(class BracketedTerm extends Element {
  constructor(context, string, node, term) {
    super(context, string, node)

    this.term = term;
  }

  getTerm() {
    return this.term;
  }

  getType() { return this.term.getType(); }

  evaluate(context) {
    let term;

    const bracketedTermString = this.getString(); ///

    context.trace(`Evaluating the '${bracketedTermString}' bracketed term...`);

    term = this.term.evaluate(context);

    const termString = term.getString();

    context.debug(`...evaluated the '${bracketedTermString}' bracketed term as '${termString}'.`);

    return term;
  }

  static name = "BracketedTerm";
});
