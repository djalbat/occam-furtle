"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE_NAME } from "../typeNames";

export default define(class Ternary extends Element {
  constructor(context, string, node, breakPoint, term, ifExpression, elseExpression) {
    super(context, string, node, breakPoint);

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
    let value;

    const ternaryString = this.getString(); ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    value = this.term.evaluate(context);

    const valueType = value.getType();

    if (valueType !== BOOLEAN_TYPE_NAME) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          boolean = primitiveValue; ///

    value = boolean ?
              await this.ifExpression.evaluate(context) :
                await this.elseExpression.evaluate(context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${ternaryString}' ternary as '${valueString}'.`);

    return value;
  }

  static name = "Ternary";
});
