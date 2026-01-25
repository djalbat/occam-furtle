"use strict";

const { stringUtilities, contextUtilities } = require("../../lib/index");

const { nodeAsString, nodesAsString } = stringUtilities,
      { chainContext, lineIndexFromNodeAndTokens } = contextUtilities;

class FileContext {
  constructor(context, filePath, lineIndex, node, tokens) {
    this.context = context;
    this.filePath = filePath;
    this.lineIndex = lineIndex;
    this.node = node;
    this.tokens = tokens;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getFilePath() {
    return this.filePath;
  }

  getLineIndex() {
    return this.lineIndex;
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

  trace(message, node = null) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message, node);
  }

  debug(message, node = null) {
    const level = DEBUG_LEVEL;

    this.writeToLog(level, message, node);
  }

  info(message, node = null) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message, node);
  }

  warning(message, node = null) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message, node);
  }

  error(message, node = null) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message, node);
  }

  writeToLog(level, message, node) {
    const lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex),
      filePath = (lineIndex === null) ?
        this.filePath :
        null;

    this.context.writeToLog(level, message, filePath, lineIndex);

    this.lineIndex = lineIndex;
  }

  getFileContext() {
    const fileContext = this; ///

    return fileContext;
  }

  getDepth() {
    let depth = this.context.getDepth();

    depth++;

    return depth;
  }

  static fromNodeTokensAndFilePath(node, tokens, filePath, context) {
    const lineIndex = null,
          fileContext = new FileContext(context, filePath, lineIndex, node, tokens);

    return fileContext;
  }
}

module.exports = FileContext;

