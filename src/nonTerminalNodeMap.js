"use strict";

import StepNode from "./node/step";
import SomeNode from "./node/some";
import EveryNode from "./node/every";
import LabelNode from "./node/label";
import ErrorNode from "./node/error";
import QueryNode from "./node/query";
import ReduceNode from "./node/reduce";
import TernaryNode from "./node/ternary";
import VariableNode from "./node/variable";
import ReferenceNode from "./node/reference";
import ParameterNode from "./node/parameter";
import StatementNode from "./node/statement";
import ProcedureNode from "./node/procedure";
import ExpressionNode from "./node/expression";
import ComparisonNode from "./node/comparison";
import ParametersNode from "./node/parameters";
import DeclarationNode from "./node/declaration";
import ExpressionsNode from "./node/expressions";
import ReturnBlockNode from "./node/returnBlock";
import ProcedureCallNode from "./node/procedureCall";
import ArrayAssignmentNode from "./node/assignment/array";
import ObjectAssignmentNode from "./node/assignment/object";
import VariableAssignmentNode from "./node/assignment/variable";
import VariableAssignmentsNode from "./node/assignments/variable";

import { STEP_RULE_NAME,
         SOME_RULE_NAME,
         EVERY_RULE_NAME,
         LABEL_RULE_NAME,
         ERROR_RULE_NAME,
         QUERY_RULE_NAME,
         REDUCE_RULE_NAME,
         TERNARY_RULE_NAME,
         VARIABLE_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAMETER_RULE_NAME,
         STATEMENT_RULE_NAME,
         PROCEDURE_RULE_NAME,
         EXPRESSION_RULE_NAME,
         COMPARISON_RULE_NAME,
         PARAMETERS_RULE_NAME,
         DECLARATION_RULE_NAME,
         EXPRESSIONS_RULE_NAME,
         RETURN_BLOCK_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME,
         ARRAY_ASSIGNMENT_RULE_NAME,
         OBJECT_ASSIGNMENT_RULE_NAME,
         VARIABLE_ASSIGNMENT_RULE_NAME,
         VARIABLE_ASSIGNMENTS_RULE_NAME } from "./ruleNames";

const NonTerminalNodeMap = {
  [STEP_RULE_NAME]: StepNode,
  [SOME_RULE_NAME]: SomeNode,
  [EVERY_RULE_NAME]: EveryNode,
  [LABEL_RULE_NAME]: LabelNode,
  [ERROR_RULE_NAME]: ErrorNode,
  [QUERY_RULE_NAME]: QueryNode,
  [REDUCE_RULE_NAME]: ReduceNode,
  [TERNARY_RULE_NAME]: TernaryNode,
  [VARIABLE_RULE_NAME]: VariableNode,
  [REFERENCE_RULE_NAME]: ReferenceNode,
  [PARAMETER_RULE_NAME]: ParameterNode,
  [STATEMENT_RULE_NAME]: StatementNode,
  [PROCEDURE_RULE_NAME]: ProcedureNode,
  [EXPRESSION_RULE_NAME]: ExpressionNode,
  [COMPARISON_RULE_NAME]: ComparisonNode,
  [PARAMETERS_RULE_NAME]: ParametersNode,
  [DECLARATION_RULE_NAME]: DeclarationNode,
  [EXPRESSIONS_RULE_NAME]: ExpressionsNode,
  [RETURN_BLOCK_RULE_NAME]: ReturnBlockNode,
  [PROCEDURE_CALL_RULE_NAME]: ProcedureCallNode,
  [ARRAY_ASSIGNMENT_RULE_NAME]: ArrayAssignmentNode,
  [OBJECT_ASSIGNMENT_RULE_NAME]: ObjectAssignmentNode,
  [VARIABLE_ASSIGNMENT_RULE_NAME]: VariableAssignmentNode,
  [VARIABLE_ASSIGNMENTS_RULE_NAME]: VariableAssignmentsNode
};

export default NonTerminalNodeMap;