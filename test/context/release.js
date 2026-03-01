"use strict";

const { ReleaseContext : ReleaseContextBase } = require("occam-languages");

class ReleaseContext extends ReleaseContextBase {
  findFileContext(filePath) {
    const fileContexts = this.getFileContexts(),
          fileContext = fileContexts.find((fileContext) => {
            const filePathMatches = fileContext.matchFilePath(filePath);

            if (filePathMatches) {
              return true;
            }
          }) || null;

    return fileContext;
  }

  static fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar) { return ReleaseContextBase.fromLogNameJSONEntriesCallbackAndCustomGrammar(ReleaseContext, log, name, json, entries, callback, customGrammar); }
}

module.exports = ReleaseContext;
