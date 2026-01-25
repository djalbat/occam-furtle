"use strict";

import { nodeQuery } from "../utilities/query";

import elements from "../elements";

const nonTerminalNodeQuery = nodeQuery("/*"),
      errorNodeQuery = nodeQuery("/error"),
      procedureDeclarationNodeQuery = nodeQuery("/document/procedureDeclaration");

class Pass {
  run(node, ...remainingArguments) {
    let success;

    const visited = this.visitNode(node, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(childNodes, ...remainingArguments) {
    let descended = false;

    const visited = childNodes.every((childNode) => {
      const node = childNode, ///
            visited = this.visitNode(node, ...remainingArguments);

      if (visited) {
        return true;
      }
    });

    if (visited) {
      descended = true;
    }

    return descended;
  }

  visitNode(node, ...remainingArguments) {
    let visited;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  ///

      visited = this.visitTerminalNode(terminalNode, ...remainingArguments);
    } else {
      const nonTerminalNode = node;  ///

      visited = this.visitNonTerminalNode(nonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(terminalNode, ...remainingArguments) {
    const visited = true;

    return visited;
  }

  visitNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        run: (node, ...remainingArguments) => {
          let visited = false;

          const childNodes = nonTerminalNode.getChildNodes(), ///
                descended = this.descend(childNodes, ...remainingArguments);

          if (descended) {
            visited = true;
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { nodeQuery, run } = map;

      const node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        const success = run(node, ...remainingArguments);

        visited = success;

        return true;
      }
    });

    return visited;
  }
}

class TopLevelPass extends Pass {
  static maps = [
    {
      nodeQuery: errorNodeQuery,
      run: (errorNode, context) => {
        let success = false;

        const { Error } = elements,
              error = Error.fromErrorNode(errorNode, context),
              errorVerifies = error.verify();

        if (errorVerifies) {
          success = true;
        }

        return success;
      }
    },
    {
      nodeQuery: procedureDeclarationNodeQuery,
      run: (procedureDeclarationNode, context) => {
        let success = true;

        const { ProcedureDeclaration } = elements,
              procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, context),
              procedure = procedureDeclaration.getProcedure();

        context.addProcedure(procedure);

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
