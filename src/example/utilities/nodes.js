"use strict";

import { Query } from "occam-query";

import { nominalLexerFromNothing, nominalParserFromNothing } from "../utilities/nominal";

const termNodeQuery = Query.fromExpressionString("/statement/argument/term");

const nominalLexer = nominalLexerFromNothing(),
      nominalParser = nominalParserFromNothing();

export function nodesFromNothing() {
  const content = `∀n n = n`,
        tokens = nominalLexer.tokenise(content),
        node = nominalParser.parse(tokens),
        termNode = termNodeQuery.execute(node),
        statementNode = node, ///
        nodes = [
          termNode,
          statementNode
        ];

  return nodes;
}

