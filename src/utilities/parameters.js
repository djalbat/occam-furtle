"use strict";

import elements from "../elements";

export function variablesFromValuesAndParameters(values, parameters, context) {
  const variables = [];

  values.forEachValue((value, index) => {
    const parameter = parameters.getParameter(index);

    if (parameter !== null) {
      const { Variable } = elements,
            variable = Variable.fromValueAndParameter(value, parameter, context);

      variables.push(variable);
    }
  });

  return variables;
}
