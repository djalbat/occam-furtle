"use strict";

const { levels, arrayUtilities } =require("necessary"),
      { Log, verificationUtilities } =require("occam-languages");

const { FileContextFromFilePath } = require("./utilities/fileContext"),
      { nominalValuesFromNothing } = require("./utilities/nominal"),
      { releaseContextFromDependency } = require("./utilities/releaseContext"),
      { procedureFromFilePathProcedureName } = require("./utilities/furtle");

const { first } = arrayUtilities,
      { TRACE_LEVEL } = levels,
      { createReleaseContexts, initialiseReleaseContexts } = verificationUtilities;

const logLevel = TRACE_LEVEL,
      filePath = "first-order-logic/Functions/Free and bound variables.ftl",
      projectName = "first-order-logic",
      procedureName = "isVariableFree",
      projectsDirectoryPath = "../../Logic";

describe(procedureName, () => {
  const log = Log.fromLogLevel(logLevel),
        callback = async (context, breakPoint) => {
          ///
        },
        releaseContexts = [],
        context = {
          log,
          callback,
          releaseContexts,
          projectsDirectoryPath,
          FileContextFromFilePath,
          releaseContextFromDependency
        };

  before(async () => {
    const dependencyName = projectName;  ///

    await createReleaseContexts(dependencyName, context);

    initialiseReleaseContexts(context);
  });

  let procedure,
      nominalValues;

  before(() => {
    const firstReleaseContext = first(releaseContexts),
          context = firstReleaseContext;  ///

    procedure = procedureFromFilePathProcedureName(filePath, procedureName, context);

    nominalValues = nominalValuesFromNothing(context);
  });

  it("returns false", async () => {
    const term = await procedure.callNominally(nominalValues),
          primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    assert.isFalse(boolean);
  });
});
