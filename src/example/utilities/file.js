"use strict";

import { File } from "occam-entities";
import { fileSystemUtilities } from "necessary";

const { readFile } = fileSystemUtilities;

export function fileFromFilePath(filePath) {
  const fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released);

  return file;
}