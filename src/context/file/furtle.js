"use strict";

import { FileContext } from "occam-languages";
import { queryUtilities } from "occam-query";

import { verifyFile } from "../../process/verify";
import { furtleLexer, furtleParser } from "../../utilities/furtle";
import { proceduresFromJSON, proceduresToProceduresJSON } from "../../utilities/json";

const { nodesQuery } = queryUtilities;

const procedureNodesQuery = nodesQuery("/document/procedure");

export default class FurtleFileContext extends FileContext {
  constructor(context, fileContent, filePath, tokens, node, json, lexer, parser, procedures) {
    super(context, fileContent, filePath, tokens, node, json);

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

  getGenerators(includeRelease = true) {
    const generators = [];

    return generators;
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

  getProcedures(includeRelease = true) {
    const procedures = includeRelease ?
                         this.context.getProcedures() :
                           this.procedures;

    return procedures;
  }

  getVariables(nested = true) {
    const variables = [];

    return variables;
  }

  addProcedure(procedure) {
    const procedureString = procedure.getString();

    this.procedures.push(procedure);

    const filePath = this.getFilePath();

    this.debug(`Added the '${procedureString}' function to the '${filePath}' file context.`);
  }

  findProcedureNode(label) {
    const node = this.getNode(),
          labelNode = label.getNode(),
          documentNode = node,  ///
          procedureNodes = procedureNodesQuery(documentNode),
          procedureNode = procedureNodes.find((procedureNode) => {
            const labelMatches = procedureNode.matchLabelNode(labelNode);

            if (labelMatches) {
              return true;
            }
          }) || null;

    return procedureNode;
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

  initialise() {
    super.initialise(); ///

    const json = this.getJSON();

    if (json !== null) {
      const fileContext = this; ///

      this.procedures = proceduresFromJSON(json, fileContext);
    }
  }

  verifyFile(continuation) {
    const node = this.getNode(),
          context = this, ///
          fileNode = node;  ///

    verifyFile(fileNode, context, continuation);
  }

  toJSON() {
    const proceduresJSON = proceduresToProceduresJSON(this.procedures),
          fileContent = this.getFileContent(),
          filePath = this.getFilePath(),
          procedures = proceduresJSON,  ///
          json = {
            fileContent,
            filePath,
            procedures
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

    return furtleFileContext;
  }
}
