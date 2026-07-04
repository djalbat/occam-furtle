"use strict";

import elements from "../elements";

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
