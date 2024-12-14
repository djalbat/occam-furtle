"use strict";

import { stringUtilities } from "../../index";  ///

const { nodeAsString } = stringUtilities;

export default class FileContext {
  constructor(releaseContext, node, tokens) {
    this.releaseContext = releaseContext;
    this.node = node;
    this.tokens = tokens;
  }

  getReleaseContext() {
    return this.releaseContext;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getVariables() {
    const variables = [];

    return variables;
  }

  getProcedures() {
    const procedures = [];

    return procedures;
  }

  getFileContext() {
    const fileContext = this;

    return fileContext;
  }

  findProcedureByReference(reference) { return this.releaseContext.findProcedureByReference(reference); }

  isProcedurePresentByReference(reference) { return this.releaseContext.isProcedurePresentByReference(reference); }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  trace(message) { this.releaseContext.trace(message, this.filePath); }

  debug(message) { this.releaseContext.debug(message, this.filePath); }

  info(message) { this.releaseContext.info(message, this.filePath); }

  warning(message) { this.releaseContext.warning(message, this.filePath); }

  error(message) { this.releaseContext.error(message, this.filePath); }

  static fromNodeAndTokens(node, tokens, releaseContext) {
    const fileContext = new FileContext(releaseContext, node, tokens);

    return fileContext;
  }
}
