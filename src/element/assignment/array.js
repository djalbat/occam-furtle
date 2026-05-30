"use strict";

import { Element } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { valueFromNominalValue } from "../../utilities/value";
import { primtiveStringFromNominalValues } from "../../utilities/string";
import { LIST_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../../typeNames";

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
          valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (!valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
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
      const elidated = binding.isElided();

      if (!elidated) {
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

    const bindingType = binding.getType(),
          bindingTypeNominalValueType = bindingType.isNominalValueType();

    if (!bindingTypeNominalValueType) {
      const message = `The type of the '${bindingString}' binding should be '${NOMINAL_VALUE_TYPE_NAME}'.`,
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
