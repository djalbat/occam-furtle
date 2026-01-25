"use strict";

import { stringUtilities } from "../../index";  ///

import { chainContext } from "../../utilities/context";

const { nodeAsString, nodesAsString } = stringUtilities;

export default class FileContext {
  constructor(context, node, tokens) {
    this.context = context;
    this.node = node;
    this.tokens = tokens;

    return chainContext(this);
  }

  getContext() {
    return this.context;
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

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  trace(message) { this.context.trace(message, this.filePath); }

  debug(message) { this.context.debug(message, this.filePath); }

  info(message) { this.context.info(message, this.filePath); }

  warning(message) { this.context.warning(message, this.filePath); }

  error(message) { this.context.error(message, this.filePath); }

  getFileContext() {
    const fileContext = this; ///

    return fileContext;
  }

  getDepth() {
    let depth = this.context.getDepth();

    depth++;

    return depth;
  }

  static fromNodeAndTokens(node, tokens, context) {
    const fileContext = new FileContext(context, node, tokens);

    return fileContext;
  }
}
