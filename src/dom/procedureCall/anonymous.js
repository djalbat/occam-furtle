"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const anonymousProcedureCallNodeQuery = nodeQuery("/value/anonymousProcedureCall");

export default domAssigned(class AnonymousProcedureCall {
  constructor(string, anonymousProcedure, values) {
    this.string = string;
    this.anonymousProcedure = anonymousProcedure;
    this.values = values;
  }

  getString() {
    return this.string;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  getValues() {
    return this.values;
  }

  evaluate(context) {
    const anonymousProcedureCallString = this.string;  ///

    context.trace(`Evaluating the '${anonymousProcedureCallString}' anonymous procedure call...`);

    const values = this.values.evaluate(context),
          value = this.anonymousProcedure.call(values, context);

    context.debug(`...evaluated the '${anonymousProcedureCallString}' anonymous procedure call.`);

    return value;
  }

  static name = "AnonymousProcedureCall";

  static fromValueNode(valueNode, context) {
    let anonymousProcedureCall = null;

    const anonymousProcedureCallNode = anonymousProcedureCallNodeQuery(valueNode);

    if (anonymousProcedureCallNode !== null) {
      const { Values, AnonymousProcedure } = dom,
            anonymousProcedure = AnonymousProcedure.fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context),
            values = Values.fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context),
            string = stringFromAnonymousProcedureAndValues(anonymousProcedure, values, context);

      anonymousProcedureCall = new AnonymousProcedureCall(string, anonymousProcedure, values);
    }

    return anonymousProcedureCall;
  }
});

function stringFromAnonymousProcedureAndValues(anonymousProcedure, values, context) {
  const anonymousProcedureString = anonymousProcedure.getString(),
        valuesString = values.getString(),
        string = `(${anonymousProcedureString})(${valuesString})`;

  return string;
}
