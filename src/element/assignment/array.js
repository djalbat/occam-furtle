"use strict";

import { Element } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { valueFromNominalValue } from "../../utilities/nominal";
import { primtiveStringFromNominalValues } from "../../utilities/string";
import { NOMINAL_VALUE_TYPE, NOMINAL_VALUES_TYPE } from "../../types";

export default define(class ArrayAssigment extends Element {
  constructor(context, string, node, breakPoint, variable, bindings) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.bindings = bindings;
  }

  getVariable() {
    return this.variable;
  }

  getBindings() {
    return this.bindings;
  }

  evaluate(context) {
    const arrayAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${arrayAssignmentString}' array assignment...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType();

    if (valueType !== NOMINAL_VALUES_TYPE) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${NOMINAL_VALUES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValues = primitiveValue, ///
          bindingsLength = this.bindings.getLength(),
          nominalValuesLength = nominalValues.length;

    if (bindingsLength > nominalValuesLength) {
      const bindingsString = this.bindings.getString(),
            primitiveString = primtiveStringFromNominalValues(nominalValues),
            message = `The length of the '${bindingsString}' bindings is greater than the length of the '${primitiveString}' nodes.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.bindings.forEachBinding((binding, index) => {
      if (binding !== null) {
        const nominalValue = nominalValues[index],
              value = valueFromNominalValue(nominalValue);

        this.evaluateBinding(binding, value, context);
      }
    });

    context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
  }

  evaluateBinding(binding, expression, context) {
    const bindingString = binding.getString(),
          expressionString = expression.getString();

    context.trace(`Evaluating the '${bindingString}' binding against the '${expressionString}' expression...`);

    const bindingType = binding.getType();

    if (bindingType !== NOMINAL_VALUE_TYPE) {
      const message = `The type of the '${bindingString}' binding should be '${NOMINAL_VALUE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Variable } = elements,
          variable = Variable.fromBinding(binding, context);

    variable.assign(expression, context);

    context.debug(`...evaluated the '${bindingString}' binding against the '${expressionString}' expression.`);
  }

  static name = "ArrayAssignment";
});
