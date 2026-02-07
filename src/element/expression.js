"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Expression extends Element {
  constructor(context, string, node, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall) {
    super(context, string, node)

    this.term = term;
    this.some = some;
    this.every = every;
    this.reduce = reduce;
    this.ternary = ternary;
    this.nodeQuery = nodeQuery;
    this.nodesQuery = nodesQuery;
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
    } else if (this.returnBlock !== null) {
      type = this.returnBlock.getType();
    } else if (this.procedureCall !== null) {
      type = this.procedureCall.getType();
    }

    return type;
  }

  async evaluate(context) {
    let term;

    if (false) {
      ///
    } else if (this.term !== null) {
      term = this.term.evaluate(context);
    } else if (this.nodeQuery !== null) {
      term = this.nodeQuery.evaluate(context);
    } else if (this.nodesQuery !== null) {
      term = this.nodesQuery.evaluate(context);
    } else if (this.some !== null) {
      term = await this.some.evaluate(context);
    } else if (this.every !== null) {
      term = await  this.every.evaluate(context);
    } else if (this.reduce !== null) {
      term = await this.reduce.evaluate(context);
    } else if (this.ternary !== null) {
      term = await this.ternary.evaluate(context);
    } else if (this.returnBlock !== null) {
      term = await this.returnBlock.evaluate(context);
    } else if (this.procedureCall !== null) {
      term = await this.procedureCall.evaluate(context);
    }

    return term;
  }

  static name = "Expression";
});
