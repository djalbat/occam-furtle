"use strict";

import { arrayUtilities } from "necessary";

import nullNode from "../nullNode";

import { define } from "../elements";
import { NODE_TYPE, NODES_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";

const { match } = arrayUtilities;

export default define(class Expression {
  constructor(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
    this.string = string;
    this.node = node;
    this.nodes = nodes;
    this.number = number;
    this.boolean = boolean;
    this.stringLiteral = stringLiteral;
    this.some = some;
    this.every = every;
    this.reduce = reduce;
    this.ternary = ternary;
    this.variable = variable;
    this.nodeQuery = nodeQuery;
    this.nodesQuery = nodesQuery;
    this.comparison = comparison;
    this.returnBlock = returnBlock;
    this.procedureCall = procedureCall;
    this.negatedExpression = negatedExpression;
    this.logicalExpression = logicalExpression;
    this.bracketedExpression = bracketedExpression;
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

  getSome() {
    return this.some;
  }

  getEvery() {
    return this.every;
  }

  getReduce() {
    return this.reduce;
  }

  getTernary() {
    return this.ternay;
  }

  getVariable() {
    return this.variable;
  }

  getNodeQuery() {
    return this.nodeQuery;
  }

  getNodesQuery() {
    return this.nodesQuery;
  }

  getComparison() {
    return this.comparison;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  getNegatedExpression() {
    return this.negatedExpression;
  }

  getLogiclExpression() {
    return this.logicalExpression;
  }

  getBracketedExpression() {
    return this.bracketedExpression;
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
    } else if (this.some !== null) {
      type = this.some.getType();
    } else if (this.every !== null) {
      type = this.every.getType();
    } else if (this.reduce !== null) {
      type = this.reduce.getType();
    } else if (this.ternary !== null) {
      type = this.ternary.getType();
    } else if (this.variable !== null) {
      type = this.variable.getType();
    } else if (this.nodeQuery !== null) {
      type = this.nodeQuery.getType();
    } else if (this.nodesQuery !== null) {
      type = this.nodesQuery.getType();
    } else if (this.comparison !== null) {
      type = this.comparison.getType();
    } else if (this.returnBlock !== null) {
      type = this.returnBlock.getType();
    } else if (this.procedureCall !== null) {
      type = this.procedureCall.getType();
    } else if (this.negatedExpression !== null) {
      type = this.negatedExpression.getType();
    } else if (this.logicalExpression !== null) {
      type = this.logicalExpression.getType();
    } else if (this.bracketedExpression !== null) {
      type = this.bracketedExpression.getType();
    }

    return type;
  }

  evaluate(context) {
    let expression;

    if (false) {
      ///
    } else if ((this.node !== null)  ||
               (this.nodes !== null) ||
               (this.number !== null) ||
               (this.boolean !== null) ||
               (this.stringLiteral !== null)) {
      expression = this;
    } else if (this.some !== null) {
      expression = this.some.evaluate(context);
    } else if (this.every !== null) {
      expression = this.every.evaluate(context);
    } else if (this.reduce !== null) {
      expression = this.reduce.evaluate(context);
    } else if (this.ternary !== null) {
      expression = this.ternary.evaluate(context);
    } else if (this.variable !== null) {
      expression = this.variable.evaluate(context);
    } else if (this.nodeQuery !== null) {
      expression = this.nodeQuery.evaluate(context);
    } else if (this.nodesQuery !== null) {
      expression = this.nodesQuery.evaluate(context);
    } else if (this.comparison !== null) {
      expression = this.comparison.evaluate(context);
    } else if (this.returnBlock !== null) {
      expression = this.returnBlock.evaluate(context);
    } else if (this.procedureCall !== null) {
      expression = this.procedureCall.evaluate(context);
    } else if (this.negatedExpression !== null) {
      expression = this.negatedExpression.evaluate(context);
    } else if (this.logicalExpression !== null) {
      expression = this.logicalExpression.evaluate(context);
    } else if (this.bracketedExpression !== null) {
      expression = this.bracketedExpression.evaluate(context);
    }

    return expression;
  }

  isEqualTo(expression) {
    let equalTo;

    if (false) {
      ///
    } else if (this.node !== null) {
      const node = expression.getNode();

      if (node === null) {
        equalTo = false;
      } else {
        const nodeA = this.node,  ///
              nodeB = node, ///
              nodeMatches = matchNode(nodeA, nodeB);

        equalTo = nodeMatches;  ///
      }
    } else if (this.nodes !== null) {
      const nodes = expression.getNode();

      if (nodes === null) {
        equalTo = false;
      } else {
        const nodesA = this.nodes,  ///
              nodesB = nodes, ///
              nodesMatch = matchNodes(nodesA, nodesB);

        equalTo = nodesMatch; ///
      }
    } else if (this.number !== null) {
      const number = expression.getNumber();

      equalTo = (this.number === number);
    } else if (this.boolean !== null) {
      const boolean = expression.getBoolean();

      equalTo = (this.boolean === boolean);
    } else if (this.stringLiteral !== null) {
      const stringLiteral = expression.getStringLiteral();

      equalTo = (this.stringLiteral === stringLiteral);
    } else {
      debugger
    }

    return equalTo;
  }

  static name = "Expression";
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
