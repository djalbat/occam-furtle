"use strict";

const { NominalValue } = require("../../lib/index"),
      { rulesUtilities } = require("occam-parsers"),
      { nominalUtilities } = require("occam-languages");

const NominalFileContext = require("../context/file/nominal");

const { rulesAsString, rulesFromStartRuleAndRuleMap } = rulesUtilities,
      { nominalLexerFromCombinedCustomGrammar, nominalParserFromStartRuleNameAndCombinedCustomGrammar } = nominalUtilities;

const startRuleName = "step";

function nominalValuesFromContent(content, callback, context) {
  const combinaedCustomGrammar = context.getCombinedCustomGrammar(),
        nominalLexer = nominalLexerFromCombinedCustomGrammar(combinaedCustomGrammar),
        nominalParser = nominalParserFromStartRuleNameAndCombinedCustomGrammar(startRuleName, combinaedCustomGrammar);

  const adjustedBNF = getAdjustedBNF(nominalParser);


  const tokens = nominalLexer.tokenise(content),
        node = nominalParser.parse(tokens),
        nodes = callback(node),
        nominalFileContext = NominalFileContext.fromNodeAndTokens(node, tokens, context);

  context = nominalFileContext; ///

  const nominalValues = nomainlValuesFromNodes(nodes, context);

  return nominalValues;
}

module.exports = {
  nominalValuesFromContent
};

function nomainlValuesFromNodes(nodes, context) {
  const nominalValues = nodes.map((node) => {
    const nominalValue = NominalValue.fromNode(node, context);

    return nominalValue;
  });

  return nominalValues;
}

function getAdjustedBNF(nominalParser) {
  const parser = nominalParser, ///
        ruleMap = parser.getRuleMap(),
        startRule = parser.getStartRule(),
        rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap),
        string = rulesAsString(rules),
        adjustedBNF = string; ///

  return adjustedBNF;
}
