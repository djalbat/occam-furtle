"use strict";

const { arrayUtilities } = require("necessary");

const { first } = arrayUtilities;

function procedureFromReleaseContext(releaseContext) {
  const procedures = releaseContext.getProcedures(),
        firstProcedure = first(procedures),
        procedure = firstProcedure; ///

  return procedure;
}

module.exports = {
  procedureFromReleaseContext
};
