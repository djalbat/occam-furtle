"use strict";

import dom from "../dom";
import Exception from "../exception";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const parametersNodeQuery = nodeQuery("/forEachLoop/anonymousProcedure/parameters"),
      parameterNodesQuery = nodesQuery("/parameters/parameter"),
      arrayAssignmentParametersNodeQuery = nodeQuery("/arrayAssignment/parameters"),
      objectAssignmentParametersNodeQuery = nodeQuery("/objectAssignment/parameters"),
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

  someParameter(callback) { return this.array.some(callback); }

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

  matchParameter(parameter, context) {
    const parameterString = parameter.getString(),
          parametersString = this.string; ///

    context.trace(`Matching the '${parameterString}' parameter against the '${parametersString}' parameters...`);

    const parameterA = parameter, ///
          parameterMatches = this.someParameter((parameter) => {
            if (parameter !== null) {
              const parameterB = parameter, ///
                    parameterBMatchesParameterA = parameterA.matchParameter(parameterB, context);

              if (parameterBMatchesParameterA) {
                return true;
              }
            }
          });

    if (!parameterMatches) {
      const message = `The '${parameterString}' parameter does not match any of the '${parametersString}' parameters.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${parameterString}' parameter against the '${parametersString}' parameters.`);
  }

  matchParameters(parameters, context) {
    parameters.forEachParameter((parameter) => {
      if (parameter !== null) {
        this.matchParameter(parameter, context);
      }
    });
  }

  static name = "Parameters";

  static fromStringAndArray(string, array) {
    const parameters = new Parameters(string, array);

    return parameters;
  }

  static fromForEachLoopNode(forEachLoopNode, context) {
    const { Parameter } = dom,
          parametersNode = parametersNodeQuery(forEachLoopNode),
          parameterNodes = parameterNodesQuery(parametersNode),
          array = parameterNodes.map((parameterNode) => {
            const parameter = Parameter.fromParameterNode(parameterNode, context);

            return parameter;
          }),
          string = stringFromArray(array, context),
          parameters = new Parameters(string, array);

    return parameters;
  }

  static fromArrayAssignmentNode(arrayAssignmentNode, context) {
    const arrayAssignmentParametersNode = arrayAssignmentParametersNodeQuery(arrayAssignmentNode),
          parametersNode = arrayAssignmentParametersNode,  ///
          node = parametersNode,  ///
          string = context.nodeAsString(node),
          parameterNodes = parameterNodesQuery(parametersNode),
          array = arrayFromParameterNodes(parameterNodes, context),
          parameters = new Parameters(string, array);

    return parameters;
  }

  static fromObjectAssignmentNode(objectAssignmentNode, context) {
    const objectAssignmentParametersNode = objectAssignmentParametersNodeQuery(objectAssignmentNode),
          parametersNode = objectAssignmentParametersNode,  ///
          node = parametersNode,  ///
          string = context.nodeAsString(node),
          parameterNodes = parameterNodesQuery(parametersNode),
          array = arrayFromParameterNodes(parameterNodes, context),
          parameters = new Parameters(string, array);

    return parameters;
  }

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    let parameters = null;

    const procedureDeclarationParametersNode = procedureDeclarationParametersNodeQuery(procedureDeclarationNode);

    if (procedureDeclarationParametersNode !== null) {
      const parametersNode = procedureDeclarationParametersNode,  ///
            node = parametersNode,  ///
            string = context.nodeAsString(node),
            parameterNodes = parameterNodesQuery(parametersNode),
            array = arrayFromParameterNodes(parameterNodes, context);

      parameters = new Parameters(string, array);
    }

    return parameters;
  }
});

export function stringFromArray(array, context) {
  const parametersString = array.reduce((parametersString, parameter) => {
          const parameterString = parameter.getString();

          parametersString = (parametersString === null) ?
                               parameterString :
                                `${parametersString}, ${parameterString}`;

          return parametersString;
        }, null),
        string = parametersString;  ///

  return string;
}

function arrayFromParameterNodes(parameterNodes, context) {
  const { Parameter } = dom,
        array = parameterNodes.map((parameterNode) => { ///
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return array;
}
