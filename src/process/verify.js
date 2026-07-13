"use strict";

import { queryUtilities } from "occam-query";
import { ContinuationPass } from "occam-languages";

import { errorFromErrorNode, procedureFromProcedureNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const errorNodeQuery = nodeQuery("/error"),
      procedureNodeQuery = nodeQuery("/procedure");

class TopLevelPass extends ContinuationPass {
  static maps = [
    {
      nodeQuery: errorNodeQuery,
      run: (errorNode, context, continuation) => {
        const error = errorFromErrorNode(errorNode, context);

        return error.verify(context, continuation);
      }
    },
    {
      nodeQuery: procedureNodeQuery,
      run: (procedureNode, context, continuation) => {
        const procedure = procedureFromProcedureNode(procedureNode, context);

        return procedure.verify(context, continuation);
      }
    }
  ];
}

const topLevelPass = new TopLevelPass();

export function verifyFile(fileNode, context, continuation) {
  const node = fileNode; ///

  return topLevelPass.run(node, context, continuation);
}
