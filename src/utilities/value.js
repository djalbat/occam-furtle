"use strict";

import { NominalValue } from "occam-nominal";

import elements from "../elements";

import { primitiveFromBoolean, primitiveFromNominalValue, primitiveFromNominalValues, primitiveFromStringLiteral } from "../utilities/primitive";

export function valueFromBoolean(boolean, context) {
  const { Value } = elements,
        variable = null,
        primitive = primitiveFromBoolean(boolean, context),
        string = primitive.getString(),
        node = null,
        breakPoint = null;

  context = null;

  const value = new Value(context, string, node, breakPoint, variable, primitive);

  return value;
}

export function valueFromPrimitive(primitive) {
  const { Value } = elements,
        context = null,
        string = primitive.getString(),
        node = null,
        breakPoint = null,
        variable = null,
        value = new Value(context, string, node, breakPoint, variable, primitive);

  return value;
}

export function valueFromNominalValue(nominalValue) {
  const { Value } = elements,
        variable = null,
        primitive = primitiveFromNominalValue(nominalValue),
        string = primitive.getString(),
        breakPoint = null,
        node = null,
        context = null,
        value = new Value(context, string, node, breakPoint, variable, primitive);

  return value;
}

export function valueFromNominalValues(nominalValues) {
  const { Value } = elements,
        variable = null,
        primitive = primitiveFromNominalValues(nominalValues),
        string = primitive.getString(),
        node = null,
        breakPoint = null,
        context = null,
        value = new Value(context, string, node, breakPoint, variable, primitive);

  return value;
}

export function valueFromStringLiteral(stringLiteral, context) {
  const { Value } = elements,
        variable = null,
        primitive = primitiveFromStringLiteral(stringLiteral, context),
        string = primitive.getString(),
        node = null,
        breakPoint = null;

  context = null;

  const value = new Value(context, string, node, breakPoint, variable, primitive);

  return value;
}

export function valueFromNodeAndNominalValue(node, nominalValue) {
  const context = nominalValue.getContext();

  nominalValue = NominalValue.fromNode(node, context);

  const value = valueFromNominalValue(nominalValue);

  return value;
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

export default {
  valueFromBoolean,
  valueFromNominalValue,
  valueFromNominalValues,
  valueFromStringLiteral,
  valueFromPrimitive
};
