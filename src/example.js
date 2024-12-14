"use strict";

import "./index";

import { valuesFromFileContext } from "./example/utilities/values";
import { fileContextFromNothing } from "./example/utilities/fileContext";
import { releaseContextFromNothing } from "./example/utilities/releaseContext";
import { procedureFromReleaseContext } from "./example/utilities/procedure";

let fileContext;

const releaseContext = releaseContextFromNothing(),
      fileContext = fileContextFromNothing();

releaseContext.addFileContext(fileContext);

const procedure = procedureFromReleaseContext(releaseContext),
      values = valuesFromFileContext(fileContext),
      context = fileContext;  ///

procedure.call(values, context);
