"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./utilities/test"),
      { nominalValuesFromContent } = require("./utilities/nominal");

const { nodesQuery } = queryUtilities,
      { ERROR_LEVEL } = levels;

const logLevel = ERROR_LEVEL,
      filePath = "polynomials/Funcions/Integer polynomials.ftl",
      projectName = "polynomials",
      procedureName = "isTermIntegerPolynomial",
      projectsDirectoryPath = "../../Mathematics";

const termNodesQuery = nodesQuery("/step/statement/equality!/term"),
      content = `x^2 = x
`;

describe(projectName, () => {
  createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, (context) => {
    const nominalValues = nominalValuesFromContent(content, (node) => {
      const statementNode = node, ///
            termNodes = termNodesQuery(statementNode),
            nodes = termNodes;  ///

      return nodes;
    }, context);

    return nominalValues;
  });
});
