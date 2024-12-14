"use strict";

import { stringUtilities } from "../../index";

const { nodeAsString } = stringUtilities;

export default class FileContext {
  constructor(node, tokens) {
    this.node = node;
    this.tokens = tokens;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getVariables() {
    const variables = [];

    return variables;
  }

  findProcedureByReference(reference) {
    const procedures = this.getProcedures(),
          name = reference.getName(),
          procedure = procedures.find((procedure) => {
            const nameMatches = procedure.matchName(name);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return procedure;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  trace(message) { console.log(message); }

  debug(message) { console.log(message); }

  info(message) { console.log(message); }

  warning(message) { console.log(message); }

  error(message) { console.log(message); }

  static fromNodeAndTokens(node, tokens) {
    const fileContext = new FileContext(node, tokens);

    return fileContext;
  }
}
