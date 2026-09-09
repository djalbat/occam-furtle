"use strict";

import { bnfUtilities } from "occam-languages";

import { PERIOD, PERIOD_STRING_LITERAL } from "../constants";
import { TYPE_RULE_NAME,
         LABEL_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAMETERS_RULE_NAME,
         IMPORT_BINDING_RULE_NAME,
         IMPORT_STATEMENT_RULE_NAME } from "../ruleNames";

const { instantiate, ruleFromRuleName } = bnfUtilities;

let delimiter;

delimiter = PERIOD_STRING_LITERAL;

const typePlaceholderRule = ruleFromRuleName(TYPE_RULE_NAME, delimiter),
      labelPlaceholderRule = ruleFromRuleName(LABEL_RULE_NAME, delimiter),
      referencePlaceholderRule = ruleFromRuleName(REFERENCE_RULE_NAME, delimiter),
      parametersPlaceholderRule = ruleFromRuleName(PARAMETERS_RULE_NAME, delimiter),
      importBindingPlaceholderRule = ruleFromRuleName(IMPORT_BINDING_RULE_NAME, delimiter),
      importStatementPlaceholderRule = ruleFromRuleName(IMPORT_STATEMENT_RULE_NAME, delimiter);

delimiter = PERIOD;

export function instantiateType(string, context) { return instantiate(typePlaceholderRule, string, delimiter, context); }

export function instantiateLabel(string, context) { return instantiate(labelPlaceholderRule, string, delimiter, context); }

export function instantiateReference(string, context) { return instantiate(referencePlaceholderRule, string, delimiter, context); }

export function instantiateParameters(string, context) { return instantiate(parametersPlaceholderRule, string, delimiter, context); }

export function instantiateImportBinding(string, context) { return instantiate(importBindingPlaceholderRule, string, delimiter, context); }

export function instantiateImportStatement(string, context) { return instantiate(importStatementPlaceholderRule, string, delimiter, context); }
