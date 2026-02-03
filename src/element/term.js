"use strict";

import { define } from "../elements";

export default define(class Term {
  constructor(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm) {
    this.string = string;
    this.variable = variable;
    this.primitive = primitive;
    this.negatedTerm = negatedTerm;
    this.logicalTerm = logicalTerm;
    this.bracketedTerm = bracketedTerm;
    this.comparisonTerm = comparisonTerm;
  }

  getString() {
    return this.string;
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

  evaluate(context) {
    let term;

    if (false) {
      ///
    } else if (this.variable !== null) {
      term = this.variable.evaluate(context);
    } else if (this.primitive !== null) {
      term = this.primitive.evaluate(context);
    } else if (this.negatedTerm !== null) {
      term = this.negatedTerm.evaluate(context);
    } else if (this.logicalTerm !== null) {
      term = this.logicalTerm.evaluate(context);
    } else if (this.bracketedTerm !== null) {
      term = this.bracketedTerm.evaluate(context);
    } else if (this.comparisonTerm !== null) {
      term = this.comparisonTerm.evaluate(context);
    }

    return term;
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
          variable = null,
          negatedTerm = null,
          logicalTerm = null,
          bracketedTerm = null,
          comparisonTerm = null,
          term = new Term(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);

    return term;
  }
});
