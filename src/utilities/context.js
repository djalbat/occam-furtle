"use strict";

import BlockContext from "../context/block";

import { isContextBlockContext } from "../context/block";

export function free(innerFunction, context) {
  context = freeContext(context); ///

  return innerFunction(context);
}

export function confine(innerFunction, variables, context) {
  const blockContext = BlockContext.fromVariables(variables, context);

  context = blockContext;  ///

  return innerFunction(context);
}

function freeContext(context) {
  let contextBlockContext = isContextBlockContext(context);

  while (contextBlockContext) {
    context = context.getContext();

    contextBlockContext = isContextBlockContext(context);
  }

  return context;
}
