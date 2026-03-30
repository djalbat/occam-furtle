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
    const { Step } = _elements.default, node = stepNode, string = context.nodeAsString(node), lineIndex1 = null, arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variableAssigments = variableAssignmentsFromStepNode(stepNode, context);
    context = null;
    const step = new Step(context, string, node, lineIndex1, arrayAssignment, objectAssigment, variableAssigments);
    return step;
}
function someFromSomeNode(someNode, context) {
    const { Some } = _elements.default, node = someNode, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = someString, lineIndex1 = null;
    context = null;
    const some = new Some(context, string, node, lineIndex1, variable, anonymousProcedure);
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
    ], termString = (0, _string.termStringFromProperties)(properties, context), string = termString, lineIndex1 = null;
    context = null;
    const term = new Term(context, string, node, lineIndex1, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
    return term;
}
function termsFromTermsNode(termsNode, context) {
    const { Terms } = _elements.default, node = termsNode, string = context.nodeAsString(node), termNodes = termsNode.getTermNodes(), termsArray = termsArrayFromTermNodes(termNodes, context), array = termsArray, lineIndex1 = null;
    context = null;
    const terms = new Terms(context, string, node, lineIndex1, array);
    return terms;
}
function errorFromErrorNode(errorNode, context) {
    const { Error } = _elements.default, node = errorNode, string = context.nodeAsString(node), lineIndex1 = null;
    context = null;
    const error = new Error(context, string, node, lineIndex1);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    const { Every } = _elements.default, node = everyNode, variable = variableFromEveryNode(everyNode, context), anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = everyString, lineIndex1 = null;
    context = null;
    const every = new Every(context, string, node, lineIndex1, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    const { Label } = _elements.default, node = labelNode, string = context.nodeAsString(node), lineIndex1 = null, name = nameFromLabelNode(labelNode, context);
    context = null;
    const label = new Label(context, string, node, lineIndex1, name);
    return label;
}
function reduceFromReduceNode(reduceNode, context) {
    const { Reduce } = _elements.default, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString, lineIndex1 = null;
    context = null;
    const reduce = new Reduce(context, string, node, lineIndex1, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    const { Ternary } = _elements.default, node = ternaryNode, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString, lineIndex1 = null;
    context = null;
    const ternary = new Ternary(context, string, node, lineIndex1, term, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, string = context.nodeAsString(node), lineIndex1 = null, type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionFromVariableNode(variableNode, context);
    context = null;
    const variable = new Variable(context, string, node, lineIndex1, type, name, expression);
    return variable;
}
function referenceFromReferenceNode(referenceNode, context) {
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), lineIndex1 = null, name = nameFromReferenceNode(referenceNode, context);
    context = null;
    const reference = new Reference(context, string, node, lineIndex1, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    let parameter = null;
    const type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        const { Parameter } = _elements.default, node = parameterNode, string = context.nodeAsString(node), lineIndex1 = null, name = nameFromParaneterNode(parameterNode, context);
        context = null;
        parameter = new Parameter(context, string, node, lineIndex1, type, name);
    }
    return parameter;
}
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    const { NodeQuery } = _elements.default, node = nodeQueryNode, string = context.nodeAsString(node), lineIndex1 = null, variable = variableFromNodeQueryNode(nodeQueryNode, context), query = queryFromNodeQueryNode(nodeQueryNode, context);
    context = null;
    const nodeQuery = new NodeQuery(context, string, node, lineIndex1, variable, query);
    return nodeQuery;
}
function primitiveFromPrimitiveNode(primitiveNode, context) {
    const { Primitive } = _elements.default, node = primitiveNode, string = context.nodeAsString(node), lineIndex1 = null, type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context);
    context = null;
    const primitive = new Primitive(context, string, node, lineIndex1, type, value);
    return primitive;
}
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    const { NodesQuery } = _elements.default, node = nodesQueryNode, string = context.nodeAsString(node), lineIndex1 = null, variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context);
    context = null;
    const nodesQuery = new NodesQuery(context, string, node, lineIndex1, variable, query);
    return nodesQuery;
}
function parametersFromParametersNode(parametersNode, context) {
    const { Parameters } = _elements.default, node = parametersNode, string = context.nodeAsString(node), lineIndex1 = null, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray; ///
    context = null;
    const parameters = new Parameters(context, string, node, lineIndex1, array);
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
    ], expressionString = (0, _string.expressionStringFromProperties)(properties, context), string = expressionString, lineIndex1 = null;
    context = null;
    const expression = new Expression(context, string, node, lineIndex1, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    const { ReturnBlock } = _elements.default, node = returnBlockNode, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, lineIndex1 = null;
    context = null;
    const returnBlock = new ReturnBlock(context, string, node, lineIndex1, steps, nonsensical, returnStatement);
    return returnBlock;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    const { ProcedureCall } = _elements.default, node = procedureCallNode, string = context.nodeAsString(node), lineIndex1 = null, reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context);
    context = null;
    const procedureCall = new ProcedureCall(context, string, node, lineIndex1, reference, terms);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    const { NamedParameter } = _elements.default, node = namedParameterNode, string = context.nodeAsString(node), lineIndex1 = null, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), alias = aliasFromNamedParameterNode(namedParameterNode, context);
    context = null;
    const namedParameter = new NamedParameter(context, string, node, lineIndex1, type, name, alias);
    return namedParameter;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    const { NamedParameters } = _elements.default, node = namedParametersNode, string = context.nodeAsString(node), lineIndex1 = null, namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), array = namedParametersArray; ///
    context = null;
    const namedParameters = new NamedParameters(context, string, node, lineIndex1, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const { ArrayAssignment } = _elements.default, node = arrayAssignmentNode, string = context.nodeAsString(node), lineIndex1 = null, variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context);
    context = null;
    const arrayAssignment = new ArrayAssignment(context, string, node, lineIndex1, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    const { ReturnStatement } = _elements.default, node = returnStatementNode, string = context.nodeAsString(node), lineIndex1 = null, term = termFromReturnStatementNode(returnStatementNode, context);
    context = null;
    const returnStatement = new ReturnStatement(context, string, node, lineIndex1, term);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    const namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    const { ObjectAssigment } = _elements.default, node = objectAssignmentNode, string = context.nodeAsString(node), lineIndex1 = null, variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context);
    context = null;
    const objectAssignment = new ObjectAssigment(context, string, node, lineIndex1, variable, namedParameters);
    return objectAssignment;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const { AnonymousProcedure } = _elements.default, node = anonymousProcedureNode, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, lineIndex1 = null;
    context = null;
    const anonymousProcedure = new AnonymousProcedure(context, string, node, lineIndex1, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    const { VariableAssignments } = _elements.default, node = variableAssignmentsNode, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, lineIndex1 = null;
    context = null;
    const variableAssignments = new VariableAssignments(context, string, node, lineIndex1, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { ProcedureDeclaration } = _elements.default, node = procedureDeclarationNode, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, lineIndex1 = null;
    context = null;
    const procedureDeclaration = new ProcedureDeclaration(context, string, node, lineIndex1, procedure);
    return procedureDeclaration;
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
function negatedTermFromNegatedTermNode(negatedTermNode, context) {
    const { NegatedTerm } = _elements.default, node = negatedTermNode, string = context.nodeAsString(node), termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(context, string, node, lineIndex, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    const { LogicalTerm } = _elements.default, node = logicalTermNode, string = context.nodeAsString(node), type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(context, string, node, lineIndex, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, name = nameFromVariableNode(variableNode), expression = expressionFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(context, string, node, lineIndex, type, name, expression);
    return variable;
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
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    const { BracketedTerm } = _elements.default, node = bracketedTermNode, string = context.nodeAsString(node), term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(context, string, node, lineIndex, term);
    return bracketedTerm;
}
function expressionFromVariableAssignmentNode(variableAssigmentNode, context) {
    const expressionNode = variableAssigmentNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function parametersFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const parametersNode = anonymousProcedureNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    const { ComparisonTerm } = _elements.default, node = comparisonTermNode, string = context.nodeAsString(node), negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(context, string, node, lineIndex, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Procedure } = _elements.default, node = procedureDeclarationNode, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, procedure = new Procedure(context, string, node, lineIndex, type, label, parameters, returnBlock);
    return procedure;
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
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const { VariableAssignment } = _elements.default, node = variableAssignmentNode, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(context, string, node, lineIndex, variable, expression);
    return assignment;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbWVudHMpO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc29tZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgc29tZSA9IG5ldyBTb21lKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgcHJpbWl0aXZlLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgICAgIGxvZ2ljYWxUZXJtLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0sXG4gICAgICAgICAgY29tcGFyaXNvblRlcm1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybVN0cmluZyA9IHRlcm1TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGw7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBldmVyeU5vZGUsIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBldmVyeSA9IG5ldyBFdmVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZHVjZU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2VTdHJpbmcgPSByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHJlZHVjZVN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZSA9IG5ldyBSZWR1Y2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybmFyeU5vZGUsIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmltaXRpdmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5OyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdGVybSxcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuQmxvY2tOb2RlLCAvLy9cbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsICAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgcmVmZXJlbmNlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFsaWFzID0gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJOb2RlcyA9IG5hbWVkUGFyYW1ldGVyc05vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlcnNBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5KSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgbGluZUluZGV4ID0gbnVsbDtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBsaW5lSW5kZXggPSBudWxsO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVOb2RlID0gdGVybU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybSA9IG51bGw7XG5cbiAgY29uc3QgdGVybU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWUgPSBwcmltaXRpdmVOb2RlLmdldFZhbHVlKCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRUZXJtID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXROZWdhdGVkVGVybU5vZGUoKTtcblxuICBpZiAobmVnYXRlZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TG9naWNhbFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uVGVybSA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvblRlcm1Ob2RlID0gdGVybU5PZGUuZ2V0Q29tcGFyaXNvblRlcm1Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRUZXJtc05vZGUoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYWxpYXMgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0QWxpYXMoKTtcblxuICByZXR1cm4gYWxpYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uVGVybU5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxUZXJtTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZXcgTmVnYXRlZFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIHRlcm0pO1xuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBuZXcgTG9naWNhbFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IG5ldyBCcmFja2V0ZWRUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCB0ZXJtKTtcblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbWVudE5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gbmV3IENvbXBhcmlzb25UZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBuZWdhdGVkLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSh0eXBlLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUxhYmVsTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tVGVybU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsInJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJ0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwidGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybmFyeU5vZGUiLCJ0ZXJtc0FycmF5RnJvbVRlcm1Ob2RlcyIsInRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwidGVybXNGcm9tVGVybXNOb2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByaW1pdGl2ZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVByaW1pdGl2ZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21SZWR1Y2VOb2RlIiwidmFyaWFibGVGcm9tU29tZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsIm5vZGUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJsaW5lSW5kZXgiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbWVudHMiLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwicHJvcGVydGllcyIsInRlcm1TdHJpbmciLCJ0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJ0ZXJtIiwidGVybXNOb2RlIiwiVGVybXMiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0FycmF5IiwiYXJyYXkiLCJ0ZXJtcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwiZXhwcmVzc2lvbiIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwiUGFyYW1ldGVyIiwibm9kZVF1ZXJ5Tm9kZSIsIk5vZGVRdWVyeSIsInF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJpbWl0aXZlTm9kZSIsIlByaW1pdGl2ZSIsInZhbHVlIiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtdGVyc0FycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZ2V0TmFtZSIsImdldFRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0UHJpbWl0aXZlTm9kZSIsImdldFR5cGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXRWYWx1ZSIsImdldEV2ZXJ5Tm9kZSIsIm5lZ2F0ZWRUZXJtTm9kZSIsImdldE5lZ2F0ZWRUZXJtTm9kZSIsImxvZ2ljYWxUZXJtTm9kZSIsImdldExvZ2ljYWxUZXJtTm9kZSIsIkJPT0xFQU5fVFlQRSIsImdldEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiYnJhY2tldGVkVGVybU5vZGUiLCJnZXRCcmFja2V0ZWRUZXJtTm9kZSIsInRlcm1OT2RlIiwiY29tcGFyaXNvblRlcm1Ob2RlIiwiZ2V0Q29tcGFyaXNvblRlcm1Ob2RlIiwiZ2V0VGVybXNOb2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwibGVmdFRlcm0iLCJnZXRBcnJheUFzc2lnbm1lbnROb2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldElmRXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlUXVlcnlOb2RlIiwiZ2V0QWxpYXMiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm0iLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZGlzanVuY3Rpb24iLCJpc0Rpc2p1bmN0aW9uIiwiTmVnYXRlZFRlcm0iLCJMb2dpY2FsVGVybSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVTdHJpbmdGcm9tTmFtZSIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsImdldExhYmVsTm9kZSIsImdldFJldHVyblN0YXRlbWVudE5vZGUiLCJCcmFja2V0ZWRUZXJtIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwiQ29tcGFyaXNvblRlcm0iLCJQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUEyekJnQkE7ZUFBQUE7O1FBMVlBQztlQUFBQTs7UUFpaUJBQztlQUFBQTs7UUE4Q0FDO2VBQUFBOztRQWhJQUM7ZUFBQUE7O1FBbGdCQUM7ZUFBQUE7O1FBOFpBQztlQUFBQTs7UUFtUkFDO2VBQUFBOztRQXpWQUM7ZUFBQUE7O1FBaVhBQztlQUFBQTs7UUE5VkFDO2VBQUFBOztRQWtMQUM7ZUFBQUE7O1FBOUNBQztlQUFBQTs7UUE1d0JBQztlQUFBQTs7UUFhQUM7ZUFBQUE7O1FBZ2dCQUM7ZUFBQUE7O1FBbFZBQztlQUFBQTs7UUF5WUFDO2VBQUFBOztRQStXQUM7ZUFBQUE7O1FBcUNBQztlQUFBQTs7UUFwVUFDO2VBQUFBOztRQW1EQUM7ZUFBQUE7O1FBaUxBQztlQUFBQTs7UUEzMUJBQztlQUFBQTs7UUFtNkJBQztlQUFBQTs7UUE3SUFDO2VBQUFBOztRQS9IQUM7ZUFBQUE7O1FBd0pBQztlQUFBQTs7UUF2U0FDO2VBQUFBOztRQXBLQUM7ZUFBQUE7O1FBNlNBQztlQUFBQTs7UUF4T0FDO2VBQUFBOztRQU1BQztlQUFBQTs7UUEzQ0FDO2VBQUFBOztRQXBLQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUE2Q0FDO2VBQUFBOztRQXl3QkFDO2VBQUFBOztRQTdUQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUF2U0FDO2VBQUFBOztRQXFMQUM7ZUFBQUE7O1FBL2tCQUM7ZUFBQUE7O1FBb25CQUM7ZUFBQUE7O1FBdGxCQUM7ZUFBQUE7O1FBeW9CQUM7ZUFBQUE7O1FBcmVBQztlQUFBQTs7UUFzYUFDO2VBQUFBOztRQTVuQkFDO2VBQUFBOztRQW8zQkFDO2VBQUFBOztRQXRDQUM7ZUFBQUE7O1FBN3dCQUM7ZUFBQUE7O1FBMjFCQUM7ZUFBQUE7O1FBaURBQztlQUFBQTs7UUExNkJBQztlQUFBQTs7UUErUkFDO2VBQUFBOztRQWtkQUM7ZUFBQUE7O1FBanBCQUM7ZUFBQUE7O1FBb0lBQztlQUFBQTs7UUF1b0JBQztlQUFBQTs7UUFsZ0JBQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBc0VBQztlQUFBQTs7UUFoaUJBQztlQUFBQTs7UUFpd0JBQztlQUFBQTs7UUEvc0JBQztlQUFBQTs7UUFxNUJBQztlQUFBQTs7UUEvTkFDO2VBQUFBOztRQWlRQUM7ZUFBQUE7O1FBdnpCQUM7ZUFBQUE7O1FBMHVCQUM7ZUFBQUE7O1FBM3BCQUM7ZUFBQUE7O1FBK2xCQUM7ZUFBQUE7O1FBNUlBQztlQUFBQTs7UUFwUkFDO2VBQUFBOztRQXZpQkFDO2VBQUFBOztRQWhCQUM7ZUFBQUE7O1FBbXFCQUM7ZUFBQUE7O1FBMENBQztlQUFBQTs7UUFsS0FDO2VBQUFBOztRQThGQUM7ZUFBQUE7O1FBbUtBQztlQUFBQTs7UUE1d0JBQztlQUFBQTs7UUFtYkFDO2VBQUFBOztRQXVxQkFDO2VBQUFBOztRQTdZQUM7ZUFBQUE7O1FBanJCQUM7ZUFBQUE7O1FBeW5CQUM7ZUFBQUE7O1FBN2lCQUM7ZUFBQUE7O1FBcWZBQztlQUFBQTs7UUF1SEFDO2VBQUFBOztRQWpIQUM7ZUFBQUE7O1FBdkhBQztlQUFBQTs7UUFrQkFDO2VBQUFBOztRQTRqQkFDO2VBQUFBOztRQWpHQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUFsZkFDO2VBQUFBOztRQXdGQUM7ZUFBQUE7O1FBbWlCQUM7ZUFBQUE7O1FBMkNBQztlQUFBQTs7UUF4T0FDO2VBQUFBOztRQXBnQkFDO2VBQUFBOztRQWlqQkFDO2VBQUFBOztRQXpkQUM7ZUFBQUE7O1FBeUtBQztlQUFBQTs7UUF3REFDO2VBQUFBOztRQTRRQUM7ZUFBQUE7O1FBOWNBQztlQUFBQTs7UUExRUFDO2VBQUFBOztRQU9BQztlQUFBQTs7UUFzb0JBQztlQUFBQTs7UUFsTUFDO2VBQUFBOztRQTV3QkFDO2VBQUFBOzs7NEJBNUtNO2lFQUVEO3VCQUVRO3dCQWFrRDs7Ozs7O0FBRXhFLFNBQVNyQyxpQkFBaUJzQyxRQUFRLEVBQUVDLE9BQU87SUFDaEQsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsaUJBQVEsRUFDbkJDLE9BQU9KLFVBQ1BLLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWkMsa0JBQWtCcEgsNEJBQTRCNEcsVUFBVUMsVUFDeERRLGtCQUFrQjVFLDZCQUE2Qm1FLFVBQVVDLFVBQ3pEUyxxQkFBcUJ2QixnQ0FBZ0NhLFVBQVVDO0lBRXJFQSxVQUFVO0lBRVYsTUFBTVUsT0FBTyxJQUFJVCxLQUFLRCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXQyxpQkFBaUJDLGlCQUFpQkM7SUFFMUYsT0FBT0M7QUFDVDtBQUVPLFNBQVNsRCxpQkFBaUJtRCxRQUFRLEVBQUVYLE9BQU87SUFDaEQsTUFBTSxFQUFFWSxJQUFJLEVBQUUsR0FBR1YsaUJBQVEsRUFDbkJDLE9BQU9RLFVBQ1BFLFdBQVduQixxQkFBcUJpQixVQUFVWCxVQUMxQ2MscUJBQXFCN0gsK0JBQStCMEgsVUFBVVgsVUFDOURlLGFBQWFDLElBQUFBLG1EQUEyQyxFQUFDSCxVQUFVQyxxQkFDbkVWLFNBQVNXLFlBQ1RULGFBQVk7SUFFbEJOLFVBQVU7SUFFVixNQUFNaUIsT0FBTyxJQUFJTCxLQUFLWixTQUFTSSxRQUFRRCxNQUFNRyxZQUFXTyxVQUFVQztJQUVsRSxPQUFPRztBQUNUO0FBRU8sU0FBU2xELGlCQUFpQm1ELFFBQVEsRUFBRWxCLE9BQU87SUFDaEQsTUFBTSxFQUFFbUIsSUFBSSxFQUFFLEdBQUdqQixpQkFBUSxFQUNuQkMsT0FBT2UsVUFDUEwsV0FBV2xCLHFCQUFxQnVCLFVBQVVsQixVQUMxQ29CLFlBQVloRixzQkFBc0I4RSxVQUFVbEIsVUFDNUNxQixjQUFjaEcsd0JBQXdCNkYsVUFBVWxCLFVBQ2hEc0IsY0FBYzdHLHdCQUF3QnlHLFVBQVVsQixVQUNoRHVCLGdCQUFnQmxJLDBCQUEwQjZILFVBQVVsQixVQUNwRHdCLGlCQUFpQmpJLDJCQUEyQjJILFVBQVVsQixVQUN0RHlCLGFBQWE7UUFDWFo7UUFDQU87UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7S0FDRCxFQUNERSxhQUFhQyxJQUFBQSxnQ0FBd0IsRUFBQ0YsWUFBWXpCLFVBQ2xESSxTQUFTc0IsWUFDVHBCLGFBQVk7SUFFbEJOLFVBQVU7SUFFVixNQUFNNEIsT0FBTyxJQUFJVCxLQUFLbkIsU0FBU0ksUUFBUUQsTUFBTUcsWUFBV08sVUFBVU8sV0FBV0MsYUFBYUMsYUFBYUMsZUFBZUM7SUFFdEgsT0FBT0k7QUFDVDtBQUVPLFNBQVN6RCxtQkFBbUIwRCxTQUFTLEVBQUU3QixPQUFPO0lBQ25ELE1BQU0sRUFBRThCLEtBQUssRUFBRSxHQUFHNUIsaUJBQVEsRUFDcEJDLE9BQU8wQixXQUNQekIsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QjRCLFlBQVlGLFVBQVVHLFlBQVksSUFDbENDLGFBQWFoRSx3QkFBd0I4RCxXQUFXL0IsVUFDaERrQyxRQUFRRCxZQUNSM0IsYUFBWTtJQUVsQk4sVUFBVTtJQUVWLE1BQU1tQyxRQUFRLElBQUlMLE1BQU05QixTQUFTSSxRQUFRRCxNQUFNRyxZQUFXNEI7SUFFMUQsT0FBT0M7QUFDVDtBQUVPLFNBQVN6SSxtQkFBbUIwSSxTQUFTLEVBQUVwQyxPQUFPO0lBQ25ELE1BQU0sRUFBRXFDLEtBQUssRUFBRSxHQUFHbkMsaUJBQVEsRUFDcEJDLE9BQU9pQyxXQUNQaEMsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWTtJQUVsQk4sVUFBVTtJQUVWLE1BQU1zQyxRQUFRLElBQUlELE1BQU1yQyxTQUFTSSxRQUFRRCxNQUFNRztJQUUvQyxPQUFPZ0M7QUFDVDtBQUVPLFNBQVMzSSxtQkFBbUI0SSxTQUFTLEVBQUV2QyxPQUFPO0lBQ25ELE1BQU0sRUFBRXdDLEtBQUssRUFBRSxHQUFHdEMsaUJBQVEsRUFDcEJDLE9BQU9vQyxXQUNQMUIsV0FBV3hCLHNCQUFzQmtELFdBQVd2QyxVQUM1Q2MscUJBQXFCL0gsZ0NBQWdDd0osV0FBV3ZDLFVBQ2hFeUMsY0FBY0MsSUFBQUEsb0RBQTRDLEVBQUM3QixVQUFVQyxxQkFDckVWLFNBQVNxQyxhQUNUbkMsYUFBWTtJQUVsQk4sVUFBVTtJQUVWLE1BQU0yQyxRQUFRLElBQUlILE1BQU14QyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXTyxVQUFVQztJQUVwRSxPQUFPNkI7QUFDVDtBQUVPLFNBQVN2SSxtQkFBbUJ3SSxTQUFTLEVBQUU1QyxPQUFPO0lBQ25ELE1BQU0sRUFBRTZDLEtBQUssRUFBRSxHQUFHM0MsaUJBQVEsRUFDcEJDLE9BQU95QyxXQUNQeEMsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWSxNQUNad0MsT0FBT3BJLGtCQUFrQmtJLFdBQVc1QztJQUUxQ0EsVUFBVTtJQUVWLE1BQU0rQyxRQUFRLElBQUlGLE1BQU03QyxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXd0M7SUFFMUQsT0FBT0M7QUFDVDtBQUVPLFNBQVNuRyxxQkFBcUJvRyxVQUFVLEVBQUVoRCxPQUFPO0lBQ3RELE1BQU0sRUFBRWlELE1BQU0sRUFBRSxHQUFHL0MsaUJBQVEsRUFDckJDLE9BQU82QyxZQUNQbkMsV0FBV3BCLHVCQUF1QnVELFlBQVloRCxVQUM5Q2tELG9CQUFvQi9JLGdDQUFnQzZJLFlBQVloRCxVQUNoRWMscUJBQXFCOUgsaUNBQWlDZ0ssWUFBWWhELFVBQ2xFbUQsZUFBZUMsSUFBQUEsc0VBQThELEVBQUN2QyxVQUFVcUMsbUJBQW1CcEMscUJBQzNHVixTQUFTK0MsY0FDVDdDLGFBQVk7SUFFbEJOLFVBQVU7SUFFVixNQUFNcUQsU0FBUyxJQUFJSixPQUFPakQsU0FBU0ksUUFBUUQsTUFBTUcsWUFBV08sVUFBVXFDLG1CQUFtQnBDO0lBRXpGLE9BQU91QztBQUNUO0FBRU8sU0FBU2hGLHVCQUF1QmlGLFdBQVcsRUFBRXRELE9BQU87SUFDekQsTUFBTSxFQUFFdUQsT0FBTyxFQUFFLEdBQUdyRCxpQkFBUSxFQUN0QkMsT0FBT21ELGFBQ1AxQixPQUFPNUQsb0JBQW9Cc0YsYUFBYXRELFVBQ3hDd0QsZUFBZXRKLDRCQUE0Qm9KLGFBQWF0RCxVQUN4RHlELGlCQUFpQmhLLDhCQUE4QjZKLGFBQWF0RCxVQUM1RDBELGdCQUFnQkMsSUFBQUEsNkJBQXFCLEVBQUMvQixPQUN0Q3hCLFNBQVNzRCxlQUNUcEQsYUFBWTtJQUVsQk4sVUFBVTtJQUVWLE1BQU00RCxVQUFVLElBQUlMLFFBQVF2RCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXc0IsTUFBTTRCLGNBQWNDO0lBRWxGLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTOUQseUJBQXlCK0QsWUFBWSxFQUFFN0QsT0FBTztJQUM1RCxNQUFNLEVBQUU4RCxRQUFRLEVBQUUsR0FBRzVELGlCQUFRLEVBQ3ZCQyxPQUFPMEQsY0FDUHpELFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWnlELE9BQU9qRixxQkFBcUIrRSxjQUFjN0QsVUFDMUM4QyxPQUFPaEkscUJBQXFCK0ksY0FBYzdELFVBQzFDZ0UsYUFBYS9KLDJCQUEyQjRKLGNBQWM3RDtJQUU1REEsVUFBVTtJQUVWLE1BQU1hLFdBQVcsSUFBSWlELFNBQVM5RCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXeUQsTUFBTWpCLE1BQU1rQjtJQUU1RSxPQUFPbkQ7QUFDVDtBQUVPLFNBQVMvRCwyQkFBMkJtSCxhQUFhLEVBQUVqRSxPQUFPO0lBQy9ELE1BQU0sRUFBRWtFLFNBQVMsRUFBRSxHQUFHaEUsaUJBQVEsRUFDeEJDLE9BQU84RCxlQUNQN0QsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWSxNQUNad0MsT0FBT2pJLHNCQUFzQm9KLGVBQWVqRTtJQUVsREEsVUFBVTtJQUVWLE1BQU1tRSxZQUFZLElBQUlELFVBQVVsRSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXd0M7SUFFbEUsT0FBT3FCO0FBQ1Q7QUFFTyxTQUFTdEksMkJBQTJCdUksYUFBYSxFQUFFcEUsT0FBTztJQUMvRCxJQUFJcUUsWUFBWTtJQUVoQixNQUFNTixPQUFPdEYsc0JBQXNCMkYsZUFBZXBFO0lBRWxELElBQUkrRCxTQUFTLE1BQU07UUFDakIsTUFBTSxFQUFFTyxTQUFTLEVBQUUsR0FBR3BFLGlCQUFRLEVBQ3hCQyxPQUFPaUUsZUFDUGhFLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWndDLE9BQU9sSSxzQkFBc0J3SixlQUFlcEU7UUFFbERBLFVBQVU7UUFFVnFFLFlBQVksSUFBSUMsVUFBVXRFLFNBQVNJLFFBQVFELE1BQU1HLFlBQVd5RCxNQUFNakI7SUFDcEU7SUFFQSxPQUFPdUI7QUFDVDtBQUVPLFNBQVM5SSwyQkFBMkJnSixhQUFhLEVBQUV2RSxPQUFPO0lBQy9ELE1BQU0sRUFBRXdFLFNBQVMsRUFBRSxHQUFHdEUsaUJBQVEsRUFDeEJDLE9BQU9vRSxlQUNQbkUsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWSxNQUNaTyxXQUFXdkIsMEJBQTBCaUYsZUFBZXZFLFVBQ3BEeUUsUUFBUWhJLHVCQUF1QjhILGVBQWV2RTtJQUVwREEsVUFBVTtJQUVWLE1BQU0wRSxZQUFZLElBQUlGLFVBQVV4RSxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXTyxVQUFVNEQ7SUFFNUUsT0FBT0M7QUFDVDtBQUVPLFNBQVN2SSwyQkFBMkJ3SSxhQUFhLEVBQUUzRSxPQUFPO0lBQy9ELE1BQU0sRUFBRTRFLFNBQVMsRUFBRSxHQUFHMUUsaUJBQVEsRUFDeEJDLE9BQU93RSxlQUNQdkUsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWSxNQUNaeUQsT0FBT3JGLHNCQUFzQmlHLGVBQWUzRSxVQUM1QzZFLFFBQVE5Rix1QkFBdUI0RixlQUFlM0U7SUFFcERBLFVBQVU7SUFFVixNQUFNb0IsWUFBWSxJQUFJd0QsVUFBVTVFLFNBQVNJLFFBQVFELE1BQU1HLFlBQVd5RCxNQUFNYztJQUV4RSxPQUFPekQ7QUFDVDtBQUVPLFNBQVMzRiw2QkFBNkJxSixjQUFjLEVBQUU5RSxPQUFPO0lBQ2xFLE1BQU0sRUFBRStFLFVBQVUsRUFBRSxHQUFHN0UsaUJBQVEsRUFDekJDLE9BQU8yRSxnQkFDUDFFLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWk8sV0FBV3RCLDJCQUEyQnVGLGdCQUFnQjlFLFVBQ3REeUUsUUFBUS9ILHdCQUF3Qm9JLGdCQUFnQjlFO0lBRXREQSxVQUFVO0lBRVYsTUFBTWdGLGFBQWEsSUFBSUQsV0FBVy9FLFNBQVNJLFFBQVFELE1BQU1HLFlBQVdPLFVBQVU0RDtJQUU5RSxPQUFPTztBQUNUO0FBRU8sU0FBU2hKLDZCQUE2QmlKLGNBQWMsRUFBRWpGLE9BQU87SUFDbEUsTUFBTSxFQUFFa0YsVUFBVSxFQUFFLEdBQUdoRixpQkFBUSxFQUN6QkMsT0FBTzhFLGdCQUNQN0UsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWSxNQUNaNkUsaUJBQWlCakosaUNBQWlDK0ksZ0JBQWdCakYsVUFDbEVrQyxRQUFRaUQsZ0JBQWdCLEdBQUc7SUFFakNuRixVQUFVO0lBRVYsTUFBTW9GLGFBQWEsSUFBSUYsV0FBV2xGLFNBQVNJLFFBQVFELE1BQU1HLFlBQVc0QjtJQUVwRSxPQUFPa0Q7QUFDVDtBQUVPLFNBQVN2TCw2QkFBNkJ3TCxjQUFjLEVBQUVyRixPQUFPO0lBQ2xFLE1BQU0sRUFBRXNGLFVBQVUsRUFBRSxHQUFHcEYsaUJBQVEsRUFDekJDLE9BQU9rRixnQkFDUHpELE9BQU9oRSx1QkFBdUJ5SCxnQkFBZ0JyRixVQUM5Q2lCLE9BQU8xRCx1QkFBdUI4SCxnQkFBZ0JyRixVQUM5QzJDLFFBQVEvSSx3QkFBd0J5TCxnQkFBZ0JyRixVQUNoRHFELFNBQVMxRyx5QkFBeUIwSSxnQkFBZ0JyRixVQUNsRDRELFVBQVV4RiwwQkFBMEJpSCxnQkFBZ0JyRixVQUNwRDBFLFlBQVlwSiw0QkFBNEIrSixnQkFBZ0JyRixVQUN4RGdGLGFBQWF4Siw2QkFBNkI2SixnQkFBZ0JyRixVQUMxRHVGLGNBQWN2SSw4QkFBOEJxSSxnQkFBZ0JyRixVQUM1RHdGLGdCQUFnQm5KLGdDQUFnQ2dKLGdCQUFnQnJGLFVBQ2hFeUIsYUFBYTtRQUNYRztRQUNBWDtRQUNBMEI7UUFDQVU7UUFDQU87UUFDQWM7UUFDQU07UUFDQU87UUFDQUM7S0FDRCxFQUNEQyxtQkFBbUJDLElBQUFBLHNDQUE4QixFQUFDakUsWUFBWXpCLFVBQzlESSxTQUFTcUYsa0JBQ1RuRixhQUFZO0lBRWxCTixVQUFVO0lBRVYsTUFBTWdFLGFBQWEsSUFBSXNCLFdBQVd0RixTQUFTSSxRQUFRRCxNQUFNRyxZQUFXc0IsTUFBTVgsTUFBTTBCLE9BQU9VLFFBQVFPLFNBQVNjLFdBQVdNLFlBQVlPLGFBQWFDO0lBRTVJLE9BQU94QjtBQUNUO0FBRU8sU0FBUzlHLCtCQUErQnlJLGVBQWUsRUFBRTNGLE9BQU87SUFDckUsTUFBTSxFQUFFNEYsV0FBVyxFQUFFLEdBQUcxRixpQkFBUSxFQUMxQkMsT0FBT3dGLGlCQUNQRSxRQUFRbkkseUJBQXlCaUksaUJBQWlCM0YsVUFDbEQ4RixjQUFjcEssK0JBQStCaUssaUJBQWlCM0YsVUFDOUQrRixrQkFBa0I1SSxtQ0FBbUN3SSxpQkFBaUIzRixVQUN0RWdHLG9CQUFvQkMsSUFBQUEsZ0RBQXdDLEVBQUNGLGtCQUM3RDNGLFNBQVM0RixtQkFDVDFGLGFBQVk7SUFFbEJOLFVBQVU7SUFFVixNQUFNdUYsY0FBYyxJQUFJSyxZQUFZNUYsU0FBU0ksUUFBUUQsTUFBTUcsWUFBV3VGLE9BQU9DLGFBQWFDO0lBRTFGLE9BQU9SO0FBQ1Q7QUFFTyxTQUFTakosbUNBQW1DNEosaUJBQWlCLEVBQUVsRyxPQUFPO0lBQzNFLE1BQU0sRUFBRW1HLGFBQWEsRUFBRSxHQUFHakcsaUJBQVEsRUFDNUJDLE9BQU8rRixtQkFDUDlGLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWjZELFlBQVl0SCwrQkFBK0JxSixtQkFBbUJsRyxVQUM5RG1DLFFBQVFqRSwyQkFBMkJnSSxtQkFBbUJsRztJQUU1REEsVUFBVTtJQUVWLE1BQU13RixnQkFBZ0IsSUFBSVcsY0FBY25HLFNBQVNJLFFBQVFELE1BQU1HLFlBQVc2RCxXQUFXaEM7SUFFckYsT0FBT3FEO0FBQ1Q7QUFFTyxTQUFTeksscUNBQXFDcUwsa0JBQWtCLEVBQUVwRyxPQUFPO0lBQzlFLE1BQU0sRUFBRXFHLGNBQWMsRUFBRSxHQUFHbkcsaUJBQVEsRUFDN0JDLE9BQU9pRyxvQkFDUGhHLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWnlELE9BQU94RiwyQkFBMkI2SCxvQkFBb0JwRyxVQUN0RDhDLE9BQU9uSSwyQkFBMkJ5TCxvQkFBb0JwRyxVQUN0RHNHLFFBQVF6Tiw0QkFBNEJ1TixvQkFBb0JwRztJQUU5REEsVUFBVTtJQUVWLE1BQU11RyxpQkFBaUIsSUFBSUYsZUFBZXJHLFNBQVNJLFFBQVFELE1BQU1HLFlBQVd5RCxNQUFNakIsTUFBTXdEO0lBRXhGLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTdkwsdUNBQXVDd0wsbUJBQW1CLEVBQUV4RyxPQUFPO0lBQ2pGLE1BQU0sRUFBRXlHLGVBQWUsRUFBRSxHQUFHdkcsaUJBQVEsRUFDOUJDLE9BQU9xRyxxQkFDUHBHLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJHLGFBQVksTUFDWm9HLHNCQUFzQkYsb0JBQW9CRyxzQkFBc0IsSUFDaEVDLHVCQUF1QjFMLDJDQUEyQ3dMLHFCQUFxQjFHLFVBQ3ZGa0MsUUFBUTBFLHNCQUFzQixHQUFHO0lBRXZDNUcsVUFBVTtJQUVWLE1BQU02RyxrQkFBa0IsSUFBSUosZ0JBQWdCekcsU0FBU0ksUUFBUUQsTUFBTUcsWUFBVzRCO0lBRTlFLE9BQU8yRTtBQUNUO0FBRU8sU0FBUzNOLHVDQUF1QzROLG1CQUFtQixFQUFFOUcsT0FBTztJQUNqRixNQUFNLEVBQUUrRyxlQUFlLEVBQUUsR0FBRzdHLGlCQUFRLEVBQzlCQyxPQUFPMkcscUJBQ1AxRyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFZLE1BQ1pPLFdBQVd6QixnQ0FBZ0MwSCxxQkFBcUI5RyxVQUNoRW9GLGFBQWFySixrQ0FBa0MrSyxxQkFBcUI5RztJQUUxRUEsVUFBVTtJQUVWLE1BQU1PLGtCQUFrQixJQUFJd0csZ0JBQWdCL0csU0FBU0ksUUFBUUQsTUFBTUcsWUFBV08sVUFBVXVFO0lBRXhGLE9BQU83RTtBQUNUO0FBRU8sU0FBU25ELHVDQUF1QzRKLG1CQUFtQixFQUFFaEgsT0FBTztJQUNqRixNQUFNLEVBQUVpSCxlQUFlLEVBQUUsR0FBRy9HLGlCQUFRLEVBQzlCQyxPQUFPNkcscUJBQ1A1RyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCRyxhQUFZLE1BQ1pzQixPQUFPOUQsNEJBQTRCa0oscUJBQXFCaEg7SUFFOURBLFVBQVU7SUFFVixNQUFNK0Ysa0JBQWtCLElBQUlrQixnQkFBZ0JqSCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXc0I7SUFFOUUsT0FBT21FO0FBQ1Q7QUFFTyxTQUFTOUssd0NBQXdDaU0sb0JBQW9CLEVBQUVsSCxPQUFPO0lBQ25GLE1BQU13RyxzQkFBc0JVLHFCQUFxQkMsc0JBQXNCLElBQ2pFTixrQkFBa0I3TCx1Q0FBdUN3TCxxQkFBcUJ4RztJQUVwRixPQUFPNkc7QUFDVDtBQUVPLFNBQVNsTCx5Q0FBeUN1TCxvQkFBb0IsRUFBRWxILE9BQU87SUFDcEYsTUFBTSxFQUFFb0gsZUFBZSxFQUFFLEdBQUdsSCxpQkFBUSxFQUM5QkMsT0FBTytHLHNCQUNQOUcsU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QkcsYUFBWSxNQUNaTyxXQUFXckIsaUNBQWlDMEgsc0JBQXNCbEgsVUFDbEU2RyxrQkFBa0I1TCx3Q0FBd0NpTSxzQkFBc0JsSDtJQUV0RkEsVUFBVTtJQUVWLE1BQU1xSCxtQkFBbUIsSUFBSUQsZ0JBQWdCcEgsU0FBU0ksUUFBUUQsTUFBTUcsWUFBV08sVUFBVWdHO0lBRXpGLE9BQU9RO0FBQ1Q7QUFFTyxTQUFTdk8sNkNBQTZDd08sc0JBQXNCLEVBQUV0SCxPQUFPO0lBQzFGLE1BQU0sRUFBRXVILGtCQUFrQixFQUFFLEdBQUdySCxpQkFBUSxFQUNqQ0MsT0FBT21ILHdCQUNQdkQsT0FBT3BGLHdDQUF3QzJJLHdCQUF3QnRILFVBQ3ZFb0YsYUFBYXRKLHFDQUFxQ3dMLHdCQUF3QnRILFVBQzFFdUYsY0FBY3hJLHNDQUFzQ3VLLHdCQUF3QnRILFVBQzVFd0gsMEJBQTBCQyxJQUFBQSxnRUFBd0QsRUFBQzFELE1BQU1xQixZQUFZRyxjQUNyR25GLFNBQVNvSCx5QkFDVGxILGFBQVk7SUFFbEJOLFVBQVU7SUFFVixNQUFNYyxxQkFBcUIsSUFBSXlHLG1CQUFtQnZILFNBQVNJLFFBQVFELE1BQU1HLFlBQVd5RCxNQUFNcUIsWUFBWUc7SUFFdEcsT0FBT3pFO0FBQ1Q7QUFFTyxTQUFTM0IsK0NBQStDdUksdUJBQXVCLEVBQUUxSCxPQUFPO0lBQzdGLE1BQU0sRUFBRTJILG1CQUFtQixFQUFFLEdBQUd6SCxpQkFBUSxFQUNsQ0MsT0FBT3VILHlCQUNQM0QsT0FBT2xGLGdDQUFnQzZJLHlCQUF5QjFILFVBQ2hFNEgsMkJBQTJCM0ksMkRBQTJEOEUsTUFBTTJELHlCQUF5QjFILFVBQ3JINkgsMkJBQTJCQyxJQUFBQSxtRUFBMkQsRUFBQy9ELE1BQU02RCwyQkFDN0YxRixRQUFRMEYsMEJBQ1J4SCxTQUFTeUgsMEJBQ1R2SCxhQUFZO0lBRWxCTixVQUFVO0lBRVYsTUFBTStILHNCQUFzQixJQUFJSixvQkFBb0IzSCxTQUFTSSxRQUFRRCxNQUFNRyxZQUFXNEI7SUFFdEYsT0FBTzZGO0FBQ1Q7QUFFTyxTQUFTeEwsaURBQWlEeUwsd0JBQXdCLEVBQUVoSSxPQUFPO0lBQ2hHLE1BQU0sRUFBRWlJLG9CQUFvQixFQUFFLEdBQUcvSCxpQkFBUSxFQUNuQ0MsT0FBTzZILDBCQUNQRSxZQUFZMUwsc0NBQXNDd0wsMEJBQTBCaEksVUFDNUVtSSw2QkFBNkJDLElBQUFBLCtDQUF1QyxFQUFDRixZQUNyRTlILFNBQVMrSCw0QkFDVDdILGFBQVk7SUFFbEJOLFVBQVU7SUFFVixNQUFNcUksdUJBQXVCLElBQUlKLHFCQUFxQmpJLFNBQVNJLFFBQVFELE1BQU1HLFlBQVc0SDtJQUV4RixPQUFPRztBQUNUO0FBRU8sU0FBUzNOLGtCQUFrQmtJLFNBQVMsRUFBRTVDLE9BQU87SUFDbEQsTUFBTThDLE9BQU9GLFVBQVUwRixPQUFPO0lBRTlCLE9BQU94RjtBQUNUO0FBRU8sU0FBUzlFLG9CQUFvQnNGLFdBQVcsRUFBRXRELE9BQU87SUFDdEQsTUFBTWtCLFdBQVdvQyxZQUFZaUYsV0FBVyxJQUNsQzNHLE9BQU83RCxpQkFBaUJtRCxVQUFVbEI7SUFFeEMsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTbEMscUJBQXFCaUIsUUFBUSxFQUFFWCxPQUFPO0lBQ3BELE1BQU02RCxlQUFlbEQsU0FBUzZILGVBQWUsSUFDdkMzSCxXQUFXZix5QkFBeUIrRCxjQUFjN0Q7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVNsQixxQkFBcUJ1QixRQUFRLEVBQUVsQixPQUFPO0lBQ3BELElBQUlhLFdBQVc7SUFFZixNQUFNZ0QsZUFBZTNDLFNBQVNzSCxlQUFlO0lBRTdDLElBQUkzRSxpQkFBaUIsTUFBTTtRQUN6QmhELFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUNwRDtJQUVBLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTL0YscUJBQXFCK0ksWUFBWTtJQUMvQyxNQUFNZixPQUFPZSxhQUFheUUsT0FBTztJQUVqQyxPQUFPeEY7QUFDVDtBQUVPLFNBQVNoRSxxQkFBcUIrRSxZQUFZLEVBQUU3RCxPQUFPO0lBQ3hELE1BQU0rRCxPQUFPO0lBRWIsT0FBT0E7QUFDVDtBQUVPLFNBQVMzSCxzQkFBc0I4RSxRQUFRLEVBQUVsQixPQUFPO0lBQ3JELElBQUlvQixZQUFZO0lBRWhCLE1BQU11RCxnQkFBZ0J6RCxTQUFTdUgsZ0JBQWdCO0lBRS9DLElBQUk5RCxrQkFBa0IsTUFBTTtRQUMxQnZELFlBQVlqRiwyQkFBMkJ3SSxlQUFlM0U7SUFDeEQ7SUFFQSxPQUFPb0I7QUFDVDtBQUVPLFNBQVMvQixzQkFBc0JrRCxTQUFTLEVBQUV2QyxPQUFPO0lBQ3RELE1BQU02RCxlQUFldEIsVUFBVWlHLGVBQWUsSUFDeEMzSCxXQUFXZix5QkFBeUIrRCxjQUFjN0Q7SUFFeEQsT0FBT2E7QUFDVDtBQUVPLFNBQVNwQyxzQkFBc0IyRixhQUFhLEVBQUVwRSxPQUFPO0lBQzFELE1BQU0rRCxPQUFPSyxjQUFjc0UsT0FBTztJQUVsQyxPQUFPM0U7QUFDVDtBQUVPLFNBQVNuSixzQkFBc0J3SixhQUFhLEVBQUVwRSxPQUFPO0lBQzFELE1BQU04QyxPQUFPc0IsY0FBY2tFLE9BQU87SUFFbEMsT0FBT3hGO0FBQ1Q7QUFFTyxTQUFTakksc0JBQXNCb0osYUFBYSxFQUFFakUsT0FBTztJQUMxRCxNQUFNOEMsT0FBT21CLGNBQWNxRSxPQUFPO0lBRWxDLE9BQU94RjtBQUNUO0FBRU8sU0FBU3BFLHNCQUFzQmlHLGFBQWEsRUFBRTNFLE9BQU87SUFDMUQsTUFBTStELE9BQU9ZLGNBQWMrRCxPQUFPO0lBRWxDLE9BQU8zRTtBQUNUO0FBRU8sU0FBU3RFLHVCQUF1QnVELFVBQVUsRUFBRWhELE9BQU87SUFDeEQsTUFBTTZELGVBQWViLFdBQVd3RixlQUFlLElBQ3pDM0gsV0FBV2YseUJBQXlCK0QsY0FBYzdEO0lBRXhELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTakQsdUJBQXVCeUgsY0FBYyxFQUFFckYsT0FBTztJQUM1RCxJQUFJNEIsT0FBTztJQUVYLE1BQU1WLFdBQVdtRSxlQUFla0QsV0FBVztJQUUzQyxJQUFJckgsYUFBYSxNQUFNO1FBQ3JCVSxPQUFPN0QsaUJBQWlCbUQsVUFBVWxCO0lBQ3BDO0lBRUEsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTckUsdUJBQXVCOEgsY0FBYyxFQUFFckYsT0FBTztJQUM1RCxJQUFJaUIsT0FBTztJQUVYLE1BQU1OLFdBQVcwRSxlQUFlc0QsV0FBVztJQUUzQyxJQUFJaEksYUFBYSxNQUFNO1FBQ3JCTSxPQUFPekQsaUJBQWlCbUQsVUFBVVg7SUFDcEM7SUFFQSxPQUFPaUI7QUFDVDtBQUVPLFNBQVN4RSx1QkFBdUI4SCxhQUFhLEVBQUV2RSxPQUFPO0lBQzNELE1BQU1JLFNBQVNtRSxjQUFjcUUsU0FBUyxJQUNoQ25ELG1CQUFtQnJGLFFBQ25CcUUsUUFBUW9FLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDckQ7SUFFekMsT0FBT2hCO0FBQ1Q7QUFFTyxTQUFTMUYsdUJBQXVCNEYsYUFBYSxFQUFFM0UsT0FBTztJQUMzRCxNQUFNNkUsUUFBUUYsY0FBY29FLFFBQVE7SUFFcEMsT0FBT2xFO0FBQ1Q7QUFFTyxTQUFTbkksd0JBQXdCb0ksY0FBYyxFQUFFOUUsT0FBTztJQUM3RCxNQUFNSSxTQUFTMEUsZUFBZThELFNBQVMsSUFDakNuRCxtQkFBbUJyRixRQUNuQnFFLFFBQVFvRSxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ3JEO0lBRXpDLE9BQU9oQjtBQUNUO0FBRU8sU0FBUzdLLHdCQUF3QnlMLGNBQWMsRUFBRXJGLE9BQU87SUFDN0QsSUFBSTJDLFFBQVE7SUFFWixNQUFNSixZQUFZOEMsZUFBZTJELFlBQVk7SUFFN0MsSUFBSXpHLGNBQWMsTUFBTTtRQUN0QkksUUFBUWhKLG1CQUFtQjRJLFdBQVd2QztJQUN4QztJQUVBLE9BQU8yQztBQUNUO0FBRU8sU0FBU3RILHdCQUF3QjZGLFFBQVEsRUFBRWxCLE9BQU87SUFDdkQsSUFBSXFCLGNBQWM7SUFFbEIsTUFBTTRILGtCQUFrQi9ILFNBQVNnSSxrQkFBa0I7SUFFbkQsSUFBSUQsb0JBQW9CLE1BQU07UUFDNUI1SCxjQUFjakcsK0JBQStCNk4saUJBQWlCako7SUFDaEU7SUFFQSxPQUFPcUI7QUFDVDtBQUVPLFNBQVM1Ryx3QkFBd0J5RyxRQUFRLEVBQUVsQixPQUFPO0lBQ3ZELElBQUlzQixjQUFjO0lBRWxCLE1BQU02SCxrQkFBa0JqSSxTQUFTa0ksa0JBQWtCO0lBRW5ELElBQUlELG9CQUFvQixNQUFNO1FBQzVCN0gsY0FBYzlHLCtCQUErQjJPLGlCQUFpQm5KO0lBQ2hFO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTaEQsd0JBQXdCNkssZUFBZSxFQUFFbkosT0FBTztJQUM5RCxNQUFNK0QsT0FBT3NGLG1CQUFZO0lBRXpCLE9BQU90RjtBQUNUO0FBRU8sU0FBU3ZGLHdCQUF3QjJLLGVBQWUsRUFBRW5KLE9BQU87SUFDOUQsTUFBTStELE9BQU9zRixtQkFBWTtJQUV6QixPQUFPdEY7QUFDVDtBQUVPLFNBQVNsRyx3QkFBd0JvTCxlQUFlLEVBQUVqSixPQUFPO0lBQzlELE1BQU1rQixXQUFXK0gsZ0JBQWdCVixXQUFXLElBQ3RDM0csT0FBTzdELGlCQUFpQm1ELFVBQVVsQjtJQUV4QyxPQUFPNEI7QUFDVDtBQUVPLFNBQVM5SCx5QkFBeUJrSixVQUFVLEVBQUVoRCxPQUFPO0lBQzFELE1BQU1xRixpQkFBaUJyQyxXQUFXc0csaUJBQWlCLElBQzdDdEYsYUFBYW5LLDZCQUE2QndMLGdCQUFnQnJGO0lBRWhFLE9BQU9nRTtBQUNUO0FBRU8sU0FBU3JILHlCQUF5QjBJLGNBQWMsRUFBRXJGLE9BQU87SUFDOUQsSUFBSXFELFNBQVM7SUFFYixNQUFNTCxhQUFhcUMsZUFBZWtFLGFBQWE7SUFFL0MsSUFBSXZHLGVBQWUsTUFBTTtRQUN2QkssU0FBU3pHLHFCQUFxQm9HLFlBQVloRDtJQUM1QztJQUVBLE9BQU9xRDtBQUNUO0FBRU8sU0FBUzNGLHlCQUF5QmlJLGVBQWUsRUFBRTNGLE9BQU87SUFDL0QsTUFBTXdKLFlBQVk3RCxnQkFBZ0I4RCxZQUFZLElBQ3hDNUQsUUFBUTJELFVBQVVFLEdBQUcsQ0FBQyxDQUFDM0o7UUFDckIsTUFBTVcsT0FBT2pELGlCQUFpQnNDLFVBQVVDO1FBRXhDLE9BQU9VO0lBQ1Q7SUFFTixPQUFPbUY7QUFDVDtBQUVPLFNBQVN2RywwQkFBMEJpRixhQUFhLEVBQUV2RSxPQUFPO0lBQzlELE1BQU02RCxlQUFlVSxjQUFjaUUsZUFBZSxJQUM1QzNILFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU3pDLDBCQUEwQmlILGNBQWMsRUFBRXJGLE9BQU87SUFDL0QsSUFBSTRELFVBQVU7SUFFZCxNQUFNTixjQUFjK0IsZUFBZXNFLGNBQWM7SUFFakQsSUFBSXJHLGdCQUFnQixNQUFNO1FBQ3hCTSxVQUFVdkYsdUJBQXVCaUYsYUFBYXREO0lBQ2hEO0lBRUEsT0FBTzREO0FBQ1Q7QUFFTyxTQUFTdkssMEJBQTBCNkgsUUFBUSxFQUFFbEIsT0FBTztJQUN6RCxJQUFJdUIsZ0JBQWdCO0lBRXBCLE1BQU1xSSxvQkFBb0IxSSxTQUFTMkksb0JBQW9CO0lBRXZELElBQUlELHNCQUFzQixNQUFNO1FBQzlCckksZ0JBQWdCbkksbUNBQW1Dd1EsbUJBQW1CNUo7SUFDeEU7SUFFQSxPQUFPdUI7QUFDVDtBQUVPLFNBQVM1RCwwQkFBMEJpTSxpQkFBaUIsRUFBRTVKLE9BQU87SUFDbEUsTUFBTWtCLFdBQVcwSSxrQkFBa0JyQixXQUFXLElBQzVDM0csT0FBTzdELGlCQUFpQm1ELFVBQVVsQjtJQUVwQyxPQUFPNEI7QUFDVDtBQUVPLFNBQVNySSwyQkFBMkJ1USxRQUFRLEVBQUU5SixPQUFPO0lBQzFELElBQUl3QixpQkFBaUI7SUFFckIsTUFBTXVJLHFCQUFxQkQsU0FBU0UscUJBQXFCO0lBRXpELElBQUlELHVCQUF1QixNQUFNO1FBQy9CdkksaUJBQWlCbEkscUNBQXFDeVEsb0JBQW9CL0o7SUFDNUU7SUFFQSxPQUFPd0I7QUFDVDtBQUVPLFNBQVN2SCwyQkFBMkI0SixZQUFZLEVBQUU3RCxPQUFPO0lBQzlELE1BQU1nRSxhQUFhO0lBRW5CLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTekUsMkJBQTJCdUYsY0FBYyxFQUFFOUUsT0FBTztJQUNoRSxNQUFNNkQsZUFBZWlCLGVBQWUwRCxlQUFlLElBQzdDM0gsV0FBV2YseUJBQXlCK0QsY0FBYzdEO0lBRXhELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTM0MsMkJBQTJCZ0ksaUJBQWlCLEVBQUVsRyxPQUFPO0lBQ25FLE1BQU02QixZQUFZcUUsa0JBQWtCK0QsWUFBWSxJQUMxQzlILFFBQVFoRSxtQkFBbUIwRCxXQUFXN0I7SUFFNUMsT0FBT21DO0FBQ1Q7QUFFTyxTQUFTNUQsMkJBQTJCNkgsa0JBQWtCLEVBQUVwRyxPQUFPO0lBQ3BFLE1BQU0rRCxPQUFPcUMsbUJBQW1Cc0MsT0FBTztJQUV2QyxPQUFPM0U7QUFDVDtBQUVPLFNBQVNwSiwyQkFBMkJ5TCxrQkFBa0IsRUFBRXBHLE9BQU87SUFDcEUsTUFBTThDLE9BQU9zRCxtQkFBbUJrQyxPQUFPO0lBRXZDLE9BQU94RjtBQUNUO0FBRU8sU0FBU3ZJLDRCQUE0QjRPLGVBQWUsRUFBRW5KLE9BQU87SUFDbEUsTUFBTWtLLGVBQWVmLGdCQUFnQmdCLGVBQWUsSUFDbERDLFdBQVdyTSxpQkFBaUJtTSxjQUFjbEs7SUFFNUMsT0FBT29LO0FBQ1Q7QUFFTyxTQUFTalIsNEJBQTRCNEcsUUFBUSxFQUFFQyxPQUFPO0lBQzNELElBQUlPLGtCQUFrQjtJQUV0QixNQUFNdUcsc0JBQXNCL0csU0FBU3NLLHNCQUFzQjtJQUUzRCxJQUFJdkQsd0JBQXdCLE1BQU07UUFDaEN2RyxrQkFBa0JySCx1Q0FBdUM0TixxQkFBcUI5RztJQUNoRjtJQUVBLE9BQU9PO0FBQ1Q7QUFFTyxTQUFTckcsNEJBQTRCb0osV0FBVyxFQUFFdEQsT0FBTztJQUM5RCxNQUFNc0ssbUJBQW1CaEgsWUFBWWlILG1CQUFtQixJQUNsRC9HLGVBQWUzSiw2QkFBNkJ5USxrQkFBa0J0SztJQUVwRSxPQUFPd0Q7QUFDVDtBQUVPLFNBQVNsSSw0QkFBNEIrSixjQUFjLEVBQUVyRixPQUFPO0lBQ2pFLElBQUkwRSxZQUFZO0lBRWhCLE1BQU1ILGdCQUFnQmMsZUFBZW1GLGdCQUFnQjtJQUVyRCxJQUFJakcsa0JBQWtCLE1BQU07UUFDMUJHLFlBQVluSiwyQkFBMkJnSixlQUFldkU7SUFDeEQ7SUFFQSxPQUFPMEU7QUFDVDtBQUVPLFNBQVM3TCw0QkFBNEJ1TixrQkFBa0IsRUFBRXBHLE9BQU87SUFDckUsTUFBTXNHLFFBQVFGLG1CQUFtQnFFLFFBQVE7SUFFekMsT0FBT25FO0FBQ1Q7QUFFTyxTQUFTeEksNEJBQTRCa0osbUJBQW1CLEVBQUVoSCxPQUFPO0lBQ3RFLE1BQU1rQixXQUFXOEYsb0JBQW9CdUIsV0FBVyxJQUMxQzNHLE9BQU83RCxpQkFBaUJtRCxVQUFVbEI7SUFFeEMsT0FBTzRCO0FBQ1Q7QUFFTyxTQUFTaEcsNkJBQTZCbUUsUUFBUSxFQUFFQyxPQUFPO0lBQzVELElBQUlxSCxtQkFBbUI7SUFFdkIsTUFBTUgsdUJBQXVCbkgsU0FBUzJLLHVCQUF1QjtJQUU3RCxJQUFJeEQseUJBQXlCLE1BQU07UUFDakNHLG1CQUFtQjFMLHlDQUF5Q3VMLHNCQUFzQmxIO0lBQ3BGO0lBRUEsT0FBT3FIO0FBQ1Q7QUFFTyxTQUFTN0wsNkJBQTZCNkosY0FBYyxFQUFFckYsT0FBTztJQUNsRSxJQUFJZ0YsYUFBYTtJQUVqQixNQUFNRixpQkFBaUJPLGVBQWVzRixpQkFBaUI7SUFFdkQsSUFBSTdGLG1CQUFtQixNQUFNO1FBQzNCRSxhQUFhdkosNkJBQTZCcUosZ0JBQWdCOUU7SUFDNUQ7SUFFQSxPQUFPZ0Y7QUFDVDtBQUVPLFNBQVMxSCw2QkFBNkI2TCxlQUFlLEVBQUVuSixPQUFPO0lBQ25FLE1BQU00SyxnQkFBZ0J6QixnQkFBZ0IwQixnQkFBZ0IsSUFDakRDLFlBQVkvTSxpQkFBaUI2TSxlQUFlNUs7SUFFakQsT0FBTzhLO0FBQ1Q7QUFFTyxTQUFTM1AsOEJBQThCNE8sa0JBQWtCLEVBQUUvSixPQUFPO0lBQ3ZFLE1BQU0rSyxVQUFVaEIsbUJBQW1CaUIsU0FBUztJQUU1QyxPQUFPRDtBQUNUO0FBRU8sU0FBU3RSLDhCQUE4QjZKLFdBQVcsRUFBRXRELE9BQU87SUFDaEUsTUFBTWlMLHFCQUFxQjNILFlBQVk0SCxxQkFBcUIsSUFDdER6SCxpQkFBaUI1Siw2QkFBNkJvUixvQkFBb0JqTDtJQUV4RSxPQUFPeUQ7QUFDVDtBQUVPLFNBQVN6Ryw4QkFBOEJxSSxjQUFjLEVBQUVyRixPQUFPO0lBQ25FLElBQUl1RixjQUFjO0lBRWxCLE1BQU1JLGtCQUFrQk4sZUFBZThGLGtCQUFrQjtJQUV6RCxJQUFJeEYsb0JBQW9CLE1BQU07UUFDNUJKLGNBQWNySSwrQkFBK0J5SSxpQkFBaUIzRjtJQUNoRTtJQUVBLE9BQU91RjtBQUNUO0FBRU8sU0FBU3RNLCtCQUErQjBILFFBQVEsRUFBRVgsT0FBTztJQUM5RCxNQUFNc0gseUJBQXlCM0csU0FBU3lLLHlCQUF5QixJQUMzRHRLLHFCQUFxQmhJLDZDQUE2Q3dPLHdCQUF3QnRIO0lBRWhHLE9BQU9jO0FBQ1Q7QUFFTyxTQUFTcEYsK0JBQStCaUssZUFBZSxFQUFFM0YsT0FBTztJQUNyRSxNQUFNOEYsY0FBY0gsZ0JBQWdCMEYsYUFBYTtJQUVqRCxPQUFPdkY7QUFDVDtBQUVPLFNBQVNqSiwrQkFBK0JxSixpQkFBaUIsRUFBRWxHLE9BQU87SUFDdkUsTUFBTWlFLGdCQUFnQmlDLGtCQUFrQm9GLGdCQUFnQixJQUNsRG5ILFlBQVlySCwyQkFBMkJtSCxlQUFlakU7SUFFNUQsT0FBT21FO0FBQ1Q7QUFFTyxTQUFTN0osK0JBQStCeVAsa0JBQWtCLEVBQUUvSixPQUFPO0lBQ3hFLE1BQU1rSyxlQUFlSCxtQkFBbUJJLGVBQWUsSUFDakRDLFdBQVdyTSxpQkFBaUJtTSxjQUFjbEs7SUFFaEQsT0FBT29LO0FBQ1Q7QUFFTyxTQUFTNVEsK0JBQStCMlAsZUFBZSxFQUFFbkosT0FBTztJQUNyRSxNQUFNdUwsY0FBY3BDLGdCQUFnQnFDLGFBQWE7SUFFakQsT0FBT0Q7QUFDVDtBQUVPLFNBQVNuUSwrQkFBK0I2TixlQUFlLEVBQUVqSixPQUFPO0lBQ3JFLE1BQU0sRUFBRXlMLFdBQVcsRUFBRSxHQUFHdkwsaUJBQVEsRUFDMUJDLE9BQU84SSxpQkFDUDdJLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJlLFdBQVcrSCxnQkFBZ0JWLFdBQVcsSUFDdEN4RSxPQUFPdkYsd0JBQXdCMEMsVUFBVWxCLFVBQ3pDNEIsT0FBTy9ELHdCQUF3Qm9MLGlCQUFpQmpKLFVBQ2hEcUIsY0FBYyxJQUFJb0ssWUFBWXpMLFNBQVNJLFFBQVFELE1BQU1HLFdBQVd5RCxNQUFNbkM7SUFFNUUsT0FBT1A7QUFDVDtBQUVPLFNBQVM3RywrQkFBK0IyTyxlQUFlLEVBQUVuSixPQUFPO0lBQ3JFLE1BQU0sRUFBRTBMLFdBQVcsRUFBRSxHQUFHeEwsaUJBQVEsRUFDMUJDLE9BQU9nSixpQkFDUC9JLFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUI0RCxPQUFPekYsd0JBQXdCNkssaUJBQWlCbkosVUFDaER1TCxjQUFjL1IsK0JBQStCMlAsaUJBQWlCbkosVUFDOURvSyxXQUFXN1AsNEJBQTRCNE8saUJBQWlCbkosVUFDeEQ4SyxZQUFZeE4sNkJBQTZCNkwsaUJBQWlCbkosVUFDMURzQixjQUFjLElBQUlvSyxZQUFZMUwsU0FBU0ksUUFBUUQsTUFBTUcsV0FBV3lELE1BQU13SCxhQUFhbkIsVUFBVVU7SUFFbkcsT0FBT3hKO0FBQ1Q7QUFFTyxTQUFTekIsZ0NBQWdDa0UsSUFBSSxFQUFFRixZQUFZLEVBQUU3RCxPQUFPO0lBQ3pFLE1BQU0sRUFBRThELFFBQVEsRUFBRSxHQUFHNUQsaUJBQVEsRUFDdkJDLE9BQU8wRCxjQUNQZixPQUFPaEkscUJBQXFCK0ksZUFDNUJHLGFBQWFqSyxrQ0FBa0NnSyxNQUFNRixjQUFjN0QsVUFDbkUyTCxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDOUksT0FDeEMxQyxTQUFTdUwsZ0JBQ1Q5SyxXQUFXLElBQUlpRCxTQUFTOUQsU0FBU0ksUUFBUUQsTUFBTUcsV0FBV3lELE1BQU1qQixNQUFNa0I7SUFFNUUsT0FBT25EO0FBQ1Q7QUFFTyxTQUFTM0IsZ0NBQWdDYSxRQUFRLEVBQUVDLE9BQU87SUFDL0QsSUFBSStILHNCQUFzQjtJQUUxQixNQUFNTCwwQkFBMEIzSCxTQUFTOEwsMEJBQTBCO0lBRW5FLElBQUluRSw0QkFBNEIsTUFBTTtRQUNwQ0ssc0JBQXNCNUksK0NBQStDdUkseUJBQXlCMUg7SUFDaEc7SUFFQSxPQUFPK0g7QUFDVDtBQUVPLFNBQVNoUCxnQ0FBZ0N3SixTQUFTLEVBQUV2QyxPQUFPO0lBQ2hFLE1BQU1zSCx5QkFBeUIvRSxVQUFVNkkseUJBQXlCLElBQzVEdEsscUJBQXFCaEksNkNBQTZDd08sd0JBQXdCdEg7SUFFaEcsT0FBT2M7QUFDVDtBQUVPLFNBQVMzRyxnQ0FBZ0M2SSxVQUFVLEVBQUVoRCxPQUFPO0lBQ2pFLE1BQU1nRSxhQUFhbEsseUJBQXlCa0osWUFBWWhELFVBQ2xEa0Qsb0JBQW9CYyxZQUFZLEdBQUc7SUFFekMsT0FBT2Q7QUFDVDtBQUVPLFNBQVM3RyxnQ0FBZ0NnSixjQUFjLEVBQUVyRixPQUFPO0lBQ3JFLElBQUl3RixnQkFBZ0I7SUFFcEIsTUFBTVUsb0JBQW9CYixlQUFleUcsb0JBQW9CO0lBRTdELElBQUk1RixzQkFBc0IsTUFBTTtRQUM5QlYsZ0JBQWdCbEosbUNBQW1DNEosbUJBQW1CbEc7SUFDeEU7SUFFQSxPQUFPd0Y7QUFDVDtBQUVPLFNBQVNuSSxnQ0FBZ0MwTSxrQkFBa0IsRUFBRS9KLE9BQU87SUFDekUsTUFBTTRLLGdCQUFnQmIsbUJBQW1CYyxnQkFBZ0IsSUFDbkRDLFlBQVkvTSxpQkFBaUI2TSxlQUFlNUs7SUFFbEQsT0FBTzhLO0FBQ1Q7QUFFTyxTQUFTMUwsZ0NBQWdDMEgsbUJBQW1CLEVBQUU5RyxPQUFPO0lBQzFFLE1BQU02RCxlQUFlaUQsb0JBQW9CMEIsZUFBZSxJQUNsRDNILFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU2hDLGdDQUFnQzZJLHVCQUF1QixFQUFFMUgsT0FBTztJQUM5RSxNQUFNK0QsT0FBTzJELHdCQUF3QmdCLE9BQU87SUFFNUMsT0FBTzNFO0FBQ1Q7QUFFTyxTQUFTL0ssaUNBQWlDZ0ssVUFBVSxFQUFFaEQsT0FBTztJQUNsRSxNQUFNc0gseUJBQXlCdEUsV0FBV29JLHlCQUF5QixJQUM3RHRLLHFCQUFxQmhJLDZDQUE2Q3dPLHdCQUF3QnRIO0lBRWhHLE9BQU9jO0FBQ1Q7QUFFTyxTQUFTdEIsaUNBQWlDMEgsb0JBQW9CLEVBQUVsSCxPQUFPO0lBQzVFLE1BQU02RCxlQUFlcUQscUJBQXFCc0IsZUFBZSxJQUNuRDNILFdBQVdmLHlCQUF5QitELGNBQWM3RDtJQUV4RCxPQUFPYTtBQUNUO0FBRU8sU0FBU2pDLGlDQUFpQ29KLHdCQUF3QixFQUFFaEksT0FBTztJQUNoRixNQUFNK0QsT0FBT2lFLHlCQUF5QlUsT0FBTztJQUU3QyxPQUFPM0U7QUFDVDtBQUVPLFNBQVNoSyxrQ0FBa0NnSyxJQUFJLEVBQUVGLFlBQVksRUFBRTdELE9BQU87SUFDM0UsTUFBTWdFLGFBQWE7SUFFbkIsT0FBT0E7QUFDVDtBQUVPLFNBQVNqSSxrQ0FBa0MrSyxtQkFBbUIsRUFBRTlHLE9BQU87SUFDNUUsTUFBTWlGLGlCQUFpQjZCLG9CQUFvQmlGLGlCQUFpQixJQUN0RDNHLGFBQWFwSiw2QkFBNkJpSixnQkFBZ0JqRjtJQUVoRSxPQUFPb0Y7QUFDVDtBQUVPLFNBQVMvSyxrQ0FBa0MyTix3QkFBd0IsRUFBRWhJLE9BQU87SUFDakYsTUFBTTRDLFlBQVlvRix5QkFBeUJnRSxZQUFZLElBQ2pEakosUUFBUTNJLG1CQUFtQndJLFdBQVc1QztJQUU1QyxPQUFPK0M7QUFDVDtBQUVPLFNBQVM1RixtQ0FBbUN3SSxlQUFlLEVBQUUzRixPQUFPO0lBQ3pFLE1BQU1nSCxzQkFBc0JyQixnQkFBZ0JzRyxzQkFBc0IsSUFDNURsRyxrQkFBa0IzSSx1Q0FBdUM0SixxQkFBcUJoSDtJQUVwRixPQUFPK0Y7QUFDVDtBQUVPLFNBQVMzTSxtQ0FBbUN3USxpQkFBaUIsRUFBRTVKLE9BQU87SUFDM0UsTUFBTSxFQUFFa00sYUFBYSxFQUFFLEdBQUdoTSxpQkFBUSxFQUM1QkMsT0FBT3lKLG1CQUNQeEosU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5QnlCLE9BQU9qRSwwQkFBMEJpTSxtQkFBbUI1SixVQUNwRHVCLGdCQUFnQixJQUFJMkssY0FBY2xNLFNBQVNJLFFBQVFELE1BQU1HLFdBQVdzQjtJQUUxRSxPQUFPTDtBQUNUO0FBRU8sU0FBU3ZILHFDQUFxQ21TLHFCQUFxQixFQUFFbk0sT0FBTztJQUNqRixNQUFNcUYsaUJBQWlCOEcsc0JBQXNCN0MsaUJBQWlCLElBQ3hEdEYsYUFBYW5LLDZCQUE2QndMLGdCQUFnQnJGO0lBRWhFLE9BQU9nRTtBQUNUO0FBRU8sU0FBU2xJLHFDQUFxQ3dMLHNCQUFzQixFQUFFdEgsT0FBTztJQUNsRixNQUFNaUYsaUJBQWlCcUMsdUJBQXVCeUUsaUJBQWlCLElBQ3pEM0csYUFBYXBKLDZCQUE2QmlKLGdCQUFnQmpGO0lBRWhFLE9BQU9vRjtBQUNUO0FBRU8sU0FBUzlMLHFDQUFxQ3lRLGtCQUFrQixFQUFFL0osT0FBTztJQUM5RSxNQUFNLEVBQUVvTSxjQUFjLEVBQUUsR0FBR2xNLGlCQUFRLEVBQzdCQyxPQUFPNEosb0JBQ1AzSixTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCNEssVUFBVTVQLDhCQUE4QjRPLG9CQUFvQi9KLFVBQzVEb0ssV0FBVzlQLCtCQUErQnlQLG9CQUFvQi9KLFVBQzlEOEssWUFBWXpOLGdDQUFnQzBNLG9CQUFvQi9KLFVBQ2hFd0IsaUJBQWlCLElBQUk0SyxlQUFlcE0sU0FBU0ksUUFBUUQsTUFBTUcsV0FBV3lLLFNBQVNYLFVBQVVVO0lBRS9GLE9BQU90SjtBQUNUO0FBRU8sU0FBU3pFLHNDQUFzQ3VLLHNCQUFzQixFQUFFdEgsT0FBTztJQUNuRixNQUFNMkYsa0JBQWtCMkIsdUJBQXVCNkQsa0JBQWtCLElBQzNENUYsY0FBY3JJLCtCQUErQnlJLGlCQUFpQjNGO0lBRXBFLE9BQU91RjtBQUNUO0FBRU8sU0FBUy9JLHNDQUFzQ3dMLHdCQUF3QixFQUFFaEksT0FBTztJQUNyRixNQUFNLEVBQUVxTSxTQUFTLEVBQUUsR0FBR25NLGlCQUFRLEVBQ3hCQyxPQUFPNkgsMEJBQ1BqRSxPQUFPbkYsaUNBQWlDb0osMEJBQTBCaEksVUFDbEUrQyxRQUFRMUksa0NBQWtDMk4sMEJBQTBCaEksVUFDcEVvRixhQUFhbkosdUNBQXVDK0wsMEJBQTBCaEksVUFDOUV1RixjQUFjdEksd0NBQXdDK0ssMEJBQTBCaEksVUFDaEZzTSxrQkFBa0JDLElBQUFBLDREQUFvRCxFQUFDeEksTUFBTWhCLE9BQU9xQyxZQUFZRyxjQUNoR25GLFNBQVNrTSxpQkFDVHBFLFlBQVksSUFBSW1FLFVBQVVyTSxTQUFTSSxRQUFRRCxNQUFNRyxXQUFXeUQsTUFBTWhCLE9BQU9xQyxZQUFZRztJQUUzRixPQUFPMkM7QUFDVDtBQUVPLFNBQVNqTSx1Q0FBdUMrTCx3QkFBd0IsRUFBRWhJLE9BQU87SUFDdEYsTUFBTWlGLGlCQUFpQitDLHlCQUF5QitELGlCQUFpQixJQUMzRDNHLGFBQWFwSiw2QkFBNkJpSixnQkFBZ0JqRjtJQUVoRSxPQUFPb0Y7QUFDVDtBQUVPLFNBQVN6Ryx3Q0FBd0MySSxzQkFBc0IsRUFBRXRILE9BQU87SUFDckYsTUFBTStELE9BQU91RCx1QkFBdUJvQixPQUFPO0lBRTNDLE9BQU8zRTtBQUNUO0FBRU8sU0FBUzlHLHdDQUF3QytLLHdCQUF3QixFQUFFaEksT0FBTztJQUN2RixNQUFNMkYsa0JBQWtCcUMseUJBQXlCbUQsa0JBQWtCLElBQzdENUYsY0FBY3JJLCtCQUErQnlJLGlCQUFpQjNGO0lBRXBFLE9BQU91RjtBQUNUO0FBRU8sU0FBUzNGLDBDQUEwQ21FLElBQUksRUFBRXlJLHNCQUFzQixFQUFFeE0sT0FBTztJQUM3RixNQUFNNkQsZUFBZTJJLHVCQUF1QmhFLGVBQWUsSUFDckQzSCxXQUFXaEIsZ0NBQWdDa0UsTUFBTUYsY0FBYzdEO0lBRXJFLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTN0Isb0RBQW9EK0UsSUFBSSxFQUFFeUksc0JBQXNCLEVBQUV4TSxPQUFPO0lBQ3ZHLE1BQU0sRUFBRXlNLGtCQUFrQixFQUFFLEdBQUd2TSxpQkFBUSxFQUNqQ0MsT0FBT3FNLHdCQUNQM0wsV0FBV2pCLDBDQUEwQ21FLE1BQU15SSx3QkFBd0J4TSxVQUNuRmdFLGFBQWFoSyxxQ0FBcUN3Uyx3QkFBd0J4TSxVQUMxRTZILDJCQUEyQjZFLElBQUFBLG1EQUEyQyxFQUFDM0ksTUFBTWxELFVBQVViLFVBQ3ZGSSxTQUFTeUgsMEJBQ1Q4RSxhQUFhLElBQUlGLG1CQUFtQnpNLFNBQVNJLFFBQVFELE1BQU1HLFdBQVdPLFVBQVVtRDtJQUV0RixPQUFPMkk7QUFDVDtBQUVPLFNBQVMxTyx3QkFBd0I4RCxTQUFTLEVBQUUvQixPQUFPO0lBQ3hELE1BQU1pQyxhQUFhRixVQUFVMkgsR0FBRyxDQUFDLENBQUN4STtRQUNoQyxNQUFNVSxPQUFPN0QsaUJBQWlCbUQsVUFBVWxCO1FBRXhDLE9BQU80QjtJQUNUO0lBRUEsT0FBT0s7QUFDVDtBQUVPLFNBQVMvRixpQ0FBaUMrSSxjQUFjLEVBQUVqRixPQUFPO0lBQ3RFLE1BQU00TSxpQkFBaUIzSCxlQUFlNEgsaUJBQWlCLElBQ2pEMUgsaUJBQWlCeUgsZUFBZWxELEdBQUcsQ0FBQyxDQUFDdEY7UUFDbkMsTUFBTUMsWUFBWXhJLDJCQUEyQnVJLGVBQWVwRTtRQUU1RCxPQUFPcUU7SUFDVDtJQUVOLE9BQU9jO0FBQ1Q7QUFFTyxTQUFTakssMkNBQTJDd0wsbUJBQW1CLEVBQUUxRyxPQUFPO0lBQ3JGLE1BQU04TSxzQkFBc0JwRyxvQkFBb0JnRCxHQUFHLENBQUMsQ0FBQ3REO1FBQ25ELE1BQU1HLGlCQUFpQnhMLHFDQUFxQ3FMLG9CQUFvQnBHO1FBRWhGLE9BQU91RztJQUNUO0lBRUEsT0FBT3VHO0FBQ1Q7QUFFTyxTQUFTN04sMkRBQTJEOEUsSUFBSSxFQUFFMkQsdUJBQXVCLEVBQUUxSCxPQUFPO0lBQy9HLE1BQU0rTSwwQkFBMEJyRix3QkFBd0JzRiwwQkFBMEIsSUFDNUVwRiwyQkFBMkJtRix3QkFBd0JyRCxHQUFHLENBQUMsQ0FBQzhDO1FBQ3RELE1BQU1TLHFCQUFxQmpPLG9EQUFvRCtFLE1BQU15SSx3QkFBd0J4TTtRQUU3RyxPQUFPaU47SUFDVDtJQUVOLE9BQU9yRjtBQUNUIn0=