"use strict";

import elements from "../elements";

import { expressionsArrayFromNodes } from "../utilities/element";
import { expressionsStringFromExpressionsArray } from "../utilities/string";

export function expressionsFromNodes(nodes, context) {
  const { Expressions } = elements,
        expressionsArray = expressionsArrayFromNodes(nodes, context),
        expressionsString = expressionsStringFromExpressionsArray(expressionsArray),
        string = expressionsString, ///
        array = expressionsArray, ///
        expressions = new Expressions(string, array);

  return expressions;
}

export default {
  expressionsFromNodes
};
