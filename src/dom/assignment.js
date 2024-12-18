"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const assignmentNodeQuery = nodeQuery("/variableAssignment/assignment");

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

  evaluate(context) {
    let value;

    const assignmentString = this.string; ///

    context.trace(`Evaluating the '${assignmentString}' assignment...`);

    if (false) {
      ///
    } else if (this.procedureCall !== null) {
      value = this.procedureCall.evaluate(context);
    } else if (this.nodesQuery !== null) {
      value = this.nodesQuery.evaluate(context);
    } else if (this.nodeQuery !== null) {
      value = this.nodeQuery.evaluate(context);
    } else {
      value = this.value.evaluate(context);
    }

    if (value === null) {
      const assignmentString = this.string, ///
            message = `The '${assignmentString}' assigment cannot be evaluated.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...evaluated the '${assignmentString}' assignment.`);

    return value;
  }

  static name = "Assignment";

  static fromNode(node, context) {
    const { Value } = dom,
          value = Value.fromNode(node, context),
          string = stringFromValue(value, context),
          nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          assignment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assignment;
  }

  static fromValue(value, context) {
    const nodeQuery = null,
          nodesQuery = null,
          procedureCall = null,
          string = stringFromValue(value, context),
          assignment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

    return assignment;
  }

  static fromAssignmentNode(assignmentNode, context) {
    const assignment = assignmentFromAssignmentNode(assignmentNode, context);

    return assignment;
  }

  static fromVariableAssignmentNode(variableAssignmentNode, context) {
    const assignmentNode = assignmentNodeQuery(variableAssignmentNode),
          assignment = assignmentFromAssignmentNode(assignmentNode, context);

    return assignment;
  }
});

function stringFromValue(value, context) {
  const valueString = value.asString(context),
        string = `= ${valueString}`;

  return string;
}

function assignmentFromAssignmentNode(assignmentNode, context) {
  const { Assignment, Value, NodeQuery, NodesQuery, ProcedureCall } = dom,
        node = assignmentNode, ///
        string = context.nodeAsString(node),
        value = Value.fromAssignmentNode(assignmentNode, context),
        nodeQuery = NodeQuery.fromAssignmentNode(assignmentNode, context),
        nodesQuery = NodesQuery.fromAssignmentNode(assignmentNode, context),
        procedureCall = ProcedureCall.fromAssignmentNode(assignmentNode, context),
        assignment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);

  return assignment;
}