"use strict";

const elements = {};

export function define(Element) {
  const { name } = Element;

  elements[name] = Element;

  return Element;
}

Object.assign(elements, {
  define
});

export default elements;
