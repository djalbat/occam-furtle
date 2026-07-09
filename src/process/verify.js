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
        setImmediate(() => {
          const error = errorFromErrorNode(errorNode, context);

          error.verify(context, continuation);
        });
      }
    },
    {
      nodeQuery: procedureNodeQuery,
      run: (procedureNode, context, continuation) => {
        setImmediate(() => {
          const procedure = procedureFromProcedureNode(procedureNode, context);

          procedure.verify(context, continuation);
        });
      }
    }
  ];
}

const topLevelPass = new TopLevelPass();

export function verifyFile(fileNode, context, continuation) {
  const node = fileNode; ///

  topLevelPass.run(node, context, continuation);
}
