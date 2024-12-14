"use strict";

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
      const filePathMatches = file.matchFilePath()
    })

    return file;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  trace(message) { console.log(message); }

  debug(message) { console.log(message); }

  info(message) { console.log(message); }

  warning(message) { console.log(message); }

  error(message) { console.log(message); }
}
