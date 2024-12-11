"use strict";

import "./index";

import { valuesFromNothing } from "./example/utilities/values";
import { fileContextFromNothing } from "./example/utilities/fileContext";
import { procedureFromFileContext } from "./example/utilities/procedure";

const values = valuesFromNothing(),
      fileContext = fileContextFromNothing(),
      procedure = procedureFromFileContext(fileContext),
      context = fileContext;  ///

procedure.call(values, context);
