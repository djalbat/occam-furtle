"use strict";

const { File } = require("occam-model");

function nominalFileFromNohting() {
  const path = "./statement.nml",
        content = `∀n m = m`,
        released = false,
        file = File.fromPathContentAndReleased(path, content, released),
        nominalFile = file; ///

  return nominalFile;
}

module.exports = {
  nominalFileFromNohting
};
