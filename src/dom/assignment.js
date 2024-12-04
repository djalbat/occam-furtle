"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Assignment {
  constructor(value, nodeQuery, nodesQuery, procedureCall) {
    this.value = value;
    this.nodeQuery = nodeQuery;
    this.nodesQuery = nodesQuery;
    this.procedureCall = procedureCall;
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

  getString() {
    debugger
  }

  static name = "Assignment";

  static fromAssignmentNode(assigmentNode, context) {
    const { Value, NodeQuery, NodesQuery, ProcedureCall } = dom,
          value = Value.fromAssignmentNode(assigmentNode, context),
          nodeQuery = NodeQuery.fromAssignmentNode(assigmentNode, context),
          nodesQuery = NodesQuery.fromAssignmentNode(assigmentNode, context),
          procedureCall = ProcedureCall.fromAssignmentNode(assigmentNode, context),
          assigment = new Assignment(value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }
});
