"use strict";

import { CommonLexer,
         WhitespaceToken,
         EndOfLineNonSignificantToken,
         DoublyQuotedStringLiteralToken,
         EndOfLineCommentNonSignificantToken,
         PythonStyleSingleLineCommentToken,
         PythonStyleEndOfMultiLineCommentToken,
         PythonStyleStartOfMultiLineCommentToken,
         PythonStyleMiddleOfMultiLineCommentToken } from "occam-lexers";

import entries from "./entries";

export default class FurtleLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = EndOfLineCommentNonSignificantToken;

  static SingleLineCommentToken = PythonStyleSingleLineCommentToken;

  static EndOfMultiLineCommentToken = PythonStyleEndOfMultiLineCommentToken;  ///

  static StartOfMultiLineCommentToken = PythonStyleStartOfMultiLineCommentToken;  ///

  static MiddleOfMultiLineCommentToken = PythonStyleMiddleOfMultiLineCommentToken;  ///

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(FurtleLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(FurtleLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FurtleLexer, entries); }
}
