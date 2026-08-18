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

const statementNodeQuery = nodeQuery("/step/statement!"),
      termNodeQuery = nodeQuery("/statement/argument!/term!"),
      content = `∀n n = n
`;

describe.only(projectName, () => {
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
