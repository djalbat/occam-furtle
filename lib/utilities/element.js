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
    get expressionFromString () {
        return expressionFromString;
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
    get stringFromExpressionNode () {
        return stringFromExpressionNode;
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
var _stringLiteral = require("../utilities/stringLiteral");
var _string = require("../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stepFromStepNode(stepNode, context) {
    var Step = _elements.default.Step, arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variablesDeclaration = variableAssignmentsFromStepNode(stepNode, context), stepString = (0, _string.stepStringFromNothing)(context), string = stepString, step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);
    return step;
}
function someFromSomeNode(someNode, context) {
    var Some = _elements.default.Some, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure, context), string = someString, some = new Some(string, variable, anonymousProcedure);
    return some;
}
function errorFromErrorNode(errorNode, context) {
    var Error = _elements.default.Error, node = errorNode, string = context.nodeAsString(node), error = new Error(string);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    var Every = _elements.default.Every, anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), variable = variableFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure, context), string = everyString, every = new Every(string, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    var Label = _elements.default.Label, name = nameFromLabelNode(labelNode, context), string = (0, _string.stringFromName)(name, context), label = new Label(string, name);
    return label;
}
function reduceFromReduceNode(reduceNode, context) {
    var Reduce = _elements.default.Reduce, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString, reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    var Ternary = _elements.default.Ternary, expressionNode = ternaryNode.getExpressionNode(), ifExpressionNode = ternaryNode.getIfExpressionNode(), elseExpressionNode = ternaryNode.getElseExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context), ifExpression = expressionFromExpressionNode(ifExpressionNode, context), elseExpression = expressionFromExpressionNode(elseExpressionNode, context), ternaryString = (0, _string.ternaryStringFromExpressionIfExpressionAndElseExpression)(expression, ifExpression, elseExpression, context), string = ternaryString, ternary = new Ternary(string, expression, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionfFromVariableNode(variableNode, context), variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, name = nameFromReferenceNode(referenceNode, context), string = (0, _string.stringFromName)(name), reference = new Reference(string, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    var parameter = null;
    var type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        var Parameter = _elements.default.Parameter, name = nameFromParaneterNode(parameterNode, context), parameterString = (0, _string.parameterStringFromTypeAndName)(type, name, context), string = parameterString; ///
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
    var Comparison = _elements.default.Comparison, leftExpressionNode = comparisonNode.getLeftExpressionNode(), rightExpressionNode = comparisonNode.getRightExpressionNode(), negated = comparisonNode.isNegated(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context), rightExpression = expressionFromExpressionNode(rightExpressionNode, context), comparisonString = (0, _string.comparisonStringFromNegatedLeftExpressionAndRightExpression)(negated, leftExpression, rightExpression, context), string = comparisonString, comparison = new Comparison(string, negated, leftExpression, rightExpression);
    return comparison;
}
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), parametersString = (0, _string.paramtersStringFromParametersArray)(paramtersArray, context), string = parametersString, array = paramtersArray, parameters = new Parameters(string, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Expression = _elements.default.Expression, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), string = stringFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), variable = variableFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), comparison = comparisonFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function expressionsFromExpressionsNode(expressionsNode, context) {
    var Expressions = _elements.default.Expressions, expressionNodes = expressionsNode.getExpressionNodes(), expressionsArray = expressionsArrayFromExpressionNodes(expressionNodes, context), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray, context), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement, context), string = returnBlockString, returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function expressionsFromProcedureCallNode(procedureCallNode, context) {
    var expressionsNode = procedureCallNode.getExpressionsNode(), expressions = expressionsFromExpressionsNode(expressionsNode, context);
    return expressions;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, reference = referenceFromProcedureCallNode(procedureCallNode, context), expressions = expressionsFromProcedureCallNode(procedureCallNode, context), procedureCallString = (0, _string.procedureCallStringFromReferenceAndExpressions)(reference, expressions, context), string = procedureCallString, procedureCall = new ProcedureCall(string, reference, expressions);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    var NamedParameter = _elements.default.NamedParameter, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), asName = asNameFromNamedParameterNode(namedParameterNode, context), namedParamterString = (0, _string.namedParameterStringFromTypeNameAndAsName)(type, name, asName, context), string = namedParamterString, namedParameter = new NamedParameter(string, type, name, asName);
    return namedParameter;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    var NamedParameters = _elements.default.NamedParameters, namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), namedParametersString = (0, _string.namedParametersStringFromNamedParamtersArray)(namedParametersArray, context), string = namedParametersString, array = namedParametersArray, namedParameters = new NamedParameters(string, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var ArrayAssignment = _elements.default.ArrayAssignment, variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context), arrayAssignmentString = (0, _string.arrayAssignmentStringFromVariableAndParameters)(variable, parameters), string = arrayAssignmentString, arrayAssignment = new ArrayAssignment(string, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    var ReturnStatement = _elements.default.ReturnStatement, expression = expressionFromReturnStatementNode(returnStatementNode, context), returnBlockString = (0, _string.returnBlockStringFromExpression)(expression, context), string = returnBlockString, returnStatement = new ReturnStatement(string, expression);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    var namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var ObjectAssigment = _elements.default.ObjectAssigment, variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context), objectAssignmentString = (0, _string.objectAssignmentStringFromVariableAndNamedParameters)(variable, namedParameters, context), string = objectAssignmentString, objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    return objectAssignment;
}
function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var NegatedExpression = _elements.default.NegatedExpression, expressionNode = negatedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context), type = typeFromNegatedExpressionNode(expressionNode, context), negatedExpressionString = (0, _string.negatedExpressionStringFromExpression)(expression, context), string = negatedExpressionString, negatedExpression = new NegatedExpression(string, type, expression);
    return negatedExpression;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock, context), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpressionString = (0, _string.bracketedExpressionStringFromBExpression)(expression, context), string = bracketedExpressionString, bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsString = (0, _string.varaibleAssignmentsStringFromVariableAssignmentsArray)(variableAssignmentsArray, context), string = variableAssignmentsString, array = variableAssignmentsArray, variableAssignments = new VariableAssignments(string, array);
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
    if (node === null) {
        node = nullNode;
    }
    var Expression = _elements.default.Expression, nodes = null, number = null, string = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function expressionFromNodes(nodes, context) {
    var Expression = _elements.default.Expression, node = null, number = null, string = null, boolean = null, ternary = null, some = null, every = null, reduce = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function expressionsFromNodes(nodes, context) {
    var Expressions = _elements.default.Expressions, expressionsArray = expressionsArrayFromNodes(nodes, context), expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray, context), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
}
function expressionFromString(string, context) {
    var Expression = _elements.default.Expression, node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
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
    var Expression = _elements.default.Expression, node = null, nodes = null, number = null, string = null, some = null, every = null, reduce = null, ternary = null, variable = null, nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}
