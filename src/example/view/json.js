"use strict";

import { JSONLexer, JSONParser } from "../../index";  ///

import View from "../view";

export default class JSONView extends View {
  static Lexer = JSONLexer;

  static Parser = JSONParser;

  static readOnly = false;

  static initialContent = `{
  "version": "1.2.3"
}
`;

  static defaultProperties = {
    className: "json"
  };
}
