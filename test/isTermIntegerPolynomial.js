"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./helpers/test"),
      { nominalValuesFromContent } = require("./helpers/nominal");

const { nodesQuery } = queryUtilities,
      { ERROR_LEVEL } = levels;

const logLevel = ERROR_LEVEL,
      filePath = "polynomials/Funcions/Integer polynomials.ftl",
      projectName = "polynomials",
      procedureName = "isTermIntegerPolynomial",
      projectsDirectoryPath = "../../Mathematics";

const termNodesQuery = nodesQuery("/step/statement/equality!/term"),
      content = `-12x^2 - 12x^2 = x
`;

describe.only(projectName, () => {
  createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, (context) => {
    const nominalValues = nominalValuesFromContent(content, (node) => {
      const statementNode = node, ///
            termNodes = termNodesQuery(statementNode),
            length = 2,
            nodes = nodesFromTermNodes(termNodes, length);

      return nodes;
    }, context);

    return nominalValues;
  });
});

function nodesFromTermNodes(termNodes, length) {
  const start = 0, ///
        end = length, ///
        nodes = termNodes.slice(start, end);

  return nodes;
}