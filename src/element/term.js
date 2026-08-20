"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Term extends Element {
  constructor(context, string, node, breakPoint, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.primitive = primitive;
    this.negatedTerm = negatedTerm;
    this.logicalTerm = logicalTerm;
    this.bracketedTerm = bracketedTerm;
    this.comparisonTerm = comparisonTerm;
  }

  getVariable() {
    return this.variable;
  }

  getPrimitive() {
    return this.primitive;
  }

  getNegatedTerm() {
    return this.negatedTerm;
  }

  getLogicalTerm() {
    return this.logicalTerm;
  }

  getBreedingTerm() {
    return this.bracketedTerm;
  }

  getComparisonTerm() {
    return this.comparisonTerm;
  }

  getPrimitiveValue() {
    const primitiveValue = this.primitive.getValue();

    return primitiveValue;
  }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.variable !== null) {
      type = this.variable.getType();
    } else if (this.primitive !== null) {
      type = this.primitive.getType();
    } else if (this.negatedTerm !== null) {
      type = this.negatedTerm.getType();
    } else if (this.logicalTerm !== null) {
      type = this.logicalTerm.getType();
    } else if (this.bracketedTerm !== null) {
      type = this.bracketedTerm.getType();
    } else if (this.comparisonTerm !== null) {
      type = this.comparisonTerm.getType();
    }

    return type;
  }

  isBoolean() {
    const type = this.getType(),
          booleanType = type.isBooleanType(),
          boolean = booleanType;  ///

    return boolean;
  }

  evaluate(context, back, forward) {
    if (false) {
      ///
    } else if (this.variable !== null) {
      return this.variable.evaluate(context, back, forward);
    } else if (this.primitive !== null) {
      return this.primitive.evaluate(context, back, forward);
    } else if (this.negatedTerm !== null) {
      return this.negatedTerm.evaluate(context, back, forward);
    } else if (this.logicalTerm !== null) {
      return this.logicalTerm.evaluate(context, back, forward);
    } else if (this.bracketedTerm !== null) {
      return this.bracketedTerm.evaluate(context, back, forward);
    } else if (this.comparisonTerm !== null) {
      return this.comparisonTerm.evaluate(context, back, forward);
    }
  }

  isEqualTo(term) {
    let equalTo = false;

    if (false) {
      ///
    } else if (this.variable !== null) {
      const variable = term.getVariable();

      if (variable !== null) {
        equalTo = this.variable.isEqualTo(variable);
      }
    } else if (this.primitive !== null) {
      const primitive = term.getPrimitive();

      if (primitive !== null) {
        equalTo = this.primitive.isEqualTo(primitive);
      }
    }

    return equalTo;
  }

  static name = "Term";

  static fromPrimitive(primitive, context) {
    const primitiveString = primitive.getString(),
          string = primitiveString, ///
          node = null,
          breakPoint = null,
          variable = null,
          negatedTerm = null,
          logicalTerm = null,
          bracketedTerm = null,
          comparisonTerm = null;

    context = null;

    const term = new Term(context, string, node, breakPoint, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);

    return term;
  }
});
