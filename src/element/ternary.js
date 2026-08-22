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

  evaluate(context, forward, back) {
    const ternaryString = this.getString(); ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    return this.term.evaluate(context, (value, back) => {
      const valueType = value.getType(),
            valueTypeBooleanType = valueType.isBooleanType();

      if (!valueTypeBooleanType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const primitiveValue = value.getPrimitiveValue(),
            boolean = primitiveValue, ///
            expression = boolean ?
                           this.ifExpression :
                             this.elseExpression;

      return expression.evaluate(context, (value, back) => {
        const valueString = value.getString();

        context.debug(`...evaluated the '${ternaryString}' ternary as '${valueString}'.`);

        return forward(value, back);
      }, back);
    }, back);
  }

  static name = "Ternary";
});
