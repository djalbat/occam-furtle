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

export function proceduresToProceduresJSON(procedures) {
  const proceduresJSON = procedures.map((procedure) => {
    const procedureJSON = procedure.toJSON();

    return procedureJSON;
  });

  return proceduresJSON;
}

export function parametersToParametersJSON(parameters) {
  const parameterJSON = parameters.toJSON();

  return parameterJSON;
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
