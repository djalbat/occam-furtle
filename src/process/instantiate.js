"use strict";

import { bnfUtilities } from "occam-languages";

import { TYPE_RULE_NAME } from "../ruleNames";

const { instantiate, ruleFromRuleName } = bnfUtilities;

const typePlaceholderRule = ruleFromRuleName(TYPE_RULE_NAME);

export function instantiateType(string, context) { return instantiate(typePlaceholderRule, string, context); }
