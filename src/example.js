"use strict";

import "./index";

import FileContext from "./context/file";

import { ReleaseContext } from "./example/context/release";
import { fileFromFilePath } from "./example/utilities/file";
import { combinedCustomGrammarFromNothing } from "./example/utilities/customGrammar";

const filePath = "example/Free and bound variables.ftl",
      file = fileFromFilePath(filePath),
      releaseContext = ReleaseContext.fromFile(file),
      fileContext = FileContext.fromFile(file, releaseContext);

fileContext.verify();

const combinedCustomGrammar = combinedCustomGrammarFromNothing();
