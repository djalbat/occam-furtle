"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameter extends Element {
  constructor(context, string, node, type, name) {
    super(context, string, node)

    this.type = type;
    this.name = name;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  matchTerm(term, context) {
    const termString = term.getString(),
          parameterString = this.getString();  ///

    context.trace(`Matching the '${termString}' term against the '${parameterString}' parameter...`);

    const termType = term.getType();

    if (this.type !== termType) {
      const message = `The '${termString}' term's '${termType}' type  and '${parameterString}' parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${termString}' term against the '${parameterString}' parameter.`);
  }

  static name = "Parameter";
});
