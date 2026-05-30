"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Binding extends Element {
  constructor(context, string, node, breakPoint, type, name, elided) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.name = name;
    this.elided = elided;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  isElided() {
    return this.elided;
  }

  compareTerm(term, context) {
    if (this.elided) {
      return;
    }

    const termString = term.getString(),
          bindingString = this.getString();  ///

    context.trace(`Comparing the '${termString}' term against the '${bindingString}' binding...`);

    const termType = term.getType(),
          typeEqualToTermType = this.type.isEqualTo(termType);

    if (!typeEqualToTermType) {
      const typeString = this.type.getString(),
            message = `The '${termString}' term's '${termType}' type is not equal to the '${bindingString}' binding's '${typeString}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...comparing the '${termString}' term against the '${bindingString}' binding.`);
  }

  static name = "Binding";
});
