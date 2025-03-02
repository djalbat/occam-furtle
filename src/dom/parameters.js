"use strict";

import dom from "../dom";
import Exception from "../exception";

import { UNDERSCORE } from "../constants";
import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const parameterNodesQuery = nodesQuery("/parameters/parameter"),
      arrayAssignmentParametersNodeQuery = nodeQuery("/arrayAssignment/parameters"),
      anonymousProcedureParametersNodeQuery = nodeQuery("/anonymousProcedure/parameters"),
      procedureDeclarationParametersNodeQuery = nodeQuery("/procedureDeclaration/parameters");

export default domAssigned(class Parameters {
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

  getParameter(index) {
    const parameter = this.array[index] || null;

    return parameter;
  }

  forEachParameter(callback) { this.array.forEach(callback); }

  matchValues(values, context) {
    const valuesString = values.getString(),
          parametersString = this.string; ///

    context.trace(`Matching the ${valuesString} values against the '${parametersString}' parameters...`);

    const valuesLength = values.getLength(),
          parametersLength = this.getLength();

    if (valuesLength !== parametersLength) {
      const message = `The ${valuesString} values and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachParameter((parameter, index) => {
      if (parameter !== null) {
        const value = values.getValue(index);

        parameter.matchValue(value, context);
      }
    });

    context.debug(`...matched the ${valuesString} values against the '${parametersString}' parameters.`);
  }

  static name = "Parameters";

  static fromArrayAssignmentNode(arrayAssignmentNode, context) {
    const arrayAssignmentParametersNode = arrayAssignmentParametersNodeQuery(arrayAssignmentNode),
          parametersNode = arrayAssignmentParametersNode,  ///
          parameters = parametersFromParametersNode(parametersNode, context);

    return parameters;
  }

  static fromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const anonymousProcedureParametersNode = anonymousProcedureParametersNodeQuery(anonymousProcedureNode),
          parametersNode = anonymousProcedureParametersNode,  ///
          parameters = parametersFromParametersNode(parametersNode, context);

    return parameters;
  }

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const procedureDeclarationParametersNode = procedureDeclarationParametersNodeQuery(procedureDeclarationNode),
          parametersNode = procedureDeclarationParametersNode,  ///
          parameters = parametersFromParametersNode(parametersNode, context);

    return parameters;
  }
});

function parametersFromParametersNode(parametersNode, context) {
  const { Parameters } = dom,
        array = arrayFromParametersNode(parametersNode, context),
        string = stringFromArray(array, context),
        parameters = new Parameters(string, array);

  return parameters;
}

function arrayFromParametersNode(parametersNode, context) {
  const parameterNodes = parameterNodesQuery(parametersNode),
        array = parameterNodes.map((parameterNode) => { ///
          const { Parameter } = dom,
                parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return array;
}

function stringFromArray(array, context) {
  const parametersString = array.reduce((parametersString, parameter) => {
          const parameterString = (parameter !== null)?
                                    parameter.getString() :
                                      UNDERSCORE;

          parametersString = (parametersString === null) ?
                               parameterString :
                                `${parametersString}, ${parameterString}`;

          return parametersString;
        }, null),
        string = parametersString;  ///

  return string;
}
