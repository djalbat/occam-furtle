"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, NUMBER_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";

export default define(class Type extends Element {
  constructor(context, string, node, breakPoint, name, argumentType) {
    super(context, string, node, breakPoint);

    this.name = name;
    this.argumentType = argumentType;
  }

  getName() {
    return this.name;
  }

  getArgumentType() {
    return this.argumentType;
  }

  isListType() {
    const listType = (this.name === LIST_TYPE_NAME);

    return listType;
  }

  isStringType() {
    const booleanType = (this.name === STRING_TYPE_NAME);

    return booleanType;
  }

  isNumberType() {
    const numberType = (this.name === NUMBER_TYPE_NAME);

    return numberType;
  }

  isBooleanType() {
    const booleanType = (this.name === BOOLEAN_TYPE_NAME);

    return booleanType;
  }

  isNominalValueType() {
    const listType = (this.name === NOMINAL_VALUE_TYPE_NAME);

    return listType;
  }

  isEqualTo(type) {
    let equalTo = false;

    const typeName = type.getName();

    if (this.name === typeName) {
      switch (this.name) {
        case LIST_TYPE_NAME: {
          const typeArgumentType = type.getArgumentType();

          if ((this.argumentType === null) || (typeArgumentType === null)) {
            if (this.argumentType === typeArgumentType) {
              equalTo = true;
            }
          } else {
            const arguemntTypeEqualToTypeArgumentType = this.argumentType.isEqualTo(typeArgumentType);

            if (arguemntTypeEqualToTypeArgumentType) {
              equalTo = true;
            }
          }

          break;
        }

        default: {
          equalTo = true;

          break;
        }
      }
    }

    return equalTo;
  }

  static name = "Type";
});
