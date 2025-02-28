"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const namedParameterNodesQuery = nodesQuery("/namedParameters/namedParameter"),
      objectAssignmentNamedParametersNodeQuery = nodeQuery("/objectAssignment/namedParameters");

export default domAssigned(class NamedParameters {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
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

  matchValues(values, context) {
    const valuesString = values.getString(),
          namedParametersString = this.string; ///

    context.trace(`Matching the ${valuesString} values against the '${namedParametersString}' named parameters...`);

    const valuesLength = values.getLength(),
          namedParametersLength = this.getLength();

    if (valuesLength !== namedParametersLength) {
      const message = `The ${valuesString} values and '${namedParametersString}' named parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachNamedParameter((namedParameter, index) => {
      if (namedParameter !== null) {
        const value = values.getValue(index);

        namedParameter.matchValue(value, context);
      }
    });

    context.debug(`...matched the ${valuesString} values against the '${namedParametersString}' named parameters.`);
  }

  matchNamedParameter(namedParameter, context) {
    const namedParameterString = namedParameter.getString(),
          namedParametersString = this.string; ///

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

  static fromObjectAssignmentNode(objectAssignmentNode, context) {
    const objectAssignmentNamedParametersNode = objectAssignmentNamedParametersNodeQuery(objectAssignmentNode),
          parametersNode = objectAssignmentNamedParametersNode,  ///
          node = parametersNode,  ///
          string = context.nodeAsString(node),
          namedParameterNodes = namedParameterNodesQuery(parametersNode),
          array = arrayFromNamedParameterNodes(namedParameterNodes, context),
          namedParameters = new NamedParameters(string, array);

    return namedParameters;
  }
});

function arrayFromNamedParameterNodes(namedParameterNodes, context) {
  const { NamedParameter } = dom,
        array = namedParameterNodes.map((namedParameterNode) => { ///
          const namedParameter = NamedParameter.fromNamedParameterNode(namedParameterNode, context);

          return namedParameter;
        });

  return array;
}
