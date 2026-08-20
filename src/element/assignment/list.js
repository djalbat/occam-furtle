"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { LIST_TYPE_NAME } from "../../typeNames";

const { forEach } = continuationUtilities,
      { breakable } = breakPointUtilities;

export default define(class ListAssignment extends Element {
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

  evaluate = breakable(function (context, back, forward) {
    const listAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${listAssignmentString}' list assignment...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (!valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const bindingsLength = this.bindings.getLength(),
          primitiveValue = value.getPrimitiveValue(),
          primitiveValueLength = primitiveValue.length;

    if (bindingsLength > primitiveValueLength) {
      const valueString = value.getString(),
            bindingsString = this.bindings.getString(),
            message = `The length of the '${bindingsString}' bindings is greater than the length of the '${valueString}' list.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const values = value.lift(context);

    return forEach(this.bindings, (binding, back, forward, index) => {
      const elided = binding.isElided();

      if (elided) {
        return forward();
      }

      const value = values[index];

      return this.evaluateBinding(binding, value, context, back, forward);
    }, () => {
      context.debug(`...evaluated the '${listAssignmentString}' list assignment.`);

      return forward();
    });
  });

  evaluateBinding(binding, value, context, back, forward) {
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

    return variable.assign(value, context, back, () => {
      context.debug(`...evaluated the '${bindingString}' binding against the '${valueString}' value.`);

      return forward();
    });
  }

  static name = "ListAssignment";
});
