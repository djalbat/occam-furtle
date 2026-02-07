"use strict";

import { File } from "occam-model";

import FurtleFileContext from "../context/file/furtle";

export default class FurtleFile extends File {
  getFileContext() {
    const FileContext = FurtleFileContext;  ///

    return FileContext;
  }

  static fromJSON(json) { return File.fromJSON(FurtleFile, json); }

  static fromDocument(document) { return File.fromDocument(FurtleFile, document); }

  static fromPathContentAndReleased(path, content, released) { return File.fromPathContentAndReleased(FurtleFile, path, content, released); }
}
