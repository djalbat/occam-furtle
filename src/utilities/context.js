"use strict";

import { LEVELS, FUNCTION, DOUBLE_SPACE } from "../constants";

export function chainContext(context) {
  return new Proxy(context, {
    get: (instance, name, receiver) => {
      const levelsIncludeName = LEVELS.includes(name);

      if (levelsIncludeName) {
        return (message, node = null) => {
          const level = name, ///
                depth = instance.getDepth(),
                indent = DOUBLE_SPACE.repeat(depth);

          message = `${indent}${message}`;

          const fileContext = instance.getFileContext();

          fileContext.writeToLog(level, message, node);
        }
      }

      if (name in instance) {
        return Reflect.get(instance, name, receiver);
      }

      const context = instance.getContext(),
            value = context[name];

      return (typeof value === FUNCTION) ?
               value.bind(context) :
                 value;
    }
  });
}

export function lineIndexFromNodeAndTokens(node, tokens, lineIndex) {
  if (node !== null) {
    lineIndex = 0;

    const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);

    tokens.some((token, tokenIndex) => {
      const tokenEndOfLineToken = token.isEndOfLineToken();

      if (tokenEndOfLineToken) {
        lineIndex += 1;
      }

      if (tokenIndex === firstSignificantTokenIndex) {
        return true;
      }
    });
  }

  return lineIndex;
}

export default {
  chainContext,
  lineIndexFromNodeAndTokens
};
