"use strict";

import { SimplePass } from "occam-languages";
import { queryUtilities } from "occam-query";

import { errorFromErrorNode, procedureFromProcedureNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const errorNodeQuery = nodeQuery("/error"),
      procedureNodeQuery = nodeQuery("/procedure");

class TopLevelPass extends SimplePass {
  static maps = [
    {
      nodeQuery: errorNodeQuery,
      run: (errorNode, context) => {
        let success = false;

        const error = errorFromErrorNode(errorNode, context),
              errorVerifies = error.verify(context);

        if (errorVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: procedureNodeQuery,
      run: (procedureNode, context) => {
        let success = false;

        const procedure = procedureFromProcedureNode(procedureNode, context),
              procedureVerifies = procedure.verify(context);

        if (procedureVerifies) {
          success = true;
        }

        return success;
      }
    }
  ];
}

const topLevelPass = new TopLevelPass();

export function verifyFile(fileNode, context) {
  let fileVerifies = false;

  const node = fileNode, ///
        success = topLevelPass.run(node, context);

  if (success) {
    fileVerifies = true;
  }

  return fileVerifies;
}
