"use strict";

import { nominalValuePropertyStringFromNameAndType } from "./utilities/string";

export default class NominalValueProperty {
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

  compareNamedBinding(namedBinding, context) {
    let namedBindingCompares = false;

    const nominalValuePropertyString = this.string, ///
          namedBindingString = namedBinding.getString();

    context.trace(`Comparing the '${nominalValuePropertyString}' node property with the '${namedBindingString}' named binding...`);

    const namedBindingName = namedBinding.getName(),
          namedBindingType = namedBinding.getType(),
          nameEqualToNamedBindingName = (this.name === namedBindingName),
          typeEqualToNamedBindingType = this.type.isEqualTo(namedBindingType);

    if (nameEqualToNamedBindingName && typeEqualToNamedBindingType) {
      namedBindingCompares = true;
    }

    if (namedBindingCompares) {
      context.debug(`...compared the '${nominalValuePropertyString}' node property with the '${namedBindingString}' named binding.`);
    }

    return namedBindingCompares;
  }

  static name = "Parameter";

  static fromNameAndType(name, type) {
    const nominalValuePropertyString = nominalValuePropertyStringFromNameAndType(name, type),
          string = nominalValuePropertyString,  ///
          nominalValueProperty = new NominalValueProperty(string, type, name);

    return nominalValueProperty;
  }
};
