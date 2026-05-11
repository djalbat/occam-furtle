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
    get expressionFromVariableAssignmentNode () {
        return expressionFromVariableAssignmentNode;
    },
    get expressionFromVariableNode () {
        return expressionFromVariableNode;
    },
    get ifExpressionFromTernaryNode () {
        return ifExpressionFromTernaryNode;
    },
    get initialValueFromReduceNode () {
        return initialValueFromReduceNode;
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
    get valueFromReduceNode () {
        return valueFromReduceNode;
    },
    get valueFromReturnStatementNode () {
        return valueFromReturnStatementNode;
    },
    get valueFromTypeAndVariableNode () {
        return valueFromTypeAndVariableNode;
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
    const { Reduce } = _elements.default, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialValue = initialValueFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialValue, anonymousProcedure), string = reduceString, breakPoint = null;
    context = null;
    const reduce = new Reduce(context, string, node, breakPoint, variable, initialValue, anonymousProcedure);
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
    const { Variable } = _elements.default, node = variableNode, name = nameFromVariableNode(variableNode), value = valueFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, breakPoint = null, variable = new Variable(context, string, node, breakPoint, type, name, value);
    return variable;
}
function nameFromLabelNode(labelNode, context) {
    const name = labelNode.getName();
    return name;
}
function valueFromReduceNode(reduceNode, context) {
    const valueNode = reduceNode.getValueNode(), value = valueFromValueNode(valueNode, context);
    return value;
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
function initialValueFromReduceNode(reduceNode, context) {
    const value = valueFromReduceNode(reduceNode, context), initialValue = value; ///
    return initialValue;
}
function expressionFromVariableNode(variableNode, context) {
    const expression = null;
    return expression;
}
function variableFromNodesQueryNode(nodesQueryNode, context) {
    const variableNode = nodesQueryNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
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
function leftTermFromLogicalTermNode(logicalTermNode, context) {
    const leftTermNode = logicalTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function valuesFromProcedureCallNode(procedureCallNode, context) {
    const valuesNode = procedureCallNode.getValuesNode(), values = valuesFromValuesNode(valuesNode, context);
    return values;
}
function valueFromTypeAndVariableNode(type, variableNode, context) {
    const value = null;
    return value;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICB2YWx1ZVN0cmluZ0Zyb21Qcm9wZXJ0aWVzLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzLFxuICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUsXG4gICAgICAgICBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdtZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbWVudHMpO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc29tZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWUgPSBuZXcgU29tZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICB2YXJpYWJsZSxcbiAgICAgIHByaW1pdGl2ZSxcbiAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgbG9naWNhbFRlcm0sXG4gICAgICBicmFja2V0ZWRUZXJtLFxuICAgICAgY29tcGFyaXNvblRlcm1cbiAgICBdLFxuICAgIHRlcm1TdHJpbmcgPSB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgY29udGV4dCksXG4gICAgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhbHVlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgcHJpbWl0aXZlXG4gICAgICAgIF0sXG4gICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWVTdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFsdWUgPSBuZXcgVmFsdWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXZlcnlOb2RlLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5ID0gbmV3IEV2ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZU5vZGVzID0gdmFsdWVzTm9kZS5nZXRWYWx1ZU5vZGVzKCksXG4gICAgICAgIHZhbHVlc0FycmF5ID0gdmFsdWVzQXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBWYWx1ZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVkdWNlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZSA9IG5ldyBSZWR1Y2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgaW5pdGlhbFZhbHVlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nRnJvbUJpbmRpbmdOb2RlKGJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQmluZGluZyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBiaW5kaW5nTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21CaW5kaW5nTm9kZShiaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYmluZGluZyA9IG5ldyBCaW5kaW5nKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSk7XG5cbiAgcmV0dXJuIGJpbmRpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJuYXJ5Tm9kZSwgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnlTdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0odGVybSksXG4gICAgICAgIHN0cmluZyA9IHRlcm5hcnlTdHJpbmcsIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ3NGcm9tQmluZGluZ3NOb2RlKGJpbmRpbmdzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJpbmRpbmdzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJpbmRpbmdzTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIGJpbmRpbmdzQXJyYXkgPSBiaW5kaW5nc0FycmF5RnJvbUJpbmRpbmdzTm9kZShiaW5kaW5nc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IGJpbmRpbmdzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGJpbmRpbmdzID0gbmV3IEJpbmRpbmdzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiBiaW5kaW5ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJpbWl0aXZlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHBhcmFtZXRlcnNBcnJheSA9IHBhcmFtZXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gcGFyYW1ldGVyc0FycmF5OyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBleHByZXNzaW9uTm9kZSwgIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHRlcm0sXG4gICAgICAgICAgc29tZSxcbiAgICAgICAgICBldmVyeSxcbiAgICAgICAgICByZWR1Y2UsXG4gICAgICAgICAgdGVybmFyeSxcbiAgICAgICAgICBub2RlUXVlcnksXG4gICAgICAgICAgbm9kZXNRdWVyeSxcbiAgICAgICAgICByZXR1cm5CbG9jayxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsXG4gICAgICAgIF0sXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuQmxvY2tOb2RlLCAvLy9cbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRUZXJtID0gbmV3IE5lZ2F0ZWRUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgdGVybSk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBuZXcgTG9naWNhbFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRCaW5kaW5nRnJvbU5hbWVkQmluZGluZ05vZGUobmFtZWRCaW5kaW5nTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkQmluZGluZyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZEJpbmRpbmdOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkQmluZGluZyA9IG5ldyBOYW1lZEJpbmRpbmcoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkQmluZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkQmluZGluZ3NGcm9tTmFtZWRCaW5kaW5nc05vZGUobmFtZWRCaW5kaW5nc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZEJpbmRpbmdzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkQmluZGluZ3NOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lZEJpbmRpbmdOb2RlcyA9IG5hbWVkQmluZGluZ3NOb2RlLmdldE5hbWVkQmluZGluZ05vZGVzKCksXG4gICAgICAgIG5hbWVkQmluZGluZ3NBcnJheSA9IG5hbWVkUGFyYW1ldGVyc0FycmF5RnJvbU5hbWVkQmluZGluZ05vZGVzKG5hbWVkQmluZGluZ05vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZEJpbmRpbmdzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkQmluZGluZ3MgPSBuZXcgTmFtZWRCaW5kaW5ncyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRCaW5kaW5ncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IG5ldyBCcmFja2V0ZWRUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZWZlcmVuY2UsIHZhbHVlcyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvblRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBuZXcgQ29tcGFyaXNvblRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuZWdhdGVkLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZEJpbmRpbmdzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkQmluZGluZ3NOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRCaW5kaW5nc05vZGUoKSxcbiAgICAgICAgbmFtZWRCaW5kaW5ncyA9IG5hbWVkQmluZGluZ3NGcm9tTmFtZWRCaW5kaW5nc05vZGUobmFtZWRCaW5kaW5nc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBuYW1lZEJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBiaW5kaW5ncyA9IGJpbmRpbmdzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBiaW5kaW5ncyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRCaW5kaW5ncyA9IG5hbWVkQmluZGluZ3NGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIG5hbWVkQmluZGluZ3MpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIC8vL1xuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkpLFxuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSh0eXBlLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZU5vZGUgPSByZWR1Y2VOb2RlLmdldFZhbHVlTm9kZSgpLFxuICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbUJpbmRpbmdOb2RlKGJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBiaW5kaW5nTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUJpbmRpbmdOb2RlKGJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBiaW5kaW5nTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVOb2RlID0gdGVybU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB2YWx1ZU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWUgPSBwcmltaXRpdmVOb2RlLmdldFZhbHVlKCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRUZXJtID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXROZWdhdGVkVGVybU5vZGUoKTtcblxuICBpZiAobmVnYXRlZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TG9naWNhbFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkQmluZGluZ05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkQmluZGluZ05vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRCaW5kaW5nTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uVGVybSA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvblRlcm1Ob2RlID0gdGVybU5PZGUuZ2V0Q29tcGFyaXNvblRlcm1Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsVmFsdWVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbFZhbHVlID0gdmFsdWU7IC8vL1xuXG4gIHJldHVybiBpbml0aWFsVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFZhbHVlc05vZGUoKSxcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRWYWx1ZU5vZGUoKSxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbFRlcm1Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYmluZGluZ3NOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRCaW5kaW5nc05vZGUoKSxcbiAgICAgICAgYmluZGluZ3MgPSBiaW5kaW5nc0Zyb21CaW5kaW5nc05vZGUoYmluZGluZ3NOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYmluZGluZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNBcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSB2YWx1ZU5vZGVzLm1hcCgodmFsdWVOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRpbmdzQXJyYXlGcm9tQmluZGluZ3NOb2RlKGJpbmRpbmdzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBiaW5kaW5nTm9kZXMgPSBiaW5kaW5nc05vZGUuZ2V0QmluZGluZ05vZGVzKCksXG4gICAgICAgIGJpbmRpbmdzQXJyYXkgPSBiaW5kaW5nTm9kZXMubWFwKChiaW5kaW5nTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ0Zyb21CaW5kaW5nTm9kZShiaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGJpbmRpbmdzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzQXJyYXlGcm9tTmFtZWRCaW5kaW5nTm9kZXMobmFtZWRCaW5kaW5nTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZEJpbmRpbmdOb2Rlcy5tYXAoKG5hbWVkQmluZGluZ05vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRCaW5kaW5nID0gbmFtZWRCaW5kaW5nRnJvbU5hbWVkQmluZGluZ05vZGUobmFtZWRCaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRCaW5kaW5nO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZEJpbmRpbmdOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZSIsImJpbmRpbmdGcm9tQmluZGluZ05vZGUiLCJiaW5kaW5nc0FycmF5RnJvbUJpbmRpbmdzTm9kZSIsImJpbmRpbmdzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJiaW5kaW5nc0Zyb21CaW5kaW5nc05vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxWYWx1ZUZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUJpbmRpbmdOb2RlIiwibmFtZUZyb21MYWJlbE5vZGUiLCJuYW1lRnJvbU5hbWVkQmluZGluZ05vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkQmluZGluZ0Zyb21OYW1lZEJpbmRpbmdOb2RlIiwibmFtZWRCaW5kaW5nc0Zyb21OYW1lZEJpbmRpbmdzTm9kZSIsIm5hbWVkQmluZGluZ3NGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJuYW1lZFBhcmFtZXRlcnNBcnJheUZyb21OYW1lZEJpbmRpbmdOb2RlcyIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlIiwicHJpbWl0aXZlRnJvbVRlcm1Ob2RlIiwicHJpbWl0aXZlRnJvbVZhbHVlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tVGVybXNOb2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUJpbmRpbmdOb2RlIiwidHlwZUZyb21Mb2dpY2FsVGVybU5vZGUiLCJ0eXBlRnJvbU5hbWVkQmluZGluZ05vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJpbWl0aXZlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFsdWVGcm9tUHJpbWl0aXZlTm9kZSIsInZhbHVlRnJvbVJlZHVjZU5vZGUiLCJ2YWx1ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidmFsdWVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsInZhbHVlc0FycmF5RnJvbVZhbHVlTm9kZXMiLCJ2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ2YWx1ZXNGcm9tVmFsdWVzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFsdWVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImJyZWFrUG9pbnQiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbWVudHMiLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwicHJvcGVydGllcyIsInRlcm1TdHJpbmciLCJ0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ0ZXJtIiwidmFsdWVOb2RlIiwiVmFsdWUiLCJ2YWx1ZVN0cmluZyIsInZhbHVlU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ2YWx1ZSIsInRlcm1zTm9kZSIsIlRlcm1zIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNBcnJheSIsImFycmF5IiwidGVybXMiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlc05vZGUiLCJWYWx1ZXMiLCJ2YWx1ZU5vZGVzIiwiZ2V0VmFsdWVOb2RlcyIsInZhbHVlc0FycmF5IiwidmFsdWVzIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwiYmluZGluZ05vZGUiLCJCaW5kaW5nIiwidHlwZSIsImJpbmRpbmciLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJleHByZXNzaW9uIiwiYmluZGluZ3NOb2RlIiwiQmluZGluZ3MiLCJiaW5kaW5nc0FycmF5IiwiYmluZGluZ3MiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsInByaW1pdGl2ZU5vZGUiLCJQcmltaXRpdmUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW1ldGVyc0FycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJuZWdhdGVkVGVybU5vZGUiLCJOZWdhdGVkVGVybSIsImdldFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiTG9naWNhbFRlcm0iLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwibmFtZWRCaW5kaW5nTm9kZSIsIk5hbWVkQmluZGluZyIsImFsaWFzIiwibmFtZWRCaW5kaW5nIiwibmFtZWRCaW5kaW5nc05vZGUiLCJOYW1lZEJpbmRpbmdzIiwibmFtZWRCaW5kaW5nTm9kZXMiLCJnZXROYW1lZEJpbmRpbmdOb2RlcyIsIm5hbWVkQmluZGluZ3NBcnJheSIsIm5hbWVkQmluZGluZ3MiLCJicmFja2V0ZWRUZXJtTm9kZSIsIkJyYWNrZXRlZFRlcm0iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJjb21wYXJpc29uVGVybU5vZGUiLCJDb21wYXJpc29uVGVybSIsIm5lZ2F0ZWQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkQmluZGluZ3NOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInByb2NlZHVyZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50IiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0TmFtZSIsImdldFZhbHVlTm9kZSIsImdldFR5cGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0U29tZU5vZGUiLCJnZXRTdHJpbmciLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRFdmVyeU5vZGUiLCJnZXROZWdhdGVkVGVybU5vZGUiLCJnZXRMb2dpY2FsVGVybU5vZGUiLCJCT09MRUFOX1RZUEUiLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0QWxpYXMiLCJnZXRUZXJuYXJ5Tm9kZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybU5PZGUiLCJnZXRDb21wYXJpc29uVGVybU5vZGUiLCJnZXRBcnJheUFzc2lnbm1lbnROb2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldElmRXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlUXVlcnlOb2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0VmFsdWVzTm9kZSIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImlzRGlzanVuY3Rpb24iLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0QmluZGluZ3NOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsImdldEV4cHJlc3Npb25Ob2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJiaW5kaW5nTm9kZXMiLCJnZXRCaW5kaW5nTm9kZXMiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE2NEJnQkE7ZUFBQUE7O1FBNVZBQztlQUFBQTs7UUF1a0JBQztlQUFBQTs7UUE4Q0FDO2VBQUFBOztRQTNGQUM7ZUFBQUE7O1FBdGtCQUM7ZUFBQUE7O1FBb2RBQztlQUFBQTs7UUF2eEJBQztlQUFBQTs7UUEwa0NBQztlQUFBQTs7UUFuSEFDO2VBQUFBOztRQXY2QkFDO2VBQUFBOztRQXNOQUM7ZUFBQUE7O1FBOGRBQztlQUFBQTs7UUFwY0FDO2VBQUFBOztRQXVkQUM7ZUFBQUE7O1FBNktBQztlQUFBQTs7UUE5Q0FDO2VBQUFBOztRQWw4QkFDO2VBQUFBOztRQWFBQztlQUFBQTs7UUFnckJBQztlQUFBQTs7UUF6ZEFDO2VBQUFBOztRQTgyQkFDO2VBQUFBOztRQTVQQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7UUFoQ0FDO2VBQUFBOztRQWx6QkFDO2VBQUFBOztRQXVpQ0FDO2VBQUFBOztRQTNGQUM7ZUFBQUE7O1FBdkdBQztlQUFBQTs7UUE5bEJBQztlQUFBQTs7UUFpYkFDO2VBQUFBOztRQTNMQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUEyUUFDO2VBQUFBOztRQW5MQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQTNDQUM7ZUFBQUE7O1FBdlFBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQXVEQUM7ZUFBQUE7O1FBbXpCQUM7ZUFBQUE7O1FBaFBBQztlQUFBQTs7UUFycUJBQztlQUFBQTs7UUFrYkFDO2VBQUFBOztRQTZLQUM7ZUFBQUE7O1FBOXNCQUM7ZUFBQUE7O1FBaXdCQUM7ZUFBQUE7O1FBbnVCQUM7ZUFBQUE7O1FBc3hCQUM7ZUFBQUE7O1FBaGpCQUM7ZUFBQUE7O1FBaWZBQztlQUFBQTs7UUFwd0JBQztlQUFBQTs7UUF3Z0NBQztlQUFBQTs7UUF4RUFDO2VBQUFBOztRQXA0QkFDO2VBQUFBOztRQWs1QkFDO2VBQUFBOztRQWg3QkFDO2VBQUFBOztRQThZQUM7ZUFBQUE7O1FBdURBQztlQUFBQTs7UUE2WUFDO2VBQUFBOztRQTVxQkFDO2VBQUFBOztRQWdJQUM7ZUFBQUE7O1FBN0ZBQztlQUFBQTs7UUF1U0FDO2VBQUFBOztRQWNBQztlQUFBQTs7UUErREFDO2VBQUFBOztRQXpyQkFDO2VBQUFBOztRQXU2QkFDO2VBQUFBOztRQXYxQkFDO2VBQUFBOztRQXE5QkFDO2VBQUFBOztRQXZKQUM7ZUFBQUE7O1FBMktBQztlQUFBQTs7UUE5MkJBQztlQUFBQTs7UUFxMEJBQztlQUFBQTs7UUE3cUJBQztlQUFBQTs7UUF1bkJBQztlQUFBQTs7UUFoR0FDO2VBQUFBOztRQTFSQUM7ZUFBQUE7O1FBM3VCQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7UUFnMkJBQztlQUFBQTs7UUE0REFDO2VBQUFBOztRQTdLQUM7ZUFBQUE7O1FBOEZBQztlQUFBQTs7UUE3eUJBQztlQUFBQTs7UUFtbEJBQztlQUFBQTs7UUErbUJBQztlQUFBQTs7UUFscENBQztlQUFBQTs7UUFvekJBQztlQUFBQTs7UUF6c0JBQztlQUFBQTs7UUFxY0FDO2VBQUFBOztRQWlNQUM7ZUFBQUE7O1FBMENBQztlQUFBQTs7UUFwQ0FDO2VBQUFBOztRQS9JQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUFvZ0JBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQXBCQUM7ZUFBQUE7O1FBM2VBQztlQUFBQTs7UUFnSEFDO2VBQUFBOztRQW5LQUM7ZUFBQUE7O1FBMFlBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBcDdCQUM7ZUFBQUE7O1FBZ3JDQUM7ZUFBQUE7O1FBblFBQztlQUFBQTs7UUE5MUJBQztlQUFBQTs7UUFpY0FDO2VBQUFBOztRQTBzQkFDO2VBQUFBOztRQWhNQUM7ZUFBQUE7O1FBMWlCQUM7ZUFBQUE7O1FBZ2xCQUM7ZUFBQUE7O1FBM2NBQztlQUFBQTs7UUE0TUFDO2VBQUFBOztRQStEQUM7ZUFBQUE7O1FBMk5BQztlQUFBQTs7UUEvYUFDO2VBQUFBOztRQWxHQUM7ZUFBQUE7O1FBT0FDO2VBQUFBOztRQThrQkFDO2VBQUFBOztRQWxvQkFDO2VBQUFBOztRQXVIQUM7ZUFBQUE7O1FBcGdCQUM7ZUFBQUE7Ozs0QkFoT007aUVBRUQ7dUJBRVE7d0JBY2tEOzs7Ozs7QUFFeEUsU0FBUzVDLGlCQUFpQjZDLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsT0FBT0osVUFDUEssU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiQyxrQkFBa0I5SCw0QkFBNEJzSCxVQUFVQyxVQUN4RFEsa0JBQWtCbkYsNkJBQTZCMEUsVUFBVUMsVUFDekRTLHFCQUFxQnhCLGdDQUFnQ2MsVUFBVUM7SUFFckVBLFVBQVU7SUFFVixNQUFNVSxPQUFPLElBQUlULEtBQUtELFNBQVNJLFFBQVFELE1BQU1HLFlBQVlDLGlCQUFpQkMsaUJBQWlCQztJQUUzRixPQUFPQztBQUNUO0FBRU8sU0FBU3pELGlCQUFpQjBELFFBQVEsRUFBRVgsT0FBTztJQUNoRCxNQUFNLEVBQUVZLElBQUksRUFBRSxHQUFHVixpQkFBUSxFQUNuQkMsT0FBT1EsVUFDUEUsV0FBV3BCLHFCQUFxQmtCLFVBQVVYLFVBQzFDYyxxQkFBcUJ2SSwrQkFBK0JvSSxVQUFVWCxVQUM5RGUsYUFBYUMsSUFBQUEsbURBQTJDLEVBQUNILFVBQVVDLHFCQUNuRVYsU0FBU1csWUFDVFQsYUFBYTtJQUVuQk4sVUFBVTtJQUVWLE1BQU1pQixPQUFPLElBQUlMLEtBQUtaLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlPLFVBQVVDO0lBRW5FLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTMUQsaUJBQWlCMkQsUUFBUSxFQUFFbEIsT0FBTztJQUNoRCxNQUFNLEVBQUVtQixJQUFJLEVBQUUsR0FBR2pCLGlCQUFRLEVBQ3ZCQyxPQUFPZSxVQUNQTCxXQUFXbkIscUJBQXFCd0IsVUFBVWxCLFVBQzFDb0IsWUFBWXhGLHNCQUFzQnNGLFVBQVVsQixVQUM1Q3FCLGNBQWN2Ryx3QkFBd0JvRyxVQUFVbEIsVUFDaERzQixjQUFjckgsd0JBQXdCaUgsVUFBVWxCLFVBQ2hEdUIsZ0JBQWdCeEksMEJBQTBCbUksVUFBVWxCLFVBQ3BEd0IsaUJBQWlCdkksMkJBQTJCaUksVUFBVWxCLFVBQ3REeUIsYUFBYTtRQUNYWjtRQUNBTztRQUNBQztRQUNBQztRQUNBQztRQUNBQztLQUNELEVBQ0RFLGFBQWFDLElBQUFBLGdDQUF3QixFQUFDRixZQUFZekIsVUFDbERJLFNBQVNzQixZQUNUcEIsYUFBYTtJQUVmTixVQUFVO0lBRVYsTUFBTTRCLE9BQU8sSUFBSVQsS0FBS25CLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlPLFVBQVVPLFdBQVdDLGFBQWFDLGFBQWFDLGVBQWVDO0lBRXZILE9BQU9JO0FBQ1Q7QUFFTyxTQUFTakQsbUJBQW1Ca0QsU0FBUyxFQUFFN0IsT0FBTztJQUNuRCxNQUFNLEVBQUU4QixLQUFLLEVBQUUsR0FBRzVCLGlCQUFRLEVBQ3BCQyxPQUFPMEIsV0FDUGhCLFdBQVdoQixzQkFBc0JnQyxXQUFXN0IsVUFDNUNvQixZQUFZdkYsdUJBQXVCZ0csV0FBVzdCLFVBQzlDeUIsYUFBYTtRQUNYWjtRQUNBTztLQUNELEVBQ0RXLGNBQWNDLElBQUFBLGlDQUF5QixFQUFDUCxZQUFZekIsVUFDcERJLFNBQVMyQixhQUNUekIsYUFBYTtJQUVuQk4sVUFBVTtJQUVWLE1BQU1pQyxRQUFRLElBQUlILE1BQU05QixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZTyxVQUFVTztJQUVyRSxPQUFPYTtBQUNUO0FBRU8sU0FBU3ZFLG1CQUFtQndFLFNBQVMsRUFBRWxDLE9BQU87SUFDbkQsTUFBTSxFQUFFbUMsS0FBSyxFQUFFLEdBQUdqQyxpQkFBUSxFQUNwQkMsT0FBTytCLFdBQ1A5QixTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCaUMsWUFBWUYsVUFBVUcsWUFBWSxJQUNsQ0MsYUFBYTdFLHdCQUF3QjJFLFdBQVdwQyxVQUNoRHVDLFFBQVFELFlBQ1JoQyxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTXdDLFFBQVEsSUFBSUwsTUFBTW5DLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlpQztJQUUzRCxPQUFPQztBQUNUO0FBRU8sU0FBU3BKLG1CQUFtQnFKLFNBQVMsRUFBRXpDLE9BQU87SUFDbkQsTUFBTSxFQUFFMEMsS0FBSyxFQUFFLEdBQUd4QyxpQkFBUSxFQUNwQkMsT0FBT3NDLFdBQ1ByQyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTTJDLFFBQVEsSUFBSUQsTUFBTTFDLFNBQVNJLFFBQVFELE1BQU1HO0lBRS9DLE9BQU9xQztBQUNUO0FBRU8sU0FBU3RKLG1CQUFtQnVKLFNBQVMsRUFBRTVDLE9BQU87SUFDbkQsTUFBTSxFQUFFNkMsS0FBSyxFQUFFLEdBQUczQyxpQkFBUSxFQUNwQkMsT0FBT3lDLFdBQ1AvQixXQUFXekIsc0JBQXNCd0QsV0FBVzVDLFVBQzVDYyxxQkFBcUJ6SSxnQ0FBZ0N1SyxXQUFXNUMsVUFDaEU4QyxjQUFjQyxJQUFBQSxvREFBNEMsRUFBQ2xDLFVBQVVDLHFCQUNyRVYsU0FBUzBDLGFBQ1R4QyxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTWdELFFBQVEsSUFBSUgsTUFBTTdDLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlPLFVBQVVDO0lBRXJFLE9BQU9rQztBQUNUO0FBRU8sU0FBU3BKLG1CQUFtQnFKLFNBQVMsRUFBRWpELE9BQU87SUFDbkQsTUFBTSxFQUFFa0QsS0FBSyxFQUFFLEdBQUdoRCxpQkFBUSxFQUNwQkMsT0FBTzhDLFdBQ1A3QyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2I2QyxPQUFPaEosa0JBQWtCOEksV0FBV2pEO0lBRTFDQSxVQUFVO0lBRVYsTUFBTW9ELFFBQVEsSUFBSUYsTUFBTWxELFNBQVNJLFFBQVFELE1BQU1HLFlBQVk2QztJQUUzRCxPQUFPQztBQUNUO0FBRU8sU0FBU3RFLHFCQUFxQnVFLFVBQVUsRUFBRXJELE9BQU87SUFDdEQsTUFBTSxFQUFFc0QsTUFBTSxFQUFFLEdBQUdwRCxpQkFBUSxFQUNyQkMsT0FBT2tELFlBQ1BqRCxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCb0QsYUFBYUYsV0FBV0csYUFBYSxJQUNyQ0MsY0FBYzdFLDBCQUEwQjJFLFlBQVl2RCxVQUNwRHVDLFFBQVFrQixhQUNSbkQsYUFBYTtJQUVuQk4sVUFBVTtJQUVWLE1BQU0wRCxTQUFTLElBQUlKLE9BQU90RCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZaUM7SUFFN0QsT0FBT21CO0FBQ1Q7QUFFTyxTQUFTckgscUJBQXFCc0gsVUFBVSxFQUFFM0QsT0FBTztJQUN0RCxNQUFNLEVBQUU0RCxNQUFNLEVBQUUsR0FBRzFELGlCQUFRLEVBQ3JCQyxPQUFPd0QsWUFDUDlDLFdBQVdyQix1QkFBdUJtRSxZQUFZM0QsVUFDOUM2RCxlQUFlbEssMkJBQTJCZ0ssWUFBWTNELFVBQ3REYyxxQkFBcUJ4SSxpQ0FBaUNxTCxZQUFZM0QsVUFDbEU4RCxlQUFlQyxJQUFBQSxzRUFBOEQsRUFBQ2xELFVBQVVnRCxjQUFjL0MscUJBQ3RHVixTQUFTMEQsY0FDVHhELGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNZ0UsU0FBUyxJQUFJSixPQUFPNUQsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVWdELGNBQWMvQztJQUVyRixPQUFPa0Q7QUFDVDtBQUVPLFNBQVN0TCx1QkFBdUJ1TCxXQUFXLEVBQUVqRSxPQUFPO0lBQ3pELE1BQU0sRUFBRWtFLE9BQU8sRUFBRSxHQUFHaEUsaUJBQVEsRUFDdEJDLE9BQU84RCxhQUNQN0QsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiNkQsT0FBT3RHLG9CQUFvQm9HLGFBQWFqRSxVQUN4Q21ELE9BQU9qSixvQkFBb0IrSixhQUFhakU7SUFFOUNBLFVBQVU7SUFFVixNQUFNb0UsVUFBVSxJQUFJRixRQUFRbEUsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTZELE1BQU1oQjtJQUVyRSxPQUFPaUI7QUFDVDtBQUVPLFNBQVN4Ryx1QkFBdUJ5RyxXQUFXLEVBQUVyRSxPQUFPO0lBQ3pELE1BQU0sRUFBRXNFLE9BQU8sRUFBRSxHQUFHcEUsaUJBQVEsRUFDdEJDLE9BQU9rRSxhQUNQekMsT0FBT3BFLG9CQUFvQjZHLGFBQWFyRSxVQUN4Q3VFLGVBQWU3Syw0QkFBNEIySyxhQUFhckUsVUFDeER3RSxpQkFBaUJyTCw4QkFBOEJrTCxhQUFhckUsVUFDNUR5RSxnQkFBZ0JDLElBQUFBLDZCQUFxQixFQUFDOUMsT0FDdEN4QixTQUFTcUUsZUFDVG5FLGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNMkUsVUFBVSxJQUFJTCxRQUFRdEUsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXNCLE1BQU0yQyxjQUFjQztJQUVuRixPQUFPRztBQUNUO0FBRU8sU0FBUzdFLHlCQUF5QjhFLFlBQVksRUFBRTVFLE9BQU87SUFDNUQsTUFBTSxFQUFFNkUsUUFBUSxFQUFFLEdBQUczRSxpQkFBUSxFQUN2QkMsT0FBT3lFLGNBQ1B4RSxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2I2RCxPQUFPN0YscUJBQXFCc0csY0FBYzVFLFVBQzFDbUQsT0FBTzVJLHFCQUFxQnFLLGNBQWM1RSxVQUMxQzhFLGFBQWFyTCwyQkFBMkJtTCxjQUFjNUU7SUFFNURBLFVBQVU7SUFFVixNQUFNYSxXQUFXLElBQUlnRSxTQUFTN0UsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTZELE1BQU1oQixNQUFNMkI7SUFFN0UsT0FBT2pFO0FBQ1Q7QUFFTyxTQUFTaEkseUJBQXlCa00sWUFBWSxFQUFFL0UsT0FBTztJQUM1RCxNQUFNLEVBQUVnRixRQUFRLEVBQUUsR0FBRzlFLGlCQUFRLEVBQ3ZCQyxPQUFPNEUsY0FDUDNFLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjJFLGdCQUFnQnRNLDhCQUE4Qm9NLGNBQWMvRSxVQUM1RHVDLFFBQVEwQyxlQUFlLEdBQUc7SUFFaENqRixVQUFVO0lBRVYsTUFBTWtGLFdBQVcsSUFBSUYsU0FBU2hGLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlpQztJQUVqRSxPQUFPMkM7QUFDVDtBQUVPLFNBQVMzSSwyQkFBMkI0SSxhQUFhLEVBQUVuRixPQUFPO0lBQy9ELE1BQU0sRUFBRW9GLFNBQVMsRUFBRSxHQUFHbEYsaUJBQVEsRUFDeEJDLE9BQU9nRixlQUNQL0UsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiNkMsT0FBTzdJLHNCQUFzQjZLLGVBQWVuRjtJQUVsREEsVUFBVTtJQUVWLE1BQU1xRixZQUFZLElBQUlELFVBQVVwRixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNkM7SUFFbkUsT0FBT2tDO0FBQ1Q7QUFFTyxTQUFTL0osMkJBQTJCZ0ssYUFBYSxFQUFFdEYsT0FBTztJQUMvRCxNQUFNLEVBQUV1RixTQUFTLEVBQUUsR0FBR3JGLGlCQUFRLEVBQ3hCQyxPQUFPbUYsZUFDUGxGLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjZELE9BQU9sRyxzQkFBc0JxSCxlQUFldEYsVUFDNUNtRCxPQUFPOUksc0JBQXNCaUwsZUFBZXRGO0lBRWxEQSxVQUFVO0lBRVYsTUFBTXdGLFlBQVksSUFBSUQsVUFBVXZGLFNBQVNJLFFBQVFELE1BQU1HLFlBQVk2RCxNQUFNaEI7SUFFekUsT0FBT3FDO0FBQ1Q7QUFFTyxTQUFTeEssMkJBQTJCeUssYUFBYSxFQUFFekYsT0FBTztJQUMvRCxNQUFNLEVBQUUwRixTQUFTLEVBQUUsR0FBR3hGLGlCQUFRLEVBQ3hCQyxPQUFPc0YsZUFDUHJGLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYk8sV0FBV3hCLDBCQUEwQm9HLGVBQWV6RixVQUNwRDJGLFFBQVF6Six1QkFBdUJ1SixlQUFlekY7SUFFcERBLFVBQVU7SUFFVixNQUFNNEYsWUFBWSxJQUFJRixVQUFVMUYsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVThFO0lBRTdFLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTakssMkJBQTJCa0ssYUFBYSxFQUFFN0YsT0FBTztJQUMvRCxNQUFNLEVBQUU4RixTQUFTLEVBQUUsR0FBRzVGLGlCQUFRLEVBQ3hCQyxPQUFPMEYsZUFDUHpGLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjZELE9BQU9qRyxzQkFBc0IySCxlQUFlN0YsVUFDNUNpQyxRQUFRMUQsdUJBQXVCc0gsZUFBZTdGO0lBRXBEQSxVQUFVO0lBRVYsTUFBTW9CLFlBQVksSUFBSTBFLFVBQVU5RixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNkQsTUFBTWxDO0lBRXpFLE9BQU9iO0FBQ1Q7QUFFTyxTQUFTbEcsNkJBQTZCNkssY0FBYyxFQUFFL0YsT0FBTztJQUNsRSxNQUFNLEVBQUVnRyxVQUFVLEVBQUUsR0FBRzlGLGlCQUFRLEVBQ3pCQyxPQUFPNEYsZ0JBQ1AzRixTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2JPLFdBQVd2QiwyQkFBMkJ5RyxnQkFBZ0IvRixVQUN0RDJGLFFBQVF4Six3QkFBd0I0SixnQkFBZ0IvRjtJQUV0REEsVUFBVTtJQUVWLE1BQU1pRyxhQUFhLElBQUlELFdBQVdoRyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZTyxVQUFVOEU7SUFFL0UsT0FBT007QUFDVDtBQUVPLFNBQVN4Syw2QkFBNkJ5SyxjQUFjLEVBQUVsRyxPQUFPO0lBQ2xFLE1BQU0sRUFBRW1HLFVBQVUsRUFBRSxHQUFHakcsaUJBQVEsRUFDekJDLE9BQU8rRixnQkFDUDlGLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjhGLGtCQUFrQjdLLGtDQUFrQzJLLGdCQUFnQmxHLFVBQ3BFdUMsUUFBUTZELGlCQUFpQixHQUFHO0lBRWxDcEcsVUFBVTtJQUVWLE1BQU1xRyxhQUFhLElBQUlGLFdBQVduRyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZaUM7SUFFckUsT0FBTzhEO0FBQ1Q7QUFFTyxTQUFTOU0sNkJBQTZCK00sY0FBYyxFQUFFdEcsT0FBTztJQUNsRSxNQUFNLEVBQUV1RyxVQUFVLEVBQUUsR0FBR3JHLGlCQUFRLEVBQ3pCQyxPQUFPbUcsZ0JBQ1AxRSxPQUFPdkUsdUJBQXVCaUosZ0JBQWdCdEcsVUFDOUNpQixPQUFPakUsdUJBQXVCc0osZ0JBQWdCdEcsVUFDOUNnRCxRQUFRMUosd0JBQXdCZ04sZ0JBQWdCdEcsVUFDaERnRSxTQUFTNUgseUJBQXlCa0ssZ0JBQWdCdEcsVUFDbEQyRSxVQUFVaEgsMEJBQTBCMkksZ0JBQWdCdEcsVUFDcEQ0RixZQUFZN0ssNEJBQTRCdUwsZ0JBQWdCdEcsVUFDeERpRyxhQUFhaEwsNkJBQTZCcUwsZ0JBQWdCdEcsVUFDMUR3RyxjQUFjL0osOEJBQThCNkosZ0JBQWdCdEcsVUFDNUR5RyxnQkFBZ0IzSyxnQ0FBZ0N3SyxnQkFBZ0J0RyxVQUNoRXlCLGFBQWE7UUFDWEc7UUFDQVg7UUFDQStCO1FBQ0FnQjtRQUNBVztRQUNBaUI7UUFDQUs7UUFDQU87UUFDQUM7S0FDRCxFQUNEQyxtQkFBbUJDLElBQUFBLHNDQUE4QixFQUFDbEYsWUFBWXpCLFVBQzlESSxTQUFTc0csa0JBQ1RwRyxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTThFLGFBQWEsSUFBSXlCLFdBQVd2RyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZc0IsTUFBTVgsTUFBTStCLE9BQU9nQixRQUFRVyxTQUFTaUIsV0FBV0ssWUFBWU8sYUFBYUM7SUFFN0ksT0FBTzNCO0FBQ1Q7QUFFTyxTQUFTbkksK0JBQStCaUssZUFBZSxFQUFFNUcsT0FBTztJQUNyRSxNQUFNLEVBQUU2RyxXQUFXLEVBQUUsR0FBRzNHLGlCQUFRLEVBQzFCQyxPQUFPeUcsaUJBQ1BFLFFBQVEzSix5QkFBeUJ5SixpQkFBaUI1RyxVQUNsRCtHLGNBQWM1TCwrQkFBK0J5TCxpQkFBaUI1RyxVQUM5RGdILGtCQUFrQnBLLG1DQUFtQ2dLLGlCQUFpQjVHLFVBQ3RFaUgsb0JBQW9CQyxJQUFBQSxnREFBd0MsRUFBQ0Ysa0JBQzdENUcsU0FBUzZHLG1CQUNUM0csYUFBYTtJQUVuQk4sVUFBVTtJQUVWLE1BQU13RyxjQUFjLElBQUlLLFlBQVk3RyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZd0csT0FBT0MsYUFBYUM7SUFFM0YsT0FBT1I7QUFDVDtBQUVPLFNBQVMzTCwrQkFBK0JzTSxlQUFlLEVBQUVuSCxPQUFPO0lBQ3JFLE1BQU0sRUFBRW9ILFdBQVcsRUFBRSxHQUFHbEgsaUJBQVEsRUFDMUJDLE9BQU9nSCxpQkFDUC9HLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYlksV0FBV2lHLGdCQUFnQkUsV0FBVyxJQUN0Q2xELE9BQU9uRyx3QkFBd0JrRCxVQUFVbEIsVUFDekM0QixPQUFPdEUsd0JBQXdCNkosaUJBQWlCbkgsVUFDaERxQixjQUFjLElBQUkrRixZQUFZcEgsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTZELE1BQU12QztJQUU3RSxPQUFPUDtBQUNUO0FBRU8sU0FBU3JILCtCQUErQnNOLGVBQWUsRUFBRXRILE9BQU87SUFDckUsTUFBTSxFQUFFdUgsV0FBVyxFQUFFLEdBQUdySCxpQkFBUSxFQUMxQkMsT0FBT21ILGlCQUNQbEgsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiNkQsT0FBT3JHLHdCQUF3QndKLGlCQUFpQnRILFVBQ2hEd0gsY0FBY3RPLCtCQUErQm9PLGlCQUFpQnRILFVBQzlEeUgsV0FBVzFOLDRCQUE0QnVOLGlCQUFpQnRILFVBQ3hEMEgsWUFBWTNLLDZCQUE2QnVLLGlCQUFpQnRILFVBQzFEc0IsY0FBYyxJQUFJaUcsWUFBWXZILFNBQVNJLFFBQVFELE1BQU1HLFlBQVk2RCxNQUFNcUQsYUFBYUMsVUFBVUM7SUFFcEcsT0FBT3BHO0FBQ1Q7QUFFTyxTQUFTOUcsaUNBQWlDbU4sZ0JBQWdCLEVBQUUzSCxPQUFPO0lBQ3hFLE1BQU0sRUFBRTRILFlBQVksRUFBRSxHQUFHMUgsaUJBQVEsRUFDM0JDLE9BQU93SCxrQkFDUHZILFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjZELE9BQU9wRyx5QkFBeUI0SixrQkFBa0IzSCxVQUNsRG1ELE9BQU8vSSx5QkFBeUJ1TixrQkFBa0IzSCxVQUNsRDZILFFBQVExUCwwQkFBMEJ3UCxrQkFBa0IzSDtJQUUxREEsVUFBVTtJQUVWLE1BQU04SCxlQUFlLElBQUlGLGFBQWE1SCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNkQsTUFBTWhCLE1BQU0wRTtJQUVyRixPQUFPQztBQUNUO0FBRU8sU0FBU3JOLG1DQUFtQ3NOLGlCQUFpQixFQUFFL0gsT0FBTztJQUMzRSxNQUFNLEVBQUVnSSxhQUFhLEVBQUUsR0FBRzlILGlCQUFRLEVBQzVCQyxPQUFPNEgsbUJBQ1AzSCxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2IySCxvQkFBb0JGLGtCQUFrQkcsb0JBQW9CLElBQzFEQyxxQkFBcUJ4TiwwQ0FBMENzTixtQkFBbUJqSSxVQUNsRnVDLFFBQVE0RixvQkFBb0IsR0FBRztJQUVyQ25JLFVBQVU7SUFFVixNQUFNb0ksZ0JBQWdCLElBQUlKLGNBQWNoSSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZaUM7SUFFM0UsT0FBTzZGO0FBQ1Q7QUFFTyxTQUFTdFAsbUNBQW1DdVAsaUJBQWlCLEVBQUVySSxPQUFPO0lBQzNFLE1BQU0sRUFBRXNJLGFBQWEsRUFBRSxHQUFHcEksaUJBQVEsRUFDNUJDLE9BQU9rSSxtQkFDUGpJLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYnNCLE9BQU94RSwwQkFBMEJpTCxtQkFBbUJySSxVQUNwRHVCLGdCQUFnQixJQUFJK0csY0FBY3RJLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlzQjtJQUUzRSxPQUFPTDtBQUNUO0FBRU8sU0FBU3hGLG1DQUFtQ3dNLGlCQUFpQixFQUFFdkksT0FBTztJQUMzRSxNQUFNLEVBQUV3SSxhQUFhLEVBQUUsR0FBR3RJLGlCQUFRLEVBQzVCQyxPQUFPb0ksbUJBQ1BuSSxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2IrRSxZQUFZL0ksK0JBQStCaU0sbUJBQW1CdkksVUFDOUQwRCxTQUFTN0UsNEJBQTRCMEosbUJBQW1Cdkk7SUFFOURBLFVBQVU7SUFFVixNQUFNeUcsZ0JBQWdCLElBQUkrQixjQUFjeEksU0FBU0ksUUFBUUQsTUFBTUcsWUFBWStFLFdBQVczQjtJQUV0RixPQUFPK0M7QUFDVDtBQUVPLFNBQVN6TixxQ0FBcUN5UCxrQkFBa0IsRUFBRXpJLE9BQU87SUFDOUUsTUFBTSxFQUFFMEksY0FBYyxFQUFFLEdBQUd4SSxpQkFBUSxFQUM3QkMsT0FBT3NJLG9CQUNQckksU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNicUksVUFBVS9OLDhCQUE4QjZOLG9CQUFvQnpJLFVBQzVEeUgsV0FBVzNOLCtCQUErQjJPLG9CQUFvQnpJLFVBQzlEMEgsWUFBWTVLLGdDQUFnQzJMLG9CQUFvQnpJLFVBQ2hFd0IsaUJBQWlCLElBQUlrSCxlQUFlMUksU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXFJLFNBQVNsQixVQUFVQztJQUVoRyxPQUFPbEc7QUFDVDtBQUVPLFNBQVM5RyxzQ0FBc0NrTyxvQkFBb0IsRUFBRTVJLE9BQU87SUFDakYsTUFBTStILG9CQUFvQmEscUJBQXFCQyxvQkFBb0IsSUFDN0RULGdCQUFnQjNOLG1DQUFtQ3NOLG1CQUFtQi9IO0lBRTVFLE9BQU9vSTtBQUNUO0FBRU8sU0FBU25NLHNDQUFzQzZNLHdCQUF3QixFQUFFOUksT0FBTztJQUNyRixNQUFNLEVBQUUrSSxTQUFTLEVBQUUsR0FBRzdJLGlCQUFRLEVBQ3hCQyxPQUFPMkksMEJBQ1AzRSxPQUFPL0YsaUNBQWlDMEssMEJBQTBCOUksVUFDbEVvRCxRQUFRdkosa0NBQWtDaVAsMEJBQTBCOUksVUFDcEVxRyxhQUFhM0ssdUNBQXVDb04sMEJBQTBCOUksVUFDOUV3RyxjQUFjOUosd0NBQXdDb00sMEJBQTBCOUksVUFDaEZnSixrQkFBa0JDLElBQUFBLDREQUFvRCxFQUFDOUUsTUFBTWYsT0FBT2lELFlBQVlHLGNBQ2hHcEcsU0FBUzRJLGlCQUNUMUksYUFBYSxNQUNiNEksWUFBWSxJQUFJSCxVQUFVL0ksU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTZELE1BQU1mLE9BQU9pRCxZQUFZRztJQUU1RixPQUFPMEM7QUFDVDtBQUVPLFNBQVMxUSx1Q0FBdUMyUSxtQkFBbUIsRUFBRW5KLE9BQU87SUFDakYsTUFBTSxFQUFFb0osZUFBZSxFQUFFLEdBQUdsSixpQkFBUSxFQUM5QkMsT0FBT2dKLHFCQUNQL0ksU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiTyxXQUFXMUIsZ0NBQWdDZ0sscUJBQXFCbkosVUFDaEVrRixXQUFXdE0sZ0NBQWdDdVEscUJBQXFCbko7SUFFdEVBLFVBQVU7SUFFVixNQUFNTyxrQkFBa0IsSUFBSTZJLGdCQUFnQnBKLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlPLFVBQVVxRTtJQUV6RixPQUFPM0U7QUFDVDtBQUVPLFNBQVMxRCx1Q0FBdUN3TSxtQkFBbUIsRUFBRXJKLE9BQU87SUFDakYsTUFBTSxFQUFFc0osZUFBZSxFQUFFLEdBQUdwSixpQkFBUSxFQUM5QkMsT0FBT2tKLHFCQUNQakosU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiMkIsUUFBUXhELDZCQUE2QjRLLHFCQUFxQnJKO0lBRWhFQSxVQUFVO0lBRVYsTUFBTWdILGtCQUFrQixJQUFJc0MsZ0JBQWdCdEosU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTJCO0lBRS9FLE9BQU8rRTtBQUNUO0FBRU8sU0FBUzVMLHlDQUF5Q3dOLG9CQUFvQixFQUFFNUksT0FBTztJQUNwRixNQUFNLEVBQUV1SixlQUFlLEVBQUUsR0FBR3JKLGlCQUFRLEVBQzlCQyxPQUFPeUksc0JBQ1B4SSxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2JPLFdBQVd0QixpQ0FBaUNxSixzQkFBc0I1SSxVQUNsRW9JLGdCQUFnQjFOLHNDQUFzQ2tPLHNCQUFzQjVJO0lBRWxGQSxVQUFVO0lBRVYsTUFBTXdKLG1CQUFtQixJQUFJRCxnQkFBZ0J2SixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZTyxVQUFVdUg7SUFFMUYsT0FBT29CO0FBQ1Q7QUFFTyxTQUFTcFIsNkNBQTZDcVIsc0JBQXNCLEVBQUV6SixPQUFPO0lBQzFGLE1BQU0sRUFBRTBKLGtCQUFrQixFQUFFLEdBQUd4SixpQkFBUSxFQUNqQ0MsT0FBT3NKLHdCQUNQdEYsT0FBT2hHLHdDQUF3Q3NMLHdCQUF3QnpKLFVBQ3ZFcUcsYUFBYTdLLHFDQUFxQ2lPLHdCQUF3QnpKLFVBQzFFd0csY0FBY2hLLHNDQUFzQ2lOLHdCQUF3QnpKLFVBQzVFMkosMEJBQTBCQyxJQUFBQSxnRUFBd0QsRUFBQ3pGLE1BQU1rQyxZQUFZRyxjQUNyR3BHLFNBQVN1Six5QkFDVHJKLGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNYyxxQkFBcUIsSUFBSTRJLG1CQUFtQjFKLFNBQVNJLFFBQVFELE1BQU1HLFlBQVk2RCxNQUFNa0MsWUFBWUc7SUFFdkcsT0FBTzFGO0FBQ1Q7QUFFTyxTQUFTNUIsK0NBQStDMkssdUJBQXVCLEVBQUU3SixPQUFPO0lBQzdGLE1BQU0sRUFBRThKLG1CQUFtQixFQUFFLEdBQUc1SixpQkFBUSxFQUNsQ0MsT0FBTzBKLHlCQUNQMUYsT0FBTzlGLGdDQUFnQ3dMLHlCQUF5QjdKLFVBQ2hFK0osMkJBQTJCL0ssMkRBQTJEbUYsTUFBTTBGLHlCQUF5QjdKLFVBQ3JIZ0ssMkJBQTJCQyxJQUFBQSxtRUFBMkQsRUFBQzlGLE1BQU00RiwyQkFDN0Z4SCxRQUFRd0gsMEJBQ1IzSixTQUFTNEosMEJBQ1QxSixhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTWtLLHNCQUFzQixJQUFJSixvQkFBb0I5SixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZaUM7SUFFdkYsT0FBTzJIO0FBQ1Q7QUFFTyxTQUFTbE8saURBQWlEOE0sd0JBQXdCLEVBQUU5SSxPQUFPO0lBQ2hHLE1BQU0sRUFBRW1LLG9CQUFvQixFQUFFLEdBQUdqSyxpQkFBUSxFQUNuQ0MsT0FBTzJJLDBCQUNQSSxZQUFZak4sc0NBQXNDNk0sMEJBQTBCOUksVUFDNUVvSyw2QkFBNkJDLElBQUFBLCtDQUF1QyxFQUFDbkIsWUFDckU5SSxTQUFTZ0ssNEJBQ1Q5SixhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTXNLLHVCQUF1QixJQUFJSCxxQkFBcUJuSyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNEk7SUFFekYsT0FBT29CO0FBQ1Q7QUFFTyxTQUFTdkwsb0RBQW9Eb0YsSUFBSSxFQUFFb0csc0JBQXNCLEVBQUV2SyxPQUFPO0lBQ3ZHLE1BQU0sRUFBRXdLLGtCQUFrQixFQUFFLEdBQUd0SyxpQkFBUSxFQUNqQ0MsT0FBT29LLHdCQUNQMUosV0FBV2xCLDBDQUEwQ3dFLE1BQU1vRyx3QkFBd0J2SyxVQUNuRjhFLGFBQWF0TCxxQ0FBcUMrUSx3QkFBd0J2SyxVQUMxRWdLLDJCQUEyQlMsSUFBQUEsbURBQTJDLEVBQUN0RyxNQUFNdEQsVUFBVWIsVUFDdkZJLFNBQVM0SiwwQkFDVDFKLGFBQWEsTUFDYm9LLGFBQWEsSUFBSUYsbUJBQW1CeEssU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVWlFO0lBRXZGLE9BQU80RjtBQUNUO0FBRU8sU0FBUzlLLGdDQUFnQ3VFLElBQUksRUFBRVMsWUFBWSxFQUFFNUUsT0FBTztJQUN6RSxNQUFNLEVBQUU2RSxRQUFRLEVBQUUsR0FBRzNFLGlCQUFRLEVBQ3ZCQyxPQUFPeUUsY0FDUHpCLE9BQU81SSxxQkFBcUJxSyxlQUM1QjNDLFFBQVF2RCw2QkFBNkJ5RixNQUFNUyxjQUFjNUUsVUFDekQySyxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDekgsT0FDeEMvQyxTQUFTdUssZ0JBQ1RySyxhQUFhLE1BQ2JPLFdBQVcsSUFBSWdFLFNBQVM3RSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNkQsTUFBTWhCLE1BQU1sQjtJQUU3RSxPQUFPcEI7QUFDVDtBQUVPLFNBQVMxRyxrQkFBa0I4SSxTQUFTLEVBQUVqRCxPQUFPO0lBQ2xELE1BQU1tRCxPQUFPRixVQUFVNEgsT0FBTztJQUU5QixPQUFPMUg7QUFDVDtBQUVPLFNBQVMzRSxvQkFBb0JtRixVQUFVLEVBQUUzRCxPQUFPO0lBQ3JELE1BQU02QixZQUFZOEIsV0FBV21ILFlBQVksSUFDbkM3SSxRQUFRdEQsbUJBQW1Ca0QsV0FBVzdCO0lBRTVDLE9BQU9pQztBQUNUO0FBRU8sU0FBU3pFLG9CQUFvQjZHLFdBQVcsRUFBRXJFLE9BQU87SUFDdEQsTUFBTWtCLFdBQVdtRCxZQUFZZ0QsV0FBVyxJQUNsQ3pGLE9BQU9yRSxpQkFBaUIyRCxVQUFVbEI7SUFFeEMsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTMUgsb0JBQW9CK0osV0FBVyxFQUFFakUsT0FBTztJQUN0RCxNQUFNbUQsT0FBT2MsWUFBWTRHLE9BQU87SUFFaEMsT0FBTzFIO0FBQ1Q7QUFFTyxTQUFTdEYsb0JBQW9Cb0csV0FBVyxFQUFFakUsT0FBTztJQUN0RCxNQUFNbUUsT0FBT0YsWUFBWThHLE9BQU87SUFFaEMsT0FBTzVHO0FBQ1Q7QUFFTyxTQUFTMUUscUJBQXFCa0IsUUFBUSxFQUFFWCxPQUFPO0lBQ3BELE1BQU00RSxlQUFlakUsU0FBU3FLLGVBQWUsSUFDdkNuSyxXQUFXZix5QkFBeUI4RSxjQUFjNUU7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVNuQixxQkFBcUJ3QixRQUFRLEVBQUVsQixPQUFPO0lBQ3BELElBQUlhLFdBQVc7SUFFZixNQUFNK0QsZUFBZTFELFNBQVM4SixlQUFlO0lBRTdDLElBQUlwRyxpQkFBaUIsTUFBTTtRQUN6Qi9ELFdBQVdmLHlCQUF5QjhFLGNBQWM1RTtJQUNwRDtJQUVBLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTdEcscUJBQXFCcUssWUFBWTtJQUMvQyxNQUFNekIsT0FBT3lCLGFBQWFpRyxPQUFPO0lBRWpDLE9BQU8xSDtBQUNUO0FBRU8sU0FBUzdFLHFCQUFxQnNHLFlBQVksRUFBRTVFLE9BQU87SUFDeEQsTUFBTW1FLE9BQU87SUFFYixPQUFPQTtBQUNUO0FBRU8sU0FBU3ZJLHNCQUFzQnNGLFFBQVEsRUFBRWxCLE9BQU87SUFDckQsSUFBSW9CLFlBQVk7SUFFaEIsTUFBTXlFLGdCQUFnQjNFLFNBQVMrSixnQkFBZ0I7SUFFL0MsSUFBSXBGLGtCQUFrQixNQUFNO1FBQzFCekUsWUFBWXpGLDJCQUEyQmtLLGVBQWU3RjtJQUN4RDtJQUVBLE9BQU9vQjtBQUNUO0FBRU8sU0FBU2hDLHNCQUFzQndELFNBQVMsRUFBRTVDLE9BQU87SUFDdEQsTUFBTTRFLGVBQWVoQyxVQUFVb0ksZUFBZSxJQUN4Q25LLFdBQVdmLHlCQUF5QjhFLGNBQWM1RTtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBUzVDLHNCQUFzQnFILGFBQWEsRUFBRXRGLE9BQU87SUFDMUQsTUFBTW1FLE9BQU9tQixjQUFjeUYsT0FBTztJQUVsQyxPQUFPNUc7QUFDVDtBQUVPLFNBQVM5SixzQkFBc0JpTCxhQUFhLEVBQUV0RixPQUFPO0lBQzFELE1BQU1tRCxPQUFPbUMsY0FBY3VGLE9BQU87SUFFbEMsT0FBTzFIO0FBQ1Q7QUFFTyxTQUFTN0ksc0JBQXNCNkssYUFBYSxFQUFFbkYsT0FBTztJQUMxRCxNQUFNbUQsT0FBT2dDLGNBQWMwRixPQUFPO0lBRWxDLE9BQU8xSDtBQUNUO0FBRU8sU0FBU2pGLHNCQUFzQjJILGFBQWEsRUFBRTdGLE9BQU87SUFDMUQsTUFBTW1FLE9BQU8wQixjQUFja0YsT0FBTztJQUVsQyxPQUFPNUc7QUFDVDtBQUVPLFNBQVN0RSxzQkFBc0JnQyxTQUFTLEVBQUU3QixPQUFPO0lBQ3RELElBQUlhLFdBQVc7SUFFZixNQUFNK0QsZUFBZS9DLFVBQVVtSixlQUFlO0lBRTlDLElBQUlwRyxpQkFBaUIsTUFBTTtRQUN6Qi9ELFdBQVdmLHlCQUF5QjhFLGNBQWM1RTtJQUNwRDtJQUVBLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTaEYsdUJBQXVCZ0csU0FBUyxFQUFFN0IsT0FBTztJQUN2RCxJQUFJb0IsWUFBWTtJQUVoQixNQUFNeUUsZ0JBQWdCaEUsVUFBVW9KLGdCQUFnQjtJQUVoRCxJQUFJcEYsa0JBQWtCLE1BQU07UUFDMUJ6RSxZQUFZekYsMkJBQTJCa0ssZUFBZTdGO0lBQ3hEO0lBRUEsT0FBT29CO0FBQ1Q7QUFFTyxTQUFTNUIsdUJBQXVCbUUsVUFBVSxFQUFFM0QsT0FBTztJQUN4RCxNQUFNNEUsZUFBZWpCLFdBQVdxSCxlQUFlLElBQ3pDbkssV0FBV2YseUJBQXlCOEUsY0FBYzVFO0lBRXhELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTeEQsdUJBQXVCaUosY0FBYyxFQUFFdEcsT0FBTztJQUM1RCxJQUFJNEIsT0FBTztJQUVYLE1BQU1WLFdBQVdvRixlQUFlZSxXQUFXO0lBRTNDLElBQUluRyxhQUFhLE1BQU07UUFDckJVLE9BQU9yRSxpQkFBaUIyRCxVQUFVbEI7SUFDcEM7SUFFQSxPQUFPNEI7QUFDVDtBQUVPLFNBQVM1RSx1QkFBdUJzSixjQUFjLEVBQUV0RyxPQUFPO0lBQzVELElBQUlpQixPQUFPO0lBRVgsTUFBTU4sV0FBVzJGLGVBQWU0RSxXQUFXO0lBRTNDLElBQUl2SyxhQUFhLE1BQU07UUFDckJNLE9BQU9oRSxpQkFBaUIwRCxVQUFVWDtJQUNwQztJQUVBLE9BQU9pQjtBQUNUO0FBRU8sU0FBUy9FLHVCQUF1QnVKLGFBQWEsRUFBRXpGLE9BQU87SUFDM0QsTUFBTUksU0FBU3FGLGNBQWMwRixTQUFTLElBQ2hDekUsbUJBQW1CdEcsUUFDbkJ1RixRQUFReUYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMzRTtJQUV6QyxPQUFPZjtBQUNUO0FBRU8sU0FBU3BILHVCQUF1QnNILGFBQWEsRUFBRTdGLE9BQU87SUFDM0QsTUFBTWlDLFFBQVE0RCxjQUFjeUYsUUFBUTtJQUVwQyxPQUFPcko7QUFDVDtBQUVPLFNBQVM5Rix3QkFBd0I0SixjQUFjLEVBQUUvRixPQUFPO0lBQzdELE1BQU1JLFNBQVMyRixlQUFlb0YsU0FBUyxJQUNqQ3pFLG1CQUFtQnRHLFFBQ25CdUYsUUFBUXlGLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDM0U7SUFFekMsT0FBT2Y7QUFDVDtBQUVPLFNBQVNyTSx3QkFBd0JnTixjQUFjLEVBQUV0RyxPQUFPO0lBQzdELElBQUlnRCxRQUFRO0lBRVosTUFBTUosWUFBWTBELGVBQWVpRixZQUFZO0lBRTdDLElBQUkzSSxjQUFjLE1BQU07UUFDdEJJLFFBQVEzSixtQkFBbUJ1SixXQUFXNUM7SUFDeEM7SUFFQSxPQUFPZ0Q7QUFDVDtBQUVPLFNBQVNsSSx3QkFBd0JvRyxRQUFRLEVBQUVsQixPQUFPO0lBQ3ZELElBQUlxQixjQUFjO0lBRWxCLE1BQU04RixrQkFBa0JqRyxTQUFTc0ssa0JBQWtCO0lBRW5ELElBQUlyRSxvQkFBb0IsTUFBTTtRQUM1QjlGLGNBQWN4RywrQkFBK0JzTSxpQkFBaUJuSDtJQUNoRTtJQUVBLE9BQU9xQjtBQUNUO0FBRU8sU0FBU3BILHdCQUF3QmlILFFBQVEsRUFBRWxCLE9BQU87SUFDdkQsSUFBSXNCLGNBQWM7SUFFbEIsTUFBTWdHLGtCQUFrQnBHLFNBQVN1SyxrQkFBa0I7SUFFbkQsSUFBSW5FLG9CQUFvQixNQUFNO1FBQzVCaEcsY0FBY3RILCtCQUErQnNOLGlCQUFpQnRIO0lBQ2hFO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTeEQsd0JBQXdCd0osZUFBZSxFQUFFdEgsT0FBTztJQUM5RCxNQUFNbUUsT0FBT3VILG1CQUFZO0lBRXpCLE9BQU92SDtBQUNUO0FBRU8sU0FBU25HLHdCQUF3QnNKLGVBQWUsRUFBRXRILE9BQU87SUFDOUQsTUFBTW1FLE9BQU91SCxtQkFBWTtJQUV6QixPQUFPdkg7QUFDVDtBQUVPLFNBQVM3Ryx3QkFBd0I2SixlQUFlLEVBQUVuSCxPQUFPO0lBQzlELE1BQU1rQixXQUFXaUcsZ0JBQWdCRSxXQUFXLElBQ3RDekYsT0FBT3JFLGlCQUFpQjJELFVBQVVsQjtJQUV4QyxPQUFPNEI7QUFDVDtBQUVPLFNBQVN4Rix5QkFBeUJrSyxjQUFjLEVBQUV0RyxPQUFPO0lBQzlELElBQUlnRSxTQUFTO0lBRWIsTUFBTUwsYUFBYTJDLGVBQWVxRixhQUFhO0lBRS9DLElBQUloSSxlQUFlLE1BQU07UUFDdkJLLFNBQVMzSCxxQkFBcUJzSCxZQUFZM0Q7SUFDNUM7SUFFQSxPQUFPZ0U7QUFDVDtBQUVPLFNBQVM3Ryx5QkFBeUJ5SixlQUFlLEVBQUU1RyxPQUFPO0lBQy9ELE1BQU00TCxZQUFZaEYsZ0JBQWdCaUYsWUFBWSxJQUN4Qy9FLFFBQVE4RSxVQUFVRSxHQUFHLENBQUMsQ0FBQy9MO1FBQ3JCLE1BQU1XLE9BQU94RCxpQkFBaUI2QyxVQUFVQztRQUV4QyxPQUFPVTtJQUNUO0lBRU4sT0FBT29HO0FBQ1Q7QUFFTyxTQUFTL0kseUJBQXlCNEosZ0JBQWdCLEVBQUUzSCxPQUFPO0lBQ2hFLE1BQU1tRSxPQUFPd0QsaUJBQWlCb0QsT0FBTztJQUVyQyxPQUFPNUc7QUFDVDtBQUVPLFNBQVMvSix5QkFBeUJ1TixnQkFBZ0IsRUFBRTNILE9BQU87SUFDaEUsTUFBTW1ELE9BQU93RSxpQkFBaUJrRCxPQUFPO0lBRXJDLE9BQU8xSDtBQUNUO0FBRU8sU0FBU2hMLDBCQUEwQndQLGdCQUFnQixFQUFFM0gsT0FBTztJQUNqRSxNQUFNNkgsUUFBUUYsaUJBQWlCb0UsUUFBUTtJQUV2QyxPQUFPbEU7QUFDVDtBQUVPLFNBQVN4SSwwQkFBMEJvRyxhQUFhLEVBQUV6RixPQUFPO0lBQzlELE1BQU00RSxlQUFlYSxjQUFjdUYsZUFBZSxJQUM1Q25LLFdBQVdmLHlCQUF5QjhFLGNBQWM1RTtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU2xELDBCQUEwQjJJLGNBQWMsRUFBRXRHLE9BQU87SUFDL0QsSUFBSTJFLFVBQVU7SUFFZCxNQUFNTixjQUFjaUMsZUFBZTBGLGNBQWM7SUFFakQsSUFBSTNILGdCQUFnQixNQUFNO1FBQ3hCTSxVQUFVL0csdUJBQXVCeUcsYUFBYXJFO0lBQ2hEO0lBRUEsT0FBTzJFO0FBQ1Q7QUFFTyxTQUFTNUwsMEJBQTBCbUksUUFBUSxFQUFFbEIsT0FBTztJQUN6RCxJQUFJdUIsZ0JBQWdCO0lBRXBCLE1BQU04RyxvQkFBb0JuSCxTQUFTK0ssb0JBQW9CO0lBRXZELElBQUk1RCxzQkFBc0IsTUFBTTtRQUM5QjlHLGdCQUFnQnpJLG1DQUFtQ3VQLG1CQUFtQnJJO0lBQ3hFO0lBRUEsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTbkUsMEJBQTBCaUwsaUJBQWlCLEVBQUVySSxPQUFPO0lBQ2xFLE1BQU1rQixXQUFXbUgsa0JBQWtCaEIsV0FBVyxJQUM1Q3pGLE9BQU9yRSxpQkFBaUIyRCxVQUFVbEI7SUFFcEMsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTM0ksMkJBQTJCaVQsUUFBUSxFQUFFbE0sT0FBTztJQUMxRCxJQUFJd0IsaUJBQWlCO0lBRXJCLE1BQU1pSCxxQkFBcUJ5RCxTQUFTQyxxQkFBcUI7SUFFekQsSUFBSTFELHVCQUF1QixNQUFNO1FBQy9CakgsaUJBQWlCeEkscUNBQXFDeVAsb0JBQW9Cekk7SUFDNUU7SUFFQSxPQUFPd0I7QUFDVDtBQUVPLFNBQVM3SCwyQkFBMkJnSyxVQUFVLEVBQUUzRCxPQUFPO0lBQzVELE1BQU1pQyxRQUFRekQsb0JBQW9CbUYsWUFBWTNELFVBQ3hDNkQsZUFBZTVCLE9BQU8sR0FBRztJQUUvQixPQUFPNEI7QUFDVDtBQUVPLFNBQVNwSywyQkFBMkJtTCxZQUFZLEVBQUU1RSxPQUFPO0lBQzlELE1BQU04RSxhQUFhO0lBRW5CLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTeEYsMkJBQTJCeUcsY0FBYyxFQUFFL0YsT0FBTztJQUNoRSxNQUFNNEUsZUFBZW1CLGVBQWVpRixlQUFlLElBQzdDbkssV0FBV2YseUJBQXlCOEUsY0FBYzVFO0lBRXhELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTcEksNEJBQTRCc0gsUUFBUSxFQUFFQyxPQUFPO0lBQzNELElBQUlPLGtCQUFrQjtJQUV0QixNQUFNNEksc0JBQXNCcEosU0FBU3FNLHNCQUFzQjtJQUUzRCxJQUFJakQsd0JBQXdCLE1BQU07UUFDaEM1SSxrQkFBa0IvSCx1Q0FBdUMyUSxxQkFBcUJuSjtJQUNoRjtJQUVBLE9BQU9PO0FBQ1Q7QUFFTyxTQUFTN0csNEJBQTRCMkssV0FBVyxFQUFFckUsT0FBTztJQUM5RCxNQUFNcU0sbUJBQW1CaEksWUFBWWlJLG1CQUFtQixJQUNsRC9ILGVBQWVoTCw2QkFBNkI4UyxrQkFBa0JyTTtJQUVwRSxPQUFPdUU7QUFDVDtBQUVPLFNBQVN4Siw0QkFBNEJ1TCxjQUFjLEVBQUV0RyxPQUFPO0lBQ2pFLElBQUk0RixZQUFZO0lBRWhCLE1BQU1ILGdCQUFnQmEsZUFBZWlHLGdCQUFnQjtJQUVyRCxJQUFJOUcsa0JBQWtCLE1BQU07UUFDMUJHLFlBQVk1SywyQkFBMkJ5SyxlQUFlekY7SUFDeEQ7SUFFQSxPQUFPNEY7QUFDVDtBQUVPLFNBQVM3TCw0QkFBNEJ1TixlQUFlLEVBQUV0SCxPQUFPO0lBQ2xFLE1BQU13TSxlQUFlbEYsZ0JBQWdCbUYsZUFBZSxJQUM5Q2hGLFdBQVdsSyxpQkFBaUJpUCxjQUFjeE07SUFFaEQsT0FBT3lIO0FBQ1Q7QUFFTyxTQUFTNUksNEJBQTRCMEosaUJBQWlCLEVBQUV2SSxPQUFPO0lBQ3BFLE1BQU1xRCxhQUFha0Ysa0JBQWtCbUUsYUFBYSxJQUM1Q2hKLFNBQVM1RSxxQkFBcUJ1RSxZQUFZckQ7SUFFaEQsT0FBTzBEO0FBQ1Q7QUFFTyxTQUFTaEYsNkJBQTZCeUYsSUFBSSxFQUFFUyxZQUFZLEVBQUU1RSxPQUFPO0lBQ3RFLE1BQU1pQyxRQUFRO0lBRWQsT0FBT0E7QUFDVDtBQUVPLFNBQVN4RCw2QkFBNkI0SyxtQkFBbUIsRUFBRXJKLE9BQU87SUFDdkUsTUFBTTZCLFlBQVl3SCxvQkFBb0J5QixZQUFZLElBQzVDN0ksUUFBUXRELG1CQUFtQmtELFdBQVc3QjtJQUU1QyxPQUFPaUM7QUFDVDtBQUVPLFNBQVM1Ryw2QkFBNkIwRSxRQUFRLEVBQUVDLE9BQU87SUFDNUQsSUFBSXdKLG1CQUFtQjtJQUV2QixNQUFNWix1QkFBdUI3SSxTQUFTNE0sdUJBQXVCO0lBRTdELElBQUkvRCx5QkFBeUIsTUFBTTtRQUNqQ1ksbUJBQW1CcE8seUNBQXlDd04sc0JBQXNCNUk7SUFDcEY7SUFFQSxPQUFPd0o7QUFDVDtBQUVPLFNBQVN2Tyw2QkFBNkJxTCxjQUFjLEVBQUV0RyxPQUFPO0lBQ2xFLElBQUlpRyxhQUFhO0lBRWpCLE1BQU1GLGlCQUFpQk8sZUFBZXNHLGlCQUFpQjtJQUV2RCxJQUFJN0csbUJBQW1CLE1BQU07UUFDM0JFLGFBQWEvSyw2QkFBNkI2SyxnQkFBZ0IvRjtJQUM1RDtJQUVBLE9BQU9pRztBQUNUO0FBRU8sU0FBU2xKLDZCQUE2QnVLLGVBQWUsRUFBRXRILE9BQU87SUFDbkUsTUFBTTZNLGdCQUFnQnZGLGdCQUFnQndGLGdCQUFnQixJQUNqRHBGLFlBQVluSyxpQkFBaUJzUCxlQUFlN007SUFFakQsT0FBTzBIO0FBQ1Q7QUFFTyxTQUFTOU0sOEJBQThCNk4sa0JBQWtCLEVBQUV6SSxPQUFPO0lBQ3ZFLE1BQU0ySSxVQUFVRixtQkFBbUJzRSxTQUFTO0lBRTVDLE9BQU9wRTtBQUNUO0FBRU8sU0FBU3hQLDhCQUE4QmtMLFdBQVcsRUFBRXJFLE9BQU87SUFDaEUsTUFBTWdOLHFCQUFxQjNJLFlBQVk0SSxxQkFBcUIsSUFDdER6SSxpQkFBaUJqTCw2QkFBNkJ5VCxvQkFBb0JoTjtJQUV4RSxPQUFPd0U7QUFDVDtBQUVPLFNBQVMvSCw4QkFBOEI2SixjQUFjLEVBQUV0RyxPQUFPO0lBQ25FLElBQUl3RyxjQUFjO0lBRWxCLE1BQU1JLGtCQUFrQk4sZUFBZTRHLGtCQUFrQjtJQUV6RCxJQUFJdEcsb0JBQW9CLE1BQU07UUFDNUJKLGNBQWM3SiwrQkFBK0JpSyxpQkFBaUI1RztJQUNoRTtJQUVBLE9BQU93RztBQUNUO0FBRU8sU0FBU2pPLCtCQUErQm9JLFFBQVEsRUFBRVgsT0FBTztJQUM5RCxNQUFNeUoseUJBQXlCOUksU0FBU3dNLHlCQUF5QixJQUMzRHJNLHFCQUFxQjFJLDZDQUE2Q3FSLHdCQUF3QnpKO0lBRWhHLE9BQU9jO0FBQ1Q7QUFFTyxTQUFTM0YsK0JBQStCeUwsZUFBZSxFQUFFNUcsT0FBTztJQUNyRSxNQUFNK0csY0FBY0gsZ0JBQWdCd0csYUFBYTtJQUVqRCxPQUFPckc7QUFDVDtBQUVPLFNBQVN6SywrQkFBK0JpTSxpQkFBaUIsRUFBRXZJLE9BQU87SUFDdkUsTUFBTW1GLGdCQUFnQm9ELGtCQUFrQjhFLGdCQUFnQixJQUNsRGhJLFlBQVk5SSwyQkFBMkI0SSxlQUFlbkY7SUFFNUQsT0FBT3FGO0FBQ1Q7QUFFTyxTQUFTdkwsK0JBQStCMk8sa0JBQWtCLEVBQUV6SSxPQUFPO0lBQ3hFLE1BQU13TSxlQUFlL0QsbUJBQW1CZ0UsZUFBZSxJQUNqRGhGLFdBQVdsSyxpQkFBaUJpUCxjQUFjeE07SUFFaEQsT0FBT3lIO0FBQ1Q7QUFFTyxTQUFTdk8sK0JBQStCb08sZUFBZSxFQUFFdEgsT0FBTztJQUNyRSxNQUFNd0gsY0FBY0YsZ0JBQWdCZ0csYUFBYTtJQUVqRCxPQUFPOUY7QUFDVDtBQUVPLFNBQVN2SSxnQ0FBZ0NjLFFBQVEsRUFBRUMsT0FBTztJQUMvRCxJQUFJa0ssc0JBQXNCO0lBRTFCLE1BQU1MLDBCQUEwQjlKLFNBQVN3TiwwQkFBMEI7SUFFbkUsSUFBSTFELDRCQUE0QixNQUFNO1FBQ3BDSyxzQkFBc0JoTCwrQ0FBK0MySyx5QkFBeUI3SjtJQUNoRztJQUVBLE9BQU9rSztBQUNUO0FBRU8sU0FBUzdSLGdDQUFnQ3VLLFNBQVMsRUFBRTVDLE9BQU87SUFDaEUsTUFBTXlKLHlCQUF5QjdHLFVBQVV1Syx5QkFBeUIsSUFDNURyTSxxQkFBcUIxSSw2Q0FBNkNxUix3QkFBd0J6SjtJQUVoRyxPQUFPYztBQUNUO0FBRU8sU0FBU2hGLGdDQUFnQ3dLLGNBQWMsRUFBRXRHLE9BQU87SUFDckUsSUFBSXlHLGdCQUFnQjtJQUVwQixNQUFNOEIsb0JBQW9CakMsZUFBZWtILG9CQUFvQjtJQUU3RCxJQUFJakYsc0JBQXNCLE1BQU07UUFDOUI5QixnQkFBZ0IxSyxtQ0FBbUN3TSxtQkFBbUJ2STtJQUN4RTtJQUVBLE9BQU95RztBQUNUO0FBRU8sU0FBUzNKLGdDQUFnQzJMLGtCQUFrQixFQUFFekksT0FBTztJQUN6RSxNQUFNNk0sZ0JBQWdCcEUsbUJBQW1CcUUsZ0JBQWdCLElBQ25EcEYsWUFBWW5LLGlCQUFpQnNQLGVBQWU3TTtJQUVsRCxPQUFPMEg7QUFDVDtBQUVPLFNBQVN2SSxnQ0FBZ0NnSyxtQkFBbUIsRUFBRW5KLE9BQU87SUFDMUUsTUFBTTRFLGVBQWV1RSxvQkFBb0I2QixlQUFlLElBQ2xEbkssV0FBV2YseUJBQXlCOEUsY0FBYzVFO0lBRXhELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTakksZ0NBQWdDdVEsbUJBQW1CLEVBQUVuSixPQUFPO0lBQzFFLE1BQU0rRSxlQUFlb0Usb0JBQW9Cc0UsZUFBZSxJQUNsRHZJLFdBQVdyTSx5QkFBeUJrTSxjQUFjL0U7SUFFeEQsT0FBT2tGO0FBQ1Q7QUFFTyxTQUFTN0csZ0NBQWdDd0wsdUJBQXVCLEVBQUU3SixPQUFPO0lBQzlFLE1BQU1tRSxPQUFPMEYsd0JBQXdCa0IsT0FBTztJQUU1QyxPQUFPNUc7QUFDVDtBQUVPLFNBQVM3TCxpQ0FBaUNxTCxVQUFVLEVBQUUzRCxPQUFPO0lBQ2xFLE1BQU15Six5QkFBeUI5RixXQUFXd0oseUJBQXlCLElBQzdEck0scUJBQXFCMUksNkNBQTZDcVIsd0JBQXdCeko7SUFFaEcsT0FBT2M7QUFDVDtBQUVPLFNBQVN2QixpQ0FBaUNxSixvQkFBb0IsRUFBRTVJLE9BQU87SUFDNUUsTUFBTTRFLGVBQWVnRSxxQkFBcUJvQyxlQUFlLElBQ25EbkssV0FBV2YseUJBQXlCOEUsY0FBYzVFO0lBRXhELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTekMsaUNBQWlDMEssd0JBQXdCLEVBQUU5SSxPQUFPO0lBQ2hGLE1BQU1tRSxPQUFPMkUseUJBQXlCaUMsT0FBTztJQUU3QyxPQUFPNUc7QUFDVDtBQUVPLFNBQVN0SyxrQ0FBa0NpUCx3QkFBd0IsRUFBRTlJLE9BQU87SUFDakYsTUFBTWlELFlBQVk2Rix5QkFBeUI0RSxZQUFZLElBQ2pEdEssUUFBUXhKLG1CQUFtQnFKLFdBQVdqRDtJQUU1QyxPQUFPb0Q7QUFDVDtBQUVPLFNBQVN4RyxtQ0FBbUNnSyxlQUFlLEVBQUU1RyxPQUFPO0lBQ3pFLE1BQU1xSixzQkFBc0J6QyxnQkFBZ0IrRyxzQkFBc0IsSUFDNUQzRyxrQkFBa0JuSyx1Q0FBdUN3TSxxQkFBcUJySjtJQUVwRixPQUFPZ0g7QUFDVDtBQUVPLFNBQVN4TixxQ0FBcUNvVSxxQkFBcUIsRUFBRTVOLE9BQU87SUFDakYsTUFBTXNHLGlCQUFpQnNILHNCQUFzQkMsaUJBQWlCLElBQ3hEL0ksYUFBYXZMLDZCQUE2QitNLGdCQUFnQnRHO0lBRWhFLE9BQU84RTtBQUNUO0FBRU8sU0FBU3RKLHFDQUFxQ2lPLHNCQUFzQixFQUFFekosT0FBTztJQUNsRixNQUFNa0csaUJBQWlCdUQsdUJBQXVCcUUsaUJBQWlCLElBQ3pEekgsYUFBYTVLLDZCQUE2QnlLLGdCQUFnQmxHO0lBRWhFLE9BQU9xRztBQUNUO0FBRU8sU0FBUzdKLHNDQUFzQ2lOLHNCQUFzQixFQUFFekosT0FBTztJQUNuRixNQUFNNEcsa0JBQWtCNkMsdUJBQXVCeUQsa0JBQWtCLElBQzNEMUcsY0FBYzdKLCtCQUErQmlLLGlCQUFpQjVHO0lBRXBFLE9BQU93RztBQUNUO0FBRU8sU0FBUzlLLHVDQUF1Q29OLHdCQUF3QixFQUFFOUksT0FBTztJQUN0RixNQUFNa0csaUJBQWlCNEMseUJBQXlCZ0YsaUJBQWlCLElBQzNEekgsYUFBYTVLLDZCQUE2QnlLLGdCQUFnQmxHO0lBRWhFLE9BQU9xRztBQUNUO0FBRU8sU0FBU2xJLHdDQUF3Q3NMLHNCQUFzQixFQUFFekosT0FBTztJQUNyRixNQUFNbUUsT0FBT3NGLHVCQUF1QnNCLE9BQU87SUFFM0MsT0FBTzVHO0FBQ1Q7QUFFTyxTQUFTekgsd0NBQXdDb00sd0JBQXdCLEVBQUU5SSxPQUFPO0lBQ3ZGLE1BQU00RyxrQkFBa0JrQyx5QkFBeUJvRSxrQkFBa0IsSUFDN0QxRyxjQUFjN0osK0JBQStCaUssaUJBQWlCNUc7SUFFcEUsT0FBT3dHO0FBQ1Q7QUFFTyxTQUFTN0csMENBQTBDd0UsSUFBSSxFQUFFb0csc0JBQXNCLEVBQUV2SyxPQUFPO0lBQzdGLE1BQU00RSxlQUFlMkYsdUJBQXVCUyxlQUFlLElBQ3JEbkssV0FBV2pCLGdDQUFnQ3VFLE1BQU1TLGNBQWM1RTtJQUVyRSxPQUFPYTtBQUNUO0FBRU8sU0FBU3BELHdCQUF3QjJFLFNBQVMsRUFBRXBDLE9BQU87SUFDeEQsTUFBTXNDLGFBQWFGLFVBQVUwSixHQUFHLENBQUMsQ0FBQzVLO1FBQ2hDLE1BQU1VLE9BQU9yRSxpQkFBaUIyRCxVQUFVbEI7UUFFeEMsT0FBTzRCO0lBQ1Q7SUFFQSxPQUFPVTtBQUNUO0FBRU8sU0FBUzFELDBCQUEwQjJFLFVBQVUsRUFBRXZELE9BQU87SUFDM0QsTUFBTXlELGNBQWNGLFdBQVd1SSxHQUFHLENBQUMsQ0FBQ2pLO1FBQ2xDLE1BQU1JLFFBQVF0RCxtQkFBbUJrRCxXQUFXN0I7UUFFNUMsT0FBT2lDO0lBQ1Q7SUFFQSxPQUFPd0I7QUFDVDtBQUVPLFNBQVM5Syw4QkFBOEJvTSxZQUFZLEVBQUUvRSxPQUFPO0lBQ2pFLE1BQU0rTixlQUFlaEosYUFBYWlKLGVBQWUsSUFDM0MvSSxnQkFBZ0I4SSxhQUFhakMsR0FBRyxDQUFDLENBQUM3SDtRQUNoQyxNQUFNRyxVQUFVMUwsdUJBQXVCdUwsYUFBYWpFO1FBRXBELE9BQU9vRTtJQUNUO0lBRU4sT0FBT2E7QUFDVDtBQUVPLFNBQVMxSixrQ0FBa0MySyxjQUFjLEVBQUVsRyxPQUFPO0lBQ3ZFLE1BQU1pTyxpQkFBaUIvSCxlQUFlZ0ksaUJBQWlCLElBQ2pEOUgsa0JBQWtCNkgsZUFBZW5DLEdBQUcsQ0FBQyxDQUFDeEc7UUFDeEMsTUFBTUUsWUFBWWxLLDJCQUEyQmdLLGVBQWV0RjtRQUU1RCxPQUFPd0Y7SUFDVDtJQUVGLE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTekwsMENBQTBDc04saUJBQWlCLEVBQUVqSSxPQUFPO0lBQ2xGLE1BQU1tTyx1QkFBdUJsRyxrQkFBa0I2RCxHQUFHLENBQUMsQ0FBQ25FO1FBQ2xELE1BQU1HLGVBQWV0TixpQ0FBaUNtTixrQkFBa0IzSDtRQUV4RSxPQUFPOEg7SUFDVDtJQUVBLE9BQU9xRztBQUNUO0FBRU8sU0FBU25QLDJEQUEyRG1GLElBQUksRUFBRTBGLHVCQUF1QixFQUFFN0osT0FBTztJQUMvRyxNQUFNb08sMEJBQTBCdkUsd0JBQXdCd0UsMEJBQTBCLElBQzVFdEUsMkJBQTJCcUUsd0JBQXdCdEMsR0FBRyxDQUFDLENBQUN2QjtRQUN0RCxNQUFNK0QscUJBQXFCdlAsb0RBQW9Eb0YsTUFBTW9HLHdCQUF3QnZLO1FBRTdHLE9BQU9zTztJQUNUO0lBRU4sT0FBT3ZFO0FBQ1QifQ==