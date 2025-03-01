"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import nullNode from "../nullNode";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NULL, TRUE, FALSE, EMPTY_STRING } from "../constants";
import { NODE_TYPE, NODES_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";

const { match } = arrayUtilities;

const ternaryValueNodeQuery = nodeQuery("/ternary/value"),
      numberTerminalNodeQuery = nodeQuery("/value/@number"),
      conditionValueNodeQuery = nodeQuery("/condition/value"),
      primitiveTerminalNodeQuery = nodeQuery("/value/@primitive"),
      returnStatementValueNodeQuery = nodeQuery("/returnStatement/value"),
      stringLiteralTerminalNodeQuery = nodeQuery("/value/@string-literal"),
      conditionalBlocksCValueNodeQuery = nodeQuery("/conditionalBlocks/value"),
      variableAssignmentValueNodeQuery = nodeQuery("/variableAssignment/value");

export default domAssigned(class Value {
  constructor(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall) {
    this.node = node;
    this.nodes = nodes;
    this.number = number;
    this.string = string;
    this.boolean = boolean;
    this.some = some;
    this.ternary = ternary;
    this.variable = variable;
    this.nodeQuery = nodeQuery;
    this.nodesQuery = nodesQuery;
    this.comparison = comparison;
    this.negatedValue = negatedValue;
    this.bitwiseValue = bitwiseValue;
    this.bracketedValue = bracketedValue;
    this.procedureCall = procedureCall;
    this.anonymousProcedureCall = anonymousProcedureCall;
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

  getNegatedValue() {
    return this.negatedValue;
  }

  getBitwiseValue() {
    return this.bitwiseValue;
  }

  getBracketedValue() {
    return this.bracketedValue;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  getAnonymousProcedureCall() {
    return this.anonymousProcedureCall;
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
    } else if (this.negatedValue !== null) {
      type = this.negatedValue.getType();
    } else if (this.bitwiseValue !== null) {
      type = this.bitwiseValue.getType();
    } else if (this.bracketedValue !== null) {
      type = this.bracketedValue.getType();
    } else if (this.procedureCall !== null) {
      type = this.procedureCall.getType();
    } else if (this.anonymousProcedureCall !== null) {
      type = this.anonymousProcedureCall.getType();
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
      string = numberAsString(this.number, context);
    } else if (this.string !== null) {
      string = stringAsString(this.string, context)
    } else if (this.boolean !== null) {
      string = booleanAsString(this.boolean, context)
    } else if (this.some !== null) {
      string = this.some.asString(context);
    } else if (this.ternary !== null) {
      string = this.ternary.asString(context);
    } else if (this.variable !== null) {
      string = this.variable.asString(context);
    } else if (this.nodeQuery !== null) {
      string = this.nodeQuery.asString(context);
    } else if (this.nodesQuery !== null) {
      string = this.nodesQuery.asString(context);
    } else if (this.comparison !== null) {
      string = this.comparison.asString(context);
    } else if (this.negatedValue !== null) {
      string = this.negatedValue.asString(context);
    } else if (this.bitwiseValue !== null) {
      string = this.bitwiseValue.asString(context);
    } else if (this.bracketedValue !== null) {
      string = this.bracketedValue.asString(context);
    } else if (this.procedureCall !== null) {
      string = this.procedureCall.asString(context);
    } else if (this.anonymousProcedureCall !== null) {
      string = this.anonymousProcedureCall.asString(context);
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
    } else if (this.negatedValue !== null) {
      value = this.negatedValue.evaluate(context);
    } else if (this.bitwiseValue !== null) {
      value = this.bitwiseValue.evaluate(context);
    } else if (this.bracketedValue !== null) {
      value = this.bracketedValue.evaluate(context);
    } else if (this.procedureCall !== null) {
      value = this.procedureCall.evaluate(context);
    } else if (this.anonymousProcedureCall !== null) {
      value = this.anonymousProcedureCall.evaluate(context);
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
          ternary = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          procedureCall = null,
          anonymousProcedureCall = null,
          value = new Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);

    return value;
  }

  static fromNodes(nodes, context) {
    const node = null,
          number = null,
          string = null,
          boolean = null,
          ternary = null,
          some = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          procedureCall = null,
          anonymousProcedureCall = null,
          value = new Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);

    return value;
  }

  static fromString(string, context) {
    const node = null,
          nodes = null,
          number = null,
          boolean = null,
          some = null,
          ternary = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          procedureCall = null,
          anonymousProcedureCall = null,
          value = new Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);

    return value;
  }

  static fromBoolean(boolean, context) {
    const node = null,
          nodes = null,
          number = null,
          string = null,
          some = null,
          ternary = null,
          variable = null,
          nodeQuery = null,
          nodesQuery = null,
          comparison = null,
          negatedValue = null,
          bitwiseValue = null,
          bracketedValue = null,
          procedureCall = null,
          anonymousProcedureCall = null,
          value = new Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);

    return value;
  }

  static fromValueNode(valueNode, context) {
    const value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromTernaryNode(ternaryNode, context) {
    const ternaryValueNode = ternaryValueNodeQuery(ternaryNode),
          valueNode = ternaryValueNode, ///
          value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromConditionNode(conditionNode, context) {
    let value = null;

    const conditionValueNode = conditionValueNodeQuery(conditionNode);

    if (conditionValueNode !== null) {
      const valueNode = conditionValueNode; ///

      value = valueFromValueNode(valueNode, context);
    }

    return value;
  }

  static fromReturnStatementNode(returnStatementNode, context) {
    let value = null;

    const returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode);

    if (returnStatementValueNode !== null) {
      const valueNode = returnStatementValueNode; ///

      value = valueFromValueNode(valueNode, context);
    }

    return value;
  }

  static fromConditionalBlocksNode(conditionalBlocksNode, context) {
    const conditionalBlocksCValueNode = conditionalBlocksCValueNodeQuery(conditionalBlocksNode),
          valueNode = conditionalBlocksCValueNode,  ///
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

function numberAsString(number, context) {
  let string;

  string = `${number}`;

  return string;
}

function stringAsString(string, context) {
  string = `"${string}"`; ///

  return string;
}

function booleanAsString(boolean, context) {
  let string;

  string = `'${boolean}'`;

  return string;
}

function valueFromValueNode(valueNode, context) {
  const { Some, Value, Ternary, Variable, NodeQuery, NodesQuery, Comparison, NegatedValue, BitwiseValue, BracketedValue, ProcedureCall, AnonymousProcedureCall } = dom,
        node = nodeFromValueNode(valueNode, context),
        nodes = nodesFromValueNode(valueNode, context),
        number = numberFromValueNode(valueNode, context),
        string = stringFromValueNode(valueNode, context),
        boolean = booleanFromValueNode(valueNode, context),
        some = Some.fromValueNode(valueNode, context),
        ternary = Ternary.fromValueNode(valueNode, context),
        variable = Variable.fromValueNode(valueNode, context),
        nodeQuery = NodeQuery.fromValueNode(valueNode, context),
        nodesQuery = NodesQuery.fromValueNode(valueNode, context),
        comparison = Comparison.fromValueNode(valueNode, context),
        negatedValue = NegatedValue.fromValueNode(valueNode, context),
        bitwiseValue = BitwiseValue.fromValueNode(valueNode, context),
        bracketedValue = BracketedValue.fromValueNode(valueNode, context),
        procedureCall = ProcedureCall.fromValueNode(valueNode, context),
        anonymousProcedureCall = AnonymousProcedureCall.fromValueNode(valueNode, context),
        value = new Value(node, nodes, number, string, boolean, some, ternary, variable, nodeQuery, nodesQuery, comparison, negatedValue, bitwiseValue, bracketedValue, procedureCall, anonymousProcedureCall);

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
