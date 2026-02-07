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

  matchTerms(terms, context) {
    const termsString = terms.getString(),
          namedParametersString = this.getString(); ///

    context.trace(`Matching the '${termsString}' terms against the '${namedParametersString}' named parameters...`);

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

        namedParameter.matchTerm(term, context);
      }
    });

    context.debug(`...matched the '${termsString}' terms against the '${namedParametersString}' named parameters.`);
  }

  matchNamedParameter(namedParameter, context) {
    const namedParameterString = namedParameter.getString(),
          namedParametersString = this.getString(); ///

    context.trace(`Matching the '${namedParameterString}' namedParameter against the '${namedParametersString}' named parameters...`);

    const namedParameterA = namedParameter, ///
          namedParameterMatches = this.someNamedParameter((namedParameter) => {
            if (namedParameter !== null) {
              const namedParameterB = namedParameter, ///
                    namedParameterBMatchesNamedParameterA = namedParameterA.matchNamedParameter(namedParameterB, context);

              if (namedParameterBMatchesNamedParameterA) {
                return true;
              }
            }
          });

    if (!namedParameterMatches) {
      const message = `The '${namedParameterString}' namedParameter does not match any of the '${namedParametersString}' named parameters.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${namedParameterString}' namedParameter against the '${namedParametersString}' named parameters.`);
  }

  matchNamedParameters(namedParameters, context) {
    namedParameters.forEachNamedParameter((namedParameter) => {
      if (namedParameter !== null) {
        this.matchNamedParameter(namedParameter, context);
      }
    });
  }

  static name = "NamedParameters";
});
