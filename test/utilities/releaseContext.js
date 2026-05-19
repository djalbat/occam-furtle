"use strict";

const { releaseContextUtilities } = require("occam-languages"),
      { fileSystemUtilities: occamFileSystemUtilities } = require("occam-server");

const { loadProject } = occamFileSystemUtilities,
      { releaseContextFromProject } = releaseContextUtilities;

async function releaseContextFromDependency(dependency, context) {
  const { projectsDirectoryPath } = context,
        dependencyName = dependency.getName(),
        projectName = dependencyName, ///
        project = loadProject(projectName, projectsDirectoryPath),
        releaseContext = releaseContextFromProject(project, context);

  return releaseContext;
}

module.exports = {
  releaseContextFromDependency
};
