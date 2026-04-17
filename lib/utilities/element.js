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
    get aliasFromNamedParameterNode () {
        return aliasFromNamedParameterNode;
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
    get nameFromLabelNode () {
        return nameFromLabelNode;
    },
    get nameFromNamedParameterNode () {
        return nameFromNamedParameterNode;
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
    get namedParameterFromNamedParameterNode () {
        return namedParameterFromNamedParameterNode;
    },
    get namedParametersFromNamedParametersNode () {
        return namedParametersFromNamedParametersNode;
    },
    get namedParametersFromObjectAssignmentNode () {
        return namedParametersFromObjectAssignmentNode;
    },
    get namedParamtersArrayFromNamedParameterNodes () {
        return namedParamtersArrayFromNamedParameterNodes;
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
    get parametersFromAnonymousProcedureNode () {
        return parametersFromAnonymousProcedureNode;
    },
    get parametersFromArrayAssignmentNode () {
        return parametersFromArrayAssignmentNode;
    },
    get parametersFromParametersNode () {
        return parametersFromParametersNode;
    },
    get parametersFromProcedureDeclarationNode () {
        return parametersFromProcedureDeclarationNode;
    },
    get paramtersArrayFromParametersNode () {
        return paramtersArrayFromParametersNode;
    },
    get primitiveFromPrimitiveNode () {
        return primitiveFromPrimitiveNode;
    },
    get primitiveFromTermNode () {
        return primitiveFromTermNode;
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
    get termFromReturnStatementNode () {
        return termFromReturnStatementNode;
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
    get termsFromProcedureCallNode () {
        return termsFromProcedureCallNode;
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
    get typeFromLogicalTermNode () {
        return typeFromLogicalTermNode;
    },
    get typeFromNamedParameterNode () {
        return typeFromNamedParameterNode;
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
function reduceFromReduceNode(reduceNode, context) {
    const { Reduce } = _elements.default, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString, breakPoint = null;
    context = null;
    const reduce = new Reduce(context, string, node, breakPoint, variable, initialExpression, anonymousProcedure);
    return reduce;
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
function referenceFromReferenceNode(referenceNode, context) {
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), breakPoint = null, name = nameFromReferenceNode(referenceNode, context);
    context = null;
    const reference = new Reference(context, string, node, breakPoint, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    let parameter = null;
    const type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        const { Parameter } = _elements.default, node = parameterNode, string = context.nodeAsString(node), breakPoint = null, name = nameFromParaneterNode(parameterNode, context);
        context = null;
        parameter = new Parameter(context, string, node, breakPoint, type, name);
    }
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
    const { Parameters } = _elements.default, node = parametersNode, string = context.nodeAsString(node), breakPoint = null, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray; ///
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
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    const { BracketedTerm } = _elements.default, node = bracketedTermNode, string = context.nodeAsString(node), breakPoint = null, term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(context, string, node, breakPoint, term);
    return bracketedTerm;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    const { ProcedureCall } = _elements.default, node = procedureCallNode, string = context.nodeAsString(node), breakPoint = null, reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context);
    context = null;
    const procedureCall = new ProcedureCall(context, string, node, breakPoint, reference, terms);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    const { NamedParameter } = _elements.default, node = namedParameterNode, string = context.nodeAsString(node), breakPoint = null, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), alias = aliasFromNamedParameterNode(namedParameterNode, context);
    context = null;
    const namedParameter = new NamedParameter(context, string, node, breakPoint, type, name, alias);
    return namedParameter;
}
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    const { ComparisonTerm } = _elements.default, node = comparisonTermNode, string = context.nodeAsString(node), breakPoint = null, negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(context, string, node, breakPoint, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Procedure } = _elements.default, node = procedureDeclarationNode, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, breakPoint = null, procedure = new Procedure(context, string, node, breakPoint, type, label, parameters, returnBlock);
    return procedure;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    const { NamedParameters } = _elements.default, node = namedParametersNode, string = context.nodeAsString(node), breakPoint = null, namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), array = namedParametersArray; ///
    context = null;
    const namedParameters = new NamedParameters(context, string, node, breakPoint, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const { ArrayAssignment } = _elements.default, node = arrayAssignmentNode, string = context.nodeAsString(node), breakPoint = null, variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context);
    context = null;
    const arrayAssignment = new ArrayAssignment(context, string, node, breakPoint, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    const { ReturnStatement } = _elements.default, node = returnStatementNode, string = context.nodeAsString(node), breakPoint = null, term = termFromReturnStatementNode(returnStatementNode, context);
    context = null;
    const returnStatement = new ReturnStatement(context, string, node, breakPoint, term);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    const namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    const { ObjectAssigment } = _elements.default, node = objectAssignmentNode, string = context.nodeAsString(node), breakPoint = null, variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context);
    context = null;
    const objectAssignment = new ObjectAssigment(context, string, node, breakPoint, variable, namedParameters);
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
function termsFromProcedureCallNode(procedureCallNode, context) {
    const termsNode = procedureCallNode.getTermsNode(), terms = termsFromTermsNode(termsNode, context);
    return terms;
}
function typeFromNamedParameterNode(namedParameterNode, context) {
    const type = namedParameterNode.getType();
    return type;
}
function nameFromNamedParameterNode(namedParameterNode, context) {
    const name = namedParameterNode.getName();
    return name;
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
function aliasFromNamedParameterNode(namedParameterNode, context) {
    const alias = namedParameterNode.getAlias();
    return alias;
}
function termFromReturnStatementNode(returnStatementNode, context) {
    const termNode = returnStatementNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
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
function parametersFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const parametersNode = arrayAssignmentNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
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
function paramtersArrayFromParametersNode(parametersNode, context) {
    const parameterNodes = parametersNode.getParameterNodes(), paramtersArray = parameterNodes.map((parameterNode)=>{
        const parameter = parameterFromParameterNode(parameterNode, context);
        return parameter;
    });
    return paramtersArray;
}
function namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context) {
    const namedParamtersArray = namedParameterNodes.map((namedParameterNode)=>{
        const namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);
        return namedParameter;
    });
    return namedParamtersArray;
}
function variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
    const variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map((variableAssignmentNode)=>{
        const variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ21lbnRzID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc3RlcCA9IG5ldyBTdGVwKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlQXNzaWdtZW50cyk7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzb21lTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc29tZSA9IG5ldyBTb21lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIHByaW1pdGl2ZSxcbiAgICAgICAgICBuZWdhdGVkVGVybSxcbiAgICAgICAgICBsb2dpY2FsVGVybSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtLFxuICAgICAgICAgIGNvbXBhcmlzb25UZXJtXG4gICAgICAgIF0sXG4gICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXZlcnlOb2RlLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5ID0gbmV3IEV2ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVkdWNlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZSA9IG5ldyBSZWR1Y2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm5hcnlOb2RlLCAvLy9cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgc3RyaW5nID0gdGVybmFyeVN0cmluZywgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnkgPSBuZXcgVGVybmFyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5hbWUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByaW1pdGl2ZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgdmFsdWUpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICB0ZXJtLFxuICAgICAgICAgIHNvbWUsXG4gICAgICAgICAgZXZlcnksXG4gICAgICAgICAgcmVkdWNlLFxuICAgICAgICAgIHRlcm5hcnksXG4gICAgICAgICAgbm9kZVF1ZXJ5LFxuICAgICAgICAgIG5vZGVzUXVlcnksXG4gICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVybkJsb2NrTm9kZSwgLy8vXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5ldyBOZWdhdGVkVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHR5cGUsIHRlcm0pO1xuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbmV3IExvZ2ljYWxUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IG5ldyBCcmFja2V0ZWRUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgcmVmZXJlbmNlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgYWxpYXMpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IG5ldyBDb21wYXJpc29uVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBicmVha1BvaW50ID0gbnVsbCxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBicmVha1BvaW50ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlKHR5cGUsIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGJyZWFrUG9pbnQgPSBudWxsLFxuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgYnJlYWtQb2ludCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VmFsdWUoKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFRlcm1zTm9kZSgpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1zTm9kZSh0ZXJtc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGlmRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbFRlcm1Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtdGVyc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUiLCJsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21UZXJtTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUiLCJuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJuZWdhdGVkVGVybUZyb21UZXJtTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZSIsInByaW1pdGl2ZUZyb21UZXJtTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJpbWl0aXZlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFsdWVGcm9tUHJpbWl0aXZlTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImJyZWFrUG9pbnQiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbWVudHMiLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwicHJvcGVydGllcyIsInRlcm1TdHJpbmciLCJ0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ0ZXJtIiwidGVybXNOb2RlIiwiVGVybXMiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0FycmF5IiwiYXJyYXkiLCJ0ZXJtcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwiZXhwcmVzc2lvbiIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwiUGFyYW1ldGVyIiwibm9kZVF1ZXJ5Tm9kZSIsIk5vZGVRdWVyeSIsInF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJpbWl0aXZlTm9kZSIsIlByaW1pdGl2ZSIsInZhbHVlIiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtdGVyc0FycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJuZWdhdGVkVGVybU5vZGUiLCJOZWdhdGVkVGVybSIsImdldFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiTG9naWNhbFRlcm0iLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJCcmFja2V0ZWRUZXJtIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwiTmFtZWRQYXJhbWV0ZXIiLCJhbGlhcyIsIm5hbWVkUGFyYW1ldGVyIiwiY29tcGFyaXNvblRlcm1Ob2RlIiwiQ29tcGFyaXNvblRlcm0iLCJuZWdhdGVkIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInByb2NlZHVyZSIsIm5hbWVkUGFyYW1ldGVyc05vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50IiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXROYW1lIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0UHJpbWl0aXZlTm9kZSIsImdldFR5cGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXRWYWx1ZSIsImdldEV2ZXJ5Tm9kZSIsImdldE5lZ2F0ZWRUZXJtTm9kZSIsImdldExvZ2ljYWxUZXJtTm9kZSIsIkJPT0xFQU5fVFlQRSIsImdldEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtTk9kZSIsImdldENvbXBhcmlzb25UZXJtTm9kZSIsImdldFRlcm1zTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImlzRGlzanVuY3Rpb24iLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1NUJnQkE7ZUFBQUE7O1FBcGFBQztlQUFBQTs7UUFzaEJBQztlQUFBQTs7UUE4Q0FDO2VBQUFBOztRQTNGQUM7ZUFBQUE7O1FBNWhCQUM7ZUFBQUE7O1FBd2JBQztlQUFBQTs7UUE5Z0JBQztlQUFBQTs7UUF3Y0FDO2VBQUFBOztRQTlaQUM7ZUFBQUE7O1FBaWJBQztlQUFBQTs7UUFrTEFDO2VBQUFBOztRQTlDQUM7ZUFBQUE7O1FBeDJCQUM7ZUFBQUE7O1FBYUFDO2VBQUFBOztRQTRsQkFDO2VBQUFBOztRQTlhQUM7ZUFBQUE7O1FBcWVBQztlQUFBQTs7UUEwVUFDO2VBQUFBOztRQTJCQUM7ZUFBQUE7O1FBclJBQztlQUFBQTs7UUFtREFDO2VBQUFBOztRQTRJQUM7ZUFBQUE7O1FBbDVCQUM7ZUFBQUE7O1FBMDlCQUM7ZUFBQUE7O1FBeEdBQztlQUFBQTs7UUEvSEFDO2VBQUFBOztRQXJoQkFDO2VBQUFBOztRQXNZQUM7ZUFBQUE7O1FBcEtBQztlQUFBQTs7UUE2U0FDO2VBQUFBOztRQXhPQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQTNDQUM7ZUFBQUE7O1FBMU5BQztlQUFBQTs7UUE0Q0FDO2VBQUFBOztRQTZDQUM7ZUFBQUE7O1FBOHNCQUM7ZUFBQUE7O1FBeE9BQztlQUFBQTs7UUFwbkJBQztlQUFBQTs7UUF1WUFDO2VBQUFBOztRQXFMQUM7ZUFBQUE7O1FBM3FCQUM7ZUFBQUE7O1FBZ3RCQUM7ZUFBQUE7O1FBbHJCQUM7ZUFBQUE7O1FBcXVCQUM7ZUFBQUE7O1FBL2ZBQztlQUFBQTs7UUFnY0FDO2VBQUFBOztRQXh0QkFDO2VBQUFBOztRQWk2QkFDO2VBQUFBOztRQTVCQUM7ZUFBQUE7O1FBcDBCQUM7ZUFBQUE7O1FBODJCQUM7ZUFBQUE7O1FBcUNBQztlQUFBQTs7UUFqN0JBQztlQUFBQTs7UUEyWEFDO2VBQUFBOztRQTZhQUM7ZUFBQUE7O1FBbHFCQUM7ZUFBQUE7O1FBZ0tBQztlQUFBQTs7UUFwSEFDO2VBQUFBOztRQW1SQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQXNFQUM7ZUFBQUE7O1FBNW5CQUM7ZUFBQUE7O1FBNjFCQUM7ZUFBQUE7O1FBM3lCQUM7ZUFBQUE7O1FBczdCQUM7ZUFBQUE7O1FBcEtBQztlQUFBQTs7UUF3TEFDO2VBQUFBOztRQTEwQkFDO2VBQUFBOztRQWl5QkFDO2VBQUFBOztRQWhwQkFDO2VBQUFBOztRQW9sQkFDO2VBQUFBOztRQXZHQUM7ZUFBQUE7O1FBcFJBQztlQUFBQTs7UUFub0JBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQSt2QkFDO2VBQUFBOztRQTBDQUM7ZUFBQUE7O1FBbEtBQztlQUFBQTs7UUE4RkFDO2VBQUFBOztRQW1LQUM7ZUFBQUE7O1FBeDJCQUM7ZUFBQUE7O1FBK2dCQUM7ZUFBQUE7O1FBa2xCQUM7ZUFBQUE7O1FBeFRBQztlQUFBQTs7UUE3d0JBQztlQUFBQTs7UUFxdEJBQztlQUFBQTs7UUF6b0JBQztlQUFBQTs7UUFpbEJBQztlQUFBQTs7UUF1SEFDO2VBQUFBOztRQWpIQUM7ZUFBQUE7O1FBdkhBQztlQUFBQTs7UUFrQkFDO2VBQUFBOztRQW1mQUM7ZUFBQUE7O1FBN0RBQztlQUFBQTs7UUFwQkFDO2VBQUFBOztRQTdjQUM7ZUFBQUE7O1FBd0ZBQztlQUFBQTs7UUF4SkFDO2VBQUFBOztRQWlwQkFDO2VBQUFBOztRQXhMQUM7ZUFBQUE7O1FBemZBQztlQUFBQTs7UUFzaUJBQztlQUFBQTs7UUFwYkFDO2VBQUFBOztRQXlLQUM7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUF1T0FDO2VBQUFBOztRQXphQUM7ZUFBQUE7O1FBMUVBQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBNmpCQUM7ZUFBQUE7O1FBOWxCQUM7ZUFBQUE7O1FBbllBQztlQUFBQTs7OzRCQTVLTTtpRUFFRDt1QkFFUTt3QkFha0Q7Ozs7OztBQUV4RSxTQUFTckMsaUJBQWlCc0MsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLGlCQUFRLEVBQ25CQyxPQUFPSixVQUNQSyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2JDLGtCQUFrQnBILDRCQUE0QjRHLFVBQVVDLFVBQ3hEUSxrQkFBa0I1RSw2QkFBNkJtRSxVQUFVQyxVQUN6RFMscUJBQXFCdkIsZ0NBQWdDYSxVQUFVQztJQUVyRUEsVUFBVTtJQUVWLE1BQU1VLE9BQU8sSUFBSVQsS0FBS0QsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWUMsaUJBQWlCQyxpQkFBaUJDO0lBRTNGLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTbEQsaUJBQWlCbUQsUUFBUSxFQUFFWCxPQUFPO0lBQ2hELE1BQU0sRUFBRVksSUFBSSxFQUFFLEdBQUdWLGlCQUFRLEVBQ25CQyxPQUFPUSxVQUNQRSxXQUFXbkIscUJBQXFCaUIsVUFBVVgsVUFDMUNjLHFCQUFxQjdILCtCQUErQjBILFVBQVVYLFVBQzlEZSxhQUFhQyxJQUFBQSxtREFBMkMsRUFBQ0gsVUFBVUMscUJBQ25FVixTQUFTVyxZQUNUVCxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTWlCLE9BQU8sSUFBSUwsS0FBS1osU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVUM7SUFFbkUsT0FBT0c7QUFDVDtBQUVPLFNBQVNsRCxpQkFBaUJtRCxRQUFRLEVBQUVsQixPQUFPO0lBQ2hELE1BQU0sRUFBRW1CLElBQUksRUFBRSxHQUFHakIsaUJBQVEsRUFDbkJDLE9BQU9lLFVBQ1BMLFdBQVdsQixxQkFBcUJ1QixVQUFVbEIsVUFDMUNvQixZQUFZaEYsc0JBQXNCOEUsVUFBVWxCLFVBQzVDcUIsY0FBY2hHLHdCQUF3QjZGLFVBQVVsQixVQUNoRHNCLGNBQWM3Ryx3QkFBd0J5RyxVQUFVbEIsVUFDaER1QixnQkFBZ0JsSSwwQkFBMEI2SCxVQUFVbEIsVUFDcER3QixpQkFBaUJqSSwyQkFBMkIySCxVQUFVbEIsVUFDdER5QixhQUFhO1FBQ1haO1FBQ0FPO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO0tBQ0QsRUFDREUsYUFBYUMsSUFBQUEsZ0NBQXdCLEVBQUNGLFlBQVl6QixVQUNsREksU0FBU3NCLFlBQ1RwQixhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTTRCLE9BQU8sSUFBSVQsS0FBS25CLFNBQVNJLFFBQVFELE1BQU1HLFlBQVlPLFVBQVVPLFdBQVdDLGFBQWFDLGFBQWFDLGVBQWVDO0lBRXZILE9BQU9JO0FBQ1Q7QUFFTyxTQUFTekQsbUJBQW1CMEQsU0FBUyxFQUFFN0IsT0FBTztJQUNuRCxNQUFNLEVBQUU4QixLQUFLLEVBQUUsR0FBRzVCLGlCQUFRLEVBQ3BCQyxPQUFPMEIsV0FDUHpCLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUI0QixZQUFZRixVQUFVRyxZQUFZLElBQ2xDQyxhQUFhaEUsd0JBQXdCOEQsV0FBVy9CLFVBQ2hEa0MsUUFBUUQsWUFDUjNCLGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNbUMsUUFBUSxJQUFJTCxNQUFNOUIsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTRCO0lBRTNELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTekksbUJBQW1CMEksU0FBUyxFQUFFcEMsT0FBTztJQUNuRCxNQUFNLEVBQUVxQyxLQUFLLEVBQUUsR0FBR25DLGlCQUFRLEVBQ3BCQyxPQUFPaUMsV0FDUGhDLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNc0MsUUFBUSxJQUFJRCxNQUFNckMsU0FBU0ksUUFBUUQsTUFBTUc7SUFFL0MsT0FBT2dDO0FBQ1Q7QUFFTyxTQUFTM0ksbUJBQW1CNEksU0FBUyxFQUFFdkMsT0FBTztJQUNuRCxNQUFNLEVBQUV3QyxLQUFLLEVBQUUsR0FBR3RDLGlCQUFRLEVBQ3BCQyxPQUFPb0MsV0FDUDFCLFdBQVd4QixzQkFBc0JrRCxXQUFXdkMsVUFDNUNjLHFCQUFxQi9ILGdDQUFnQ3dKLFdBQVd2QyxVQUNoRXlDLGNBQWNDLElBQUFBLG9EQUE0QyxFQUFDN0IsVUFBVUMscUJBQ3JFVixTQUFTcUMsYUFDVG5DLGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNMkMsUUFBUSxJQUFJSCxNQUFNeEMsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVUM7SUFFckUsT0FBTzZCO0FBQ1Q7QUFFTyxTQUFTdkksbUJBQW1Cd0ksU0FBUyxFQUFFNUMsT0FBTztJQUNuRCxNQUFNLEVBQUU2QyxLQUFLLEVBQUUsR0FBRzNDLGlCQUFRLEVBQ3BCQyxPQUFPeUMsV0FDUHhDLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYndDLE9BQU9wSSxrQkFBa0JrSSxXQUFXNUM7SUFFMUNBLFVBQVU7SUFFVixNQUFNK0MsUUFBUSxJQUFJRixNQUFNN0MsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXdDO0lBRTNELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTbkcscUJBQXFCb0csVUFBVSxFQUFFaEQsT0FBTztJQUN0RCxNQUFNLEVBQUVpRCxNQUFNLEVBQUUsR0FBRy9DLGlCQUFRLEVBQ3JCQyxPQUFPNkMsWUFDUG5DLFdBQVdwQix1QkFBdUJ1RCxZQUFZaEQsVUFDOUNrRCxvQkFBb0IvSSxnQ0FBZ0M2SSxZQUFZaEQsVUFDaEVjLHFCQUFxQjlILGlDQUFpQ2dLLFlBQVloRCxVQUNsRW1ELGVBQWVDLElBQUFBLHNFQUE4RCxFQUFDdkMsVUFBVXFDLG1CQUFtQnBDLHFCQUMzR1YsU0FBUytDLGNBQ1Q3QyxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTXFELFNBQVMsSUFBSUosT0FBT2pELFNBQVNJLFFBQVFELE1BQU1HLFlBQVlPLFVBQVVxQyxtQkFBbUJwQztJQUUxRixPQUFPdUM7QUFDVDtBQUVPLFNBQVNoRix1QkFBdUJpRixXQUFXLEVBQUV0RCxPQUFPO0lBQ3pELE1BQU0sRUFBRXVELE9BQU8sRUFBRSxHQUFHckQsaUJBQVEsRUFDdEJDLE9BQU9tRCxhQUNQMUIsT0FBTzVELG9CQUFvQnNGLGFBQWF0RCxVQUN4Q3dELGVBQWV0Siw0QkFBNEJvSixhQUFhdEQsVUFDeER5RCxpQkFBaUJoSyw4QkFBOEI2SixhQUFhdEQsVUFDNUQwRCxnQkFBZ0JDLElBQUFBLDZCQUFxQixFQUFDL0IsT0FDdEN4QixTQUFTc0QsZUFDVHBELGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNNEQsVUFBVSxJQUFJTCxRQUFRdkQsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXNCLE1BQU00QixjQUFjQztJQUVuRixPQUFPRztBQUNUO0FBRU8sU0FBUzlELHlCQUF5QitELFlBQVksRUFBRTdELE9BQU87SUFDNUQsTUFBTSxFQUFFOEQsUUFBUSxFQUFFLEdBQUc1RCxpQkFBUSxFQUN2QkMsT0FBTzBELGNBQ1B6RCxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2J5RCxPQUFPakYscUJBQXFCK0UsY0FBYzdELFVBQzFDOEMsT0FBT2hJLHFCQUFxQitJLGNBQWM3RCxVQUMxQ2dFLGFBQWEvSiwyQkFBMkI0SixjQUFjN0Q7SUFFNURBLFVBQVU7SUFFVixNQUFNYSxXQUFXLElBQUlpRCxTQUFTOUQsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXlELE1BQU1qQixNQUFNa0I7SUFFN0UsT0FBT25EO0FBQ1Q7QUFFTyxTQUFTL0QsMkJBQTJCbUgsYUFBYSxFQUFFakUsT0FBTztJQUMvRCxNQUFNLEVBQUVrRSxTQUFTLEVBQUUsR0FBR2hFLGlCQUFRLEVBQ3hCQyxPQUFPOEQsZUFDUDdELFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYndDLE9BQU9qSSxzQkFBc0JvSixlQUFlakU7SUFFbERBLFVBQVU7SUFFVixNQUFNbUUsWUFBWSxJQUFJRCxVQUFVbEUsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXdDO0lBRW5FLE9BQU9xQjtBQUNUO0FBRU8sU0FBU3RJLDJCQUEyQnVJLGFBQWEsRUFBRXBFLE9BQU87SUFDL0QsSUFBSXFFLFlBQVk7SUFFaEIsTUFBTU4sT0FBT3RGLHNCQUFzQjJGLGVBQWVwRTtJQUVsRCxJQUFJK0QsU0FBUyxNQUFNO1FBQ2pCLE1BQU0sRUFBRU8sU0FBUyxFQUFFLEdBQUdwRSxpQkFBUSxFQUN4QkMsT0FBT2lFLGVBQ1BoRSxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2J3QyxPQUFPbEksc0JBQXNCd0osZUFBZXBFO1FBRWxEQSxVQUFVO1FBRVZxRSxZQUFZLElBQUlDLFVBQVV0RSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZeUQsTUFBTWpCO0lBQ3JFO0lBRUEsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTOUksMkJBQTJCZ0osYUFBYSxFQUFFdkUsT0FBTztJQUMvRCxNQUFNLEVBQUV3RSxTQUFTLEVBQUUsR0FBR3RFLGlCQUFRLEVBQ3hCQyxPQUFPb0UsZUFDUG5FLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYk8sV0FBV3ZCLDBCQUEwQmlGLGVBQWV2RSxVQUNwRHlFLFFBQVFoSSx1QkFBdUI4SCxlQUFldkU7SUFFcERBLFVBQVU7SUFFVixNQUFNMEUsWUFBWSxJQUFJRixVQUFVeEUsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVTREO0lBRTdFLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTdkksMkJBQTJCd0ksYUFBYSxFQUFFM0UsT0FBTztJQUMvRCxNQUFNLEVBQUU0RSxTQUFTLEVBQUUsR0FBRzFFLGlCQUFRLEVBQ3hCQyxPQUFPd0UsZUFDUHZFLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYnlELE9BQU9yRixzQkFBc0JpRyxlQUFlM0UsVUFDNUM2RSxRQUFROUYsdUJBQXVCNEYsZUFBZTNFO0lBRXBEQSxVQUFVO0lBRVYsTUFBTW9CLFlBQVksSUFBSXdELFVBQVU1RSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZeUQsTUFBTWM7SUFFekUsT0FBT3pEO0FBQ1Q7QUFFTyxTQUFTM0YsNkJBQTZCcUosY0FBYyxFQUFFOUUsT0FBTztJQUNsRSxNQUFNLEVBQUUrRSxVQUFVLEVBQUUsR0FBRzdFLGlCQUFRLEVBQ3pCQyxPQUFPMkUsZ0JBQ1AxRSxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2JPLFdBQVd0QiwyQkFBMkJ1RixnQkFBZ0I5RSxVQUN0RHlFLFFBQVEvSCx3QkFBd0JvSSxnQkFBZ0I5RTtJQUV0REEsVUFBVTtJQUVWLE1BQU1nRixhQUFhLElBQUlELFdBQVcvRSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZTyxVQUFVNEQ7SUFFL0UsT0FBT087QUFDVDtBQUVPLFNBQVNoSiw2QkFBNkJpSixjQUFjLEVBQUVqRixPQUFPO0lBQ2xFLE1BQU0sRUFBRWtGLFVBQVUsRUFBRSxHQUFHaEYsaUJBQVEsRUFDekJDLE9BQU84RSxnQkFDUDdFLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjZFLGlCQUFpQmpKLGlDQUFpQytJLGdCQUFnQmpGLFVBQ2xFa0MsUUFBUWlELGdCQUFnQixHQUFHO0lBRWpDbkYsVUFBVTtJQUVWLE1BQU1vRixhQUFhLElBQUlGLFdBQVdsRixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNEI7SUFFckUsT0FBT2tEO0FBQ1Q7QUFFTyxTQUFTdkwsNkJBQTZCd0wsY0FBYyxFQUFFckYsT0FBTztJQUNsRSxNQUFNLEVBQUVzRixVQUFVLEVBQUUsR0FBR3BGLGlCQUFRLEVBQ3pCQyxPQUFPa0YsZ0JBQ1B6RCxPQUFPaEUsdUJBQXVCeUgsZ0JBQWdCckYsVUFDOUNpQixPQUFPMUQsdUJBQXVCOEgsZ0JBQWdCckYsVUFDOUMyQyxRQUFRL0ksd0JBQXdCeUwsZ0JBQWdCckYsVUFDaERxRCxTQUFTMUcseUJBQXlCMEksZ0JBQWdCckYsVUFDbEQ0RCxVQUFVeEYsMEJBQTBCaUgsZ0JBQWdCckYsVUFDcEQwRSxZQUFZcEosNEJBQTRCK0osZ0JBQWdCckYsVUFDeERnRixhQUFheEosNkJBQTZCNkosZ0JBQWdCckYsVUFDMUR1RixjQUFjdkksOEJBQThCcUksZ0JBQWdCckYsVUFDNUR3RixnQkFBZ0JuSixnQ0FBZ0NnSixnQkFBZ0JyRixVQUNoRXlCLGFBQWE7UUFDWEc7UUFDQVg7UUFDQTBCO1FBQ0FVO1FBQ0FPO1FBQ0FjO1FBQ0FNO1FBQ0FPO1FBQ0FDO0tBQ0QsRUFDREMsbUJBQW1CQyxJQUFBQSxzQ0FBOEIsRUFBQ2pFLFlBQVl6QixVQUM5REksU0FBU3FGLGtCQUNUbkYsYUFBYTtJQUVuQk4sVUFBVTtJQUVWLE1BQU1nRSxhQUFhLElBQUlzQixXQUFXdEYsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXNCLE1BQU1YLE1BQU0wQixPQUFPVSxRQUFRTyxTQUFTYyxXQUFXTSxZQUFZTyxhQUFhQztJQUU3SSxPQUFPeEI7QUFDVDtBQUVPLFNBQVM5RywrQkFBK0J5SSxlQUFlLEVBQUUzRixPQUFPO0lBQ3JFLE1BQU0sRUFBRTRGLFdBQVcsRUFBRSxHQUFHMUYsaUJBQVEsRUFDMUJDLE9BQU93RixpQkFDUEUsUUFBUW5JLHlCQUF5QmlJLGlCQUFpQjNGLFVBQ2xEOEYsY0FBY3BLLCtCQUErQmlLLGlCQUFpQjNGLFVBQzlEK0Ysa0JBQWtCNUksbUNBQW1Dd0ksaUJBQWlCM0YsVUFDdEVnRyxvQkFBb0JDLElBQUFBLGdEQUF3QyxFQUFDRixrQkFDN0QzRixTQUFTNEYsbUJBQ1QxRixhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTXVGLGNBQWMsSUFBSUssWUFBWTVGLFNBQVNJLFFBQVFELE1BQU1HLFlBQVl1RixPQUFPQyxhQUFhQztJQUUzRixPQUFPUjtBQUNUO0FBRU8sU0FBU25LLCtCQUErQjhLLGVBQWUsRUFBRWxHLE9BQU87SUFDckUsTUFBTSxFQUFFbUcsV0FBVyxFQUFFLEdBQUdqRyxpQkFBUSxFQUMxQkMsT0FBTytGLGlCQUNQOUYsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiWSxXQUFXZ0YsZ0JBQWdCRSxXQUFXLElBQ3RDckMsT0FBT3ZGLHdCQUF3QjBDLFVBQVVsQixVQUN6QzRCLE9BQU8vRCx3QkFBd0JxSSxpQkFBaUJsRyxVQUNoRHFCLGNBQWMsSUFBSThFLFlBQVluRyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZeUQsTUFBTW5DO0lBRTdFLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTN0csK0JBQStCNkwsZUFBZSxFQUFFckcsT0FBTztJQUNyRSxNQUFNLEVBQUVzRyxXQUFXLEVBQUUsR0FBR3BHLGlCQUFRLEVBQzFCQyxPQUFPa0csaUJBQ1BqRyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2J5RCxPQUFPekYsd0JBQXdCK0gsaUJBQWlCckcsVUFDaER1RyxjQUFjL00sK0JBQStCNk0saUJBQWlCckcsVUFDOUR3RyxXQUFXak0sNEJBQTRCOEwsaUJBQWlCckcsVUFDeER5RyxZQUFZbkosNkJBQTZCK0ksaUJBQWlCckcsVUFDMURzQixjQUFjLElBQUlnRixZQUFZdEcsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXlELE1BQU13QyxhQUFhQyxVQUFVQztJQUVwRyxPQUFPbkY7QUFDVDtBQUVPLFNBQVNsSSxtQ0FBbUNzTixpQkFBaUIsRUFBRTFHLE9BQU87SUFDM0UsTUFBTSxFQUFFMkcsYUFBYSxFQUFFLEdBQUd6RyxpQkFBUSxFQUM1QkMsT0FBT3VHLG1CQUNQdEcsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNic0IsT0FBT2pFLDBCQUEwQitJLG1CQUFtQjFHLFVBQ3BEdUIsZ0JBQWdCLElBQUlvRixjQUFjM0csU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXNCO0lBRTNFLE9BQU9MO0FBQ1Q7QUFFTyxTQUFTakYsbUNBQW1Dc0ssaUJBQWlCLEVBQUU1RyxPQUFPO0lBQzNFLE1BQU0sRUFBRTZHLGFBQWEsRUFBRSxHQUFHM0csaUJBQVEsRUFDNUJDLE9BQU95RyxtQkFDUHhHLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYjZELFlBQVl0SCwrQkFBK0IrSixtQkFBbUI1RyxVQUM5RG1DLFFBQVFqRSwyQkFBMkIwSSxtQkFBbUI1RztJQUU1REEsVUFBVTtJQUVWLE1BQU13RixnQkFBZ0IsSUFBSXFCLGNBQWM3RyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNkQsV0FBV2hDO0lBRXRGLE9BQU9xRDtBQUNUO0FBRU8sU0FBU3pLLHFDQUFxQytMLGtCQUFrQixFQUFFOUcsT0FBTztJQUM5RSxNQUFNLEVBQUUrRyxjQUFjLEVBQUUsR0FBRzdHLGlCQUFRLEVBQzdCQyxPQUFPMkcsb0JBQ1AxRyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2J5RCxPQUFPeEYsMkJBQTJCdUksb0JBQW9COUcsVUFDdEQ4QyxPQUFPbkksMkJBQTJCbU0sb0JBQW9COUcsVUFDdERnSCxRQUFRbk8sNEJBQTRCaU8sb0JBQW9COUc7SUFFOURBLFVBQVU7SUFFVixNQUFNaUgsaUJBQWlCLElBQUlGLGVBQWUvRyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZeUQsTUFBTWpCLE1BQU1rRTtJQUV6RixPQUFPQztBQUNUO0FBRU8sU0FBUzNOLHFDQUFxQzROLGtCQUFrQixFQUFFbEgsT0FBTztJQUM5RSxNQUFNLEVBQUVtSCxjQUFjLEVBQUUsR0FBR2pILGlCQUFRLEVBQzdCQyxPQUFPK0csb0JBQ1A5RyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2I4RyxVQUFVak0sOEJBQThCK0wsb0JBQW9CbEgsVUFDNUR3RyxXQUFXbE0sK0JBQStCNE0sb0JBQW9CbEgsVUFDOUR5RyxZQUFZcEosZ0NBQWdDNkosb0JBQW9CbEgsVUFDaEV3QixpQkFBaUIsSUFBSTJGLGVBQWVuSCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZOEcsU0FBU1osVUFBVUM7SUFFaEcsT0FBT2pGO0FBQ1Q7QUFFTyxTQUFTaEYsc0NBQXNDNkssd0JBQXdCLEVBQUVySCxPQUFPO0lBQ3JGLE1BQU0sRUFBRXNILFNBQVMsRUFBRSxHQUFHcEgsaUJBQVEsRUFDeEJDLE9BQU9rSCwwQkFDUHRELE9BQU9uRixpQ0FBaUN5SSwwQkFBMEJySCxVQUNsRStDLFFBQVExSSxrQ0FBa0NnTiwwQkFBMEJySCxVQUNwRW9GLGFBQWFuSix1Q0FBdUNvTCwwQkFBMEJySCxVQUM5RXVGLGNBQWN0SSx3Q0FBd0NvSywwQkFBMEJySCxVQUNoRnVILGtCQUFrQkMsSUFBQUEsNERBQW9ELEVBQUN6RCxNQUFNaEIsT0FBT3FDLFlBQVlHLGNBQ2hHbkYsU0FBU21ILGlCQUNUakgsYUFBYSxNQUNibUgsWUFBWSxJQUFJSCxVQUFVdEgsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXlELE1BQU1oQixPQUFPcUMsWUFBWUc7SUFFNUYsT0FBT2tDO0FBQ1Q7QUFFTyxTQUFTek0sdUNBQXVDME0sbUJBQW1CLEVBQUUxSCxPQUFPO0lBQ2pGLE1BQU0sRUFBRTJILGVBQWUsRUFBRSxHQUFHekgsaUJBQVEsRUFDOUJDLE9BQU91SCxxQkFDUHRILFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQWEsTUFDYnNILHNCQUFzQkYsb0JBQW9CRyxzQkFBc0IsSUFDaEVDLHVCQUF1QjVNLDJDQUEyQzBNLHFCQUFxQjVILFVBQ3ZGa0MsUUFBUTRGLHNCQUFzQixHQUFHO0lBRXZDOUgsVUFBVTtJQUVWLE1BQU0rSCxrQkFBa0IsSUFBSUosZ0JBQWdCM0gsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWTRCO0lBRS9FLE9BQU82RjtBQUNUO0FBRU8sU0FBUzdPLHVDQUF1QzhPLG1CQUFtQixFQUFFaEksT0FBTztJQUNqRixNQUFNLEVBQUVpSSxlQUFlLEVBQUUsR0FBRy9ILGlCQUFRLEVBQzlCQyxPQUFPNkgscUJBQ1A1SCxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2JPLFdBQVd6QixnQ0FBZ0M0SSxxQkFBcUJoSSxVQUNoRW9GLGFBQWFySixrQ0FBa0NpTSxxQkFBcUJoSTtJQUUxRUEsVUFBVTtJQUVWLE1BQU1PLGtCQUFrQixJQUFJMEgsZ0JBQWdCakksU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVXVFO0lBRXpGLE9BQU83RTtBQUNUO0FBRU8sU0FBU25ELHVDQUF1QzhLLG1CQUFtQixFQUFFbEksT0FBTztJQUNqRixNQUFNLEVBQUVtSSxlQUFlLEVBQUUsR0FBR2pJLGlCQUFRLEVBQzlCQyxPQUFPK0gscUJBQ1A5SCxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFhLE1BQ2JzQixPQUFPOUQsNEJBQTRCb0sscUJBQXFCbEk7SUFFOURBLFVBQVU7SUFFVixNQUFNK0Ysa0JBQWtCLElBQUlvQyxnQkFBZ0JuSSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZc0I7SUFFL0UsT0FBT21FO0FBQ1Q7QUFFTyxTQUFTOUssd0NBQXdDbU4sb0JBQW9CLEVBQUVwSSxPQUFPO0lBQ25GLE1BQU0wSCxzQkFBc0JVLHFCQUFxQkMsc0JBQXNCLElBQ2pFTixrQkFBa0IvTSx1Q0FBdUMwTSxxQkFBcUIxSDtJQUVwRixPQUFPK0g7QUFDVDtBQUVPLFNBQVNwTSx5Q0FBeUN5TSxvQkFBb0IsRUFBRXBJLE9BQU87SUFDcEYsTUFBTSxFQUFFc0ksZUFBZSxFQUFFLEdBQUdwSSxpQkFBUSxFQUM5QkMsT0FBT2lJLHNCQUNQaEksU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBYSxNQUNiTyxXQUFXckIsaUNBQWlDNEksc0JBQXNCcEksVUFDbEUrSCxrQkFBa0I5TSx3Q0FBd0NtTixzQkFBc0JwSTtJQUV0RkEsVUFBVTtJQUVWLE1BQU11SSxtQkFBbUIsSUFBSUQsZ0JBQWdCdEksU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVWtIO0lBRTFGLE9BQU9RO0FBQ1Q7QUFFTyxTQUFTelAsNkNBQTZDMFAsc0JBQXNCLEVBQUV4SSxPQUFPO0lBQzFGLE1BQU0sRUFBRXlJLGtCQUFrQixFQUFFLEdBQUd2SSxpQkFBUSxFQUNqQ0MsT0FBT3FJLHdCQUNQekUsT0FBT3BGLHdDQUF3QzZKLHdCQUF3QnhJLFVBQ3ZFb0YsYUFBYXRKLHFDQUFxQzBNLHdCQUF3QnhJLFVBQzFFdUYsY0FBY3hJLHNDQUFzQ3lMLHdCQUF3QnhJLFVBQzVFMEksMEJBQTBCQyxJQUFBQSxnRUFBd0QsRUFBQzVFLE1BQU1xQixZQUFZRyxjQUNyR25GLFNBQVNzSSx5QkFDVHBJLGFBQWE7SUFFbkJOLFVBQVU7SUFFVixNQUFNYyxxQkFBcUIsSUFBSTJILG1CQUFtQnpJLFNBQVNJLFFBQVFELE1BQU1HLFlBQVl5RCxNQUFNcUIsWUFBWUc7SUFFdkcsT0FBT3pFO0FBQ1Q7QUFFTyxTQUFTM0IsK0NBQStDeUosdUJBQXVCLEVBQUU1SSxPQUFPO0lBQzdGLE1BQU0sRUFBRTZJLG1CQUFtQixFQUFFLEdBQUczSSxpQkFBUSxFQUNsQ0MsT0FBT3lJLHlCQUNQN0UsT0FBT2xGLGdDQUFnQytKLHlCQUF5QjVJLFVBQ2hFOEksMkJBQTJCN0osMkRBQTJEOEUsTUFBTTZFLHlCQUF5QjVJLFVBQ3JIK0ksMkJBQTJCQyxJQUFBQSxtRUFBMkQsRUFBQ2pGLE1BQU0rRSwyQkFDN0Y1RyxRQUFRNEcsMEJBQ1IxSSxTQUFTMkksMEJBQ1R6SSxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTWlKLHNCQUFzQixJQUFJSixvQkFBb0I3SSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFZNEI7SUFFdkYsT0FBTytHO0FBQ1Q7QUFFTyxTQUFTMU0saURBQWlEOEssd0JBQXdCLEVBQUVySCxPQUFPO0lBQ2hHLE1BQU0sRUFBRWtKLG9CQUFvQixFQUFFLEdBQUdoSixpQkFBUSxFQUNuQ0MsT0FBT2tILDBCQUNQSSxZQUFZakwsc0NBQXNDNkssMEJBQTBCckgsVUFDNUVtSiw2QkFBNkJDLElBQUFBLCtDQUF1QyxFQUFDM0IsWUFDckVySCxTQUFTK0ksNEJBQ1Q3SSxhQUFhO0lBRW5CTixVQUFVO0lBRVYsTUFBTXFKLHVCQUF1QixJQUFJSCxxQkFBcUJsSixTQUFTSSxRQUFRRCxNQUFNRyxZQUFZbUg7SUFFekYsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTckssb0RBQW9EK0UsSUFBSSxFQUFFdUYsc0JBQXNCLEVBQUV0SixPQUFPO0lBQ3ZHLE1BQU0sRUFBRXVKLGtCQUFrQixFQUFFLEdBQUdySixpQkFBUSxFQUNqQ0MsT0FBT21KLHdCQUNQekksV0FBV2pCLDBDQUEwQ21FLE1BQU11Rix3QkFBd0J0SixVQUNuRmdFLGFBQWFoSyxxQ0FBcUNzUCx3QkFBd0J0SixVQUMxRStJLDJCQUEyQlMsSUFBQUEsbURBQTJDLEVBQUN6RixNQUFNbEQsVUFBVWIsVUFDdkZJLFNBQVMySSwwQkFDVHpJLGFBQWEsTUFDYm1KLGFBQWEsSUFBSUYsbUJBQW1CdkosU0FBU0ksUUFBUUQsTUFBTUcsWUFBWU8sVUFBVW1EO0lBRXZGLE9BQU95RjtBQUNUO0FBRU8sU0FBUzVKLGdDQUFnQ2tFLElBQUksRUFBRUYsWUFBWSxFQUFFN0QsT0FBTztJQUN6RSxNQUFNLEVBQUU4RCxRQUFRLEVBQUUsR0FBRzVELGlCQUFRLEVBQ3ZCQyxPQUFPMEQsY0FDUGYsT0FBT2hJLHFCQUFxQitJLGVBQzVCRyxhQUFhakssa0NBQWtDZ0ssTUFBTUYsY0FBYzdELFVBQ25FMEosaUJBQWlCQyxJQUFBQSw4QkFBc0IsRUFBQzdHLE9BQ3hDMUMsU0FBU3NKLGdCQUNUcEosYUFBYSxNQUNiTyxXQUFXLElBQUlpRCxTQUFTOUQsU0FBU0ksUUFBUUQsTUFBTUcsWUFBWXlELE1BQU1qQixNQUFNa0I7SUFFN0UsT0FBT25EO0FBQ1Q7QUFFTyxTQUFTbkcsa0JBQWtCa0ksU0FBUyxFQUFFNUMsT0FBTztJQUNsRCxNQUFNOEMsT0FBT0YsVUFBVWdILE9BQU87SUFFOUIsT0FBTzlHO0FBQ1Q7QUFFTyxTQUFTOUUsb0JBQW9Cc0YsV0FBVyxFQUFFdEQsT0FBTztJQUN0RCxNQUFNa0IsV0FBV29DLFlBQVk4QyxXQUFXLElBQ2xDeEUsT0FBTzdELGlCQUFpQm1ELFVBQVVsQjtJQUV4QyxPQUFPNEI7QUFDVDtBQUVPLFNBQVNsQyxxQkFBcUJpQixRQUFRLEVBQUVYLE9BQU87SUFDcEQsTUFBTTZELGVBQWVsRCxTQUFTa0osZUFBZSxJQUN2Q2hKLFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU2xCLHFCQUFxQnVCLFFBQVEsRUFBRWxCLE9BQU87SUFDcEQsSUFBSWEsV0FBVztJQUVmLE1BQU1nRCxlQUFlM0MsU0FBUzJJLGVBQWU7SUFFN0MsSUFBSWhHLGlCQUFpQixNQUFNO1FBQ3pCaEQsV0FBV2YseUJBQXlCK0QsY0FBYzdEO0lBQ3BEO0lBRUEsT0FBT2E7QUFDVDtBQUVPLFNBQVMvRixxQkFBcUIrSSxZQUFZO0lBQy9DLE1BQU1mLE9BQU9lLGFBQWErRixPQUFPO0lBRWpDLE9BQU85RztBQUNUO0FBRU8sU0FBU2hFLHFCQUFxQitFLFlBQVksRUFBRTdELE9BQU87SUFDeEQsTUFBTStELE9BQU87SUFFYixPQUFPQTtBQUNUO0FBRU8sU0FBUzNILHNCQUFzQjhFLFFBQVEsRUFBRWxCLE9BQU87SUFDckQsSUFBSW9CLFlBQVk7SUFFaEIsTUFBTXVELGdCQUFnQnpELFNBQVM0SSxnQkFBZ0I7SUFFL0MsSUFBSW5GLGtCQUFrQixNQUFNO1FBQzFCdkQsWUFBWWpGLDJCQUEyQndJLGVBQWUzRTtJQUN4RDtJQUVBLE9BQU9vQjtBQUNUO0FBRU8sU0FBUy9CLHNCQUFzQmtELFNBQVMsRUFBRXZDLE9BQU87SUFDdEQsTUFBTTZELGVBQWV0QixVQUFVc0gsZUFBZSxJQUN4Q2hKLFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU3BDLHNCQUFzQjJGLGFBQWEsRUFBRXBFLE9BQU87SUFDMUQsTUFBTStELE9BQU9LLGNBQWMyRixPQUFPO0lBRWxDLE9BQU9oRztBQUNUO0FBRU8sU0FBU25KLHNCQUFzQndKLGFBQWEsRUFBRXBFLE9BQU87SUFDMUQsTUFBTThDLE9BQU9zQixjQUFjd0YsT0FBTztJQUVsQyxPQUFPOUc7QUFDVDtBQUVPLFNBQVNqSSxzQkFBc0JvSixhQUFhLEVBQUVqRSxPQUFPO0lBQzFELE1BQU04QyxPQUFPbUIsY0FBYzJGLE9BQU87SUFFbEMsT0FBTzlHO0FBQ1Q7QUFFTyxTQUFTcEUsc0JBQXNCaUcsYUFBYSxFQUFFM0UsT0FBTztJQUMxRCxNQUFNK0QsT0FBT1ksY0FBY29GLE9BQU87SUFFbEMsT0FBT2hHO0FBQ1Q7QUFFTyxTQUFTdEUsdUJBQXVCdUQsVUFBVSxFQUFFaEQsT0FBTztJQUN4RCxNQUFNNkQsZUFBZWIsV0FBVzZHLGVBQWUsSUFDekNoSixXQUFXZix5QkFBeUIrRCxjQUFjN0Q7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVNqRCx1QkFBdUJ5SCxjQUFjLEVBQUVyRixPQUFPO0lBQzVELElBQUk0QixPQUFPO0lBRVgsTUFBTVYsV0FBV21FLGVBQWVlLFdBQVc7SUFFM0MsSUFBSWxGLGFBQWEsTUFBTTtRQUNyQlUsT0FBTzdELGlCQUFpQm1ELFVBQVVsQjtJQUNwQztJQUVBLE9BQU80QjtBQUNUO0FBRU8sU0FBU3JFLHVCQUF1QjhILGNBQWMsRUFBRXJGLE9BQU87SUFDNUQsSUFBSWlCLE9BQU87SUFFWCxNQUFNTixXQUFXMEUsZUFBZTJFLFdBQVc7SUFFM0MsSUFBSXJKLGFBQWEsTUFBTTtRQUNyQk0sT0FBT3pELGlCQUFpQm1ELFVBQVVYO0lBQ3BDO0lBRUEsT0FBT2lCO0FBQ1Q7QUFFTyxTQUFTeEUsdUJBQXVCOEgsYUFBYSxFQUFFdkUsT0FBTztJQUMzRCxNQUFNSSxTQUFTbUUsY0FBYzBGLFNBQVMsSUFDaEN4RSxtQkFBbUJyRixRQUNuQnFFLFFBQVF5RixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQzFFO0lBRXpDLE9BQU9oQjtBQUNUO0FBRU8sU0FBUzFGLHVCQUF1QjRGLGFBQWEsRUFBRTNFLE9BQU87SUFDM0QsTUFBTTZFLFFBQVFGLGNBQWN5RixRQUFRO0lBRXBDLE9BQU92RjtBQUNUO0FBRU8sU0FBU25JLHdCQUF3Qm9JLGNBQWMsRUFBRTlFLE9BQU87SUFDN0QsTUFBTUksU0FBUzBFLGVBQWVtRixTQUFTLElBQ2pDeEUsbUJBQW1CckYsUUFDbkJxRSxRQUFReUYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMxRTtJQUV6QyxPQUFPaEI7QUFDVDtBQUVPLFNBQVM3Syx3QkFBd0J5TCxjQUFjLEVBQUVyRixPQUFPO0lBQzdELElBQUkyQyxRQUFRO0lBRVosTUFBTUosWUFBWThDLGVBQWVnRixZQUFZO0lBRTdDLElBQUk5SCxjQUFjLE1BQU07UUFDdEJJLFFBQVFoSixtQkFBbUI0SSxXQUFXdkM7SUFDeEM7SUFFQSxPQUFPMkM7QUFDVDtBQUVPLFNBQVN0SCx3QkFBd0I2RixRQUFRLEVBQUVsQixPQUFPO0lBQ3ZELElBQUlxQixjQUFjO0lBRWxCLE1BQU02RSxrQkFBa0JoRixTQUFTb0osa0JBQWtCO0lBRW5ELElBQUlwRSxvQkFBb0IsTUFBTTtRQUM1QjdFLGNBQWNqRywrQkFBK0I4SyxpQkFBaUJsRztJQUNoRTtJQUVBLE9BQU9xQjtBQUNUO0FBRU8sU0FBUzVHLHdCQUF3QnlHLFFBQVEsRUFBRWxCLE9BQU87SUFDdkQsSUFBSXNCLGNBQWM7SUFFbEIsTUFBTStFLGtCQUFrQm5GLFNBQVNxSixrQkFBa0I7SUFFbkQsSUFBSWxFLG9CQUFvQixNQUFNO1FBQzVCL0UsY0FBYzlHLCtCQUErQjZMLGlCQUFpQnJHO0lBQ2hFO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTaEQsd0JBQXdCK0gsZUFBZSxFQUFFckcsT0FBTztJQUM5RCxNQUFNK0QsT0FBT3lHLG1CQUFZO0lBRXpCLE9BQU96RztBQUNUO0FBRU8sU0FBU3ZGLHdCQUF3QjZILGVBQWUsRUFBRXJHLE9BQU87SUFDOUQsTUFBTStELE9BQU95RyxtQkFBWTtJQUV6QixPQUFPekc7QUFDVDtBQUVPLFNBQVNsRyx3QkFBd0JxSSxlQUFlLEVBQUVsRyxPQUFPO0lBQzlELE1BQU1rQixXQUFXZ0YsZ0JBQWdCRSxXQUFXLElBQ3RDeEUsT0FBTzdELGlCQUFpQm1ELFVBQVVsQjtJQUV4QyxPQUFPNEI7QUFDVDtBQUVPLFNBQVM5SCx5QkFBeUJrSixVQUFVLEVBQUVoRCxPQUFPO0lBQzFELE1BQU1xRixpQkFBaUJyQyxXQUFXeUgsaUJBQWlCLElBQzdDekcsYUFBYW5LLDZCQUE2QndMLGdCQUFnQnJGO0lBRWhFLE9BQU9nRTtBQUNUO0FBRU8sU0FBU3JILHlCQUF5QjBJLGNBQWMsRUFBRXJGLE9BQU87SUFDOUQsSUFBSXFELFNBQVM7SUFFYixNQUFNTCxhQUFhcUMsZUFBZXFGLGFBQWE7SUFFL0MsSUFBSTFILGVBQWUsTUFBTTtRQUN2QkssU0FBU3pHLHFCQUFxQm9HLFlBQVloRDtJQUM1QztJQUVBLE9BQU9xRDtBQUNUO0FBRU8sU0FBUzNGLHlCQUF5QmlJLGVBQWUsRUFBRTNGLE9BQU87SUFDL0QsTUFBTTJLLFlBQVloRixnQkFBZ0JpRixZQUFZLElBQ3hDL0UsUUFBUThFLFVBQVVFLEdBQUcsQ0FBQyxDQUFDOUs7UUFDckIsTUFBTVcsT0FBT2pELGlCQUFpQnNDLFVBQVVDO1FBRXhDLE9BQU9VO0lBQ1Q7SUFFTixPQUFPbUY7QUFDVDtBQUVPLFNBQVN2RywwQkFBMEJpRixhQUFhLEVBQUV2RSxPQUFPO0lBQzlELE1BQU02RCxlQUFlVSxjQUFjc0YsZUFBZSxJQUM1Q2hKLFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU3pDLDBCQUEwQmlILGNBQWMsRUFBRXJGLE9BQU87SUFDL0QsSUFBSTRELFVBQVU7SUFFZCxNQUFNTixjQUFjK0IsZUFBZXlGLGNBQWM7SUFFakQsSUFBSXhILGdCQUFnQixNQUFNO1FBQ3hCTSxVQUFVdkYsdUJBQXVCaUYsYUFBYXREO0lBQ2hEO0lBRUEsT0FBTzREO0FBQ1Q7QUFFTyxTQUFTdkssMEJBQTBCNkgsUUFBUSxFQUFFbEIsT0FBTztJQUN6RCxJQUFJdUIsZ0JBQWdCO0lBRXBCLE1BQU1tRixvQkFBb0J4RixTQUFTNkosb0JBQW9CO0lBRXZELElBQUlyRSxzQkFBc0IsTUFBTTtRQUM5Qm5GLGdCQUFnQm5JLG1DQUFtQ3NOLG1CQUFtQjFHO0lBQ3hFO0lBRUEsT0FBT3VCO0FBQ1Q7QUFFTyxTQUFTNUQsMEJBQTBCK0ksaUJBQWlCLEVBQUUxRyxPQUFPO0lBQ2xFLE1BQU1rQixXQUFXd0Ysa0JBQWtCTixXQUFXLElBQzVDeEUsT0FBTzdELGlCQUFpQm1ELFVBQVVsQjtJQUVwQyxPQUFPNEI7QUFDVDtBQUVPLFNBQVNySSwyQkFBMkJ5UixRQUFRLEVBQUVoTCxPQUFPO0lBQzFELElBQUl3QixpQkFBaUI7SUFFckIsTUFBTTBGLHFCQUFxQjhELFNBQVNDLHFCQUFxQjtJQUV6RCxJQUFJL0QsdUJBQXVCLE1BQU07UUFDL0IxRixpQkFBaUJsSSxxQ0FBcUM0TixvQkFBb0JsSDtJQUM1RTtJQUVBLE9BQU93QjtBQUNUO0FBRU8sU0FBU3ZILDJCQUEyQjRKLFlBQVksRUFBRTdELE9BQU87SUFDOUQsTUFBTWdFLGFBQWE7SUFFbkIsT0FBT0E7QUFDVDtBQUVPLFNBQVN6RSwyQkFBMkJ1RixjQUFjLEVBQUU5RSxPQUFPO0lBQ2hFLE1BQU02RCxlQUFlaUIsZUFBZStFLGVBQWUsSUFDN0NoSixXQUFXZix5QkFBeUIrRCxjQUFjN0Q7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVMzQywyQkFBMkIwSSxpQkFBaUIsRUFBRTVHLE9BQU87SUFDbkUsTUFBTTZCLFlBQVkrRSxrQkFBa0JzRSxZQUFZLElBQzFDL0ksUUFBUWhFLG1CQUFtQjBELFdBQVc3QjtJQUU1QyxPQUFPbUM7QUFDVDtBQUVPLFNBQVM1RCwyQkFBMkJ1SSxrQkFBa0IsRUFBRTlHLE9BQU87SUFDcEUsTUFBTStELE9BQU8rQyxtQkFBbUJpRCxPQUFPO0lBRXZDLE9BQU9oRztBQUNUO0FBRU8sU0FBU3BKLDJCQUEyQm1NLGtCQUFrQixFQUFFOUcsT0FBTztJQUNwRSxNQUFNOEMsT0FBT2dFLG1CQUFtQjhDLE9BQU87SUFFdkMsT0FBTzlHO0FBQ1Q7QUFFTyxTQUFTdkksNEJBQTRCOEwsZUFBZSxFQUFFckcsT0FBTztJQUNsRSxNQUFNbUwsZUFBZTlFLGdCQUFnQitFLGVBQWUsSUFDbEQ1RSxXQUFXekksaUJBQWlCb04sY0FBY25MO0lBRTVDLE9BQU93RztBQUNUO0FBRU8sU0FBU3JOLDRCQUE0QjRHLFFBQVEsRUFBRUMsT0FBTztJQUMzRCxJQUFJTyxrQkFBa0I7SUFFdEIsTUFBTXlILHNCQUFzQmpJLFNBQVNzTCxzQkFBc0I7SUFFM0QsSUFBSXJELHdCQUF3QixNQUFNO1FBQ2hDekgsa0JBQWtCckgsdUNBQXVDOE8scUJBQXFCaEk7SUFDaEY7SUFFQSxPQUFPTztBQUNUO0FBRU8sU0FBU3JHLDRCQUE0Qm9KLFdBQVcsRUFBRXRELE9BQU87SUFDOUQsTUFBTXNMLG1CQUFtQmhJLFlBQVlpSSxtQkFBbUIsSUFDbEQvSCxlQUFlM0osNkJBQTZCeVIsa0JBQWtCdEw7SUFFcEUsT0FBT3dEO0FBQ1Q7QUFFTyxTQUFTbEksNEJBQTRCK0osY0FBYyxFQUFFckYsT0FBTztJQUNqRSxJQUFJMEUsWUFBWTtJQUVoQixNQUFNSCxnQkFBZ0JjLGVBQWVtRyxnQkFBZ0I7SUFFckQsSUFBSWpILGtCQUFrQixNQUFNO1FBQzFCRyxZQUFZbkosMkJBQTJCZ0osZUFBZXZFO0lBQ3hEO0lBRUEsT0FBTzBFO0FBQ1Q7QUFFTyxTQUFTN0wsNEJBQTRCaU8sa0JBQWtCLEVBQUU5RyxPQUFPO0lBQ3JFLE1BQU1nSCxRQUFRRixtQkFBbUIyRSxRQUFRO0lBRXpDLE9BQU96RTtBQUNUO0FBRU8sU0FBU2xKLDRCQUE0Qm9LLG1CQUFtQixFQUFFbEksT0FBTztJQUN0RSxNQUFNa0IsV0FBV2dILG9CQUFvQjlCLFdBQVcsSUFDMUN4RSxPQUFPN0QsaUJBQWlCbUQsVUFBVWxCO0lBRXhDLE9BQU80QjtBQUNUO0FBRU8sU0FBU2hHLDZCQUE2Qm1FLFFBQVEsRUFBRUMsT0FBTztJQUM1RCxJQUFJdUksbUJBQW1CO0lBRXZCLE1BQU1ILHVCQUF1QnJJLFNBQVMyTCx1QkFBdUI7SUFFN0QsSUFBSXRELHlCQUF5QixNQUFNO1FBQ2pDRyxtQkFBbUI1TSx5Q0FBeUN5TSxzQkFBc0JwSTtJQUNwRjtJQUVBLE9BQU91STtBQUNUO0FBRU8sU0FBUy9NLDZCQUE2QjZKLGNBQWMsRUFBRXJGLE9BQU87SUFDbEUsSUFBSWdGLGFBQWE7SUFFakIsTUFBTUYsaUJBQWlCTyxlQUFlc0csaUJBQWlCO0lBRXZELElBQUk3RyxtQkFBbUIsTUFBTTtRQUMzQkUsYUFBYXZKLDZCQUE2QnFKLGdCQUFnQjlFO0lBQzVEO0lBRUEsT0FBT2dGO0FBQ1Q7QUFFTyxTQUFTMUgsNkJBQTZCK0ksZUFBZSxFQUFFckcsT0FBTztJQUNuRSxNQUFNNEwsZ0JBQWdCdkYsZ0JBQWdCd0YsZ0JBQWdCLElBQ2pEcEYsWUFBWTFJLGlCQUFpQjZOLGVBQWU1TDtJQUVqRCxPQUFPeUc7QUFDVDtBQUVPLFNBQVN0TCw4QkFBOEIrTCxrQkFBa0IsRUFBRWxILE9BQU87SUFDdkUsTUFBTW9ILFVBQVVGLG1CQUFtQjRFLFNBQVM7SUFFNUMsT0FBTzFFO0FBQ1Q7QUFFTyxTQUFTM04sOEJBQThCNkosV0FBVyxFQUFFdEQsT0FBTztJQUNoRSxNQUFNK0wscUJBQXFCekksWUFBWTBJLHFCQUFxQixJQUN0RHZJLGlCQUFpQjVKLDZCQUE2QmtTLG9CQUFvQi9MO0lBRXhFLE9BQU95RDtBQUNUO0FBRU8sU0FBU3pHLDhCQUE4QnFJLGNBQWMsRUFBRXJGLE9BQU87SUFDbkUsSUFBSXVGLGNBQWM7SUFFbEIsTUFBTUksa0JBQWtCTixlQUFlNEcsa0JBQWtCO0lBRXpELElBQUl0RyxvQkFBb0IsTUFBTTtRQUM1QkosY0FBY3JJLCtCQUErQnlJLGlCQUFpQjNGO0lBQ2hFO0lBRUEsT0FBT3VGO0FBQ1Q7QUFFTyxTQUFTdE0sK0JBQStCMEgsUUFBUSxFQUFFWCxPQUFPO0lBQzlELE1BQU13SSx5QkFBeUI3SCxTQUFTdUwseUJBQXlCLElBQzNEcEwscUJBQXFCaEksNkNBQTZDMFAsd0JBQXdCeEk7SUFFaEcsT0FBT2M7QUFDVDtBQUVPLFNBQVNwRiwrQkFBK0JpSyxlQUFlLEVBQUUzRixPQUFPO0lBQ3JFLE1BQU04RixjQUFjSCxnQkFBZ0J3RyxhQUFhO0lBRWpELE9BQU9yRztBQUNUO0FBRU8sU0FBU2pKLCtCQUErQitKLGlCQUFpQixFQUFFNUcsT0FBTztJQUN2RSxNQUFNaUUsZ0JBQWdCMkMsa0JBQWtCd0YsZ0JBQWdCLElBQ2xEakksWUFBWXJILDJCQUEyQm1ILGVBQWVqRTtJQUU1RCxPQUFPbUU7QUFDVDtBQUVPLFNBQVM3SiwrQkFBK0I0TSxrQkFBa0IsRUFBRWxILE9BQU87SUFDeEUsTUFBTW1MLGVBQWVqRSxtQkFBbUJrRSxlQUFlLElBQ2pENUUsV0FBV3pJLGlCQUFpQm9OLGNBQWNuTDtJQUVoRCxPQUFPd0c7QUFDVDtBQUVPLFNBQVNoTiwrQkFBK0I2TSxlQUFlLEVBQUVyRyxPQUFPO0lBQ3JFLE1BQU11RyxjQUFjRixnQkFBZ0JnRyxhQUFhO0lBRWpELE9BQU85RjtBQUNUO0FBRU8sU0FBU3JILGdDQUFnQ2EsUUFBUSxFQUFFQyxPQUFPO0lBQy9ELElBQUlpSixzQkFBc0I7SUFFMUIsTUFBTUwsMEJBQTBCN0ksU0FBU3VNLDBCQUEwQjtJQUVuRSxJQUFJMUQsNEJBQTRCLE1BQU07UUFDcENLLHNCQUFzQjlKLCtDQUErQ3lKLHlCQUF5QjVJO0lBQ2hHO0lBRUEsT0FBT2lKO0FBQ1Q7QUFFTyxTQUFTbFEsZ0NBQWdDd0osU0FBUyxFQUFFdkMsT0FBTztJQUNoRSxNQUFNd0kseUJBQXlCakcsVUFBVTJKLHlCQUF5QixJQUM1RHBMLHFCQUFxQmhJLDZDQUE2QzBQLHdCQUF3QnhJO0lBRWhHLE9BQU9jO0FBQ1Q7QUFFTyxTQUFTM0csZ0NBQWdDNkksVUFBVSxFQUFFaEQsT0FBTztJQUNqRSxNQUFNZ0UsYUFBYWxLLHlCQUF5QmtKLFlBQVloRCxVQUNsRGtELG9CQUFvQmMsWUFBWSxHQUFHO0lBRXpDLE9BQU9kO0FBQ1Q7QUFFTyxTQUFTN0csZ0NBQWdDZ0osY0FBYyxFQUFFckYsT0FBTztJQUNyRSxJQUFJd0YsZ0JBQWdCO0lBRXBCLE1BQU1vQixvQkFBb0J2QixlQUFla0gsb0JBQW9CO0lBRTdELElBQUkzRixzQkFBc0IsTUFBTTtRQUM5QnBCLGdCQUFnQmxKLG1DQUFtQ3NLLG1CQUFtQjVHO0lBQ3hFO0lBRUEsT0FBT3dGO0FBQ1Q7QUFFTyxTQUFTbkksZ0NBQWdDNkosa0JBQWtCLEVBQUVsSCxPQUFPO0lBQ3pFLE1BQU00TCxnQkFBZ0IxRSxtQkFBbUIyRSxnQkFBZ0IsSUFDbkRwRixZQUFZMUksaUJBQWlCNk4sZUFBZTVMO0lBRWxELE9BQU95RztBQUNUO0FBRU8sU0FBU3JILGdDQUFnQzRJLG1CQUFtQixFQUFFaEksT0FBTztJQUMxRSxNQUFNNkQsZUFBZW1FLG9CQUFvQjZCLGVBQWUsSUFDbERoSixXQUFXZix5QkFBeUIrRCxjQUFjN0Q7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVNoQyxnQ0FBZ0MrSix1QkFBdUIsRUFBRTVJLE9BQU87SUFDOUUsTUFBTStELE9BQU82RSx3QkFBd0JtQixPQUFPO0lBRTVDLE9BQU9oRztBQUNUO0FBRU8sU0FBUy9LLGlDQUFpQ2dLLFVBQVUsRUFBRWhELE9BQU87SUFDbEUsTUFBTXdJLHlCQUF5QnhGLFdBQVdrSix5QkFBeUIsSUFDN0RwTCxxQkFBcUJoSSw2Q0FBNkMwUCx3QkFBd0J4STtJQUVoRyxPQUFPYztBQUNUO0FBRU8sU0FBU3RCLGlDQUFpQzRJLG9CQUFvQixFQUFFcEksT0FBTztJQUM1RSxNQUFNNkQsZUFBZXVFLHFCQUFxQnlCLGVBQWUsSUFDbkRoSixXQUFXZix5QkFBeUIrRCxjQUFjN0Q7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVNqQyxpQ0FBaUN5SSx3QkFBd0IsRUFBRXJILE9BQU87SUFDaEYsTUFBTStELE9BQU9zRCx5QkFBeUIwQyxPQUFPO0lBRTdDLE9BQU9oRztBQUNUO0FBRU8sU0FBU2hLLGtDQUFrQ2dLLElBQUksRUFBRUYsWUFBWSxFQUFFN0QsT0FBTztJQUMzRSxNQUFNZ0UsYUFBYTtJQUVuQixPQUFPQTtBQUNUO0FBRU8sU0FBU2pJLGtDQUFrQ2lNLG1CQUFtQixFQUFFaEksT0FBTztJQUM1RSxNQUFNaUYsaUJBQWlCK0Msb0JBQW9Cd0UsaUJBQWlCLElBQ3REcEgsYUFBYXBKLDZCQUE2QmlKLGdCQUFnQmpGO0lBRWhFLE9BQU9vRjtBQUNUO0FBRU8sU0FBUy9LLGtDQUFrQ2dOLHdCQUF3QixFQUFFckgsT0FBTztJQUNqRixNQUFNNEMsWUFBWXlFLHlCQUF5Qm9GLFlBQVksSUFDakQxSixRQUFRM0ksbUJBQW1Cd0ksV0FBVzVDO0lBRTVDLE9BQU8rQztBQUNUO0FBRU8sU0FBUzVGLG1DQUFtQ3dJLGVBQWUsRUFBRTNGLE9BQU87SUFDekUsTUFBTWtJLHNCQUFzQnZDLGdCQUFnQitHLHNCQUFzQixJQUM1RDNHLGtCQUFrQjNJLHVDQUF1QzhLLHFCQUFxQmxJO0lBRXBGLE9BQU8rRjtBQUNUO0FBRU8sU0FBUy9MLHFDQUFxQzJTLHFCQUFxQixFQUFFM00sT0FBTztJQUNqRixNQUFNcUYsaUJBQWlCc0gsc0JBQXNCbEMsaUJBQWlCLElBQ3hEekcsYUFBYW5LLDZCQUE2QndMLGdCQUFnQnJGO0lBRWhFLE9BQU9nRTtBQUNUO0FBRU8sU0FBU2xJLHFDQUFxQzBNLHNCQUFzQixFQUFFeEksT0FBTztJQUNsRixNQUFNaUYsaUJBQWlCdUQsdUJBQXVCZ0UsaUJBQWlCLElBQ3pEcEgsYUFBYXBKLDZCQUE2QmlKLGdCQUFnQmpGO0lBRWhFLE9BQU9vRjtBQUNUO0FBRU8sU0FBU3JJLHNDQUFzQ3lMLHNCQUFzQixFQUFFeEksT0FBTztJQUNuRixNQUFNMkYsa0JBQWtCNkMsdUJBQXVCeUQsa0JBQWtCLElBQzNEMUcsY0FBY3JJLCtCQUErQnlJLGlCQUFpQjNGO0lBRXBFLE9BQU91RjtBQUNUO0FBRU8sU0FBU3RKLHVDQUF1Q29MLHdCQUF3QixFQUFFckgsT0FBTztJQUN0RixNQUFNaUYsaUJBQWlCb0MseUJBQXlCbUYsaUJBQWlCLElBQzNEcEgsYUFBYXBKLDZCQUE2QmlKLGdCQUFnQmpGO0lBRWhFLE9BQU9vRjtBQUNUO0FBRU8sU0FBU3pHLHdDQUF3QzZKLHNCQUFzQixFQUFFeEksT0FBTztJQUNyRixNQUFNK0QsT0FBT3lFLHVCQUF1QnVCLE9BQU87SUFFM0MsT0FBT2hHO0FBQ1Q7QUFFTyxTQUFTOUcsd0NBQXdDb0ssd0JBQXdCLEVBQUVySCxPQUFPO0lBQ3ZGLE1BQU0yRixrQkFBa0IwQix5QkFBeUI0RSxrQkFBa0IsSUFDN0QxRyxjQUFjckksK0JBQStCeUksaUJBQWlCM0Y7SUFFcEUsT0FBT3VGO0FBQ1Q7QUFFTyxTQUFTM0YsMENBQTBDbUUsSUFBSSxFQUFFdUYsc0JBQXNCLEVBQUV0SixPQUFPO0lBQzdGLE1BQU02RCxlQUFleUYsdUJBQXVCTyxlQUFlLElBQ3JEaEosV0FBV2hCLGdDQUFnQ2tFLE1BQU1GLGNBQWM3RDtJQUVyRSxPQUFPYTtBQUNUO0FBRU8sU0FBUzVDLHdCQUF3QjhELFNBQVMsRUFBRS9CLE9BQU87SUFDeEQsTUFBTWlDLGFBQWFGLFVBQVU4SSxHQUFHLENBQUMsQ0FBQzNKO1FBQ2hDLE1BQU1VLE9BQU83RCxpQkFBaUJtRCxVQUFVbEI7UUFFeEMsT0FBTzRCO0lBQ1Q7SUFFQSxPQUFPSztBQUNUO0FBRU8sU0FBUy9GLGlDQUFpQytJLGNBQWMsRUFBRWpGLE9BQU87SUFDdEUsTUFBTTRNLGlCQUFpQjNILGVBQWU0SCxpQkFBaUIsSUFDakQxSCxpQkFBaUJ5SCxlQUFlL0IsR0FBRyxDQUFDLENBQUN6RztRQUNuQyxNQUFNQyxZQUFZeEksMkJBQTJCdUksZUFBZXBFO1FBRTVELE9BQU9xRTtJQUNUO0lBRU4sT0FBT2M7QUFDVDtBQUVPLFNBQVNqSywyQ0FBMkMwTSxtQkFBbUIsRUFBRTVILE9BQU87SUFDckYsTUFBTThNLHNCQUFzQmxGLG9CQUFvQmlELEdBQUcsQ0FBQyxDQUFDL0Q7UUFDbkQsTUFBTUcsaUJBQWlCbE0scUNBQXFDK0wsb0JBQW9COUc7UUFFaEYsT0FBT2lIO0lBQ1Q7SUFFQSxPQUFPNkY7QUFDVDtBQUVPLFNBQVM3TiwyREFBMkQ4RSxJQUFJLEVBQUU2RSx1QkFBdUIsRUFBRTVJLE9BQU87SUFDL0csTUFBTStNLDBCQUEwQm5FLHdCQUF3Qm9FLDBCQUEwQixJQUM1RWxFLDJCQUEyQmlFLHdCQUF3QmxDLEdBQUcsQ0FBQyxDQUFDdkI7UUFDdEQsTUFBTTJELHFCQUFxQmpPLG9EQUFvRCtFLE1BQU11Rix3QkFBd0J0SjtRQUU3RyxPQUFPaU47SUFDVDtJQUVOLE9BQU9uRTtBQUNUIn0=