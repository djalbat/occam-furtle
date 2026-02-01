"use strict";

const ReleaseContext = require("./context/release");

const { furtleFileFromNothing } = require("./helpers/furtle"),
      { primitivesFromFileContext } = require("./helpers/primitives"),
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
      procedure = procedureFromReleaseContext(releaseContext),
      primitives = primitivesFromFileContext(fileContext, free);

// try {
const context = fileContext,  ///
      expression = procedure.call(primitives, context),
      boolean = expression.getBoolean();

console.log(boolean);
// } catch (exception) {
//   const message = exception.getMessage();
//
//   console.log(message);
// }
