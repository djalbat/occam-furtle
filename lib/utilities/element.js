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
    get expressionFromReduceNode () {
        return expressionFromReduceNode;
    },
    get expressionFromReturnStatementNode () {
        return expressionFromReturnStatementNode;
    },
    get expressionfFromVariableNode () {
        return expressionfFromVariableNode;
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
    get initialExpressionFromReduceNode () {
        return initialExpressionFromReduceNode;
    },
    get logicalExpressionFromExpressionNode () {
        return logicalExpressionFromExpressionNode;
    },
    get logicalExpressionFromLogicalExpressionNode () {
        return logicalExpressionFromLogicalExpressionNode;
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
    get typeFromNegatedExpressionNode () {
        return typeFromNegatedExpressionNode;
    },
    get typeFromParaneterNode () {
        return typeFromParaneterNode;
    },
    get typeFromProcedureAnonymousProcedureNode () {
        return typeFromProcedureAnonymousProcedureNode;
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
    get variableFromReduceNode () {
        return variableFromReduceNode;
    },
    get variableFromSomeNode () {
        return variableFromSomeNode;
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
function everyFromEveryNode(everyNode, context) {
    var Every = _elements.default.Every, anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), variable = variableFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure, context), string = everyString, every = new Every(string, variable, anonymousProcedure);
    return every;
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
    var Reference = _elements.default.Reference, name = nameFromReferenceNode(referenceNode, context), string = name, reference = new Reference(string, name);
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
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var Variable = _elements.default.Variable, ArrayAssignment = _elements.default.ArrayAssignment, parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context), variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context), arrayAssignmentString = (0, _string.arrayAssignmentStringFromVariableAndParameters)(variable, parameters), string = arrayAssignmentString, arrayAssignment = new ArrayAssignment(string, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    var ReturnStatement = _elements.default.ReturnStatement, expression = expressionFromReturnStatementNode(returnStatementNode, context), returnBlockString = (0, _string.returnBlockStringFromExpression)(expression, context), string = returnBlockString, returnStatement = new ReturnStatement(string, expression);
    return returnStatement;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var Variable = _elements.default.Variable, NamedParameters = _elements.default.NamedParameters, ObjectAssigment = _elements.default.ObjectAssigment, namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), objectAssignmentString = (0, _string.objectAssignmentStringFromVariableAndNamedParameters)(variable, namedParameters, context), string = objectAssignmentString, objectAssignment = new ObjectAssigment(string, variable, namedParameters);
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
function anonymousProcedureFromReduceNode(reduceNode, context) {
    var anonymousProcedureNode = reduceNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function expressionFromReturnStatementNode(returnStatementNode, context) {
    var expressionNode = returnStatementNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function parametersFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var parametersNode = arrayAssignmentNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
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
function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var parametersNode = procedureDeclarationNode.getParametersNode(), parameters = parametersFromParametersNode(parametersNode, context);
    return parameters;
}
function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
    var type = anonymousProcedureNode.getType();
    return type;
}
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var LogicalExpression = _elements.default.LogicalExpression, leftExpressionNode = logicalExpressionNode.getLeftExpressionNode(), rightExpressionNode = logicalExpressionNode.getRightExpressionNode(), type = typeFromLogcialExpressionNode(logicalExpressionNode, context), disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = expressionFromExpressionNode(leftExpressionNode, context), rightExpression = expressionFromExpressionNode(rightExpressionNode, context), string = (0, _string.logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression)(disjunction, leftExpression, rightExpression, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
    return logicalExpression;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Procedure = _elements.default.Procedure, ProcedureDeclaration = _elements.default.ProcedureDeclaration, procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, procedureDeclaration = new ProcedureDeclaration(string, procedure);
    return procedureDeclaration;
}
function variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var type = variableAssignmentsNode.getType(), variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map(function(variableAssignmentNode) {
        var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var Variable = _elements.default.Variable, Expression = _elements.default.Expression, VariableAssignment = _elements.default.VariableAssignment, expression = Expression.fromVariableAssignmentNode(variableAssignmentNode, context), variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromExpressionAndVariable)(expression, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(string, variable, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdMaXRlcmFsXCI7XG5pbXBvcnQgeyBzdGVwU3RyaW5nRnJvbU5vdGhpbmcsXG4gICAgICAgICB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lLFxuICAgICAgICAgcGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbixcbiAgICAgICAgIHBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXksXG4gICAgICAgICBleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5LFxuICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tRXhwcmVzc2lvbixcbiAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSxcbiAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24sXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgYXJyYXlBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyxcbiAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmdGcm9tUmVmZXJlbmNlQW5kRXhwcmVzc2lvbnMsXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlLFxuICAgICAgICAgb2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyxcbiAgICAgICAgIHZhcmFpYmxlQXNzaWdubWVudHNTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICB0ZXJuYXJ5U3RyaW5nRnJvbUV4cHJlc3Npb25JZkV4cHJlc3Npb25BbmRFbHNlRXhwcmVzc2lvbixcbiAgICAgICAgIGNvbXBhcmlzb25TdHJpbmdGcm9tTmVnYXRlZExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uLFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBsb2dpY2FsRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwU3RyaW5nID0gc3RlcFN0cmluZ0Zyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdGVwU3RyaW5nLCAgLy8vXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lU3RyaW5nID0gc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc29tZVN0cmluZywgIC8vL1xuICAgICAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnlTdHJpbmcgPSBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXZlcnlTdHJpbmcsIC8vL1xuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uKGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHBhcmFtZXRlclN0cmluZzsgLy8vXG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSBjb21wYXJpc29uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIG5lZ2F0ZWQgPSBjb21wYXJpc29uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25TdHJpbmcgPSBjb21wYXJpc29uU3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gY29tcGFyaXNvblN0cmluZywgIC8vL1xuICAgICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVyc0FycmF5KHBhcmFtdGVyc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZywgIC8vL1xuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uc05vZGUoZXhwcmVzc2lvbnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uTm9kZXMgPSBleHByZXNzaW9uc05vZGUuZ2V0RXhwcmVzc2lvbk5vZGVzKCksXG4gICAgICAgIGV4cHJlc3Npb25zQXJyYXkgPSBleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkoZXhwcmVzc2lvbnNBcnJheSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSBleHByZXNzaW9uc0FycmF5LFxuICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgLy8vXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldEV4cHJlc3Npb25zTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9uc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVJlZmVyZW5jZUFuZEV4cHJlc3Npb25zKHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nLCAgLy8vXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlLCBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSBhcnJheUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmRQYXJhbWV0ZXJzKHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgc3RyaW5nID0gYXJyYXlBc3NpZ25tZW50U3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsICAvLy9cbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIE5hbWVkUGFyYW1ldGVycywgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gTmFtZWRQYXJhbWV0ZXJzLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IG9iamVjdEFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lZFBhcmFtZXRlcnModmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb25TdHJpbmcgPSBuZWdhdGVkRXhwcmVzc2lvblN0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBuZWdhdGVkRXhwcmVzc2lvblN0cmluZywgLy8vXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmV3IE5lZ2F0ZWRFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmcgPSBicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nRnJvbUJFeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nLCAvLy9cbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG5ldyBCcmFja2V0ZWRFeHByZXNzaW9uKHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcgPSB2YXJhaWJsZUFzc2lnbm1lbnRzU3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSh2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZ0xpdGVyYWwoKSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZSgpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IG5vZGVzUXVlcnlOb2RlLmdldFN0cmluZ0xpdGVyYWwoKSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRFdmVyeU5vZGUoKTtcblxuICBpZiAoZXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gZXhwcmVzc2lvbk5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb25Ob2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uTm9kZS5nZXRCb29sZWFuKCk7XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm5hcnlOb2RlKCk7XG5cbiAgaWYgKHRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcblxuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBvYmplY3RBc3NpZ25tZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZXNRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gZXhwcmVzc2lvbk5PZGUuZ2V0Q29tcGFyaXNvbk5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCk7XG5cbiAgaWYgKHJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbmZGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobmVnYXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gbG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24oZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlLCBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZSA9IFByb2NlZHVyZS5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlKHByb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKHN0cmluZywgcHJvY2VkdXJlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgRXhwcmVzc2lvbiwgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlKGV4cHJlc3Npb24sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25zQXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uc0FycmF5ID0gZXhwcmVzc2lvbk5vZGVzLm1hcCgoZXhwcmVzc2lvbk5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBleHByZXNzaW9uc0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uc0FycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZSIsImV4cHJlc3Npb25zRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwiaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIm5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21SZWR1Y2VOb2RlIiwidmFyaWFibGVGcm9tU29tZU5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJzdGVwU3RyaW5nIiwic3RlcFN0cmluZ0Zyb21Ob3RoaW5nIiwic3RyaW5nIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImV4cHJlc3Npb25Ob2RlIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb24iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsInRlcm5hcnlTdHJpbmciLCJ0ZXJuYXJ5U3RyaW5nRnJvbUV4cHJlc3Npb25JZkV4cHJlc3Npb25BbmRFbHNlRXhwcmVzc2lvbiIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJuYW1lIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmdGcm9tVHlwZUFuZE5hbWUiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5Iiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb25Ob2RlIiwiQ29tcGFyaXNvbiIsImxlZnRFeHByZXNzaW9uTm9kZSIsImdldExlZnRFeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJnZXRSaWdodEV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwiY29tcGFyaXNvblN0cmluZyIsImNvbXBhcmlzb25TdHJpbmdGcm9tTmVnYXRlZExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uIiwiY29tcGFyaXNvbiIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtdGVyc0FycmF5IiwicGFyYW1ldGVyc1N0cmluZyIsInBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXkiLCJhcnJheSIsInBhcmFtZXRlcnMiLCJFeHByZXNzaW9uIiwibm9kZXMiLCJudW1iZXIiLCJib29sZWFuIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJleHByZXNzaW9uc05vZGUiLCJFeHByZXNzaW9ucyIsImV4cHJlc3Npb25Ob2RlcyIsImdldEV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25zQXJyYXkiLCJleHByZXNzaW9uc1N0cmluZyIsImV4cHJlc3Npb25zU3RyaW5nRnJvbUV4cHJlc3Npb25zQXJyYXkiLCJleHByZXNzaW9ucyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0RXhwcmVzc2lvbnNOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJwcm9jZWR1cmVDYWxsU3RyaW5nRnJvbVJlZmVyZW5jZUFuZEV4cHJlc3Npb25zIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21FeHByZXNzaW9uIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJPYmplY3RBc3NpZ21lbnQiLCJuYW1lZFBhcmFtZXRlcnMiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwib2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyIsIm9iamVjdEFzc2lnbm1lbnQiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJOZWdhdGVkRXhwcmVzc2lvbiIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nIiwibmVnYXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tRXhwcmVzc2lvbiIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyIsImJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nIiwidmFyYWlibGVBc3NpZ25tZW50c1N0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJzdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiZXhwcmVzc2lvblN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXROb2RlIiwiZ2V0U29tZU5vZGUiLCJnZXRFdmVyeU5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwiZ2V0TnVtYmVyIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0Qm9vbGVhbiIsImdldFRlcm5hcnlOb2RlIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiZXhwcmVzc2lvbk5PZGUiLCJnZXRDb21wYXJpc29uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsIkJPT0xFQU5fVFlQRSIsImxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsImdldFJldHVyblN0YXRlbWVudE5vZGUiLCJnZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJnZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJkaXNqdW5jdGlvbiIsImlzRGlzanVuY3Rpb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIkxvZ2ljYWxFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24iLCJQcm9jZWR1cmUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ1NnQkE7ZUFBQUE7O1FBNFdBQztlQUFBQTs7UUEwQkFDO2VBQUFBOztRQXJFQUM7ZUFBQUE7O1FBN1dBQztlQUFBQTs7UUF5UkFDO2VBQUFBOztRQTVDQUM7ZUFBQUE7O1FBckxBQztlQUFBQTs7UUFrY0FDO2VBQUFBOztRQXRsQkFDO2VBQUFBOztRQXFhQUM7ZUFBQUE7O1FBNkpBQztlQUFBQTs7UUFwcUJBQztlQUFBQTs7UUF3V0FDO2VBQUFBOztRQTRWQUM7ZUFBQUE7O1FBemtCQUM7ZUFBQUE7O1FBeVBBQztlQUFBQTs7UUFtUUFDO2VBQUFBOztRQXRLQUM7ZUFBQUE7O1FBaVVBQztlQUFBQTs7UUE5bkJBQztlQUFBQTs7UUF3QkFDO2VBQUFBOztRQWliQUM7ZUFBQUE7O1FBMkRBQztlQUFBQTs7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