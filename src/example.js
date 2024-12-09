"use strict";

import "./index";

import { File } from "occam-entities";
import { fileSystemUtilities } from "necessary";

import FileContext from "./context/file";

import { ReleaseContext } from "./example/context/release";

const { readFile } = fileSystemUtilities;

const filePath = "first-order-logic/Procedures/Free and bound variables.ftl",
      file = fileFromFilePath(filePath),
      releaseContext = ReleaseContext.fromFile(file),
      fileContext = FileContext.fromFile(file, releaseContext);

fileContext.verify();

function fileFromFilePath(filePath) {
  const fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released);

  return file;
}