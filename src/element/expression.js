"use strict";

import { arrayUtilities } from "necessary";

import elements from "../elements";
import nullNode from "../nullNode";

import { NULL } from "../constants";
import { define } from "../elements";
import { nodeQuery } from "../utilities/query";
import { NODE_TYPE, NODES_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";
import { nodeFromExpressionNode,
         nodesFromExpressionNode,
         stringFromExpressionNode,
         numberFromExpressionNode,
         booleanFromExpressionNode } from "../utilities/element";

const { match } = arrayUtilities;

const reduceExpressionNodeQuery = nodeQuery("/reduce/expression"),
      ternaryExpressionNodeQuery = nodeQuery("/ternary/expression"),
      returnStatementExpressionNodeQuery = nodeQuery("/returnStatement/expression"),
      variableAssignmentExpressionNodeQuery = nodeQuery("/variableAssignment/expression");

export default define(class Expression {
  constructor(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
    this.node = node;
    this.nodes = nodes;
    this.number = number;
    this.string = string;
    this.boolean = boolean;
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

  getNode() {
    return this.node;
  }

  getNodes() {
    return this.nodes;
  }

  getNumber() {
    return this.number;
  }

  getString() {
    return this.string;
  }

  getBoolean() {
    return this.boolean;
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
    } else if (this.string !== null) {
      type = STRING_TYPE;
    } else if (this.boolean !== null) {
      type = BOOLEAN_TYPE;
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

  asString(context) {
    let string;

    if (false) {
      ///
    } else if (this.node !== null) {
      string = nodeAsString(this.node, context);
    } else if (this.nodes !== null) {
      string = nodesAsString(this.nodes, context);
    } else if (this.number !== null) {
      string = numberAsString(this.number);
    } else if (this.string !== null) {
      string = stringAsString(this.string)
    } else if (this.boolean !== null) {
      string = booleanAsString(this.boolean)
    } else if (this.some !== null) {
      string = this.some.getString();
    } else if (this.every !== null) {
      string = this.every.getString();
    } else if (this.reduce !== null) {
      string = this.reduce.getString();
    } else if (this.ternary !== null) {
      string = this.ternary.getString();
    } else if (this.variable !== null) {
      string = this.variable.getString();
    } else if (this.nodeQuery !== null) {
      string = this.nodeQuery.getString();
    } else if (this.nodesQuery !== null) {
      string = this.nodesQuery.getString();
    } else if (this.comparison !== null) {
      string = this.comparison.getString();
    } else if (this.returnBlock !== null) {
      string = this.returnBlock.getString();
    } else if (this.procedureCall !== null) {
      string = this.procedureCall.getString();
    } else if (this.negatedExpression !== null) {
      string = this.negatedExpression.getString();
    } else if (this.logicalExpression !== null) {
      string = this.logicalExpression.getString();
    } else if (this.bracketedExpression !== null) {
      string = this.bracketedExpression.getString();
    }

    return string;
  }

  evaluate(context) {
    let expression;

    if (false) {
      ///
    } else if ((this.node !== null)  ||
               (this.nodes !== null) ||
               (this.number !== null) ||
               (this.string !== null) ||
               (this.boolean !== null)) {
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
    } else if (this.string !== null) {
      const string = expression.getString();

      equalTo = (this.string === string);
    } else if (this.boolean !== null) {
      const boolean = expression.getBoolean();

      equalTo = (this.boolean === boolean);
    } else {
      debugger
    }

    return equalTo;
  }

  static name = "Expression";

  static fromNode(node, context) {
    if (node === null) {
      node = nullNode;
    }

    const nodes = null,
          number = null,
          string = null,
          boolean = null,
          some = null,
          every = null,
          reduce = null,
          ternary = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          returnBlock = null,
          procedureCall = null,
          negatedExpression = null,
          logicalExpression = null,
          bracketedExpression = null,
          expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

    return expression;
  }

  static fromNodes(nodes, context) {
    const node = null,
          number = null,
          string = null,
          boolean = null,
          ternary = null,
          some = null,
          every = null,
          reduce = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          returnBlock = null,
          procedureCall = null,
          negatedExpression = null,
          logicalExpression = null,
          bracketedExpression = null,
          expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

    return expression;
  }

  static fromString(string, context) {
    const node = null,
          nodes = null,
          number = null,
          boolean = null,
          some = null,
          every = null,
          reduce = null,
          ternary = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          returnBlock = null,
          procedureCall = null,
          negatedExpression = null,
          logicalExpression = null,
          bracketedExpression = null,
          expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

    return expression;
  }

  static fromBoolean(boolean, context) {
    const node = null,
          nodes = null,
          number = null,
          string = null,
          some = null,
          every = null,
          reduce = null,
          ternary = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          returnBlock = null,
          procedureCall = null,
          negatedExpression = null,
          logicalExpression = null,
          bracketedExpression = null,
          expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

    return expression;
  }

  static fromReduceNode(reduceNode, context) {
    const reduceExpressionNode = reduceExpressionNodeQuery(reduceNode),
          expressionNode = reduceExpressionNode, ///
          expression = expressionFromExpressionNode(expressionNode, context);

    return expression;
  }

  static fromTernaryNode(ternaryNode, context) {
    const ternaryExpressionNode = ternaryExpressionNodeQuery(ternaryNode),
          expressionNode = ternaryExpressionNode, ///
          expression = expressionFromExpressionNode(expressionNode, context);

    return expression;
  }

  static fromExpressionNode(expressionNode, context) {
    const expression = expressionFromExpressionNode(expressionNode, context);

    return expression;
  }

  static fromReturnStatementNode(returnStatementNode, context) {
    const returnStatementExpressionNode = returnStatementExpressionNodeQuery(returnStatementNode),
          expressionNode = returnStatementExpressionNode, ///
          expression = expressionFromExpressionNode(expressionNode, context);

    return expression;
  }

  static fromVariableAssignmentNode(variableAssigmentNode, context) {
    const variableAssignmentExpressionNode = variableAssignmentExpressionNodeQuery(variableAssigmentNode),
          expressionNode = variableAssignmentExpressionNode,  ///
          expression = expressionFromExpressionNode(expressionNode, context);

    return expression;
  }
});

function matchNode(nodeA, nodeB) {
  let nodeMatches;

  if ((nodeA === nullNode) || (nodeB === nullNode)) {
    nodeMatches = (nodeA === nodeB);
  } else {
    const nodeAEqualToNodeA = nodeA.isEqualTo(nodeB);

    nodeMatches = nodeAEqualToNodeA;  ///
  }

  return nodeMatches;
}

function matchNodes(nodesA, nodesB) {
  let nodesMatch;

  nodesMatch = match(nodesA, nodesB, (nodeA, nodeB) => {
    const nodeMatches = matchNode(nodeA, nodeB);

    if (nodeMatches) {
      return true;
    }
  });

  return nodesMatch;
}

function nodeAsString(node, context) {
  let string;

  const nodeString  = (node === nullNode) ?
                        NULL :
                          context.nodeAsString(node);

  string = `'${nodeString}'`;

  return string;
}

function nodesAsString(nodes, context) {
  let string;

  const nodesString = context.nodesAsString(nodes);

  string = `'${nodesString}'`;

  return string;
}

function numberAsString(number) {
  let string;

  string = `${number}`;

  return string;
}

function stringAsString(string) {
  string = `"${string}"`; ///

  return string;
}

function booleanAsString(boolean) {
  let string;

  string = `'${boolean}'`;

  return string;
}

function expressionFromExpressionNode(expressionNode, context) {
  const { Some, Every, Reduce, Expression, Ternary, Variable, NodeQuery, NodesQuery, Comparison, ReturnBlock, ProcedureCall, NegatedExpression, LogicalExpression, BracketedExpression } = elements,
        node = nodeFromExpressionNode(expressionNode, context),
        nodes = nodesFromExpressionNode(expressionNode, context),
        number = numberFromExpressionNode(expressionNode, context),
        string = stringFromExpressionNode(expressionNode, context),
        boolean = booleanFromExpressionNode(expressionNode, context),
        some = Some.fromExpressionNode(expressionNode, context),
        every = Every.fromExpressionNode(expressionNode, context),
        reduce = Reduce.fromExpressionNode(expressionNode, context),
        ternary = Ternary.fromExpressionNode(expressionNode, context),
        variable = Variable.fromExpressionNode(expressionNode, context),
        nodeQuery = NodeQuery.fromExpressionNode(expressionNode, context),
        nodesQuery = NodesQuery.fromExpressionNode(expressionNode, context),
        comparison = Comparison.fromExpressionNode(expressionNode, context),
        returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context),
        procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context),
        negatedExpression = NegatedExpression.fromExpressionNode(expressionNode, context),
        logicalExpression = LogicalExpression.fromExpressionNode(expressionNode, context),
        bracketedExpression = BracketedExpression.fromExpressionNode(expressionNode, context),
        expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}
