"use strict";

const { Log } = require("occam-languages"),
      { Entries } = require("occam-model");

const ReleaseContext = require("./context/release");

const { FileContextFromFilePath } = require("./helpers/context"),
      { termsFromNominalFileContext } = require("./helpers/terms"),
      { furtleFileFromNothing, nominalFileFromNohting } = require("./helpers/file");

describe("isVariableFree", () => {
  let entries,
      furtleFile,
      nominalFile;

  before(() => {
    entries = Entries.fromNothing();

    furtleFile = furtleFileFromNothing();

    nominalFile = nominalFileFromNohting();

    entries.addFile(furtleFile);

    entries.addFile(nominalFile);
  });

  let releaseContext;

  before(() => {
    const log = Log.fromNothing(),
          name = null,
          json = null,
          customGrammar = null;

    releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, async (context, breakPoint) => {
      ///
    }, customGrammar);

    const releaseContexts = [];

    releaseContext.initialise(releaseContexts, FileContextFromFilePath);
  });

  let terms,
      context,
      procedure;

  before(async () => {
    await releaseContext.verify();

    const nominalFilePath = nominalFile.getPath(),
          nominalFileContext = releaseContext.findFileContext(nominalFilePath),
          free = true;

    terms = termsFromNominalFileContext(nominalFileContext, free);

    const furtleFilePath = furtleFile.getPath(),
          furtleFileContext = releaseContext.findFileContext(furtleFilePath),
          fileContext = furtleFileContext;  ///

    context = fileContext;  ///

    const procedureName = "isVariableFree";

    procedure = furtleFileContext.findProcedureByProcedureName(procedureName);
  });

  it("returns true", async () => {
    const term = await procedure.call(terms, context),
          primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    assert.isTrue(boolean);
  });
});
