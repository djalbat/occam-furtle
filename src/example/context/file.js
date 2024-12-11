"use strict";

import { stringUtilities } from "../../index";

const { nodeAsString } = stringUtilities;

export default class FileContext {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  static fromNodeAndTokens(node, tokens) {
    const fileContext = new FileContext(node, tokens);

    return fileContext;
  }
}
