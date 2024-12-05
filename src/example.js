"use strict";

import "./index";

import dom from "./dom";
import FileContext from "./context/file";

import { nodesQuery } from "./utilities/query";

const errorNodesQuery = nodesQuery("/document/error"),
      procedureDeclarationNodesQuery = nodesQuery("/document/procedureDeclaration");

const { Error, ProcedureDeclaration } = dom;

const filePath = "first-order-logic/Procedures/Free and bound variables.ftl",
      fileContext = FileContext.fromFilePath(filePath);

const node = fileContext.getNode(),
      errorNodes = errorNodesQuery(node),
      procedureDeclarationNodes = procedureDeclarationNodesQuery(node);

errorNodes.forEach((errorNode) => {
  const error = Error.fromErrorNode(errorNode, fileContext),
        errorString = error.getString();

  console.log(errorString);
});

procedureDeclarationNodes.forEach((procedureDeclarationNode) => {
  ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, fileContext);
});
