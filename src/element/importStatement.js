"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateImportStatement } from "../process/instantiate";
import { releaseNameFromJSON, importBindingsFromJSON, releaseNameToReleaseNameJSON, importBindingsToImportBindingsJSON } from "../utilities/json";

const { unbreakable } = breakPointUtilities;

export default define(class ImportStatement extends Element {
  constructor(context, string, node, breakPoint, releaseName, importBindings) {
    super(context, string, node, breakPoint);

    this.releaseName = releaseName;
    this.importBindings = importBindings;
  }

  getReleaseName() {
    return this.releaseName;
  }

  getImportBindings() {
    return this.importBindings;
  }

  toJSON() {
    let json;

    const string = this.getString(),
          releaseNameJSON = releaseNameToReleaseNameJSON(this.releaseName),
          importBindingsJSON = importBindingsToImportBindingsJSON(this.importBindings),
          releaseName = releaseNameJSON,  ///
          importBindings = importBindingsJSON;  ///

    json = {
      string,
      releaseName,
      importBindings
    };

    return json;
  }

  verify = unbreakable(function (context, forward, back) {
    debugger
  });

  static name = "ImportStatement";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            importStatementNode = instantiateImportStatement(string, context),
            node = importStatementNode,  ///
            breakPoint = null,
            releaseName = releaseNameFromJSON(json, context),
            importBindings = importBindingsFromJSON(json, context);

      context = null;

      const importStatement = new ImportStatement(context, string, node, breakPoint, releaseName, importBindings);

      return importStatement;
    }, context);
  }
});
