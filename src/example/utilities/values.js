"use strict";

import { Value } from "../../index"; ///
import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

import FileContext from "../context/file";

import { nominalLexerFromNothing, nominalParserFromNothing } from "../utilities/nominal";

const { first } = arrayUtilities;

const termNodeQuery = Query.fromExpressionString("/statement/argument/term");

const nominalLexer = nominalLexerFromNothing(),
      nominalParser = nominalParserFromNothing();

export function valuesFromNothing() {
  const fileContext = fileContextFromNothing(),
        nodes = nodesFromFileContext(fileContext),
        values = nodes.map((node) => {
          const value = Value.fromNode(node, fileContext);

          return value;
        });

  return values;
}

function nodesFromFileContext(fileContext) {
  const node = fileContext.getNode(),
        termNodes = termNodeQuery.execute(node),
        firstTermNode = first(termNodes),
        termNode = firstTermNode, ///
        statementNode = node, ///
        nodes = [
          termNode,
          statementNode
        ];

  return nodes;
}

function fileContextFromNothing() {
  const content = `∀n n = n`,
        tokens = nominalLexer.tokenise(content),
        node = nominalParser.parse(tokens),
        fileContext = FileContext.fromNodeAndTokens(node, tokens);

  return fileContext;
}
