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
    const { Step } = _elements.default, node = stepNode, string = context.nodeAsString(node), arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variableAssigments = variableAssignmentsFromStepNode(stepNode, context);
    context = null;
    const step = new Step(context, string, node, arrayAssignment, objectAssigment, variableAssigments);
    return step;
}
function someFromSomeNode(someNode, context) {
    const { Some } = _elements.default, node = someNode, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = someString; ///
    context = null;
    const some = new Some(context, string, node, variable, anonymousProcedure);
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
    ], termString = (0, _string.termStringFromProperties)(properties, context), string = termString; ///
    context = null;
    const term = new Term(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
    return term;
}
function termsFromTermsNode(termsNode, context) {
    const { Terms } = _elements.default, node = termsNode, string = context.nodeAsString(node), termNodes = termsNode.getTermNodes(), termsArray = termsArrayFromTermNodes(termNodes, context), array = termsArray; ///
    context = null;
    const terms = new Terms(context, string, node, array);
    return terms;
}
function errorFromErrorNode(errorNode, context) {
    const { Error } = _elements.default, node = errorNode, string = context.nodeAsString(node);
    context = null;
    const error = new Error(context, string, node);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    const { Every } = _elements.default, node = everyNode, variable = variableFromEveryNode(everyNode, context), anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = everyString; ///
    context = null;
    const every = new Every(context, string, node, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    const { Label } = _elements.default, node = labelNode, string = context.nodeAsString(node), name = nameFromLabelNode(labelNode, context);
    context = null;
    const label = new Label(context, string, node, name);
    return label;
}
function reduceFromReduceNode(reduceNode, context) {
    const { Reduce } = _elements.default, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString; ///
    context = null;
    const reduce = new Reduce(context, string, node, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    const { Ternary } = _elements.default, node = ternaryNode, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString; ///
    context = null;
    const ternary = new Ternary(context, string, node, term, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, string = context.nodeAsString(node), type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionFromVariableNode(variableNode, context);
    context = null;
    const variable = new Variable(context, string, node, type, name, expression);
    return variable;
}
function referenceFromReferenceNode(referenceNode, context) {
    const { Reference } = _elements.default, node = referenceNode, string = context.nodeAsString(node), name = nameFromReferenceNode(referenceNode, context);
    context = null;
    const reference = new Reference(context, string, node, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    let parameter = null;
    const type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        const { Parameter } = _elements.default, node = parameterNode, string = context.nodeAsString(node), name = nameFromParaneterNode(parameterNode, context);
        context = null;
        parameter = new Parameter(context, string, node, type, name);
    }
    return parameter;
}
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    const { NodeQuery } = _elements.default, node = nodeQueryNode, string = context.nodeAsString(node), variable = variableFromNodeQueryNode(nodeQueryNode, context), query = queryFromNodeQueryNode(nodeQueryNode, context);
    context = null;
    const nodeQuery = new NodeQuery(context, string, node, variable, query);
    return nodeQuery;
}
function primitiveFromPrimitiveNode(primitiveNode, context) {
    const { Primitive } = _elements.default, node = primitiveNode, string = context.nodeAsString(node), type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context);
    context = null;
    const primitive = new Primitive(context, string, node, type, value);
    return primitive;
}
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    const { NodesQuery } = _elements.default, node = nodesQueryNode, string = context.nodeAsString(node), variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context);
    context = null;
    const nodesQuery = new NodesQuery(context, string, node, variable, query);
    return nodesQuery;
}
function parametersFromParametersNode(parametersNode, context) {
    const { Parameters } = _elements.default, node = parametersNode, string = context.nodeAsString(node), paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray; ///
    context = null;
    const parameters = new Parameters(context, string, node, array);
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
    ], expressionString = (0, _string.expressionStringFromProperties)(properties, context), string = expressionString; ///
    context = null;
    const expression = new Expression(context, string, node, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    const { ReturnBlock } = _elements.default, node = returnBlockNode, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString; ///
    context = null;
    const returnBlock = new ReturnBlock(context, string, node, steps, nonsensical, returnStatement);
    return returnBlock;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    const { ProcedureCall } = _elements.default, node = procedureCallNode, string = context.nodeAsString(node), reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context);
    context = null;
    const procedureCall = new ProcedureCall(context, string, node, reference, terms);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    const { NamedParameter } = _elements.default, node = namedParameterNode, string = context.nodeAsString(node), type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), alias = aliasFromNamedParameterNode(namedParameterNode, context);
    context = null;
    const namedParameter = new NamedParameter(context, string, node, type, name, alias);
    return namedParameter;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    const { NamedParameters } = _elements.default, node = namedParametersNode, string = context.nodeAsString(node), namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), array = namedParametersArray; ///
    context = null;
    const namedParameters = new NamedParameters(context, string, node, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    const { ArrayAssignment } = _elements.default, node = arrayAssignmentNode, string = context.nodeAsString(node), variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context);
    context = null;
    const arrayAssignment = new ArrayAssignment(context, string, node, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    const { ReturnStatement } = _elements.default, node = returnStatementNode, string = context.nodeAsString(node), term = termFromReturnStatementNode(returnStatementNode, context);
    context = null;
    const returnStatement = new ReturnStatement(context, string, node, term);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    const namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    const { ObjectAssigment } = _elements.default, node = objectAssignmentNode, string = context.nodeAsString(node), variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context);
    context = null;
    const objectAssignment = new ObjectAssigment(context, string, node, variable, namedParameters);
    return objectAssignment;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const { AnonymousProcedure } = _elements.default, node = anonymousProcedureNode, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString; ///
    context = null;
    const anonymousProcedure = new AnonymousProcedure(context, string, node, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    const { VariableAssignments } = _elements.default, node = variableAssignmentsNode, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString; ///
    context = null;
    const variableAssignments = new VariableAssignments(context, string, node, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { ProcedureDeclaration } = _elements.default, node = procedureDeclarationNode, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString; ///
    context = null;
    const procedureDeclaration = new ProcedureDeclaration(context, string, node, procedure);
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
    const { NegatedTerm } = _elements.default, node = negatedTermNode, string = context.nodeAsString(node), termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(context, string, node, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    const { LogicalTerm } = _elements.default, node = logicalTermNode, string = context.nodeAsString(node), type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(context, string, node, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    const { Variable } = _elements.default, node = variableNode, name = nameFromVariableNode(variableNode), expression = expressionFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(context, string, node, type, name, expression);
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
    const { BracketedTerm } = _elements.default, node = bracketedTermNode, string = context.nodeAsString(node), term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(context, string, node, term);
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
    const { ComparisonTerm } = _elements.default, node = comparisonTermNode, string = context.nodeAsString(node), negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(context, string, node, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Procedure } = _elements.default, node = procedureDeclarationNode, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, procedure = new Procedure(context, string, node, type, label, parameters, returnBlock);
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
    const { VariableAssignment } = _elements.default, node = variableAssignmentNode, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(context, string, node, variable, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzdGVwID0gbmV3IFN0ZXAoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVBc3NpZ21lbnRzKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHNvbWVOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lU3RyaW5nID0gc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gc29tZVN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWUgPSBuZXcgU29tZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICB2YXJpYWJsZSxcbiAgICAgICAgICBwcmltaXRpdmUsXG4gICAgICAgICAgbmVnYXRlZFRlcm0sXG4gICAgICAgICAgbG9naWNhbFRlcm0sXG4gICAgICAgICAgYnJhY2tldGVkVGVybSxcbiAgICAgICAgICBjb21wYXJpc29uVGVybVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtU3RyaW5nID0gdGVybVN0cmluZ0Zyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB0ZXJtU3RyaW5nOyAgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybSA9IG5ldyBUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdGVybXMgPSBuZXcgVGVybXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV2ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnlTdHJpbmcgPSBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gZXZlcnlTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5ID0gbmV3IEV2ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWR1Y2VOb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmc7ICAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2UgPSBuZXcgUmVkdWNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJuYXJ5Tm9kZSwgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnlTdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0odGVybSksXG4gICAgICAgIHN0cmluZyA9IHRlcm5hcnlTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnkgPSBuZXcgVGVybmFyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByaW1pdGl2ZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCB2YWx1ZSk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICB0ZXJtLFxuICAgICAgICAgIHNvbWUsXG4gICAgICAgICAgZXZlcnksXG4gICAgICAgICAgcmVkdWNlLFxuICAgICAgICAgIHRlcm5hcnksXG4gICAgICAgICAgbm9kZVF1ZXJ5LFxuICAgICAgICAgIG5vZGVzUXVlcnksXG4gICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nOyAgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuQmxvY2tOb2RlLCAvLy9cbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmc7ICAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHRlcm1zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJOb2RlcyA9IG5hbWVkUGFyYW1ldGVyc05vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlcnNBcnJheTsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgIC8vL1xuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZzsgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIC8vL1xuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkpLFxuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvY2VkdXJlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IGxhYmVsTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybmFyeU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gc29tZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IHRlcm1Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSByZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwcmltaXRpdmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSByZWR1Y2VOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNvbWUgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0U29tZU5vZGUoKTtcblxuICBpZiAoc29tZU5vZGUgIT09IG51bGwpIHtcbiAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlID0gcHJpbWl0aXZlTm9kZS5nZXRWYWx1ZSgpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRFdmVyeU5vZGUoKTtcblxuICBpZiAoZXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TmVnYXRlZFRlcm1Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldExvZ2ljYWxUZXJtTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHJlZHVjZU5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWR1Y2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZWR1Y2VOb2RlKCk7XG5cbiAgaWYgKHJlZHVjZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWR1Y2UgPSByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm5hcnlOb2RlKCk7XG5cbiAgaWYgKHRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRUZXJtID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldEJyYWNrZXRlZFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTk9kZSwgY29udGV4dCkge1xuICBsZXQgY29tcGFyaXNvblRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25UZXJtTm9kZSA9IHRlcm1OT2RlLmdldENvbXBhcmlzb25UZXJtTm9kZSgpO1xuXG4gIGlmIChjb21wYXJpc29uVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25UZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0VGVybXNOb2RlKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybXNOb2RlKHRlcm1zTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsb2dpY2FsVGVybU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWZFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldElmRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaWZFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2RlUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldEFsaWFzKCk7XG5cbiAgcmV0dXJuIGFsaWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBvYmplY3RBc3NpZ25tZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZXNRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBsb2dpY2FsVGVybU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29tcGFyaXNvblRlcm1Ob2RlLmlzTmVnYXRlZCgpO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZWxzZUV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RWxzZUV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShlbHNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbHNlRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCk7XG5cbiAgaWYgKHJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsVGVybU5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRUZXJtID0gbmV3IE5lZ2F0ZWRUZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdGVybSk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsVGVybSA9IG5ldyBMb2dpY2FsVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBuZXcgQnJhY2tldGVkVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb25UZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBuZXcgQ29tcGFyaXNvblRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCBuZWdhdGVkLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUodHlwZSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtdGVyc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUiLCJsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21UZXJtTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUiLCJuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJuZWdhdGVkVGVybUZyb21UZXJtTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZSIsInByaW1pdGl2ZUZyb21UZXJtTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJpbWl0aXZlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFsdWVGcm9tUHJpbWl0aXZlTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdtZW50cyIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsInRlcm1Ob2RlIiwiVGVybSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJwcm9wZXJ0aWVzIiwidGVybVN0cmluZyIsInRlcm1TdHJpbmdGcm9tUHJvcGVydGllcyIsInRlcm0iLCJ0ZXJtc05vZGUiLCJUZXJtcyIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zQXJyYXkiLCJhcnJheSIsInRlcm1zIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwidGVybmFyeVN0cmluZyIsInRlcm5hcnlTdHJpbmdGcm9tVGVybSIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJleHByZXNzaW9uIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwidmFsdWUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJwYXJhbWV0ZXJzIiwiZXhwcmVzc2lvbk5vZGUiLCJFeHByZXNzaW9uIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsIk5hbWVkUGFyYW1ldGVyIiwiYWxpYXMiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyc05vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50IiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJnZXROYW1lIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0VHlwZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldFZhbHVlIiwiZ2V0RXZlcnlOb2RlIiwibmVnYXRlZFRlcm1Ob2RlIiwiZ2V0TmVnYXRlZFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiZ2V0TG9naWNhbFRlcm1Ob2RlIiwiQk9PTEVBTl9UWVBFIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0VGVybmFyeU5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybU5PZGUiLCJjb21wYXJpc29uVGVybU5vZGUiLCJnZXRDb21wYXJpc29uVGVybU5vZGUiLCJnZXRUZXJtc05vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInJpZ2h0VGVybSIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRFbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRSZXR1cm5CbG9ja05vZGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiaXNOb25zZW5zaWNhbCIsImdldFJlZmVyZW5jZU5vZGUiLCJkaXNqdW5jdGlvbiIsImlzRGlzanVuY3Rpb24iLCJOZWdhdGVkVGVybSIsIkxvZ2ljYWxUZXJtIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsIkJyYWNrZXRlZFRlcm0iLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJDb21wYXJpc29uVGVybSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbXRlcnNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWd5QmdCQTtlQUFBQTs7UUF2WUFDO2VBQUFBOztRQThoQkFDO2VBQUFBOztRQThDQUM7ZUFBQUE7O1FBaElBQztlQUFBQTs7UUE1ZkFDO2VBQUFBOztRQXdaQUM7ZUFBQUE7O1FBbVJBQztlQUFBQTs7UUF6VkFDO2VBQUFBOztRQWlYQUM7ZUFBQUE7O1FBOVZBQztlQUFBQTs7UUFrTEFDO2VBQUFBOztRQTlDQUM7ZUFBQUE7O1FBcnZCQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQTBlQUM7ZUFBQUE7O1FBdlVBQztlQUFBQTs7UUE4WEFDO2VBQUFBOztRQStXQUM7ZUFBQUE7O1FBcUNBQztlQUFBQTs7UUFwVUFDO2VBQUFBOztRQW1EQUM7ZUFBQUE7O1FBaUxBQztlQUFBQTs7UUF0MEJBQztlQUFBQTs7UUE4NEJB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