"use strict";

import "./index";

import FileContext from "./context/file";

import { ReleaseContext } from "./example/context/release";
import { fileFromNothing } from "./example/utilities/file";
import { combinedCustomGrammarFromNothing } from "./example/utilities/grammar";

const file = fileFromNothing(),
      releaseContext = ReleaseContext.fromFile(file),
      fileContext = FileContext.fromFile(file, releaseContext);

fileContext.verify();

const combinedCustomGrammar = combinedCustomGrammarFromNothing();

debugger
