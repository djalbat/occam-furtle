"use strict";

import { lexersUtilities, parsersUtilities } from "occam-grammars";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

const errorNodesQuery = nodesQuery("/document/error"),
      procedureDeclarationNodesQuery = nodesQuery("/document/procedureDeclaration");

export default class FileContext {
  constructor(releaseContext, filePath, node, tokens, procedures) {
    this.releaseContext = releaseContext;
    this.filePath = filePath;
    this.node = node;
    this.tokens = tokens;
    this.procedures = procedures;
  }

  getReleaseContext() {
    return this.releaseContext;
  }

  getFilePath() {
    return this.filePath;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getLexer() {
    const lexer = furtleLexer;  ///

    return lexer;
  }

  getParser() {
    const parser = furtleParser;  ///

    return parser;
  }

  getMetaTypes() { return this.releaseContext.getMetaTypes(); }

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

  getProcedures(includeRelease = true) {
    return this.procedures;
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

  getVariables() {
    const variables = [];

    return variables;
  }

  findFile(filePath) { return this.releaseContext.findFile(filePath); }

  findProcedureByReference(reference) {
    const procedures = this.getProcedures(),
          name = reference.getName(),
          procedure = procedures.find((procedure) => {
            const nameMatches = procedure.matchName(name);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return procedure;
  }

  addProcedures(node) {
    const context = this; ///

    const { ProcedureDeclaration } = dom,
          procedureDeclarationNodes = procedureDeclarationNodesQuery(node);

    procedureDeclarationNodes.forEach((procedureDeclarationNode) => {
      const procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, context),
            procedure = procedureDeclaration.getProcedure();

      this.procedures.push(procedure);
    });
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  trace(message) { this.releaseContext.trace(message, this.filePath); }

  debug(message) { this.releaseContext.debug(message, this.filePath); }

  info(message) { this.releaseContext.info(message, this.filePath); }

  warning(message) { this.releaseContext.warning(message, this.filePath); }

  error(message) { this.releaseContext.error(message, this.filePath); }

  verify() {
    let verified = false;

    this.debug(`Verifying the '${this.filePath}' file...`);

    this.prepare();

    if (this.node === null) {
      this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
    } else {
      const errorNodes = errorNodesQuery(this.node),
            errorNodesLength = errorNodes.length;

      if (errorNodesLength === 0) {
        this.addProcedures(this.node);

        verified = true;
      } else {
        this.warning(`The '${this.filePath}' file cannot be verified because there are errors.`);

        this.clear();
      }
    }

    if (verified) {
      this.info(`...verified the '${this.filePath}' file.`);
    }

    return verified;
  }

  clear() {
    this.procedures = [];
  }

  prepare() {
    if (this.tokens !== null) {
      return;
    }

    const file = this.findFile(this.filePath),
          lexer = this.getLexer(),
          parser = this.getParser(),
          content = file.getContent();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);
  }

  initialise(json) {
    const { content } = json,
          lexer = this.getLexer(),
          parser = this.getParser(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    this.clear();

    this.addProcedures(node);
  }

  toJSON() {
    const file = this.findFile(this.filePath),
          filePath = this.filePath, ///
          content = file.getContent(),
          json = {
            filePath,
            content
          };

    return json;
  }

  static fromFile(file, releaseContext) {
    const filePath = file.getPath(),
          tokens = null,
          node = null,
          procedures = [],
          fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);

    return fileContext;
  }

  static fromFilePathAndJSON(filePath, json, releaseContext) {
    const tokens = null,
          node = null,
          procedures = null,
          fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);

    fileContext.initialise(json);

    return fileContext;
  }
}
