"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const valuesNodeQuery = nodeQuery("/assignment/procedureCall/values"),
      valueNodesQuery = nodesQuery("/values/value");

export default domAssigned(class Values {
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

  getValue(index) {
    const value = this.array[index] || null;  ///

    return value;
  }

  mapValue(callback) { return this.array.map(callback); }

  forEachValue(callback) { this.array.forEach(callback); }

  resolve(context) {
    const array = this.mapValue((value) => {
            value = value.resolve(context);

            return value;
          }),
          values = Values.fromArray(array, context); ///

    return values;
  }

  static name = "Values";

  static fromNodes(nodes, context) {
    const array = arrayFromNodes(nodes, context),
          string = stringFromArray(array, context),
          values = new Values(string, array);

    return values;
  }

  static fromArray(array, context) {
    const string = stringFromArray(array, context),
          values = new Values(string, array);

    return values;
  }

  static fromValuesNode(valuesNode, context) {
    let values = null;

    if (valuesNode !== null) {
      values = valuesFromValuesNode(valuesNode, context);
    }

    return values;
  }

  static fromAssignmentNode(assignmentNode, context) {
    let values = null;

    const valuesNode = valuesNodeQuery(assignmentNode);

    if (valuesNode !== null) {
      values = valuesFromValuesNode(valuesNode, context);
    }

    return values;
  }
});

function arrayFromNodes(nodes, context) {
  const { Value } = dom,
        array = nodes.map((node) => { ///
          const value = Value.fromNode(node, context);

          return value;
        });

  return array;
}

function stringFromArray(array, context) {
  const valuesString = array.reduce((valuesString, value) => {
          const valueString = value.asString(context);

          valuesString = (valuesString === null) ?
                           valueString :
                            `${valuesString}, ${valueString}`;

          return valuesString;
        }, null),
        string = valuesString;  ///

  return string;
}

function arrayFromValueNodes(valueNodes, context) {
  const { Value } = dom,
        array = valueNodes.map((valueNode) => { ///
          const value = Value.fromValueNode(valueNode, context);

          return value;
        });

  return array;
}

function valuesFromValuesNode(valuesNode, context) {
  const { Values } = dom,
        node = valuesNode, ///
        string = context.nodeAsString(node),
        valueNodes = valueNodesQuery(valuesNode),
        array = arrayFromValueNodes(valueNodes, context),
        values = new Values(string, array);

  return values;
}
