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
import NonsenseNode from "./node/nonsense";
import ReferenceNode from "./node/reference";
import ParameterNode from "./node/parameter";
import ExpressionNode from "./node/expression";
import ComparisonNode from "./node/comparison";
import ParametersNode from "./node/parameters";
import ExpressionsNode from "./node/expressions";
import ReturnBlockNode from "./node/returnBlock";
import ProcedureCallNode from "./node/procedureCall";
import ReturnStatementNode from "./node/statement/return";
import ArrayAssignmentNode from "./node/assignment/array";
import ObjectAssignmentNode from "./node/assignment/object";
import LogicalExpresionNode from "./node/expression/logical";
import AnonymousProcedureNode from "./node/procedure/anoymous";
import VariableAssignmentNode from "./node/assignment/variable";
import VariableAssignmentsNode from "./node/assignments/variable";
import BracketedExpressionNode from "./node/expression/bracketed";
import ProcedureDeclarationNode from "./node/declaration/procedure";

import { STEP_RULE_NAME,
         SOME_RULE_NAME,
         EVERY_RULE_NAME,
         LABEL_RULE_NAME,
         ERROR_RULE_NAME,
         QUERY_RULE_NAME,
         REDUCE_RULE_NAME,
         TERNARY_RULE_NAME,
         VARIABLE_RULE_NAME,
         NONSENSE_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAMETER_RULE_NAME,
         EXPRESSION_RULE_NAME,
         COMPARISON_RULE_NAME,
         PARAMETERS_RULE_NAME,
         EXPRESSIONS_RULE_NAME,
         RETURN_BLOCK_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME,
         RETURN_STATEMENT_RULE_NAME,
         ARRAY_ASSIGNMENT_RULE_NAME,
         OBJECT_ASSIGNMENT_RULE_NAME,
         LOGICAL_EXPRESSION_RULE_NAME,
         VARIABLE_ASSIGNMENT_RULE_NAME,
         ANONYMOUS_PROCEDURE_RULE_NAME,
         VARIABLE_ASSIGNMENTS_RULE_NAME,
         BRACKETED_EXPRESSION_RULE_NAME,
         PROCEDURE_DECLARATION_RULE_NAME } from "./ruleNames";

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
  [NONSENSE_RULE_NAME]: NonsenseNode,
  [REFERENCE_RULE_NAME]: ReferenceNode,
  [PARAMETER_RULE_NAME]: ParameterNode,
  [EXPRESSION_RULE_NAME]: ExpressionNode,
  [COMPARISON_RULE_NAME]: ComparisonNode,
  [PARAMETERS_RULE_NAME]: ParametersNode,
  [EXPRESSIONS_RULE_NAME]: ExpressionsNode,
  [RETURN_BLOCK_RULE_NAME]: ReturnBlockNode,
  [PROCEDURE_CALL_RULE_NAME]: ProcedureCallNode,
  [RETURN_STATEMENT_RULE_NAME]: ReturnStatementNode,
  [ARRAY_ASSIGNMENT_RULE_NAME]: ArrayAssignmentNode,
  [OBJECT_ASSIGNMENT_RULE_NAME]: ObjectAssignmentNode,
  [LOGICAL_EXPRESSION_RULE_NAME]: LogicalExpresionNode,
  [ANONYMOUS_PROCEDURE_RULE_NAME]: AnonymousProcedureNode,
  [VARIABLE_ASSIGNMENT_RULE_NAME]: VariableAssignmentNode,
  [VARIABLE_ASSIGNMENTS_RULE_NAME]: VariableAssignmentsNode,
  [BRACKETED_EXPRESSION_RULE_NAME]: BracketedExpressionNode,
  [PROCEDURE_DECLARATION_RULE_NAME]: ProcedureDeclarationNode
};

export default NonTerminalNodeMap;
