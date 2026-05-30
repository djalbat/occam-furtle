"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE_NAME } from "../../typeNames";
import { valueFromBoolean } from "../../utilities/value";

export default define(class NegatedTerm extends Element {
  constructor(context, string, node, breakPoint, type, term) {
    super(context, string, node, breakPoint);

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
    let value;

    const negatedTermString = this.getString(); ///

    context.trace(`Evaluating the '${negatedTermString}' negated value...`);

    value = this.term.evaluate(context);

    const valueType = value.getType();

    if (valueType !== BOOLEAN_TYPE_NAME) {
      const valueString = value.getString(),
            message = `The '${valueString}' left value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let boolean;

    const primitiveValue = value.getPrimitiveValue();

    boolean = primitiveValue; ///

    boolean = !boolean;

    value = valueFromBoolean(boolean, context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${negatedTermString}' negated value as '${valueString}'.`);

    return value;
  }

  static name = "NegatedTerm";
});
