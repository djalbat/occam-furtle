"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateImportBinding } from "../process/instantiate";
import { labelFromJSON, labelToLabelJSON, referenceFromJSON, referenceToReferenceJSON } from "../utilities/json";
import {instantiate} from "../utilities/context";

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

  getLabelledProcedureName() {
    const labelName = this.label.getName(),
          labelledProcedureName = labelName;  ///

    return labelledProcedureName;
  }

  getReferencedProcedureName() {
    const referenceName = this.reference.getName(),
          referencedProcedureName = referenceName;  ///

    return referencedProcedureName;
  }

  isAllowed() {
    const labelledProcedureName = this.getLabelledProcedureName(),
          referencedProcedureName = this.getReferencedProcedureName(),
          aliased = (labelledProcedureName !== referencedProcedureName);

    return aliased;
  }

  compareLablledProcedureName(labelledProcedureName) {
    const labelName = this.label.getName(),
          labelledProcedureNameCompares = (labelName === labelledProcedureName);

    return labelledProcedureNameCompares;
  }

  verify(releaseName, context, forward, back) {
    const importBindingString = this.getString(); ///

    context.trace(`Verifying the '${importBindingString}' import binding...`);

    let procedureName,
        procedurePresent;

    const referencedProcedureName = this.getReferencedProcedureName();

    procedureName = referencedProcedureName;  ///

    procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    if (!procedurePresent) {
      context.trace(`The '${procedureName}' procedure is not present.`);

      return back();
    }

    const labelledProcedureName = this.getLabelledProcedureName();

    procedureName = labelledProcedureName;  ///

    const aliased = this.isAllowed();

    if (aliased) {
      procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

      if (procedurePresent) {
        context.trace(`The '${procedureName}' procedure is already present.`);

        return back();
      }
    }

    const importBindingPresent = context.isImportBindingPresentByLabelledProcedureName(labelledProcedureName);

    if (importBindingPresent) {
      const labelString = this.label.getString();

      context.trace(`The '${importBindingString}' import binding's '${labelString}' label is already present...`);

      return back();
    }

    procedureName = referencedProcedureName;  ///

    const procedure = context.findProcedureByProcedureName(procedureName),
          releaseNameCompares = procedure.compareReleaseName(releaseName);

    if (!releaseNameCompares) {
      context.trace(`The '${procedureName}' procedure is not in the '${releaseName}' package.`);

      return back();
    }

    const exported = procedure.isExported();

    if (!exported) {
      context.trace(`The '${procedureName}' procedure is not exported.`);

      return back();
    }

    const importBinding = this;

    context.addImportBinding(importBinding);

    context.debug(`...verified the '${importBindingString}' import binding.`);

    return forward(context, back);
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
    let importBinding;

    instantiate((context) => {
      const { string } = json,
            breakPoint = null,
            importBindingNode = instantiateImportBinding(string, context),
            label = labelFromJSON(json, context),
            reference = referenceFromJSON(json, context),
            node = importBindingNode; ///

      importBinding = new ImportBinding(context, string, node, breakPoint, label, reference);
    }, context);

    return importBinding;
  }
});
