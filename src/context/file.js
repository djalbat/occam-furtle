"use strict";

import Context from '../context';

import { lineIndexFromNodeAndTokens } from "../utilities/lineIndex";
import { nodeAsString, nodesAsString } from "../utilities/node";

export default class FileContext extends Context {
  constructor(context, filePath, tokens, node) {
    super(context);

    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
  }

  getFilePath() {
    return this.filePath;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  break(node) {
    const lineIndex = lineIndexFromNodeAndTokens(node, this.tokens);

    this.context.break(this.filePath, lineIndex);
  }

  writeToLog(level, message) {
    this.context.writeToLog(level, message, this.filePath);
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  verify() {
    let verifies = false;

    this.prepare();

    if (this.node === null) {
      this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
    } else {
      this.debug(`Verifying the '${this.filePath}' file...`);

      const { verifyFile } = this.constrcutor,
            context = this, ///
            fileNode = this.node; ///

      verifies = verifyFile(fileNode, context);

      verifies ?
        this.complete() :
          this.clear();

      if (verifies) {
        this.info(`...verified the '${this.filePath}' file.`);
      }
    }

    return verifies;
  }

  prepare() {
    if (this.tokens !== null) {
      return;
    }

    const { lexer, parser } = this.constructor,
          file = this.findFile(this.filePath),
          content = file.getContent();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);
  }

  clear() {
    this.procedures = [];
  }

  complete() {
    ///
  }

  initialise(json) {
    const { content } = json,
          lexer = this.getLexer(),
          parser = this.getParser();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);

    this.clear();

    this.addProcedures();
  }

  toJSON() {
    const file = this.findFile(this.filePath),
          filePath = this.filePath, ///
          content = file.getContent(),
          json = {
            filePath,
            content
          };

    return json;
  }

  static fromFile(Class, file, ...remainingArguments) {
    const filePath = file.getPath(),
          tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }

  static fromFilePath(Class, filePath, ...remainingArguments) {
    const tokens = null,
          node = null,
          context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }

  static fromFilePathTokensAndNode(Class, filePath, tokens, node, ...remainingArguments) {
    const context = remainingArguments.pop(), ///
          fileContext = new Class(context, filePath, tokens, node, ...remainingArguments);

    return fileContext;
  }
}
