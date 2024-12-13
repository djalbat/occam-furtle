"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Assignment {
  constructor(string, value, nodeQuery, nodesQuery, procedureCall) {
    this.string = string;
    this.value = value;
    this.nodeQuery = nodeQuery;
    this.nodesQuery = nodesQuery;
    this.procedureCall = procedureCall;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
  }

  getNodeQuery() {
    return this.nodeQuery;
  }

  getNodesQuery() {
    return this.nodesQuery;
  }

  resolve(context) {
    let value;

    if (false) {
      ///
    } else if (this.procedureCall !== null) {
      value = this.procedureCall.resolve(context);
    } else if (this.nodesQuery !== null) {
      value = this.nodesQuery.resolve(context);
    } else if (this.nodeQuery !== null) {
      value = this.nodeQuery.resolve(context);
    } else {
      value = this.value;
    }

    return value;
  }

  static name = "Assignment";

  static fromNode(node, context) {
    const { Value } = dom,
          value = Value.fromNode(node, context),
          string = stringFromValue(value),
          nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }

  static fromValue(value, context) {
    const nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          string = stringFromValue(value),
          assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }

  static fromAssignmentNode(assigmentNode, context) {
    const { Value, NodeQuery, NodesQuery, ProcedureCall } = dom,
          node = assigmentNode, ///
          string = context.nodeAsString(node),
          value = Value.fromAssignmentNode(assigmentNode, context),
          nodeQuery = NodeQuery.fromAssignmentNode(assigmentNode, context),
          nodesQuery = NodesQuery.fromAssignmentNode(assigmentNode, context),
          procedureCall = ProcedureCall.fromAssignmentNode(assigmentNode, context),
          assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }
});

function stringFromValue(value) {
  const valueString = value.getString(),
        string = `= ${valueString}`;

  return string;
}
