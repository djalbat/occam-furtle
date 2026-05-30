"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";

export default define(class NamedBinding extends Element {
  constructor(context, string, node, breakPoint, type, name, alias) {
    super(context, string, node, breakPoint);

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
          namedBindingString = this.getString();  ///

    context.trace(`Comparing the '${termString}' term with the '${namedBindingString}' named binding...`);

    const termType = term.getType();

    if (this.type !== termType) {
      const message = `The '${termString}' term's '${termType}' type is not equal to '${namedBindingString}' named binding's '${this.type}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${termString}' term with the '${namedBindingString}' named binding.`);
  }

  compareNamedBinding(namedBinding, context) {
    let namedBindingCompares;

    const namedBindingA = this,  ///
          namedBindingB = namedBinding; ///

    const namedBindingAString = namedBindingA.getString(),
          namedBindingBString = namedBindingB.getString();

    context.trace(`Comparing the '${namedBindingAString}' named binding with the '${namedBindingBString}' named binding...`);

    const nameBindingName = namedBinding.getName(),
          nameBindingType = namedBinding.getType(),
          nameEqualToNameBindingName = (this.name === nameBindingName),
          typeEqualToNameBindingType = this.type.isEqualTo(nameBindingType);

    namedBindingCompares = (nameEqualToNameBindingName && typeEqualToNameBindingType);

    if (namedBindingCompares) {
      context.debug(`...compared the '${namedBindingAString}' named binding with the '${namedBindingBString}' named binding.`);
    }

    return namedBindingCompares;
  }

  static name = "NamedBinding";
});
