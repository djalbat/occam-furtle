"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateImportStatement } from "../process/instantiate";
import { releaseNameFromJSON, importBindingsFromJSON, releaseNameToReleaseNameJSON, importBindingsToImportBindingsJSON } from "../utilities/json";

const { cut, every } = continuationUtilities,
      { unbreakable } = breakPointUtilities;

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
    forward = cut(forward, back); ///

    const importStatementString = this.getString(); ///

    context.trace(`Verifying the '${importStatementString}' import statement...`);

    return every(this.importBindings, (importBinding, context, forward, back) => {
      return importBinding.verify(this.releaseName, context, forward, back);
    }, context, (context, back) => {
      context.debug(`...verified the '${importStatementString}' import statement.`);

      return forward(context, back);
    }, (exception) => {
      if (exception) {
        return back(exception);
      }

      context.trace(`Unable to verify the '${importStatementString}' import statement.`);

      return back();
    });
  });

  static name = "ImportStatement";

  static fromJSON(json, context) {
    let importStatement;

    instantiate((context) => {
      const { string } = json,
            importStatementNode = instantiateImportStatement(string, context),
            node = importStatementNode,  ///
            breakPoint = null,
            releaseName = releaseNameFromJSON(json, context),
            importBindings = importBindingsFromJSON(json, context);

      context = null;

      importStatement = new ImportStatement(context, string, node, breakPoint, releaseName, importBindings);
    }, context);

    return importStatement;
  }
});
