"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateLabel } from "../process/instantiate";
import { nameFromLabelNode } from "../utilities/element";

const { breakPointToBreakPointJSON } = breakPointUtilities;

export default define(class Label extends Element {
  constructor(context, string, node, breakPoint, name) {
    super(context, string, node, breakPoint);

    this.name = name;
  }

  getName() {
    return this.name;
  }

  compareProcedureName(procedureName) {
    const procedureNameCompares = (this.name === procedureName);

    return procedureNameCompares;
  }

  toJSON() {
    const string = this.getString();

    let breakPoint;

    breakPoint = this.getBreakPoint();

    const breakPointJSON = breakPointToBreakPointJSON(breakPoint);

    breakPoint = breakPointJSON;  ///

    const json = {
      string,
      breakPoint
    };

    return json;
  }

  static name = "Label";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            labelNode = instantiateLabel(string, context),
            node = labelNode,  ///
            breakPoint = null,
            name = nameFromLabelNode(labelNode, context);

      context = null;

      const label = new Label(context, string, node, breakPoint, name);

      return label;
    }, context);
  }
});
