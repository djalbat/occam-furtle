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
    get elidedFromBindingNode () {
        return elidedFromBindingNode;
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
    const { Binding } = _elements.default, node = bindingNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromBindingNode(bindingNode, context), name = nameFromBindingNode(bindingNode, context), elided = elidedFromBindingNode(bindingNode, context);
    context = null;
    const binding = new Binding(context, string, node, breakPoint, type, name, elided);
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
function elidedFromBindingNode(bindingNode, context) {
    const elided = bindingNode.isElided();
    return elided;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICB2YWx1ZVN0cmluZ0Zyb21Qcm9wZXJ0aWVzLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzLFxuICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUsXG4gICAgICAgICBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdtZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbWVudHMpO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc29tZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWUgPSBuZXcgU29tZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICB2YXJpYWJsZSxcbiAgICAgIHByaW1pdGl2ZSxcbiAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgbG9naWNhbFRlcm0sXG4gICAgICBicmFja2V0ZWRUZXJtLFxuICAgICAgY29tcGFyaXNvblRlcm1cbiAgICBdLFxuICAgIHRlcm1TdHJpbmcgPSB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgY29udGV4dCksXG4gICAgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhbHVlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgcHJpbWl0aXZlXG4gICAgICAgIF0sXG4gICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWVTdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFsdWUgPSBuZXcgVmFsdWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXZlcnlOb2RlLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5ID0gbmV3IEV2ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZU5vZGVzID0gdmFsdWVzTm9kZS5nZXRWYWx1ZU5vZGVzKCksXG4gICAgICAgIHZhbHVlc0FycmF5ID0gdmFsdWVzQXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBWYWx1ZXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVkdWNlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZSA9IG5ldyBSZWR1Y2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgaW5pdGlhbFZhbHVlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nRnJvbUJpbmRpbmdOb2RlKGJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQmluZGluZyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBiaW5kaW5nTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21CaW5kaW5nTm9kZShiaW5kaW5nTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsaWRlZCA9IGVsaWRlZEZyb21CaW5kaW5nTm9kZShiaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYmluZGluZyA9IG5ldyBCaW5kaW5nKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgZWxpZGVkKTtcblxuICByZXR1cm4gYmluZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm5hcnlOb2RlLCAvLy9cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgc3RyaW5nID0gdGVybmFyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnkgPSBuZXcgVGVybmFyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nc0Zyb21CaW5kaW5nc05vZGUoYmluZGluZ3NOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQmluZGluZ3MgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYmluZGluZ3NOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgYmluZGluZ3NBcnJheSA9IGJpbmRpbmdzQXJyYXlGcm9tQmluZGluZ3NOb2RlKGJpbmRpbmdzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gYmluZGluZ3NBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYmluZGluZ3MgPSBuZXcgQmluZGluZ3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIGJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmltaXRpdmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgcGFyYW1ldGVyc0FycmF5ID0gcGFyYW1ldGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdGVybSxcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5CbG9ja05vZGUsIC8vL1xuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZXcgTmVnYXRlZFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB0ZXJtKTtcblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsVGVybSA9IG5ldyBMb2dpY2FsVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZEJpbmRpbmdGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRCaW5kaW5nIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkQmluZGluZ05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkQmluZGluZ05vZGUobmFtZWRCaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRCaW5kaW5nID0gbmV3IE5hbWVkQmluZGluZyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRCaW5kaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRCaW5kaW5nc0Zyb21OYW1lZEJpbmRpbmdzTm9kZShuYW1lZEJpbmRpbmdzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkQmluZGluZ3MgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRCaW5kaW5nc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIG5hbWVkQmluZGluZ05vZGVzID0gbmFtZWRCaW5kaW5nc05vZGUuZ2V0TmFtZWRCaW5kaW5nTm9kZXMoKSxcbiAgICAgICAgbmFtZWRCaW5kaW5nc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXlGcm9tTmFtZWRCaW5kaW5nTm9kZXMobmFtZWRCaW5kaW5nTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IG5hbWVkQmluZGluZ3NBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRCaW5kaW5ncyA9IG5ldyBOYW1lZEJpbmRpbmdzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZEJpbmRpbmdzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRUZXJtID0gbmV3IEJyYWNrZXRlZFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0ZXJtKTtcblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHJlZmVyZW5jZSwgdmFsdWVzKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IG5ldyBDb21wYXJpc29uVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkQmluZGluZ3NGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRCaW5kaW5nc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZEJpbmRpbmdzTm9kZSgpLFxuICAgICAgICBuYW1lZEJpbmRpbmdzID0gbmFtZWRCaW5kaW5nc0Zyb21OYW1lZEJpbmRpbmdzTm9kZShuYW1lZEJpbmRpbmdzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkQmluZGluZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBwcm9jZWR1cmUgPSBuZXcgUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gcHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpbmRpbmdzID0gYmluZGluZ3NGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGJpbmRpbmdzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhbHVlKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZEJpbmRpbmdzID0gbmFtZWRCaW5kaW5nc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgbmFtZWRCaW5kaW5ncyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlKHR5cGUsIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFsdWVOb2RlKCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IGJpbmRpbmdOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGJpbmRpbmdOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGlkZWRGcm9tQmluZGluZ05vZGUoYmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZWxpZGVkID0gYmluZGluZ05vZGUuaXNFbGlkZWQoKTtcblxuICByZXR1cm4gZWxpZGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhbHVlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB2YWx1ZU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWUgPSBwcmltaXRpdmVOb2RlLmdldFZhbHVlKCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRUZXJtID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXROZWdhdGVkVGVybU5vZGUoKTtcblxuICBpZiAobmVnYXRlZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TG9naWNhbFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkQmluZGluZ05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZEJpbmRpbmdOb2RlKG5hbWVkQmluZGluZ05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkQmluZGluZ05vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRCaW5kaW5nTm9kZShuYW1lZEJpbmRpbmdOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRCaW5kaW5nTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uVGVybSA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvblRlcm1Ob2RlID0gdGVybU5PZGUuZ2V0Q29tcGFyaXNvblRlcm1Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsVmFsdWVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbFZhbHVlID0gdmFsdWU7IC8vL1xuXG4gIHJldHVybiBpbml0aWFsVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFZhbHVlc05vZGUoKSxcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVOb2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRWYWx1ZU5vZGUoKSxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbFRlcm1Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYmluZGluZ3NOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRCaW5kaW5nc05vZGUoKSxcbiAgICAgICAgYmluZGluZ3MgPSBiaW5kaW5nc0Zyb21CaW5kaW5nc05vZGUoYmluZGluZ3NOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYmluZGluZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNBcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSB2YWx1ZU5vZGVzLm1hcCgodmFsdWVOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRpbmdzQXJyYXlGcm9tQmluZGluZ3NOb2RlKGJpbmRpbmdzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBiaW5kaW5nTm9kZXMgPSBiaW5kaW5nc05vZGUuZ2V0QmluZGluZ05vZGVzKCksXG4gICAgICAgIGJpbmRpbmdzQXJyYXkgPSBiaW5kaW5nTm9kZXMubWFwKChiaW5kaW5nTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ0Zyb21CaW5kaW5nTm9kZShiaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGJpbmRpbmdzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbWV0ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzQXJyYXlGcm9tTmFtZWRCaW5kaW5nTm9kZXMobmFtZWRCaW5kaW5nTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZEJpbmRpbmdOb2Rlcy5tYXAoKG5hbWVkQmluZGluZ05vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRCaW5kaW5nID0gbmFtZWRCaW5kaW5nRnJvbU5hbWVkQmluZGluZ05vZGUobmFtZWRCaW5kaW5nTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRCaW5kaW5nO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZEJpbmRpbmdOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZSIsImJpbmRpbmdGcm9tQmluZGluZ05vZGUiLCJiaW5kaW5nc0FycmF5RnJvbUJpbmRpbmdzTm9kZSIsImJpbmRpbmdzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJiaW5kaW5nc0Zyb21CaW5kaW5nc05vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlIiwiZWxpZGVkRnJvbUJpbmRpbmdOb2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxWYWx1ZUZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUJpbmRpbmdOb2RlIiwibmFtZUZyb21MYWJlbE5vZGUiLCJuYW1lRnJvbU5hbWVkQmluZGluZ05vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkQmluZGluZ0Zyb21OYW1lZEJpbmRpbmdOb2RlIiwibmFtZWRCaW5kaW5nc0Zyb21OYW1lZEJpbmRpbmdzTm9kZSIsIm5hbWVkQmluZGluZ3NGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJuYW1lZFBhcmFtZXRlcnNBcnJheUZyb21OYW1lZEJpbmRpbmdOb2RlcyIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlIiwicHJpbWl0aXZlRnJvbVRlcm1Ob2RlIiwicHJpbWl0aXZlRnJvbVZhbHVlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tVGVybXNOb2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUJpbmRpbmdOb2RlIiwidHlwZUZyb21Mb2dpY2FsVGVybU5vZGUiLCJ0eXBlRnJvbU5hbWVkQmluZGluZ05vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJpbWl0aXZlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFsdWVGcm9tUHJpbWl0aXZlTm9kZSIsInZhbHVlRnJvbVJlZHVjZU5vZGUiLCJ2YWx1ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidmFsdWVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVZhbHVlTm9kZSIsInZhbHVlc0FycmF5RnJvbVZhbHVlTm9kZXMiLCJ2YWx1ZXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ2YWx1ZXNGcm9tVmFsdWVzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFsdWVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImJyZWFrUG9pbnQiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbWVudHMiLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwicHJvcGVydGllcyIsInRlcm1TdHJpbmciLCJ0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ0ZXJtIiwidmFsdWVOb2RlIiwiVmFsdWUiLCJ2YWx1ZVN0cmluZyIsInZhbHVlU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ2YWx1ZSIsInRlcm1zTm9kZSIsIlRlcm1zIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNBcnJheSIsImFycmF5IiwidGVybXMiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlc05vZGUiLCJWYWx1ZXMiLCJ2YWx1ZU5vZGVzIiwiZ2V0VmFsdWVOb2RlcyIsInZhbHVlc0FycmF5IiwidmFsdWVzIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwiYmluZGluZ05vZGUiLCJCaW5kaW5nIiwidHlwZSIsImVsaWRlZCIsImJpbmRpbmciLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJleHByZXNzaW9uIiwiYmluZGluZ3NOb2RlIiwiQmluZGluZ3MiLCJiaW5kaW5nc0FycmF5IiwiYmluZGluZ3MiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsInBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsInByaW1pdGl2ZU5vZGUiLCJQcmltaXRpdmUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW1ldGVyc0FycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJuZWdhdGVkVGVybU5vZGUiLCJOZWdhdGVkVGVybSIsImdldFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiTG9naWNhbFRlcm0iLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwibmFtZWRCaW5kaW5nTm9kZSIsIk5hbWVkQmluZGluZyIsImFsaWFzIiwibmFtZWRCaW5kaW5nIiwibmFtZWRCaW5kaW5nc05vZGUiLCJOYW1lZEJpbmRpbmdzIiwibmFtZWRCaW5kaW5nTm9kZXMiLCJnZXROYW1lZEJpbmRpbmdOb2RlcyIsIm5hbWVkQmluZGluZ3NBcnJheSIsIm5hbWVkQmluZGluZ3MiLCJicmFja2V0ZWRUZXJtTm9kZSIsIkJyYWNrZXRlZFRlcm0iLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJjb21wYXJpc29uVGVybU5vZGUiLCJDb21wYXJpc29uVGVybSIsIm5lZ2F0ZWQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkQmluZGluZ3NOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInByb2NlZHVyZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50IiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0TmFtZSIsImdldFZhbHVlTm9kZSIsImdldFR5cGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiaXNFbGlkZWQiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXRWYWx1ZSIsImdldEV2ZXJ5Tm9kZSIsImdldE5lZ2F0ZWRUZXJtTm9kZSIsImdldExvZ2ljYWxUZXJtTm9kZSIsIkJPT0xFQU5fVFlQRSIsImdldFJlZHVjZU5vZGUiLCJzdGVwTm9kZXMiLCJnZXRTdGVwTm9kZXMiLCJtYXAiLCJnZXRBbGlhcyIsImdldFRlcm5hcnlOb2RlIiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtTk9kZSIsImdldENvbXBhcmlzb25UZXJtTm9kZSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRWYWx1ZXNOb2RlIiwiZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROb2Rlc1F1ZXJ5Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwiaXNOZWdhdGVkIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiaXNEaXNqdW5jdGlvbiIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRCaW5kaW5nc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsImJpbmRpbmdOb2RlcyIsImdldEJpbmRpbmdOb2RlcyIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW81QmdCQTtlQUFBQTs7UUFsV0FDO2VBQUFBOztRQTZrQkFDO2VBQUFBOztRQThDQUM7ZUFBQUE7O1FBM0ZBQztlQUFBQTs7UUE1a0JBQztlQUFBQTs7UUEwZEFDO2VBQUFBOztRQTl4QkFDO2VBQUFBOztRQWlsQ0FDO2VBQUFBOztRQW5IQUM7ZUFBQUE7O1FBNzZCQUM7ZUFBQUE7O1FBc05BQztlQUFBQTs7UUFvZUFDO2VBQUFBOztRQTFjQUM7ZUFBQUE7O1FBNmRBQztlQUFBQTs7UUE2S0FDO2VBQUFBOztRQTlaQUM7ZUFBQUE7O1FBZ1hBQztlQUFBQTs7UUF6OEJBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBdXJCQUM7ZUFBQUE7O1FBL2RBQztlQUFBQTs7UUFvM0JBQztlQUFBQTs7UUE1UEFDO2VBQUFBOztRQXlCQUM7ZUFBQUE7O1FBaENBQztlQUFBQTs7UUF6ekJBQztlQUFBQTs7UUE4aUNBQztlQUFBQTs7UUEzRkFDO2VBQUFBOztRQXZHQUM7ZUFBQUE7O1FBcG1CQUM7ZUFBQUE7O1FBdWJBQztlQUFBQTs7UUFqTUFDO2VBQUFBOztRQXBCQUM7ZUFBQUE7O1FBaVJBQztlQUFBQTs7UUFuTEFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFqREFDO2VBQUFBOztRQXZRQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUF1REFDO2VBQUFBOztRQXl6QkFDO2VBQUFBOztRQWhQQUM7ZUFBQUE7O1FBM3FCQUM7ZUFBQUE7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