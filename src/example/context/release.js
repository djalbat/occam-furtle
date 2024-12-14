"use strict";

import { FileContext } from "../../index";  ///
import { arrayUtilities } from "necessary";

const { push } = arrayUtilities;

export class ReleaseContext {
  constructor(files, fileContexts) {
    this.files = files;
    this.fileContexts = fileContexts;
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

  isProcedurePresentByReference(reference) {
    const procedure = this.findProcedureByReference(reference),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  trace(message) { console.log(message); }

  debug(message) { console.log(message); }

  info(message) { console.log(message); }

  warning(message) { console.log(message); }

  error(message) { console.log(message); }

  verify() {
    const releaseContext = this;

    this.files.forEach((file) => {
      const fileContext = FileContext.fromFile(file, releaseContext);

      fileContext.verify();

      this.fileContexts.push(fileContext);
    });
  }

  static fromNothing() {
    const files = [],
          fileContexts = [],
          releaseContext = new ReleaseContext(files, fileContexts);

    return releaseContext;
  }
}
