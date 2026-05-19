"use strict";

import { NULL } from "./constants";

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
    const string = context.nodeAsString(node),
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
