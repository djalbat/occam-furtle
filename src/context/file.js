"use strict";

import { fileSystemUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-grammars";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const { readFile } = fileSystemUtilities,
      { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

const errorNodesQuery = nodesQuery("/document/error"),
      procedureDeclarationNodesQuery = nodesQuery("/document/procedureDeclaration");

export default class FileContext {
  constructor(log, node, tokens, filePath, procedures) {
    this.log = log;
    this.node = node;
    this.tokens = tokens;
    this.filePath = filePath;
    this.procedures = procedures;
  }

  getLog() {
    return this.log;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getFilePath() {
    return this.filePath;
  }

  getProcedures() {
    return this.procedures;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  trace(message) { this.log.trace(message, this.filePath); }

  debug(message) { this.log.debug(message, this.filePath); }

  info(message) { this.log.info(message, this.filePath); }

  warning(message) { this.log.warning(message, this.filePath); }

  error(message) { this.log.error(message, this.filePath); }

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

  static fromLogAndFilePath(log, filePath) {
    const fileContent = readFile(filePath),
          content = fileContent,  ///
          tokens = furtleLexer.tokenise(content),
          node = furtleParser.parse(tokens),
          procedures = [],
          fileContext = new FileContext(log, node, tokens, filePath, procedures);

    return fileContext;
  }
}
