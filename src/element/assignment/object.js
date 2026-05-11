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
  constructor(context, string, node, breakPoint, variable, namedParameters) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.namedParameters = namedParameters;
  }

  getVariable() {
    return this.variable;
  }

  getNamedParameters() {
    return this.namedParameters;
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

    nodeProperties.compareNamedParameters(this.namedParameters, context);

    this.namedParameters.forEachNamedParameter((namedParameter) => {
      this.evaluateNamedParameter(namedParameter, term, context);
    });

    context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
  }

  evaluateNamedParameter(namedParameter, term, context) {
    const termString = term.getString(),
          namedParameterString = namedParameter.getString();

    context.trace(`Evaluating the '${namedParameterString}' named parameter against the '${termString}' term...`);

    const name = namedParameter.getName();

    switch (name) {
      case CONTENT_PARAMETER_NAME: {
        term = this.evaluateContentNamedParameter(namedParameter, term, context);

        break;
      }

      case TERMINAL_PARAMETER_NAME: {
        term = this.evaluateTerminalNamedParameter(namedParameter, term, context);

        break;
      }

      case CHILD_NODES_PARAMETER_NAME: {
        term = this.evaluateChildNodesNamedParameter(namedParameter, term, context);

        break;
      }
    }

    const { Variable } = elements,
          variable = Variable.fromNamedParameter(namedParameter, context);

    variable.assign(term, context);

    context.debug(`...evaluated the '${namedParameterString}' parameter named against the '${termString}' term.`);
  }

  evaluateContentNamedParameter(namedParameter, term, context) {
    const type = namedParameter.getType(),
          namedParameterString = namedParameter.getString();

    context.trace(`Evaluating the content '${namedParameterString}' named parameter...`);

    if (type !== STRING_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${STRING_TYPE}'.`,
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

    context.debug(`...evaluated the content '${namedParameterString}' named parameter as '${termSttring}'.`);

    return term;
  }

  evaluateTerminalNamedParameter(namedParameter, term, context) {
    const type = namedParameter.getType(),
          namedParameterString = namedParameter.getString();

    context.trace(`Evaluating the terminal '${namedParameterString}' named parameter...`);

    if (type !== BOOLEAN_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${BOOLEAN_TYPE}'.`,
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

    context.debug(`...evaluated the terminal '${namedParameterString}' named parameter as '${termSttring}'.`);

    return term;
  }

  evaluateChildNodesNamedParameter(namedParameter, term, context) {
    const type = namedParameter.getType(),
          namedParameterString = namedParameter.getString();

    context.trace(`Evaluating the child nodes '${namedParameterString}' named parameter...`);

    if (type !== NOMINAL_VALUES_TYPE) {
      const namedParameterString = namedParameter.getString(),
            message = `The '${namedParameterString}' named parameter's type should be '${NOMINAL_VALUES_TYPE}'.`,
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

    context.debug(`...evaluated the childNodes '${namedParameterString}' named parameter as '${termSttring}'.`);

    return term;
  }

  static name = "ObjectAssigment";
});
