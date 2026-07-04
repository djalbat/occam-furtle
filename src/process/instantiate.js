"use strict";

import { bnfUtilities } from "occam-languages";

import { TYPE_RULE_NAME } from "../ruleNames";
import { PERIOD, PERIOD_STRING_LITERAL } from "../constants";

const { instantiate, ruleFromRuleName } = bnfUtilities;

let delimiter;

delimiter = PERIOD_STRING_LITERAL;

const typePlaceholderRule = ruleFromRuleName(TYPE_RULE_NAME, delimiter);

delimiter = PERIOD;

export function instantiateType(string, context) { return instantiate(typePlaceholderRule, string, delimiter, context); }
