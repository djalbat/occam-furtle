"use strict";

const LATIN = "[\\p{Script=Latin}]",
      DECIMAL = "[0-9]";

const entries = [
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "primary-keyword": "^return"
  },
  {
    "secondary-keyword": "^(?:as|if|else)"
  },
  {
    "function-name": "^(?:nodeQuery|nodesQuery|reduce|every|some|toInteger|tryInteger)"
  },
  {
    "type": "^(?:List|Node|String|Boolean|Integer)"
  },
  {
    "boolean": "^(?:true|false)"
  },
  {
    "integer": "^[+\\-]?\\d+"
  },
  {
    "null": "^null"
  },
  {
    "name": `^${LATIN}+${DECIMAL}*`,
  },
  {
    "special": "^(?:<|>|!=|==|!|=|,|;|&&|\\|\\||\\(|\\)|\\[|\\])"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default entries;
