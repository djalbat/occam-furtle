"use strict";

import dom from "../dom";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const errorNodeQuery = nodeQuery("/error"),
      procedureDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/procedureDeclaration"),
      variablesDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/variablesDeclaration");

class TopLevelVerifier extends Verifier {
  verify(node, fileContext) {
    let verifiedAtTopLevel;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, fileContext);

    verifiedAtTopLevel = nonTerminalNodeVerified;  ///

    return verifiedAtTopLevel;
  }

  static maps = [
    {
      nodeQuery: errorNodeQuery,
      verify: (errorNode, fileContext) => {
        const { Error } = dom,
              error = Error.fromErrorNode(errorNode, fileContext),
              errorVerified = error.verify();

        return errorVerified;
      }
    },
    {
      nodeQuery: procedureDeclarationNodeQuery,
      verify: (procedureDeclarationNode, fileContext) => {
        const { ProcedureDeclaration } = dom,
              procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, fileContext),
              procedureDeclarationVerified = procedureDeclaration.verify();

        return procedureDeclarationVerified;
      }
    },
    {
      nodeQuery: variablesDeclarationNodeQuery,
      verify: (variablesDeclarationNode, fileContext) => {
        const { VariablesDeclaration } = dom,
              variablesDeclaration = VariablesDeclaration.fromVariablesDeclarationNode(variablesDeclarationNode, fileContext),
              variablesDeclarationVerified = variablesDeclaration.verify();

        return variablesDeclarationVerified;
      }
    }
  ];
}

const topLevelVerifier = new TopLevelVerifier();

export default topLevelVerifier;
