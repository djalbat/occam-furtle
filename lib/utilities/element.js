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
    get booleanFromExpressionNode () {
        return booleanFromExpressionNode;
    },
    get bracketedExpressionFromBracketedExpressionNode () {
        return bracketedExpressionFromBracketedExpressionNode;
    },
    get bracketedExpressionFromExpressionNode () {
        return bracketedExpressionFromExpressionNode;
    },
    get comparisonFromComparisonNode () {
        return comparisonFromComparisonNode;
    },
    get comparisonFromExpressionNode () {
        return comparisonFromExpressionNode;
    },
    get disjunctionFromLogicalExpressionNode () {
        return disjunctionFromLogicalExpressionNode;
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
    get expressionFromBoolean () {
        return expressionFromBoolean;
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
    get expressionFromNode () {
        return expressionFromNode;
    },
    get expressionFromNodes () {
        return expressionFromNodes;
    },
    get expressionFromReduceNode () {
        return expressionFromReduceNode;
    },
    get expressionFromReturnStatementNode () {
        return expressionFromReturnStatementNode;
    },
    get expressionFromStringLiteral () {
        return expressionFromStringLiteral;
    },
    get expressionFromTernaryNode () {
        return expressionFromTernaryNode;
    },
    get expressionFromVariableAssignmentNode () {
        return expressionFromVariableAssignmentNode;
    },
    get expressionsArrayFromExpressionNodes () {
        return expressionsArrayFromExpressionNodes;
    },
    get expressionsArrayFromNodes () {
        return expressionsArrayFromNodes;
    },
    get expressionsFromExpression () {
        return expressionsFromExpression;
    },
    get expressionsFromExpressionsNode () {
        return expressionsFromExpressionsNode;
    },
    get expressionsFromProcedureCallNode () {
        return expressionsFromProcedureCallNode;
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
    get leftExpressionFromCompzrisonNode () {
        return leftExpressionFromCompzrisonNode;
    },
    get leftExpressionFromLogicalExpressionNode () {
        return leftExpressionFromLogicalExpressionNode;
    },
    get logicalExpressionFromExpressionNode () {
        return logicalExpressionFromExpressionNode;
    },
    get logicalExpressionFromLogicalExpressionNode () {
        return logicalExpressionFromLogicalExpressionNode;
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
    get negatedFromComparisonNode () {
        return negatedFromComparisonNode;
    },
    get nodeFromExpressionNode () {
        return nodeFromExpressionNode;
    },
    get nodeQueryFromExpressionNode () {
        return nodeQueryFromExpressionNode;
    },
    get nodeQueryFromNodeQueryNode () {
        return nodeQueryFromNodeQueryNode;
    },
    get nodesFromExpressionNode () {
        return nodesFromExpressionNode;
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
    get numberFromExpressionNode () {
        return numberFromExpressionNode;
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
    get rightExpressionFromCompzrisonNode () {
        return rightExpressionFromCompzrisonNode;
    },
    get rightExpressionFromLogicalExpressionNode () {
        return rightExpressionFromLogicalExpressionNode;
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
    get stringLiteralFromExpressionNode () {
        return stringLiteralFromExpressionNode;
    },
    get ternaryFromExpressionNode () {
        return ternaryFromExpressionNode;
    },
    get ternaryFromTernaryNode () {
        return ternaryFromTernaryNode;
    },
    get typeFromLogcialExpressionNode () {
        return typeFromLogcialExpressionNode;
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
    get typeFromProcedureAnonymousProcedureNode () {
        return typeFromProcedureAnonymousProcedureNode;
    },
    get typeFromProcedureDeclarationNode () {
        return typeFromProcedureDeclarationNode;
    },
    get variableAssignmentFromTypeAndVariableAssignmentNode () {
        return variableAssignmentFromTypeAndVariableAssignmentNode;
    },
    get variableAssignmentsArrayFromVariableAssignmentsNode () {
        return variableAssignmentsArrayFromVariableAssignmentsNode;
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
    get variableFromExpressionAndParameter () {
        return variableFromExpressionAndParameter;
    },
    get variableFromExpressionNode () {
        return variableFromExpressionNode;
    },
    get variableFromNamedParameter () {
        return variableFromNamedParameter;
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
    get variableFromParameter () {
        return variableFromParameter;
    },
    get variableFromReduceNode () {
        return variableFromReduceNode;
    },
    get variableFromSomeNode () {
        return variableFromSomeNode;
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
    var Ternary = _elements.default.Ternary, node = ternaryNode, string = context.nodeAsString(node), expression = expressionFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternary = new Ternary(string, expression, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, string = context.nodeAsString(node), type = null, name = nameFromVariableNode(variableNode, context), expression = null, variable = new Variable(string, type, name, expression);
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
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    var NodesQuery = _elements.default.NodesQuery, node = nodesQueryNode, string = context.nodeAsString(node), variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context), nodesQuery = new NodesQuery(string, variable, query);
    return nodesQuery;
}
function comparisonFromComparisonNode(comparisonNode, context) {
    var Comparison = _elements.default.Comparison, node = comparisonNode, string = context.nodeAsString(node), negated = negatedFromComparisonNode(comparisonNode, context), leftExpression = leftExpressionFromCompzrisonNode(comparisonNode, context), rightExpression = rightExpressionFromCompzrisonNode(comparisonNode, context), comparison = new Comparison(string, negated, leftExpression, rightExpression);
    return comparison;
}
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, node = parametersNode, string = context.nodeAsString(node), paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray, parameters = new Parameters(string, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Expression = _elements.default.Expression, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), stringLiteral = stringLiteralFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), variable = variableFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), comparison = comparisonFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), properties = [
        some,
        every,
        reduce,
        ternary,
        variable,
        nodeQuery,
        nodesQuery,
        comparison,
        returnBlock,
        procedureCall,
        negatedExpression,
        logicalExpression,
        bracketedExpression
    ], expressionString = (0, _string.expressionStringFromNodeNodesNumberBooleanStringLiteralAndProperties)(node, nodes, number, boolean, stringLiteral, properties, context), string = expressionString, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function expressionsFromExpressionsNode(expressionsNode, context) {
    var Expressions = _elements.default.Expressions, node = expressionsNode, string = context.nodeAsString(node), expressionNodes = expressionsNode.getExpressionNodes(), expressionsArray = expressionsArrayFromExpressionNodes(expressionNodes, context), array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, node = procedureCallNode, string = context.nodeAsString(node), reference = referenceFromProcedureCallNode(procedureCallNode, context), expressions = expressionsFromProcedureCallNode(procedureCallNode, context), procedureCall = new ProcedureCall(string, reference, expressions);
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
    var ReturnStatement = _elements.default.ReturnStatement, node = returnStatementNode, string = context.nodeAsString(node), expression = expressionFromReturnStatementNode(returnStatementNode, context), returnStatement = new ReturnStatement(string, expression);
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
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, node = bracketedExpressionNode, string = context.nodeAsString(node), expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, node = variableAssignmentsNode, string = context.nodeAsString(node), variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context), array = variableAssignmentsArray, variableAssignments = new VariableAssignments(string, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var ProcedureDeclaration = _elements.default.ProcedureDeclaration, node = procedureDeclarationNode, string = context.nodeAsString(node), procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclaration = new ProcedureDeclaration(string, procedure);
    return procedureDeclaration;
}
function nameFromLabelNode(labelNode, context) {
    var name = labelNode.getName();
    return name;
}
function expressionFromNode(node, context) {
    var Expression = _elements.default.Expression, expressionString = (0, _string.expressionStringFromNode)(node, context), string = expressionString, nodes = null, number = null, boolean = null, stringLiteral = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function expressionFromNodes(nodes, context) {
    var Expression = _elements.default.Expression, expressionString = (0, _string.expressionStringFromNodes)(nodes, context), string = expressionString, node = null, number = null, boolean = null, ternary = null, stringLiteral = null, some = null, every = null, reduce = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function variableFromSomeNode(someNode, context) {
    var variableNode = someNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var name = variableNode.getName();
    return name;
}
function expressionFromBoolean(boolean, context) {
    var Expression = _elements.default.Expression, expressionString = (0, _string.expressionStringFromBoolean)(boolean), node = null, nodes = null, number = null, stringLiteral = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, string = expressionString, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function variableFromParameter(parameter, context) {
    var Variable = _elements.default.Variable, type = parameter.getType(), name = parameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
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
function variableFromReduceNode(reduceNode, context) {
    var variableNode = reduceNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function nodeFromExpressionNode(expressionNode, context) {
    var node = expressionNode.getNode();
    return node;
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
function queryFromNodesQueryNode(nodesQueryNode, context) {
    var string = nodesQueryNode.getString(), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
}
function nodesFromExpressionNode(expressionNode, context) {
    var nodes = null; ///
    return nodes;
}
function everyFromExpressionNode(expressionNode, context) {
    var every = null;
    var everyNode = expressionNode.getEveryNode();
    if (everyNode !== null) {
        every = everyFromEveryNode(everyNode, context);
    }
    return every;
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
function numberFromExpressionNode(expressionNode, context) {
    var number = expressionNode.getNumber();
    return number;
}
function stepsFromReturnBlockNode(returnBlockNode, context) {
    var stepNodes = returnBlockNode.getStepNodes(), steps = stepNodes.map(function(stepNode) {
        var step = stepFromStepNode(stepNode, context);
        return step;
    });
    return steps;
}
function expressionsFromExpression(expression, context) {
    var Expressions = _elements.default.Expressions, expressionsArray = [
        expression
    ], expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function expressionFromTernaryNode(ternaryNode, context) {
    var expressionNode = ternaryNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function variableFromNodeQueryNode(nodeQueryNode, context) {
    var variableNode = nodeQueryNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function booleanFromExpressionNode(expressionNode, context) {
    var boolean = expressionNode.getBoolean();
    return boolean;
}
function ternaryFromExpressionNode(expressionNode, context) {
    var ternary = null;
    var ternaryNode = expressionNode.getTernaryNode();
    if (ternaryNode !== null) {
        ternary = ternaryFromTernaryNode(ternaryNode, context);
    }
    return ternary;
}
function negatedFromComparisonNode(comparisonNode, context) {
    var negated = comparisonNode.isNegated();
    return negated;
}
function variableFromNamedParameter(namedParameter, context) {
    var Variable = _elements.default.Variable, aliasedName = namedParameter.getAliasedName(), type = namedParameter.getType(), name = aliasedName, expression = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
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
function typeFromNamedParameterNode(namedParameterNode, context) {
    var type = namedParameterNode.getType();
    return type;
}
function nameFromNamedParameterNode(namedParameterNode, context) {
    var name = namedParameterNode.getName();
    return name;
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
function expressionFromStringLiteral(stringLiteral, context) {
    var Expression = _elements.default.Expression, expressionString = (0, _string.expressionStringFromStringLiteral)(stringLiteral), string = expressionString, node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function nodeQueryFromExpressionNode(expressionNode, context) {
    var nodeQuery = null;
    var nodeQueryNode = expressionNode.getNodeQueryNode();
    if (nodeQueryNode !== null) {
        nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
    }
    return nodeQuery;
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
function comparisonFromExpressionNode(expressionNOde, context) {
    var comparison = null;
    var comparisonNode = expressionNOde.getComparisonNode();
    if (comparisonNode !== null) {
        comparison = comparisonFromComparisonNode(comparisonNode, context);
    }
    return comparison;
}
function aliasFromNamedParameterNode(namedParameterNode, context) {
    var alias = namedParameterNode.getAlias();
    return alias;
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
function typeFromLogcialExpressionNode(logicalExpressionNode, context) {
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
function variableFromTypeAndVariableNode(type, variableNode, context) {
    var Variable = _elements.default.Variable, name = nameFromVariableNode(variableNode), expression = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
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
function stringLiteralFromExpressionNode(expressionNode, context) {
    var stringLiteral = expressionNode.getStringLiteral();
    return stringLiteral;
}
function procedureCallFromExpressionNode(expressionNode, context) {
    var procedureCall = null;
    var procedureCallNode = expressionNode.getProcedureCallNode();
    if (procedureCallNode !== null) {
        procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }
    return procedureCall;
}
function variableFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var variableNode = arrayAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function anonymousProcedureFromReduceNode(reduceNode, context) {
    var anonymousProcedureNode = reduceNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function leftExpressionFromCompzrisonNode(comparisonNode, context) {
    var leftExpressionNode = comparisonNode.getLeftExpressionNode(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context);
    return leftExpression;
}
function variableFromObjectAssignmentNode(objectAssignmentNode, context) {
    var variableNode = objectAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function expressionsFromProcedureCallNode(procedureCallNode, context) {
    var expressionsNode = procedureCallNode.getExpressionsNode(), expressions = expressionsFromExpressionsNode(expressionsNode, context);
    return expressions;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var type = procedureDeclarationNode.getType();
    return type;
}
function rightExpressionFromCompzrisonNode(comparisonNode, context) {
    var rightExpressionNode = comparisonNode.getLeftExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
    return rightExpression;
}
function expressionFromReturnStatementNode(returnStatementNode, context) {
    var expressionNode = returnStatementNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
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
function variableFromExpressionAndParameter(expression, parameter, context) {
    var Variable = _elements.default.Variable, type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
}
function negatedExpressionFromExpressionNode(expressionNode, context) {
    var negatedExpression = null;
    var negatedExpressionNode = expressionNode.getNegatedExpressionNode();
    if (negatedExpressionNode !== null) {
        negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
    }
    return negatedExpression;
}
function logicalExpressionFromExpressionNode(expressionNode, context) {
    var logicalExpression = null;
    var logicalExpressionNode = expressionNode.getLogicalExpressionNode();
    if (logicalExpressionNode !== null) {
        logicalExpression = logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context);
    }
    return logicalExpression;
}
function expressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var expressionNode = negatedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
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
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
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
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Procedure = _elements.default.Procedure, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, procedure = new Procedure(string, type, label, parameters, returnBlock);
    return procedure;
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
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var LogicalExpression = _elements.default.LogicalExpression, node = logicalExpressionNode, string = context.nodeAsString(node), type = typeFromLogcialExpressionNode(logicalExpressionNode, context), disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context), rightExpression = rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
    return logicalExpression;
}
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var VariableAssignment = _elements.default.VariableAssignment, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromExpressionAndVariable)(expression, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(string, variable, expression);
    return assignment;
}
function expressionsArrayFromNodes(nodes, context) {
    var expressionsArray = nodes.map(function(node) {
        var expression = expressionFromNode(node, context);
        return expression;
    });
    return expressionsArray;
}
function paramtersArrayFromParametersNode(parametersNode, context) {
    var parameterNodes = parametersNode.getParameterNodes(), paramtersArray = parameterNodes.map(function(parameterNode) {
        var parameter = parameterFromParameterNode(parameterNode, context);
        return parameter;
    });
    return paramtersArray;
}
function expressionsArrayFromExpressionNodes(expressionNodes, context) {
    var expressionsArray = expressionNodes.map(function(expressionNode) {
        var expression = expressionFromExpressionNode(expressionNode, context);
        return expression;
    });
    return expressionsArray;
}
function namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context) {
    var namedParamtersArray = namedParameterNodes.map(function(namedParameterNode) {
        var namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);
        return namedParameter;
    });
    return namedParamtersArray;
}
function variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var type = variableAssignmentsNode.getType(), variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map(function(variableAssignmentNode) {
        var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGUsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVzLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21Cb29sZWFuLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsLFxuICAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheSxcbiAgICAgICAgIHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUsXG4gICAgICAgICBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlLFxuICAgICAgICAgcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVOb2Rlc051bWJlckJvb2xlYW5TdHJpbmdMaXRlcmFsQW5kUHJvcGVydGllcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lU3RyaW5nID0gc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gc29tZVN0cmluZywgIC8vL1xuICAgICAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyaW5nKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmcsICAvLy9cbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybmFyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBuZXcgQ29tcGFyaXNvbihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHNvbWUsXG4gICAgICAgICAgZXZlcnksXG4gICAgICAgICAgcmVkdWNlLFxuICAgICAgICAgIHRlcm5hcnksXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgbm9kZVF1ZXJ5LFxuICAgICAgICAgIG5vZGVzUXVlcnksXG4gICAgICAgICAgY29tcGFyaXNvbixcbiAgICAgICAgICByZXR1cm5CbG9jayxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uLFxuICAgICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZU5vZGVzTnVtYmVyQm9vbGVhblN0cmluZ0xpdGVyYWxBbmRQcm9wZXJ0aWVzKG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwscHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uc05vZGUoZXhwcmVzc2lvbnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXhwcmVzc2lvbnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IGV4cHJlc3Npb25zTm9kZS5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgZXhwcmVzc2lvbnNBcnJheSA9IGV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gZXhwcmVzc2lvbnNBcnJheSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsIC8vL1xuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFsaWFzID0gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSwgYWxpYXMpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlck5vZGVzID0gbmFtZWRQYXJhbWV0ZXJzTm9kZS5nZXROYW1lZFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyc0FycmF5ID0gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IG5hbWVkUGFyYW1ldGVyc0FycmF5LCAvLy9cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmV3IE5lZ2F0ZWRFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBuZXcgQnJhY2tldGVkRXhwcmVzc2lvbihzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKHN0cmluZywgcHJvY2VkdXJlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IGxhYmVsTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgIHN0cmluZ0xpdGVyYWwgPSBudWxsLFxuICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gbnVsbCxcbiAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tQm9vbGVhbihib29sZWFuKSxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IG51bGwsXG4gICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSByZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSByZWR1Y2VOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGUoKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNvbWUgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0U29tZU5vZGUoKTtcblxuICBpZiAoc29tZU5vZGUgIT09IG51bGwpIHtcbiAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb25Ob2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBbXG4gICAgICAgICAgZXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkoZXhwcmVzc2lvbnNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBleHByZXNzaW9uc0FycmF5LCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYm9vbGVhbiA9IGV4cHJlc3Npb25Ob2RlLmdldEJvb2xlYW4oKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25Ob2RlLmlzTmVnYXRlZCgpO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFsaWFzZWROYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0QWxpYXNlZE5hbWUoKSxcbiAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgbmFtZSA9IGFsaWFzZWROYW1lLCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWZFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldElmRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaWZFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2RlUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldEFsaWFzKCk7XG5cbiAgcmV0dXJuIGFsaWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZWxzZUV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RWxzZUV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShlbHNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbHNlRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCk7XG5cbiAgaWYgKHJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IGV4cHJlc3Npb25Ob2RlLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldEV4cHJlc3Npb25zTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyKGV4cHJlc3Npb24sIHBhcmFtZXRlciwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobmVnYXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZShleHByZXNzaW9uLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zQXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNBcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH0pO1xuXG4gIHJldHVybiBleHByZXNzaW9uc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbk5vZGVzLm1hcCgoZXhwcmVzc2lvbk5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBleHByZXNzaW9uc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJvb2xlYW4iLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21Ob2RlIiwiZXhwcmVzc2lvbkZyb21Ob2RlcyIsImV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbCIsImV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25zQXJyYXlGcm9tTm9kZXMiLCJleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlIiwiZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlIiwibm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm51bWJlckZyb21FeHByZXNzaW9uTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21FeHByZXNzaW9uTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21QYXJhbmV0ZXJOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21OYW1lZFBhcmFtZXRlciIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUGFyYW1ldGVyIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImV4cHJlc3Npb24iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uTm9kZSIsIkNvbXBhcmlzb24iLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJjb21wYXJpc29uIiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJhcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJwcm9wZXJ0aWVzIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZU5vZGVzTnVtYmVyQm9vbGVhblN0cmluZ0xpdGVyYWxBbmRQcm9wZXJ0aWVzIiwiZXhwcmVzc2lvbnNOb2RlIiwiRXhwcmVzc2lvbnMiLCJleHByZXNzaW9uTm9kZXMiLCJnZXRFeHByZXNzaW9uTm9kZXMiLCJleHByZXNzaW9uc0FycmF5IiwiZXhwcmVzc2lvbnMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZ2V0TmFtZSIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZSIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXMiLCJnZXRWYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uU3RyaW5nRnJvbUJvb2xlYW4iLCJnZXRUeXBlIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0Tm9kZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldEV2ZXJ5Tm9kZSIsImdldFJlZHVjZU5vZGUiLCJnZXROdW1iZXIiLCJzdGVwTm9kZXMiLCJnZXRTdGVwTm9kZXMiLCJtYXAiLCJleHByZXNzaW9uc1N0cmluZyIsImV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkiLCJnZXRCb29sZWFuIiwiZ2V0VGVybmFyeU5vZGUiLCJpc05lZ2F0ZWQiLCJhbGlhc2VkTmFtZSIsImdldEFsaWFzZWROYW1lIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJleHByZXNzaW9uTk9kZSIsImdldENvbXBhcmlzb25Ob2RlIiwiZ2V0QWxpYXMiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRFbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRSZXR1cm5CbG9ja05vZGUiLCJCT09MRUFOX1RZUEUiLCJsb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiaXNOb25zZW5zaWNhbCIsImdldFJlZmVyZW5jZU5vZGUiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImxlZnRFeHByZXNzaW9uTm9kZSIsImdldExlZnRFeHByZXNzaW9uTm9kZSIsImdldEV4cHJlc3Npb25zTm9kZSIsInJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsImdldExhYmVsTm9kZSIsImdldFJldHVyblN0YXRlbWVudE5vZGUiLCJnZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJnZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJkaXNqdW5jdGlvbiIsImlzRGlzanVuY3Rpb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJnZXRSaWdodEV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbXRlcnNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTJ4QmdCQTtlQUFBQTs7UUE1Y0FDO2VBQUFBOztRQTRoQkFDO2VBQUFBOztRQXVDQUM7ZUFBQUE7O1FBbEZBQztlQUFBQTs7UUFwaUJBQztlQUFBQTs7UUFrYUFDO2VBQUFBOztRQXBFQUM7ZUFBQUE7O1FBL1JBQztlQUFBQTs7UUFpc0JBQztlQUFBQTs7UUE1M0JBQztlQUFBQTs7UUErbUJBQztlQUFBQTs7UUF5UEFDO2VB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