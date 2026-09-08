"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateReference } from "../process/instantiate";
import { nameFromReferenceNode } from "../utilities/element";

export default define(class Reference extends Element {
  constructor(context, string, node, breakPoint, name) {
    super(context, string, node, breakPoint);

    this.name = name;
  }

  getName() {
    return this.name;
  }

  getProcedureName() {
    const procedureName = this.name;  ///

    return procedureName;
  }

  toJSON() {
    let json;

    const string = this.getString();

    json = {
      string
    };

    return json;
  }

  static name = "Reference";

  static fromJSON(json, context) {
    let reference;

    instantiate((context) => {
      const { string } = json,
            referencelNode = instantiateReference(string, context),
            node = referencelNode,  ///
            breakPoint = null,
            name = nameFromReferenceNode(referencelNode, context);

      context = null;

      reference = new Reference(context, string, node, breakPoint, name);
    }, context);

    return reference;
  }
});
