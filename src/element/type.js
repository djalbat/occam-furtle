"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

import { instantiate } from "../utilities/context";
import { instantiateType } from "../process/instantiate";
import { typeStringFromTypeNameAndArgumentTypeName } from "../utilities/string";
import { nameFromTypeNode, argumentTypeFromTypeNode } from "../utilities/element";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, INTEGER_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";

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

  isBooleanType() {
    const booleanType = (this.name === BOOLEAN_TYPE_NAME);

    return booleanType;
  }

  isIntegerType() {
    const integerType = (this.name === INTEGER_TYPE_NAME);

    return integerType;
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

        case STRING_TYPE_NAME:
        case BOOLEAN_TYPE_NAME:
        case INTEGER_TYPE_NAME:
        case NOMINAL_VALUE_TYPE_NAME: {
          equalTo = true;

          break;
        }
      }
    }

    return equalTo;
  }

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            typeNode = instantiateType(string, context),
            node = typeNode,  ///
            breakPoint = null,
            name = nameFromTypeNode(typeNode, context),
            argumentType = argumentTypeFromTypeNode(typeNode, context);

      context = null;

      const type = new Type(context, string, node, breakPoint, name, argumentType);

      return type;
    }, context);
  }

  static fromTypeName(typeName, context) {
    let type = null;

    if (typeName !== null) {
      const node = null,  ///
            name = typeName,  ///
            argumentType = null,
            typeString = typeName,  ///
            string = typeString,  ///
            breakPoint = null;

      context = null;

      type = new Type(context, string, node, breakPoint, name, argumentType);
    }

    return type;
  }

  static fromTypeNameAndArgumentTypeName(typeName, argumentTypeName, context) {
    const node = null,  ///
          name = typeName,  ///
          argumentType = Type.fromTypeName(argumentTypeName, context),
          typeString = typeStringFromTypeNameAndArgumentTypeName(typeName, argumentTypeName),
          string = typeString,  ///
          breakPoint = null;

    context = null;

    const type = new Type(context, string, node, breakPoint, name, argumentType);

    return type;
  }

});
