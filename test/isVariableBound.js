"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./utilities/test"),
      { nominalValuesFromContent } = require("./utilities/nominal");

const { nodeQuery } = queryUtilities,
      { TRACE_LEVEL } = levels;

const logLevel = TRACE_LEVEL,
      filePath = "first-order-logic/Functions/Free and bound variables.ftl",
      projectName = "first-order-logic",
      procedureName = "isVariableBound",
      projectsDirectoryPath = "../../Logic";

const content = `∀n n = n
`,
      termNodeQuery = nodeQuery("/step/statement/argument!/term!");

describe(projectName, () => {
  createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, (context) => {
    const nominalValues = nominalValuesFromContent(content, (node) => {
      const statementNode = node, ///
            termNode = termNodeQuery(statementNode),
              nodes = [ ///
              termNode,
              statementNode
            ];

      return nodes;
    }, context);

    return nominalValues;
  });
});
