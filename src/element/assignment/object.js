"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";
import nominalValueProperties from "../../nominalValueProperties";

import { define } from "../../elements";
import { stringLiteralFromString } from "../../utilities/stringLiteral";
import { valueFromBoolean, valueFromStringLiteral, valueFromNodesAndNominalValue } from "../../utilities/value";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../../typeNames";
import { TYPE_PARAMETER_NAME, CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME, NO_WHITESPACE_PARAMETER_NAME } from "../../parameterNames";

const { breakable } = breakPointUtilities;

export default define(class ObjectAssignment extends Element {
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

  evaluate = breakable(function (context, forward, back) {
    const objectAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);

    return this.variable.evaluate(context, (value, back) => {
      const valueType = value.getType(),
            valueTypeNominalValueType = valueType.isNominalValueType();

      if (!valueTypeNominalValueType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's '${valueType}' type should be '${NOMINAL_VALUE_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      return nominalValueProperties.compareNamedBindings(this.namedBindings, context, (back) => {
        return this.namedBindings.forEachNamedBinding((namedBinding, forward, back) => {
          return this.evaluateNamedBinding(namedBinding, value, context, forward, back);
        }, (back) => {
          context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);

          return forward(back);
        }, back);
      }, back);
    }, back);
  });

  evaluateNamedBinding(namedBinding, value, context, forward, back) {
    const valueString = value.getString(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the '${namedBindingString}' named binding against the '${valueString}' value...`);

    const name = namedBinding.getName();

    let evaluateNamedBinding;

    switch (name) {
      case TYPE_PARAMETER_NAME: {
        evaluateNamedBinding = this.evaluateTypeNamedBinding.bind(this);

        break;
      }

      case CONTENT_PARAMETER_NAME: {
        evaluateNamedBinding = this.evaluateContentNamedBinding.bind(this);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        evaluateNamedBinding = this.evaluateTerminalNamedBinding.bind(this);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        evaluateNamedBinding = this.evaluateChildNodesNamedBinding.bind(this);

        break;
      }

      case NO_WHITESPACE_PARAMETER_NAME: {
        evaluateNamedBinding = this.evaluateNoWhitespaceNamedBinding.bind(this);

        break;
      }
    }

    return evaluateNamedBinding(namedBinding, value, context, (value, back) => {
      const { Variable } = elements,
            variable = Variable.fromNamedBinding(namedBinding, context);

      return variable.assign(value, context, (back) => {
        context.debug(`...evaluated the '${namedBindingString}' named binding against the '${valueString}' value.`);

        return forward(back);
      }, back);
    }, back);
  }

  evaluateTypeNamedBinding(namedBinding, value, context, forward, back) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the type '${namedBindingString}' named binding...`);

    const typeStringType = type.isStringType();

    if (!typeStringType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${STRING_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's node must be terminal.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const terminalNode = node,  ///
          terminalNodeType = terminalNode.getType(),
          string = terminalNodeType,  ///
          stringLiteral = stringLiteralFromString(string);

    value = valueFromStringLiteral(stringLiteral, context); ///

    const valueSttring = value.getString();

    context.debug(`...evaluated the type '${namedBindingString}' named binding as '${valueSttring}'.`);

    return forward(value, back);
  }

  evaluateContentNamedBinding(namedBinding, value, context, forward, back) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the content '${namedBindingString}' named binding...`);

    const typeStringType = type.isStringType();

    if (!typeStringType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${STRING_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's node must be terminal.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const terminalNode = node,  ///
          content = terminalNode.getContent(),
          string = content,  ///
          stringLiteral = stringLiteralFromString(string);

    value = valueFromStringLiteral(stringLiteral, context); ///

    const valueSttring = value.getString();

    context.debug(`...evaluated the content '${namedBindingString}' named binding as '${valueSttring}'.`);

    return forward(value, back);
  }

  evaluateTerminalNamedBinding(namedBinding, value, context, forward, back) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the terminal '${namedBindingString}' named binding...`);

    const typeBooleanType = type.isBooleanType();

    if (!typeBooleanType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode(),
          terminal = nodeTerminalNode,  ///
          boolean = terminal; ///

    value = valueFromBoolean(boolean, context);  ///

    const valueSttring = value.getString();

    context.debug(`...evaluated the terminal '${namedBindingString}' named binding as '${valueSttring}'.`);

    return forward(value, back);
  }

  evaluateChildNodesNamedBinding(namedBinding, value, context, forward, back) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the child nodes '${namedBindingString}' named binding...`);

    const typeListType = type.isListType();

    if (!typeListType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeNonTerminalNode = node.isNonTerminalNode();

    if (!nodeNonTerminalNode) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's node must be non-terminal.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const nonTerminalNode = node,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes; ///

    value = valueFromNodesAndNominalValue(nodes, nominalValue); ///

    const valueSttring = value.getString();

    context.debug(`...evaluated the childNodes '${namedBindingString}' named binding as '${valueSttring}'.`);

    return forward(value, back);
  }

  evaluateNoWhitespaceNamedBinding(namedBinding, value, context, forward, back) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the no whitespace '${namedBindingString}' named binding...`);

    const typeBooleanType = type.isBooleanType();

    if (!typeBooleanType) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${BOOLEAN_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode();

    if (!nodeTerminalNode) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's node must be terminal.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    const terminalNode = node,  ///
          noWhiteapce = terminalNode.isNoWhitespaceNode(),
          boolean = noWhiteapce;  ///

    value = valueFromBoolean(boolean, context); ///

    const valueSttring = value.getString();

    context.debug(`...evaluated the no whitespace '${namedBindingString}' named binding as '${valueSttring}'.`);

    return forward(value, back);
  }

  static name = "ObjectAssignment";
});
