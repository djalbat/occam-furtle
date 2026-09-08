"use strict";

import elements from "../elements";

export function typeToTypeJSON(type) {
  const typeJSON = type.toJSON();

  return typeJSON;
}

export function labelToLabelJSON(label) {
  const labelJSON = label.toJSON();

  return labelJSON;
}

export function exportedToExportedJSON(exported) {
  const exportedJSON = exported;  ///

  return exportedJSON;
}

export function referenceToReferenceJSON(reference) {
  const referenceJSON = reference.toJSON();

  return referenceJSON;
}

export function parametersToParametersJSON(parameters) {
  const parameterJSON = parameters.toJSON();

  return parameterJSON;
}

export function proceduresToProceduresJSON(procedures) {
  const proceduresJSON = procedures.map((procedure) => {
    const procedureJSON = procedure.toJSON();

    return procedureJSON;
  });

  return proceduresJSON;
}

export function releaseNameToReleaseNameJSON(releaseName) {
  const releaseNameJSON = releaseName;  ///

  return releaseNameJSON;
}

export function importBindingsToImportBindingsJSON(importBindings) {
  const importBindingsJSON = importBindings.map((importBinding) => {
    const importBindingJSON = importBinding.toJSON();

    return importBindingJSON;
  });

  return importBindingsJSON;
}

export function typeFromJSON(json, context) {
  let { type } = json;

  const { Type } = elements,
        typeJSON = type;  ///

  json = typeJSON; ///

  type = Type.fromJSON(json, context);

  return type;
}

export function labelFromJSON(json, context) {
  let { label } = json;

  const { Label } = elements,
        labelJSON = label;  ///

  json = labelJSON; ///

  label = Label.fromJSON(json, context);

  return label;
}

export function exportedFromJSON(json, context) {
  const { exported } = json;

  return exported;
}

export function referenceFromJSON(json, context) {
  let { reference } = json;

  const { Reference } = elements,
        referenceJSON = reference;  ///

  json = referenceJSON; ///

  reference = Reference.fromJSON(json, context);

  return reference;
}

export function parametersFromJSON(json, context) {
  let { parameters } = json;

  const { Parameters } = elements,
        parametersJSON = parameters;  ///

  json = parametersJSON; ///

  parameters = Parameters.fromJSON(json, context);

  return parameters;
}

export function proceduresFromJSON(json, context) {
  let { procedures } = json;

  const { Procedure } = elements,
        proceduresJSON = procedures; ///

  procedures = proceduresJSON.map((procedureJSON) => {
    const json = procedureJSON,  ///
          procedure = Procedure.fromJSON(json, context);

    return procedure;
  });

  return procedures;
}

export function releaseNameFromJSON(json, context) {
  const { releaseName } = json;

  return releaseName;
}

export function importBindingsFromJSON(json, context) {
  let { importBindings } = json;

  const { ImportBinding } = elements,
        importBindingsJSON = importBindings; ///

  importBindings = importBindingsJSON.map((importBindingJSON) => {
    const json = importBindingJSON,  ///
          importBinding = ImportBinding.fromJSON(json, context);

    return importBinding;
  });

  return importBindings;
}
