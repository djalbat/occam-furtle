"use strict";

const { Dependency } =require("occam-model"),
      { arrayUtilities } = require("necessary"),
      { Log, verificationUtilities } =require("occam-languages");

const { FileContextFromFilePath } = require("./utilities/fileContext"),
      { releaseContextFromDependency } = require("./utilities/releaseContext"),
      { nominalValuesFromNominalFileContext } = require("./utilities/nominal");

const { first } = arrayUtilities,
      { createReleaseContexts, verifyReleaseContexts, initialiseReleaseContexts } = verificationUtilities;

describe("isVariableFree", () => {
  const log = Log.fromNothing(),
        name = "first-order-logic",
        callback = async (context, breakPoint) => {
          ///
        },
        releaseContexts = [];

  let context,
      dependency;

  before(() => {
    const projectsDirectoryPath = "/Users/djalbat/logic";

    context = {
      log,
      callback,
      releaseContexts,
      projectsDirectoryPath,
      FileContextFromFilePath,
      releaseContextFromDependency
    }

    dependency = Dependency.fromName(name);
  });

  let releaseContext;

  before(async () => {
    const dependencyName = name;  ///

    await createReleaseContexts(dependencyName, context);

    initialiseReleaseContexts(context);

    await verifyReleaseContexts(context);

    const firstReleaseContext = first(releaseContexts);

    releaseContext = firstReleaseContext; ///
  });

  let furtleFileContext,
      nominalFileContext;

  before(() => {
    const furtleFilePath = `first-order-logic/Functions/Free and bound variables.ftl`,
          nominalFilePath = `first-order-logic/lemmas.nml`;

    furtleFileContext = findFileContext(furtleFilePath, releaseContext);

    nominalFileContext = findFileContext(nominalFilePath, releaseContext);
  });

  let procedure,
      nominalValues;

  before(() => {
    const procedureName = "isVariableFree";

    nominalValues = nominalValuesFromNominalFileContext(nominalFileContext);

    procedure = furtleFileContext.findProcedureByProcedureName(procedureName);
  });

  it("returns false", async () => {
    const term = await procedure.callNominally(nominalValues),
          primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    assert.isFalse(boolean);
  });
});

function findFileContext(filePath, releaseContext) {
  const fileContexts = releaseContext.getFileContexts(),
        fileContext = fileContexts.find((fileContext) => {
          const filePathMatches = fileContext.matchFilePath(filePath);

          if (filePathMatches) {
            return true;
          }
        }) || null;

  return fileContext;
}
