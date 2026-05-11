"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";

import { define } from "../elements";
import { STRING_TYPE, NUMBER_TYPE, BOOLEAN_TYPE, NOMINAL_VALUE_TYPE, NOMINAL_VALUES_TYPE } from "../types";

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

    const type = primitive.getType();

    if (this.type === type) {
      const value = primitive.getValue();

      switch (type) {
        case STRING_TYPE: {
          const stringLiteralA = this.value, ///
                stringLiteralB = value;  ///

          if (stringLiteralA === stringLiteralB) {
            equalTo = true;
          }

          break;
        }

        case NUMBER_TYPE: {
          const numberA = this.value, ///
                numberB = value;  ///

          if (numberA === numberB) {
            equalTo = true;
          }

          break;
        }

        case BOOLEAN_TYPE: {
          const booleanA = this.value, ///
                booleanB = value;  ///

          if (booleanA === booleanB) {
            equalTo = true;
          }

          break;
        }

        case NOMINAL_VALUE_TYPE: {
          const nominalValueA = this.value, ///
                nomimalValueB = value,  ///
                matches = nominalValueA.match(nomimalValueB);

          if (matches) {
            equalTo = true;
          }

          break;
        }

        case NOMINAL_VALUES_TYPE: {
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
