"use strict";

import { Element } from "occam-languages";

import elements from "../../elements";
import Exception from "../../exception";
import nodeProperties from "../../nodeProperties";

import { define } from "../../elements";
import { stringLiteralFromString } from "../../utilities/stringLiteral";
import { termFromNodesAndNominalValue } from "../../utilities/nominal";
import { termFromBoolean, termFromStringLiteral } from "../../utilities/term";
import { STRING_TYPE, BOOLEAN_TYPE, NOMINAL_VALUE_TYPE, NOMINAL_VALUES_TYPE } from "../../types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../../parameterNames";

export default define(class ObjectAssigment extends Element {
  constructor(context, string, node, breakPoint, variable, nameBindings) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.nameBindings = nameBindings;
  }

  getVariable() {
    return this.variable;
  }

  getNameBindings() {
    return this.nameBindings;
  }

  evaluate(context) {
    const objectAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);

    const term = this.variable.evaluate(context),
          termType = term.getType();

    if (termType !== NOMINAL_VALUE_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NOMINAL_VALUE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    nodeProperties.compareNameBindings(this.nameBindings, context);

    this.nameBindings.forEachNameBinding((nameBinding) => {
      this.evaluateNameBinding(nameBinding, term, context);
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateNameBinding(nameBinding, term, context) {
    const termString = term.getString(),
          nameBindingString = nameBinding.getString();

    context.trace(`Evaluating the '${nameBindingString}' named binding against the '${termString}' term...`);

    const name = nameBinding.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        term = this.evaluateContentNameBinding(nameBinding, term, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        term = this.evaluateTerminalNameBinding(nameBinding, term, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        term = this.evaluateChildNodesNameBinding(nameBinding, term, context);

        break;
      }
    }

    const { Variable } = elements,
          variable = Variable.fromNameBinding(nameBinding, context);

    variable.assign(term, context);

    context.debug(`...evaluated the '${nameBindingString}' parameter named against the '${termString}' term.`);
  }

  evaluateContentNameBinding(nameBinding, term, context) {
    const type = nameBinding.getType(),
          nameBindingString = nameBinding.getString();

    context.trace(`Evaluating the content '${nameBindingString}' named binding...`);

    if (type !== STRING_TYPE) {
      const nameBindingString = nameBinding.getString(),
            message = `The '${nameBindingString}' named binding's type should be '${STRING_TYPE}'.`,
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

    context.debug(`...evaluated the content '${nameBindingString}' named binding as '${termSttring}'.`);

    return term;
  }

  evaluateTerminalNameBinding(nameBinding, term, context) {
    const type = nameBinding.getType(),
          nameBindingString = nameBinding.getString();

    context.trace(`Evaluating the terminal '${nameBindingString}' named binding...`);

    if (type !== BOOLEAN_TYPE) {
      const nameBindingString = nameBinding.getString(),
            message = `The '${nameBindingString}' named binding's type should be '${BOOLEAN_TYPE}'.`,
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

    context.debug(`...evaluated the terminal '${nameBindingString}' named binding as '${termSttring}'.`);

    return term;
  }

  evaluateChildNodesNameBinding(nameBinding, term, context) {
    const type = nameBinding.getType(),
          nameBindingString = nameBinding.getString();

    context.trace(`Evaluating the child nodes '${nameBindingString}' named binding...`);

    if (type !== NOMINAL_VALUES_TYPE) {
      const nameBindingString = nameBinding.getString(),
            message = `The '${nameBindingString}' named binding's type should be '${NOMINAL_VALUES_TYPE}'.`,
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
          nodes = childNodes;  ///

    term = termFromNodesAndNominalValue(nodes, nominalValue);

    const termSttring = term.getString();

    context.debug(`...evaluated the childNodes '${nameBindingString}' named binding as '${termSttring}'.`);

    return term;
  }

  static name = "ObjectAssigment";
});
