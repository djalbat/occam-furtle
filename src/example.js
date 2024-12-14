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

const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext),
      fileContext = nominalFileContext, ///
      values = valuesFromFileContext(fileContext);

releaseContext.addFileContext(fileContext);

releaseContext.verify();

const procedure = procedureFromReleaseContext(releaseContext),
      context = fileContext;  ///

procedure.call(values, context);
