"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./utilities/test"),
      { nominalValuesFromContent } = require("./utilities/nominal");

const { nodeQuery } = queryUtilities,
      { TRACE_LEVEL } = levels;

const logLevel = TRACE_LEVEL,
      filePath = "polynomials/Functions/Polynomials.ftl",
      projectName = "polynomials",
      procedureName = "isPolynomial",
      projectsDirectoryPath = "../../Mathematics";

const content = "p = x^2 + 1",
      termNodeQuery = nodeQuery("/statement/argument!/term!");

describe.skip(projectName, () => {
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
