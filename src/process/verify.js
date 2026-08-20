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
      run: (errorNode, context, back, forward) => {
        const error = errorFromErrorNode(errorNode, context);

        return error.verify(context, back, forward);
      }
    },
    {
      nodeQuery: procedureNodeQuery,
      run: (procedureNode, context, back, forward) => {
        const procedure = procedureFromProcedureNode(procedureNode, context);

        return procedure.verify(context, back, forward);
      }
    }
  ];
}

const topLevelPass = new TopLevelPass();

export function verifyFile(fileNode, context, back, forward) {
  const node = fileNode; ///

  return topLevelPass.run(node, context, back, forward);
}
