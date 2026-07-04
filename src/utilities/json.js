"use strict";

import elements from "../elements";

export function typeToTypeJSON(type) {
  const typeJSON = type.toJSON();

  return typeJSON;
}

export function labelToLabelJSON(label) {
  const labelJSON = label.toJSON();

  return labelJSON;
}

export function parametersToParametersJSON(parameters) {
  const parameterJSON = parameters.toJSON();

  return parameterJSON;
}

export function typeFromJSON(json, context) {
  let { type } = json;

  const { Type } = elements,
        typeJSON = type;  ///

  json = typeJSON; ///

  type = Type.fromJSON(json, context);

  return type;
}

export function labelFromJSON(json, context) {
  let { label } = json;

  const { Label } = elements,
        labelJSON = label;  ///

  json = labelJSON; ///

  label = Label.fromJSON(json, context);

  return label;
}

export function parametersFromJSON(json, context) {
  let { parameters } = json;

  const { Parameters } = elements,
        parametersJSON = parameters;  ///

  json = parametersJSON; ///

  parameters = Parameters.fromJSON(json, context);

  return parameters;
}

export function proceduresFromJSON(json, context) {
  let { procedures } = json;

  const { Procedure } = elements,
        proceduresJSON = procedures; ///

  procedures = proceduresJSON.map((procedureJSON) => {
    const json = procedureJSON,  ///
          procedure = Procedure.fromJSON(json, context);

    return procedure;
  });

  return procedures;
}

export function proceduresToProceduresJSON(procedures) {
  const proceduresJSON = procedures.map((procedure) => {
    const procedureJSON = procedure.toJSON();

    return procedureJSON;
  });

  return proceduresJSON;
}
