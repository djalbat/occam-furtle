"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Parameter {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  getString() { return this.variable.getString(); }

  isTypeNodeType() { return this.variable.isTypeNodeType(); }

  setValue(value) { this.variable.setValue(value); }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    const { Variable } = dom,
          variable = Variable.fromParameterNode(parameterNode, context),
          parameter = new Parameter(variable);

    return parameter;
  }
});
