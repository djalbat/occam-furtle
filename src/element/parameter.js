"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameter {
  constructor(string, type, name) {
    this.string = string;
    this.type = type;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  matchTerm(term, context) {
    const termString = term.getString(),
          parameterString = this.string;  ///

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
