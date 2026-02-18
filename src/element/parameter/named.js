"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";

export default define(class NamedParameter extends Element {
  constructor(context, string, node, type, name, alias) {
    super(context, string, node)

    this.type = type;
    this.name = name;
    this.alias = alias;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getAlias() {
    return this.alias;
  }

  isAliased() {
    const aliased = (this.alias !== null);

    return aliased;
  }

  getAliasedName() {
    const aliased = this.isAliased(),
          aliasedName = aliased ?
                          this.alias :  ///
                            this.name; ///

    return aliasedName;
  }

  compareTerm(term, context) {
    const termString = term.getString(),
          namedParameterString = this.getString();  ///

    context.trace(`Comparing the '${termString}' term with the '${namedParameterString}' named parameter...`);

    const termType = term.getType();

    if (this.type !== termType) {
      const message = `The '${termString}' term's '${termType}' type is not equal to '${namedParameterString}' named parameter's '${this.type}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${termString}' term with the '${namedParameterString}' named parameter.`);
  }

  compareNamedParameter(namedParameter, context) {
    let namedParameterCompares;

    const namedParameterA = this,  ///
          namedParameterB = namedParameter; ///

    const namedParameterAString = namedParameterA.getString(),
          namedParameterBString = namedParameterB.getString();

    context.trace(`Comparing the '${namedParameterAString}' named parameter with the '${namedParameterBString}' named parameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterCompares = ((this.name === name) && (this.type === type));

    if (namedParameterCompares) {
      context.debug(`...compared the '${namedParameterAString}' named parameter with the '${namedParameterBString}' named parameter.`);
    }

    return namedParameterCompares;
  }

  static name = "NamedParameter";
});
