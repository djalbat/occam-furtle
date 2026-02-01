"use strict";

import { arrayUtilities } from "necessary";

import nullNode from "../nullNode";

import { define } from "../elements";
import { NODE_TYPE, NODES_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";

const { match } = arrayUtilities;

export default define(class Primitive {
  constructor(string, node, nodes, number, boolean, stringLiteral) {
    this.string = string;
    this.node = node;
    this.nodes = nodes;
    this.number = number;
    this.boolean = boolean;
    this.stringLiteral = stringLiteral;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getNodes() {
    return this.nodes;
  }

  getNumber() {
    return this.number;
  }

  getBoolean() {
    return this.boolean;
  }

  getStringLiteral() {
    return this.stringLiteral;
  }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.node !== null) {
      type = NODE_TYPE;
    } else if (this.nodes !== null) {
      type = NODES_TYPE;
    } else if (this.number !== null) {
      type = NUMBER_TYPE;
    } else if (this.boolean !== null) {
      type = BOOLEAN_TYPE;
    } else if (this.stringLiteral !== null) {
      type = STRING_TYPE;
    }

    return type;
  }

  evaluate(context) {
    const expression = this;  ///

    return expression;
  }

  isEqualTo(primitive) {
    let equalTo;

    if (false) {
      ///
    } else if (this.node !== null) {
      const node = primitive.getNode();

      if (node === null) {
        equalTo = false;
      } else {
        const nodeA = this.node,  ///
              nodeB = node, ///
              nodeMatches = matchNode(nodeA, nodeB);

        equalTo = nodeMatches;  ///
      }
    } else if (this.nodes !== null) {
      const nodes = primitive.getNode();

      if (nodes === null) {
        equalTo = false;
      } else {
        const nodesA = this.nodes,  ///
              nodesB = nodes, ///
              nodesMatch = matchNodes(nodesA, nodesB);

        equalTo = nodesMatch; ///
      }
    } else if (this.number !== null) {
      const number = primitive.getNumber();

      equalTo = (this.number === number);
    } else if (this.boolean !== null) {
      const boolean = primitive.getBoolean();

      equalTo = (this.boolean === boolean);
    } else if (this.stringLiteral !== null) {
      const stringLiteral = primitive.getStringLiteral();

      equalTo = (this.stringLiteral === stringLiteral);
    }

    return equalTo;
  }

  static name = "Primitive";
});

function matchNode(nodeA, nodeB) {
  let nodeMatches;

  if ((nodeA === nullNode) || (nodeB === nullNode)) {
    nodeMatches = (nodeA === nodeB);
  } else if (nodeA === nullNode) {
    nodeMatches = false;
  } else if (nodeB === nullNode) {
    nodeMatches = false;
  } else {
    const nodeAMatchesNodeB = nodeA.match(nodeB);

    nodeMatches = nodeAMatchesNodeB;  ///
  }

  return nodeMatches;
}

function matchNodes(nodesA, nodesB) {
  const nodesMatch = match(nodesA, nodesB, (nodeA, nodeB) => {
    const nodeMatches = matchNode(nodeA, nodeB);

    if (nodeMatches) {
      return true;
    }
  });

  return nodesMatch;
}
