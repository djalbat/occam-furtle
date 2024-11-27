"use strict";

import { TeXLexer, TeXParser } from "../../index";  ///

import View from "../view";

export default class TeXView extends View {
  static Lexer = TeXLexer;

  static Parser = TeXParser;

  static readOnly = false;

  static initialContent = "\\[\r\n\\int \\frac{x}{y} dx\r\n\\]";

  static defaultProperties = {
    className: "tex"
  };
}
