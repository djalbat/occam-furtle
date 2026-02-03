"use strict";

import Exception from "../../exception";

import { define } from "../../elements";

import Element from "../../element";

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

  matchTerm(term, context) {
    const termString = term.getString(),
          namedParameterString = this.getString();  ///

    context.trace(`Matching the '${termString}' term against the '${namedParameterString}' named parameter...`);

    const termType = term.getType();

    if (this.type !== termType) {
      const message = `The '${termString}' term's '${termType}' type  and '${namedParameterString}' named parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${termString}' term against the '${namedParameterString}' named parameter.`);
  }

  matchNamedParameter(namedParameter, context) {
    let namedParameterMatches;

    const namedParameterA = this,  ///
          namedParameterB = namedParameter; ///

    const namedParameterAString = namedParameterA.getString(),
          namedParameterBString = namedParameterB.getString();

    context.trace(`Matching the '${namedParameterAString}' named parameter against the '${namedParameterBString}' named parameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterMatches = ((this.name === name) && (this.type === type));

    if (namedParameterMatches) {
      context.debug(`...matched the '${namedParameterAString}' named parameter against the '${namedParameterBString}' named parameter.`);
    }

    return namedParameterMatches;
  }

  static name = "NamedParameter";
});
