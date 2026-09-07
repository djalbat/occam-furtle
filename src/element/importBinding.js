"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateImportBinding } from "../process/instantiate";
import { labelFromJSON, labelToLabelJSON, referenceFromJSON, referenceToReferenceJSON } from "../utilities/json";

export default define(class ImportBinding extends Element {
  constructor(context, string, node, breakPoint, label, reference) {
    super(context, string, node, breakPoint);

    this.label = label;
    this.reference = reference;
  }

  getLabel() {
    return this.label;
  }

  getReference() {
    return this.reference;
  }

  toJSON() {
    let json;

    const string = this.getString(),
          labelJSON = labelToLabelJSON(this.label),
          referenceJJSON = referenceToReferenceJSON(this.reference),
          label = labelJSON,  ///
          reference = referenceJJSON;  ///

    json = {
      string,
      label,
      reference
    };

    return json;
  }

  static name = "ImportBinding";

  static fromJSON(json, context) {
    const { string } = json,
          breakPoint = null,
          importBindingNode = instantiateImportBinding(string, context),
          label = labelFromJSON(json, context),
          reference = referenceFromJSON(json, context),
          node = importBindingNode, ///
          importBinding = new ImportBinding(context, string, node, breakPoint, label, reference);

    return importBinding;
  }
});
