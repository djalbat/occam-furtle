"use strict";

const { Log } = require("../lib/index"), ///
      { Entries } = require("occam-model");

const ReleaseContext = require("./context/release");

const { furtleFileFromNothing } = require("./helpers/furtle"),
      { nominalFileFromNohting } = require("./helpers/nominal"),
      { termsFromNominalFileContext } = require("./helpers/terms"),
      { procedureFromReleaseContext } = require("./helpers/procedure");

const log = Log.fromNothing(),
      entries = Entries.fromNothing(),
      furtleFile = furtleFileFromNothing(),
      nominalFile = nominalFileFromNohting(),
      releaseContext = ReleaseContext.fromLogEntriesAndCallback(log, entries, (context, filePath, lineIndex) => {
        debugger
      });

entries.addFile(furtleFile);

entries.addFile(nominalFile);

releaseContext.initialise();

releaseContext.verify();

const nominalFilePath = nominalFile.getPath(),
      nominalFileContext = releaseContext.findFileContext(nominalFilePath),
      free = true,
      terms = termsFromNominalFileContext(nominalFileContext, free),
      procedure = procedureFromReleaseContext(releaseContext),
      furtleFilePath = furtleFile.getPath(),
      furtleFileContext = releaseContext.findFileContext(furtleFilePath),
      fileContext = furtleFileContext,  ///
      context = fileContext;  ///

procedure.call(terms, context)
  .then((term) => {
    const primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    console.log(boolean);
  });
