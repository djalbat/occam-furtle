"use strict";

const entries = [
  {
    "type": "^(?:Boolean|Number|Nodes|Node|Void)"
  },
  {
    "keyword": "^(?:If|Else)"
  },
  {
    "primitive": "^(?:null|true|false)"
  },
  {
    "instruction": "^(?:forEach|nodeQuery|nodesQuery)"
  },
  {
    "special": "^(?:@|!|\\*|\\||\\/|\\(|\\)|\\[|\\]|\\{|\\}|\\.\\.\\.|:|;|,|==|=|&&|\\|\\|)"
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
