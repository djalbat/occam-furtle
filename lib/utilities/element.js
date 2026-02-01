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
    get booleanFromPrimitiveNode () {
        return booleanFromPrimitiveNode;
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
    get expressionFromTypeAndVariableNode () {
        return expressionFromTypeAndVariableNode;
    },
    get expressionFromVariableAssignmentNode () {
        return expressionFromVariableAssignmentNode;
    },
    get expressionFromVariableNode () {
        return expressionFromVariableNode;
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
    get nodeFromPrimitiveNode () {
        return nodeFromPrimitiveNode;
    },
    get nodeQueryFromExpressionNode () {
        return nodeQueryFromExpressionNode;
    },
    get nodeQueryFromNodeQueryNode () {
        return nodeQueryFromNodeQueryNode;
    },
    get nodesFromPrimitiveNode () {
        return nodesFromPrimitiveNode;
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
    get numberFromPrimitiveNode () {
        return numberFromPrimitiveNode;
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
    get stringLiteralFromPrimitiveNode () {
        return stringLiteralFromPrimitiveNode;
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
    get typeFromVariableNode () {
        return typeFromVariableNode;
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
    var Primitive = _elements.default.Primitive, primitiveString = context.nodeAsString(primitiveNode), string = primitiveString, node = nodeFromPrimitiveNode(primitiveNode, context), nodes = nodesFromPrimitiveNode(primitiveNode, context), number = numberFromPrimitiveNode(primitiveNode, context), boolean = booleanFromPrimitiveNode(primitiveNode, context), stringLiteral = stringLiteralFromPrimitiveNode(primitiveNode, context), primitive = new Primitive(string, node, nodes, number, boolean, stringLiteral);
    return primitive;
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
    var Expression = _elements.default.Expression, primitive = primitiveFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), variable = variableFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), comparison = comparisonFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), properties = [
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
    ], expressionString = (0, _string.expressionStringFromPrimitiveAndProperties)(primitive, properties, context), string = expressionString, expression = new Expression(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
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
function typeFromVariableNode(variableNode, context) {
    var type = null;
    return type;
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
function nodeFromPrimitiveNode(primitiveNode, context) {
    var node = primitiveNode.getNode();
    return node;
}
function nodesFromPrimitiveNode(primitiveNode, context) {
    var nodes = null;
    return nodes;
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
function numberFromPrimitiveNode(primitiveNode, context) {
    var number = primitiveNode.getNumber();
    return number;
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
function booleanFromPrimitiveNode(primitiveNode, context) {
    var boolean = primitiveNode.getBoolean();
    return boolean;
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
function expressionFromTernaryNode(ternaryNode, context) {
    var expressionNode = ternaryNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
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
function negatedFromComparisonNode(comparisonNode, context) {
    var negated = comparisonNode.isNegated();
    return negated;
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
function stringLiteralFromPrimitiveNode(primitiveNode, context) {
    var stringLiteral = primitiveNode.getStringLiteral();
    return stringLiteral;
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
function expressionFromTypeAndVariableNode(type, variableNode, context) {
    var expression = null;
    return expression;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihzdHJpbmcpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnlTdHJpbmcgPSBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gZXZlcnlTdHJpbmcsIC8vL1xuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2VTdHJpbmcgPSByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHJlZHVjZVN0cmluZywgIC8vL1xuICAgICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJuYXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCBleHByZXNzaW9uLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwcmltaXRpdmVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlU3RyaW5nLFxuICAgICAgICBub2RlID0gbm9kZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IG5ldyBDb21wYXJpc29uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gcGFyYW10ZXJzQXJyYXksIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIGNvbXBhcmlzb24sXG4gICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbixcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbixcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uXG4gICAgICAgIF0sXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMocHJpbWl0aXZlLCBwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oc3RyaW5nLCBwcmltaXRpdmUsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlKGV4cHJlc3Npb25zTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25zTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uTm9kZXMgPSBleHByZXNzaW9uc05vZGUuZ2V0RXhwcmVzc2lvbk5vZGVzKCksXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25zQXJyYXksXG4gICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAvLy9cbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJOb2RlcyA9IG5hbWVkUGFyYW1ldGVyc05vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlcnNBcnJheSwgLy8vXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5ldyBOZWdhdGVkRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gc29tZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSByZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBwcmltaXRpdmVOb2RlLmdldE5vZGUoKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IHByaW1pdGl2ZU5vZGUuZ2V0TnVtYmVyKCk7XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRFdmVyeU5vZGUoKTtcblxuICBpZiAoZXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvb2xlYW4gPSBwcmltaXRpdmVOb2RlLmdldEJvb2xlYW4oKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm5hcnlOb2RlKCk7XG5cbiAgaWYgKHRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBvYmplY3RBc3NpZ25tZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZXNRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gZXhwcmVzc2lvbk5PZGUuZ2V0Q29tcGFyaXNvbk5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gcHJpbWl0aXZlTm9kZS5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gc3RlcE5vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUoKTtcblxuICBpZiAodmFyaWFibGVBc3NpZ25tZW50c05vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgcmV0dXJuIGluaXRpYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBjb21wYXJpc29uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0RXhwcmVzc2lvbnNOb2RlKCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlKGV4cHJlc3Npb25zTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobG9naWNhbEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUoZXhwcmVzc2lvbiwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNBcnJheUZyb21FeHByZXNzaW9uTm9kZXMoZXhwcmVzc2lvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zQXJyYXkgPSBleHByZXNzaW9uTm9kZXMubWFwKChleHByZXNzaW9uTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtdGVyc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzLm1hcCgodmFyaWFibGVBc3NpZ25tZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXk7XG59XG4iXSwibmFtZXMiOlsiYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZSIsImJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZSIsImNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzIiwiZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlIiwiZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlIiwibm9kZUZyb21QcmltaXRpdmVOb2RlIiwibm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJub2Rlc0Zyb21QcmltaXRpdmVOb2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJudW1iZXJGcm9tUHJpbWl0aXZlTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZSIsInByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsInF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwicmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlIiwicmVkdWNlRnJvbVJlZHVjZU5vZGUiLCJyZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJzdHJpbmdMaXRlcmFsRnJvbVByaW1pdGl2ZU5vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImV4cHJlc3Npb24iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsInByaW1pdGl2ZU5vZGUiLCJQcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwicHJpbWl0aXZlIiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb25Ob2RlIiwiQ29tcGFyaXNvbiIsIm5lZ2F0ZWQiLCJsZWZ0RXhwcmVzc2lvbiIsInJpZ2h0RXhwcmVzc2lvbiIsImNvbXBhcmlzb24iLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsImFycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwicHJvcGVydGllcyIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMiLCJleHByZXNzaW9uc05vZGUiLCJFeHByZXNzaW9ucyIsImV4cHJlc3Npb25Ob2RlcyIsImdldEV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25zQXJyYXkiLCJleHByZXNzaW9ucyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsIk5hbWVkUGFyYW1ldGVyIiwiYWxpYXMiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyc05vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50IiwibmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiTmVnYXRlZEV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uTm9kZSIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJnZXROYW1lIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsImdldE5vZGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXROdW1iZXIiLCJnZXRFdmVyeU5vZGUiLCJnZXRCb29sZWFuIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiaXNOZWdhdGVkIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0UHJpbWl0aXZlTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJleHByZXNzaW9uTk9kZSIsImdldENvbXBhcmlzb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVTdHJpbmdGcm9tTmFtZSIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRFeHByZXNzaW9uc05vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwiZGlzanVuY3Rpb24iLCJpc0Rpc2p1bmN0aW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJMb2dpY2FsRXhwcmVzc2lvbiIsIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFzb0JnQkE7ZUFBQUE7O1FBbFRBQztlQUFBQTs7UUE0YUFDO2VBQUFBOztRQWlDQUM7ZUFBQUE7O1FBbEZBQztlQUFBQTs7UUE5YUFDO2VBQUFBOztRQTBUQUM7ZUFBQUE7O1FBekdBQztlQUFBQTs7UUFsSkFDO2VBQUFBOztRQXNrQkFDO2VBQUFBOztRQTd2QkFDO2VBQUFBOztRQTJmQUM7ZUFBQUE7O1FBOE9BQztlQUFBQTs7UUFsT0FDO2VBQUFBOztRQXhvQkFDO2VBQUFBOztRQVNBQztlQUFBQTs7UUFxYkFDO2VBQUFBOztRQTRjQUM7ZUFBQUE7O1FBbHZCQUM7ZUFBQUE7O1FBb3NCQUM7ZUFBQUE7O1FBNVlBQztlQUFBQTs7UUF3VkFDO2VBQUFBOztRQTFUQUM7ZUFBQUE7O1FBNlNBQztlQUFBQTs7UUF3RUFDO2VBQUFBOztRQXJWQUM7ZUFBQUE7O1FBNGRBQztlQUFBQTs7UUE1eUJBQztlQUFBQTs7UUFnbEJBQztlQUFBQTs7UUEvTUFDO2VBQUFBOztRQWdLQUM7ZUFBQUE7O1FBM3NCQUM7ZUFBQUE7O1FBa3lCQUM7ZUFBQUE7O1FBdERBQztlQUFBQTs7UUFrTEFDO2VBQUFBOztRQWxHQUM7ZUFBQUE7O1FBdUhBQztlQUFBQTs7UUFobkJBQztlQUFBQTs7UUFzTkFDO2VBQUFBOztRQWhMQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQS9CQUM7ZUFBQUE7O1FBbklBQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBaUNBQztlQUFBQTs7UUFzdUJBQztlQUFBQTs7UUFoTEFDO2VBQUFBOztRQXBpQkFDO2VBQUFBOztRQXdPQUM7ZUFBQUE7O1FBL0hBQztlQUFBQTs7UUF5TUFDO2VBQUFBOztRQXJmQUM7ZUFBQUE7O1FBa1RBQztlQUFBQTs7UUFpT0FDO2VBQUFBOztRQTFmQUM7ZUFBQUE7O1FBd2pCQUM7ZUFBQUE7O1FBOVBB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