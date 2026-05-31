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
          listValues = primitiveValue, ///
          bindingsLength = this.bindings.getLength(),
          listValuesLength = listValues.length;

    if (bindingsLength > listValuesLength) {
      const bindingsString = this.bindings.getString(),
            primitiveString = primtiveStringFromNominalValues(listValues),
            message = `The length of the '${bindingsString}' bindings is greater than the length of the '${primitiveString}' list.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.bindings.forEachBinding((binding, index) => {
      const elided = binding.isElided();

      if (!elided) {
        const listValue = listValues[index],
              value = listValue;  ///

        this.evaluateBinding(binding, value, context);
      }
    });

    context.debug(`...evaluated the '${arrayAssignmentString}' array assignment.`);
  }

  evaluateBinding(binding, value, context) {
    const valueString = value.getString(),
          bindingString = binding.getString();

    context.trace(`Evaluating the '${bindingString}' binding against the '${valueString}' value...`);

    const valueType = value.getType(),
          bindingType = binding.getType(),
          bindingTypeEqualToValueType = bindingType.isEqualTo(valueType);

    if (!bindingTypeEqualToValueType) {
      const bindingTypeString = bindingType.getString(),
            valueTypeString = valueType.getString(),
            valueString = value.getString(),
            message = `The '${bindingString}' binding's '${bindingTypeString}' type is not equal to the '${valueString}' value's '${valueTypeString}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const { Variable } = elements,
          variable = Variable.fromBinding(binding, context);

    variable.assign(value, context);

    context.debug(`...evaluated the '${bindingString}' binding against the '${valueString}' value.`);
  }

  static name = "ArrayAssignment";
});
