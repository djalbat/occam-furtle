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
    get expressionFromReturnStatementNode () {
        return expressionFromReturnStatementNode;
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
function variableFromSomeNode(someNode, context) {
    var variableNode = someNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function nameFromVariableNode(variableNode) {
    var name = variableNode.getName();
    return name;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2RlTm9kZXNOdW1iZXJCb29sZWFuU3RyaW5nTGl0ZXJhbEFuZFByb3BlcnRpZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm5hcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSBuZXcgVGVybmFyeShzdHJpbmcsIGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIGNvbXBhcmlzb24sXG4gICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbixcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbixcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uXG4gICAgICAgIF0sXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVOb2Rlc051bWJlckJvb2xlYW5TdHJpbmdMaXRlcmFsQW5kUHJvcGVydGllcyhub2RlLCBub2RlcywgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsLHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlKGV4cHJlc3Npb25zTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25zTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uTm9kZXMgPSBleHByZXNzaW9uc05vZGUuZ2V0RXhwcmVzc2lvbk5vZGVzKCksXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25zQXJyYXksXG4gICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAvLy9cbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJOb2RlcyA9IG5hbWVkUGFyYW1ldGVyc05vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlcnNBcnJheSwgLy8vXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5ldyBOZWdhdGVkRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gc29tZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSByZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSByZWR1Y2VOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGUoKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNvbWUgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0U29tZU5vZGUoKTtcblxuICBpZiAoc29tZU5vZGUgIT09IG51bGwpIHtcbiAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb25Ob2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbk5vZGUuZ2V0Qm9vbGVhbigpO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29tcGFyaXNvbk5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWZFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldElmRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaWZFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2RlUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldEFsaWFzKCk7XG5cbiAgcmV0dXJuIGFsaWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTk9kZSwgY29udGV4dCkge1xuICBsZXQgY29tcGFyaXNvbiA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSBleHByZXNzaW9uTk9kZS5nZXRDb21wYXJpc29uTm9kZSgpO1xuXG4gIGlmIChjb21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb24gPSBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZWxzZUV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RWxzZUV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShlbHNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbHNlRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCk7XG5cbiAgaWYgKHJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IGV4cHJlc3Npb25Ob2RlLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldEV4cHJlc3Npb25zTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobG9naWNhbEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBuZXcgTG9naWNhbEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlKGV4cHJlc3Npb24sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbk5vZGVzLm1hcCgoZXhwcmVzc2lvbk5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBleHByZXNzaW9uc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzIiwiZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlIiwiZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlIiwibm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm51bWJlckZyb21FeHByZXNzaW9uTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21FeHByZXNzaW9uTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21QYXJhbmV0ZXJOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImV4cHJlc3Npb24iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uTm9kZSIsIkNvbXBhcmlzb24iLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJjb21wYXJpc29uIiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJhcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJwcm9wZXJ0aWVzIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZU5vZGVzTnVtYmVyQm9vbGVhblN0cmluZ0xpdGVyYWxBbmRQcm9wZXJ0aWVzIiwiZXhwcmVzc2lvbnNOb2RlIiwiRXhwcmVzc2lvbnMiLCJleHByZXNzaW9uTm9kZXMiLCJnZXRFeHByZXNzaW9uTm9kZXMiLCJleHByZXNzaW9uc0FycmF5IiwiZXhwcmVzc2lvbnMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZ2V0TmFtZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFR5cGUiLCJnZXROb2RlIiwiZ2V0U29tZU5vZGUiLCJnZXRTdHJpbmciLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0RXZlcnlOb2RlIiwiZ2V0UmVkdWNlTm9kZSIsImdldE51bWJlciIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldEJvb2xlYW4iLCJnZXRUZXJuYXJ5Tm9kZSIsImlzTmVnYXRlZCIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJleHByZXNzaW9uTk9kZSIsImdldENvbXBhcmlzb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRFeHByZXNzaW9uc05vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwiZGlzanVuY3Rpb24iLCJpc0Rpc2p1bmN0aW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJMb2dpY2FsRXhwcmVzc2lvbiIsIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvbUJnQkE7ZUFBQUE7O1FBMVJBQztlQUFBQTs7UUE4WUFDO2VBQUFBOztRQXVDQUM7ZUFBQUE7O1FBbEZBQztlQUFBQTs7UUF0WkFDO2VBQUFBOztRQThTQUM7ZUFBQUE7O1FBdkRBQztlQUFBQTs7UUF4TEFDO2VBQUFBOztRQXdpQkFDO2VBQUFBOztRQW51QkFDO2VBQUFBOztRQXVlQUM7ZUFBQUE7O1FBd09BQztlQUFBQTs7UUE1TkFDO2VBQUFBOztRQXRtQkFDO2VBQUFBOztRQVNBQztlQUFBQTs7UUErWkFDO2VBQUFBOztRQTBiQUM7ZUFBQUE7O1FBeHRC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