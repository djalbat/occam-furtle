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
    let string;

    if (false) {
      ///
    } else if (this.value !== null) {
      const valueString = this.value.getString();

      string = valueString; ///
    }
    else if (this.nodeQuery !== null) {
      const nodeQueryString = this.nodeQuery.getString();

      string = nodeQueryString; ///
    }
    else if (this.nodesQuery !== null) {
      const nodesQueryString = this.nodesQuery.getString();

      string = nodesQueryString;  ///
    }
    else if (this.procedureCall !== null) {
      const procedureCallString = this.procedureCall.getString();

      string = procedureCallString; ///
    }

    string  ` = ${string}`;

    return string;
  }

  static name = "Assignment";

  static fromValue(value) {
    const nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          assigment = new Assignment(value, nodeQuery, nodesQuery, procedureCall);

    return assigment;
  }

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
