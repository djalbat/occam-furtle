"use strict";

import StepNode from "./node/step";
import SomeNode from "./node/some";
import TermNode from "./node/term";
import TermsNode from "./node/terms";
import EveryNode from "./node/every";
import LabelNode from "./node/label";
import ErrorNode from "./node/error";
import ReduceNode from "./node/reduce";
import TernaryNode from "./node/ternary";
import VariableNode from "./node/variable";
import NonsenseNode from "./node/nonsense";
import PrimitiveNode from "./node/primitive";
import ReferenceNode from "./node/reference";
import ParameterNode from "./node/parameter";
import NodeQueryNode from "./node/nodeQuery";
import ExpressionNode from "./node/expression";
import ComparisonNode from "./node/comparison";
import ParametersNode from "./node/parameters";
import NodesQueryNode from "./node/nodesQuery";
import ReturnBlockNode from "./node/returnBlock";
import ProcedureCallNode from "./node/procedureCall";
import NamedParameterNode from "./node/parameter/named";
import NamedParametersNode from "./node/parameters/named";
import ReturnStatementNode from "./node/statement/return";
import ArrayAssignmentNode from "./node/assignment/array";
import ObjectAssignmentNode from "./node/assignment/object";
import LogicalExpresionNode from "./node/expression/logical";
import NegatedExpressionNode from "./node/expression/negated";
import AnonymousProcedureNode from "./node/procedure/anoymous";
import VariableAssignmentNode from "./node/assignment/variable";
import VariableAssignmentsNode from "./node/assignments/variable";
import BracketedExpressionNode from "./node/expression/bracketed";
import ProcedureDeclarationNode from "./node/declaration/procedure";

import { STEP_RULE_NAME,
         SOME_RULE_NAME,
         TERM_RULE_NAME,
         TERMS_RULE_NAME,
         EVERY_RULE_NAME,
         LABEL_RULE_NAME,
         ERROR_RULE_NAME,
         REDUCE_RULE_NAME,
         TERNARY_RULE_NAME,
         VARIABLE_RULE_NAME,
         NONSENSE_RULE_NAME,
         PRIMITIVE_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAMETER_RULE_NAME,
         NODE_QUERY_RULE_NAME,
         EXPRESSION_RULE_NAME,
         COMPARISON_RULE_NAME,
         PARAMETERS_RULE_NAME,
         NODES_QUERY_RULE_NAME,
         RETURN_BLOCK_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME,
         NAMED_PARAMETER_RULE_NAME,
         NAMED_PARAMETERS_RULE_NAME,
         RETURN_STATEMENT_RULE_NAME,
         ARRAY_ASSIGNMENT_RULE_NAME,
         OBJECT_ASSIGNMENT_RULE_NAME,
         LOGICAL_EXPRESSION_RULE_NAME,
         NEGATED_EXPRESSION_RULE_NAME,
         VARIABLE_ASSIGNMENT_RULE_NAME,
         ANONYMOUS_PROCEDURE_RULE_NAME,
         VARIABLE_ASSIGNMENTS_RULE_NAME,
         BRACKETED_EXPRESSION_RULE_NAME,
         PROCEDURE_DECLARATION_RULE_NAME } from "./ruleNames";

const NonTerminalNodeMap = {
  [STEP_RULE_NAME]: StepNode,
  [SOME_RULE_NAME]: SomeNode,
  [TERM_RULE_NAME]: TermNode,
  [TERMS_RULE_NAME]: TermsNode,
  [EVERY_RULE_NAME]: EveryNode,
  [LABEL_RULE_NAME]: LabelNode,
  [ERROR_RULE_NAME]: ErrorNode,
  [REDUCE_RULE_NAME]: ReduceNode,
  [TERNARY_RULE_NAME]: TernaryNode,
  [VARIABLE_RULE_NAME]: VariableNode,
  [NONSENSE_RULE_NAME]: NonsenseNode,
  [PRIMITIVE_RULE_NAME]: PrimitiveNode,
  [REFERENCE_RULE_NAME]: ReferenceNode,
  [PARAMETER_RULE_NAME]: ParameterNode,
  [NODE_QUERY_RULE_NAME]: NodeQueryNode,
  [EXPRESSION_RULE_NAME]: ExpressionNode,
  [COMPARISON_RULE_NAME]: ComparisonNode,
  [PARAMETERS_RULE_NAME]: ParametersNode,
  [NODES_QUERY_RULE_NAME]: NodesQueryNode,
  [RETURN_BLOCK_RULE_NAME]: ReturnBlockNode,
  [PROCEDURE_CALL_RULE_NAME]: ProcedureCallNode,
  [NAMED_PARAMETER_RULE_NAME]: NamedParameterNode,
  [NAMED_PARAMETERS_RULE_NAME]: NamedParametersNode,
  [RETURN_STATEMENT_RULE_NAME]: ReturnStatementNode,
  [ARRAY_ASSIGNMENT_RULE_NAME]: ArrayAssignmentNode,
  [OBJECT_ASSIGNMENT_RULE_NAME]: ObjectAssignmentNode,
  [LOGICAL_EXPRESSION_RULE_NAME]: LogicalExpresionNode,
  [NEGATED_EXPRESSION_RULE_NAME]: NegatedExpressionNode,
  [ANONYMOUS_PROCEDURE_RULE_NAME]: AnonymousProcedureNode,
  [VARIABLE_ASSIGNMENT_RULE_NAME]: VariableAssignmentNode,
  [VARIABLE_ASSIGNMENTS_RULE_NAME]: VariableAssignmentsNode,
  [BRACKETED_EXPRESSION_RULE_NAME]: BracketedExpressionNode,
  [PROCEDURE_DECLARATION_RULE_NAME]: ProcedureDeclarationNode
};

export default NonTerminalNodeMap;
