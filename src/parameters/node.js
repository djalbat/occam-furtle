"use strict";

import Parameters from "../dom/parameters";

import { NODE_TYPE, STRING_TYPE } from "../types";
import { CONTENT_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "../parameterNames";

const types = [
        STRING_TYPE,
        NODE_TYPE,
      ],
      names = [
        CONTENT_PARAMETER_NAME,
        CHILD_NODES_PARAMETER_NAME
      ];

const context = null,
      parameters = Parameters.fromNamesAndTypes(names, types, context),
      nodeParameters = parameters;  ///

export default nodeParameters;