function variableFromParameter(parameter, context) {
    var Variable = _elements.default.Variable, type = parameter.getType(), name = parameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
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
function queryFromNodeQueryNode(nodeQueryNode, context) {
    var stringLiteral = nodeQueryNode.getStringLiteral(), string = (0, _stringLiteral.stringFromStringLiteral)(stringLiteral), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
    return query;
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
function queryFromNodesQueryNode(nodesQueryNode, context) {
    var stringLiteral = nodesQueryNode.getStringLiteral(), string = (0, _stringLiteral.stringFromStringLiteral)(stringLiteral), expressionString = string, query = _occamquery.Query.fromExpressionString(expressionString);
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
function stringFromExpressionNode(expressionNode, context) {
    var string = null;
    var stringLiteral = expressionNode.getStringLiteral();
    if (stringLiteral !== null) {
        string = (0, _stringLiteral.stringFromStringLiteral)(stringLiteral);
    }
    return string;
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
    ], expressionsString = (0, _string.expressionsStringFromExpressionsArray)(expressionsArray, context), string = expressionsString, array = expressionsArray, expressions = new Expressions(string, array);
    return expressions;
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
    var Variable = _elements.default.Variable, asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
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
function asNameFromNamedParameterNode(namedParameterNode, context) {
    var asName = namedParameterNode.getAsName();
    return asName;
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
    var Variable = _elements.default.Variable, name = nameFromVariableNode(variableNode), expression = expressionfFromVariableNode(variableNode, context), variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
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
    var Variable = _elements.default.Variable, type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdMaXRlcmFsXCI7XG5pbXBvcnQgeyBzdHJpbmdGcm9tTmFtZSxcbiAgICAgICAgIHN0ZXBTdHJpbmdGcm9tTm90aGluZyxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICBwYXJhbWV0ZXJTdHJpbmdGcm9tVHlwZUFuZE5hbWUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21FeHByZXNzaW9uLFxuICAgICAgICAgcGFyYW10ZXJzU3RyaW5nRnJvbVBhcmFtZXRlcnNBcnJheSxcbiAgICAgICAgIGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXksXG4gICAgICAgICBuZWdhdGVkRXhwcmVzc2lvblN0cmluZ0Zyb21FeHByZXNzaW9uLFxuICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlLFxuICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbixcbiAgICAgICAgIHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUsXG4gICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzTmFtZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBuYW1lZFBhcmFtZXRlcnNTdHJpbmdGcm9tTmFtZWRQYXJhbXRlcnNBcnJheSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgYXJyYXlBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMsXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlLFxuICAgICAgICAgb2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICB2YXJhaWJsZUFzc2lnbm1lbnRzU3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSxcbiAgICAgICAgIGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgdGVybmFyeVN0cmluZ0Zyb21FeHByZXNzaW9uSWZFeHByZXNzaW9uQW5kRWxzZUV4cHJlc3Npb24sXG4gICAgICAgICBjb21wYXJpc29uU3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbixcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgbG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcFN0cmluZyA9IHN0ZXBTdHJpbmdGcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RlcFN0cmluZywgIC8vL1xuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uKGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmdGcm9tVHlwZUFuZE5hbWUodHlwZSwgbmFtZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nOyAvLy9cblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBjb21wYXJpc29uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbmVnYXRlZCA9IGNvbXBhcmlzb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblN0cmluZyA9IGNvbXBhcmlzb25TdHJpbmdGcm9tTmVnYXRlZExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uKG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBjb21wYXJpc29uU3RyaW5nLCAgLy8vXG4gICAgICAgIGNvbXBhcmlzb24gPSBuZXcgQ29tcGFyaXNvbihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXkocGFyYW10ZXJzQXJyYXksIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJzU3RyaW5nLCAgLy8vXG4gICAgICAgIGFycmF5ID0gcGFyYW10ZXJzQXJyYXksIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJvb2xlYW4gPSBib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IGV4cHJlc3Npb25zTm9kZS5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgZXhwcmVzc2lvbnNBcnJheSA9IGV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShleHByZXNzaW9uc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25zQXJyYXksXG4gICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAvLy9cbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbnNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0RXhwcmVzc2lvbnNOb2RlKCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlKGV4cHJlc3Npb25zTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMocmVmZXJlbmNlLCBleHByZXNzaW9ucywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZUNhbGxTdHJpbmcsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCBleHByZXNzaW9ucyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzTmFtZSA9IGFzTmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNOYW1lKHR5cGUsIG5hbWUsIGFzTmFtZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IG5hbWVkUGFyYW10ZXJTdHJpbmcsIC8vL1xuICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFzTmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IG5hbWVkUGFyYW1ldGVyc1N0cmluZ0Zyb21OYW1lZFBhcmFtdGVyc0FycmF5KG5hbWVkUGFyYW1ldGVyc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJzU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlcnNBcnJheSwgLy8vXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5QXNzaWdubWVudFN0cmluZyA9IGFycmF5QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnModmFyaWFibGUsIHBhcmFtZXRlcnMpLFxuICAgICAgICBzdHJpbmcgPSBhcnJheUFzc2lnbm1lbnRTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgIC8vL1xuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gb2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyh2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gb2JqZWN0QXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvblN0cmluZyA9IG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyA9IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmcsIC8vL1xuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9IHZhcmFpYmxlQXNzaWdubWVudHNTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oc3RyaW5nLCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgbm9kZSA9IG51bGxOb2RlO1xuICB9XG5cbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbnNBcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShleHByZXNzaW9uc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25zQXJyYXksIC8vL1xuICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZ0xpdGVyYWwoKSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZSgpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IG5vZGVzUXVlcnlOb2RlLmdldFN0cmluZ0xpdGVyYWwoKSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRFdmVyeU5vZGUoKTtcblxuICBpZiAoZXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gZXhwcmVzc2lvbk5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb25Ob2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBbXG4gICAgICAgICAgZXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkoZXhwcmVzc2lvbnNBcnJheSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBleHByZXNzaW9uc0FycmF5LCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbk5vZGUuZ2V0Qm9vbGVhbigpO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG5cbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFzTmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldEFzTmFtZSgpLFxuICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICBuYW1lID0gKGFzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICBhc05hbWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbmZGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2RlUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhc05hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0QXNOYW1lKCk7XG5cbiAgcmV0dXJuIGFzTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCk7XG5cbiAgaWYgKHJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbmZGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlcihleHByZXNzaW9uLCBwYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gbG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24oZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUoZXhwcmVzc2lvbiwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0FycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zQXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNBcnJheSA9IGV4cHJlc3Npb25Ob2Rlcy5tYXAoKGV4cHJlc3Npb25Ob2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW10ZXJzQXJyYXkgPSBuYW1lZFBhcmFtZXRlck5vZGVzLm1hcCgobmFtZWRQYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBleHByZXNzaW9uc0Zyb21Ob2Rlc1xufTtcbiJdLCJuYW1lcyI6WyJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUiLCJjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJvb2xlYW4iLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTm9kZSIsImV4cHJlc3Npb25Gcm9tTm9kZXMiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVN0cmluZyIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25mRnJvbVZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzIiwiZXhwcmVzc2lvbnNBcnJheUZyb21Ob2RlcyIsImV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb24iLCJleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uc05vZGUiLCJleHByZXNzaW9uc0Zyb21Ob2RlcyIsImV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibmFtZUZyb21MYWJlbE5vZGUiLCJuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsIm5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwibmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIm5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwic29tZUZyb21FeHByZXNzaW9uTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwic3RyaW5nRnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlciIsInZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVGcm9tTmFtZWRQYXJhbWV0ZXIiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVBhcmFtZXRlciIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcFN0cmluZyIsInN0ZXBTdHJpbmdGcm9tTm90aGluZyIsInN0cmluZyIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsImVycm9yTm9kZSIsIkVycm9yIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJzdHJpbmdGcm9tTmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJleHByZXNzaW9uTm9kZSIsImdldEV4cHJlc3Npb25Ob2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldElmRXhwcmVzc2lvbk5vZGUiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRFbHNlRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5U3RyaW5nIiwidGVybmFyeVN0cmluZ0Zyb21FeHByZXNzaW9uSWZFeHByZXNzaW9uQW5kRWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmdGcm9tVHlwZUFuZE5hbWUiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29tcGFyaXNvbk5vZGUiLCJDb21wYXJpc29uIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGVmdEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkIiwiaXNOZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJjb21wYXJpc29uU3RyaW5nIiwiY29tcGFyaXNvblN0cmluZ0Zyb21OZWdhdGVkTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24iLCJjb21wYXJpc29uIiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJwYXJhbWV0ZXJzU3RyaW5nIiwicGFyYW10ZXJzU3RyaW5nRnJvbVBhcmFtZXRlcnNBcnJheSIsImFycmF5IiwicGFyYW1ldGVycyIsIkV4cHJlc3Npb24iLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImV4cHJlc3Npb25zTm9kZSIsIkV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbk5vZGVzIiwiZ2V0RXhwcmVzc2lvbk5vZGVzIiwiZXhwcmVzc2lvbnNBcnJheSIsImV4cHJlc3Npb25zU3RyaW5nIiwiZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheSIsImV4cHJlc3Npb25zIiwicmV0dXJuQmxvY2tOb2RlIiwiUmV0dXJuQmxvY2siLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRFeHByZXNzaW9uc05vZGUiLCJQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFzTmFtZSIsIm5hbWVkUGFyYW10ZXJTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzTmFtZSIsIm5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVyTm9kZXMiLCJnZXROYW1lZFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXkiLCJuYW1lZFBhcmFtZXRlcnNTdHJpbmciLCJuYW1lZFBhcmFtZXRlcnNTdHJpbmdGcm9tTmFtZWRQYXJhbXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJhcnJheUFzc2lnbm1lbnRTdHJpbmciLCJhcnJheUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmRQYXJhbWV0ZXJzIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nRnJvbUV4cHJlc3Npb24iLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwib2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyIsIm9iamVjdEFzc2lnbm1lbnQiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJOZWdhdGVkRXhwcmVzc2lvbiIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nIiwibmVnYXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tRXhwcmVzc2lvbiIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyIsImJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nIiwidmFyYWlibGVBc3NpZ25tZW50c1N0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZ2V0TmFtZSIsIm51bGxOb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0VHlwZSIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmdMaXRlcmFsIiwic3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwiLCJleHByZXNzaW9uU3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldE5vZGUiLCJnZXRTb21lTm9kZSIsImdldEV2ZXJ5Tm9kZSIsImdldFJlZHVjZU5vZGUiLCJnZXROdW1iZXIiLCJzdGVwTm9kZXMiLCJnZXRTdGVwTm9kZXMiLCJtYXAiLCJnZXRCb29sZWFuIiwiZ2V0VGVybmFyeU5vZGUiLCJnZXRBc05hbWUiLCJnZXRBcnJheUFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJleHByZXNzaW9uTk9kZSIsImdldENvbXBhcmlzb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsImdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsImRpc2p1bmN0aW9uIiwiaXNEaXNqdW5jdGlvbiIsImdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJMb2dpY2FsRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nRnJvbVR5cGVEaXNqdW5jdGlvbkxlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbXRlcnNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXFWZ0JBO2VBQUFBOztRQXFpQkFDO2VBQUFBOztRQWlDQUM7ZUFBQUE7O1FBNUVBQztlQUFBQTs7UUE3aUJBQztlQUFBQTs7UUFtZEFDO2VBQUFBOztRQTREQUM7ZUFBQUE7O1FBbklBQztlQUFBQTs7UUE3VUFDO2VBQUFBOztRQXdxQkFDO2VBQUFBOztRQTMxQkFDO2VBQUFBOztRQXVuQkFDO2VBQUFBOztRQTZXaEI7ZUFBQTs7UUE3SmdCQztlQUFBQTs7UUEzN0JBQztlQUFBQTs7UUFTQUM7ZUFBQUE7O1FBMmhCQUM7ZUFBQUE7O1FBOUdBQztlQUFBQTs7UUFxaUJBQztlQUFBQTs7UUE5MEJBQztlQUFBQTs7UUErTEFDO2VBQUFBOztRQTRCQUM7ZUFBQUE7O1FBd01BQztlQUFBQTs7UUFxVUFDO2VBQUFBOztRQTFlQUM7ZUFBQUE7O1FBeWlCQUM7ZUFB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