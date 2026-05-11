"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get aliasFromNamedBindingNode () {
        return aliasFromNamedBindingNode;
    },
    get anonymousProcedureFromAnonymousProcedureNode () {
        return anonymousProcedureFromAnonymousProcedureNode;
    },
    get anonymousProcedureFromEveryNode () {
        return anonymousProcedureFromEveryNode;
    },
    get anonymousProcedureFromReduceNode () {
        return anonymousProcedureFromReduceNode;
    },
    get anonymousProcedureFromSomeNode () {
        return anonymousProcedureFromSomeNode;
    },
    get arrayAssignmentFromArrayAssignmentNode () {
        return arrayAssignmentFromArrayAssignmentNode;
    },
    get arrayAssignmentFromStepNode () {
        return arrayAssignmentFromStepNode;
    },
    get bindingFromBindingNode () {
        return bindingFromBindingNode;
    },
    get bindingsArrayFromBindingsNode () {
        return bindingsArrayFromBindingsNode;
    },
    get bindingsFromArrayAssignmentNode () {
        return bindingsFromArrayAssignmentNode;
    },
    get bindingsFromBindingsNode () {
        return bindingsFromBindingsNode;
    },
    get bracketedTermFromBracketedTermNode () {
        return bracketedTermFromBracketedTermNode;
    },
    get bracketedTermFromTermNode () {
        return bracketedTermFromTermNode;
    },
    get comparisonTermFromComparisonTermNode () {
        return comparisonTermFromComparisonTermNode;
    },
    get comparisonTermFromTermNode () {
        return comparisonTermFromTermNode;
    },
    get disjunctionFromLogicalTermNode () {
        return disjunctionFromLogicalTermNode;
    },
    get elseExpressionFromTernaryNode () {
        return elseExpressionFromTernaryNode;
    },
    get errorFromErrorNode () {
        return errorFromErrorNode;
    },
    get everyFromEveryNode () {
        return everyFromEveryNode;
    },
    get everyFromExpressionNode () {
        return everyFromExpressionNode;
    },
    get expressionFromExpressionNode () {
        return expressionFromExpressionNode;
    },
    get expressionFromReduceNode () {
        return expressionFromReduceNode;
    },
    get expressionFromTypeAndVariableNode () {
        return expressionFromTypeAndVariableNode;
    },
    get expressionFromVariableAssignmentNode () {
        return expressionFromVariableAssignmentNode;
    },
    get expressionFromVariableNode () {
        return expressionFromVariableNode;
    },
    get ifExpressionFromTernaryNode () {
        return ifExpressionFromTernaryNode;
    },
    get initialExpressionFromReduceNode () {
        return initialExpressionFromReduceNode;
    },
    get labelFromLabelNode () {
        return labelFromLabelNode;
    },
    get labelFromProcedureDeclarationNode () {
        return labelFromProcedureDeclarationNode;
    },
    get leftTermFromCompzrisonTermNode () {
        return leftTermFromCompzrisonTermNode;
    },
    get leftTermFromLogicalTermNode () {
        return leftTermFromLogicalTermNode;
    },
    get logicalTermFromLogicalTermNode () {
        return logicalTermFromLogicalTermNode;
    },
    get logicalTermFromTermNode () {
        return logicalTermFromTermNode;
    },
    get nameFromBindingNode () {
        return nameFromBindingNode;
    },
    get nameFromLabelNode () {
        return nameFromLabelNode;
    },
    get nameFromNamedBindingNode () {
        return nameFromNamedBindingNode;
    },
    get nameFromParaneterNode () {
        return nameFromParaneterNode;
    },
    get nameFromReferenceNode () {
        return nameFromReferenceNode;
    },
    get nameFromVariableNode () {
        return nameFromVariableNode;
    },
    get namedBindingFromNamedBindingNode () {
        return namedBindingFromNamedBindingNode;
    },
    get namedBindingsFromNamedBindingsNode () {
        return namedBindingsFromNamedBindingsNode;
    },
    get namedBindingsFromObjectAssignmentNode () {
        return namedBindingsFromObjectAssignmentNode;
    },
    get namedParametersArrayFromNamedBindingNodes () {
        return namedParametersArrayFromNamedBindingNodes;
    },
    get negatedFromComparisonTermNode () {
        return negatedFromComparisonTermNode;
    },
    get negatedTermFromNegatedTermNode () {
        return negatedTermFromNegatedTermNode;
    },
    get negatedTermFromTermNode () {
        return negatedTermFromTermNode;
    },
    get nodeQueryFromExpressionNode () {
        return nodeQueryFromExpressionNode;
    },
    get nodeQueryFromNodeQueryNode () {
        return nodeQueryFromNodeQueryNode;
    },
    get nodesQueryFromExpressionNode () {
        return nodesQueryFromExpressionNode;
    },
    get nodesQueryFromNodesQueryNode () {
        return nodesQueryFromNodesQueryNode;
    },
    get nonsensicalFromReturnBlockNode () {
        return nonsensicalFromReturnBlockNode;
    },
    get objectAssignmentFromObjectAssignmentNode () {
        return objectAssignmentFromObjectAssignmentNode;
    },
    get objectAssignmentFromStepNode () {
        return objectAssignmentFromStepNode;
    },
    get parameterFromParameterNode () {
        return parameterFromParameterNode;
    },
    get parametersArrayFromParametersNode () {
        return parametersArrayFromParametersNode;
    },
    get parametersFromAnonymousProcedureNode () {
        return parametersFromAnonymousProcedureNode;
    },
    get parametersFromParametersNode () {
        return parametersFromParametersNode;
    },
    get parametersFromProcedureDeclarationNode () {
        return parametersFromProcedureDeclarationNode;
    },
    get primitiveFromPrimitiveNode () {
        return primitiveFromPrimitiveNode;
    },
    get primitiveFromTermNode () {
        return primitiveFromTermNode;
    },
    get primitiveFromValueNode () {
        return primitiveFromValueNode;
    },
    get procedureCallFromExpressionNode () {
        return procedureCallFromExpressionNode;
    },
    get procedureCallFromProcedureCallNode () {
        return procedureCallFromProcedureCallNode;
    },
    get procedureDeclarationFromProcedureDeclarationNode () {
        return procedureDeclarationFromProcedureDeclarationNode;
    },
    get procedureFromProcedureDeclarationNode () {
        return procedureFromProcedureDeclarationNode;
    },
    get queryFromNodeQueryNode () {
        return queryFromNodeQueryNode;
    },
    get queryFromNodesQueryNode () {
        return queryFromNodesQueryNode;
    },
    get reduceFromExpressionNode () {
        return reduceFromExpressionNode;
    },
    get reduceFromReduceNode () {
        return reduceFromReduceNode;
    },
    get referenceFromProcedureCallNode () {
        return referenceFromProcedureCallNode;
    },
    get referenceFromReferenceNode () {
        return referenceFromReferenceNode;
    },
    get returnBlockFromAnonymousProcedureNode () {
        return returnBlockFromAnonymousProcedureNode;
    },
    get returnBlockFromExpressionNode () {
        return returnBlockFromExpressionNode;
    },
    get returnBlockFromProcedureDeclarationNode () {
        return returnBlockFromProcedureDeclarationNode;
    },
    get returnBlockFromReturnBlockNode () {
        return returnBlockFromReturnBlockNode;
    },
    get returnStatementFromReturnBlockNode () {
        return returnStatementFromReturnBlockNode;
    },
    get returnStatementFromReturnStatementNode () {
        return returnStatementFromReturnStatementNode;
    },
    get rightTermFromCompzrisonTermNode () {
        return rightTermFromCompzrisonTermNode;
    },
    get rightTermFromLogicalTermNode () {
        return rightTermFromLogicalTermNode;
    },
    get someFromExpressionNode () {
        return someFromExpressionNode;
    },
    get someFromSomeNode () {
        return someFromSomeNode;
    },
    get stepFromStepNode () {
        return stepFromStepNode;
    },
    get stepsFromReturnBlockNode () {
        return stepsFromReturnBlockNode;
    },
    get termFromBracketedTermNode () {
        return termFromBracketedTermNode;
    },
    get termFromExpressionNode () {
        return termFromExpressionNode;
    },
    get termFromNegatedTermNode () {
        return termFromNegatedTermNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
    },
    get termFromTernaryNode () {
        return termFromTernaryNode;
    },
    get termsArrayFromTermNodes () {
        return termsArrayFromTermNodes;
    },
    get termsFromTermsNode () {
        return termsFromTermsNode;
    },
    get ternaryFromExpressionNode () {
        return ternaryFromExpressionNode;
    },
    get ternaryFromTernaryNode () {
        return ternaryFromTernaryNode;
    },
    get typeFromBindingNode () {
        return typeFromBindingNode;
    },
    get typeFromLogicalTermNode () {
        return typeFromLogicalTermNode;
    },
    get typeFromNamedBindingNode () {
        return typeFromNamedBindingNode;
    },
    get typeFromNegatedTermNode () {
        return typeFromNegatedTermNode;
    },
    get typeFromParaneterNode () {
        return typeFromParaneterNode;
    },
    get typeFromPrimitiveNode () {
        return typeFromPrimitiveNode;
    },
    get typeFromProcedureAnonymousProcedureNode () {
        return typeFromProcedureAnonymousProcedureNode;
    },
    get typeFromProcedureDeclarationNode () {
        return typeFromProcedureDeclarationNode;
    },
    get typeFromVariableAssignmentsNode () {
        return typeFromVariableAssignmentsNode;
    },
    get typeFromVariableNode () {
        return typeFromVariableNode;
    },
    get valueFromPrimitiveNode () {
        return valueFromPrimitiveNode;
    },
    get valueFromReturnStatementNode () {
        return valueFromReturnStatementNode;
    },
    get valueFromValueNode () {
        return valueFromValueNode;
    },
    get valuesArrayFromValueNodes () {
        return valuesArrayFromValueNodes;
    },
    get valuesFromProcedureCallNode () {
        return valuesFromProcedureCallNode;
    },
    get valuesFromValuesNode () {
        return valuesFromValuesNode;
    },
    get variableAssignmentFromTypeAndVariableAssignmentNode () {
        return variableAssignmentFromTypeAndVariableAssignmentNode;
    },
    get variableAssignmentsArrayFromTypeAndVariableAssignmentsNode () {
        return variableAssignmentsArrayFromTypeAndVariableAssignmentsNode;
    },
    get variableAssignmentsFromStepNode () {
        return variableAssignmentsFromStepNode;
    },
    get variableAssignmentsFromVariableAssignmentsNode () {
        return variableAssignmentsFromVariableAssignmentsNode;
    },
    get variableFromArrayAssignmentNode () {
        return variableFromArrayAssignmentNode;
    },
    get variableFromEveryNode () {
        return variableFromEveryNode;
    },
    get variableFromNodeQueryNode () {
        return variableFromNodeQueryNode;
    },
    get variableFromNodesQueryNode () {
        return variableFromNodesQueryNode;
    },
    get variableFromObjectAssignmentNode () {
        return variableFromObjectAssignmentNode;
    },
    get variableFromReduceNode () {
        return variableFromReduceNode;
    },
    get variableFromSomeNode () {
        return variableFromSomeNode;
    },
    get variableFromTermNode () {
        return variableFromTermNode;
    },
    get variableFromTypeAndVariableAssignmentNode () {
        return variableFromTypeAndVariableAssignmentNode;
    },
    get variableFromTypeAndVariableNode () {
        return variableFromTypeAndVariableNode;
    },
    get variableFromValueNode () {
        return variableFromValueNode;
    },
    get variableFromVariableNode () {
        return variableFromVariableNode;
    }
});
const _occamquery = require("occam-query");
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _types = require("../types");
const _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stepFromStepNode(stepNode, context) {
    const { Step } = _elements.default, node = stepNode, string = context.nodeAsString(node), breakPoint = null, arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variableAssigments = variableAssignmentsFromStepNode(stepNode, context);
    context = null;
    const step = new Step(context, string, node, breakPoint, arrayAssignment, objectAssigment, variableAssigments);
    return step;
}
function someFromSomeNode(someNode, context) {
    const { Some } = _elements.default, node = someNode, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = someString, breakPoint = null;
    context = null;
    const some = new Some(context, string, node, breakPoint, variable, anonymousProcedure);
    return some;
}
function termFromTermNode(termNode, context) {
    const { Term } = _elements.default, node = termNode, variable = variableFromTermNode(termNode, context), primitive = primitiveFromTermNode(termNode, context), negatedTerm = negatedTermFromTermNode(termNode, context), logicalTerm = logicalTermFromTermNode(termNode, context), bracketedTerm = bracketedTermFromTermNode(termNode, context), comparisonTerm = comparisonTermFromTermNode(termNode, context), properties = [
        variable,
        primitive,
        negatedTerm,
        logicalTerm,
        bracketedTerm,
        comparisonTerm
    ], termString = (0, _string.termStringFromProperties)(properties, context), string = termString, breakPoint = null;
    context = null;
    const term = new Term(context, string, node, breakPoint, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
    return term;
}
function valueFromValueNode(valueNode, context) {
    const { Value } = _elements.default, node = valueNode, variable = variableFromValueNode(valueNode, context), primitive = primitiveFromValueNode(valueNode, context), properties = [
        variable,
        primitive
    ], valueString = (0, _string.valueStringFromProperties)(properties, context), string = valueString, breakPoint = null;
    context = null;
    const value = new Value(context, string, node, breakPoint, variable, primitive);
    return value;
}
function termsFromTermsNode(termsNode, context) {
    const { Terms } = _elements.default, node = termsNode, string = context.nodeAsString(node), termNodes = termsNode.getTermNodes(), termsArray = termsArrayFromTermNodes(termNodes, context), array = termsArray, breakPoint = null;
    context = null;
    const terms = new Terms(context, string, node, breakPoint, array);
    return terms;
}
function errorFromErrorNode(errorNode, context) {
    const { Error } = _elements.default, node = errorNode, string = context.nodeAsString(node), breakPoint = null;
    context = null;
    const error = new Error(context, string, node, breakPoint);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    const { Every } = _elements.default, node = everyNode, variable = variableFromEveryNode(everyNode, context), anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = everyString, breakPoint = null;
    context = null;
    const every = new Every(context, string, node, breakPoint, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    const { Label } = _elements.default, node = labelNode, string = context.nodeAsString(node), breakPoint = null, name = nameFromLabelNode(labelNode, context);
    context = null;
    const label = new Label(context, string, node, breakPoint, name);
    return label;
}
function valuesFromValuesNode(valuesNode, context) {
    const { Values } = _elements.default, node = valuesNode, string = context.nodeAsString(node), valueNodes = valuesNode.getValueNodes(), valuesArray = valuesArrayFromValueNodes(valueNodes, context), array = valuesArray, breakPoint = null;
    context = null;
    const values = new Values(context, string, node, breakPoint, array);
    return values;
}
function reduceFromReduceNode(reduceNode, context) {
    const { Reduce } = _elements.default, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString, breakPoint = null;
    context = null;
    const reduce = new Reduce(context, string, node, breakPoint, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function bindingFromBindingNode(bindingNode, context) {
    const { Binding } = _elements.default, node = bindingNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromBindingNode(bindingNode, context), name = nameFromBindingNode(bindingNode, context);
    context = null;
    const binding = new Binding(context, string, node, breakPoint, type, name);
    return binding;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    const { Ternary } = _elements.default, node = ternaryNode, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString, breakPoint = null;
    context = null;
    const ternary = new Ternary(context, string, node, breakPoint, term, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionFromVariableNode(variableNode, context);
    context = null;
    const variable = new Variable(context, string, node, breakPoint, type, name, expression);
    return variable;
}
function bindingsFromBindingsNode(bindingsNode, context) {
    const { Bindings } = _elements.default, node = bindingsNode, string = context.nodeAsString(node), breakPoint = null, bindingsArray = bindingsArrayFromBindingsNode(bindingsNode, context), array = bindingsArray; ///
    context = null;
    const bindings = new Bindings(context, string, node, breakPoint, array);
    return bindings;
}
function referenceFromReferenceNode(referenceNode, context) {
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), breakPoint = null, name = nameFromReferenceNode(referenceNode, context);
    context = null;
    const reference = new Reference(context, string, node, breakPoint, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    const { Parameter } = _elements.default, node = parameterNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromParaneterNode(parameterNode, context), name = nameFromParaneterNode(parameterNode, context);
    context = null;
    const parameter = new Parameter(context, string, node, breakPoint, type, name);
    return parameter;
}
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    const { NodeQuery } = _elements.default, node = nodeQueryNode, string = context.nodeAsString(node), breakPoint = null, variable = variableFromNodeQueryNode(nodeQueryNode, context), query = queryFromNodeQueryNode(nodeQueryNode, context);
    context = null;
    const nodeQuery = new NodeQuery(context, string, node, breakPoint, variable, query);
    return nodeQuery;
}
function primitiveFromPrimitiveNode(primitiveNode, context) {
    const { Primitive } = _elements.default, node = primitiveNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context);
    context = null;
    const primitive = new Primitive(context, string, node, breakPoint, type, value);
    return primitive;
}
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    const { NodesQuery } = _elements.default, node = nodesQueryNode, string = context.nodeAsString(node), breakPoint = null, variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context);
    context = null;
    const nodesQuery = new NodesQuery(context, string, node, breakPoint, variable, query);
    return nodesQuery;
}
function parametersFromParametersNode(parametersNode, context) {
    const { Parameters } = _elements.default, node = parametersNode, string = context.nodeAsString(node), breakPoint = null, parametersArray = parametersArrayFromParametersNode(parametersNode, context), array = parametersArray; ///
    context = null;
    const parameters = new Parameters(context, string, node, breakPoint, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    const { Expression } = _elements.default, node = expressionNode, term = termFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), properties = [
        term,
        some,
        every,
        reduce,
        ternary,
        nodeQuery,
        nodesQuery,
        returnBlock,
        procedureCall
    ], expressionString = (0, _string.expressionStringFromProperties)(properties, context), string = expressionString, breakPoint = null;
    context = null;
    const expression = new Expression(context, string, node, breakPoint, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    const { ReturnBlock } = _elements.default, node = returnBlockNode, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, breakPoint = null;
    context = null;
    const returnBlock = new ReturnBlock(context, string, node, breakPoint, steps, nonsensical, returnStatement);
    return returnBlock;
}
function negatedTermFromNegatedTermNode(negatedTermNode, context) {
    const { NegatedTerm } = _elements.default, node = negatedTermNode, string = context.nodeAsString(node), breakPoint = null, termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(context, string, node, breakPoint, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    const { LogicalTerm } = _elements.default, node = logicalTermNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(context, string, node, breakPoint, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function namedBindingFromNamedBindingNode(namedBindingNode, context) {
    const { NamedBinding } = _elements.default, node = namedBindingNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromNamedBindingNode(namedBindingNode, context), name = nameFromNamedBindingNode(namedBindingNode, context), alias = aliasFromNamedBindingNode(namedBindingNode, context);
    context = null;
    const namedBinding = new NamedBinding(context, string, node, breakPoint, type, name, alias);
    return namedBinding;
}
function namedBindingsFromNamedBindingsNode(namedBindingsNode, context) {
    const { NamedBindings } = _elements.default, node = namedBindingsNode, string = context.nodeAsString(node), breakPoint = null, namedBindingNodes = namedBindingsNode.getNamedBindingNodes(), namedBindingsArray = namedParametersArrayFromNamedBindingNodes(namedBindingNodes, context), array = namedBindingsArray; ///
    context = null;
    const namedBindings = new NamedBindings(context, string, node, breakPoint, array);
    return namedBindings;
}
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    const { BracketedTerm } = _elements.default, node = bracketedTermNode, string = context.nodeAsString(node), breakPoint = null, term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(context, string, node, breakPoint, term);
    return bracketedTerm;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    const { ProcedureCall } = _elements.default, node = procedureCallNode, string = context.nodeAsString(node), breakPoint = null, reference = referenceFromProcedureCallNode(procedureCallNode, context), values = valuesFromProcedureCallNode(procedureCallNode, context);
    context = null;
    const procedureCall = new ProcedureCall(context, string, node, breakPoint, reference, values);
    return procedureCall;
}
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    const { ComparisonTerm } = _elements.default, node = comparisonTermNode, string = context.nodeAsString(node), breakPoint = null, negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(context, string, node, breakPoint, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function namedBindingsFromObjectAssignmentNode(objectAssignmentNode, context) {
    const namedBindingsNode = objectAssignmentNode.getNamedBindingsNode(), namedBindings = namedBindingsFromNamedBindingsNode(namedBindingsNode, context);
    return namedBindings;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Procedure } = _elements.default, node = procedureDeclarationNode, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, breakPoint = null, procedure = new Procedure(context, string, node, breakPoint, type, label, parameters, returnBlock);
    return procedure;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const { ArrayAssignment } = _elements.default, node = arrayAssignmentNode, string = context.nodeAsString(node), breakPoint = null, variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), bindings = bindingsFromArrayAssignmentNode(arrayAssignmentNode, context);
    context = null;
    const arrayAssignment = new ArrayAssignment(context, string, node, breakPoint, variable, bindings);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    const { ReturnStatement } = _elements.default, node = returnStatementNode, string = context.nodeAsString(node), breakPoint = null, value = valueFromReturnStatementNode(returnStatementNode, context);
    context = null;
    const returnStatement = new ReturnStatement(context, string, node, breakPoint, value);
    return returnStatement;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    const { ObjectAssigment } = _elements.default, node = objectAssignmentNode, string = context.nodeAsString(node), breakPoint = null, variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedBindings = namedBindingsFromObjectAssignmentNode(objectAssignmentNode, context);
    context = null;
    const objectAssignment = new ObjectAssigment(context, string, node, breakPoint, variable, namedBindings);
    return objectAssignment;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const { AnonymousProcedure } = _elements.default, node = anonymousProcedureNode, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, breakPoint = null;
    context = null;
    const anonymousProcedure = new AnonymousProcedure(context, string, node, breakPoint, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    const { VariableAssignments } = _elements.default, node = variableAssignmentsNode, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, breakPoint = null;
    context = null;
    const variableAssignments = new VariableAssignments(context, string, node, breakPoint, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { ProcedureDeclaration } = _elements.default, node = procedureDeclarationNode, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, breakPoint = null;
    context = null;
    const procedureDeclaration = new ProcedureDeclaration(context, string, node, breakPoint, procedure);
    return procedureDeclaration;
}
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const { VariableAssignment } = _elements.default, node = variableAssignmentNode, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, breakPoint = null, assignment = new VariableAssignment(context, string, node, breakPoint, variable, expression);
    return assignment;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, name = nameFromVariableNode(variableNode), expression = expressionFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, breakPoint = null, variable = new Variable(context, string, node, breakPoint, type, name, expression);
    return variable;
}
function nameFromLabelNode(labelNode, context) {
    const name = labelNode.getName();
    return name;
}
function termFromTernaryNode(ternaryNode, context) {
    const termNode = ternaryNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function nameFromBindingNode(bindingNode, context) {
    const name = bindingNode.getName();
    return name;
}
function typeFromBindingNode(bindingNode, context) {
    const type = bindingNode.getType();
    return type;
}
function variableFromSomeNode(someNode, context) {
    const variableNode = someNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function variableFromTermNode(termNode, context) {
    let variable = null;
    const variableNode = termNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
}
function nameFromVariableNode(variableNode) {
    const name = variableNode.getName();
    return name;
}
function typeFromVariableNode(variableNode, context) {
    const type = null;
    return type;
}
function primitiveFromTermNode(termNode, context) {
    let primitive = null;
    const primitiveNode = termNode.getPrimitiveNode();
    if (primitiveNode !== null) {
        primitive = primitiveFromPrimitiveNode(primitiveNode, context);
    }
    return primitive;
}
function variableFromEveryNode(everyNode, context) {
    const variableNode = everyNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromParaneterNode(parameterNode, context) {
    const type = parameterNode.getType();
    return type;
}
function nameFromParaneterNode(parameterNode, context) {
    const name = parameterNode.getName();
    return name;
}
function nameFromReferenceNode(referenceNode, context) {
    const name = referenceNode.getName();
    return name;
}
function typeFromPrimitiveNode(primitiveNode, context) {
    const type = primitiveNode.getType();
    return type;
}
function variableFromValueNode(valueNode, context) {
    let variable = null;
    const variableNode = valueNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
}
function primitiveFromValueNode(valueNode, context) {
    let primitive = null;
    const primitiveNode = valueNode.getPrimitiveNode();
    if (primitiveNode !== null) {
        primitive = primitiveFromPrimitiveNode(primitiveNode, context);
    }
    return primitive;
}
function variableFromReduceNode(reduceNode, context) {
    const variableNode = reduceNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function termFromExpressionNode(expressionNode, context) {
    let term = null;
    const termNode = expressionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
}
function someFromExpressionNode(expressionNode, context) {
    let some = null;
    const someNode = expressionNode.getSomeNode();
    if (someNode !== null) {
        some = someFromSomeNode(someNode, context);
    }
    return some;
}
function queryFromNodeQueryNode(nodeQueryNode, context) {
    const string = nodeQueryNode.getString(), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
}
function valueFromPrimitiveNode(primitiveNode, context) {
    const value = primitiveNode.getValue();
    return value;
}
function queryFromNodesQueryNode(nodesQueryNode, context) {
    const string = nodesQueryNode.getString(), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
}
function everyFromExpressionNode(expressionNode, context) {
    let every = null;
    const everyNode = expressionNode.getEveryNode();
    if (everyNode !== null) {
        every = everyFromEveryNode(everyNode, context);
    }
    return every;
}
function negatedTermFromTermNode(termNode, context) {
    let negatedTerm = null;
    const negatedTermNode = termNode.getNegatedTermNode();
    if (negatedTermNode !== null) {
        negatedTerm = negatedTermFromNegatedTermNode(negatedTermNode, context);
    }
    return negatedTerm;
}
function logicalTermFromTermNode(termNode, context) {
    let logicalTerm = null;
    const logicalTermNode = termNode.getLogicalTermNode();
    if (logicalTermNode !== null) {
        logicalTerm = logicalTermFromLogicalTermNode(logicalTermNode, context);
    }
    return logicalTerm;
}
function typeFromLogicalTermNode(logicalTermNode, context) {
    const type = _types.BOOLEAN_TYPE;
    return type;
}
function typeFromNegatedTermNode(logicalTermNode, context) {
    const type = _types.BOOLEAN_TYPE;
    return type;
}
function termFromNegatedTermNode(negatedTermNode, context) {
    const termNode = negatedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function expressionFromReduceNode(reduceNode, context) {
    const expressionNode = reduceNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function reduceFromExpressionNode(expressionNode, context) {
    let reduce = null;
    const reduceNode = expressionNode.getReduceNode();
    if (reduceNode !== null) {
        reduce = reduceFromReduceNode(reduceNode, context);
    }
    return reduce;
}
function stepsFromReturnBlockNode(returnBlockNode, context) {
    const stepNodes = returnBlockNode.getStepNodes(), steps = stepNodes.map((stepNode)=>{
        const step = stepFromStepNode(stepNode, context);
        return step;
    });
    return steps;
}
function typeFromNamedBindingNode(namedBindingNode, context) {
    const type = namedBindingNode.getType();
    return type;
}
function nameFromNamedBindingNode(namedBindingNode, context) {
    const name = namedBindingNode.getName();
    return name;
}
function aliasFromNamedBindingNode(namedBindingNode, context) {
    const alias = namedBindingNode.getAlias();
    return alias;
}
function variableFromNodeQueryNode(nodeQueryNode, context) {
    const variableNode = nodeQueryNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function ternaryFromExpressionNode(expressionNode, context) {
    let ternary = null;
    const ternaryNode = expressionNode.getTernaryNode();
    if (ternaryNode !== null) {
        ternary = ternaryFromTernaryNode(ternaryNode, context);
    }
    return ternary;
}
function bracketedTermFromTermNode(termNode, context) {
    let bracketedTerm = null;
    const bracketedTermNode = termNode.getBracketedTermNode();
    if (bracketedTermNode !== null) {
        bracketedTerm = bracketedTermFromBracketedTermNode(bracketedTermNode, context);
    }
    return bracketedTerm;
}
function termFromBracketedTermNode(bracketedTermNode, context) {
    const termNode = bracketedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function comparisonTermFromTermNode(termNOde, context) {
    let comparisonTerm = null;
    const comparisonTermNode = termNOde.getComparisonTermNode();
    if (comparisonTermNode !== null) {
        comparisonTerm = comparisonTermFromComparisonTermNode(comparisonTermNode, context);
    }
    return comparisonTerm;
}
function expressionFromVariableNode(variableNode, context) {
    const expression = null;
    return expression;
}
function variableFromNodesQueryNode(nodesQueryNode, context) {
    const variableNode = nodesQueryNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function valuesFromProcedureCallNode(procedureCallNode, context) {
    const valuesNode = procedureCallNode.getValuesNode(), values = valuesFromValuesNode(valuesNode, context);
    return values;
}
function leftTermFromLogicalTermNode(logicalTermNode, context) {
    const leftTermNode = logicalTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function arrayAssignmentFromStepNode(stepNode, context) {
    let arrayAssignment = null;
    const arrayAssignmentNode = stepNode.getArrayAssignmentNode();
    if (arrayAssignmentNode !== null) {
        arrayAssignment = arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context);
    }
    return arrayAssignment;
}
function ifExpressionFromTernaryNode(ternaryNode, context) {
    const ifExpressionNode = ternaryNode.getIfExpressionNode(), ifExpression = expressionFromExpressionNode(ifExpressionNode, context);
    return ifExpression;
}
function nodeQueryFromExpressionNode(expressionNode, context) {
    let nodeQuery = null;
    const nodeQueryNode = expressionNode.getNodeQueryNode();
    if (nodeQueryNode !== null) {
        nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
    }
    return nodeQuery;
}
function valueFromReturnStatementNode(returnStatementNode, context) {
    const valueNode = returnStatementNode.getValueNode(), value = valueFromValueNode(valueNode, context);
    return value;
}
function objectAssignmentFromStepNode(stepNode, context) {
    let objectAssignment = null;
    const objectAssignmentNode = stepNode.getObjectAssignmentNode();
    if (objectAssignmentNode !== null) {
        objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
    }
    return objectAssignment;
}
function nodesQueryFromExpressionNode(expressionNode, context) {
    let nodesQuery = null;
    const nodesQueryNode = expressionNode.getNodesQueryNode();
    if (nodesQueryNode !== null) {
        nodesQuery = nodesQueryFromNodesQueryNode(nodesQueryNode, context);
    }
    return nodesQuery;
}
function rightTermFromLogicalTermNode(logicalTermNode, context) {
    const rightTermNode = logicalTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function negatedFromComparisonTermNode(comparisonTermNode, context) {
    const negated = comparisonTermNode.isNegated();
    return negated;
}
function elseExpressionFromTernaryNode(ternaryNode, context) {
    const elseExpressionNode = ternaryNode.getElseExpressionNode(), elseExpression = expressionFromExpressionNode(elseExpressionNode, context);
    return elseExpression;
}
function returnBlockFromExpressionNode(expressionNode, context) {
    let returnBlock = null;
    const returnBlockNode = expressionNode.getReturnBlockNode();
    if (returnBlockNode !== null) {
        returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    }
    return returnBlock;
}
function anonymousProcedureFromSomeNode(someNode, context) {
    const anonymousProcedureNode = someNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
    const nonsensical = returnBlockNode.isNonsensical();
    return nonsensical;
}
function referenceFromProcedureCallNode(procedureCallNode, context) {
    const referenceNode = procedureCallNode.getReferenceNode(), reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
}
function leftTermFromCompzrisonTermNode(comparisonTermNode, context) {
    const leftTermNode = comparisonTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function disjunctionFromLogicalTermNode(logicalTermNode, context) {
    const disjunction = logicalTermNode.isDisjunction();
    return disjunction;
}
function variableAssignmentsFromStepNode(stepNode, context) {
    let variableAssignments = null;
    const variableAssignmentsNode = stepNode.getVariableAssignmentsNode();
    if (variableAssignmentsNode !== null) {
        variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
    }
    return variableAssignments;
}
function anonymousProcedureFromEveryNode(everyNode, context) {
    const anonymousProcedureNode = everyNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function initialExpressionFromReduceNode(reduceNode, context) {
    const expression = expressionFromReduceNode(reduceNode, context), initialExpression = expression; ///
    return initialExpression;
}
function procedureCallFromExpressionNode(expressionNode, context) {
    let procedureCall = null;
    const procedureCallNode = expressionNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
    const rightTermNode = comparisonTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function variableFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const variableNode = arrayAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function bindingsFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const bindingsNode = arrayAssignmentNode.getBindingsNode(), bindings = bindingsFromBindingsNode(bindingsNode, context);
    return bindings;
}
function typeFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    const type = variableAssignmentsNode.getType();
    return type;
}
function anonymousProcedureFromReduceNode(reduceNode, context) {
    const anonymousProcedureNode = reduceNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function variableFromObjectAssignmentNode(objectAssignmentNode, context) {
    const variableNode = objectAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const type = procedureDeclarationNode.getType();
    return type;
}
function expressionFromTypeAndVariableNode(type, variableNode, context) {
    const expression = null;
    return expression;
}
function labelFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const labelNode = procedureDeclarationNode.getLabelNode(), label = labelFromLabelNode(labelNode, context);
    return label;
}
function returnStatementFromReturnBlockNode(returnBlockNode, context) {
    const returnStatementNode = returnBlockNode.getReturnStatementNode(), returnStatement = returnStatementFromReturnStatementNode(returnStatementNode, context);
    return returnStatement;
}
function expressionFromVariableAssignmentNode(variableAssigmentNode, context) {
    const expressionNode = variableAssigmentNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function parametersFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const parametersNode = anonymousProcedureNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const parametersNode = procedureDeclarationNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
    const type = anonymousProcedureNode.getType();
    return type;
}
function returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const returnBlockNode = procedureDeclarationNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const variableNode = variableAssignmentNode.getVariableNode(), variable = variableFromTypeAndVariableNode(type, variableNode, context);
    return variable;
}
function termsArrayFromTermNodes(termNodes, context) {
    const termsArray = termNodes.map((termNode)=>{
        const term = termFromTermNode(termNode, context);
        return term;
    });
    return termsArray;
}
function valuesArrayFromValueNodes(valueNodes, context) {
    const valuesArray = valueNodes.map((valueNode)=>{
        const value = valueFromValueNode(valueNode, context);
        return value;
    });
    return valuesArray;
}
function bindingsArrayFromBindingsNode(bindingsNode, context) {
    const bindingNodes = bindingsNode.getBindingNodes(), bindingsArray = bindingNodes.map((bindingNode)=>{
        const binding = bindingFromBindingNode(bindingNode, context);
        return binding;
    });
    return bindingsArray;
}
function parametersArrayFromParametersNode(parametersNode, context) {
    const parameterNodes = parametersNode.getParameterNodes(), parametersArray = parameterNodes.map((parameterNode)=>{
        const parameter = parameterFromParameterNode(parameterNode, context);
        return parameter;
    });
    return parametersArray;
}
function namedParametersArrayFromNamedBindingNodes(namedBindingNodes, context) {
    const namedParametersArray = namedBindingNodes.map((namedBindingNode)=>{
        const namedBinding = namedBindingFromNamedBindingNode(namedBindingNode, context);
        return namedBinding;
    });
    return namedParametersArray;
}
function variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
    const variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map((variableAssignmentNode)=>{
        const variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICB2YWx1ZVN0cmluZ0Zyb21Qcm9wZXJ0aWVzLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzLFxuICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUsXG4gICAgICAgICBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdtZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbWVudHMpO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc29tZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWUgPSBuZXcgU29tZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICB2YXJpYWJsZSxcbiAgICAgIHByaW1pdGl2ZSxcbiAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgbG9naWNhbFRlcm0sXG4gICAgICBicmFja2V0ZWRUZXJtLFxuICAgICAgY29tcGFyaXNvblRlcm1cbiAgICBdLFxuICAgIHRlcm1TdHJpbmcgPSB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgY29udGV4dCksXG4gICAgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhbHVlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgcHJpbWl0aXZlXG4gICAgICAgIF0sXG4gICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWVTdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFsdWUgPSBuZXcgVmFsdWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXZlcnlOb2RlLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5ID0gbmV3IEV2ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZU5vZGVzID0gdmFsdWVzTm9kZS5nZXRWYWx1ZU5vZGVzKCksXG4gICAgICAgIHZhbHVlc0FycmF5ID0gdmFsdWVzQXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBWYWx1ZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVkdWNlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZSA9IG5ldyBSZWR1Y2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRpbmdGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCaW5kaW5nIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJpbmRpbmdOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21CaW5kaW5nTm9kZShiaW5kaW5nTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUJpbmRpbmdOb2RlKGJpbmRpbmdOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBiaW5kaW5nID0gbmV3IEJpbmRpbmcoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lKTtcblxuICByZXR1cm4gYmluZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm5hcnlOb2RlLCAvLy9cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgc3RyaW5nID0gdGVybmFyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnkgPSBuZXcgVGVybmFyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nc0Zyb21CaW5kaW5nc05vZGUoYmluZGluZ3NOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQmluZGluZ3MgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYmluZGluZ3NOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgYmluZGluZ3NBcnJheSA9IGJpbmRpbmdzQXJyYXlGcm9tQmluZGluZ3NOb2RlKGJpbmRpbmdzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gYmluZGluZ3NBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYmluZGluZ3MgPSBuZXcgQmluZGluZ3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIGJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmltaXRpdmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgcGFyYW1ldGVyc0FycmF5ID0gcGFyYW1ldGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdGVybSxcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5CbG9ja05vZGUsIC8vL1xuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZXcgTmVnYXRlZFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB0ZXJtKTtcblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsVGVybSA9IG5ldyBMb2dpY2FsVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZEJpbmRpbmdGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRCaW5kaW5nIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkQmluZGluZ05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkQmluZGluZ05vZGUobmFtZWRCaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRCaW5kaW5nID0gbmV3IE5hbWVkQmluZGluZyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRCaW5kaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRCaW5kaW5nc0Zyb21OYW1lZEJpbmRpbmdzTm9kZShuYW1lZEJpbmRpbmdzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkQmluZGluZ3MgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRCaW5kaW5nc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIG5hbWVkQmluZGluZ05vZGVzID0gbmFtZWRCaW5kaW5nc05vZGUuZ2V0TmFtZWRCaW5kaW5nTm9kZXMoKSxcbiAgICAgICAgbmFtZWRCaW5kaW5nc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXlGcm9tTmFtZWRCaW5kaW5nTm9kZXMobmFtZWRCaW5kaW5nTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IG5hbWVkQmluZGluZ3NBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRCaW5kaW5ncyA9IG5ldyBOYW1lZEJpbmRpbmdzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZEJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRUZXJtID0gbmV3IEJyYWNrZXRlZFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtKTtcblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHJlZmVyZW5jZSwgdmFsdWVzKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IG5ldyBDb21wYXJpc29uVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkQmluZGluZ3NGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRCaW5kaW5nc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZEJpbmRpbmdzTm9kZSgpLFxuICAgICAgICBuYW1lZEJpbmRpbmdzID0gbmFtZWRCaW5kaW5nc0Zyb21OYW1lZEJpbmRpbmdzTm9kZShuYW1lZEJpbmRpbmdzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkQmluZGluZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBwcm9jZWR1cmUgPSBuZXcgUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gcHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpbmRpbmdzID0gYmluZGluZ3NGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGJpbmRpbmdzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhbHVlKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZEJpbmRpbmdzID0gbmFtZWRCaW5kaW5nc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgbmFtZWRCaW5kaW5ncyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlKHR5cGUsIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IGJpbmRpbmdOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGJpbmRpbmdOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFsdWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IHZhbHVlTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VmFsdWUoKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkQmluZGluZ05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkQmluZGluZ05vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRCaW5kaW5nTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uVGVybSA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvblRlcm1Ob2RlID0gdGVybU5PZGUuZ2V0Q29tcGFyaXNvblRlcm1Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFZhbHVlc05vZGUoKSxcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGlmRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0VmFsdWVOb2RlKCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uVGVybU5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxUZXJtTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ3NGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJpbmRpbmdzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0QmluZGluZ3NOb2RlKCksXG4gICAgICAgIGJpbmRpbmdzID0gYmluZGluZ3NGcm9tQmluZGluZ3NOb2RlKGJpbmRpbmdzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0FycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZXNBcnJheSA9IHZhbHVlTm9kZXMubWFwKCh2YWx1ZU5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ3NBcnJheUZyb21CaW5kaW5nc05vZGUoYmluZGluZ3NOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJpbmRpbmdOb2RlcyA9IGJpbmRpbmdzTm9kZS5nZXRCaW5kaW5nTm9kZXMoKSxcbiAgICAgICAgYmluZGluZ3NBcnJheSA9IGJpbmRpbmdOb2Rlcy5tYXAoKGJpbmRpbmdOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nRnJvbUJpbmRpbmdOb2RlKGJpbmRpbmdOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYmluZGluZ3NBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtZXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNBcnJheUZyb21OYW1lZEJpbmRpbmdOb2RlcyhuYW1lZEJpbmRpbmdOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkQmluZGluZ05vZGVzLm1hcCgobmFtZWRCaW5kaW5nTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZEJpbmRpbmcgPSBuYW1lZEJpbmRpbmdGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZEJpbmRpbmc7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkQmluZGluZ05vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYmluZGluZ0Zyb21CaW5kaW5nTm9kZSIsImJpbmRpbmdzQXJyYXlGcm9tQmluZGluZ3NOb2RlIiwiYmluZGluZ3NGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImJpbmRpbmdzRnJvbUJpbmRpbmdzTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwiY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwiY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUiLCJkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUiLCJlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlIiwiaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsImxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlIiwibmFtZUZyb21CaW5kaW5nTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZEJpbmRpbmdOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZEJpbmRpbmdGcm9tTmFtZWRCaW5kaW5nTm9kZSIsIm5hbWVkQmluZGluZ3NGcm9tTmFtZWRCaW5kaW5nc05vZGUiLCJuYW1lZEJpbmRpbmdzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXlGcm9tTmFtZWRCaW5kaW5nTm9kZXMiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsIm5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsIm5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwibm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZSIsInByaW1pdGl2ZUZyb21UZXJtTm9kZSIsInByaW1pdGl2ZUZyb21WYWx1ZU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsInJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJ0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybmFyeU5vZGUiLCJ0ZXJtc0FycmF5RnJvbVRlcm1Ob2RlcyIsInRlcm1zRnJvbVRlcm1zTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21CaW5kaW5nTm9kZSIsInR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlIiwidHlwZUZyb21OYW1lZEJpbmRpbmdOb2RlIiwidHlwZUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByaW1pdGl2ZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVByaW1pdGl2ZU5vZGUiLCJ2YWx1ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidmFsdWVGcm9tVmFsdWVOb2RlIiwidmFsdWVzQXJyYXlGcm9tVmFsdWVOb2RlcyIsInZhbHVlc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInZhbHVlc0Zyb21WYWx1ZXNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYWx1ZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJTdGVwIiwiZWxlbWVudHMiLCJub2RlIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiYnJlYWtQb2ludCIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdtZW50cyIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsInRlcm1Ob2RlIiwiVGVybSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJwcm9wZXJ0aWVzIiwidGVybVN0cmluZyIsInRlcm1TdHJpbmdGcm9tUHJvcGVydGllcyIsInRlcm0iLCJ2YWx1ZU5vZGUiLCJWYWx1ZSIsInZhbHVlU3RyaW5nIiwidmFsdWVTdHJpbmdGcm9tUHJvcGVydGllcyIsInZhbHVlIiwidGVybXNOb2RlIiwiVGVybXMiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0FycmF5IiwiYXJyYXkiLCJ0ZXJtcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwidmFsdWVzTm9kZSIsIlZhbHVlcyIsInZhbHVlTm9kZXMiLCJnZXRWYWx1ZU5vZGVzIiwidmFsdWVzQXJyYXkiLCJ2YWx1ZXMiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsImJpbmRpbmdOb2RlIiwiQmluZGluZyIsInR5cGUiLCJiaW5kaW5nIiwidGVybmFyeU5vZGUiLCJUZXJuYXJ5IiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5U3RyaW5nIiwidGVybmFyeVN0cmluZ0Zyb21UZXJtIiwidGVybmFyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwiZXhwcmVzc2lvbiIsImJpbmRpbmdzTm9kZSIsIkJpbmRpbmdzIiwiYmluZGluZ3NBcnJheSIsImJpbmRpbmdzIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtZXRlcnNBcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJleHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzIiwicmV0dXJuQmxvY2tOb2RlIiwiUmV0dXJuQmxvY2siLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwibmVnYXRlZFRlcm1Ob2RlIiwiTmVnYXRlZFRlcm0iLCJnZXRUZXJtTm9kZSIsImxvZ2ljYWxUZXJtTm9kZSIsIkxvZ2ljYWxUZXJtIiwiZGlzanVuY3Rpb24iLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsIm5hbWVkQmluZGluZ05vZGUiLCJOYW1lZEJpbmRpbmciLCJhbGlhcyIsIm5hbWVkQmluZGluZyIsIm5hbWVkQmluZGluZ3NOb2RlIiwiTmFtZWRCaW5kaW5ncyIsIm5hbWVkQmluZGluZ05vZGVzIiwiZ2V0TmFtZWRCaW5kaW5nTm9kZXMiLCJuYW1lZEJpbmRpbmdzQXJyYXkiLCJuYW1lZEJpbmRpbmdzIiwiYnJhY2tldGVkVGVybU5vZGUiLCJCcmFja2V0ZWRUZXJtIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwiY29tcGFyaXNvblRlcm1Ob2RlIiwiQ29tcGFyaXNvblRlcm0iLCJuZWdhdGVkIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZEJpbmRpbmdzTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJwcm9jZWR1cmUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlJldHVyblN0YXRlbWVudCIsIk9iamVjdEFzc2lnbWVudCIsIm9iamVjdEFzc2lnbm1lbnQiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlIiwiYXNzaWdubWVudCIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVTdHJpbmdGcm9tTmFtZSIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0UHJpbWl0aXZlTm9kZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldFZhbHVlIiwiZ2V0RXZlcnlOb2RlIiwiZ2V0TmVnYXRlZFRlcm1Ob2RlIiwiZ2V0TG9naWNhbFRlcm1Ob2RlIiwiQk9PTEVBTl9UWVBFIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0QWxpYXMiLCJnZXRUZXJuYXJ5Tm9kZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybU5PZGUiLCJnZXRDb21wYXJpc29uVGVybU5vZGUiLCJnZXRWYWx1ZXNOb2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldFZhbHVlTm9kZSIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImlzRGlzanVuY3Rpb24iLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0QmluZGluZ3NOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiYmluZGluZ05vZGVzIiwiZ2V0QmluZGluZ05vZGVzIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNjRCZ0JBO2VBQUFBOztRQTVWQUM7ZUFBQUE7O1FBMGpCQUM7ZUFBQUE7O1FBcURBQztlQUFBQTs7UUFsR0FDO2VBQUFBOztRQXpqQkFDO2VBQUFBOztRQTJkQUM7ZUFBQUE7O1FBOXhCQUM7ZUFBQUE7O1FBMGtDQUM7ZUFBQUE7O1FBekhBQztlQUFBQTs7UUFqNkJBQztlQUFBQTs7UUFzTkFDO2VBQUFBOztRQThkQUM7ZUFBQUE7O1FBcGNBQztlQUFBQTs7UUF1ZEFDO2VBQUFBOztRQWdLQUM7ZUFBQUE7O1FBOUNBQztlQUFBQTs7UUFyN0JBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBeXFCQUM7ZUFBQUE7O1FBbGRBQztlQUFBQTs7UUF5Z0JBQztlQUFBQTs7UUFpVkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBblFBQztlQUFBQTs7UUF1Q0FDO2VBQUFBOztRQXNJQUM7ZUFBQUE7O1FBLzlCQUM7ZUFBQUE7O1FBdWlDQUM7ZUFBQUE7O1FBeEdBQztlQUFBQTs7UUF6SEFDO2VBQUFBOztRQS9qQkFDO2VBQUFBOztRQTBhQUM7ZUFBQUE7O1FBM0xBQztlQUFBQTs7UUFiQUM7ZUFBQUE7O1FBMlFBQztlQUFBQTs7UUExTEFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUEzQ0FDO2VBQUFBOztRQWhRQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUF1REFDO2VBQUFBOztRQW16QkFDO2VBQUFBOztRQTdQQUM7ZUFBQUE7O1FBeHBCQUM7ZUFBQUE7O1FBMmFBQztlQUFBQTs7UUEyTEFDO2VBQUFBOztRQXJ0QkFDO2VBQUFBOztRQW92QkFDO2VBQUFBOztRQXR0QkFDO2VBQUFBOztRQXl3QkFDO2VBQUFBOztRQW5pQkFD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