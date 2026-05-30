"use strict";

import { nodePropertyStringFromNameAndType } from "./utilities/string";
import {STRING_TYPE_NAME} from "./typeNames";

export default class NodeProperty {
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
    let namedBindingCompares;

    const nodePropertyString = this.string, ///
          namedBindingString = namedBinding.getString();

    context.trace(`Comparing the '${nodePropertyString}' node property with the '${namedBindingString}' named binding...`);

    const nameBindingName = namedBinding.getName(),
          nameBindingType = namedBinding.getType(),
          nameEqualToNameBindingName = (this.name === nameBindingName),
          typeEqualToNameBindingType = this.type.isEqualTo(nameBindingType);

    namedBindingCompares = (nameEqualToNameBindingName && typeEqualToNameBindingType);

    if (namedBindingCompares) {
      context.debug(`...compared the '${nodePropertyString}' node property with the '${namedBindingString}' named binding.`);
    }

    return namedBindingCompares;
  }

  static name = "Parameter";

  static fromNameAndType(name, type) {
    const nodePropertyString = nodePropertyStringFromNameAndType(name, type),
          string = nodePropertyString,  ///
          nodeProperty = new NodeProperty(string, type, name);

    return nodeProperty;
  }
};
