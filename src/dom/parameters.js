"use strict";

import dom from "../dom";
import Exception from "../exception";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const parameterNodesQuery = nodesQuery("/parameters/parameter"),
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

  forEachParameter(callback) { this.array.forEach(callback); }

  matchValues(values, context) {
    const valuesString = values.getString(),
          parametersString = this.getString();

    context.trace(`Matching the '${valuesString}' values against the '${parametersString}' parameters...`);

    const valuesLength = values.getLength(),
          parametersLength = this.getLength();

    if (valuesLength !== parametersLength) {
      const message = `The '${valuesString}' values and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachParameter((parameter, index) => {
      const value = values.getValue(index);

      parameter.matchValue(value, context);
    });

    context.debug(`...matched the '${valuesString}' values against the '${parametersString}' parameters.`);
  }

  static name = "Parameters";

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

function arrayFromParameterNodes(parameterNodes, context) {
  const { Parameter } = dom,
        array = parameterNodes.map((parameterNode) => { ///
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return array;
}
