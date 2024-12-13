"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const objectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

export default domAssigned(class ObjectAssigment {
  constructor(string, parameters) {
    this.string = string;
    this.parameters = parameters;
  }

  getString() {
    return this.string;
  }

  getParameters() {
    return this.parameters;
  }

  resolve(context) {
    const objectAssignmentString = this.string; ///

    context.trace(`Resolving the '${objectAssignmentString}' object assignment...`);




    context.debug(`...resolved the '${objectAssignmentString}' object assignment.`);
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      const { Parameters, } = dom,
            node = objectAssignmentNode,  ///
            string = context.nodeAsString(node),
            parameters = Parameters.fromObjectAssignmentNode(objectAssignmentNode, context);

      objectAssignment = new ObjectAssigment(string, parameters);
    }

    return objectAssignment;
  }
});
