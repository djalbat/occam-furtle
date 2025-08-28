"use strict";

import "./index";

import { ReleaseContext } from "./example/context/release";

import { furtleFileFromNothing } from "./example/utilities/furtle";
import { expressionsFromFileContext } from "./example/utilities/expressions";
import { procedureFromReleaseContext } from "./example/utilities/procedure";
import { nominalFileContextFromReleaseContext } from "./example/utilities/nominal";

const releaseContext = ReleaseContext.fromNothing(),
      furtleFile = furtleFileFromNothing(),
      file = furtleFile;  ///

releaseContext.addFile(file);

releaseContext.verify();

const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext),
      fileContext = nominalFileContext; ///

releaseContext.addFileContext(fileContext);

const free = true,
      expressions = expressionsFromFileContext(fileContext, free),
      procedure = procedureFromReleaseContext(releaseContext);

// try {
  const context = fileContext,
        expression = procedure.call(expressions, context),
        boolean = expression.getBoolean();

  console.log(boolean);
// } catch (exception) {
//   const message = exception.getMessage();
//
//   console.log(message);
// }
