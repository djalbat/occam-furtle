"use strict";

import { FileContext } from "occam-languages";

import { verifyFile } from "../../process/verify";
import { furtleLexer, furtleParser } from "../../utilities/furtle";

export default class FurtleFileContext extends FileContext {
  constructor(context, fileContent, filePath, tokens, node, lexer, parser, procedures) {
    super(context, fileContent, filePath, tokens, node);

    this.lexer = lexer;
    this.parser = parser;
    this.procedures = procedures;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getProcedures(includeRelease = true) {
    const procedures = includeRelease ?
                         this.context.getProcedures() :
                           this.procedures;

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

    const filePath = this.getFilePath();

    this.debug(`Added the '${procedureString}' procedure to the '${filePath}' file context.`);
  }

  findProcedureByProcedureName(procedureName) {
    const procedures = this.getProcedures(),
          procedure = procedures.find((procedure) => {
            const procedureComparesToProcedureName = procedure.compareProcedureName(procedureName);

            if (procedureComparesToProcedureName) {
              return true;
            }
          }) || null;

    return procedure;
  }

  isProcedurePresentByProcedureName(procedureName) {
    const procedure = this.findProcedureByProcedureName(procedureName),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  clear() {
    this.procedures = [];
  }

  complete() {
    ///
  }

  initialise(json) {
    this.prepare();

    this.procedures = [];

    const node = this.getNode(),
          context = this, ///
          fileNode = node;  ///

    verifyFile(fileNode, context);
  }

  async verifyFile() {
    const node = this.getNode(),
          context = this, ///
          fileNode = node,  ///
          fileVerifies = verifyFile(fileNode, context);

    return fileVerifies;
  }

  toJSON() {
    const filePath = this.getFilePath(),
          fileContent = this.getFileContent(),
          json = {
            filePath,
            fileContent,
          };

    return json;
  }

  static fromFile(file, context) {
    const lexer = furtleLexer,  ///
          parser = furtleParser,  ///
          procedures = [],
          furtleFileContext = FileContext.fromFile(FurtleFileContext, file, lexer, parser, procedures, context);

    return furtleFileContext;
  }

  static fromJSON(json, context) {
    const lexer = furtleLexer,  ///
          parser = furtleParser,  ///
          procedures = null,
          furtleFileContext = FileContext.fromJSON(FurtleFileContext, json, lexer, parser, procedures, context);

    furtleFileContext.initialise(json);

    return furtleFileContext;
  }
}
