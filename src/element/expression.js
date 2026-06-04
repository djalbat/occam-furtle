"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Expression extends Element {
  constructor(context, string, node, breakPoint, term, some, every, reduce, ternary, nodeQuery, nodesQuery, lengthOf, toInteger, tryInteger, returnBlock, procedureCall) {
    super(context, string, node, breakPoint);

    this.term = term;
    this.some = some;
    this.every = every;
    this.reduce = reduce;
    this.ternary = ternary;
    this.nodeQuery = nodeQuery;
    this.nodesQuery = nodesQuery;
    this.lengthOf = lengthOf;
    this.toInteger = toInteger;
    this.tryInteger = tryInteger;
    this.returnBlock = returnBlock;
    this.procedureCall = procedureCall;
  }

  getTerm() {
    return this.term;
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

  getNodeQuery() {
    return this.nodeQuery;
  }

  getNodesQuery() {
    return this.nodesQuery;
  }

  getLengthOf() {
    return this.lengthOf;
  }

  getToInteger() {
    return this.toInteger;
  }

  getTryInteger() {
    return this.tryInteger;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.term !== null) {
      type = this.term.getType();
    } else if (this.some !== null) {
      type = this.some.getType();
    } else if (this.every !== null) {
      type = this.every.getType();
    } else if (this.reduce !== null) {
      type = this.reduce.getType();
    } else if (this.ternary !== null) {
      type = this.ternary.getType();
    } else if (this.nodeQuery !== null) {
      type = this.nodeQuery.getType();
    } else if (this.nodesQuery !== null) {
      type = this.nodesQuery.getType();
    } else if (this.lengthOf !== null) {
      type = this.lengthOf.getType();
    } else if (this.toInteger !== null) {
      type = this.toInteger.getType();
    } else if (this.tryInteger !== null) {
      type = this.tryInteger.getType();
    } else if (this.returnBlock !== null) {
      type = this.returnBlock.getType();
    } else if (this.procedureCall !== null) {
      type = this.procedureCall.getType();
    }

    return type;
  }

  async evaluate(context) {
    let value;

    if (false) {
      ///
    } else if (this.term !== null) {
      value = this.term.evaluate(context);
    } else if (this.nodeQuery !== null) {
      value = this.nodeQuery.evaluate(context);
    } else if (this.nodesQuery !== null) {
      value = this.nodesQuery.evaluate(context);
    } else if (this.lengthOf !== null) {
      value = this.lengthOf.evaluate(context);
    } else if (this.toInteger !== null) {
      value = this.toInteger.evaluate(context);
    } else if (this.tryInteger !== null) {
      value = this.tryInteger.evaluate(context);
    } else if (this.some !== null) {
      value = await this.some.evaluate(context);
    } else if (this.every !== null) {
      value = await  this.every.evaluate(context);
    } else if (this.reduce !== null) {
      value = await this.reduce.evaluate(context);
    } else if (this.ternary !== null) {
      value = await this.ternary.evaluate(context);
    } else if (this.returnBlock !== null) {
      value = await this.returnBlock.evaluate(context);
    } else if (this.procedureCall !== null) {
      value = await this.procedureCall.evaluate(context);
    }

    return value;
  }

  static name = "Expression";
});
