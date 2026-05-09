"use strict";

const { customGrammarUtilities } = require("occam-custom-grammars");

const { combinedCustomGrammarFromJSON } = customGrammarUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromJSON([
        {
          "name": "Default",
          "termBNF": "term                                 ::=  \"(\" argument \")\"\n\n                                       |  variable \n                                       \n                                       ;",
          "statementBNF": "statement                            ::=  \"(\" metaArgument \")\" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion  \n                                       \n                                       |  satisfiesAssertion\n\n                                       |  subproofAssertion         \n\n                                       |  propertyAssertion  \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term \"=\" term ;\n\ntypeAssertion                        ::=  term \":\" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) \"is\" ( \"defined\" | \"undefined\" );\n\ncontainedAssertion                   ::=  ( frame | term ) \"is\" ( \"present\" | \"missing\" ) \"in\" statement ;\n\nsatisfiesAssertion                   ::=  signature \"satisfies\" metavariable ;  \n\nsubproofAssertion                    ::=  \"[\" statement ( \",\" statement )* \"]\" \"...\" statement ;\n\npropertyAssertion                    ::=  term \"is\" ( \"a\" | \"an\" ) propertyRelation ;\n\npropertyRelation                     ::=  property \"of\" term ;\n\njudgement                            ::=  frame \"|\"<NO_WHITESPACE>\"-\" declaration ;\n\nframe                                ::=  \"[\" declaration ( \",\" declaration )* \"]\" ;\n \ndeclaration                          ::=  metavariable ( \"::\" statement )? ;\n\ntermSubstitution                     ::=  \"[\" term \"for\" term \"]\";\n\nframeSubstitution                    ::=  \"[\" frame \"for\" frame \"]\";\n\nstatementSubstitution                ::=  \"[\" statement \"for\" statement \"]\";\n\nreferenceSubstitution                ::=  \"[\" reference \"for\" reference \"]\";",
          "typeVocabulary": "",
          "symbolVocabulary": ""
        },
        {
          "name": "first-order-logic",
          "termBNF": "",
          "statementBNF": "\n\n                              statement  ::=  ( \"∀\" | \"∃\" ) ( frameArgument | argument ) metaArgument \n\n                                           |  ( frameArgument | argument ) \"is\" ( \"𝘣𝘰𝘶𝘯𝘥\" | \"𝘧𝘳𝘦𝘦\" ) \"in\" metaArgument\n\n                                           ;\n\n",
          "typeVocabulary": "",
          "symbolVocabulary": "𝘣𝘰𝘶𝘯𝘥\n𝘧𝘳𝘦𝘦\n∀\n∃\n"
        }
      ]);

module.exports = {
  combinedCustomGrammar
};
