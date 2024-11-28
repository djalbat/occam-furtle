"use strict";

const entries = [
  {
    "type": "^(?:Boolean|String|Number|Nodes|Node|Void)"
  },
  {
    "keyword": "^(?:If|Else|Return|ForEach|Break)"
  },
  {
    "primitive": "^(?:null|true|false)"
  },
  {
    "instruction": "^(?:nodeQuery|nodesQuery|isTerminalNode)"
  },
  {
    "special": "^(?:!=|==|=|;|,|_|&&|\\|\\||@|!|\\*|\\||\\/|\\(|\\)|\\[|\\]|\\{|\\}|\\.\\.\\.)"
  },
  {
    "name": "^[a-zA-Z\-]+"
  },
  {
    "number": "^[0-9]+"
  },
  {
    "unassigned": "^."
  }
];

export default entries;
