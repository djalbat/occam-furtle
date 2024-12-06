"use strict";

import { lexersUtilities, parsersUtilities } from "occam-grammars";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

const errorNodesQuery = nodesQuery("/document/error"),
      procedureDeclarationNodesQuery = nodesQuery("/document/procedureDeclaration");

export default class FileContext {
  constructor(releaseContext, filePath, node, tokens, procedures) {
    this.releaseContext = releaseContext;
    this.filePath = filePath;
    this.node = node;
    this.tokens = tokens;
    this.procedures = procedures;
  }

  getReleaseContext() {
    return this.releaseContext;
  }

  getFilePath() {
    return this.filePath;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getProcedures() {
    return this.procedures;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  trace(message) { this.releaseContext.trace(message, this.filePath); }

  debug(message) { this.releaseContext.debug(message, this.filePath); }

  info(message) { this.releaseContext.info(message, this.filePath); }

  warning(message) { this.releaseContext.warning(message, this.filePath); }

  error(message) { this.releaseContext.error(message, this.filePath); }

  initialise() {
    const { Error, ProcedureDeclaration } = dom,
          fileContext = this, ///
          errorNodes = errorNodesQuery(this.node),
          procedureDeclarationNodes = procedureDeclarationNodesQuery(this.node);

    errorNodes.forEach((errorNode) => {
      const error = Error.fromErrorNode(errorNode, fileContext),
            errorString = error.getString();

      this.warning(errorString);
    });

    procedureDeclarationNodes.forEach((procedureDeclarationNode) => {
      const procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, fileContext),
            procedure = procedureDeclaration.getProcedure();

      this.procedures.push(procedure);
    });
  }

  static fromFile(file, releaseContext) {
    const filePath = file.getPath(),
          fileContent = file.getContent(),
          content = fileContent,  ///
          tokens = furtleLexer.tokenise(content),
          node = furtleParser.parse(tokens),
          procedures = [],
          fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);

    return fileContext;
  }
}
