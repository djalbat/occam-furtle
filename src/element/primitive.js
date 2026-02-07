"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";
import nullNode from "../nullNode";

import { define } from "../elements";
import { NODE_TYPE, NODES_TYPE, STRING_TYPE, NUMBER_TYPE, BOOLEAN_TYPE  } from "../types";

const { match } = arrayUtilities;

export default define(class Primitive extends Element {
  constructor(context, string, node, type, value) {
    super(context, string, node)

    this.type = type;
    this.value = value;
  }

  getType() {
    return this.type;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    const { Term } = elements,
          primitive = this,
          term = Term.fromPrimitive(primitive, context);

    return term;
  }

  isEqualTo(primitive) {
    let equalTo = false;

    const type = primitive.getType();

    if (this.type === type) {
      const value = primitive.getValue();

      switch (type) {
        case NODE_TYPE: {
          const nodeA = this.value, ///
                nodeB = value,  ///
                nodeMatches = matchNode(nodeA, nodeB);

          if (nodeMatches) {
            equalTo = true;
          }

          break;
        }

        case NODES_TYPE: {
          const nodesA = this.value, ///
                nodesB = value,  ///
                nodesMatch = matchNodes(nodesA, nodesB);

          if (nodesMatch) {
            equalTo = true;
          }

          break;
        }

        case STRING_TYPE: {
          const stringLiteralA = this.value, ///
                stringLiteralB = value;  ///

          if (stringLiteralA === stringLiteralB) {
            equalTo = true;
          }

          break;
        }

        case NUMBER_TYPE: {
          const numberA = this.value, ///
                numberB = value;  ///

          if (numberA === numberB) {
            equalTo = true;
          }

          break;
        }

        case BOOLEAN_TYPE: {
          const booleanA = this.value, ///
                booleanB = value;  ///

          if (booleanA === booleanB) {
            equalTo = true;
          }

          break;
        }
      }
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
