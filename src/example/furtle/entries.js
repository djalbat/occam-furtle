"use strict";

const LATIN = "[\\p{Script=Latin}]",
  DECIMAL = "[0-9]";

const entries = [
  {
    "type": "^(?:List|Node|String|Number|Boolean|Integer)"
  },
  {
    "query": "^(?:nodeQuery|nodesQuery)"
  },
  {
    "primary-keyword": "^return"
  },
  {
    "secondary-keyword": "^(?:as|if|else|reduce|every|some|toInteger|tryInteger)"
  },
  {
    "null": "^null"
  },
  {
    "boolean": "^(?:true|false)"
  },
  {
    "integer": "^[+\\-]?\\d+"
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
