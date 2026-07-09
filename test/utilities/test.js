"use strict";

const { Log, ReleaseContext, verificationUtilities } =require("occam-languages");

const { FileContextFromFilePath } = require("../utilities/fileContext"),
      { releaseContextFromDependency } = require("../utilities/releaseContext"),
      { procedureFromFilePathProcedureName } = require("../utilities/furtle");

const { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = verificationUtilities;

function createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, nominalValuesFromNothing) {
  let releaseContext = null;

  const log = Log.fromLogLevel(logLevel),
        callback = (breakPoint, context, continuation) => {
          continuation();
        },
        releaseContexts = [];

  let context;

  before(() => {
    context = {
      log,
      callback,
      releaseContexts,
      projectsDirectoryPath,
      FileContextFromFilePath,
      releaseContextFromDependency
    };
  });

  it("creates", async () => {
    const dependencyName = projectName,  ///
          releaseContextsCreated = await createReleaseContexts(dependencyName, context);

    assert.isTrue(releaseContextsCreated);
  });

  it("initialises", () => {
    initialiseReleaseContexts(context);

    releaseContext = releaseContexts.find((releaseContext) => {
      const name = releaseContext.getName();

      if (name === projectName) {
        return true;
      }
    }) || null;

    assert.isNotNull(releaseContext);
  });

  it("verifies", (done) => {
    verifyReleaseContexts(context, (releaseContextsVerify) => {
      assert.isTrue(releaseContextsVerify);

      done();
    });
  });

  let json,
      entries,
      customGrammar;

  it("serialise", () => {
    json = releaseContext.toJSON();

    entries = releaseContext.getEntries();

    customGrammar = releaseContext.getCustomGrammar();
  });

  it("unserialise", () => {
    const name = projectName; ///

    releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);

    releaseContext.initialise(releaseContexts, FileContextFromFilePath);
  });

  it(procedureName, (done) => {
    const context = releaseContext, ///
          procedure = procedureFromFilePathProcedureName(filePath, procedureName, context),
          nominalValues = nominalValuesFromNothing(context);

    procedure.callNominally(nominalValues, (value) => {
      const primitiveValue = value.getPrimitiveValue(),
            boolean = primitiveValue; ///

      assert.isTrue(boolean);

      done();
    });
  });
}

module.exports = {
  createSuite
};
