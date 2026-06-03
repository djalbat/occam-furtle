"use strict";

const { levels } =require("necessary"),
      { queryUtilities } = require("occam-query");

const { createSuite } = require("./utilities/test"),
      { nominalValuesFromContent } = require("./utilities/nominal");

const { nodesQuery } = queryUtilities,
      { TRACE_LEVEL } = levels;

const logLevel = TRACE_LEVEL,
      filePath = "polynomials/Funcions/Polynomials.ftl",
      projectName = "polynomials",
      procedureName = "isTermIntegerPolynomial",
      projectsDirectoryPath = "../../Mathematics";

const content = `12x = x
`,
      termNodesQuery = nodesQuery("/step/statement/equality!/term");

describe.only(projectName, () => {
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
