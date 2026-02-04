"use strict";

const { ReleaseContext } = require("../lib/index"); ///

const { termsFromFileContext } = require("./helpers/terms"),
      { furtleFileFromNothing } = require("./helpers/furtle"),
      { procedureFromReleaseContext } = require("./helpers/procedure"),
      { nominalFileContextFromReleaseContext } = require("./helpers/nominal");

let fileContext,
    releaseContext;

releaseContext = ReleaseContext.fromNothing();

const furtleFile = furtleFileFromNothing(),
      file = furtleFile;  ///

releaseContext.addFile(file);

releaseContext.verify();

const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext);

fileContext = nominalFileContext; ///

releaseContext.addFileContext(fileContext);

const free = true,
      terms = termsFromFileContext(fileContext, free),
      procedure = procedureFromReleaseContext(releaseContext);

// try {
const context = fileContext,  ///
      term = procedure.call(terms, context),
      primitiveValue = term.getPrimitiveValue(),
      boolean = primitiveValue; ///

console.log(boolean);
// } catch (exception) {
//   const message = exception.getMessage();
//
//   console.log(message);
// }
