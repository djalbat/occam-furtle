"use strict";

const LATIN = "[\\p{Script=Latin}]",
      DECIMAL = "[0-9]";

const entries = [
  {
    "type": "^(?:List|Node|String|Number|Boolean)"
  },
  {
    "query": "^(?:nodeQuery|nodesQuery)"
  },
  {
    "primary-keyword": "^return"
  },
  {
    "secondary-keyword": "^(?:if|else|reduce|every|some|as)"
  },
  {
    "null": "^null"
  },
  {
    "boolean": "^(?:true|false)"
  },
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "special": "^(?:<|>|!=|==|!|=|,|;|&&|\\|\\||\\(|\\)|\\[|\\])"
  },
  {
    "name": `^${LATIN}+${DECIMAL}*`,
  },
  {
    "number": `^${DECIMAL}+`
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
