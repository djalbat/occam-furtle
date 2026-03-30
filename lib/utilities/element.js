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
    const { Step } = _elements.default, node = stepNode, string = context.nodeAsString(node), lineIndex = null, arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variableAssigments = variableAssignmentsFromStepNode(stepNode, context);
    context = null;
    const step = new Step(context, string, node, lineIndex, arrayAssignment, objectAssigment, variableAssigments);
    return step;
}
function someFromSomeNode(someNode, context) {
    const { Some } = _elements.default, node = someNode, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = someString, lineIndex = null;
    context = null;
    const some = new Some(context, string, node, lineIndex, variable, anonymousProcedure);
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
    ], termString = (0, _string.termStringFromProperties)(properties, context), string = termString, lineIndex = null;
    context = null;
    const term = new Term(context, string, node, lineIndex, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
    return term;
}
function termsFromTermsNode(termsNode, context) {
    const { Terms } = _elements.default, node = termsNode, string = context.nodeAsString(node), termNodes = termsNode.getTermNodes(), termsArray = termsArrayFromTermNodes(termNodes, context), array = termsArray, lineIndex = null;
    context = null;
    const terms = new Terms(context, string, node, lineIndex, array);
    return terms;
}
function errorFromErrorNode(errorNode, context) {
    const { Error } = _elements.default, node = errorNode, string = context.nodeAsString(node), lineIndex = null;
    context = null;
    const error = new Error(context, string, node, lineIndex);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    const { Every } = _elements.default, node = everyNode, variable = variableFromEveryNode(everyNode, context), anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = everyString, lineIndex = null;
    context = null;
    const every = new Every(context, string, node, lineIndex, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    const { Label } = _elements.default, node = labelNode, string = context.nodeAsString(node), lineIndex = null, name = nameFromLabelNode(labelNode, context);
    context = null;
    const label = new Label(context, string, node, lineIndex, name);
    return label;
}
function reduceFromReduceNode(reduceNode, context) {
    const { Reduce } = _elements.default, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString, lineIndex = null;
    context = null;
    const reduce = new Reduce(context, string, node, lineIndex, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    const { Ternary } = _elements.default, node = ternaryNode, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString, lineIndex = null;
    context = null;
    const ternary = new Ternary(context, string, node, lineIndex, term, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, string = context.nodeAsString(node), lineIndex = null, type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionFromVariableNode(variableNode, context);
    context = null;
    const variable = new Variable(context, string, node, lineIndex, type, name, expression);
    return variable;
}
function referenceFromReferenceNode(referenceNode, context) {
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), lineIndex = null, name = nameFromReferenceNode(referenceNode, context);
    context = null;
    const reference = new Reference(context, string, node, lineIndex, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    let parameter = null;
    const type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        const { Parameter } = _elements.default, node = parameterNode, string = context.nodeAsString(node), lineIndex = null, name = nameFromParaneterNode(parameterNode, context);
        context = null;
        parameter = new Parameter(context, string, node, lineIndex, type, name);
    }
    return parameter;
}
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    const { NodeQuery } = _elements.default, node = nodeQueryNode, string = context.nodeAsString(node), lineIndex = null, variable = variableFromNodeQueryNode(nodeQueryNode, context), query = queryFromNodeQueryNode(nodeQueryNode, context);
    context = null;
    const nodeQuery = new NodeQuery(context, string, node, lineIndex, variable, query);
    return nodeQuery;
}
function primitiveFromPrimitiveNode(primitiveNode, context) {
    const { Primitive } = _elements.default, node = primitiveNode, string = context.nodeAsString(node), lineIndex = null, type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context);
    context = null;
    const primitive = new Primitive(context, string, node, lineIndex, type, value);
    return primitive;
}
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    const { NodesQuery } = _elements.default, node = nodesQueryNode, string = context.nodeAsString(node), lineIndex = null, variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context);
    context = null;
    const nodesQuery = new NodesQuery(context, string, node, lineIndex, variable, query);
    return nodesQuery;
}
function parametersFromParametersNode(parametersNode, context) {
    const { Parameters } = _elements.default, node = parametersNode, string = context.nodeAsString(node), lineIndex = null, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray; ///
    context = null;
    const parameters = new Parameters(context, string, node, lineIndex, array);
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
    ], expressionString = (0, _string.expressionStringFromProperties)(properties, context), string = expressionString, lineIndex = null;
    context = null;
    const expression = new Expression(context, string, node, lineIndex, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    const { ReturnBlock } = _elements.default, node = returnBlockNode, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, lineIndex = null;
    context = null;
    const returnBlock = new ReturnBlock(context, string, node, lineIndex, steps, nonsensical, returnStatement);
    return returnBlock;
}
function negatedTermFromNegatedTermNode(negatedTermNode, context) {
    const { NegatedTerm } = _elements.default, node = negatedTermNode, string = context.nodeAsString(node), lineIndex = null, termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(context, string, node, lineIndex, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    const { LogicalTerm } = _elements.default, node = logicalTermNode, string = context.nodeAsString(node), lineIndex = null, type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(context, string, node, lineIndex, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    const { BracketedTerm } = _elements.default, node = bracketedTermNode, string = context.nodeAsString(node), lineIndex = null, term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(context, string, node, lineIndex, term);
    return bracketedTerm;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    const { ProcedureCall } = _elements.default, node = procedureCallNode, string = context.nodeAsString(node), lineIndex = null, reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context);
    context = null;
    const procedureCall = new ProcedureCall(context, string, node, lineIndex, reference, terms);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    const { NamedParameter } = _elements.default, node = namedParameterNode, string = context.nodeAsString(node), lineIndex = null, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), alias = aliasFromNamedParameterNode(namedParameterNode, context);
    context = null;
    const namedParameter = new NamedParameter(context, string, node, lineIndex, type, name, alias);
    return namedParameter;
}
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    const { ComparisonTerm } = _elements.default, node = comparisonTermNode, string = context.nodeAsString(node), lineIndex = null, negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(context, string, node, lineIndex, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Procedure } = _elements.default, node = procedureDeclarationNode, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, lineIndex = null, procedure = new Procedure(context, string, node, lineIndex, type, label, parameters, returnBlock);
    return procedure;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    const { NamedParameters } = _elements.default, node = namedParametersNode, string = context.nodeAsString(node), lineIndex = null, namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), array = namedParametersArray; ///
    context = null;
    const namedParameters = new NamedParameters(context, string, node, lineIndex, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const { ArrayAssignment } = _elements.default, node = arrayAssignmentNode, string = context.nodeAsString(node), lineIndex = null, variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context);
    context = null;
    const arrayAssignment = new ArrayAssignment(context, string, node, lineIndex, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    const { ReturnStatement } = _elements.default, node = returnStatementNode, string = context.nodeAsString(node), lineIndex = null, term = termFromReturnStatementNode(returnStatementNode, context);
    context = null;
    const returnStatement = new ReturnStatement(context, string, node, lineIndex, term);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    const namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    const { ObjectAssigment } = _elements.default, node = objectAssignmentNode, string = context.nodeAsString(node), lineIndex = null, variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context);
    context = null;
    const objectAssignment = new ObjectAssigment(context, string, node, lineIndex, variable, namedParameters);
    return objectAssignment;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const { AnonymousProcedure } = _elements.default, node = anonymousProcedureNode, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, lineIndex = null;
    context = null;
    const anonymousProcedure = new AnonymousProcedure(context, string, node, lineIndex, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    const { VariableAssignments } = _elements.default, node = variableAssignmentsNode, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, lineIndex = null;
    context = null;
    const variableAssignments = new VariableAssignments(context, string, node, lineIndex, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { ProcedureDeclaration } = _elements.default, node = procedureDeclarationNode, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, lineIndex = null;
    context = null;
    const procedureDeclaration = new ProcedureDeclaration(context, string, node, lineIndex, procedure);
    return procedureDeclaration;
}
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const { VariableAssignment } = _elements.default, node = variableAssignmentNode, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, lineIndex = null, assignment = new VariableAssignment(context, string, node, lineIndex, variable, expression);
    return assignment;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, name = nameFromVariableNode(variableNode), expression = expressionFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, lineIndex = null, variable = new Variable(context, string, node, lineIndex, type, name, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbWVudHMpO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc29tZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc29tZSA9IG5ldyBTb21lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgcHJpbWl0aXZlLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgICAgIGxvZ2ljYWxUZXJtLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0sXG4gICAgICAgICAgY29tcGFyaXNvblRlcm1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybVN0cmluZyA9IHRlcm1TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBldmVyeU5vZGUsIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBldmVyeSA9IG5ldyBFdmVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZHVjZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2VTdHJpbmcgPSByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHJlZHVjZVN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZSA9IG5ldyBSZWR1Y2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybmFyeU5vZGUsIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmltaXRpdmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5OyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdGVybSxcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuQmxvY2tOb2RlLCAvLy9cbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsICAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRUZXJtID0gbmV3IE5lZ2F0ZWRUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCB0ZXJtKTtcblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbmV3IExvZ2ljYWxUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBuZXcgQnJhY2tldGVkVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHJlZmVyZW5jZSwgdGVybXMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb25UZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBuZXcgQ29tcGFyaXNvblRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gcHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgIC8vL1xuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgcHJvY2VkdXJlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUodHlwZSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVOb2RlID0gdGVybU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWUgPSBwcmltaXRpdmVOb2RlLmdldFZhbHVlKCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRUZXJtID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXROZWdhdGVkVGVybU5vZGUoKTtcblxuICBpZiAobmVnYXRlZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TG9naWNhbFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uVGVybSA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvblRlcm1Ob2RlID0gdGVybU5PZGUuZ2V0Q29tcGFyaXNvblRlcm1Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRUZXJtc05vZGUoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYWxpYXMgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0QWxpYXMoKTtcblxuICByZXR1cm4gYWxpYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uVGVybU5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxUZXJtTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUxhYmVsTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tVGVybU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsInJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJ0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwidGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybmFyeU5vZGUiLCJ0ZXJtc0FycmF5RnJvbVRlcm1Ob2RlcyIsInRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwidGVybXNGcm9tVGVybXNOb2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByaW1pdGl2ZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVByaW1pdGl2ZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21SZWR1Y2VOb2RlIiwidmFyaWFibGVGcm9tU29tZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsIm5vZGUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJsaW5lSW5kZXgiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbWVudHMiLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwicHJvcGVydGllcyIsInRlcm1TdHJpbmciLCJ0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ0ZXJtIiwidGVybXNOb2RlIiwiVGVybXMiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0FycmF5IiwiYXJyYXkiLCJ0ZXJtcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwiZXhwcmVzc2lvbiIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwiUGFyYW1ldGVyIiwibm9kZVF1ZXJ5Tm9kZSIsIk5vZGVRdWVyeSIsInF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJpbWl0aXZlTm9kZSIsIlByaW1pdGl2ZSIsInZhbHVlIiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtdGVyc0FycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJuZWdhdGVkVGVybU5vZGUiLCJOZWdhdGVkVGVybSIsImdldFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiTG9naWNhbFRlcm0iLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJCcmFja2V0ZWRUZXJtIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwiTmFtZWRQYXJhbWV0ZXIiLCJhbGlhcyIsIm5hbWVkUGFyYW1ldGVyIiwiY29tcGFyaXNvblRlcm1Ob2RlIiwiQ29tcGFyaXNvblRlcm0iLCJuZWdhdGVkIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInByb2NlZHVyZSIsIm5hbWVkUGFyYW1ldGVyc05vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50IiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXROYW1lIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0UHJpbWl0aXZlTm9kZSIsImdldFR5cGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXRWYWx1ZSIsImdldEV2ZXJ5Tm9kZSIsImdldE5lZ2F0ZWRUZXJtTm9kZSIsImdldExvZ2ljYWxUZXJtTm9kZSIsIkJPT0xFQU5fVFlQRSIsImdldEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtTk9kZSIsImdldENvbXBhcmlzb25UZXJtTm9kZSIsImdldFRlcm1zTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImlzRGlzanVuY3Rpb24iLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdu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