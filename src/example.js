"use strict";

import { levels } from "necessary";

const { TRACE_LEVEL } = levels;

import "./index";

import Log from "./log";
import FileContext from "./context/file";

const logLevel = TRACE_LEVEL, ///
      log = Log.fromLogLevel(logLevel),
      filePath = "first-order-logic/Procedures/Free and bound variables.ftl",
      fileContext = FileContext.fromLogAndFilePath(log, filePath);

fileContext.initialise();
