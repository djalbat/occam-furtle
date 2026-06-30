"use strict";

const { Log, verificationUtilities } =require("occam-languages");

const { FileContextFromFilePath } = require("../utilities/fileContext"),
      { releaseContextFromDependency } = require("../utilities/releaseContext"),
      { procedureFromFilePathProcedureName } = require("../utilities/furtle");

const { createReleaseContexts, initialiseReleaseContexts } = verificationUtilities;

function createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, callback) {
  let releaseContext = null;

  const releaseContexts = [];

  let context;

  before(() => {
    const log = Log.fromLogLevel(logLevel),
          callback = async (context, breakPoint) => {
            ///
          };

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

  it("initialises", async () => {
    initialiseReleaseContexts(context);

    releaseContext = releaseContexts.find((releaseContext) => {
      const name = releaseContext.getName();

      if (name === projectName) {
        return true;
      }
    }) || null;

    assert.isNotNull(releaseContext);
  });

  it(procedureName, async () => {
    const context = releaseContext, ///
          procedure = procedureFromFilePathProcedureName(filePath, procedureName, context),
          nominalValues = callback(context);

    const term = await procedure.callNominally(nominalValues),
          primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    assert.isTrue(boolean);
  });
}

module.exports = {
  createSuite
};
