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
    get primitiveFromReturnStatementNode () {
        return primitiveFromReturnStatementNode;
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
    var ReturnStatement = _elements.default.ReturnStatement, node = returnStatementNode, string = context.nodeAsString(node), primitive = primitiveFromReturnStatementNode(returnStatementNode, context), returnStatement = new ReturnStatement(string, primitive);
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
function primitiveFromReturnStatementNode(returnStatementNode, context) {
    var primitiveNode = returnStatementNode.getPrimitiveNode(), primitive = primitiveFromPrimitiveNode(primitiveNode, context);
    return primitive;
}
function expressionFromTypeAndVariableNode(type, variableNode, context) {
    var expression = null;
    return expression;
}
function rightExpressionFromCompzrisonNode(comparisonNode, context) {
    var rightExpressionNode = comparisonNode.getLeftExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
    return rightExpression;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihzdHJpbmcpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnlTdHJpbmcgPSBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gZXZlcnlTdHJpbmcsIC8vL1xuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2VTdHJpbmcgPSByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHJlZHVjZVN0cmluZywgIC8vL1xuICAgICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJuYXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCBleHByZXNzaW9uLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwcmltaXRpdmVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlU3RyaW5nLCAvLy9cbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBuZXcgQ29tcGFyaXNvbihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgc29tZSxcbiAgICAgICAgICBldmVyeSxcbiAgICAgICAgICByZWR1Y2UsXG4gICAgICAgICAgdGVybmFyeSxcbiAgICAgICAgICB2YXJpYWJsZSxcbiAgICAgICAgICBub2RlUXVlcnksXG4gICAgICAgICAgbm9kZXNRdWVyeSxcbiAgICAgICAgICBjb21wYXJpc29uLFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24sXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24sXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgcHJpbWl0aXZlLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBleHByZXNzaW9uc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGVzID0gZXhwcmVzc2lvbnNOb2RlLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbnNBcnJheUZyb21FeHByZXNzaW9uTm9kZXMoZXhwcmVzc2lvbk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBleHByZXNzaW9uc0FycmF5LFxuICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgLy8vXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXksIC8vL1xuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuZXcgTmFtZWRQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCBwcmltaXRpdmUpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG5ldyBCcmFja2V0ZWRFeHByZXNzaW9uKHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oc3RyaW5nLCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gcHJpbWl0aXZlTm9kZS5nZXROb2RlKCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0Zyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSByZWR1Y2VOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNvbWUgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0U29tZU5vZGUoKTtcblxuICBpZiAoc29tZU5vZGUgIT09IG51bGwpIHtcbiAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBudW1iZXIgPSBwcmltaXRpdmVOb2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBib29sZWFuID0gcHJpbWl0aXZlTm9kZS5nZXRCb29sZWFuKCk7XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHJlZHVjZU5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWR1Y2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZWR1Y2VOb2RlKCk7XG5cbiAgaWYgKHJlZHVjZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWR1Y2UgPSByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29tcGFyaXNvbk5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWZFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldElmRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaWZFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYWxpYXMgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0QWxpYXMoKTtcblxuICByZXR1cm4gYWxpYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHByaW1pdGl2ZU5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gIHJldHVybiBzdHJpbmdMaXRlcmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldEV4cHJlc3Npb25zTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5TdGF0ZW1lbnROb2RlID0gcmV0dXJuQmxvY2tOb2RlLmdldFJldHVyblN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbWVudE5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBwcm9jZWR1cmUgPSBuZXcgUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gcHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZShleHByZXNzaW9uLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNBcnJheSA9IGV4cHJlc3Npb25Ob2Rlcy5tYXAoKGV4cHJlc3Npb25Ob2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW10ZXJzQXJyYXkgPSBuYW1lZFBhcmFtZXRlck5vZGVzLm1hcCgobmFtZWRQYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbnNBcnJheUZyb21FeHByZXNzaW9uTm9kZXMiLCJleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uc05vZGUiLCJleHByZXNzaW9uc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uTm9kZSIsImxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibmFtZUZyb21MYWJlbE5vZGUiLCJuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsIm5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwibmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUiLCJub2RlRnJvbVByaW1pdGl2ZU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzRnJvbVByaW1pdGl2ZU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm51bWJlckZyb21QcmltaXRpdmVOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21FeHByZXNzaW9uTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsIm5vZGUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwicHJpbWl0aXZlU3RyaW5nIiwibm9kZXMiLCJudW1iZXIiLCJib29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsInByaW1pdGl2ZSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uTm9kZSIsIkNvbXBhcmlzb24iLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJjb21wYXJpc29uIiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJhcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsInByb3BlcnRpZXMiLCJleHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzIiwiZXhwcmVzc2lvbnNOb2RlIiwiRXhwcmVzc2lvbnMiLCJleHByZXNzaW9uTm9kZXMiLCJnZXRFeHByZXNzaW9uTm9kZXMiLCJleHByZXNzaW9uc0FycmF5IiwiZXhwcmVzc2lvbnMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZ2V0TmFtZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFR5cGUiLCJnZXROb2RlIiwiZ2V0U29tZU5vZGUiLCJnZXRTdHJpbmciLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0TnVtYmVyIiwiZ2V0RXZlcnlOb2RlIiwiZ2V0Qm9vbGVhbiIsImdldFJlZHVjZU5vZGUiLCJzdGVwTm9kZXMiLCJnZXRTdGVwTm9kZXMiLCJtYXAiLCJnZXRUZXJuYXJ5Tm9kZSIsImlzTmVnYXRlZCIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldFByaW1pdGl2ZU5vZGUiLCJnZXROb2RlUXVlcnlOb2RlIiwiZ2V0QWxpYXMiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiZXhwcmVzc2lvbk5PZGUiLCJnZXRDb21wYXJpc29uTm9kZSIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsIkJPT0xFQU5fVFlQRSIsImxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFN0cmluZ0xpdGVyYWwiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0RXhwcmVzc2lvbnNOb2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsImdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsImRpc2p1bmN0aW9uIiwiaXNEaXNqdW5jdGlvbiIsImdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiTG9naWNhbEV4cHJlc3Npb24iLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlIiwiYXNzaWdubWVudCIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtdGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc29CZ0JBO2VBQUFBOztRQWxUQUM7ZUFBQUE7O1FBNGFBQztlQUFBQTs7UUFpQ0FDO2VBQUFBOztRQWxGQUM7ZUFBQUE7O1FBOWFBQztlQUFBQTs7UUEwVEFDO2VBQUFBOztRQXpHQUM7ZUFBQUE7O1FBbEpBQztlQUFBQTs7UUFza0JBQztlQUFBQTs7UUE3dkJBQztlQUFBQTs7UUEyZkFDO2VBQUFBOztRQThPQUM7ZUFBQUE7O1FBbE9BQztlQUFBQTs7UUF4b0JBQztlQUFBQTs7UUFTQUM7ZUFBQUE7O1FBcWJBQztlQUFBQTs7UUE0Y0FDO2VBQUFBOztRQWx2QkFDO2VBQUFBOztRQW9zQkFDO2VBQUFBOztRQTVZQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFvVEFDO2VBQUFBOztRQWlFQUM7ZUFBQUE7O1FBclZBQztlQUFBQTs7UUE0ZEFDO2VBQUFBOztRQTV5QkFDO2VBQUFBOztRQWdsQkFDO2VBQUFBOztRQS9NQUM7ZUFBQUE7O1FBZ0tBQztlQUFBQTs7UUEzc0JBQztlQUFBQTs7UUFreUJBQztlQUFBQTs7UUF0REFDO2VBQUFBOztRQWtMQUM7ZUFBQUE7O1FBbEdBQztlQUFBQTs7UUF1SEFDO2VBQUFBOztRQWhuQkFDO2VBQUFBOztRQXNOQUM7ZUFBQUE7O1FBaExBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBL0JBQztlQUFBQTs7UUFuSUFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFpQ0FDO2VBQUFBOztRQXN1QkFDO2VBQUFBOztRQWhMQUM7ZUFBQUE7O1FBcGlCQUM7ZUFBQUE7O1FBd09BQztlQUFBQTs7UUEvSEFDO2VBQUFBOztRQXlNQUM7ZUFBQUE7O1FBcmZBQztlQUFBQTs7UUFrVEFDO2VBQUFBOztRQWlPQUM7ZUFBQUE7O1FBMWZBQztlQUFBQTs7UUF3akJBQztlQUFBQTs7UUE5UEFDO2VBQUFBOztRQTNKQUM7ZUFBQUE7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