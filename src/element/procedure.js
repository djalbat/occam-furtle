"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { valuesFromNominalValues } from "../utilities/values";
import { returnBlockFromProcedureNode } from "../utilities/element";
import { variablesFromValuesAndParameters } from "../utilities/parameters";
import { typeFromJSON, labelFromJSON, parametersFromJSON, typeToTypeJSON, labelToLabelJSON, parametersToParametersJSON } from "../utilities/json";

const { breakable, breakPointFromJSON, breakPointToBreakPointJSON } = breakPointUtilities;

export default define(class Procedure extends Element {
  constructor(context, string, node, breakPoint, type, label, parameters, returnBlock) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.label = label;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
  }

  getType() {
    return this.type;
  }

  getLabel() {
    return this.label;
  }

  getParameters() {
    return this.parameters;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  getName() { return this.label.getName(); }

  isBoolean() {
    const type = this.getType(),
          booleanType = type.isBooleanType(),
          boolean = booleanType;  ///

    return boolean;
  }

  getReturnStatement() { return this.returnBlock.getReturnStatement(); }

  compareProcedureName(procedureName) { return this.label.compareProcedureName(procedureName); }

  guaranteeReturnBlock() {
    if (this.returnBlock != null) {
      return;
    }

    const node = this.getNode(),
          context = this.getContext(),
          procedureNode = node;

    this.returnBlock = returnBlockFromProcedureNode(procedureNode, context);
  }

  verify(context, continuation) {
    let verifies;

    const procedureString = this.getString();

    context.trace(`Verifying the '${procedureString}' function...`)

    const procedure = this; ///

    context.addProcedure(procedure);

    verifies = true;

    if (verifies) {
      context.debug(`...verified the '${procedureString}' function.`)
    }

    continuation(verifies);
  }

  call = breakable(function (values, context, continuation) {
    const procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    this.parameters.compareValues(values, context);

    this.guaranteeReturnBlock();

    const variables = variablesFromValuesAndParameters(values, this.parameters, context);

    this.returnBlock.evaluate(variables, context, (value) => {
      const valueType = value.getType(),
            typeEqualToValueType = this.type.isEqualTo(valueType);

      if (!typeEqualToValueType) {
        const valueString = value.getString(),
              typeString = this.type.getString(),
              message = `The '${valueString}' value's '${typeString}' type is not equal to the '${procedureString}' procedure's '${typeString}' type.`,
              exception = Exception.fromMessage(message);

        throw exception;
      }

      context.debug(`...called the '${procedureString}' procedure.`);

      continuation(value);
    });
  });

  callNominally(nominalValues, continuation) {
    const context = this.getContext(),
          procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' function nominally...`);

    const values = valuesFromNominalValues(nominalValues, context);

    this.call(values, context, (value) => {
      context.debug(`...called the '${procedureString}' function nominally.`);

      continuation(value);
    });
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          labelJSON = labelToLabelJSON(this.label),
          parametersJSON = parametersToParametersJSON(this.parameters),
          string = this.getString();

    let breakPoint;

    breakPoint = this.getBreakPoint();

    const breakPointJSON = breakPointToBreakPointJSON(breakPoint);

    breakPoint = breakPointJSON;  ///

    const type = typeJSON,  ///
          label = labelJSON,  ///
          parameters = parametersJSON,  ///
          json = {
            string,
            breakPoint,
            type,
            label,
            parameters
          };

    return json;
  }

  static name = "Procedure";

  static fromJSON(json, context) {
    const { string } = json,
          breakPoint = breakPointFromJSON(json),
          type = typeFromJSON(json, context),
          label = labelFromJSON(json, context),
          parameters = parametersFromJSON(json, context),
          procedureNode = context.findProcedureNode(label),
          returnBlock = null, ///
          node = procedureNode, ///
          procedure = new Procedure(context, string, node, breakPoint, type, label, parameters, returnBlock);

    return procedure;
  }
});
