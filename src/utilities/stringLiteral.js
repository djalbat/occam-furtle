"use strict";

import { EMPTY_STRING } from "../constants";

export function stringFromStringLiteral(stringLiteral) {
  const string = stringLiteral.replace(/(^"|"$)/g, EMPTY_STRING);

  return string;
}

export function stringLiteralFromString(string) {
  const stringLiteral = `"${string}"`;

  return stringLiteral;
}
