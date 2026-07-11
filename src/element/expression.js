"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Expression extends Element {
  constructor(context, string, node, breakPoint, term, some, every, reduce, ternary, nodeQuery, nodesQuery, lengthOf, toInteger, tryInteger, contains, endsWith, startsWith, returnBlock, procedureCall) {
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
    this.contains = contains;
    this.endsWith = endsWith;
    this.startsWith = startsWith;
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

  getContains() {
    return this.contains;
  }

  getEndsWith() {
    return this.endsWith;
  }

  getStartsWith() {
    return this.startsWith;
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
    } else if (this.contains !== null) {
      type = this.contains.getType();
    } else if (this.endsWith !== null) {
      type = this.endsWith.getType();
    } else if (this.startsWith !== null) {
      type = this.startsWith.getType();
    } else if (this.returnBlock !== null) {
      type = this.returnBlock.getType();
    } else if (this.procedureCall !== null) {
      type = this.procedureCall.getType();
    }

    return type;
  }

  evaluate(context, continuation) {
    let value = null;

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
    } else if (this.contains !== null) {
      value = this.contains.evaluate(context);
    } else if (this.endsWith !== null) {
      value = this.endsWith.evaluate(context);
    } else if (this.startsWith !== null) {
      value = this.startsWith.evaluate(context);
    }

    if (value !== null) {
      return continuation(value);
    }

    if (false) {
      ///
    } else if (this.some !== null) {
      this.some.evaluate(context, continuation);
    } else if (this.every !== null) {
       this.every.evaluate(context, continuation);
    } else if (this.reduce !== null) {
      this.reduce.evaluate(context, continuation);
    } else if (this.ternary !== null) {
      this.ternary.evaluate(context, continuation);
    } else if (this.returnBlock !== null) {
      const variables = [];

      this.returnBlock.evaluate(variables, context, continuation);
    } else if (this.procedureCall !== null) {
      this.procedureCall.evaluate(context, continuation);
    }
  }

  static name = "Expression";
});
