"use strict";

import { FUNCTION } from "../constants";

export function chainContext(context) {
  return new Proxy(context, {
    get: (context, name, receiver) => {
      if (name in context) {
        return Reflect.get(context, name, receiver);
      }

      context = context.getContext(); ///

      const value = context[name];

      return (typeof value === FUNCTION) ?
               value.bind(context) :
                 value;
    }
  });
}

export default {
  chainContext
};
