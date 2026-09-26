"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./helpers/test"),
      { nominalValuesFromContent } = require("./helpers/nominal");

const { nodeQuery } = queryUtilities,
      { ERROR_LEVEL } = levels;

const logLevel = ERROR_LEVEL,
      filePath = "first-order-logic/Functions/Free and bound variables.ftl",
      projectName = "first-order-logic",
      procedureName = "isVariableBound",
      projectsDirectoryPath = "../../Logic";

const statementNodeQuery = nodeQuery("/step/statement!"),
      termNodeQuery = nodeQuery("/statement/argument!/term!"),
      content = `∀n n = n
`;

describe(projectName, () => {
  createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, (context) => {
    const nominalValues = nominalValuesFromContent(content, (node) => {
      const stepNode = node,  ///
            statementNode = statementNodeQuery(stepNode), ///
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
