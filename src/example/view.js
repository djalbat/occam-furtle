"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { lexerUtilities } from "occam-lexers";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { FurtleLexer, FurtleParser } from "../index"; ///
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import BNFTextarea from "./view/textarea/bnf";
import RuleNameInput from "./view/input/ruleName";
import TokensTextarea from "./view/textarea/tokens";
import ContentTextarea from "./view/textarea/content";
import ParseTreeTextarea from "./view/textarea/parseTree";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

const { rulesFromEntries, lexerFromRules } = lexerUtilities,
      { rulesFromBNF, parserFromRulesAndStartRuleName } = parserUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.clearTokens();

    this.clearParseTree();

    const tokens = this.getTokens(),
          parseTree = this.getParseTree(tokens);

    this.setTokens(tokens);

    this.setParseTree(parseTree);
  }

  getTokens() {
    const lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          rules = rulesFromEntries(entries),
          furtleLexer = lexerFromRules(FurtleLexer, rules),
          lexer = furtleLexer,  ///
          content = this.getContent(),
          tokens = lexer.tokenise(content);

    return tokens;
  }

  getParseTree(tokens) {
    let parseTree = null;

    const bnf = this.getBNF();

    let rules;

    rules = rulesFromBNF(bnf);

    rules = eliminateLeftRecursion(rules);  ///

    const ruleName = this.getRuleName(),
          startRuleName = ruleName, ///
          furtleParser = parserFromRulesAndStartRuleName(FurtleParser, rules, startRuleName),
          parser = furtleParser, ///
          node = parser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  childElements() {
    return (

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Rule name
            </SubHeading>
            <RuleNameInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Tokens
            </SubHeading>
            <TokensTextarea />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { bnf } = FurtleParser,
          { entries } = FurtleLexer,
          { initialContent } = this.constructor,
          content = initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static initialContent = `Node* termNode, statementNode; Boolean* bound = false;
  
String variableName = variableNameFromTermNode(termNode);

If (variableName == null) {
  Break;
}

Nodes statementNodes = nodesQuery(statementNode, //statement);

ForEach(statementNodes, (Node statementNode) {
  String boundVariableName = boundVariableNameFromStatementNode(statementNode); 
  
  If (boundVariableName == variableName) {
    bound = true;
    
    Break;
  }
});
  
  
String variableNameFromTermNode(Node termNode) {
  String variableName = null;
  
  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);
  
  If (variableNameTerminalNode != null) {
    String content;
    
    { content } = variableNameTerminalNode;
    
    variableName = content;
  }
  
  Return variableName;
}

String boundVariableNameFromStatementNode(Node statementNode) {
  String boundVariableName = null;
  
  Nodes childNodes;
  
  { childNodes } = statementNode;
  
  Node firstChildNode;

  [ firstChildNode ] = childNodes;
  
  Boolean firstChildNodeTerminalNode = isTerminalNode(firstChildNode);
  
  If (firstChildNodeTerminalNode) {
    Node terminalNode = firstChildNode;
    
    String content;
    
    { content } = firstChildNode;
    
    If ((content == "∀") || (content == "∃")) {
      Node secondChildNode;
      
      [ _, secondChildNode ] = childNodes;
      
      Node argumentNode = secondChildNode;
      
      Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);
      
      If (boundVariableNameTerminalNode != null) {
        { content } = boundVariableNameTerminalNode;
        
        boundVariableName = content;
      }
    }
  }
    
  Return boundVariableName;
}
`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
 
`;
