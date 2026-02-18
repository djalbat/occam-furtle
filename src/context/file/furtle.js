"use strict";

import { FileContext } from "occam-languages";

import { verifyFile } from "../../process/verify";
import { furtleLexer, furtleParser } from "../../utilities/furtle";

export default class FurtleFileContext extends FileContext {
  constructor(context, filePath, tokens, node, procedures) {
    super(context, filePath, tokens, node);

    this.procedures = procedures;
  }

  getProcedures(includeRelease = true) {
    const procedures = includeRelease ?
                         this.context.getProcedures() :
                           this.procedures;

    return procedures;
  }

  getLexer() {
    const lexer = furtleLexer;  ///

    return lexer;
  }

  getParser() {
    const parser = furtleParser;  ///

    return parser;
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

  getVariables(includeRelease = true) {
    const variables = [];

    return variables;
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

  getMetavariables(includeRelease = true) {
    const metavariables = [];

    return metavariables;
  }

  addProcedure(procedure) {
    const procedureString = procedure.getString();

    this.procedures.push(procedure);

    this.debug(`Added the '${procedureString}' procedure to the context.`);
  }

  findProcedureByName(name) {
    const procedures = this.getProcedures(),
          procedure = procedures.find((procedure) => {
        const nameMatches = procedure.matchName(name);

        if (nameMatches) {
          return true;
        }
      }) || null;

    return procedure;
  }

  isProcedurePresentByName(name) {
    const procedure = this.findProcedureByName(name),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  clear() {
    this.procedures = [];
  }

  complete() {
    ///
  }

  async verifyFile() {
    const node = this.getNode(),
          context = this, ///
          fileNode = node,  ///
          fileVerifies = verifyFile(fileNode, context);

    return fileVerifies;
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
