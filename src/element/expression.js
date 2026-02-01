"use strict";

import { define } from "../elements";

export default define(class Expression {
  constructor(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
    this.string = string;
    this.primitive = primitive;
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

  getPrimitive() {
    return this.primitive;
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

  getNode() { return this.primitive.getNode(); }

  getNodes() { return this.primitive.getNodes(); }

  getNumber() { return this.primitive.getNumber(); }

  getBoolean() { return this.primitive.getBoolean(); }

  getStringLiteral() { return this.primitive.getStringLiteral(); }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.primitive !== null) {
      type = this.primitive.getType();
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
    } else if (this.primitive !== null) {
      expression = this.primitive.evaluate(context);
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
    const primitive = expression.getPrimitive(),
          equalTo = this.primitive.isEqualTo(primitive);

    return equalTo;
  }

  static name = "Expression";
});
