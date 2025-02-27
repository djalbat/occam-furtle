"use strict";

import dom from "../dom";
import Exception from "../exception";

import { domAssigned } from "../dom";

export default domAssigned(class Assignment {
  constructor(string, value) {
    this.string = string;
    this.value = value;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    let value;

    const assignmentString = this.string; ///

    context.trace(`Evaluating the '${assignmentString}' assignment...`);

    value = this.value.evaluate(context);

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
          assignment = new Assignment(string, value);

    return assignment;
  }

  static fromValue(value, context) {
    const string = stringFromValue(value, context),
          assignment = new Assignment(string, value);

    return assignment;
  }

  static fromAssignmentNode(assignmentNode, context) {
    const assignment = assignmentFromAssignmentNode(assignmentNode, context);

    return assignment;
  }
});

function stringFromValue(value, context) {
  const valueString = value.asString(context),
        string = `= ${valueString}`;

  return string;
}

function assignmentFromAssignmentNode(assignmentNode, context) {
  const { Assignment, Value } = dom,
        node = assignmentNode, ///
        string = context.nodeAsString(node),
        value = Value.fromAssignmentNode(assignmentNode, context),
        assignment = new Assignment(string, value);

  return assignment;
}
