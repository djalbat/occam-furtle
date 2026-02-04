"use strict";

import { arrayUtilities } from "necessary";

import FileContext from "../../context/file";

import { verifyFile } from "../../process/verify";
import { chainContext } from "../../utilities/context";
import { furtleLexer, furtleParser } from "../../utilities/furtle";

const { push } = arrayUtilities;

export default class FurtleFileContext extends FileContext {
  constructor(context, filePath, tokens, node, procedures) {
    super(context, filePath, tokens, node);

    this.procedures = procedures;

    return chainContext(this);
  }

  getProcedures(includeRelease = true) {
    const procedures = [];

    push(procedures, this.procedures);

    if (includeRelease) {
      const releaseContextProcedures = this.context.getProcedures();

      push(procedures, releaseContextProcedures);
    }

    return procedures;
  }

  getLabels(includeRelease = true) {
    const labels = [];

    return labels;
  }

  getTypes(includeRelease = true) {
    const types = [];

    return types;
  }

  getRules(includeRelease = true) {
    const rules = []

    return rules;
  }

  getAxioms(includeRelease = true) {
    const axioms = [];

    return axioms;
  }

  getLemmas(includeRelease = true) {
    const lemmas = [];

    return lemmas;
  }

  getTheorems(includeRelease = true) {
    const theorems = [];

    return theorems;
  }

  getMetaLemmas(includeRelease = true) {
    const metaLemmas = [];

    return metaLemmas;
  }

  getConjectures(includeRelease = true) {
    const conjectures = [];

    return conjectures;
  }

  getCombinators(includeRelease = true) {
    const combinators = [];

    return combinators;
  }

  getTypePrefixes(includeRelease = true) {
    const typePrefixes = [];

    return typePrefixes;
  }

  getConstructors(includeRelease = true) {
    const constructors = [];

    return constructors;
  }

  getMetatheorems(includeRelease = true) {
    const metatheorems = [];

    return metatheorems;
  }

  getVariables() {
    const variables = [];

    return variables;
  }

  getMetavariables() {
    const metavariables = [];

    return metavariables;
  }

  addProcedure(procedure) {
    const procedureString = procedure.getString();

    this.procedures.push(procedure);

    this.debug(`Added the '${procedureString}' procedure to the context.`);
  }

  static fromFile(file, context) {
    const procedures = [],
          furtleFileContext = FileContext.fromFile(FurtleFileContext, file, procedures, context);

    return furtleFileContext;
  }

  static fromFilePath(filePath, context) {
    const procedures = null,
          furtleFileContext = ileContext.fromFilePath(FurtleFileContext, filePath, procedures, context);

    return furtleFileContext;
  }
}
