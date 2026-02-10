"use strict";

const { Entries } = require("occam-model"),
      { Log, ReleaseContext } = require("occam-languages");

const { termsFromNominalFileContext } = require("./helpers/terms"),
      { furtleFileFromNothing, nominalFileFromNohting } = require("./helpers/file"),
      { procedureFromReleaseContext, FileContextFromFilePath } = require("./helpers/context");

const entries = Entries.fromNothing(),
      furtleFile = furtleFileFromNothing(),
      nominalFile = nominalFileFromNohting();

entries.addFile(furtleFile);

entries.addFile(nominalFile);

const log = Log.fromNothing(),
      name = null,
      json = null,
      callback = async (context, filePath, lineIndex) => {
        debugger
      },
      customGrammar = null,
      releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar),
      releaseContexts = [];

releaseContext.initialise(releaseContexts, FileContextFromFilePath);

releaseContext.verify()
  .then(callProcedure)
  .then(handleProcedure);

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

  return procedure.call(terms, context);
}

function handleProcedure(term) {
  const primitiveValue = term.getPrimitiveValue(),
        boolean = primitiveValue; ///

  console.log(boolean);
}
