"use strict";

function procedureFromFilePathProcedureName(filePath, procedureName, context) {
  const fileContexts = context.getFileContexts(),
        fileContext = fileContexts.find((fileContext) => {
          const filePathMatches = fileContext.matchFilePath(filePath);

          if (filePathMatches) {
            return true;
          }
        }),
        furtleFileContext = fileContext,  ///
        procedure = furtleFileContext.findProcedureByProcedureName(procedureName);

  return procedure;
}

module.exports = {
  procedureFromFilePathProcedureName
};
