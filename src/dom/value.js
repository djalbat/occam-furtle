"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NULL, TRUE, FALSE, EMPTY_STRING } from "../constants";
import { NODE_TYPE, NODES_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";

const { match } = arrayUtilities;

const numberTerminalNodeQuery = nodeQuery("/value/@number"),
      conditionValueNodeQuery = nodeQuery("/condition/value"),
      assignmentValueNodeQuery = nodeQuery("/assignment/value"),
      primitiveTerminalNodeQuery = nodeQuery("/value/@primitive"),
      returnStatementValueNodeQuery = nodeQuery("/returnStatement/value"),
      stringLiteralTerminalNodeQuery = nodeQuery("/value/@string-literal");

export default domAssigned(class Value {
  constructor(node, nodes, number, string, boolean, variable) {
    this.node = node;
    this.nodes = nodes;
    this.number = number;
    this.string = string;
    this.boolean = boolean;
    this.variable = variable;
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

  getVariable() {
    return this.variable;
  }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.nodes !== null) {
      type = NODES_TYPE;
    } else if (this.number !== null) {
      type = NUMBER_TYPE;
    } else if (this.string !== null) {
      type = STRING_TYPE;
    } else if (this.boolean !== null) {
      type = BOOLEAN_TYPE;
    } else if (this.variable !== null) {
      type = this.variable.getType();
    } else {
      type = NODE_TYPE;
    }

    return type;
  }

  asString(context) {
    let string;

    if (false) {
      ///
    } else if (this.nodes !== null) {
      const nodesString = context.nodesAsString(this.nodes);

      string = `'${nodesString}'`;
    } else if (this.number !== null) {
      string = `${this.number}`;
    } else if (this.string !== null) {
      string = `"${this.string}"`;
    } else if (this.boolean !== null) {
      string = `'${this.boolean}'`;
    } else if (this.variable !== null) {
      string = null;
    } else {
      const nodeString  = (this.node === null) ?
                            NULL :
                              context.nodeAsString(this.node);

      string = `'${nodeString}'`;
    }

    return string;
  }

  evaluate(context) {
    const value = (this.variable !== null) ?
                     this.variable.evaluate(context) :
                       this; ///

    return value;
  }

  isEqualTo(value) {
    let equalTo;

    if (false) {
      ///
    } else if (this.nodes !== null) {
      const nodes = value.getNode(),
            nodesMatch = matchNodes(this.nodes, nodes);

      equalTo = nodesMatch;
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
      const node = value.getNode(),
            nodeMatches = matchNode(this.node, node);

      equalTo = nodeMatches;
    }

    return equalTo;
  }

  static name = "Value";

  static fromNode(node, context) {
    const nodes = null,
          number = null,
          string = null,
          boolean = null,
          variable = null,
          value = new Value(node, nodes, number, string, boolean, variable);

    return value;
  }

  static fromNodes(nodes, context) {
    const node = null,
          number = null,
          string = null,
          boolean = null,
          variable = null,
          value = new Value(node, nodes, number, string, boolean, variable);

    return value;
  }

  static fromString(string, context) {
    const node = null,
          nodes = null,
          number = null,
          boolean = null,
          variable = null,
          value = new Value(node, nodes, number, string, boolean, variable);

    return value;
  }

  static fromBoolean(boolean, context) {
    const node = null,
          nodes = null,
          number = null,
          string = null,
          variable = null,
          value = new Value(node, nodes, number, string, boolean, variable);

    return value;
  }

  static fromValueNode(valueNode, context) {
    const value = valueFromValueNode(valueNode, context);

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

  static fromAssignmentNode(assigmentNode, context) {
    let value = null;

    const assignmentValueNode = assignmentValueNodeQuery(assigmentNode);

    if (assignmentValueNode !== null) {
      const valueNode = assignmentValueNode;  ///

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
});

function matchNode(nodeA, nodeB) {
  let nodeMatches;

  if ((nodeA === null) || (nodeB === null)) {
    nodeMatches = (nodeA === nodeB);
  } else {
    const nodeAEqualToNodeA = nodeA.isEqualTo(nodeB);

    nodeMatches = nodeAEqualToNodeA;  ///
  }

  return nodeMatches;
}

function matchNodes(nodesA, nodesB) {
  let nodesMatch;

  if ((nodesA === null) || (nodesB === null)) {
    nodesMatch = (nodesA === nodesB);
  } else {
    nodesMatch = match(nodesA, nodesB, (nodeA, nodeB) => {
      const nodeMatches = matchNode(nodeA, nodeB);

      if (nodeMatches) {
        return true;
      }
    });
  }

  return nodesMatch;
}

function valueFromValueNode(valueNode, context) {
  const { Value, Variable } = dom,
        node = nodeFromValueNode(valueNode, context),
        nodes = nodesFromValueNode(valueNode, context),
        number = numberFromValueNode(valueNode, context),
        string = stringFromValueNode(valueNode, context),
        boolean = booleanFromValueNode(valueNode, context),
        variable = Variable.fromValueNode(valueNode, context),
        value = new Value(node, nodes, number, string, boolean, variable);

  return value;
}

function nodeFromValueNode(valueNode, context) {
  const node = null;  ///

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