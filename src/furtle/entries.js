"use strict";

const entries = [
  {
    "keyword": "^(?:Boolean|Number|Nodes|Node|Function)\\b"
  },
  {
    "primitive": "^(?:null|true|false)\\b"
  },
  {
    "instruction": "^(?:forEach|nodeQuery|nodesQuery)"
  },
  {
    "special": "^(?:@|!|;|=|,|\\*|\\||\\/|\\(|\\)|\\[|\\]|\\{|\\}|\\.\\.\\.)"
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
