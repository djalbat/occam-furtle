"use strict";

import { File } from "occam-entities";
import { fileSystemUtilities } from "necessary";

import { ReleaseContext } from "../context/release";

const { readFile } = fileSystemUtilities;

export function releaseContextFromNothing() {
  const file = fileFromNothing(),
        releaseContext = ReleaseContext.fromFile(file);

  return releaseContext;
}

function fileFromNothing() {
  const filePath = "example/Free and bound variables.ftl",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released);

  return file;
}

