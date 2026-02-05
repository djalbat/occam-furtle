"use strict";

const { arrayUtilities } = require("necessary"),
      { filePathUtilities } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index");  ///

const NominalFileContext = require("../context/file/nominal");

const { nominalLexer, nominalParser } = require("../helpers/grammar");

const { resolve } = arrayUtilities,
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

  getLexer() {
    const lexer = nominalLexer; ///

    return lexer;
  }

  getParser() {
    const parser = nominalParser; ///

    return parser;
  }

  findFile(filePath) { return this.entries.findFile(filePath); }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  writeToLog(level, message, filePath, lineIndex) {
    this.log.write(level, message, filePath, lineIndex);
  }

  getDepth() {
    const depth = -1;

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
