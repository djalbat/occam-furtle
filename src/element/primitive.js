"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";

import { define } from "../elements";
import { STRING_TYPE_NAME, NUMBER_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME, NOMINAL_VALUES_TYPE_NAME } from "../typeNames";

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
        case STRING_TYPE_NAME: {
          const stringLiteralA = this.value, ///
                stringLiteralB = value;  ///

          if (stringLiteralA === stringLiteralB) {
            equalTo = true;
          }

          break;
        }

        case NUMBER_TYPE_NAME: {
          const numberA = this.value, ///
                numberB = value;  ///

          if (numberA === numberB) {
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

        case NOMINAL_VALUE_TYPE_NAME: {
          const nominalValueA = this.value, ///
                nomimalValueB = value,  ///
                matches = nominalValueA.match(nomimalValueB);

          if (matches) {
            equalTo = true;
          }

          break;
        }

        case NOMINAL_VALUES_TYPE_NAME: {
          const nominalValuesA = this.value, ///
                nominalValuesB = value,  ///
                matches = match(nominalValuesA, nominalValuesB, (nominalValueA, nomimalValueB) => {
                  const matches = nominalValueA.match(nomimalValueB);

                  if (matches) {
                    return true;
                  }
                });

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
});
