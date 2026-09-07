"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateImportStatement } from "../process/instantiate";
import { importBindingsFromJSON, importBindingsToImportBindingsJSON } from "../utilities/json";

const { unbreakable } = breakPointUtilities;

export default define(class ImportStatement extends Element {
  constructor(context, string, node, breakPoint, importBindings) {
    super(context, string, node, breakPoint);

    this.importBindings = importBindings;
  }

  getImportBindings() {
    return this.importBindings;
  }

  toJSON() {
    let json;

    const string = this.getString(),
          importBindingsJSON = importBindingsToImportBindingsJSON(this.importBindings),
          importBindings = importBindingsJSON;  ///

    json = {
      string,
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
            importBindings = importBindingsFromJSON(json, context);

      context = null;

      const importStatement = new ImportStatement(context, string, node, breakPoint, importBindings);

      return importStatement;
    }, context);
  }
});
