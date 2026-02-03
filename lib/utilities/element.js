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
    var ProcedureCall = _elements.default.ProcedureCall, node = procedureCallNode, string = context.nodeAsString(node), reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context), procedureCall = new ProcedureCall(string, reference, terms);
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
    var rightTermNode = comparisonTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgbmVnYXRlZFRlcm0sXG4gICAgICAgICAgbG9naWNhbFRlcm0sXG4gICAgICAgICAgYnJhY2tldGVkVGVybSxcbiAgICAgICAgICBjb21wYXJpc29uVGVybVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtU3RyaW5nID0gdGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIHRlcm1zID0gbmV3IFRlcm1zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyaW5nKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmcsICAvLy9cbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgdGVybSwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocHJpbWl0aXZlTm9kZSksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShzdHJpbmcsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgc29tZSxcbiAgICAgICAgICBldmVyeSxcbiAgICAgICAgICByZWR1Y2UsXG4gICAgICAgICAgdGVybmFyeSxcbiAgICAgICAgICB2YXJpYWJsZSxcbiAgICAgICAgICBub2RlUXVlcnksXG4gICAgICAgICAgbm9kZXNRdWVyeSxcbiAgICAgICAgICByZXR1cm5CbG9jayxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uLFxuICAgICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24sXG4gICAgICAgICAgY29tcGFyaXNvbkV4cHJlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyhwcmltaXRpdmUsIHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbiwgY29tcGFyaXNvbkV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsIC8vL1xuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFsaWFzID0gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSwgYWxpYXMpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlck5vZGVzID0gbmFtZWRQYXJhbWV0ZXJzTm9kZS5nZXROYW1lZFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyc0FycmF5ID0gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IG5hbWVkUGFyYW1ldGVyc0FycmF5LCAvLy9cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCB0ZXJtKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmV3IE5lZ2F0ZWRFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gbmV3IENvbXBhcmlzb25FeHByZXNzaW9uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VmFsdWUoKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRUZXJtc05vZGUoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxUZXJtTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZXcgTmVnYXRlZFRlcm0oc3RyaW5nLCB0eXBlLCB0ZXJtKTtcblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbmV3IExvZ2ljYWxUZXJtKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBuZXcgQnJhY2tldGVkVGVybShzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobmVnYXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvblRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IG5ldyBDb21wYXJpc29uVGVybShzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTk9kZSwgY29udGV4dCkge1xuICBsZXQgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25FeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlKHR5cGUsIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsImNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwiY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUiLCJkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUiLCJlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlIiwiaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZSIsImxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsImxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUxhYmVsTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsIm5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsIm5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwibm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZSIsInByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlIiwicHJpbWl0aXZlRnJvbVRlcm1Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsInF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwicmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlIiwicmVkdWNlRnJvbVJlZHVjZU5vZGUiLCJyZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwicmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsInJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJ0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21Mb2dpY2FsVGVybU5vZGUiLCJ0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21QYXJhbmV0ZXJOb2RlIiwidHlwZUZyb21QcmltaXRpdmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidHlwZUZyb21WYXJpYWJsZU5vZGUiLCJ2YWx1ZUZyb21QcmltaXRpdmVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21SZWR1Y2VOb2RlIiwidmFyaWFibGVGcm9tU29tZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsIm5vZGUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsInRlcm1Ob2RlIiwiVGVybSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJwcm9wZXJ0aWVzIiwidGVybVN0cmluZyIsInRlcm1TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyIsInRlcm0iLCJ0ZXJtc05vZGUiLCJUZXJtcyIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zQXJyYXkiLCJhcnJheSIsInRlcm1zIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwidGVybmFyeVN0cmluZyIsInRlcm5hcnlTdHJpbmdGcm9tVGVybSIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJleHByZXNzaW9uIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwicHJpbWl0aXZlU3RyaW5nIiwidmFsdWUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJwYXJhbWV0ZXJzIiwiZXhwcmVzc2lvbk5vZGUiLCJFeHByZXNzaW9uIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJjb21wYXJpc29uRXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJMb2dpY2FsRXhwcmVzc2lvbiIsImRpc2p1bmN0aW9uIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsImNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsIkNvbXBhcmlzb25FeHByZXNzaW9uIiwibmVnYXRlZCIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImdldE5hbWUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFByaW1pdGl2ZU5vZGUiLCJnZXRUeXBlIiwiZ2V0U29tZU5vZGUiLCJnZXRTdHJpbmciLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRFdmVyeU5vZGUiLCJuZWdhdGVkVGVybU5vZGUiLCJnZXROZWdhdGVkVGVybU5vZGUiLCJsb2dpY2FsVGVybU5vZGUiLCJnZXRMb2dpY2FsVGVybU5vZGUiLCJCT09MRUFOX1RZUEUiLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0VGVybmFyeU5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybU5PZGUiLCJjb21wYXJpc29uVGVybU5vZGUiLCJnZXRDb21wYXJpc29uVGVybU5vZGUiLCJnZXRUZXJtc05vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInJpZ2h0VGVybSIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImlzRGlzanVuY3Rpb24iLCJOZWdhdGVkVGVybSIsInR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlIiwiTG9naWNhbFRlcm0iLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiQnJhY2tldGVkVGVybSIsImdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsIkNvbXBhcmlzb25UZXJtIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5PZGUiLCJnZXRDb21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlIiwiYXNzaWdubWVudCIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtdGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBbXdCZ0JBO2VBQUFBOztRQXZaQUM7ZUFBQUE7O1FBeWpCQUM7ZUFBQUE7O1FBOENBQztlQUFBQTs7UUEvSEFDO2VBQUFBOztRQXhpQkFDO2VBQUFBOztRQTRhQUM7ZUFBQUE7O1FBcFZBQztlQUFBQTs7UUFpdUJBQztlQUFBQTs7UUFuR0FDO2VBQUFBOztRQTVYQUM7ZUFBQUE7O1FBeFBBQztlQUFBQTs7UUEwdUJBQztlQUFBQTs7UUFuREFDO2VBQUFBOztRQTVhQUM7ZUFBQUE7O1FBK1pBQztlQUFBQTs7UUF6TUFDO2VBQUFBOztRQTFEQUM7ZUFBQUE7O1FBdnVCQUM7ZUFBQUE7O1FBU0FDO2VBQUFBOztRQTZjQUM7ZUFBQUE7O1FBNmtCQUM7ZUFBQUE7O1FBMTVCQUM7ZUFBQUE7O1FBaTBCQUM7ZUFBQUE7O1FBbmNBQztlQUFBQTs7UUFrWkFDO2VBQUFBOztRQTBFQUM7ZUFBQUE7O1FBNVlBQztlQUFBQTs7UUErREFDO2VBQUFBOztRQXdNQUM7ZUFBQUE7O1FBMTBCQUM7ZUFBQUE7O1FBazVCQUM7ZUFBQUE7O1FBeUxBQztlQUFBQTs7UUFyQkFDO2VBQUFBOztRQWhUQUM7ZUFBQUE7O1FBdkpBQztlQUFBQTs7UUFvVkFDO2VBQUFB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