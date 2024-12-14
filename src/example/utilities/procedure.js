"use strict";

import { File } from "occam-entities";
import { FileContext } from "../../index";  ///
import { arrayUtilities, fileSystemUtilities } from "necessary";

const { first } = arrayUtilities,
      { readFile } = fileSystemUtilities;

export function procedureFromReleaseContext(releaseContext) {
  const fileContext = fileContextFromReleaseContext(releaseContext),
        procedures = fileContext.getProcedures(),
        firstProcedure = first(procedures),
        procedure = firstProcedure; ///

  return procedure;
}

function fileContextFromReleaseContext(releaseContext) {
  const file = fileFromNothing(),
        fileContext = FileContext.fromFile(file, releaseContext);

  fileContext.verify();

  releaseContext.addFileContext(fileContext);

  return fileContext;
}

function fileFromNothing() {
  const filePath = "example/Free and bound variables.ftl",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released);

  return file;
}

