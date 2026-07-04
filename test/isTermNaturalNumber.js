"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./utilities/test"),
      { nominalValuesFromContent } = require("./utilities/nominal");

const { nodeQuery } = queryUtilities,
      { ERROR_LEVEL } = levels;

const logLevel = ERROR_LEVEL,
      filePath = "decimal-numbers/Functions/Natural numbers.ftl",
      projectName = "decimal-numbers",
      procedureName = "isTermNaturalNumber",
      projectsDirectoryPath = "../../Mathematics";

const termNodeQuery = nodeQuery("/step/statement/equality!/term[0]"),
      content = `12 = x
`;

describe.only(projectName, () => {
  createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, (context) => {
    const nominalValues = nominalValuesFromContent(content, (node) => {
      const statementNode = node, ///
            termNode = termNodeQuery(statementNode),
            nodes = [
              termNode
            ];

      return nodes;
    }, context);

    return nominalValues;
  });
});
