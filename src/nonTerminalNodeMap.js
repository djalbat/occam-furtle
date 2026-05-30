"use strict";

import StepNode from "./node/step";
import SomeNode from "./node/some";
import TermNode from "./node/term";
import TypeNode from "./node/type";
import TermsNode from "./node/terms";
import EveryNode from "./node/every";
import LabelNode from "./node/label";
import ErrorNode from "./node/error";
import ValueNode from "./node/value";
import ValuesNode from "./node/values";
import ReduceNode from "./node/reduce";
import TernaryNode from "./node/ternary";
import BindingNode from "./node/binding";
import BindingsNode from "./node/bindings";
import DocumentNode from "./node/document";
import VariableNode from "./node/variable";
import NonsenseNode from "./node/nonsense";
import PrimitiveNode from "./node/primitive";
import ReferenceNode from "./node/reference";
import ParameterNode from "./node/parameter";
import NodeQueryNode from "./node/nodeQuery";
import NodesQueryNode from "./node/nodesQuery";
import ExpressionNode from "./node/expression";
import ParametersNode from "./node/parameters";
import ReturnBlockNode from "./node/returnBlock";
import LogicalTermNode from "./node/term/logical";
import NegatedTermNode from "./node/term/negated";
import NamedBindingNode from "./node/binding/named";
import ProcedureCallNode from "./node/procedureCall";
import NamedBindingsNode from "./node/bindings/named";
import BracketedTermNode from "./node/term/bracketed";
import ComparisonTermNode from "./node/term/comparison";
import ReturnStatementNode from "./node/statement/return";
import ArrayAssignmentNode from "./node/assignment/array";
import ObjectAssignmentNode from "./node/assignment/object";
import AnonymousProcedureNode from "./node/procedure/anoymous";
import VariableAssignmentNode from "./node/assignment/variable";
import VariableAssignmentsNode from "./node/assignments/variable";
import ProcedureDeclarationNode from "./node/declaration/procedure";

import { STEP_RULE_NAME,
         SOME_RULE_NAME,
         TERM_RULE_NAME,
         TYPE_RULE_NAME,
         TERMS_RULE_NAME,
         EVERY_RULE_NAME,
         LABEL_RULE_NAME,
         ERROR_RULE_NAME,
         VALUE_RULE_NAME,
         VALUES_RULE_NAME,
         REDUCE_RULE_NAME,
         TERNARY_RULE_NAME,
         BINDING_RULE_NAME,
         BINDINGS_RULE_NAME,
         DOCUMENT_RULE_NAME,
         VARIABLE_RULE_NAME,
         NONSENSE_RULE_NAME,
         PRIMITIVE_RULE_NAME,
         REFERENCE_RULE_NAME,
         PARAMETER_RULE_NAME,
         NODE_QUERY_RULE_NAME,
         EXPRESSION_RULE_NAME,
         PARAMETERS_RULE_NAME,
         NODES_QUERY_RULE_NAME,
         RETURN_BLOCK_RULE_NAME,
         LOGICAL_TERM_RULE_NAME,
         NEGATED_TERM_RULE_NAME,
         NAMED_BINDING_RULE_NAME,
         NAMED_BINDINGS_RULE_NAME,
         BRACKETED_TERM_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME,
         COMPARISON_TERM_RULE_NAME,
         RETURN_STATEMENT_RULE_NAME,
         ARRAY_ASSIGNMENT_RULE_NAME,
         OBJECT_ASSIGNMENT_RULE_NAME,
         VARIABLE_ASSIGNMENT_RULE_NAME,
         ANONYMOUS_PROCEDURE_RULE_NAME,
         VARIABLE_ASSIGNMENTS_RULE_NAME,
         PROCEDURE_DECLARATION_RULE_NAME } from "./ruleNames";

const NonTerminalNodeMap = {
  [STEP_RULE_NAME]: StepNode,
  [SOME_RULE_NAME]: SomeNode,
  [TERM_RULE_NAME]: TermNode,
  [TYPE_RULE_NAME]: TypeNode,
  [TERMS_RULE_NAME]: TermsNode,
  [EVERY_RULE_NAME]: EveryNode,
  [LABEL_RULE_NAME]: LabelNode,
  [ERROR_RULE_NAME]: ErrorNode,
  [VALUE_RULE_NAME]: ValueNode,
  [VALUES_RULE_NAME]: ValuesNode,
  [REDUCE_RULE_NAME]: ReduceNode,
  [TERNARY_RULE_NAME]: TernaryNode,
  [BINDING_RULE_NAME]: BindingNode,
  [BINDINGS_RULE_NAME]: BindingsNode,
  [VARIABLE_RULE_NAME]: VariableNode,
  [NONSENSE_RULE_NAME]: NonsenseNode,
  [DOCUMENT_RULE_NAME]: DocumentNode,
  [PRIMITIVE_RULE_NAME]: PrimitiveNode,
  [REFERENCE_RULE_NAME]: ReferenceNode,
  [PARAMETER_RULE_NAME]: ParameterNode,
  [NODE_QUERY_RULE_NAME]: NodeQueryNode,
  [EXPRESSION_RULE_NAME]: ExpressionNode,
  [PARAMETERS_RULE_NAME]: ParametersNode,
  [NODES_QUERY_RULE_NAME]: NodesQueryNode,
  [RETURN_BLOCK_RULE_NAME]: ReturnBlockNode,
  [LOGICAL_TERM_RULE_NAME]: LogicalTermNode,
  [NEGATED_TERM_RULE_NAME]: NegatedTermNode,
  [NAMED_BINDING_RULE_NAME]: NamedBindingNode,
  [NAMED_BINDINGS_RULE_NAME]: NamedBindingsNode,
  [PROCEDURE_CALL_RULE_NAME]: ProcedureCallNode,
  [BRACKETED_TERM_RULE_NAME]: BracketedTermNode,
  [COMPARISON_TERM_RULE_NAME]: ComparisonTermNode,
  [RETURN_STATEMENT_RULE_NAME]: ReturnStatementNode,
  [ARRAY_ASSIGNMENT_RULE_NAME]: ArrayAssignmentNode,
  [OBJECT_ASSIGNMENT_RULE_NAME]: ObjectAssignmentNode,
  [ANONYMOUS_PROCEDURE_RULE_NAME]: AnonymousProcedureNode,
  [VARIABLE_ASSIGNMENT_RULE_NAME]: VariableAssignmentNode,
  [VARIABLE_ASSIGNMENTS_RULE_NAME]: VariableAssignmentsNode,
  [PROCEDURE_DECLARATION_RULE_NAME]: ProcedureDeclarationNode
};

export default NonTerminalNodeMap;
