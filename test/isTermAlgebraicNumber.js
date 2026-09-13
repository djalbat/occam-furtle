"use strict";

const { queryUtilities } = require("occam-query"),
      { levels, arrayUtilities } =require("necessary");

const { createSuite } = require("./utilities/test"),
      { nominalValuesFromContent } = require("./utilities/nominal");

const { first } = arrayUtilities,
      { nodesQuery } = queryUtilities,
      { TRACE_LEVEL } = levels;

const logLevel = TRACE_LEVEL,
      filePath = "algebraic-numbers/Functions/Algebraic numbers.ftl",
      projectName = "algebraic-numbers",
      procedureName = "isTermAlgebraicNumber",
      projectsDirectoryPath = "../../Mathematics";

const termNodesQuery = nodesQuery("/step/statement/equality!/term"),
      content = `2x = x
`;

describe.skip(projectName, () => {
  createSuite(logLevel, filePath, projectName, procedureName, projectsDirectoryPath, (context) => {
    const nominalValues = nominalValuesFromContent(content, (node) => {
      const statementNode = node, ///
            termNodes = termNodesQuery(statementNode),
            firstTermNode = first(termNodes);

      node = firstTermNode; ///

      const nodes = [
        node
      ];

      return nodes;
    }, context);

    return nominalValues;
  });
});
