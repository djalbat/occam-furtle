"use strict";

import elements from "../elements";
import NominalValue from "../nominalValue";

import { primitiveFromList, primitiveFromBoolean, primitiveFromNominalValue, primitiveFromStringLiteral } from "../utilities/primitive";

export function valueFromList(list, context) {
  const { Value } = elements,
    variable = null,
    primitive = primitiveFromList(list, context),
    string = primitive.getString(),
    node = null,
    breakPoint = null;

  context = null;

  const value = new Value(context, string, node, breakPoint, variable, primitive);

  return value;
}

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

export function valueFromNominalValue(nominalValue, context) {
  const { Value } = elements,
        variable = null,
        primitive = primitiveFromNominalValue(nominalValue, context),
        string = primitive.getString(),
        breakPoint = null,
        node = null,
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
        list = nodes.map((node) => {
          const nominalValue = NominalValue.fromNode(node, context);

          return nominalValue;
        }),
        value = valueFromList(list, context);

  return value;
}

export default {
  valueFromList,
  valueFromBoolean,
  valueFromNominalValue,
  valueFromStringLiteral,
  valueFromPrimitive
};
