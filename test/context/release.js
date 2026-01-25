"use strict";

const { arrayUtilities } =require("necessary");

const { Log, FileContext } =require("../../lib/index");  ///

const { LEVELS } =require("../helpers/constants");

const { push } = arrayUtilities,
      [ TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL ] = LEVELS;

class ReleaseContext {
  constructor(log, files, fileContexts) {
    this.log = log;
    this.files = files;
    this.fileContexts = fileContexts;
  }

  getLog() {
    return this.log;
  }

  getFiles() {
    return this.files;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  addFile(file) {
    this.files.push(file);
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  getProcedures(includeDependencies = true) {
    const procedures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextProcedures = fileContext.getProcedures(includeRelease);

      push(procedures, fileContextProcedures);
    });

    return procedures;
  }

  findFile(filePath) {
    const file = this.files.find((file) => {
      const filePathMatches = file.matchFilePath(filePath);

      if (filePathMatches) {
        return true;
      }
    }) || null;

    return file;
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

  trace(message, filePath = null, lineIndex = null) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message, filePath, lineIndex);
  }

  debug(message, filePath = null, lineIndex = null) {
    const level = DEBUG_LEVEL

    this.writeToLog(level, message, filePath, lineIndex);
  }

  info(message, filePath = null, lineIndex = null) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message, filePath, lineIndex);
  }

  warning(message, filePath = null, lineIndex = null) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message, filePath, lineIndex);
  }

  error(message, filePath = null, lineIndex = null) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message, filePath, lineIndex);
  }

  writeToLog(level, message, filePath, lineIndex) {
    this.log.write(level, message, filePath, lineIndex);
  }

  getFileContext() {
    const fileContext = null;

    return fileContext;
  }

  getDepth() {
    const depth = -1;

    return depth;
  }

  verify() {
    this.files.forEach((file) => {
      const context = this, ///
            fileContext = FileContext.fromFile(file, context);

      fileContext.verify();

      this.fileContexts.push(fileContext);
    });
  }

  static fromNothing() {
    const log = Log.fromNothing(),
          files = [],
          fileContexts = [],
          releaseContext = new ReleaseContext(log, files, fileContexts);

    return releaseContext;
  }
}

module.exports = ReleaseContext;
