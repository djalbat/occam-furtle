"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function procedureFromReleaseContext(releaseContext) {
  const procedures = releaseContext.getProcedures(),
        firstProcedure = first(procedures),
        procedure = firstProcedure; ///

  return procedure;
}
