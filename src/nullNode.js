"use strict";

class NullNode {
  static fromNothing() {
    const nullNode = new NullNode();

    return nullNode;
  }
}

const nullNode = NullNode.fromNothing();

export default nullNode;

