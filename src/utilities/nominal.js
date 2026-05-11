"use strict";

import { NominalValue } from "occam-nominal";

import { termFromNominalValue, termFromNominalValues } from "../utilities/term";
import { valueFromNominalValue, valueFromNominalValues } from "../utilities/value";

export function termFromNodeAndNominalValue(node, nominalValue) {
  const context = nominalValue.getContext();

  nominalValue = NominalValue.fromNode(node, context);

  const term = termFromNominalValue(nominalValue);

  return term;
}

export function valueFromNodeAndNominalValue(node, nominalValue) {
  const context = nominalValue.getContext();

  nominalValue = NominalValue.fromNode(node, context);

  const value = valueFromNominalValue(nominalValue);

  return value;
}

export function termFromNodesAndNominalValue(nodes, nominalValue) {
  const context = nominalValue.getContext(),
        nominalValues = nodes.map((node) => {
          const nominalValue = NominalValue.fromNode(node, context);

          return nominalValue;
        }),
        term = termFromNominalValues(nominalValues);

  return term;
}

export function valueFromNodesAndNominalValue(nodes, nominalValue) {
  const context = nominalValue.getContext(),
        nominalValues = nodes.map((node) => {
          const nominalValue = NominalValue.fromNode(node, context);

          return nominalValue;
        }),
        value = valueFromNominalValues(nominalValues);

  return value;
}
