"use strict";

import Element from "../../element";
import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";
import { termFromBoolean } from "../../utilities/term";

export default define(class NegatedTerm extends Element {
  constructor(context, string, node, type, term) {
    super(context, string, node)

    this.type = type;
    this.term = term;
  }

  getType() {
    return this.type;
  }

  getTerm() {
    return this.term;
  }

  evaluate(context) {
    let term;

    const negatedTermString = this.getString(); ///

    context.trace(`Evaluating the '${negatedTermString}' negated term...`);

    term = this.term.evaluate(context);

    const termType = term.getType();

    if (termType !== BOOLEAN_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' left term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let boolean;

    const primitiveValue = term.getPrimitiveValue();

    boolean = primitiveValue; ///

    boolean = !boolean;

    term = termFromBoolean(boolean, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${negatedTermString}' negated term as '${termString}'.`);

    return term;
  }

  static name = "NegatedTerm";
});
