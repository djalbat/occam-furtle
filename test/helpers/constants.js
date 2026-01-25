"use strict";

const { levels } = require("necessary");

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL } = levels;

const LEVELS = [
  TRACE_LEVEL,
  DEBUG_LEVEL,
  INFO_LEVEL,
  WARNING_LEVEL,
  ERROR_LEVEL
];

module.exports = {
  LEVELS
};
