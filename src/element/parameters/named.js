"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";

export default define(class NamedParameters extends Element {
  constructor(context, string, node, array) {
    super(context, string, node)

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  getLength() {
    const length = this.array.length;

    return length;
  }

  getNamedParameter(index) {
    const namedParameter = this.array[index] || null;

    return namedParameter;
  }

  someNamedParameter(callback) { return this.array.some(callback); }

  forEachNamedParameter(callback) { this.array.forEach(callback); }

  compareTerms(terms, context) {
    const termsString = terms.getString(),
          namedParametersString = this.getString(); ///

    context.trace(`Comparing the '${termsString}' terms with the '${namedParametersString}' named parameters...`);

    const termsLength = terms.getLength(),
          namedParametersLength = this.getLength();

    if (termsLength !== namedParametersLength) {
      const message = `The '${termsString}' terms and '${namedParametersString}' named parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachNamedParameter((namedParameter, index) => {
      if (namedParameter !== null) {
        const term = terms.getTerm(index);

        namedParameter.compareTerm(term, context);
      }
    });

    context.debug(`...compared the '${termsString}' terms with the '${namedParametersString}' named parameters.`);
  }

  compareNamedParameter(namedParameter, context) {
    const namedParameterString = namedParameter.getString(),
          namedParametersString = this.getString(); ///

    context.trace(`Comparing the '${namedParameterString}' namedParameter with the '${namedParametersString}' named parameters...`);

    const namedParameterA = namedParameter, ///
          namedParameterCompares = this.someNamedParameter((namedParameter) => {
            if (namedParameter !== null) {
              const namedParameterB = namedParameter, ///
                    namedParameterBComparesToNamedParameterA = namedParameterA.compareNamedParameter(namedParameterB, context);

              if (namedParameterBComparesToNamedParameterA) {
                return true;
              }
            }
          });

    if (!namedParameterCompares) {
      const message = `The '${namedParameterString}' namedParameter does not compare to any of the '${namedParametersString}' named parameters.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${namedParameterString}' namedParameter with the '${namedParametersString}' named parameters.`);
  }

  compareNamedParameters(namedParameters, context) {
    namedParameters.forEachNamedParameter((namedParameter) => {
      if (namedParameter !== null) {
        this.compareNamedParameter(namedParameter, context);
      }
    });
  }

  static name = "NamedParameters";
});
