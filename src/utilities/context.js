"use strict";

import BlockContext from "../context/block";
import LiteralContext from "../context/literal";

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

export function instantiate(innerFunction, context) {
  const literalContext = LiteralContext.fromNothing(context);

  context = literalContext;  ///

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
