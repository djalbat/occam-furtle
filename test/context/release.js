"use strict";

const { arrayUtilities } = require("necessary"),
      { filePathUtilities } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index");  ///

const NominalFileContext = require("../context/file/nominal");

const { nominalLexer, nominalParser } = require("../helpers/grammar");

const { push, resolve } = arrayUtilities,
      { isFilePathFurtleFilePath, isFilePathNominalFilePath } = filePathUtilities;

class ReleaseContext {
  constructor(log, entries, fileContexts) {
    this.log = log;
    this.entries = entries;
    this.fileContexts = fileContexts;
  }

  getLog() {
    return log;
  }

  getEntries() {
    return entries;
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

  verify() {
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

  static fromLogAndEntries(log, entries) {
    const fileContexts = [],
          releaseContext = new ReleaseContext(log, entries, fileContexts);

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
