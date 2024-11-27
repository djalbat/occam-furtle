"use strict";

import { CommonLexer,
         WhitespaceToken,
         EndOfLineNonSignificantToken,
         DoublyQuotedStringLiteralToken,
         EndOfLineCommentNonSignificantToken,
         CStyleSingleLineCommentToken,
         CStyleEndOfMultiLineCommentToken,
         CStyleStartOfMultiLineCommentToken,
         CStyleMiddleOfMultiLineCommentToken } from "occam-lexers";

import entries from "./entries";

export default class FurtleLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = EndOfLineCommentNonSignificantToken;

  static SingleLineCommentToken = CStyleSingleLineCommentToken;

  static EndOfMultiLineCommentToken = CStyleEndOfMultiLineCommentToken;  ///

  static StartOfMultiLineCommentToken = CStyleStartOfMultiLineCommentToken;  ///

  static MiddleOfMultiLineCommentToken = CStyleMiddleOfMultiLineCommentToken;  ///

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(FurtleLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(FurtleLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FurtleLexer, entries); }
}
