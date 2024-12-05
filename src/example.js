"use strict";

import "./index";

import dom from "./dom";

import { fileSystemUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-grammars";

import { nodesQuery } from "./utilities/query";

const { readFile } = fileSystemUtilities,
      { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

const errorNodesQuery = nodesQuery("/document/error"),
      procedureDeclarationNodesQuery = nodesQuery("/document/procedureDeclaration");

const { Error, ProcedureDeclaration } = dom;

const filePath = "first-order-logic/Procedures/Free and bound variables.ftl",
      fileContent = readFile(filePath),
      content = fileContent,  ///
      tokens = furtleLexer.tokenise(content),
      node = furtleParser.parse(tokens),
      fileContext = null;

const errorNodes = errorNodesQuery(node),
      errorNodesLength = errorNodes.length;

if (errorNodesLength > 0) {
  errorNodes.forEach((errorNode) => {
    Error.fromErrorNode(errorNode, fileContext);
  });
}

const procedureDeclarationNodes = procedureDeclarationNodesQuery(node);

procedureDeclarationNodes.forEach((procedureDeclarationNode) => {
  ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, fileContext);
});
