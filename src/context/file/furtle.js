"use strict";

import { FileContext } from "occam-languages";
import { queryUtilities } from "occam-query";

import { isolate } from "../../utilities/context";
import { verifyFile } from "../../process/verify";
import { furtleLexer, furtleParser } from "../../utilities/furtle";
import {
  proceduresFromJSON,
  importBindingsFromJSON,
  proceduresToProceduresJSON,
  importBindingsToImportBindingsJSON
} from "../../utilities/json";
import procedure from "../../element/procedure";

const { nodesQuery } = queryUtilities;

const procedureNodesQuery = nodesQuery("/document/procedure");

export default class FurtleFileContext extends FileContext {
  constructor(context, fileContent, filePath, tokens, node, json, lexer, parser, procedures, importBindings) {
    super(context, fileContent, filePath, tokens, node, json);

    this.lexer = lexer;
    this.parser = parser;
    this.procedures = procedures;
    this.importBindings = importBindings;
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

  getImportBindings() {
    return this.importBindings;
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

  addImportBinding(importBinding) {
    const importBindingString = importBinding.getString();

    this.importBindings.push(importBinding);

    const filePath = this.getFilePath();

    this.debug(`Added the '${importBindingString}' import binding to the '${filePath}' file context.`);
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

  findImportedProcedureByProcedureName(procedureName) {
    let importedProcedure = null;

    this.importBindings.some((importBinding) => {
      const lablledProcedureName = procedureName; ///

      const labelledProcedureNameClmpares = importBinding.compareLablledProcedureName(lablledProcedureName);

      if (labelledProcedureNameClmpares) {
        const referencedProcedureName = importBinding.getReferencedProcedureName();

        procedureName = referencedProcedureName;  ///

        const procedure = this.findProcedureByProcedureName(procedureName);

        importedProcedure = procedure;  ///

        return true;
      }
    });

    return importedProcedure;
  }

  findImportBindingByLabelledProcedureName(labelledProcedureName) {
    const importBinding = this.importBindings.find((importBinding) => {
            const labelledProcedureNameCompares = importBinding.compareLablledProcedureName(labelledProcedureName);

            if (labelledProcedureNameCompares) {
              return true;
            }
          }) || null;

    return importBinding;
  }

  isProcedurePresentByProcedureName(procedureName) {
    const procedure = this.findProcedureByProcedureName(procedureName),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  isImportedProcedurePresentByProcedureName(procedureName) {
    const importedProceudre = this.findImportedProcedureByProcedureName(procedureName),
          importedProceudrePresent = (importedProceudre !== null);

    return importedProceudrePresent;
  }

  isImportBindingPresentByLabelledProcedureName(labelledProcedureName) {
    const importBinding = this.findImportBindingByLabelledProcedureName(labelledProcedureName),
          importBindingPresent = (importBinding !== null);

    return importBindingPresent;
  }

  compareReleaseName(releaseName) { return this.context.compareReleaseName(releaseName); }

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

      this.importBindings = importBindingsFromJSON(json, fileContext);
    }
  }

  verifyFile(forward, back) {
    return isolate((forward, back) => {
      const node = this.getNode(),
            context = this, ///
            fileNode = node;  ///

      return verifyFile(fileNode, context, forward, back);
    }, forward, back);
  }

  toJSON() {
    let json;

    const filePath = this.getFilePath(),
          fileContent = this.getFileContent(),
          proceduresJSON = proceduresToProceduresJSON(this.procedures),
          importBindingsJSON = importBindingsToImportBindingsJSON(this.importBindings),
          procedures = proceduresJSON,  ///
          importBindings = importBindingsJSON;

    json = {
      filePath,
      fileContent,
      procedures,
      importBindings
    };

    return json;
  }

  static fromFile(file, context) {
    const lexer = furtleLexer,  ///
          parser = furtleParser,  ///
          procedures = [],
          importBindings = [],
          furtleFileContext = FileContext.fromFile(FurtleFileContext, file, lexer, parser, procedures, importBindings, context);

    return furtleFileContext;
  }

  static fromJSON(json, context) {
    const lexer = furtleLexer,  ///
          parser = furtleParser,  ///
          procedures = null,
          importBindings = null,
          furtleFileContext = FileContext.fromJSON(FurtleFileContext, json, lexer, parser, procedures, importBindings, context);

    return furtleFileContext;
  }
}
