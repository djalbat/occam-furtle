"use strict";

import BlockContext from "../context/block";

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
  let contextBlockContext = (context instanceof BlockContext);

  while (contextBlockContext) {
    context = context.getContext();

    contextBlockContext = (context instanceof BlockContext)
  }

  return context;
}
