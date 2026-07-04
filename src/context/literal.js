"use strict";

import { Context, nodeUtilities } from "occam-languages";

const { nodeAsString, nodesAsString } = nodeUtilities;

export default class LiteralContext extends Context {
  constructor(context, tokens) {
    super(context);

    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  static fromTokens(tokens, context) {
    const literalContext = new LiteralContext(context, tokens);

    return literalContext;
  }

  static fromNothing(context) {
    const tokens = null,
          literalContext = new LiteralContext(context, tokens);

    return literalContext;
  }
}
