"use strict";

import { bnfUtilities } from "occam-languages";

import { PERIOD, PERIOD_STRING_LITERAL } from "../constants";
import { TYPE_RULE_NAME, LABEL_RULE_NAME, PARAMETERS_RULE_NAME } from "../ruleNames";

const { instantiate, ruleFromRuleName } = bnfUtilities;

let delimiter;

delimiter = PERIOD_STRING_LITERAL;

const typePlaceholderRule = ruleFromRuleName(TYPE_RULE_NAME, delimiter),
      labelPlaceholderRule = ruleFromRuleName(LABEL_RULE_NAME, delimiter),
      parametersPlaceholderRule = ruleFromRuleName(PARAMETERS_RULE_NAME, delimiter);

delimiter = PERIOD;

export function instantiateType(string, context) { return instantiate(typePlaceholderRule, string, delimiter, context); }

export function instantiateLabel(string, context) { return instantiate(labelPlaceholderRule, string, delimiter, context); }

export function instantiateParameters(string, context) { return instantiate(parametersPlaceholderRule, string, delimiter, context); }
