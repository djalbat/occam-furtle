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
      run: (errorNode, context, forward, back) => {
        const error = errorFromErrorNode(errorNode, context);

        return error.verify(context, forward, back);
      }
    },
    {
      nodeQuery: procedureNodeQuery,
      run: (procedureNode, context, forward, back) => {
        const procedure = procedureFromProcedureNode(procedureNode, context);

        return procedure.verify(context, forward, back);
      }
    }
  ];
}

const topLevelPass = new TopLevelPass();

export function verifyFile(fileNode, context, forward, back) {
  const node = fileNode; ///

  return topLevelPass.run(node, context, forward, back);
}
