"use strict";

import "./index";

import { File } from "occam-entities";
import { fileSystemUtilities } from "necessary";

import FileContext from "./context/file";

const { readFile } = fileSystemUtilities;

const filePath = "first-order-logic/Procedures/Free and bound variables.ftl",
      fileContent = readFile(filePath),
      path = filePath,  ///
      content = fileContent,  ///
      released = false,
      file = File.fromPathContentAndReleased(path, content, released),
      releaseContext = null,
      fileContext = FileContext.fromFile(file, releaseContext);

fileContext.initialise();
