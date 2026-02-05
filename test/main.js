"use strict";

const { Log } = require("../lib/index"), ///
      { Entries } = require("occam-model");

const ReleaseContext = require("./context/release");

const { termsFromFileContext } = require("./helpers/terms"),
      { furtleFileFromNothing } = require("./helpers/furtle"),
      { nominalFileFromNohting } = require("./helpers/nominal"),
      { procedureFromReleaseContext } = require("./helpers/procedure");

const log = Log.fromNothing(),
      entries = Entries.fromNothing(),
      furtleFile = furtleFileFromNothing(),
      nominalFile = nominalFileFromNohting();

entries.addFile(furtleFile);
entries.addFile(nominalFile);

const releaseContext = ReleaseContext.fromLogAndEntries(log, entries);

releaseContext.initialise();

releaseContext.verify();

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
