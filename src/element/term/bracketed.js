"use strict";

import { define } from "../../elements";

export default define(class BracketedTerm {
  constructor(string, term) {
    this.string = string;
    this.term = term;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    return this.term;
  }

  getType() { return this.term.getType(); }

  evaluate(context) {
    let term;

    const bracketedTermString = this.string; ///

    context.trace(`Evaluating the '${bracketedTermString}' bracketed term...`);

    term = this.term.evaluate(context);

    context.debug(`...evaluated the '${bracketedTermString}' bracketed term.`);

    return term;
  }

  static name = "BracketedTerm";
});
