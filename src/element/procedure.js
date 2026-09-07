"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { valuesFromNominalValues } from "../utilities/values";
import { returnBlockFromProcedureNode } from "../utilities/element";
import { variablesFromValuesAndParameters } from "../utilities/parameters";
import { typeFromJSON, labelFromJSON, exportedFromJSON, parametersFromJSON, typeToTypeJSON, labelToLabelJSON, exportedToExportedJSON, parametersToParametersJSON } from "../utilities/json";

const { cut } = continuationUtilities,
      { breakable, breakPointFromJSON, breakPointToBreakPointJSON } = breakPointUtilities;

export default define(class Procedure extends Element {
  constructor(context, string, node, breakPoint, type, label, exported, parameters, returnBlock) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.label = label;
    this.exported = exported;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
  }

  getType() {
    return this.type;
  }

  getLabel() {
    return this.label;
  }

  isExported() {
    return this.exported;
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

  getProcedureName() {
    const name = this.getName(),
          procedureName = name; ///

    return procedureName;
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

  verify = breakable(function (context, forward, back) {
    let procedure;

    const procedureString = this.getString();

    context.trace(`Verifying the '${procedureString}' function...`);

    const procedureName = this.getProcedureName(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    if (procedurePresent) {
      context.trace(`The '${procedureString}' function is already present.`);

      return back();
    }

    procedure = this; ///

    context.addProcedure(procedure);

    context.debug(`...verified the '${procedureString}' function.`);

    return forward(context, back);
  });

  evaluate = breakable(function (values, context, forward, back) {
    forward = cut(forward, back);

    const procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' function...`);

    return this.parameters.compareValues(values, context, (back) => {
      this.guaranteeReturnBlock();

      const variables = variablesFromValuesAndParameters(values, this.parameters, context);

      return this.returnBlock.evaluate(variables, context, (value, back) => {
        const valueType = value.getType(),
              typeEqualToValueType = this.type.isEqualTo(valueType);

        if (!typeEqualToValueType) {
          const typeString = this.type.getString(),
                valueString = value.getString(),
                valueTypeString = valueType.getString(),
                message = `The '${valueString}' value's '${valueTypeString}' type is not equal to the '${procedureString}' function's '${typeString}' type.`,
                exception = Exception.fromMessage(message);

          return back(exception);
        }

        context.debug(`...called the '${procedureString}' function.`);

        return forward(value, back);
      }, back);
    }, back);
  });

  callNominally(nominalValues, forward, back) {
    const context = this.getContext(),
          procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' function nominally...`);

    const values = valuesFromNominalValues(nominalValues, context);

    return this.evaluate(values, context, (value, back) => {
      context.debug(`...called the '${procedureString}' function nominally.`);

      return forward(value, back);
    }, back);
  }

  toJSON() {
    let json;

    const string = this.getString(),
          typeJSON = typeToTypeJSON(this.type),
          labelJSON = labelToLabelJSON(this.label),
          exportedJJSON = exportedToExportedJSON(this.exported),
          parametersJSON = parametersToParametersJSON(this.parameters);

    let breakPoint;

    breakPoint = this.getBreakPoint();

    const breakPointJSON = breakPointToBreakPointJSON(breakPoint);

    breakPoint = breakPointJSON;  ///

    const type = typeJSON,  ///
          label = labelJSON,  ///
          exported = exportedJJSON, ///
          parameters = parametersJSON;  ///

    json = {
      string,
      breakPoint,
      type,
      label,
      exported,
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
          exported = exportedFromJSON(json, context),
          parameters = parametersFromJSON(json, context),
          procedureNode = context.findProcedureNode(label),
          returnBlock = null, ///
          node = procedureNode, ///
          procedure = new Procedure(context, string, node, breakPoint, type, label, exported, parameters, returnBlock);

    return procedure;
  }
});
