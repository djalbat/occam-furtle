"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function procedureFromFileContext(fileContext) {
  const procedures = fileContext.getProcedures(),
        firstProcedure = first(procedures),
        procedure = firstProcedure; ///

  return procedure;
}
