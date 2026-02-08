"use strict";

import { SimplePass, queryUtilities } from "occam-languages";

import { errorFromErrorNode, procedureDeclarationFromProcedureDeclarationNode } from "../utilities/element";

const { nodeQuery } = queryUtilities;

const errorNodeQuery = nodeQuery("/error"),
      procedureDeclarationNodeQuery = nodeQuery("/procedureDeclaration");

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
      nodeQuery: procedureDeclarationNodeQuery,
      run: (procedureDeclarationNode, context) => {
        let success = false;

        const procedureDeclaration = procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context),
              procedureDeclarationVerifies = procedureDeclaration.verify(context);

        if (procedureDeclarationVerifies) {
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
        sucess = topLevelPass.run(node, context);

  if (sucess) {
    fileVerifies = true;
  }

  return fileVerifies;
}
