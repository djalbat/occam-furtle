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

  evaluate(context, continuation) {
    const ternaryString = this.getString(); ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    const value = this.term.evaluate(context),
          valueType = value.getType(),
          valueTypeBooleanType = valueType.isBooleanType();

    if (!valueTypeBooleanType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          boolean = primitiveValue, ///
          expression = boolean ?
                         this.ifExpression :
                           this.elseExpression;

    expression.evaluate(context, (value) => {
      const valueString = value.getString();

      context.debug(`...evaluated the '${ternaryString}' ternary as '${valueString}'.`);

      continuation(value);
    });
  }

  static name = "Ternary";
});
