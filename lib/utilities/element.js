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
    get bracketedExpressionFromBracketedExpressionNode () {
        return bracketedExpressionFromBracketedExpressionNode;
    },
    get bracketedExpressionFromExpressionNode () {
        return bracketedExpressionFromExpressionNode;
    },
    get bracketedTermFromBracketedTermNode () {
        return bracketedTermFromBracketedTermNode;
    },
    get bracketedTermFromTermNode () {
        return bracketedTermFromTermNode;
    },
    get comparisonExpressionFromComparisonExpressionNode () {
        return comparisonExpressionFromComparisonExpressionNode;
    },
    get comparisonExpressionFromExpressionNode () {
        return comparisonExpressionFromExpressionNode;
    },
    get comparisonTermFromComparisonTermNode () {
        return comparisonTermFromComparisonTermNode;
    },
    get comparisonTermFromTermNode () {
        return comparisonTermFromTermNode;
    },
    get disjunctionFromLogicalExpressionNode () {
        return disjunctionFromLogicalExpressionNode;
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
    get expressionFromBracketedExpressionNode () {
        return expressionFromBracketedExpressionNode;
    },
    get expressionFromExpressionNode () {
        return expressionFromExpressionNode;
    },
    get expressionFromNegatedExpressionNode () {
        return expressionFromNegatedExpressionNode;
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
    get leftExpressionFromCompzrisonExpressionNode () {
        return leftExpressionFromCompzrisonExpressionNode;
    },
    get leftExpressionFromLogicalExpressionNode () {
        return leftExpressionFromLogicalExpressionNode;
    },
    get leftTermFromCompzrisonTermNode () {
        return leftTermFromCompzrisonTermNode;
    },
    get leftTermFromLogicalTermNode () {
        return leftTermFromLogicalTermNode;
    },
    get logicalExpressionFromExpressionNode () {
        return logicalExpressionFromExpressionNode;
    },
    get logicalExpressionFromLogicalExpressionNode () {
        return logicalExpressionFromLogicalExpressionNode;
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
    get negatedExpressionFromExpressionNode () {
        return negatedExpressionFromExpressionNode;
    },
    get negatedExpressionFromNegatedExpressionNode () {
        return negatedExpressionFromNegatedExpressionNode;
    },
    get negatedFromComparisonExpressionNode () {
        return negatedFromComparisonExpressionNode;
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
    get primitiveFromExpressionNode () {
        return primitiveFromExpressionNode;
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
    get rightExpressionFromCompzrisonExpressionNode () {
        return rightExpressionFromCompzrisonExpressionNode;
    },
    get rightExpressionFromLogicalExpressionNode () {
        return rightExpressionFromLogicalExpressionNode;
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
    get typeFromLogicalExpressionNode () {
        return typeFromLogicalExpressionNode;
    },
    get typeFromLogicalTermNode () {
        return typeFromLogicalTermNode;
    },
    get typeFromNamedParameterNode () {
        return typeFromNamedParameterNode;
    },
    get typeFromNegatedExpressionNode () {
        return typeFromNegatedExpressionNode;
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
    get variableFromExpressionNode () {
        return variableFromExpressionNode;
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
var _occamquery = require("occam-query");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _types = require("../types");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stepFromStepNode(stepNode, context) {
    var Step = _elements.default.Step, node = stepNode, string = context.nodeAsString(node), arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variablesDeclaration = variableAssignmentsFromStepNode(stepNode, context), step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);
    return step;
}
function someFromSomeNode(someNode, context) {
    var Some = _elements.default.Some, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = someString, some = new Some(string, variable, anonymousProcedure);
    return some;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, variable = variableFromTermNode(termNode, context), primitive = primitiveFromTermNode(termNode, context), negatedTerm = negatedTermFromTermNode(termNode, context), logicalTerm = logicalTermFromTermNode(termNode, context), bracketedTerm = bracketedTermFromTermNode(termNode, context), comparisonTerm = comparisonTermFromTermNode(termNode, context), properties = [
        variable,
        negatedTerm,
        logicalTerm,
        bracketedTerm,
        comparisonTerm
    ], termString = (0, _string.termStringFromPrimitiveAndProperties)(primitive, properties, context), string = termString, term = new Term(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
    return term;
}
function termsFromTermsNode(termsNode, context) {
    var Terms = _elements.default.Terms, node = termsNode, string = context.nodeAsString(node), termNodes = termsNode.getTermNodes(), termsArray = termsArrayFromTermNodes(termNodes, context), array = termsArray, terms = new Terms(string, array);
    return terms;
}
function errorFromErrorNode(errorNode, context) {
    var Error = _elements.default.Error, node = errorNode, string = context.nodeAsString(node), error = new Error(string);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    var Every = _elements.default.Every, variable = variableFromEveryNode(everyNode, context), anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = everyString, every = new Every(string, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    var Label = _elements.default.Label, node = labelNode, string = context.nodeAsString(node), name = nameFromLabelNode(labelNode, context), label = new Label(string, name);
    return label;
}
function reduceFromReduceNode(reduceNode, context) {
    var Reduce = _elements.default.Reduce, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString, reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    var Ternary = _elements.default.Ternary, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString, ternary = new Ternary(string, term, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, string = context.nodeAsString(node), type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionFromVariableNode(variableNode, context), variable = new Variable(string, type, name, expression);
    return variable;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, node = referenceNode, string = context.nodeAsString(node), name = nameFromReferenceNode(referenceNode, context), reference = new Reference(string, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    var parameter = null;
    var type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        var Parameter = _elements.default.Parameter, node = parameterNode, string = context.nodeAsString(node), name = nameFromParaneterNode(parameterNode, context);
        parameter = new Parameter(string, type, name);
    }
    return parameter;
}
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    var NodeQuery = _elements.default.NodeQuery, node = nodeQueryNode, string = context.nodeAsString(node), variable = variableFromNodeQueryNode(nodeQueryNode, context), query = queryFromNodeQueryNode(nodeQueryNode, context), nodeQuery = new NodeQuery(string, variable, query);
    return nodeQuery;
}
function primitiveFromPrimitiveNode(primitiveNode, context) {
    var Primitive = _elements.default.Primitive, primitiveString = context.nodeAsString(primitiveNode), string = primitiveString, type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context), primitive = new Primitive(string, type, value);
    return primitive;
}
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    var NodesQuery = _elements.default.NodesQuery, node = nodesQueryNode, string = context.nodeAsString(node), variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context), nodesQuery = new NodesQuery(string, variable, query);
    return nodesQuery;
}
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, node = parametersNode, string = context.nodeAsString(node), paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray, parameters = new Parameters(string, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Expression = _elements.default.Expression, variable = variableFromExpressionNode(expressionNode, context), primitive = primitiveFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), comparisonExpression = comparisonExpressionFromExpressionNode(expressionNode, context), properties = [
        some,
        every,
        reduce,
        ternary,
        variable,
        nodeQuery,
        nodesQuery,
        returnBlock,
        procedureCall,
        negatedExpression,
        logicalExpression,
        bracketedExpression,
        comparisonExpression
    ], expressionString = (0, _string.expressionStringFromPrimitiveAndProperties)(primitive, properties, context), string = expressionString, expression = new Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression, comparisonExpression);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, node = procedureCallNode, string = context.nodeAsString(node), reference = referenceFromProcedureCallNode(procedureCallNode, context), expressions = termsFromProcedureCallNode(procedureCallNode, context), procedureCall = new ProcedureCall(string, reference, expressions);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    var NamedParameter = _elements.default.NamedParameter, node = namedParameterNode, string = context.nodeAsString(node), type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), alias = aliasFromNamedParameterNode(namedParameterNode, context), namedParameter = new NamedParameter(string, type, name, alias);
    return namedParameter;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    var NamedParameters = _elements.default.NamedParameters, node = namedParametersNode, string = context.nodeAsString(node), namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), array = namedParametersArray, namedParameters = new NamedParameters(string, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var ArrayAssignment = _elements.default.ArrayAssignment, node = arrayAssignmentNode, string = context.nodeAsString(node), variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context), arrayAssignment = new ArrayAssignment(string, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    var ReturnStatement = _elements.default.ReturnStatement, node = returnStatementNode, string = context.nodeAsString(node), term = termFromReturnStatementNode(returnStatementNode, context), returnStatement = new ReturnStatement(string, term);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    var namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var ObjectAssigment = _elements.default.ObjectAssigment, node = objectAssignmentNode, string = context.nodeAsString(node), variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context), objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    return objectAssignment;
}
function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var NegatedExpression = _elements.default.NegatedExpression, node = negatedExpressionNode, string = context.nodeAsString(node), expressionNode = negatedExpressionNode.getExpressionNode(), type = typeFromNegatedExpressionNode(expressionNode, context), expression = expressionFromNegatedExpressionNode(negatedExpressionNode, context), negatedExpression = new NegatedExpression(string, type, expression);
    return negatedExpression;
}
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var LogicalExpression = _elements.default.LogicalExpression, node = logicalExpressionNode, string = context.nodeAsString(node), type = typeFromLogicalExpressionNode(logicalExpressionNode, context), disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context), rightExpression = rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
    return logicalExpression;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, variableAssignments = new VariableAssignments(string, array);
    return variableAssignments;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, node = bracketedExpressionNode, string = context.nodeAsString(node), expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var ComparisonExpression = _elements.default.ComparisonExpression, node = comparisonExpressionNode, string = context.nodeAsString(node), negated = negatedFromComparisonExpressionNode(comparisonExpressionNode, context), leftExpression = leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context), rightExpression = rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context), comparisonExpression = new ComparisonExpression(string, negated, leftExpression, rightExpression);
    return comparisonExpression;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var ProcedureDeclaration = _elements.default.ProcedureDeclaration, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, procedureDeclaration = new ProcedureDeclaration(string, procedure);
    return procedureDeclaration;
}
function nameFromLabelNode(labelNode, context) {
    var name = labelNode.getName();
    return name;
}
function termFromTernaryNode(ternaryNode, context) {
    var termNode = ternaryNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function variableFromSomeNode(someNode, context) {
    var variableNode = someNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function variableFromTermNode(termNode, context) {
    var variable = null;
    var variableNode = termNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
}
function nameFromVariableNode(variableNode) {
    var name = variableNode.getName();
    return name;
}
function typeFromVariableNode(variableNode, context) {
    var type = null;
    return type;
}
function primitiveFromTermNode(termNode, context) {
    var primitive = null;
    var primitiveNode = termNode.getPrimitiveNode();
    if (primitiveNode !== null) {
        primitive = primitiveFromPrimitiveNode(primitiveNode, context);
    }
    return primitive;
}
function variableFromEveryNode(everyNode, context) {
    var variableNode = everyNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromParaneterNode(parameterNode, context) {
    var type = parameterNode.getType();
    return type;
}
function nameFromParaneterNode(parameterNode, context) {
    var name = parameterNode.getName();
    return name;
}
function nameFromReferenceNode(referenceNode, context) {
    var name = referenceNode.getName();
    return name;
}
function typeFromPrimitiveNode(primitiveNode, context) {
    var type = primitiveNode.getType();
    return type;
}
function variableFromReduceNode(reduceNode, context) {
    var variableNode = reduceNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function someFromExpressionNode(expressionNode, context) {
    var some = null;
    var someNode = expressionNode.getSomeNode();
    if (someNode !== null) {
        some = someFromSomeNode(someNode, context);
    }
    return some;
}
function queryFromNodeQueryNode(nodeQueryNode, context) {
    var string = nodeQueryNode.getString(), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
}
function valueFromPrimitiveNode(primitiveNode, context) {
    var value = primitiveNode.getValue();
    return value;
}
function queryFromNodesQueryNode(nodesQueryNode, context) {
    var string = nodesQueryNode.getString(), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
}
function everyFromExpressionNode(expressionNode, context) {
    var every = null;
    var everyNode = expressionNode.getEveryNode();
    if (everyNode !== null) {
        every = everyFromEveryNode(everyNode, context);
    }
    return every;
}
function negatedTermFromTermNode(termNode, context) {
    var negatedTerm = null;
    var negatedTermNode = termNode.getNegatedTermNode();
    if (negatedTermNode !== null) {
        negatedTerm = negatedTermFromNegatedTermNode(negatedTermNode, context);
    }
    return negatedTerm;
}
function logicalTermFromTermNode(termNode, context) {
    var logicalTerm = null;
    var logicalTermNode = termNode.getLogicalTermNode();
    if (logicalTermNode !== null) {
        logicalTerm = logicalTermFromLogicalTermNode(logicalTermNode, context);
    }
    return logicalTerm;
}
function typeFromLogicalTermNode(logicalTermNode, context) {
    var type = _types.BOOLEAN_TYPE;
    return type;
}
function termFromNegatedTermNode(negatedTermNode, context) {
    var termNode = negatedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function expressionFromReduceNode(reduceNode, context) {
    var expressionNode = reduceNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function reduceFromExpressionNode(expressionNode, context) {
    var reduce = null;
    var reduceNode = expressionNode.getReduceNode();
    if (reduceNode !== null) {
        reduce = reduceFromReduceNode(reduceNode, context);
    }
    return reduce;
}
function stepsFromReturnBlockNode(returnBlockNode, context) {
    var stepNodes = returnBlockNode.getStepNodes(), steps = stepNodes.map(function(stepNode) {
        var step = stepFromStepNode(stepNode, context);
        return step;
    });
    return steps;
}
function variableFromNodeQueryNode(nodeQueryNode, context) {
    var variableNode = nodeQueryNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function ternaryFromExpressionNode(expressionNode, context) {
    var ternary = null;
    var ternaryNode = expressionNode.getTernaryNode();
    if (ternaryNode !== null) {
        ternary = ternaryFromTernaryNode(ternaryNode, context);
    }
    return ternary;
}
function bracketedTermFromTermNode(termNode, context) {
    var bracketedTerm = null;
    var bracketedTermNode = termNode.getBracketedTermNode();
    if (bracketedTermNode !== null) {
        bracketedTerm = bracketedTermFromBracketedTermNode(bracketedTermNode, context);
    }
    return bracketedTerm;
}
function termFromBracketedTermNode(bracketedTermNode, context) {
    var termNode = bracketedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function comparisonTermFromTermNode(termNOde, context) {
    var comparisonTerm = null;
    var comparisonTermNode = termNOde.getComparisonTermNode();
    if (comparisonTermNode !== null) {
        comparisonTerm = comparisonTermFromComparisonTermNode(comparisonTermNode, context);
    }
    return comparisonTerm;
}
function expressionFromVariableNode(variableNode, context) {
    var expression = null;
    return expression;
}
function variableFromNodesQueryNode(nodesQueryNode, context) {
    var variableNode = nodesQueryNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function variableFromExpressionNode(expressionNode, context) {
    var variable = null;
    var variableNode = expressionNode.getVariableNode();
    if (variableNode !== null) {
        variable = variableFromVariableNode(variableNode, context);
    }
    return variable;
}
function termsFromProcedureCallNode(procedureCallNode, context) {
    var termsNode = procedureCallNode.getTermsNode(), terms = termsFromTermsNode(termsNode, context);
    return terms;
}
function typeFromNamedParameterNode(namedParameterNode, context) {
    var type = namedParameterNode.getType();
    return type;
}
function nameFromNamedParameterNode(namedParameterNode, context) {
    var name = namedParameterNode.getName();
    return name;
}
function leftTermFromLogicalTermNode(logicalTermNode, context) {
    var leftTermNode = logicalTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function arrayAssignmentFromStepNode(stepNode, context) {
    var arrayAssignment = null;
    var arrayAssignmentNode = stepNode.getArrayAssignmentNode();
    if (arrayAssignmentNode !== null) {
        arrayAssignment = arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context);
    }
    return arrayAssignment;
}
function ifExpressionFromTernaryNode(ternaryNode, context) {
    var ifExpressionNode = ternaryNode.getIfExpressionNode(), ifExpression = expressionFromExpressionNode(ifExpressionNode, context);
    return ifExpression;
}
function primitiveFromExpressionNode(expressionNode, context) {
    var primitive = null;
    var primitiveNode = expressionNode.getPrimitiveNode();
    if (primitiveNode !== null) {
        primitive = primitiveFromPrimitiveNode(primitiveNode, context);
    }
    return primitive;
}
function nodeQueryFromExpressionNode(expressionNode, context) {
    var nodeQuery = null;
    var nodeQueryNode = expressionNode.getNodeQueryNode();
    if (nodeQueryNode !== null) {
        nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
    }
    return nodeQuery;
}
function aliasFromNamedParameterNode(namedParameterNode, context) {
    var alias = namedParameterNode.getAlias();
    return alias;
}
function termFromReturnStatementNode(returnStatementNode, context) {
    var termNode = returnStatementNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function objectAssignmentFromStepNode(stepNode, context) {
    var objectAssignment = null;
    var objectAssignmentNode = stepNode.getObjectAssignmentNode();
    if (objectAssignmentNode !== null) {
        objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
    }
    return objectAssignment;
}
function nodesQueryFromExpressionNode(expressionNode, context) {
    var nodesQuery = null;
    var nodesQueryNode = expressionNode.getNodesQueryNode();
    if (nodesQueryNode !== null) {
        nodesQuery = nodesQueryFromNodesQueryNode(nodesQueryNode, context);
    }
    return nodesQuery;
}
function rightTermFromLogicalTermNode(logicalTermNode, context) {
    var rightTermNode = logicalTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function negatedFromComparisonTermNode(comparisonTermNode, context) {
    var negated = comparisonTermNode.isNegated();
    return negated;
}
function elseExpressionFromTernaryNode(ternaryNode, context) {
    var elseExpressionNode = ternaryNode.getElseExpressionNode(), elseExpression = expressionFromExpressionNode(elseExpressionNode, context);
    return elseExpression;
}
function returnBlockFromExpressionNode(expressionNode, context) {
    var returnBlock = null;
    var returnBlockNode = expressionNode.getReturnBlockNode();
    if (returnBlockNode !== null) {
        returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    }
    return returnBlock;
}
function typeFromNegatedExpressionNode(negatedExpressionNode, context) {
    var type = _types.BOOLEAN_TYPE;
    return type;
}
function typeFromLogicalExpressionNode(logicalExpressionNode, context) {
    var type = _types.BOOLEAN_TYPE;
    return type;
}
function anonymousProcedureFromSomeNode(someNode, context) {
    var anonymousProcedureNode = someNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
    var nonsensical = returnBlockNode.isNonsensical();
    return nonsensical;
}
function referenceFromProcedureCallNode(procedureCallNode, context) {
    var referenceNode = procedureCallNode.getReferenceNode(), reference = referenceFromReferenceNode(referenceNode, context);
    return reference;
}
function leftTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var leftTermNode = comparisonTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function disjunctionFromLogicalTermNode(logicalTermNode, context) {
    var disjunction = logicalTermNode.isDisjunction();
    return disjunction;
}
function negatedTermFromNegatedTermNode(negatedTermNode, context) {
    var NegatedTerm = _elements.default.NegatedTerm, node = negatedTermNode, string = context.nodeAsString(node), termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(string, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    var LogicalTerm = _elements.default.LogicalTerm, node = logicalTermNode, string = context.nodeAsString(node), type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(string, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    var Variable = _elements.default.Variable, name = nameFromVariableNode(variableNode), expression = expressionFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
}
function variableAssignmentsFromStepNode(stepNode, context) {
    var variableAssignments = null;
    var variableAssignmentsNode = stepNode.getVariableAssignmentsNode();
    if (variableAssignmentsNode !== null) {
        variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
    }
    return variableAssignments;
}
function anonymousProcedureFromEveryNode(everyNode, context) {
    var anonymousProcedureNode = everyNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function initialExpressionFromReduceNode(reduceNode, context) {
    var expression = expressionFromReduceNode(reduceNode, context), initialExpression = expression; ///
    return initialExpression;
}
function procedureCallFromExpressionNode(expressionNode, context) {
    var procedureCall = null;
    var procedureCallNode = expressionNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var rightTermNode = comparisonTermNode.getLeftTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function variableFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var variableNode = arrayAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var type = variableAssignmentsNode.getType();
    return type;
}
function anonymousProcedureFromReduceNode(reduceNode, context) {
    var anonymousProcedureNode = reduceNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function variableFromObjectAssignmentNode(objectAssignmentNode, context) {
    var variableNode = objectAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var type = procedureDeclarationNode.getType();
    return type;
}
function expressionFromTypeAndVariableNode(type, variableNode, context) {
    var expression = null;
    return expression;
}
function parametersFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var parametersNode = arrayAssignmentNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function labelFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var labelNode = procedureDeclarationNode.getLabelNode(), label = labelFromLabelNode(labelNode, context);
    return label;
}
function returnStatementFromReturnBlockNode(returnBlockNode, context) {
    var returnStatementNode = returnBlockNode.getReturnStatementNode(), returnStatement = returnStatementFromReturnStatementNode(returnStatementNode, context);
    return returnStatement;
}
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    var BracketedTerm = _elements.default.BracketedTerm, node = bracketedTermNode, string = context.nodeAsString(node), term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(string, term);
    return bracketedTerm;
}
function negatedExpressionFromExpressionNode(expressionNode, context) {
    var negatedExpression = null;
    var negatedExpressionNode = expressionNode.getNegatedExpressionNode();
    if (negatedExpressionNode !== null) {
        negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
    }
    return negatedExpression;
}
function expressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var expressionNode = negatedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function negatedFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var negated = comparisonExpressionNode.isNegated();
    return negated;
}
function logicalExpressionFromExpressionNode(expressionNode, context) {
    var logicalExpression = null;
    var logicalExpressionNode = expressionNode.getLogicalExpressionNode();
    if (logicalExpressionNode !== null) {
        logicalExpression = logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context);
    }
    return logicalExpression;
}
function expressionFromVariableAssignmentNode(variableAssigmentNode, context) {
    var expressionNode = variableAssigmentNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function disjunctionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var disjunction = logicalExpressionNode.isDisjunction();
    return disjunction;
}
function parametersFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var parametersNode = anonymousProcedureNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    var ComparisonTerm = _elements.default.ComparisonTerm, node = comparisonTermNode, string = context.nodeAsString(node), negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(string, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Procedure = _elements.default.Procedure, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, procedure = new Procedure(string, type, label, parameters, returnBlock);
    return procedure;
}
function bracketedExpressionFromExpressionNode(expressionNode, context) {
    var bracketedExpression = null;
    var bracketedExpressionNode = expressionNode.getBracketedExpressionNode();
    if (bracketedExpressionNode !== null) {
        bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
    }
    return bracketedExpression;
}
function expressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var expressionNode = bracketedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function comparisonExpressionFromExpressionNode(expressionNOde, context) {
    var comparisonExpression = null;
    var comparisonExpressionNode = expressionNOde.getComparisonExpressionNode();
    if (comparisonExpressionNode !== null) {
        comparisonExpression = comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context);
    }
    return comparisonExpression;
}
function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var parametersNode = procedureDeclarationNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
    var type = anonymousProcedureNode.getType();
    return type;
}
function returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var returnBlockNode = procedureDeclarationNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var leftExpressionNode = logicalExpressionNode.getLeftExpressionNode(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context);
    return leftExpression;
}
function rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var rightExpressionNode = logicalExpressionNode.getRightExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
    return rightExpression;
}
function variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var variableNode = variableAssignmentNode.getVariableNode(), variable = variableFromTypeAndVariableNode(type, variableNode, context);
    return variable;
}
function leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
    var leftExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context);
    return leftExpression;
}
function rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
    var rightExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
    return rightExpression;
}
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var VariableAssignment = _elements.default.VariableAssignment, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(string, variable, expression);
    return assignment;
}
function termsArrayFromTermNodes(termNodes, context) {
    var termsArray = termNodes.map(function(termNode) {
        var term = termFromTermNode(termNode, context);
        return term;
    });
    return termsArray;
}
function paramtersArrayFromParametersNode(parametersNode, context) {
    var parameterNodes = parametersNode.getParameterNodes(), paramtersArray = parameterNodes.map(function(parameterNode) {
        var parameter = parameterFromParameterNode(parameterNode, context);
        return parameter;
    });
    return paramtersArray;
}
function namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context) {
    var namedParamtersArray = namedParameterNodes.map(function(namedParameterNode) {
        var namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);
        return namedParameter;
    });
    return namedParamtersArray;
}
function variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
    var variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map(function(variableAssignmentNode) {
        var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgbmVnYXRlZFRlcm0sXG4gICAgICAgICAgbG9naWNhbFRlcm0sXG4gICAgICAgICAgYnJhY2tldGVkVGVybSxcbiAgICAgICAgICBjb21wYXJpc29uVGVybVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtU3RyaW5nID0gdGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIHRlcm1zID0gbmV3IFRlcm1zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyaW5nKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmcsICAvLy9cbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgdGVybSwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocHJpbWl0aXZlTm9kZSksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShzdHJpbmcsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgc29tZSxcbiAgICAgICAgICBldmVyeSxcbiAgICAgICAgICByZWR1Y2UsXG4gICAgICAgICAgdGVybmFyeSxcbiAgICAgICAgICB2YXJpYWJsZSxcbiAgICAgICAgICBub2RlUXVlcnksXG4gICAgICAgICAgbm9kZXNRdWVyeSxcbiAgICAgICAgICByZXR1cm5CbG9jayxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uLFxuICAgICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24sXG4gICAgICAgICAgY29tcGFyaXNvbkV4cHJlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyhwcmltaXRpdmUsIHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbiwgY29tcGFyaXNvbkV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsIC8vL1xuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9ucyA9IHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFsaWFzID0gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSwgYWxpYXMpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlck5vZGVzID0gbmFtZWRQYXJhbWV0ZXJzTm9kZS5nZXROYW1lZFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyc0FycmF5ID0gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IG5hbWVkUGFyYW1ldGVyc0FycmF5LCAvLy9cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCB0ZXJtKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmV3IE5lZ2F0ZWRFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gbmV3IENvbXBhcmlzb25FeHByZXNzaW9uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VmFsdWUoKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRUZXJtc05vZGUoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxUZXJtTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZXcgTmVnYXRlZFRlcm0oc3RyaW5nLCB0eXBlLCB0ZXJtKTtcblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbmV3IExvZ2ljYWxUZXJtKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IG5ldyBCcmFja2V0ZWRUZXJtKHN0cmluZywgdGVybSk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmlzTmVnYXRlZCgpO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobG9naWNhbEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbWVudE5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gbmV3IENvbXBhcmlzb25UZXJtKHN0cmluZywgbmVnYXRlZCwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25UZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5PZGUuZ2V0Q29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvbkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUodHlwZSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtdGVyc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21UZXJtTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tVGVybU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm5hcnlOb2RlIiwidGVybXNBcnJheUZyb21UZXJtTm9kZXMiLCJ0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInRlcm1zRnJvbVRlcm1zTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByaW1pdGl2ZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVByaW1pdGl2ZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwidGVybU5vZGUiLCJUZXJtIiwicHJpbWl0aXZlIiwibmVnYXRlZFRlcm0iLCJsb2dpY2FsVGVybSIsImJyYWNrZXRlZFRlcm0iLCJjb21wYXJpc29uVGVybSIsInByb3BlcnRpZXMiLCJ0ZXJtU3RyaW5nIiwidGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzIiwidGVybSIsInRlcm1zTm9kZSIsIlRlcm1zIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNBcnJheSIsImFycmF5IiwidGVybXMiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJsYWJlbCIsInJlZHVjZU5vZGUiLCJSZWR1Y2UiLCJpbml0aWFsRXhwcmVzc2lvbiIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwidGVybmFyeU5vZGUiLCJUZXJuYXJ5IiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5U3RyaW5nIiwidGVybmFyeVN0cmluZ0Zyb21UZXJtIiwidGVybmFyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwidHlwZSIsImV4cHJlc3Npb24iLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsInByaW1pdGl2ZU5vZGUiLCJQcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJ2YWx1ZSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImNvbXBhcmlzb25FeHByZXNzaW9uIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25zIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwiTmFtZWRQYXJhbWV0ZXIiLCJhbGlhcyIsIm5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVyTm9kZXMiLCJnZXROYW1lZFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXkiLCJuYW1lZFBhcmFtZXRlcnMiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlJldHVyblN0YXRlbWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk9iamVjdEFzc2lnbWVudCIsIm9iamVjdEFzc2lnbm1lbnQiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJOZWdhdGVkRXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiTG9naWNhbEV4cHJlc3Npb24iLCJkaXNqdW5jdGlvbiIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJicmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJDb21wYXJpc29uRXhwcmVzc2lvbiIsIm5lZ2F0ZWQiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJnZXROYW1lIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0VHlwZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldFZhbHVlIiwiZ2V0RXZlcnlOb2RlIiwibmVnYXRlZFRlcm1Ob2RlIiwiZ2V0TmVnYXRlZFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiZ2V0TG9naWNhbFRlcm1Ob2RlIiwiQk9PTEVBTl9UWVBFIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiYnJhY2tldGVkVGVybU5vZGUiLCJnZXRCcmFja2V0ZWRUZXJtTm9kZSIsInRlcm1OT2RlIiwiY29tcGFyaXNvblRlcm1Ob2RlIiwiZ2V0Q29tcGFyaXNvblRlcm1Ob2RlIiwiZ2V0VGVybXNOb2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwibGVmdFRlcm0iLCJnZXRBcnJheUFzc2lnbm1lbnROb2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldElmRXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlUXVlcnlOb2RlIiwiZ2V0QWxpYXMiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm0iLCJpc05lZ2F0ZWQiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRFbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRSZXR1cm5CbG9ja05vZGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiaXNOb25zZW5zaWNhbCIsImdldFJlZmVyZW5jZU5vZGUiLCJpc0Rpc2p1bmN0aW9uIiwiTmVnYXRlZFRlcm0iLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsIkxvZ2ljYWxUZXJtIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsIkJyYWNrZXRlZFRlcm0iLCJnZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJnZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJDb21wYXJpc29uVGVybSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25OT2RlIiwiZ2V0Q29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGVmdEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbXRlcnNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW13QmdCQTtlQUFBQTs7UUF2WkFDO2VBQUFBOztRQXlqQkFDO2VBQUFBOztRQThDQUM7ZUFBQUE7O1FBL0hBQztlQUFBQTs7UUF4aUJBQztlQUFBQTs7UUE0YUFDO2VBQUFBOztRQXBWQUM7ZUFBQUE7O1FBaXVCQUM7ZUFBQUE7O1FBbkdBQztlQUFBQTs7UUE1WEFDO2VBQUFBOztRQXhQQUM7ZUFBQUE7O1FBMHVCQUM7ZUFBQUE7O1FBbkRBQztlQUFBQTs7UUE1YUFDO2VBQUFBOztRQStaQUM7ZUFBQUE7O1FBek1BQztlQUFBQTs7UUExREFDO2VBQUFBOztRQXZ1QkFDO2VBQUFBOztRQVNBQztlQUFBQTs7UUE2Y0FDO2VBQUFBOztRQTZrQkFDO2VBQUFBOztRQTE1QkFDO2VBQUFBOztRQWkwQkFDO2VBQUFBOztRQW5jQUM7ZUFBQUE7O1FBa1pBQztlQUFBQTs7UUEwRUFDO2VBQUFBOztRQTVZQUM7ZUFBQUE7O1FBK0RBQztlQUFBQTs7UUF3TUFDO2VBQUFBOztRQTEwQkFDO2VBQUFBOztRQWs1QkFDO2VBQUFBOztRQXlMQUM7ZUFBQUE7O1FBckJBQztlQUFBQTs7UUFoVEFDO2VBQUFBOztR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