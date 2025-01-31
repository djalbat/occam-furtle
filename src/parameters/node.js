"use strict";

import Parameter from "../dom/parameter";
import Parameters from "../dom/parameters";

import { stringFromArray } from "../dom/parameters";
import { NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../parameterNames";

const types = [
        STRING_TYPE,
        BOOLEAN_TYPE,
        NODES_TYPE,
      ],
      names = [
        CONTENT_PARAMETER_NAME,
        TERMINAL_PARAMETER_NAME,
        CHILD_NODES_PARAMETER_NAME
      ];

const context = null,
      array = names.map((name, index) => {
        const type = types[index],
              parameter = Parameter.fromNameAndType(name, type, context);

        return parameter;
      }),
      string = stringFromArray(array, context),
      parameters = Parameters.fromStringAndArray(string, array, context),
      nodeParameters = parameters;  ///

export default nodeParameters;
