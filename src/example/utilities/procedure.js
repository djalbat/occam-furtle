"use strict";

import { FileContext } from "../../index";  ///
import { arrayUtilities } from "necessary";

import { ReleaseContext } from "../context/release";
import { fileFromNothing } from "../utilities/file";

const { first } = arrayUtilities;

export function procedureFromNothing() {
  const file = fileFromNothing(),
        releaseContext = ReleaseContext.fromFile(file),
        fileContext = FileContext.fromFile(file, releaseContext);

  fileContext.verify();

  const procedures = fileContext.getProcedures(),
        firstProcedure = first(procedures),
        procedure = firstProcedure; ///

  return procedure;
}

