"use strict";

import { LEVELS, SINGLE_SPACE, EMPTY_STRING, LEVEL_MAXIMUM_LENGTH, LINE_INDEX_MAXIMUM_LENGTH } from "./constants";

const [ TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL ] = LEVELS;

export default class Log {
  constructor(messages, logLevel, follow) {
    this.messages = messages;
    this.logLevel = logLevel;
    this.follow = follow;
  }

  getMessages() {
    return this.messages;
  }

  getLogLevel() {
    return this.logLevel;
  }

  getFollow() {
    return this.follow;
  }

  trace(message, filePath = null) {
    const level = TRACE_LEVEL;

    this.write(level, message, filePath);
  }

  debug(message, filePath = null) {
    const level = DEBUG_LEVEL;

    this.write(level, message, filePath);
  }

  info(message, filePath = null) {
    const level = INFO_LEVEL;

    this.write(level, message, filePath);
  }

  warning(message, filePath = null) {
    const level = WARNING_LEVEL;

    this.write(level, message, filePath);
  }

  error(message, filePath = null) {
    const level = ERROR_LEVEL;

    this.write(level, message, filePath);
  }

  write(level, message, filePath, lineIndex = null) {
    const levelIndex = LEVELS.indexOf(level),
          logLevelIndex = LEVELS.indexOf(this.logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    message = formatMessage(level, message, filePath, lineIndex);  ///

    this.follow ?
      console.log(message) :
        this.messages.push(message);
  }

  static fromNothing() {
    const messages = null,
          logLevel = TRACE_LEVEL,
          follow = true,
          log = new Log(messages, logLevel, follow);

    return log;
  }

  static fromFollowAndLogLevel(follow, logLevel) {
    const messages = follow ?
                       null :
                         [],
          log = new Log(messages, logLevel, follow);

    return log;
  }
}

function formatMessage(level, message, filePath, lineIndex) {
  let formattedMessage = EMPTY_STRING;

  const leftPaddedLevel = leftPadLevel(level),
        upperCaseLeftPaddedLevel = leftPaddedLevel.toUpperCase();

  formattedMessage += `${upperCaseLeftPaddedLevel}:`;

  if (filePath !== null) {
    formattedMessage += ` ${filePath}`;
  }

  if (lineIndex !== null) {
    const leftPaddedLineIndex = leftPadLineIndex(lineIndex);

    formattedMessage += ` [${leftPaddedLineIndex}]`;
  }

  formattedMessage += ` - ${message}`;

  message = formattedMessage; ///

  return message;
}

function leftPadLineIndex(lineIndex) {
  lineIndex = `${lineIndex}`;

  const maximumLength = LINE_INDEX_MAXIMUM_LENGTH,
        leftPaddedLineIndex = leftPad(lineIndex, maximumLength);

  return leftPaddedLineIndex;
}

function leftPadLevel(level) {
  const maximumLength = LEVEL_MAXIMUM_LENGTH,
        leftPaddedLevel = leftPad(level, maximumLength);

  return leftPaddedLevel;
}

function leftPad(string, maximumLength) {
  const stringLength = string.length,
        length = maximumLength - stringLength,
        indent = SINGLE_SPACE.repeat(length),
        leftPaddedString = `${indent}${string}`;

  return leftPaddedString;
}

