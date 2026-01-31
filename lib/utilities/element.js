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
    get asNameFromNamedParameterNode () {
        return asNameFromNamedParameterNode;
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
    get default () {
        return _default;
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
    get expressionfFromVariableNode () {
        return expressionfFromVariableNode;
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
    get expressionsFromNodes () {
        return expressionsFromNodes;
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
    var Ternary = _elements.default.Ternary, expression = expressionFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromExpressionIfExpressionAndElseExpression)(expression, ifExpression, elseExpression), string = ternaryString, ternary = new Ternary(string, expression, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionfFromVariableNode(variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
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
        var Parameter = _elements.default.Parameter, name = nameFromParaneterNode(parameterNode, context), parameterString = (0, _string.parameterStringFromTypeAndName)(type, name), string = parameterString; ///
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
    var Comparison = _elements.default.Comparison, leftExpressionNode = comparisonNode.getLeftExpressionNode(), rightExpressionNode = comparisonNode.getRightExpressionNode(), negated = comparisonNode.isNegated(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context), rightExpression = expressionFromExpressionNode(rightExpressionNode, context), comparisonString = (0, _string.comparisonStringFromNegatedLeftExpressionAndRightExpression)(negated, leftExpression, rightExpression), string = comparisonString, comparison = new Comparison(string, negated, leftExpression, rightExpression);
    return comparison;
}
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), parametersString = (0, _string.paramtersStringFromParametersArray)(paramtersArray), string = parametersString, array = paramtersArray, parameters = new Parameters(string, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Expression = _elements.default.Expression, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), stringLiteral = stringLiteralFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), variable = variableFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), comparison = comparisonFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), expressionString = (0, _string.expressionStringFromNodeNodesNumberBooleanStringLiteralAndProperties)(node, nodes, number, boolean, stringLiteral, [
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
    ], context), string = expressionString, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function expressionsFromExpressionsNode(expressionsNode, context) {
    var Expressions = _elements.default.Expressions, expressionNodes = expressionsNode.getExpressionNodes(), expressionsArray = expressionsArrayFromExpressionNodes(expressionNodes, context), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function expressionsFromProcedureCallNode(procedureCallNode, context) {
    var expressionsNode = procedureCallNode.getExpressionsNode(), expressions = expressionsFromExpressionsNode(expressionsNode);
    return expressions;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, reference = referenceFromProcedureCallNode(procedureCallNode, context), expressions = expressionsFromProcedureCallNode(procedureCallNode, context), procedureCallString = (0, _string.procedureCallStringFromReferenceAndExpressions)(reference, expressions), string = procedureCallString, procedureCall = new ProcedureCall(string, reference, expressions);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    var NamedParameter = _elements.default.NamedParameter, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), asName = asNameFromNamedParameterNode(namedParameterNode, context), namedParamterString = (0, _string.namedParameterStringFromTypeNameAndAsName)(type, name, asName), string = namedParamterString, namedParameter = new NamedParameter(string, type, name, asName);
    return namedParameter;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    var NamedParameters = _elements.default.NamedParameters, namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), namedParametersString = (0, _string.namedParametersStringFromNamedParamtersArray)(namedParametersArray), string = namedParametersString, array = namedParametersArray, namedParameters = new NamedParameters(string, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var ArrayAssignment = _elements.default.ArrayAssignment, variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context), arrayAssignmentString = (0, _string.arrayAssignmentStringFromVariableAndParameters)(variable, parameters), string = arrayAssignmentString, arrayAssignment = new ArrayAssignment(string, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    var ReturnStatement = _elements.default.ReturnStatement, expression = expressionFromReturnStatementNode(returnStatementNode, context), returnBlockString = (0, _string.returnBlockStringFromExpression)(expression), string = returnBlockString, returnStatement = new ReturnStatement(string, expression);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    var namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var ObjectAssigment = _elements.default.ObjectAssigment, variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context), objectAssignmentString = (0, _string.objectAssignmentStringFromVariableAndNamedParameters)(variable, namedParameters), string = objectAssignmentString, objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    return objectAssignment;
}
function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var NegatedExpression = _elements.default.NegatedExpression, expressionNode = negatedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context), type = typeFromNegatedExpressionNode(expressionNode, context), negatedExpressionString = (0, _string.negatedExpressionStringFromExpression)(expression), string = negatedExpressionString, negatedExpression = new NegatedExpression(string, type, expression);
    return negatedExpression;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpressionString = (0, _string.bracketedExpressionStringFromBExpression)(expression), string = bracketedExpressionString, bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsString = (0, _string.varaibleAssignmentsStringFromVariableAssignmentsArray)(variableAssignmentsArray), string = variableAssignmentsString, array = variableAssignmentsArray, variableAssignments = new VariableAssignments(string, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var ProcedureDeclaration = _elements.default.ProcedureDeclaration, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, procedureDeclaration = new ProcedureDeclaration(string, procedure);
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
function expressionsFromNodes(nodes, context) {
    var Expressions = _elements.default.Expressions, expressionsArray = expressionsArrayFromNodes(nodes, context), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function variableFromSomeNode(someNode, context) {
    var variableNode = someNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromVariableNode(variableNode, context) {
    var type = null;
    return type;
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
function variableFromNamedParameter(namedParameter, context) {
    var Variable = _elements.default.Variable, asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
}
function expressionfFromVariableNode(variableNode, context) {
    var expression = null;
    return expression;
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
function expressionFromStringLiteral(stringLiteral, context) {
    var Expression = _elements.default.Expression, expressionString = (0, _string.expressionStringFromStringLiteral)(stringLiteral), string = expressionString, node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
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
function asNameFromNamedParameterNode(namedParameterNode, context) {
    var asName = namedParameterNode.getAsName();
    return asName;
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
    var Variable = _elements.default.Variable, name = nameFromVariableNode(variableNode), expression = expressionfFromVariableNode(variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, expression);
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
function variableFromObjectAssignmentNode(objectAssignmentNode, context) {
    var variableNode = objectAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var type = procedureDeclarationNode.getType();
    return type;
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
function variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var variableNode = variableAssignmentNode.getVariableNode(), variable = variableFromTypeAndVariableNode(type, variableNode, context);
    return variable;
}
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var LogicalExpression = _elements.default.LogicalExpression, leftExpressionNode = logicalExpressionNode.getLeftExpressionNode(), rightExpressionNode = logicalExpressionNode.getRightExpressionNode(), type = typeFromLogcialExpressionNode(logicalExpressionNode, context), disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = expressionFromExpressionNode(leftExpressionNode, context), rightExpression = expressionFromExpressionNode(rightExpressionNode, context), string = (0, _string.logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression)(disjunction, leftExpression, rightExpression, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
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
var _default = {
    expressionsFromNodes: expressionsFromNodes
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGUsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVzLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21Cb29sZWFuLFxuICAgICAgICAgcGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbixcbiAgICAgICAgIGV4cHJlc3Npb25TdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCxcbiAgICAgICAgIHBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXksXG4gICAgICAgICBleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5LFxuICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tRXhwcmVzc2lvbixcbiAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSxcbiAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24sXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmdGcm9tVHlwZU5hbWVBbmRBc05hbWUsXG4gICAgICAgICBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nRnJvbU5hbWVkUGFyYW10ZXJzQXJyYXksXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGFycmF5QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnMsXG4gICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVJlZmVyZW5jZUFuZEV4cHJlc3Npb25zLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSxcbiAgICAgICAgIG9iamVjdEFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lZFBhcmFtZXRlcnMsXG4gICAgICAgICBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgdmFyYWlibGVBc3NpZ25tZW50c1N0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHRlcm5hcnlTdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uLFxuICAgICAgICAgY29tcGFyaXNvblN0cmluZ0Zyb21OZWdhdGVkTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24sXG4gICAgICAgICByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZU5vZGVzTnVtYmVyQm9vbGVhblN0cmluZ0xpdGVyYWxBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgbG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uKGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZ0Zyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmc7IC8vL1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBuZWdhdGVkID0gY29tcGFyaXNvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uU3RyaW5nID0gY29tcGFyaXNvblN0cmluZ0Zyb21OZWdhdGVkTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24obmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbiksXG4gICAgICAgIHN0cmluZyA9IGNvbXBhcmlzb25TdHJpbmcsICAvLy9cbiAgICAgICAgY29tcGFyaXNvbiA9IG5ldyBDb21wYXJpc29uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW10ZXJzU3RyaW5nRnJvbVBhcmFtZXRlcnNBcnJheShwYXJhbXRlcnNBcnJheSksXG4gICAgICAgIHN0cmluZyA9IHBhcmFtZXRlcnNTdHJpbmcsICAvLy9cbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZU5vZGVzTnVtYmVyQm9vbGVhblN0cmluZ0xpdGVyYWxBbmRQcm9wZXJ0aWVzKG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsWyBzb21lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmlzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uIF0sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlKGV4cHJlc3Npb25zTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGVzID0gZXhwcmVzc2lvbnNOb2RlLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbnNBcnJheUZyb21FeHByZXNzaW9uTm9kZXMoZXhwcmVzc2lvbk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmcgPSBleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5KGV4cHJlc3Npb25zQXJyYXkpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uc1N0cmluZywgLy8vXG4gICAgICAgIGFycmF5ID0gZXhwcmVzc2lvbnNBcnJheSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsIC8vL1xuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRFeHByZXNzaW9uc05vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uc05vZGUoZXhwcmVzc2lvbnNOb2RlKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21SZWZlcmVuY2VBbmRFeHByZXNzaW9ucyhyZWZlcmVuY2UsIGV4cHJlc3Npb25zKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNOYW1lID0gYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtdGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJTdHJpbmdGcm9tVHlwZU5hbWVBbmRBc05hbWUodHlwZSwgbmFtZSwgYXNOYW1lKSxcbiAgICAgICAgc3RyaW5nID0gbmFtZWRQYXJhbXRlclN0cmluZywgLy8vXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSwgYXNOYW1lKTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJOb2RlcyA9IG5hbWVkUGFyYW1ldGVyc05vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJzU3RyaW5nRnJvbU5hbWVkUGFyYW10ZXJzQXJyYXkobmFtZWRQYXJhbWV0ZXJzQXJyYXkpLFxuICAgICAgICBzdHJpbmcgPSBuYW1lZFBhcmFtZXRlcnNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IG5hbWVkUGFyYW1ldGVyc0FycmF5LCAvLy9cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50U3RyaW5nID0gYXJyYXlBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyh2YXJpYWJsZSwgcGFyYW1ldGVycyksXG4gICAgICAgIHN0cmluZyA9IGFycmF5QXNzaWdubWVudFN0cmluZywgLy8vXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAgLy8vXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSBvYmplY3RBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kTmFtZWRQYXJhbWV0ZXJzKHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpLFxuICAgICAgICBzdHJpbmcgPSBvYmplY3RBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nID0gbmVnYXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgc3RyaW5nID0gbmVnYXRlZEV4cHJlc3Npb25TdHJpbmcsIC8vL1xuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5ldyBOZWdhdGVkRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nID0gYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgc3RyaW5nID0gYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZywgLy8vXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBuZXcgQnJhY2tldGVkRXhwcmVzc2lvbihzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID0gdmFyYWlibGVBc3NpZ25tZW50c1N0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodmFyaWFibGVBc3NpZ25tZW50c0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZywgLy8vXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZShub2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gbnVsbCxcbiAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IG51bGwsXG4gICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBleHByZXNzaW9uc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmcgPSBleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5KGV4cHJlc3Npb25zQXJyYXkpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uc1N0cmluZywgLy8vXG4gICAgICAgIGFycmF5ID0gZXhwcmVzc2lvbnNBcnJheSwgLy8vXG4gICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Cb29sZWFuKGJvb2xlYW4pLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gbnVsbCxcbiAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZSgpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHJlZHVjZU5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZWR1Y2UgPSBudWxsO1xuXG4gIGNvbnN0IHJlZHVjZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZWR1Y2VOb2RlKCk7XG5cbiAgaWYgKHJlZHVjZU5vZGUgIT09IG51bGwpIHtcbiAgICByZWR1Y2UgPSByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbnVtYmVyID0gZXhwcmVzc2lvbk5vZGUuZ2V0TnVtYmVyKCk7XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbnNBcnJheSA9IFtcbiAgICAgICAgICBleHByZXNzaW9uXG4gICAgICAgIF0sXG4gICAgICAgIGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShleHByZXNzaW9uc0FycmF5KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25zQXJyYXksIC8vL1xuICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbk5vZGUuZ2V0Qm9vbGVhbigpO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzTmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldEFzTmFtZSgpLFxuICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICBuYW1lID0gKGFzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBhc05hbWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbmZGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGlmRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTk9kZSwgY29udGV4dCkge1xuICBsZXQgY29tcGFyaXNvbiA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSBleHByZXNzaW9uTk9kZS5nZXRDb21wYXJpc29uTm9kZSgpO1xuXG4gIGlmIChjb21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb24gPSBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYXNOYW1lID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldEFzTmFtZSgpO1xuXG4gIHJldHVybiBhc05hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbmZGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IGV4cHJlc3Npb25Ob2RlLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlcihleHByZXNzaW9uLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gbG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24oZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUoZXhwcmVzc2lvbiwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zQXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNBcnJheSA9IGV4cHJlc3Npb25Ob2Rlcy5tYXAoKGV4cHJlc3Npb25Ob2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW10ZXJzQXJyYXkgPSBuYW1lZFBhcmFtZXRlck5vZGVzLm1hcCgobmFtZWRQYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBleHByZXNzaW9uc0Zyb21Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUiLCJjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tQm9vbGVhbiIsImV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21Ob2RlIiwiZXhwcmVzc2lvbkZyb21Ob2RlcyIsImV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tU3RyaW5nTGl0ZXJhbCIsImV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25zQXJyYXlGcm9tTm9kZXMiLCJleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlIiwiZXhwcmVzc2lvbnNGcm9tTm9kZXMiLCJleHByZXNzaW9uc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJub2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJub2Rlc0Zyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwibnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsInF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwicmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlIiwicmVkdWNlRnJvbVJlZHVjZU5vZGUiLCJyZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInN0cmluZ0xpdGVyYWxGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21OYW1lZFBhcmFtZXRlciIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUGFyYW1ldGVyIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImV4cHJlc3Npb24iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbUV4cHJlc3Npb25JZkV4cHJlc3Npb25BbmRFbHNlRXhwcmVzc2lvbiIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlclN0cmluZ0Zyb21UeXBlQW5kTmFtZSIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uTm9kZSIsIkNvbXBhcmlzb24iLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJsZWZ0RXhwcmVzc2lvbiIsInJpZ2h0RXhwcmVzc2lvbiIsImNvbXBhcmlzb25TdHJpbmciLCJjb21wYXJpc29uU3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbiIsImNvbXBhcmlzb24iLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsInBhcmFtZXRlcnNTdHJpbmciLCJwYXJhbXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVyc0FycmF5IiwiYXJyYXkiLCJwYXJhbWV0ZXJzIiwiZXhwcmVzc2lvbk5vZGUiLCJFeHByZXNzaW9uIiwibm9kZXMiLCJudW1iZXIiLCJib29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZU5vZGVzTnVtYmVyQm9vbGVhblN0cmluZ0xpdGVyYWxBbmRQcm9wZXJ0aWVzIiwiZXhwcmVzc2lvbnNOb2RlIiwiRXhwcmVzc2lvbnMiLCJleHByZXNzaW9uTm9kZXMiLCJnZXRFeHByZXNzaW9uTm9kZXMiLCJleHByZXNzaW9uc0FycmF5IiwiZXhwcmVzc2lvbnNTdHJpbmciLCJleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5IiwiZXhwcmVzc2lvbnMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldEV4cHJlc3Npb25zTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwicHJvY2VkdXJlQ2FsbFN0cmluZ0Zyb21SZWZlcmVuY2VBbmRFeHByZXNzaW9ucyIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsIk5hbWVkUGFyYW1ldGVyIiwiYXNOYW1lIiwibmFtZWRQYXJhbXRlclN0cmluZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNOYW1lIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZyIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZ0Zyb21OYW1lZFBhcmFtdGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsImFycmF5QXNzaWdubWVudFN0cmluZyIsImFycmF5QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnMiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbiIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk9iamVjdEFzc2lnbWVudCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kTmFtZWRQYXJhbWV0ZXJzIiwib2JqZWN0QXNzaWdubWVudCIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvblN0cmluZyIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nRnJvbUV4cHJlc3Npb24iLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmciLCJicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nRnJvbUJFeHByZXNzaW9uIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyIsInZhcmFpYmxlQXNzaWdubWVudHNTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImdldE5hbWUiLCJleHByZXNzaW9uU3RyaW5nRnJvbU5vZGUiLCJleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVzIiwiZ2V0VmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21Cb29sZWFuIiwiZ2V0VHlwZSIsImdldE5vZGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXRFdmVyeU5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwiZ2V0TnVtYmVyIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0Qm9vbGVhbiIsImdldFRlcm5hcnlOb2RlIiwiZ2V0QXNOYW1lIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImV4cHJlc3Npb25TdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJleHByZXNzaW9uTk9kZSIsImdldENvbXBhcmlzb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsImdldExhYmVsTm9kZSIsImdldFJldHVyblN0YXRlbWVudE5vZGUiLCJnZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJnZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJkaXNqdW5jdGlvbiIsImlzRGlzanVuY3Rpb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiTG9naWNhbEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbiIsIlZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvV2dCQTtlQUFBQTs7UUFnakJBQztlQUFBQTs7UUF1Q0FDO2VBQUFBOztRQWxGQUM7ZUFBQUE7O1FBeGpCQUM7ZUFBQUE7O1FBc2JBQztlQUFBQTs7UUE2RkFDO2VBQUFBOztRQXBLQUM7ZUFBQUE7O1FBaFRBQztlQUFBQTs7UUF5ckJBQztlQUFBQTs7UUExM0JBQztlQUFBQTs7UUF5b0JBQztlQUFBQTs7UUEwWGhCO2VBQUE7O1FBN0pnQkM7ZUFBQUE7O1FBM01BQztlQUFBQTs7UUE5d0JBQztlQUFBQTs7UUFTQUM7ZUFBQUE7O1FBZ2hCQUM7ZUFBQUE7O1FBOUdBQztlQUFBQTs7UUE4a0JBQztlQUFBQTs7UUE3MkJBQztlQUFBQTs7UUE2TUFDO2VBQUFBOztRQTBCQUM7ZUFBQUE7O1FBa0xBQztlQUFBQTs7UUE4V0FDO2VBQUFBOztRQXpNQUM7ZUFBQUE7O1FBcEhBQztlQUFBQTs7UUE0WEFDO2VBQUFBOztRQTdTQUM7ZUFBQUE7O1FBaWJBQztlQUFBQTs7UUFyQkFDO2VBQUFBOztRQXhmQUM7ZUFBQUE7O1FBdFpBQztlQUFBQTs7UUEwTkFDO2VBQUFBOztRQWxNQUM7ZUFBQUE7O1FBNGVBQztlQUFBQTs7UUF3S0FDO2VBQUFBOztRQTMwQkFDO2VBQUFBOztRQTY0QkFDO2VBQUFBOztRQXFDQUM7ZUFBQUE7O1FBa0dBQztlQUFBQTs7UUFydEJBQztlQUFBQTs7UUE2VEFDO2VBQUFBOztRQWxMQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQS9EQUM7ZUFBQUE7O1FBeE1BQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBaUNBQztlQUFBQTs7UUFzMUJBQztlQUFBQTs7UUF0S0FDO2VBQUFBOztRQTlwQkFDO2VBQUFBOztRQXFOQUM7ZUFBQUE7O1FBNk1BQztlQUFBQTs7UUFqbUJBQztlQUFBQTs7UUFzYkFDO2VBQUFBOztRQTZOQUM7ZUFBQUE7O1FBeG9CQUM7ZUFBQUE7O1FBNHNCQUM7ZUFBQUE7O1FBNVBBQztlQUFBQTs7UUF2U0FDO2VBQUFBOztRQW1kQUM7ZUFBQUE7O1FBeHBCQUM7ZUFBQUE7O1FBbTVCQUM7ZUFBQUE7O1FBckVBQztlQUFBQTs7UUF6eEJBQztlQUFBQTs7UUE0NEJBQztlQUFBQTs7UUE4REFDO2VBQUFBOztRQS9OQUM7ZUFBQUE7O1FBMXBCQUM7ZUFBQUE7O1FBdUhBQztlQUFBQTs7UUF1ckJBQztlQUFBQTs7UUE3ZkFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFpQ0FDO2VBQUFBOztRQTlnQkFDO2VBQUFBOztRQTR4QkFDO2VBQUFBOztRQXh2QkFDO2VBQUFBOztRQW82QkFDO2VBQUFBOztRQWpOQUM7ZUFBQUE7O1FBcVFBQztlQUFBQTs7UUEzMUJBQztlQUFBQTs7UUF5dUJBQztlQUFBQTs7UUF4cUJBQztlQUFBQTs7UUF1UEFDO2VBQUFBOztRQWxnQkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFxbEJBQztlQUFBQTs7UUF3U0FDO2VBQUFBOztRQTVQQUM7ZUFBQUE7O1FBaGtCQUM7ZUFBQUE7O1FBNnZCQUM7ZUFBQUE7O1FBN0pBQztlQUFBQTs7UUF1SkFDO2VBQUFBOztRQXpVQUM7ZUFBQUE7O1FBNGpCQUM7ZUFBQUE7O1FBdklBQztlQUFBQTs7UUE5ZUFDO2VBQUFBOztRQXVwQkFDO2VBQUFBOztRQW9EQUM7ZUFBQUE7O1FBOVJBQztlQUFBQTs7UUE5Z0JBQztlQUFBQTs7UUEwakJBQztlQUFBQTs7UUF2YUFDO2VBQUFBOztRQThkQUM7ZUFBQUE7O1FBbFRBQztlQUFBQTs7UUF5QkFDO2VBQUFBOztRQXpEQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7UUFnUkFDO2VBQUFBOztRQWpjQUM7ZUFBQUE7O1FBcUNBQztlQUFBQTs7UUFsRkFDO2VBQUFBOztRQXlvQkFDO2VBQUFBOztRQWhPQUM7ZUFBQUE7O1FBM3dCQUM7ZUFBQUE7OzswQkFoSE07K0RBRUQ7cUJBRVE7c0JBNkI4RDs7Ozs7O0FBRXBGLFNBQVM3QixpQkFBaUI4QixRQUFRLEVBQUVDLE9BQU87SUFDaEQsSUFBTSxBQUFFQyxPQUFTQyxpQkFBUSxDQUFqQkQsTUFDRkUsT0FBT0osVUFDUEssU0FBU0osUUFBUUssWUFBWSxDQUFDRixPQUM5Qkcsa0JBQWtCckgsNEJBQTRCOEcsVUFBVUMsVUFDeERPLGtCQUFrQi9ELDZCQUE2QnVELFVBQVVDLFVBQ3pEUSx1QkFBdUJ6QixnQ0FBZ0NnQixVQUFVQyxVQUNqRVMsT0FBTyxJQUFJUixLQUFLRyxRQUFRRSxpQkFBaUJDLGlCQUFpQkM7SUFFaEUsT0FBT0M7QUFDVDtBQUVPLFNBQVN6QyxpQkFBaUIwQyxRQUFRLEVBQUVWLE9BQU87SUFDaEQsSUFBTSxBQUFFVyxPQUFTVCxpQkFBUSxDQUFqQlMsTUFDRkMsV0FBV2pCLHFCQUFxQmUsVUFBVVYsVUFDMUNhLHFCQUFxQjlILCtCQUErQjJILFVBQVVWLFVBQzlEYyxhQUFhQyxJQUFBQSxtREFBMkMsRUFBQ0gsVUFBVUMscUJBQ25FVCxTQUFTVSxZQUNURSxPQUFPLElBQUlMLEtBQUtQLFFBQVFRLFVBQVVDO0lBRXhDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTdEgsbUJBQW1CdUgsU0FBUyxFQUFFakIsT0FBTztJQUNuRCxJQUFNLEFBQUVrQixRQUFVaEIsaUJBQVEsQ0FBbEJnQixPQUNGZixPQUFPYyxXQUNQYixTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCZ0IsUUFBUSxJQUFJRCxNQUFNZDtJQUV4QixPQUFPZTtBQUNUO0FBRU8sU0FBU3hILG1CQUFtQnlILFNBQVMsRUFBRXBCLE9BQU87SUFDbkQsSUFBTSxBQUFFcUIsUUFBVW5CLGlCQUFRLENBQWxCbUIsT0FDRlQsV0FBVzFCLHNCQUFzQmtDLFdBQVdwQixVQUM1Q2EscUJBQXFCaEksZ0NBQWdDdUksV0FBV3BCLFVBQ2hFc0IsY0FBY0MsSUFBQUEsb0RBQTRDLEVBQUNYLFVBQVVDLHFCQUNyRVQsU0FBU2tCLGFBQ1RFLFFBQVEsSUFBSUgsTUFBTWpCLFFBQVFRLFVBQVVDO0lBRTFDLE9BQU9XO0FBQ1Q7QUFFTyxTQUFTeEcsbUJBQW1CeUcsU0FBUyxFQUFFekIsT0FBTztJQUNuRCxJQUFNLEFBQUUwQixRQUFVeEIsaUJBQVEsQ0FBbEJ3QixPQUNGdkIsT0FBT3NCLFdBQ1ByQixTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCd0IsT0FBT3ZHLGtCQUFrQnFHLFdBQVd6QixVQUNwQzRCLFFBQVEsSUFBSUYsTUFBTXRCLFFBQVF1QjtJQUVoQyxPQUFPQztBQUNUO0FBRU8sU0FBU3RFLHFCQUFxQnVFLFVBQVUsRUFBRTdCLE9BQU87SUFDdEQsSUFBTSxBQUFFOEIsU0FBVzVCLGlCQUFRLENBQW5CNEIsUUFDRmxCLFdBQVdsQix1QkFBdUJtQyxZQUFZN0IsVUFDOUMrQixvQkFBb0JoSCxnQ0FBZ0M4RyxZQUFZN0IsVUFDaEVhLHFCQUFxQi9ILGlDQUFpQytJLFlBQVk3QixVQUNsRWdDLGVBQWVDLElBQUFBLHNFQUE4RCxFQUFDckIsVUFBVW1CLG1CQUFtQmxCLHFCQUMzR1QsU0FBUzRCLGNBQ1RFLFNBQVMsSUFBSUosT0FBTzFCLFFBQVFRLFVBQVVtQixtQkFBbUJsQjtJQUUvRCxPQUFPcUI7QUFDVDtBQUVPLFNBQVM3RCx1QkFBdUI4RCxXQUFXLEVBQUVuQyxPQUFPO0lBQ3pELElBQU0sQUFBRW9DLFVBQVlsQyxpQkFBUSxDQUFwQmtDLFNBQ0ZDLGFBQWFoSSwwQkFBMEI4SCxhQUFhbkMsVUFDcERzQyxlQUFleEgsNEJBQTRCcUgsYUFBYW5DLFVBQ3hEdUMsaUJBQWlCOUksOEJBQThCMEksYUFBYW5DLFVBQzVEd0MsZ0JBQWdCQyxJQUFBQSxnRUFBd0QsRUFBQ0osWUFBWUMsY0FBY0MsaUJBQ25HbkMsU0FBU29DLGVBQ1RFLFVBQVUsSUFBSU4sUUFBUWhDLFFBQVFpQyxZQUFZQyxjQUFjQztJQUU5RCxPQUFPRztBQUNUO0FBRU8sU0FBUzVDLHlCQUF5QjZDLFlBQVksRUFBRTNDLE9BQU87SUFDNUQsSUFBTSxBQUFFNEMsV0FBYTFDLGlCQUFRLENBQXJCMEMsVUFDRkMsT0FBT2pFLHFCQUFxQitELGNBQWMzQyxVQUMxQzJCLE9BQU9uRyxxQkFBcUJtSCxjQUFjM0MsVUFDMUNxQyxhQUFhOUgsNEJBQTRCb0ksY0FBYzNDLFVBQ3ZEOEMsaUJBQWlCQyxJQUFBQSw4QkFBc0IsRUFBQ3BCLE9BQ3hDdkIsU0FBUzBDLGdCQUNUbEMsV0FBVyxJQUFJZ0MsU0FBU3hDLFFBQVF5QyxNQUFNbEIsTUFBTVU7SUFFbEQsT0FBT3pCO0FBQ1Q7QUFFTyxTQUFTcEQsMkJBQTJCd0YsYUFBYSxFQUFFaEQsT0FBTztJQUMvRCxJQUFNLEFBQUVpRCxZQUFjL0MsaUJBQVEsQ0FBdEIrQyxXQUNGOUMsT0FBTzZDLGVBQ1A1QyxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCd0IsT0FBT3BHLHNCQUFzQnlILGVBQWVoRCxVQUM1Q2tELFlBQVksSUFBSUQsVUFBVTdDLFFBQVF1QjtJQUV4QyxPQUFPdUI7QUFDVDtBQUVPLFNBQVN6RywyQkFBMkIwRyxhQUFhLEVBQUVuRCxPQUFPO0lBQy9ELElBQUlvRCxZQUFZO0lBRWhCLElBQU1QLE9BQU9wRSxzQkFBc0IwRSxlQUFlbkQ7SUFFbEQsSUFBSTZDLFNBQVMsTUFBTTtRQUNqQixJQUFNLEFBQUVRLFlBQWNuRCxpQkFBUSxDQUF0Qm1ELFdBQ0YxQixPQUFPckcsc0JBQXNCNkgsZUFBZW5ELFVBQzVDc0Qsa0JBQWtCQyxJQUFBQSxzQ0FBOEIsRUFBQ1YsTUFBTWxCLE9BQ3ZEdkIsU0FBU2tELGlCQUFpQixHQUFHO1FBRW5DRixZQUFZLElBQUlDLFVBQVVqRCxRQUFReUMsTUFBTWxCO0lBQzFDO0lBRUEsT0FBT3lCO0FBQ1Q7QUFFTyxTQUFTbkgsMkJBQTJCdUgsYUFBYSxFQUFFeEQsT0FBTztJQUMvRCxJQUFNLEFBQUV5RCxZQUFjdkQsaUJBQVEsQ0FBdEJ1RCxXQUNGdEQsT0FBT3FELGVBQ1BwRCxTQUFTSixRQUFRSyxZQUFZLENBQUNGLE9BQzlCUyxXQUFXdEIsMEJBQTBCa0UsZUFBZXhELFVBQ3BEMEQsUUFBUXZHLHVCQUF1QnFHLGVBQWV4RCxVQUM5QzJELFlBQVksSUFBSUYsVUFBVXJELFFBQVFRLFVBQVU4QztJQUVsRCxPQUFPQztBQUNUO0FBRU8sU0FBU3ZILDZCQUE2QndILGNBQWMsRUFBRTVELE9BQU87SUFDbEUsSUFBTSxBQUFFNkQsYUFBZTNELGlCQUFRLENBQXZCMkQsWUFDRjFELE9BQU95RCxnQkFDUHhELFNBQVNKLFFBQVFLLFlBQVksQ0FBQ0YsT0FDOUJTLFdBQVdyQiwyQkFBMkJxRSxnQkFBZ0I1RCxVQUN0RDBELFFBQVF0Ryx3QkFBd0J3RyxnQkFBZ0I1RCxVQUNoRDhELGFBQWEsSUFBSUQsV0FBV3pELFFBQVFRLFVBQVU4QztJQUVwRCxPQUFPSTtBQUNUO0FBRU8sU0FBU3hLLDZCQUE2QnlLLGNBQWMsRUFBRS9ELE9BQU87SUFDbEUsSUFBTSxBQUFFZ0UsYUFBZTlELGlCQUFRLENBQXZCOEQsWUFDRkMscUJBQXFCRixlQUFlRyxxQkFBcUIsSUFDekRDLHNCQUFzQkosZUFBZUssc0JBQXNCLElBQzNEQyxVQUFVTixlQUFlTyxTQUFTLElBQ2xDQyxpQkFBaUJ4Syw2QkFBNkJrSyxvQkFBb0JqRSxVQUNsRXdFLGtCQUFrQnpLLDZCQUE2Qm9LLHFCQUFxQm5FLFVBQ3BFeUUsbUJBQW1CQyxJQUFBQSxtRUFBMkQsRUFBQ0wsU0FBU0UsZ0JBQWdCQyxrQkFDeEdwRSxTQUFTcUUsa0JBQ1RFLGFBQWEsSUFBSVgsV0FBVzVELFFBQVFpRSxTQUFTRSxnQkFBZ0JDO0lBRW5FLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTL0gsNkJBQTZCZ0ksY0FBYyxFQUFFNUUsT0FBTztJQUNsRSxJQUFNLEFBQUU2RSxhQUFlM0UsaUJBQVEsQ0FBdkIyRSxZQUNGQyxpQkFBaUJoSSxpQ0FBaUM4SCxnQkFBZ0I1RSxVQUNsRStFLG1CQUFtQkMsSUFBQUEsMENBQWtDLEVBQUNGLGlCQUN0RDFFLFNBQVMyRSxrQkFDVEUsUUFBUUgsZ0JBQ1JJLGFBQWEsSUFBSUwsV0FBV3pFLFFBQVE2RTtJQUUxQyxPQUFPQztBQUNUO0FBRU8sU0FBU25MLDZCQUE2Qm9MLGNBQWMsRUFBRW5GLE9BQU87SUFDbEUsSUFBTSxBQUFFb0YsYUFBZWxGLGlCQUFRLENBQXZCa0YsWUFDRmpGLE9BQU9wRSx1QkFBdUJvSixnQkFBZ0JuRixVQUM5Q3FGLFFBQVFuSix3QkFBd0JpSixnQkFBZ0JuRixVQUNoRHNGLFNBQVNoSix5QkFBeUI2SSxnQkFBZ0JuRixVQUNsRHVGLFVBQVVwTSwwQkFBMEJnTSxnQkFBZ0JuRixVQUNwRHdGLGdCQUFnQnJILGdDQUFnQ2dILGdCQUFnQm5GLFVBQ2hFZ0IsT0FBT2pELHVCQUF1Qm9ILGdCQUFnQm5GLFVBQzlDd0IsUUFBUTVILHdCQUF3QnVMLGdCQUFnQm5GLFVBQ2hEa0MsU0FBUzdFLHlCQUF5QjhILGdCQUFnQm5GLFVBQ2xEMEMsVUFBVXRFLDBCQUEwQitHLGdCQUFnQm5GLFVBQ3BEWSxXQUFXeEIsMkJBQTJCK0YsZ0JBQWdCbkYsVUFDdEQyRCxZQUFZM0gsNEJBQTRCbUosZ0JBQWdCbkYsVUFDeEQ4RCxhQUFhM0gsNkJBQTZCZ0osZ0JBQWdCbkYsVUFDMUQyRSxhQUFhcEwsNkJBQTZCNEwsZ0JBQWdCbkYsVUFDMUR5RixjQUFjL0gsOEJBQThCeUgsZ0JBQWdCbkYsVUFDNUQwRixnQkFBZ0IzSSxnQ0FBZ0NvSSxnQkFBZ0JuRixVQUNoRTJGLG9CQUFvQjlKLG9DQUFvQ3NKLGdCQUFnQm5GLFVBQ3hFNEYsb0JBQW9CMUssb0NBQW9DaUssZ0JBQWdCbkYsVUFDeEU2RixzQkFBc0J4TSxzQ0FBc0M4TCxnQkFBZ0JuRixVQUM1RThGLG1CQUFtQkMsSUFBQUEsNEVBQW9FLEVBQUM1RixNQUFNa0YsT0FBT0MsUUFBUUMsU0FBU0MsZUFBYztRQUFFeEU7UUFDQVE7UUFDQVU7UUFDQVE7UUFDQTlCO1FBQ0ErQztRQUNBRztRQUNBYTtRQUNBYztRQUNBQztRQUNBQztRQUNBQztRQUNBQztLQUFxQixFQUFFN0YsVUFDN0pJLFNBQVMwRixrQkFDVHpELGFBQWEsSUFBSStDLFdBQVdoRixRQUFRRCxNQUFNa0YsT0FBT0MsUUFBUUMsU0FBU0MsZUFBZXhFLE1BQU1RLE9BQU9VLFFBQVFRLFNBQVM5QixVQUFVK0MsV0FBV0csWUFBWWEsWUFBWWMsYUFBYUMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO0lBRXBPLE9BQU94RDtBQUNUO0FBRU8sU0FBUzFILCtCQUErQnFMLGVBQWUsRUFBRWhHLE9BQU87SUFDckUsSUFBTSxBQUFFaUcsY0FBZ0IvRixpQkFBUSxDQUF4QitGLGFBQ0ZDLGtCQUFrQkYsZ0JBQWdCRyxrQkFBa0IsSUFDcERDLG1CQUFtQjVMLG9DQUFvQzBMLGlCQUFpQmxHLFVBQ3hFcUcsb0JBQW9CQyxJQUFBQSw2Q0FBcUMsRUFBQ0YsbUJBQzFEaEcsU0FBU2lHLG1CQUNUcEIsUUFBUW1CLGtCQUNSRyxjQUFjLElBQUlOLFlBQVk3RixRQUFRNkU7SUFFNUMsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTM0ksK0JBQStCNEksZUFBZSxFQUFFeEcsT0FBTztJQUNyRSxJQUFNLEFBQUV5RyxjQUFnQnZHLGlCQUFRLENBQXhCdUcsYUFDRkMsUUFBUXhJLHlCQUF5QnNJLGlCQUFpQnhHLFVBQ2xEMkcsY0FBY3RLLCtCQUErQm1LLGlCQUFpQnhHLFVBQzlENEcsa0JBQWtCL0ksbUNBQW1DMkksaUJBQWlCeEcsVUFDdEU2RyxvQkFBb0JDLElBQUFBLGdEQUF3QyxFQUFDRixrQkFDN0R4RyxTQUFTeUcsbUJBQ1RwQixjQUFjLElBQUlnQixZQUFZckcsUUFBUXNHLE9BQU9DLGFBQWFDO0lBRWhFLE9BQU9uQjtBQUNUO0FBRU8sU0FBUzVLLGlDQUFpQ2tNLGlCQUFpQixFQUFFL0csT0FBTztJQUN6RSxJQUFNZ0csa0JBQWtCZSxrQkFBa0JDLGtCQUFrQixJQUN0RFQsY0FBYzVMLCtCQUErQnFMO0lBRW5ELE9BQU9PO0FBQ1Q7QUFFTyxTQUFTdkosbUNBQW1DK0osaUJBQWlCLEVBQUUvRyxPQUFPO0lBQzNFLElBQU0sQUFBRWlILGdCQUFrQi9HLGlCQUFRLENBQTFCK0csZUFDRi9ELFlBQVkzRiwrQkFBK0J3SixtQkFBbUIvRyxVQUM5RHVHLGNBQWMxTCxpQ0FBaUNrTSxtQkFBbUIvRyxVQUNsRWtILHNCQUFzQkMsSUFBQUEsc0RBQThDLEVBQUNqRSxXQUFXcUQsY0FDaEZuRyxTQUFTOEcscUJBQ1R4QixnQkFBZ0IsSUFBSXVCLGNBQWM3RyxRQUFROEMsV0FBV3FEO0lBRTNELE9BQU9iO0FBQ1Q7QUFFTyxTQUFTaksscUNBQXFDMkwsa0JBQWtCLEVBQUVwSCxPQUFPO0lBQzlFLElBQU0sQUFBRXFILGlCQUFtQm5ILGlCQUFRLENBQTNCbUgsZ0JBQ0Z4RSxPQUFPdEUsMkJBQTJCNkksb0JBQW9CcEgsVUFDdEQyQixPQUFPdEcsMkJBQTJCK0wsb0JBQW9CcEgsVUFDdERzSCxTQUFTcE8sNkJBQTZCa08sb0JBQW9CcEgsVUFDMUR1SCxzQkFBc0JDLElBQUFBLGlEQUF5QyxFQUFDM0UsTUFBTWxCLE1BQU0yRixTQUM1RWxILFNBQVNtSCxxQkFDVEUsaUJBQWlCLElBQUlKLGVBQWVqSCxRQUFReUMsTUFBTWxCLE1BQU0yRjtJQUU5RCxPQUFPRztBQUNUO0FBRU8sU0FBUy9MLHVDQUF1Q2dNLG1CQUFtQixFQUFFMUgsT0FBTztJQUNqRixJQUFNLEFBQUUySCxrQkFBb0J6SCxpQkFBUSxDQUE1QnlILGlCQUNGQyxzQkFBc0JGLG9CQUFvQkcsc0JBQXNCLElBQ2hFQyx1QkFBdUJsTSwyQ0FBMkNnTSxxQkFBcUI1SCxVQUN2RitILHdCQUF3QkMsSUFBQUEsb0RBQTRDLEVBQUNGLHVCQUNyRTFILFNBQVMySCx1QkFDVDlDLFFBQVE2QyxzQkFDUkcsa0JBQWtCLElBQUlOLGdCQUFnQnZILFFBQVE2RTtJQUVwRCxPQUFPZ0Q7QUFDVDtBQUVPLFNBQVNqUCx1Q0FBdUNrUCxtQkFBbUIsRUFBRWxJLE9BQU87SUFDakYsSUFBTSxBQUFFbUksa0JBQW9CakksaUJBQVEsQ0FBNUJpSSxpQkFDRnZILFdBQVczQixnQ0FBZ0NpSixxQkFBcUJsSSxVQUNoRWtGLGFBQWF2SSxrQ0FBa0N1TCxxQkFBcUJsSSxVQUNwRW9JLHdCQUF3QkMsSUFBQUEsc0RBQThDLEVBQUN6SCxVQUFVc0UsYUFDakY5RSxTQUFTZ0ksdUJBQ1Q5SCxrQkFBa0IsSUFBSTZILGdCQUFnQi9ILFFBQVFRLFVBQVVzRTtJQUU5RCxPQUFPNUU7QUFDVDtBQUVPLFNBQVN4Qyx1Q0FBdUN3SyxtQkFBbUIsRUFBRXRJLE9BQU87SUFDakYsSUFBTSxBQUFFdUksa0JBQW9CckksaUJBQVEsQ0FBNUJxSSxpQkFDRmxHLGFBQWFsSSxrQ0FBa0NtTyxxQkFBcUJ0SSxVQUNwRTZHLG9CQUFvQjJCLElBQUFBLHVDQUErQixFQUFDbkcsYUFDcERqQyxTQUFTeUcsbUJBQ1RELGtCQUFrQixJQUFJMkIsZ0JBQWdCbkksUUFBUWlDO0lBRXBELE9BQU91RTtBQUNUO0FBRU8sU0FBU2pMLHdDQUF3QzhNLG9CQUFvQixFQUFFekksT0FBTztJQUNuRixJQUFNMEgsc0JBQXNCZSxxQkFBcUJDLHNCQUFzQixJQUNqRVQsa0JBQWtCdk0sdUNBQXVDZ00scUJBQXFCMUg7SUFFcEYsT0FBT2lJO0FBQ1Q7QUFFTyxTQUFTMUwseUNBQXlDa00sb0JBQW9CLEVBQUV6SSxPQUFPO0lBQ3BGLElBQU0sQUFBRTJJLGtCQUFvQnpJLGlCQUFRLENBQTVCeUksaUJBQ0YvSCxXQUFXcEIsaUNBQWlDaUosc0JBQXNCekksVUFDbEVpSSxrQkFBa0J0TSx3Q0FBd0M4TSxzQkFBc0J6SSxVQUNoRjRJLHlCQUF5QkMsSUFBQUEsNERBQW9ELEVBQUNqSSxVQUFVcUgsa0JBQ3hGN0gsU0FBU3dJLHdCQUNURSxtQkFBbUIsSUFBSUgsZ0JBQWdCdkksUUFBUVEsVUFBVXFIO0lBRS9ELE9BQU9hO0FBQ1Q7QUFFTyxTQUFTaE4sMkNBQTJDaU4scUJBQXFCLEVBQUUvSSxPQUFPO0lBQ3ZGLElBQU0sQUFBRWdKLG9CQUFzQjlJLGlCQUFRLENBQTlCOEksbUJBQ0Y3RCxpQkFBaUI0RCxzQkFBc0JFLGlCQUFpQixJQUN4RDVHLGFBQWF0SSw2QkFBNkJvTCxnQkFBZ0JuRixVQUMxRDZDLE9BQU9yRSw4QkFBOEIyRyxnQkFBZ0JuRixVQUNyRGtKLDBCQUEwQkMsSUFBQUEsNkNBQXFDLEVBQUM5RyxhQUNoRWpDLFNBQVM4SSx5QkFDVHZELG9CQUFvQixJQUFJcUQsa0JBQWtCNUksUUFBUXlDLE1BQU1SO0lBRTlELE9BQU9zRDtBQUNUO0FBRU8sU0FBUy9NLDZDQUE2Q3dRLHNCQUFzQixFQUFFcEosT0FBTztJQUMxRixJQUFNLEFBQUVxSixxQkFBdUJuSixpQkFBUSxDQUEvQm1KLG9CQUNGeEcsT0FBT25FLHdDQUF3QzBLLHdCQUF3QnBKLFVBQ3ZFa0YsYUFBYXhJLHFDQUFxQzBNLHdCQUF3QnBKLFVBQzFFeUYsY0FBY2hJLHNDQUFzQzJMLHdCQUF3QnBKLFVBQzVFc0osMEJBQTBCQyxJQUFBQSxnRUFBd0QsRUFBQzFHLE1BQU1xQyxZQUFZTyxjQUNyR3JGLFNBQVNrSix5QkFDVHpJLHFCQUFxQixJQUFJd0ksbUJBQW1CakosUUFBUXlDLE1BQU1xQyxZQUFZTztJQUU1RSxPQUFPNUU7QUFDVDtBQUVPLFNBQVN6SCwrQ0FBK0NvUSx1QkFBdUIsRUFBRXhKLE9BQU87SUFDN0YsSUFBTSxBQUFFeUosc0JBQXdCdkosaUJBQVEsQ0FBaEN1SixxQkFDRnBILGFBQWF2SSxzQ0FBc0MwUCx5QkFBeUJ4SixVQUM1RTBKLDRCQUE0QkMsSUFBQUEsZ0RBQXdDLEVBQUN0SCxhQUNyRWpDLFNBQVNzSiwyQkFDVDdELHNCQUFzQixJQUFJNEQsb0JBQW9CckosUUFBUWlDO0lBRTVELE9BQU93RDtBQUNUO0FBRU8sU0FBUzdHLCtDQUErQzRLLHVCQUF1QixFQUFFNUosT0FBTztJQUM3RixJQUFNLEFBQUU2SixzQkFBd0IzSixpQkFBUSxDQUFoQzJKLHFCQUNGQywyQkFBMkJoTCxvREFBb0Q4Syx5QkFBeUI1SixVQUN4RytKLDRCQUE0QkMsSUFBQUEsNkRBQXFELEVBQUNGLDJCQUNsRjFKLFNBQVMySiwyQkFDVDlFLFFBQVE2RSwwQkFDUkcsc0JBQXNCLElBQUlKLG9CQUFvQnpKLFFBQVE2RTtJQUU1RCxPQUFPZ0Y7QUFDVDtBQUVPLFNBQVNoTixpREFBaURpTix3QkFBd0IsRUFBRWxLLE9BQU87SUFDaEcsSUFBTSxBQUFFbUssdUJBQXlCakssaUJBQVEsQ0FBakNpSyxzQkFDRkMsWUFBWWxOLHNDQUFzQ2dOLDBCQUEwQmxLLFVBQzVFcUssNkJBQTZCQyxJQUFBQSwrQ0FBdUMsRUFBQ0YsWUFDckVoSyxTQUFTaUssNEJBQ1RFLHVCQUF1QixJQUFJSixxQkFBcUIvSixRQUFRZ0s7SUFFOUQsT0FBT0c7QUFDVDtBQUVPLFNBQVNuUCxrQkFBa0JxRyxTQUFTLEVBQUV6QixPQUFPO0lBQ2xELElBQU0yQixPQUFPRixVQUFVK0ksT0FBTztJQUU5QixPQUFPN0k7QUFDVDtBQUVPLFNBQVMzSCxtQkFBbUJtRyxJQUFJLEVBQUVILE9BQU87SUFDOUMsSUFBTSxBQUFFb0YsYUFBZWxGLGlCQUFRLENBQXZCa0YsWUFDRlUsbUJBQW1CMkUsSUFBQUEsZ0NBQXdCLEVBQUN0SyxNQUFNSCxVQUNsREksU0FBUzBGLGtCQUNUVCxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsVUFBVSxNQUNWQyxnQkFBZ0IsTUFDaEJ4RSxPQUFPLE1BQ1BRLFFBQVEsTUFDUlUsU0FBUyxNQUNUUSxVQUFVLE1BQ1Y5QixXQUFXLE1BQ1grQyxZQUFZLE1BQ1pHLGFBQWEsTUFDYmEsYUFBYSxNQUNiYyxjQUFjLE1BQ2RDLGdCQUFnQixNQUNoQkMsb0JBQW9CLE1BQ3BCQyxvQkFBb0IsTUFDcEJDLHNCQUFzQixNQUN0QnhELGFBQWEsSUFBSStDLFdBQVdoRixRQUFRRCxNQUFNa0YsT0FBT0MsUUFBUUMsU0FBU0MsZUFBZXhFLE1BQU1RLE9BQU9VLFFBQVFRLFNBQVM5QixVQUFVK0MsV0FBV0csWUFBWWEsWUFBWWMsYUFBYUMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO0lBRXBPLE9BQU94RDtBQUNUO0FBRU8sU0FBU3BJLG9CQUFvQm9MLEtBQUssRUFBRXJGLE9BQU87SUFDaEQsSUFBTSxBQUFFb0YsYUFBZWxGLGlCQUFRLENBQXZCa0YsWUFDRlUsbUJBQW1CNEUsSUFBQUEsaUNBQXlCLEVBQUNyRixPQUFPckYsVUFDcERJLFNBQVMwRixrQkFDVDNGLE9BQU8sTUFDUG1GLFNBQVMsTUFDVEMsVUFBVSxNQUNWN0MsVUFBVSxNQUNWOEMsZ0JBQWdCLE1BQ2hCeEUsT0FBTyxNQUNQUSxRQUFRLE1BQ1JVLFNBQVMsTUFDVHRCLFdBQVcsTUFDWCtDLFlBQVksTUFDWkcsYUFBYSxNQUNiYSxhQUFhLE1BQ2JjLGNBQWMsTUFDZEMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQixNQUNwQkMsc0JBQXNCLE1BQ3RCeEQsYUFBYSxJQUFJK0MsV0FBV2hGLFFBQVFELE1BQU1rRixPQUFPQyxRQUFRQyxTQUFTQyxlQUFleEUsTUFBTVEsT0FBT1UsUUFBUVEsU0FBUzlCLFVBQVUrQyxXQUFXRyxZQUFZYSxZQUFZYyxhQUFhQyxlQUFlQyxtQkFBbUJDLG1CQUFtQkM7SUFFcE8sT0FBT3hEO0FBQ1Q7QUFFTyxTQUFTekgscUJBQXFCeUssS0FBSyxFQUFFckYsT0FBTztJQUNqRCxJQUFNLEFBQUVpRyxjQUFnQi9GLGlCQUFRLENBQXhCK0YsYUFDRkcsbUJBQW1CM0wsMEJBQTBCNEssT0FBT3JGLFVBQ3BEcUcsb0JBQW9CQyxJQUFBQSw2Q0FBcUMsRUFBQ0YsbUJBQzFEaEcsU0FBU2lHLG1CQUNUcEIsUUFBUW1CLGtCQUNSRyxjQUFjLElBQUlOLFlBQVk3RixRQUFRNkU7SUFFNUMsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTNUcscUJBQXFCZSxRQUFRLEVBQUVWLE9BQU87SUFDcEQsSUFBTTJDLGVBQWVqQyxTQUFTaUssZUFBZSxJQUN2Qy9KLFdBQVdkLHlCQUF5QjZDLGNBQWMzQztJQUV4RCxPQUFPWTtBQUNUO0FBRU8sU0FBU2hDLHFCQUFxQitELFlBQVksRUFBRTNDLE9BQU87SUFDeEQsSUFBTTZDLE9BQU87SUFFYixPQUFPQTtBQUNUO0FBRU8sU0FBU3JILHFCQUFxQm1ILFlBQVk7SUFDL0MsSUFBTWhCLE9BQU9nQixhQUFhNkgsT0FBTztJQUVqQyxPQUFPN0k7QUFDVDtBQUVPLFNBQVM5SCxzQkFBc0IwTCxPQUFPLEVBQUV2RixPQUFPO0lBQ3BELElBQU0sQUFBRW9GLGFBQWVsRixpQkFBUSxDQUF2QmtGLFlBQ0ZVLG1CQUFtQjhFLElBQUFBLG1DQUEyQixFQUFDckYsVUFDL0NwRixPQUFPLE1BQ1BrRixRQUFRLE1BQ1JDLFNBQVMsTUFDVEUsZ0JBQWdCLE1BQ2hCeEUsT0FBTyxNQUNQUSxRQUFRLE1BQ1JVLFNBQVMsTUFDVFEsVUFBVSxNQUNWOUIsV0FBVyxNQUNYK0MsWUFBWSxNQUNaRyxhQUFhLE1BQ2JhLGFBQWEsTUFDYmMsY0FBYyxNQUNkQyxnQkFBZ0IsTUFDaEJDLG9CQUFvQixNQUNwQkMsb0JBQW9CLE1BQ3BCQyxzQkFBc0IsTUFDdEJ6RixTQUFTMEYsa0JBQ1R6RCxhQUFhLElBQUkrQyxXQUFXaEYsUUFBUUQsTUFBTWtGLE9BQU9DLFFBQVFDLFNBQVNDLGVBQWV4RSxNQUFNUSxPQUFPVSxRQUFRUSxTQUFTOUIsVUFBVStDLFdBQVdHLFlBQVlhLFlBQVljLGFBQWFDLGVBQWVDLG1CQUFtQkMsbUJBQW1CQztJQUVwTyxPQUFPeEQ7QUFDVDtBQUVPLFNBQVM1QyxzQkFBc0IyRCxTQUFTLEVBQUVwRCxPQUFPO0lBQ3RELElBQU0sQUFBRTRDLFdBQWExQyxpQkFBUSxDQUFyQjBDLFVBQ0ZDLE9BQU9PLFVBQVV5SCxPQUFPLElBQ3hCbEosT0FBT3lCLFVBQVVvSCxPQUFPLElBQ3hCbkksYUFBYSxNQUNiUyxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDcEIsT0FDeEN2QixTQUFTMEMsZ0JBQ1RsQyxXQUFXLElBQUlnQyxTQUFTeEMsUUFBUXlDLE1BQU1sQixNQUFNVTtJQUVsRCxPQUFPekI7QUFDVDtBQUVPLFNBQVMxQixzQkFBc0JrQyxTQUFTLEVBQUVwQixPQUFPO0lBQ3RELElBQU0yQyxlQUFldkIsVUFBVXVKLGVBQWUsSUFDeEMvSixXQUFXZCx5QkFBeUI2QyxjQUFjM0M7SUFFeEQsT0FBT1k7QUFDVDtBQUVPLFNBQVNuQyxzQkFBc0IwRSxhQUFhLEVBQUVuRCxPQUFPO0lBQzFELElBQU02QyxPQUFPTSxjQUFjMEgsT0FBTztJQUVsQyxPQUFPaEk7QUFDVDtBQUVPLFNBQVN2SCxzQkFBc0I2SCxhQUFhLEVBQUVuRCxPQUFPO0lBQzFELElBQU0yQixPQUFPd0IsY0FBY3FILE9BQU87SUFFbEMsT0FBTzdJO0FBQ1Q7QUFFTyxTQUFTcEcsc0JBQXNCeUgsYUFBYSxFQUFFaEQsT0FBTztJQUMxRCxJQUFNMkIsT0FBT3FCLGNBQWN3SCxPQUFPO0lBRWxDLE9BQU83STtBQUNUO0FBRU8sU0FBU2pDLHVCQUF1Qm1DLFVBQVUsRUFBRTdCLE9BQU87SUFDeEQsSUFBTTJDLGVBQWVkLFdBQVc4SSxlQUFlLElBQ3pDL0osV0FBV2QseUJBQXlCNkMsY0FBYzNDO0lBRXhELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTN0UsdUJBQXVCb0osY0FBYyxFQUFFbkYsT0FBTztJQUM1RCxJQUFNRyxPQUFPZ0YsZUFBZTJGLE9BQU87SUFFbkMsT0FBTzNLO0FBQ1Q7QUFFTyxTQUFTcEMsdUJBQXVCb0gsY0FBYyxFQUFFbkYsT0FBTztJQUM1RCxJQUFJZ0IsT0FBTztJQUVYLElBQU1OLFdBQVd5RSxlQUFlNEYsV0FBVztJQUUzQyxJQUFJckssYUFBYSxNQUFNO1FBQ3JCTSxPQUFPaEQsaUJBQWlCMEMsVUFBVVY7SUFDcEM7SUFFQSxPQUFPZ0I7QUFDVDtBQUVPLFNBQVM3RCx1QkFBdUJxRyxhQUFhLEVBQUV4RCxPQUFPO0lBQzNELElBQU1JLFNBQVNvRCxjQUFjd0gsU0FBUyxJQUNoQ2xGLG1CQUFtQjFGLFFBQ25Cc0QsUUFBUXVILGlCQUFLLENBQUNDLG9CQUFvQixDQUFDcEY7SUFFekMsT0FBT3BDO0FBQ1Q7QUFFTyxTQUFTdEcsd0JBQXdCd0csY0FBYyxFQUFFNUQsT0FBTztJQUM3RCxJQUFNSSxTQUFTd0QsZUFBZW9ILFNBQVMsSUFDakNsRixtQkFBbUIxRixRQUNuQnNELFFBQVF1SCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ3BGO0lBRXpDLE9BQU9wQztBQUNUO0FBRU8sU0FBU3hILHdCQUF3QmlKLGNBQWMsRUFBRW5GLE9BQU87SUFDN0QsSUFBTXFGLFFBQVEsTUFBTyxHQUFHO0lBRXhCLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTekwsd0JBQXdCdUwsY0FBYyxFQUFFbkYsT0FBTztJQUM3RCxJQUFJd0IsUUFBUTtJQUVaLElBQU1KLFlBQVkrRCxlQUFlZ0csWUFBWTtJQUU3QyxJQUFJL0osY0FBYyxNQUFNO1FBQ3RCSSxRQUFRN0gsbUJBQW1CeUgsV0FBV3BCO0lBQ3hDO0lBRUEsT0FBT3dCO0FBQ1Q7QUFFTyxTQUFTdEgseUJBQXlCMkgsVUFBVSxFQUFFN0IsT0FBTztJQUMxRCxJQUFNbUYsaUJBQWlCdEQsV0FBV29ILGlCQUFpQixJQUM3QzVHLGFBQWF0SSw2QkFBNkJvTCxnQkFBZ0JuRjtJQUVoRSxPQUFPcUM7QUFDVDtBQUVPLFNBQVNoRix5QkFBeUI4SCxjQUFjLEVBQUVuRixPQUFPO0lBQzlELElBQUlrQyxTQUFTO0lBRWIsSUFBTUwsYUFBYXNELGVBQWVpRyxhQUFhO0lBRS9DLElBQUl2SixlQUFlLE1BQU07UUFDdkJLLFNBQVM1RSxxQkFBcUJ1RSxZQUFZN0I7SUFDNUM7SUFFQSxPQUFPa0M7QUFDVDtBQUVPLFNBQVM1Rix5QkFBeUI2SSxjQUFjLEVBQUVuRixPQUFPO0lBQzlELElBQU1zRixTQUFTSCxlQUFla0csU0FBUztJQUV2QyxPQUFPL0Y7QUFDVDtBQUVPLFNBQVNwSCx5QkFBeUJzSSxlQUFlLEVBQUV4RyxPQUFPO0lBQy9ELElBQU1zTCxZQUFZOUUsZ0JBQWdCK0UsWUFBWSxJQUN4QzdFLFFBQVE0RSxVQUFVRSxHQUFHLENBQUMsU0FBQ3pMO1FBQ3JCLElBQU1VLE9BQU94QyxpQkFBaUI4QixVQUFVQztRQUV4QyxPQUFPUztJQUNUO0lBRU4sT0FBT2lHO0FBQ1Q7QUFFTyxTQUFTaE0sMEJBQTBCMkgsVUFBVSxFQUFFckMsT0FBTztJQUMzRCxJQUFNLEFBQUVpRyxjQUFnQi9GLGlCQUFRLENBQXhCK0YsYUFDRkcsbUJBQW1CO1FBQ2pCL0Q7S0FDRCxFQUNEZ0Usb0JBQW9CQyxJQUFBQSw2Q0FBcUMsRUFBQ0YsbUJBQzFEaEcsU0FBU2lHLG1CQUNUcEIsUUFBUW1CLGtCQUNSRyxjQUFjLElBQUlOLFlBQVk3RixRQUFRNkU7SUFFNUMsT0FBT3NCO0FBQ1Q7QUFFTyxTQUFTbE0sMEJBQTBCOEgsV0FBVyxFQUFFbkMsT0FBTztJQUM1RCxJQUFNbUYsaUJBQWlCaEQsWUFBWThHLGlCQUFpQixJQUM5QzVHLGFBQWF0SSw2QkFBNkJvTCxnQkFBZ0JuRjtJQUVoRSxPQUFPcUM7QUFDVDtBQUVPLFNBQVMvQywwQkFBMEJrRSxhQUFhLEVBQUV4RCxPQUFPO0lBQzlELElBQU0yQyxlQUFlYSxjQUFjbUgsZUFBZSxJQUM1Qy9KLFdBQVdkLHlCQUF5QjZDLGNBQWMzQztJQUV4RCxPQUFPWTtBQUNUO0FBRU8sU0FBU3pILDBCQUEwQmdNLGNBQWMsRUFBRW5GLE9BQU87SUFDL0QsSUFBTXVGLFVBQVVKLGVBQWVzRyxVQUFVO0lBRXpDLE9BQU9sRztBQUNUO0FBRU8sU0FBU25ILDBCQUEwQitHLGNBQWMsRUFBRW5GLE9BQU87SUFDL0QsSUFBSTBDLFVBQVU7SUFFZCxJQUFNUCxjQUFjZ0QsZUFBZXVHLGNBQWM7SUFFakQsSUFBSXZKLGdCQUFnQixNQUFNO1FBQ3hCTyxVQUFVckUsdUJBQXVCOEQsYUFBYW5DO0lBQ2hEO0lBRUEsT0FBTzBDO0FBQ1Q7QUFFTyxTQUFTbkQsMkJBQTJCcUUsY0FBYyxFQUFFNUQsT0FBTztJQUNoRSxJQUFNMkMsZUFBZWlCLGVBQWUrRyxlQUFlLElBQzdDL0osV0FBV2QseUJBQXlCNkMsY0FBYzNDO0lBRXhELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTeEIsMkJBQTJCK0YsY0FBYyxFQUFFbkYsT0FBTztJQUNoRSxJQUFJWSxXQUFXO0lBRWYsSUFBTStCLGVBQWV3QyxlQUFld0YsZUFBZTtJQUVuRCxJQUFJaEksaUJBQWlCLE1BQU07UUFFekIvQixXQUFXZCx5QkFBeUI2QyxjQUFjM0M7SUFDcEQ7SUFFQSxPQUFPWTtBQUNUO0FBRU8sU0FBU3JDLDJCQUEyQjZJLGtCQUFrQixFQUFFcEgsT0FBTztJQUNwRSxJQUFNNkMsT0FBT3VFLG1CQUFtQnlELE9BQU87SUFFdkMsT0FBT2hJO0FBQ1Q7QUFFTyxTQUFTeEgsMkJBQTJCK0wsa0JBQWtCLEVBQUVwSCxPQUFPO0lBQ3BFLElBQU0yQixPQUFPeUYsbUJBQW1Cb0QsT0FBTztJQUV2QyxPQUFPN0k7QUFDVDtBQUVPLFNBQVN0QywyQkFBMkJvSSxjQUFjLEVBQUV6SCxPQUFPO0lBQ2hFLElBQU0sQUFBRTRDLFdBQWExQyxpQkFBUSxDQUFyQjBDLFVBQ0YwRSxTQUFTRyxlQUFla0UsU0FBUyxJQUNqQzlJLE9BQU80RSxlQUFlb0QsT0FBTyxJQUM3QmxKLE9BQU8sQUFBQzJGLFdBQVcsT0FDVkEsU0FDRUcsZUFBZStDLE9BQU8sSUFDakNuSSxhQUFhLE1BQ2JTLGlCQUFpQkMsSUFBQUEsOEJBQXNCLEVBQUNwQixPQUN4Q3ZCLFNBQVMwQyxnQkFDVGxDLFdBQVcsSUFBSWdDLFNBQVN4QyxRQUFReUMsTUFBTWxCLE1BQU1VO0lBRWxELE9BQU96QjtBQUNUO0FBRU8sU0FBU3JHLDRCQUE0Qm9JLFlBQVksRUFBRTNDLE9BQU87SUFDL0QsSUFBTXFDLGFBQWE7SUFFbkIsT0FBT0E7QUFDVDtBQUVPLFNBQVNwSiw0QkFBNEI4RyxRQUFRLEVBQUVDLE9BQU87SUFDM0QsSUFBSU0sa0JBQWtCO0lBRXRCLElBQU00SCxzQkFBc0JuSSxTQUFTNkwsc0JBQXNCO0lBRTNELElBQUkxRCx3QkFBd0IsTUFBTTtRQUNoQzVILGtCQUFrQnRILHVDQUF1Q2tQLHFCQUFxQmxJO0lBQ2hGO0lBRUEsT0FBT007QUFDVDtBQUVPLFNBQVN4Riw0QkFBNEJxSCxXQUFXLEVBQUVuQyxPQUFPO0lBQzlELElBQU02TCxtQkFBbUIxSixZQUFZMkosbUJBQW1CLElBQ2xEeEosZUFBZXZJLDZCQUE2QjhSLGtCQUFrQjdMO0lBRXBFLE9BQU9zQztBQUNUO0FBRU8sU0FBU3RHLDRCQUE0Qm1KLGNBQWMsRUFBRW5GLE9BQU87SUFDakUsSUFBSTJELFlBQVk7SUFFaEIsSUFBTUgsZ0JBQWdCMkIsZUFBZTRHLGdCQUFnQjtJQUVyRCxJQUFJdkksa0JBQWtCLE1BQU07UUFDMUJHLFlBQVkxSCwyQkFBMkJ1SCxlQUFleEQ7SUFDeEQ7SUFFQSxPQUFPMkQ7QUFDVDtBQUVPLFNBQVN2Siw0QkFBNEJvTCxhQUFhLEVBQUV4RixPQUFPO0lBQ2hFLElBQU0sQUFBRW9GLGFBQWVsRixpQkFBUSxDQUF2QmtGLFlBQ0ZVLG1CQUFtQmtHLElBQUFBLHlDQUFpQyxFQUFDeEcsZ0JBQ3JEcEYsU0FBUzBGLGtCQUNUM0YsT0FBTyxNQUNQa0YsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVnZFLE9BQU8sTUFDUFEsUUFBUSxNQUNSVSxTQUFTLE1BQ1RRLFVBQVUsTUFDVjlCLFdBQVcsTUFDWCtDLFlBQVksTUFDWkcsYUFBYSxNQUNiYSxhQUFhLE1BQ2JjLGNBQWMsTUFDZEMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQixNQUNwQkMsc0JBQXNCLE1BQ3RCeEQsYUFBYSxJQUFJK0MsV0FBV2hGLFFBQVFELE1BQU1rRixPQUFPQyxRQUFRQyxTQUFTQyxlQUFleEUsTUFBTVEsT0FBT1UsUUFBUVEsU0FBUzlCLFVBQVUrQyxXQUFXRyxZQUFZYSxZQUFZYyxhQUFhQyxlQUFlQyxtQkFBbUJDLG1CQUFtQkM7SUFFcE8sT0FBT3hEO0FBQ1Q7QUFFTyxTQUFTN0YsNkJBQTZCdUQsUUFBUSxFQUFFQyxPQUFPO0lBQzVELElBQUk4SSxtQkFBbUI7SUFFdkIsSUFBTUwsdUJBQXVCMUksU0FBU2tNLHVCQUF1QjtJQUU3RCxJQUFJeEQseUJBQXlCLE1BQU07UUFDakNLLG1CQUFtQnZNLHlDQUF5Q2tNLHNCQUFzQnpJO0lBQ3BGO0lBRUEsT0FBTzhJO0FBQ1Q7QUFFTyxTQUFTM00sNkJBQTZCZ0osY0FBYyxFQUFFbkYsT0FBTztJQUNsRSxJQUFJOEQsYUFBYTtJQUVqQixJQUFNRixpQkFBaUJ1QixlQUFlK0csaUJBQWlCO0lBRXZELElBQUl0SSxtQkFBbUIsTUFBTTtRQUMzQkUsYUFBYTFILDZCQUE2QndILGdCQUFnQjVEO0lBQzVEO0lBRUEsT0FBTzhEO0FBQ1Q7QUFFTyxTQUFTdkssNkJBQTZCNFMsY0FBYyxFQUFFbk0sT0FBTztJQUNsRSxJQUFJMkUsYUFBYTtJQUVqQixJQUFNWixpQkFBaUJvSSxlQUFlQyxpQkFBaUI7SUFFdkQsSUFBSXJJLG1CQUFtQixNQUFNO1FBQzNCWSxhQUFhckwsNkJBQTZCeUssZ0JBQWdCL0Q7SUFDNUQ7SUFFQSxPQUFPMkU7QUFDVDtBQUVPLFNBQVN6TCw2QkFBNkJrTyxrQkFBa0IsRUFBRXBILE9BQU87SUFDdEUsSUFBTXNILFNBQVNGLG1CQUFtQnVFLFNBQVM7SUFFM0MsT0FBT3JFO0FBQ1Q7QUFFTyxTQUFTN04sOEJBQThCMEksV0FBVyxFQUFFbkMsT0FBTztJQUNoRSxJQUFNcU0scUJBQXFCbEssWUFBWW1LLHFCQUFxQixJQUN0RC9KLGlCQUFpQnhJLDZCQUE2QnNTLG9CQUFvQnJNO0lBRXhFLE9BQU91QztBQUNUO0FBRU8sU0FBUzdFLDhCQUE4QnlILGNBQWMsRUFBRW5GLE9BQU87SUFDbkUsSUFBSXlGLGNBQWM7SUFFbEIsSUFBTWUsa0JBQWtCckIsZUFBZW9ILGtCQUFrQjtJQUV6RCxJQUFJL0Ysb0JBQW9CLE1BQU07UUFDNUJmLGNBQWM3SCwrQkFBK0I0SSxpQkFBaUJ4RztJQUNoRTtJQUVBLE9BQU95RjtBQUNUO0FBRU8sU0FBU2pILDhCQUE4QnVLLHFCQUFxQixFQUFFL0ksT0FBTztJQUMxRSxJQUFNNkMsT0FBTzJKLG1CQUFZO0lBRXpCLE9BQU8zSjtBQUNUO0FBRU8sU0FBU3ZFLDhCQUE4Qm1PLHFCQUFxQixFQUFFek0sT0FBTztJQUMxRSxJQUFNNkMsT0FBTzJKLG1CQUFZO0lBRXpCLE9BQU8zSjtBQUNUO0FBRU8sU0FBUzlKLCtCQUErQjJILFFBQVEsRUFBRVYsT0FBTztJQUM5RCxJQUFNb0oseUJBQXlCMUksU0FBU2dNLHlCQUF5QixJQUMzRDdMLHFCQUFxQmpJLDZDQUE2Q3dRLHdCQUF3QnBKO0lBRWhHLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTeEUsK0JBQStCbUssZUFBZSxFQUFFeEcsT0FBTztJQUNyRSxJQUFNMkcsY0FBY0gsZ0JBQWdCbUcsYUFBYTtJQUVqRCxPQUFPaEc7QUFDVDtBQUVPLFNBQVNwSiwrQkFBK0J3SixpQkFBaUIsRUFBRS9HLE9BQU87SUFDdkUsSUFBTWdELGdCQUFnQitELGtCQUFrQjZGLGdCQUFnQixJQUNsRDFKLFlBQVkxRiwyQkFBMkJ3RixlQUFlaEQ7SUFFNUQsT0FBT2tEO0FBQ1Q7QUFFTyxTQUFTckQsZ0NBQWdDZ0QsSUFBSSxFQUFFRixZQUFZLEVBQUUzQyxPQUFPO0lBQ3pFLElBQU0sQUFBRTRDLFdBQWExQyxpQkFBUSxDQUFyQjBDLFVBQ0ZqQixPQUFPbkcscUJBQXFCbUgsZUFDNUJOLGFBQWE5SCw0QkFBNEJvSSxjQUFjM0MsVUFDdkQ4QyxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDcEIsT0FDeEN2QixTQUFTMEMsZ0JBQ1RsQyxXQUFXLElBQUlnQyxTQUFTeEMsUUFBUXlDLE1BQU1sQixNQUFNVTtJQUVsRCxPQUFPekI7QUFDVDtBQUVPLFNBQVM3QixnQ0FBZ0NnQixRQUFRLEVBQUVDLE9BQU87SUFDL0QsSUFBSWlLLHNCQUFzQjtJQUUxQixJQUFNTCwwQkFBMEI3SixTQUFTOE0sMEJBQTBCO0lBRW5FLElBQUlqRCw0QkFBNEIsTUFBTTtRQUNwQ0ssc0JBQXNCakwsK0NBQStDNEsseUJBQXlCNUo7SUFDaEc7SUFFQSxPQUFPaUs7QUFDVDtBQUVPLFNBQVNwUixnQ0FBZ0N1SSxTQUFTLEVBQUVwQixPQUFPO0lBQ2hFLElBQU1vSix5QkFBeUJoSSxVQUFVc0wseUJBQXlCLElBQzVEN0wscUJBQXFCakksNkNBQTZDd1Esd0JBQXdCcEo7SUFFaEcsT0FBT2E7QUFDVDtBQUVPLFNBQVM5RixnQ0FBZ0M4RyxVQUFVLEVBQUU3QixPQUFPO0lBQ2pFLElBQU1xQyxhQUFhbkkseUJBQXlCMkgsWUFBWTdCLFVBQ2xEK0Isb0JBQW9CTSxZQUFZLEdBQUc7SUFFekMsT0FBT047QUFDVDtBQUVPLFNBQVM1RCxnQ0FBZ0NnSCxjQUFjLEVBQUVuRixPQUFPO0lBQ3JFLElBQU13RixnQkFBZ0JMLGVBQWUySCxnQkFBZ0I7SUFFckQsT0FBT3RIO0FBQ1Q7QUFFTyxTQUFTekksZ0NBQWdDb0ksY0FBYyxFQUFFbkYsT0FBTztJQUNyRSxJQUFJMEYsZ0JBQWdCO0lBRXBCLElBQU1xQixvQkFBb0I1QixlQUFlNEgsb0JBQW9CO0lBRTdELElBQUloRyxzQkFBc0IsTUFBTTtRQUM5QnJCLGdCQUFnQjFJLG1DQUFtQytKLG1CQUFtQi9HO0lBQ3hFO0lBRUEsT0FBTzBGO0FBQ1Q7QUFFTyxTQUFTekcsZ0NBQWdDaUosbUJBQW1CLEVBQUVsSSxPQUFPO0lBQzFFLElBQU0yQyxlQUFldUYsb0JBQW9CeUMsZUFBZSxJQUNsRC9KLFdBQVdkLHlCQUF5QjZDLGNBQWMzQztJQUV4RCxPQUFPWTtBQUNUO0FBRU8sU0FBUzlILGlDQUFpQytJLFVBQVUsRUFBRTdCLE9BQU87SUFDbEUsSUFBTW9KLHlCQUF5QnZILFdBQVc2Syx5QkFBeUIsSUFDN0Q3TCxxQkFBcUJqSSw2Q0FBNkN3USx3QkFBd0JwSjtJQUVoRyxPQUFPYTtBQUNUO0FBRU8sU0FBU3JCLGlDQUFpQ2lKLG9CQUFvQixFQUFFekksT0FBTztJQUM1RSxJQUFNMkMsZUFBZThGLHFCQUFxQmtDLGVBQWUsSUFDbkQvSixXQUFXZCx5QkFBeUI2QyxjQUFjM0M7SUFFeEQsT0FBT1k7QUFDVDtBQUVPLFNBQVNqQyxpQ0FBaUN1TCx3QkFBd0IsRUFBRWxLLE9BQU87SUFDaEYsSUFBTTZDLE9BQU9xSCx5QkFBeUJXLE9BQU87SUFFN0MsT0FBT2hJO0FBQ1Q7QUFFTyxTQUFTMUksa0NBQWtDbU8sbUJBQW1CLEVBQUV0SSxPQUFPO0lBQzVFLElBQU1tRixpQkFBaUJtRCxvQkFBb0JXLGlCQUFpQixJQUN0RDVHLGFBQWF0SSw2QkFBNkJvTCxnQkFBZ0JuRjtJQUVoRSxPQUFPcUM7QUFDVDtBQUVPLFNBQVMxRixrQ0FBa0N1TCxtQkFBbUIsRUFBRWxJLE9BQU87SUFDNUUsSUFBTTRFLGlCQUFpQnNELG9CQUFvQjhFLGlCQUFpQixJQUMxRDlILGFBQWF0SSw2QkFBNkJnSSxnQkFBZ0I1RTtJQUU1RCxPQUFPa0Y7QUFDVDtBQUVPLFNBQVNqSyxrQ0FBa0NpUCx3QkFBd0IsRUFBRWxLLE9BQU87SUFDakYsSUFBTXlCLFlBQVl5SSx5QkFBeUIrQyxZQUFZLElBQ2pEckwsUUFBUTVHLG1CQUFtQnlHLFdBQVd6QjtJQUU1QyxPQUFPNEI7QUFDVDtBQUVPLFNBQVMvRCxtQ0FBbUMySSxlQUFlLEVBQUV4RyxPQUFPO0lBQ3pFLElBQU1zSSxzQkFBc0I5QixnQkFBZ0IwRyxzQkFBc0IsSUFDNUR0RyxrQkFBa0I5SSx1Q0FBdUN3SyxxQkFBcUJ0STtJQUVwRixPQUFPNEc7QUFDVDtBQUVPLFNBQVN6SCxtQ0FBbUNrRCxVQUFVLEVBQUVlLFNBQVMsRUFBRXBELE9BQU87SUFDL0UsSUFBTSxBQUFFNEMsV0FBYTFDLGlCQUFRLENBQXJCMEMsVUFDRkMsT0FBT08sVUFBVXlILE9BQU8sSUFDeEJsSixPQUFPeUIsVUFBVW9ILE9BQU8sSUFDeEIxSCxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDcEIsT0FDeEN2QixTQUFTMEMsZ0JBQ1RsQyxXQUFXLElBQUlnQyxTQUFTeEMsUUFBUXlDLE1BQU1sQixNQUFNVTtJQUVsRCxPQUFPekI7QUFDVDtBQUVPLFNBQVMvRSxvQ0FBb0NzSixjQUFjLEVBQUVuRixPQUFPO0lBQ3pFLElBQUkyRixvQkFBb0I7SUFFeEIsSUFBTW9ELHdCQUF3QjVELGVBQWVnSSx3QkFBd0I7SUFFckUsSUFBSXBFLDBCQUEwQixNQUFNO1FBQ2xDcEQsb0JBQW9CN0osMkNBQTJDaU4sdUJBQXVCL0k7SUFDeEY7SUFFQSxPQUFPMkY7QUFDVDtBQUVPLFNBQVN6SyxvQ0FBb0NpSyxjQUFjLEVBQUVuRixPQUFPO0lBQ3pFLElBQUk0RixvQkFBb0I7SUFFeEIsSUFBTTZHLHdCQUF3QnRILGVBQWVpSSx3QkFBd0I7SUFFckUsSUFBSVgsMEJBQTBCLE1BQU07UUFDbEM3RyxvQkFBb0J6SywyQ0FBMkNzUix1QkFBdUJ6TTtJQUN4RjtJQUVBLE9BQU80RjtBQUNUO0FBRU8sU0FBU3RMLHFDQUFxQytTLHFCQUFxQixFQUFFck4sT0FBTztJQUNqRixJQUFNbUYsaUJBQWlCa0ksc0JBQXNCcEUsaUJBQWlCLElBQ3hENUcsYUFBYXRJLDZCQUE2Qm9MLGdCQUFnQm5GO0lBRWhFLE9BQU9xQztBQUNUO0FBRU8sU0FBUzdJLHFDQUFxQ2lULHFCQUFxQixFQUFFek0sT0FBTztJQUNqRixJQUFNc04sY0FBY2Isc0JBQXNCYyxhQUFhO0lBRXZELE9BQU9EO0FBQ1Q7QUFFTyxTQUFTNVEscUNBQXFDME0sc0JBQXNCLEVBQUVwSixPQUFPO0lBQ2xGLElBQU00RSxpQkFBaUJ3RSx1QkFBdUI0RCxpQkFBaUIsSUFDN0Q5SCxhQUFhdEksNkJBQTZCZ0ksZ0JBQWdCNUU7SUFFNUQsT0FBT2tGO0FBQ1Q7QUFFTyxTQUFTekgsc0NBQXNDMkwsc0JBQXNCLEVBQUVwSixPQUFPO0lBQ25GLElBQU13RyxrQkFBa0I0Qyx1QkFBdUJtRCxrQkFBa0IsSUFDM0Q5RyxjQUFjN0gsK0JBQStCNEksaUJBQWlCeEc7SUFFcEUsT0FBT3lGO0FBQ1Q7QUFFTyxTQUFTcE0sc0NBQXNDOEwsY0FBYyxFQUFFbkYsT0FBTztJQUMzRSxJQUFJNkYsc0JBQXNCO0lBRTFCLElBQU0yRCwwQkFBMEJyRSxlQUFlcUksMEJBQTBCO0lBRXpFLElBQUloRSw0QkFBNEIsTUFBTTtRQUNwQzNELHNCQUFzQnpNLCtDQUErQ29RLHlCQUF5QnhKO0lBQ2hHO0lBRUEsT0FBTzZGO0FBQ1Q7QUFFTyxTQUFTL0wsc0NBQXNDMFAsdUJBQXVCLEVBQUV4SixPQUFPO0lBQ3BGLElBQU1tRixpQkFBaUJxRSx3QkFBd0JQLGlCQUFpQixJQUMxRDVHLGFBQWF0SSw2QkFBNkJvTCxnQkFBZ0JuRjtJQUVoRSxPQUFPcUM7QUFDVDtBQUVPLFNBQVNuRixzQ0FBc0NnTix3QkFBd0IsRUFBRWxLLE9BQU87SUFDckYsSUFBTSxBQUFFeU4sWUFBY3ZOLGlCQUFRLENBQXRCdU4sV0FDRjVLLE9BQU9sRSxpQ0FBaUN1TCwwQkFBMEJsSyxVQUNsRTRCLFFBQVEzRyxrQ0FBa0NpUCwwQkFBMEJsSyxVQUNwRWtGLGFBQWFySSx1Q0FBdUNxTiwwQkFBMEJsSyxVQUM5RXlGLGNBQWM5SCx3Q0FBd0N1TSwwQkFBMEJsSyxVQUNoRjBOLGtCQUFrQkMsSUFBQUEsNERBQW9ELEVBQUM5SyxNQUFNakIsT0FBT3NELFlBQVlPLGNBQ2hHckYsU0FBU3NOLGlCQUNUdEQsWUFBWSxJQUFJcUQsVUFBVXJOLFFBQVF5QyxNQUFNakIsT0FBT3NELFlBQVlPO0lBRWpFLE9BQU8yRTtBQUNUO0FBRU8sU0FBU3ZOLHVDQUF1Q3FOLHdCQUF3QixFQUFFbEssT0FBTztJQUN0RixJQUFNNEUsaUJBQWlCc0YseUJBQXlCOEMsaUJBQWlCLElBQzNEOUgsYUFBYXRJLDZCQUE2QmdJLGdCQUFnQjVFO0lBRWhFLE9BQU9rRjtBQUNUO0FBRU8sU0FBU3hHLHdDQUF3QzBLLHNCQUFzQixFQUFFcEosT0FBTztJQUNyRixJQUFNNkMsT0FBT3VHLHVCQUF1QnlCLE9BQU87SUFFM0MsT0FBT2hJO0FBQ1Q7QUFFTyxTQUFTbEYsd0NBQXdDdU0sd0JBQXdCLEVBQUVsSyxPQUFPO0lBQ3ZGLElBQU13RyxrQkFBa0IwRCx5QkFBeUJxQyxrQkFBa0IsSUFDN0Q5RyxjQUFjN0gsK0JBQStCNEksaUJBQWlCeEc7SUFFcEUsT0FBT3lGO0FBQ1Q7QUFFTyxTQUFTN0YsMENBQTBDaUQsSUFBSSxFQUFFK0ssc0JBQXNCLEVBQUU1TixPQUFPO0lBQzdGLElBQU0yQyxlQUFlaUwsdUJBQXVCakQsZUFBZSxJQUNyRC9KLFdBQVdmLGdDQUFnQ2dELE1BQU1GLGNBQWMzQztJQUVyRSxPQUFPWTtBQUNUO0FBRU8sU0FBU3pGLDJDQUEyQ3NSLHFCQUFxQixFQUFFek0sT0FBTztJQUN2RixJQUFNLEFBQUU2TixvQkFBc0IzTixpQkFBUSxDQUE5QjJOLG1CQUNGNUoscUJBQXFCd0ksc0JBQXNCdkkscUJBQXFCLElBQ2hFQyxzQkFBc0JzSSxzQkFBc0JySSxzQkFBc0IsSUFDbEV2QixPQUFPdkUsOEJBQThCbU8sdUJBQXVCek0sVUFDNURzTixjQUFjOVQscUNBQXFDaVQsdUJBQXVCek0sVUFDMUV1RSxpQkFBaUJ4Syw2QkFBNkJrSyxvQkFBb0JqRSxVQUNsRXdFLGtCQUFrQnpLLDZCQUE2Qm9LLHFCQUFxQm5FLFVBQ3BFSSxTQUFTME4sSUFBQUEsa0ZBQTBFLEVBQUNSLGFBQWEvSSxnQkFBZ0JDLGlCQUFpQnhFLFVBQ2xJNEYsb0JBQW9CLElBQUlpSSxrQkFBa0J6TixRQUFReUMsTUFBTXlLLGFBQWEvSSxnQkFBZ0JDO0lBRTNGLE9BQU9vQjtBQUNUO0FBRU8sU0FBUy9HLG9EQUFvRGdFLElBQUksRUFBRStLLHNCQUFzQixFQUFFNU4sT0FBTztJQUN2RyxJQUFNLEFBQUUrTixxQkFBdUI3TixpQkFBUSxDQUEvQjZOLG9CQUNGbk4sV0FBV2hCLDBDQUEwQ2lELE1BQU0rSyx3QkFBd0I1TixVQUNuRnFDLGFBQWEvSCxxQ0FBcUNzVCx3QkFBd0I1TixVQUMxRWdPLDJCQUEyQkMsSUFBQUEseURBQWlELEVBQUM1TCxZQUFZekIsVUFBVVosVUFDbkdJLFNBQVM0TiwwQkFDVEUsYUFBYSxJQUFJSCxtQkFBbUIzTixRQUFRUSxVQUFVeUI7SUFFNUQsT0FBTzZMO0FBQ1Q7QUFFTyxTQUFTelQsMEJBQTBCNEssS0FBSyxFQUFFckYsT0FBTztJQUN0RCxJQUFNb0csbUJBQW1CZixNQUFNbUcsR0FBRyxDQUFDLFNBQUNyTDtRQUNsQyxJQUFNa0MsYUFBYXJJLG1CQUFtQm1HLE1BQU1IO1FBRTVDLE9BQU9xQztJQUNUO0lBRUEsT0FBTytEO0FBQ1Q7QUFFTyxTQUFTdEosaUNBQWlDOEgsY0FBYyxFQUFFNUUsT0FBTztJQUN0RSxJQUFNbU8saUJBQWlCdkosZUFBZXdKLGlCQUFpQixJQUNqRHRKLGlCQUFpQnFKLGVBQWUzQyxHQUFHLENBQUMsU0FBQ3JJO1FBQ25DLElBQU1DLFlBQVkzRywyQkFBMkIwRyxlQUFlbkQ7UUFFNUQsT0FBT29EO0lBQ1Q7SUFFTixPQUFPMEI7QUFDVDtBQUVPLFNBQVN0SyxvQ0FBb0MwTCxlQUFlLEVBQUVsRyxPQUFPO0lBQzFFLElBQU1vRyxtQkFBbUJGLGdCQUFnQnNGLEdBQUcsQ0FBQyxTQUFDckc7UUFDdEMsSUFBTTlDLGFBQWF0SSw2QkFBNkJvTCxnQkFBZ0JuRjtRQUVoRSxPQUFPcUM7SUFDVDtJQUVOLE9BQU8rRDtBQUNUO0FBRU8sU0FBU3hLLDJDQUEyQ2dNLG1CQUFtQixFQUFFNUgsT0FBTztJQUNyRixJQUFNcU8sc0JBQXNCekcsb0JBQW9CNEQsR0FBRyxDQUFDLFNBQUNwRTtRQUNuRCxJQUFNSyxpQkFBaUJoTSxxQ0FBcUMyTCxvQkFBb0JwSDtRQUVoRixPQUFPeUg7SUFDVDtJQUVBLE9BQU80RztBQUNUO0FBRU8sU0FBU3ZQLG9EQUFvRDhLLHVCQUF1QixFQUFFNUosT0FBTztJQUNsRyxJQUFNNkMsT0FBTytHLHdCQUF3QmlCLE9BQU8sSUFDdEN5RCwwQkFBMEIxRSx3QkFBd0IyRSwwQkFBMEIsSUFDNUV6RSwyQkFBMkJ3RSx3QkFBd0I5QyxHQUFHLENBQUMsU0FBQ29DO1FBQ3RELElBQU1ZLHFCQUFxQjNQLG9EQUFvRGdFLE1BQU0rSyx3QkFBd0I1TjtRQUU3RyxPQUFPd087SUFDVDtJQUVOLE9BQU8xRTtBQUNUO0lBRUEsV0FBZTtJQUNibFAsc0JBQUFBO0FBQ0YifQ==