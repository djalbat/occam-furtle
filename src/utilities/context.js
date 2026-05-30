"use strict";

import BlockContext from "../context/block";

export function confine(innerFunction, variables, context) {
  const blockContext = BlockContext.fromVariables(variables, context);

  context = blockContext;  ///

  return innerFunction(context);
}
