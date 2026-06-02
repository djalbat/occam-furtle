"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";

import { define } from "../elements";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, INTEGER_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";

const { match } = arrayUtilities;

export default define(class Primitive extends Element {
  constructor(context, string, node, breakPoint, type, value) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.value = value;
  }

  getType() {
    return this.type;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    const { Term } = elements,
          primitive = this,
          term = Term.fromPrimitive(primitive, context);

    return term;
  }

  isEqualTo(primitive) {
    let equalTo = false;

    const primitiveType = primitive.getType(),
          typeEqualToPrimitiveType = this.type.isEqualTo(primitiveType);

    if (typeEqualToPrimitiveType) {
      const value = primitive.getValue(),
            typeName = this.type.getName();

      switch (typeName) {
        case LIST_TYPE_NAME: {
          const listA = this.value, ///
                listB = value,  ///
                matches = match(listA, listB, (valueA, valueB) => {
                  const matches = valueA.isEqualTo(valueB);

                  if (matches) {
                    return true;
                  }
                });

          if (matches) {
            equalTo = true;
          }

          break;
        }

        case STRING_TYPE_NAME: {
          const stringLiteralA = this.value, ///
                stringLiteralB = value;  ///

          if (stringLiteralA === stringLiteralB) {
            equalTo = true;
          }

          break;
        }

        case BOOLEAN_TYPE_NAME: {
          const booleanA = this.value, ///
                booleanB = value;  ///

          if (booleanA === booleanB) {
            equalTo = true;
          }

          break;
        }

        case INTEGER_TYPE_NAME: {
          const integerA = this.value, ///
                integerB = value;  ///

          if (integerA === integerB) {
            equalTo = true;
          }

          break;
        }

        case NOMINAL_VALUE_TYPE_NAME: {
          const nominalValueA = this.value, ///
                nomimalValueB = value,  ///
                matches = nominalValueA.match(nomimalValueB);

          if (matches) {
            equalTo = true;
          }

          break;
        }
      }
    }

    return equalTo;
  }

  static name = "Primitive";

  static fromPrimitiveValueAndType(primitiveValue, type, context) {
    const value = primitiveValue, ///
          typeName = type.getName();

    let string;

    switch (typeName) {
      case NOMINAL_VALUE_TYPE_NAME: {
        const nominalValue = value;  ///

        string = nominalValue.getString();

        break;
      }

      default: {
        string = `${value}`;

        break;
      }
    }

    const node = null,
          breakPoint = null,
          primitive = new Primitive(context, string, node, breakPoint, type, value);

    return primitive;
  }
});
