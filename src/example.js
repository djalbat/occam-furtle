"use strict";

import "./index";

import { Query } from "occam-query";

import { procedureFromNothing } from "./example/utilities/procedure";
import { nominalLexerFromNothing, nominalParserFromNothing } from "./example/utilities/nominal";

const termNodeQuery = Query.fromExpressionString("/statement/argument/term");

const nominalLexer = nominalLexerFromNothing(),
      nominalParser = nominalParserFromNothing();

const content = `∀n n = n`,
      tokens = nominalLexer.tokenise(content),
      node = nominalParser.parse(tokens),
      termNode = termNodeQuery.execute(node),
      statementNode = node, ///
      nodes = [
        termNode,
        statementNode
      ];

const procedure = procedureFromNothing();

procedure.call(nodes);
