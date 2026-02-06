"use strict";

const { arrayUtilities } = require("necessary"),
      { filePathUtilities } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index"); ///

const NominalFileContext = require("../context/file/nominal");

const { LEVELS, BREAK_MESSAGE} = require("../constants"),
      { nominalLexer, nominalParser } = require("../helpers/grammar");

const { push, resolve } = arrayUtilities,
      { isFilePathFurtleFilePath, isFilePathNominalFilePath } = filePathUtilities,
      [ TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL ] = LEVELS;

class ReleaseContext {
  constructor(log, entries, callback, fileContexts) {
    this.log = log;
    this.entries = entries;
    this.callback = callback;
    this.fileContexts = fileContexts;
  }

  getLog() {
    return this.log;
  }

  getEntries() {
    return this.entries;
  }

  getCallback() {
    return this.callback;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getReleaseContext() {
    const releaseContext = this;  ///

    return releaseContext;
  }

  getLexer() {
    const lexer = nominalLexer; ///

    return lexer;
  }

  getParser() {
    const parser = nominalParser; ///

    return parser;
  }

  getProcedures() {
    const procedures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextProcedures = fileContext.getProcedures(includeRelease);

      push(procedures, fileContextProcedures);
    });

    return procedures;
  }

  findFile(filePath) { return this.entries.findFile(filePath); }

  findFileContext(filePath) {
    const fileContext = this.fileContexts.find(((fileContext) => {
      const filePathMatches = fileContext.matchFilePath(filePath);

      if (filePathMatches) {
        return true;
      }
    })) || null;

    return fileContext;
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

  trace(message) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message);
  }

  debug(message) {
    const level = DEBUG_LEVEL;

    this.writeToLog(level, message);
  }

  info(message) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message);
  }

  warning(message) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message);
  }

  error(message) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message);
  }

  writeToLog(level, message, filePath = null, lineIndex = null) {
    this.log.write(level, message, filePath, lineIndex);
  }

  getDepth() {
    const depth = 0;

    return depth;
  }

  initialise() {
    const releaseContext = this;  ///

    fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);

    this.initialised = true;
  }

  async verify() {
    let verifies = false;

    const verifiedFileContexts = [],
          fileContextsVerify = verifyFileContexts(this.fileContexts, verifiedFileContexts);

    if (fileContextsVerify) {
      this.fileContexts = verifiedFileContexts; ///

      this.verified = true;

      verifies = true;
    }

    return verifies;
  }

  async break(filePath, lineIndex) {
    const level = TRACE_LEVEL,
          message = BREAK_MESSAGE;

    this.writeToLog(level, message, filePath, lineIndex);

    const context = this; ///

    await this.callback(context, filePath, lineIndex);
  }

  static fromLogEntriesAndCallback(log, entries, callback) {
    const fileContexts = [],
          releaseContext = new ReleaseContext(log, entries, callback, fileContexts);

    return releaseContext;
  }
}

module.exports = ReleaseContext;

function verifyFileContexts(fileContexts, verifiedFileContexts) {
  const resolved = resolve(fileContexts, verifiedFileContexts, (fileContext) => {
          const fileContextVerifies = fileContext.verify();

          if (fileContextVerifies) {
            return true;
          }
        }),
        fileContextsVerify = resolved;  ///

  return fileContextsVerify;
}

function fileContextsFromEntries(entries, fileContexts, releaseContext) {
  entries.forEachFile((file) => {
    const filePath = file.getPath(),
          filePathFurtleFilePath = isFilePathFurtleFilePath(filePath),
          filePathNominalFilePath = isFilePathNominalFilePath(filePath);

    if (filePathFurtleFilePath) {
      const furtleFileContext = FurtleFileContext.fromFile(file, releaseContext),
            fileContext = furtleFileContext;  ///

      fileContexts.push(fileContext);
    }

    if (filePathNominalFilePath) {
      const context = releaseContext, ///
            fileContext = NominalFileContext.fromFile(file, context);

      fileContexts.push(fileContext);
    }
  });
}
