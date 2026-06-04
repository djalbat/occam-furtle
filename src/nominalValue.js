"use strict";

import { specialSymbols } from "occam-lexers";

import { NULL } from "./constants";

const { endOfLine, noWhitespace } = specialSymbols;

export default class NominalValue {
  constructor(context, string, node) {
    this.context = context;
    this.string = string;
    this.node = node;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  match(nominalValue) {
    const node = nominalValue.getNode(),
          nodeA = node, ///
          nodeB = this.node,  ///
          nodesMatch = matchNodes(nodeA, nodeB),
          matches = nodesMatch; ///

    return matches;
  }

  static fromNode(node, context) {
    const string = stringFromNode(node, context),
          nominalValue = new NominalValue(context, string, node);

    return nominalValue;
  }

  static fromNothing() {
    const context = null,
          string = NULL,
          node = null,
          nominalValue = new NominalValue(context, string, node);

    return nominalValue;
  }

  static fromSubstitution(substitution) {
    const replacementNode = substitution.getReplacementNode(),
          specificContext = substitution.getSpecificContext(),
          node = replacementNode, ///
          context = specificContext,  ///
          string = context.nodeAsString(node),
          nominalValue = new NominalValue(context, string, node);

    return nominalValue;
  }
}

function matchNodes(nodeA, nodeB) {
  let nodesMatch;

  if ((nodeA === null) || (nodeB === null)) {
    nodesMatch = (nodeA === nodeB);
  } else {
    const nodeAMatchesNodeB = nodeA.match(nodeB);

    nodesMatch = nodeAMatchesNodeB;  ///
  }

  return nodesMatch;
}

function stringFromNode(node, context) {
  let string;

  const nodeEndOfLineNode = isNodeEndOfLineNode(node),
        nodeNoWhitespaceNode = isNodeNoWhitespaceNode(node);

  if (false) {
      ///
  }
  else if (nodeEndOfLineNode) {
    string = endOfLine;  ///
  }
  else if (nodeNoWhitespaceNode) {
    string = noWhitespace;  ///
  } else {
    string = context.nodeAsString(node);
  }

  return string;
}

function isNodeEndOfLineNode(node) {
  let nodeEndOfLineNode = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          significantToken = terminalNode.getSignificantToken();

    if (significantToken !== null) {
      const significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

      if (significantTokenEndOfLineToken) {
        nodeEndOfLineNode = true;
      }
    }
  }

  return nodeEndOfLineNode;
}

function isNodeNoWhitespaceNode(node) {
  let nodeNoWhitespaceNode = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminLNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();

    if (terminLNodeNoWhitespaceNode) {
      nodeNoWhitespaceNode = true;
    }
  }

  return nodeNoWhitespaceNode;
}
