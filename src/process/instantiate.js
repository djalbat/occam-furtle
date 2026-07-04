"use strict";

import { bnfUtilities } from "occam-languages";

import { TYPE_RULE_NAME } from "../ruleNames";

const typePlaceholderRule = ruleFromRuleName(TYPE_RULE_NAME);

export function instantiateType(string, context) { return instantiate(typePlaceholderRule, string, context); }

function instantiate(placeholderRule, string, context) {
  let node;

  const lexer = context.getLexer(),
        parser = context.getParser(),
        content = `${string}
`,
        tokens = lexer.tokenise(content);

  context.setTokens(tokens);

  const startRule = placeholderRule;  ///

  node = parser.parse(tokens, startRule);

  const nonTerminalNode = node; ///

  nonTerminalNode.someChildNode((childNode) => {
    node = childNode; ///

    return true;
  });

  return node;
}
