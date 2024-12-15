"use strict";

import "./index";

import { ReleaseContext } from "./example/context/release";

import { furtleFileFromNothing } from "./example/utilities/furtle";
import { valuesFromFileContext } from "./example/utilities/values";
import { procedureFromReleaseContext } from "./example/utilities/procedure";
import { nominalFileContextFromReleaseContext } from "./example/utilities/nominal";

const releaseContext = ReleaseContext.fromNothing(),
      furtleFile = furtleFileFromNothing(),
      file = furtleFile;  ///

releaseContext.addFile(file);

releaseContext.verify();

const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext),
      fileContext = nominalFileContext, ///
      values = valuesFromFileContext(fileContext);

releaseContext.addFileContext(fileContext);

const procedure = procedureFromReleaseContext(releaseContext);

try {
  procedure.call(values, fileContext);
} catch (exception) {
  const message = exception.getMessage();

  console.log(message);
}
