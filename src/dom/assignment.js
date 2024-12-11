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

  static name = "Assignment";

  static fromNode(node, fileContext) {
    const { Value } = dom,
          value = Value.fromNode(node, fileContext),
          nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          string = stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall),
          assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }

  static fromValue(value) {
    const nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          string = stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall),
          assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }

  static fromAssignmentNode(assigmentNode) {
    const { Value, NodeQuery, NodesQuery, ProcedureCall } = dom,
          value = Value.fromAssignmentNode(assigmentNode),
          nodeQuery = NodeQuery.fromAssignmentNode(assigmentNode),
          nodesQuery = NodesQuery.fromAssignmentNode(assigmentNode),
          procedureCall = ProcedureCall.fromAssignmentNode(assigmentNode),
          string = stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall),
          assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }
});

function stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall) {
  let string;

  if (false) {
    ///
  } else if (value !== null) {
    const valueString = value.getString();

    string = valueString; ///
  }
  else if (nodeQuery !== null) {
    const nodeQueryString = nodeQuery.getString();

    string = nodeQueryString; ///
  }
  else if (nodesQuery !== null) {
    const nodesQueryString = nodesQuery.getString();

    string = nodesQueryString;  ///
  }
  else if (procedureCall !== null) {
    const procedureCallString = procedureCall.getString();

    string = procedureCallString; ///
  }

  string = ` = ${string}`;

  return string;
}
