"use strict";

import { Element } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";
import nodeProperties from "../../nodeProperties";

import { define } from "../../elements";
import { stringLiteralFromString } from "../../utilities/stringLiteral";
import { valueFromNodesAndNominalValue } from "../../utilities/value";
import { termFromBoolean, termFromStringLiteral } from "../../utilities/term";
import { STRING_TYPE, BOOLEAN_TYPE, NOMINAL_VALUE_TYPE, NOMINAL_VALUES_TYPE } from "../../types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../../parameterNames";

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
          valueType = value.getType();

    if (valueType !== NOMINAL_VALUE_TYPE) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${NOMINAL_VALUE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    nodeProperties.compareNamedBindings(this.namedBindings, context);

    this.namedBindings.forEachNamedBinding((namedBinding) => {
      this.evaluateNamedBinding(namedBinding, value, context);
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateNamedBinding(namedBinding, term, context) {
    const termString = term.getString(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the '${namedBindingString}' named binding against the '${termString}' term...`);

    const name = namedBinding.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        term = this.evaluateContentNamedBinding(namedBinding, term, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        term = this.evaluateTerminalNamedBinding(namedBinding, term, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        term = this.evaluateChildNodesNamedBinding(namedBinding, term, context);

        break;
      }
    }

    const { Variable } = elements,
          variable = Variable.fromNamedBinding(namedBinding, context);

    variable.assign(term, context);

    context.debug(`...evaluated the '${namedBindingString}' parameter named against the '${termString}' term.`);
  }

  evaluateContentNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the content '${namedBindingString}' named binding...`);

    if (type !== STRING_TYPE) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${STRING_TYPE}'.`,
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
          stringLiteral = stringLiteralFromString(string);

    term = termFromStringLiteral(stringLiteral, context);

    const termSttring = term.getString();

    context.debug(`...evaluated the content '${namedBindingString}' named binding as '${termSttring}'.`);

    return term;
  }

  evaluateTerminalNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the terminal '${namedBindingString}' named binding...`);

    if (type !== BOOLEAN_TYPE) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nominalValue = primitiveValue,  ///
          node = nominalValue.getNode(),
          nodeTerminalNode = node.isTerminalNode(),
          terminal = nodeTerminalNode;  ///

    const boolean = terminal; ///

    term = termFromBoolean(boolean, context);  ///

    const termSttring = term.getString();

    context.debug(`...evaluated the terminal '${namedBindingString}' named binding as '${termSttring}'.`);

    return term;
  }

  evaluateChildNodesNamedBinding(namedBinding, term, context) {
    const type = namedBinding.getType(),
          namedBindingString = namedBinding.getString();

    context.trace(`Evaluating the child nodes '${namedBindingString}' named binding...`);

    if (type !== NOMINAL_VALUES_TYPE) {
      const namedBindingString = namedBinding.getString(),
            message = `The '${namedBindingString}' named binding's type should be '${NOMINAL_VALUES_TYPE}'.`,
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

  static name = "ObjectAssigment";
});
