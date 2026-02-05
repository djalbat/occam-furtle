"use strict";

import Element from "../element";
import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";

export default define(class Ternary extends Element {
  constructor(context, string, node, term, ifExpression, elseExpression) {
    super(context, string, node)

    this.term = term;
    this.ifExpression = ifExpression;
    this.elseExpression = elseExpression;
  }

  getTerm() {
    return this.term;
  }

  getIfBlock() {
    return this.ifExpression;
  }

  getElseBlock() {
    return this.elseExpression;
  }

  async evaluate(context) {
    let term;

    const ternaryString = this.getString(); ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    term = this.term.evaluate(context);

    const termType = term.getType();

    if (termType !== BOOLEAN_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    term = boolean ?
              await this.ifExpression.evaluate(context) :
                await this.elseExpression.evaluate(context);

    const termString = term.getString();

    context.debug(`...evaluated the '${ternaryString}' ternary as '${termString}'.`);

    return term;
  }

  static name = "Ternary";
});
