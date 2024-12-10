"use strict";

import "./index";

import { nodesFromNothing } from "./example/utilities/nodes";
import { fileContextFromNothing } from "./example/utilities/fileContext";
import { procedureFromFileContext } from "./example/utilities/procedure";

const nodes = nodesFromNothing(),
      fileContext = fileContextFromNothing(),
      procedure = procedureFromFileContext(fileContext),
      context = fileContext;  ///

procedure.call(nodes, context);
