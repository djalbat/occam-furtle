"use strict";

const { assert } = require("chai");

const ReleaseContext = require("./context/release");

const { furtleFileFromNothing } = require("./helpers/furtle"),
      { expressionsFromFileContext } = require("./helpers/expressions"),
      { procedureFromReleaseContext } = require("./helpers/procedure"),
      { nominalFileContextFromReleaseContext } = require("./helpers/nominal");

describe("src/eliminateLeftRecursion", () => {
  let fileContext,
      releaseContext;

  before(() => {
    releaseContext = ReleaseContext.fromNothing();

    const furtleFile = furtleFileFromNothing(),
          file = furtleFile;  ///

    releaseContext.addFile(file);

    releaseContext.verify();
  });

  before(() => {
    const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext);

    fileContext = nominalFileContext; ///

    releaseContext.addFileContext(fileContext);
  });

  it("returns true", () => {
    const free = true,
          procedure = procedureFromReleaseContext(releaseContext),
          expressions = expressionsFromFileContext(fileContext, free);

// try {
    const context = fileContext,  ///
          expression = procedure.call(expressions, context),
          boolean = expression.getBoolean();

    assert.isTrue(boolean);

    console.log(boolean);
// } catch (exception) {
//   const message = exception.getMessage();
//
//   console.log(message);
// }

  });
});
