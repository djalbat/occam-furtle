"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import nullNode from "../nullNode";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NULL, TRUE, FALSE, EMPTY_STRING } from "../constants";
import { NODE_TYPE, NODES_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";

const { match } = arrayUtilities;

const reduceValueNodeQuery = nodeQuery("/reduce/value"),
      ternaryValueNodeQuery = nodeQuery("/ternary/value"),
      numberTerminalNodeQuery = nodeQuery("/value/@number"),
      primitiveTerminalNodeQuery = nodeQuery("/value/@primitive"),
      returnStatementValueNodeQuery = nodeQuery("/returnStatement/value"),
      stringLiteralTerminalNodeQuery = nodeQuery("/value/@string-literal"),
      variableAssignmentValueNodeQuery = nodeQuery("/variableAssignment/value");

export default domAssigned(class Value {
  constructor(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue) {
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
    this.negatedValue = negatedValue;
    this.bitwiseValue = bitwiseValue;
    this.bracketedValue = bracketedValue;
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

  getNegatedValue() {
    return this.negatedValue;
  }

  getBitwiseValue() {
    return this.bitwiseValue;
  }

  getBracketedValue() {
    return this.bracketedValue;
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
    } else if (this.negatedValue !== null) {
      type = this.negatedValue.getType();
    } else if (this.bitwiseValue !== null) {
      type = this.bitwiseValue.getType();
    } else if (this.bracketedValue !== null) {
      type = this.bracketedValue.getType();
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
    } else if (this.negatedValue !== null) {
      string = this.negatedValue.getString();
    } else if (this.bitwiseValue !== null) {
      string = this.bitwiseValue.getString();
    } else if (this.bracketedValue !== null) {
      string = this.bracketedValue.getString();
    }

    return string;
  }

  evaluate(context) {
    let value;

    if (false) {
      ///
    } else if ((this.node !== null)  ||
               (this.nodes !== null) ||
               (this.number !== null) ||
               (this.string !== null) ||
               (this.boolean !== null)) {
      value = this;
    } else if (this.some !== null) {
      value = this.some.evaluate(context);
    } else if (this.every !== null) {
      value = this.every.evaluate(context);
    } else if (this.reduce !== null) {
      value = this.reduce.evaluate(context);
    } else if (this.ternary !== null) {
      value = this.ternary.evaluate(context);
    } else if (this.variable !== null) {
      value = this.variable.evaluate(context);
    } else if (this.nodeQuery !== null) {
      value = this.nodeQuery.evaluate(context);
    } else if (this.nodesQuery !== null) {
      value = this.nodesQuery.evaluate(context);
    } else if (this.comparison !== null) {
      value = this.comparison.evaluate(context);
    } else if (this.returnBlock !== null) {
      value = this.returnBlock.evaluate(context);
    } else if (this.procedureCall !== null) {
      value = this.procedureCall.evaluate(context);
    } else if (this.negatedValue !== null) {
      value = this.negatedValue.evaluate(context);
    } else if (this.bitwiseValue !== null) {
      value = this.bitwiseValue.evaluate(context);
    } else if (this.bracketedValue !== null) {
      value = this.bracketedValue.evaluate(context);
    }

    return value;
  }

  isEqualTo(value) {
    let equalTo;

    if (false) {
      ///
    } else if (this.node !== null) {
      const node = value.getNode();

      if (node === null) {
        equalTo = false;
      } else {
        const nodeA = this.node,  ///
              nodeB = node, ///
              nodeMatches = matchNode(nodeA, nodeB);

        equalTo = nodeMatches;  ///
      }
    } else if (this.nodes !== null) {
      const nodes = value.getNode();

      if (nodes === null) {
        equalTo = false;
      } else {
        const nodesA = this.nodes,  ///
              nodesB = nodes, ///
              nodesMatch = matchNodes(nodesA, nodesB);

        equalTo = nodesMatch; ///
      }
    } else if (this.number !== null) {
      const number = value.getNumber();

      equalTo = (this.number === number);
    } else if (this.string !== null) {
      const string = value.getString();

      equalTo = (this.string === string);
    } else if (this.boolean !== null) {
      const boolean = value.getBoolean();

      equalTo = (this.boolean === boolean);
    } else {
      debugger
    }

    return equalTo;
  }

  static name = "Value";

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
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);

    return value;
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
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);

    return value;
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
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);

    return value;
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
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);

    return value;
  }

  static fromValueNode(valueNode, context) {
    const value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromReduceNode(reduceNode, context) {
    const reduceValueNode = reduceValueNodeQuery(reduceNode),
          valueNode = reduceValueNode, ///
          value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromTernaryNode(ternaryNode, context) {
    const ternaryValueNode = ternaryValueNodeQuery(ternaryNode),
          valueNode = ternaryValueNode, ///
          value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromReturnStatementNode(returnStatementNode, context) {
    const returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode),
          valueNode = returnStatementValueNode, ///
          value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromVariableAssignmentNode(variableAssigmentNode, context) {
    const variableAssignmentValueNode = variableAssignmentValueNodeQuery(variableAssigmentNode),
          valueNode = variableAssignmentValueNode,  ///
          value = valueFromValueNode(valueNode, context);

    return value;
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

function valueFromValueNode(valueNode, context) {
  const { Some, Every, Reduce, Value, Ternary, Variable, NodeQuery, NodesQuery, Comparison, ReturnBlock, ProcedureCall, NegatedValue, BitwiseValue, BracketedValue } = dom,
        node = nodeFromValueNode(valueNode, context),
        nodes = nodesFromValueNode(valueNode, context),
        number = numberFromValueNode(valueNode, context),
        string = stringFromValueNode(valueNode, context),
        boolean = booleanFromValueNode(valueNode, context),
        some = Some.fromValueNode(valueNode, context),
        every = Every.fromValueNode(valueNode, context),
        reduce = Reduce.fromValueNode(valueNode, context),
        ternary = Ternary.fromValueNode(valueNode, context),
        variable = Variable.fromValueNode(valueNode, context),
        nodeQuery = NodeQuery.fromValueNode(valueNode, context),
        nodesQuery = NodesQuery.fromValueNode(valueNode, context),
        comparison = Comparison.fromValueNode(valueNode, context),
        returnBlock = ReturnBlock.fromValueNode(valueNode, context),
        procedureCall = ProcedureCall.fromValueNode(valueNode, context),
        negatedValue = NegatedValue.fromValueNode(valueNode, context),
        bitwiseValue = BitwiseValue.fromValueNode(valueNode, context),
        bracketedValue = BracketedValue.fromValueNode(valueNode, context),
        value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);

  return value;
}

function nodeFromValueNode(valueNode, context) {
  let node = null;

  const primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);

  if (primitiveTerminalNode !== null) {
    const primitiveTerminalNodeContent = primitiveTerminalNode.getContent();

    switch (primitiveTerminalNodeContent) {
      case NULL: {
        node = nullNode;

        break;
      }
    }
  }

  return node;
}

function nodesFromValueNode(valueNode, context) {
  const nodes = null;  ///

  return nodes;
}

function numberFromValueNode(valueNode, context) {
  let number = null;

  const numberTerminalNode = numberTerminalNodeQuery(valueNode);

  if (numberTerminalNode !== null) {
    const numberTerminalNodeContent = numberTerminalNode.getContent();

    number = Number(numberTerminalNodeContent);
  }

  return number;
}

function stringFromValueNode(valueNode, context) {
  let string = null;

  const stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);

  if (stringLiteralTerminalNode !== null) {
    const stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(),
          stringLiteral = stringLiteralTerminalNodeContent; ///

    string = stringFromStringLiteral(stringLiteral, context);
  }

  return string;
}

function booleanFromValueNode(valueNode, context) {
  let boolean = null;

  const primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);

  if (primitiveTerminalNode !== null) {
    const primitiveTerminalNodeContent = primitiveTerminalNode.getContent();

    switch (primitiveTerminalNodeContent) {
      case TRUE: {
        boolean = true;

        break;
      }

      case FALSE: {
        boolean = false;

        break;
      }
    }
  }

  return boolean;
}

function stringFromStringLiteral(stringLiteral, context) {
  const string = stringLiteral.replace(/(^"|"$)/g, EMPTY_STRING);

  return string;
}
