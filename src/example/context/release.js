"use strict";

export class ReleaseContext {
  constructor(file) {
    this.file = file;
  }

  getFile() {
    return this.file;
  }

  findFile(filePath) {
    const file = this.getFile();  ///

    return file;
  }

  trace(message) { console.log(message); }

  debug(message) { console.log(message); }

  info(message) { console.log(message); }

  warning(message) { console.log(message); }

  error(message) { console.log(message); }

  static fromFile(file) {
    const releaseContext = new ReleaseContext(file);

    return releaseContext;
  }
}
