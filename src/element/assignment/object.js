"use strict";

import { Element } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";
import nominalValueProperties from "../../nominalValueProperties";

import { define } from "../../elements";
import { stringLiteralFromString } from "../../utilities/stringLiteral";
import { valueFromBoolean, valueFromStringLiteral, valueFromNodesAndNominalValue } from "../../utilities/value";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../../typeNames";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME, NO_WHITESPACE_PARAMETER_NAME } from "../../parameterNames";

export default define(class ObjectAssigment extends Element {
  constructor(context, string, node, breakPoint, variable, namedBindings) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.namedBindings = namedBindings;
  }

  getVariable() {
    return this.variable;
  }

  getNamedBindings() {
    return this.namedBindings;
  }

  evaluate(context) {
    const objectAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType(),
          valueTypeNominalValueType = valueType.isNominalValueType();

    if (!valueTypeNominalValueType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${NOMINAL_VALUE_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    nominalValueProperties.compareNamedBindings(this.namedBindings, context);

    this.namedBindings.forEachNamedBinding((namedBinding) => {
      this.evaluateNamedBinding(namedBinding, value, context);
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateNamedBinding(namedBinding, term, context) {
    const termString = term.getString(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the '${namedBindingString}' named binding against the '${termString}' term...`);

    let value;

    const name = namedBinding.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        value = this.evaluateContentNamedBinding(namedBinding, term, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        value = this.evaluateTerminalNamedBinding(namedBinding, term, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        value = this.evaluateChildNodesNamedBinding(namedBinding, term, context);

        break;
      }

      case NO_WHITESPACE_PARAMETER_NAME: {
        value = this.evaluateNoWhitespaceNamedBinding(namedBinding, term, context);

        break;
      }
    }

    const { Variable } = elements,
          variable = Variable.fromNamedBinding(namedBinding, context);

    variable.assign(value, context);

    context.debug(`...evaluated the '${namedBindingString}' parameter named against the '${termString}' term.`);
  }

  evaluateContentNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the content '${namedBindingString}' named binding...`);

    const typeStringType = type.isStringType();

    if (!typeStringType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${STRING_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const termString = term.getString(),
            message = `The '${termString}' term's node must be terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const terminalNode = node,  ///
          content = terminalNode.getContent(),
          string = content,  ///
          stringLiteral = stringLiteralFromString(string),
          value = valueFromStringLiteral(stringLiteral, context),
          valueSttring = value.getString();

    context.debug(`...evaluated the content '${namedBindingString}' named binding as '${valueSttring}'.`);

    return value;
  }

  evaluateTerminalNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the terminal '${namedBindingString}' named binding...`);

    const typeBooleanType = type.isBooleanType();

    if (!typeBooleanType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode(),
          terminal = nodeTerminalNode,  ///
          boolean = terminal, ///
          value = valueFromBoolean(boolean, context),  ///
          valueSttring = value.getString();

    context.debug(`...evaluated the terminal '${namedBindingString}' named binding as '${valueSttring}'.`);

    return value;
  }

  evaluateChildNodesNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the child nodes '${namedBindingString}' named binding...`);

    const typeListType = type.isListType();

    if (!typeListType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeNonTerminalNode = node.isNonTerminalNode();

    if (!nodeNonTerminalNode) {
      const termString = term.getString(),
            message = `The '${termString}' term's node must be non-terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nonTerminalNode = node,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          value = valueFromNodesAndNominalValue(nodes, nominalValue),
          valueSttring = value.getString();

    context.debug(`...evaluated the childNodes '${namedBindingString}' named binding as '${valueSttring}'.`);

    return value;
  }

  evaluateNoWhitespaceNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the no whitespace '${namedBindingString}' named binding...`);

    const typeBooleanType = type.isBooleanType();

    if (!typeBooleanType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const termString = term.getString(),
            message = `The '${termString}' term's node must be terminal.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const terminalNode = node,  ///
          noWhiteapce = terminalNode.isNoWhitespaceNode(),
          boolean = noWhiteapce,  ///
          value = valueFromBoolean(boolean, context),
          valueSttring = value.getString();

    context.debug(`...evaluated the no whitespace '${namedBindingString}' named binding as '${valueSttring}'.`);

    return value;
  }

  static name = "ObjectAssigment";
});
