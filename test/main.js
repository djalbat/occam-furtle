"use strict";

const { Entries } = require("occam-model"),
      { Log, ReleaseContext } = require("occam-languages");

const { termsFromNominalFileContext } = require("./helpers/terms"),
      { procedureFromReleaseContext } = require("./helpers/context"),
      { furtleFileFromNothing, nominalFileFromNohting } = require("./helpers/file");

const log = Log.fromNothing(),
      name = null,
      json = null,
      entries = Entries.fromNothing(),
      customGrammar = null,
      furtleFile = furtleFileFromNothing(),
      nominalFile = nominalFileFromNohting(),
      releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, async (context, filePath, lineIndex) => {
        debugger
      }, customGrammar);

entries.addFile(furtleFile);

entries.addFile(nominalFile);

releaseContext.initialise();

releaseContext.verify()
  .then(callProcedure);

function callProcedure() {
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
}
