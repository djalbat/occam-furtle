"use strict";

import { define } from "../elements";

export default define(class Expression {
  constructor(string, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall) {
    this.string = string;
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

  getString() {
    return this.string;
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

  evaluate(context) {
    let term;

    if (false) {
      ///
    } else if (this.term !== null) {
      term = this.term.evaluate(context);
    } else if (this.some !== null) {
      term = this.some.evaluate(context);
    } else if (this.every !== null) {
      term = this.every.evaluate(context);
    } else if (this.reduce !== null) {
      term = this.reduce.evaluate(context);
    } else if (this.ternary !== null) {
      term = this.ternary.evaluate(context);
    } else if (this.nodeQuery !== null) {
      term = this.nodeQuery.evaluate(context);
    } else if (this.nodesQuery !== null) {
      term = this.nodesQuery.evaluate(context);
    } else if (this.returnBlock !== null) {
      term = this.returnBlock.evaluate(context);
    } else if (this.procedureCall !== null) {
      term = this.procedureCall.evaluate(context);
    }

    return term;
  }

  static name = "Expression";
});
