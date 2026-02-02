"use strict";

const ReleaseContext = require("./context/release");

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
      expression = procedure.call(terms, context),
      boolean = expression.getBoolean();

console.log(boolean);
// } catch (exception) {
//   const message = exception.getMessage();
//
//   console.log(message);
// }
