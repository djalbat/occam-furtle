"use strict";

import { arrayUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-grammars";

import { verifyFile } from "../process/verify";
import { nodeAsString, nodesAsString } from "../utilities/string";
import { chainContext, lineIndexFromNodeAndTokens } from "../utilities/context";

const { push } = arrayUtilities,
      { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

export default class FileContext {
  constructor(context, filePath, lineIndex, node, tokens, procedures) {
    this.context = context;
    this.filePath = filePath;
    this.lineIndex = lineIndex;
    this.node = node;
    this.tokens = tokens;
    this.procedures = procedures;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getFilePath() {
    return this.filePath;
  }

  getLineIndex() {
    return this.lineIndex;
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
    const procedures = [];

    push(procedures, this.procedures);

    if (includeRelease) {
      const releaseContextProcedures = this.context.getProcedures();

      push(procedures, releaseContextProcedures);
    }

    return procedures;
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

  getVariables() {
    const variables = [];

    return variables;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  trace(message, node = null) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message, node);
  }

  debug(message, node = null) {
    const level = DEBUG_LEVEL;

    this.writeToLog(level, message, node);
  }

  info(message, node = null) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message, node);
  }

  warning(message, node = null) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message, node);
  }

  error(message, node = null) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message, node);
  }

  writeToLog(level, message, node) {
    const lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex),
          filePath = (lineIndex === null) ?
                       this.filePath :
                         null;

    this.context.writeToLog(level, message, filePath, lineIndex);

    this.lineIndex = lineIndex;
  }

  getFileContext() {
    const fileContext = this; ///

    return fileContext;
  }

  getDepth() {
    let depth = this.context.getDepth();

    depth++;

    return depth;
  }

  verify() {
    let verifies = false;

    this.prepare();

    if (this.node === null) {
      this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
    } else {
      this.debug(`Verifying the '${this.filePath}' file...`);

      const context = this, ///
            fileNode = this.node; ///

      verifies = verifyFile(fileNode, context);

      verifies ?
        this.complete() :
          this.clear();

      if (verifies) {
        this.info(`...verified the '${this.filePath}' file.`);
      }
    }

    return verifies;
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

  clear() {
    this.lineIndex = null;

    this.procedures = [];
  }

  complete() {
    this.lineIndex = null;
  }

  initialise(json) {
    const { content } = json,
          lexer = this.getLexer(),
          parser = this.getParser();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);

    this.clear();

    this.addProcedures();
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

  static fromFile(file, context) {
    const filePath = file.getPath(),
          lineIndex = null,
          tokens = null,
          node = null,
          procedures = [],
          fileContext = new FileContext(context, filePath, lineIndex, node, tokens, procedures);

    return fileContext;
  }

  static fromFilePath(filePath, context) {
    const lineIndex = null,
          tokens = null,
          node = null,
          procedures = null,
          fileContext = new FileContext(context, filePath, lineIndex, node, tokens, procedures);

    return fileContext;
  }
}
