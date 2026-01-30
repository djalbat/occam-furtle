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
    get returnBlockFromAnonymousProcedureNode () {
        return returnBlockFromAnonymousProcedureNode;
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
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), parametersString = (0, _string.paramtersStringFromParametersArray)(paramtersArray, context), string = parametersString, array = paramtersArray, parameters = new Parameters(string, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Expression = _elements.default.Expression, NodesQuery = _elements.default.NodesQuery, Comparison = _elements.default.Comparison, ReturnBlock = _elements.default.ReturnBlock, ProcedureCall = _elements.default.ProcedureCall, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), string = stringFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), variable = variableFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), comparison = Comparison.fromExpressionNode(expressionNode, context), returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context), procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    if (node === null && nodes === null && number === null && string === null && boolean === null && some === null && every === null && reduce === null && ternary === null && variable === null && nodeQuery === null && nodesQuery === null && comparison === null && returnBlock === null && procedureCall === null && negatedExpression === null && logicalExpression === null && bracketedExpression === null) {
        debugger;
    }
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement, context), string = returnBlockString, returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
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
function variableAssignmentsFromStepNode(stepNode, context) {
    var variableAssignments = null;
    var variableAssignmentsNode = stepNode.getVariableAssignmentsNode();
    if (variableAssignmentsNode !== null) {
        variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
    }
    return variableAssignments;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    var Variable = _elements.default.Variable, name = nameFromVariableNode(variableNode), expression = expressionfFromVariableNode(variableNode, context), variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
    return variable;
}
function anonymousProcedureFromEveryNode(everyNode, context) {
    var anonymousProcedureNode = everyNode.getAnonymousProcedureNode(), anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
    return anonymousProcedure;
}
function initialExpressionFromReduceNode(reduceNode, context) {
    var expression = expressionFromReduceNode(reduceNode, context), initialExpression = expression; ///
    return initialExpression;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdMaXRlcmFsXCI7XG5pbXBvcnQgeyBzdGVwU3RyaW5nRnJvbU5vdGhpbmcsXG4gICAgICAgICB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lLFxuICAgICAgICAgcGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbixcbiAgICAgICAgIHBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXksXG4gICAgICAgICBuZWdhdGVkRXhwcmVzc2lvblN0cmluZ0Zyb21FeHByZXNzaW9uLFxuICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlLFxuICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbixcbiAgICAgICAgIHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUsXG4gICAgICAgICBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBhcnJheUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmRQYXJhbWV0ZXJzLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZSxcbiAgICAgICAgIG9iamVjdEFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lZFBhcmFtZXRlcnMsXG4gICAgICAgICB2YXJhaWJsZUFzc2lnbm1lbnRzU3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSxcbiAgICAgICAgIGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrLFxuICAgICAgICAgdGVybmFyeVN0cmluZ0Zyb21FeHByZXNzaW9uSWZFeHByZXNzaW9uQW5kRWxzZUV4cHJlc3Npb24sXG4gICAgICAgICByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uU3RyaW5nRnJvbVR5cGVEaXNqdW5jdGlvbkxlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBTdHJpbmcgPSBzdGVwU3RyaW5nRnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0ZXBTdHJpbmcsICAvLy9cbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmcsICAvLy9cbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShlbHNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21FeHByZXNzaW9uSWZFeHByZXNzaW9uQW5kRWxzZUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHRlcm5hcnlTdHJpbmcsIC8vL1xuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCBleHByZXNzaW9uLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25mRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lKHR5cGUsIG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHBhcmFtZXRlclN0cmluZzsgLy8vXG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVyc0FycmF5KHBhcmFtdGVyc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZywgIC8vL1xuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24sIE5vZGVzUXVlcnksIENvbXBhcmlzb24sIFJldHVybkJsb2NrLCBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIGlmICgobm9kZSA9PT0gbnVsbCkgJiZcbiAgICAgIChub2RlcyA9PT0gbnVsbCkgJiZcbiAgICAgIChudW1iZXIgPT09IG51bGwpICYmXG4gICAgICAoc3RyaW5nID09PSBudWxsKSAmJlxuICAgICAgKGJvb2xlYW4gPT09IG51bGwpICYmXG4gICAgICAoc29tZSA9PT0gbnVsbCkgJiZcbiAgICAgIChldmVyeSA9PT0gbnVsbCkgJiZcbiAgICAgIChyZWR1Y2UgPT09IG51bGwpICYmXG4gICAgICAodGVybmFyeSA9PT0gbnVsbCkgJiZcbiAgICAgICh2YXJpYWJsZSA9PT0gbnVsbCkgJiZcbiAgICAgIChub2RlUXVlcnkgPT09IG51bGwpICYmXG4gICAgICAobm9kZXNRdWVyeSA9PT0gbnVsbCkgJiZcbiAgICAgIChjb21wYXJpc29uID09PSBudWxsKSAmJlxuICAgICAgKHJldHVybkJsb2NrID09PSBudWxsKSAmJlxuICAgICAgKHByb2NlZHVyZUNhbGwgPT09IG51bGwpICYmXG4gICAgICAobmVnYXRlZEV4cHJlc3Npb24gPT09IG51bGwpICYmXG4gICAgICAobG9naWNhbEV4cHJlc3Npb24gPT09IG51bGwpICYmXG4gICAgICAoYnJhY2tldGVkRXhwcmVzc2lvbiA9PT0gbnVsbCkpIHtcblxuICAgIGRlYnVnZ2VyXG4gIH1cblxuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsIC8vL1xuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5QXNzaWdubWVudFN0cmluZyA9IGFycmF5QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnModmFyaWFibGUsIHBhcmFtZXRlcnMpLFxuICAgICAgICBzdHJpbmcgPSBhcnJheUFzc2lnbm1lbnRTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgIC8vL1xuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTmFtZWRQYXJhbWV0ZXJzLCBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBOYW1lZFBhcmFtZXRlcnMuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gb2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyh2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gb2JqZWN0QXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvblN0cmluZyA9IG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nRnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IG5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nLCAvLy9cbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyA9IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmcsIC8vL1xuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZyA9IHZhcmFpYmxlQXNzaWdubWVudHNTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmcsIC8vL1xuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZyxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2RlKCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZyxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSBleHByZXNzaW9uTm9kZS5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbnVtYmVyID0gZXhwcmVzc2lvbk5vZGUuZ2V0TnVtYmVyKCk7XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYm9vbGVhbiA9IGV4cHJlc3Npb25Ob2RlLmdldEJvb2xlYW4oKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25mRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgcmV0dXJuIGluaXRpYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobG9naWNhbEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBsb2dpY2FsRXhwcmVzc2lvblN0cmluZ0Zyb21UeXBlRGlzanVuY3Rpb25MZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihkaXNqdW5jdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbiwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUsIFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gUHJvY2VkdXJlLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oc3RyaW5nLCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzLm1hcCgodmFyaWFibGVBc3NpZ25tZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlLCBFeHByZXNzaW9uLCBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUoZXhwcmVzc2lvbiwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG4iXSwibmFtZXMiOlsiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZSIsImJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwibm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm51bWJlckZyb21FeHByZXNzaW9uTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJTdGVwIiwiZWxlbWVudHMiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0ZXBTdHJpbmciLCJzdGVwU3RyaW5nRnJvbU5vdGhpbmciLCJzdHJpbmciLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsInJlZHVjZU5vZGUiLCJSZWR1Y2UiLCJpbml0aWFsRXhwcmVzc2lvbiIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwidGVybmFyeU5vZGUiLCJUZXJuYXJ5IiwiZXhwcmVzc2lvbk5vZGUiLCJnZXRFeHByZXNzaW9uTm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbiIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwidGVybmFyeVN0cmluZyIsInRlcm5hcnlTdHJpbmdGcm9tRXhwcmVzc2lvbklmRXhwcmVzc2lvbkFuZEVsc2VFeHByZXNzaW9uIiwidGVybmFyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lIiwibm9kZVF1ZXJ5Tm9kZSIsIk5vZGVRdWVyeSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJxdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsInBhcmFtZXRlcnNTdHJpbmciLCJwYXJhbXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVyc0FycmF5IiwiYXJyYXkiLCJwYXJhbWV0ZXJzIiwiRXhwcmVzc2lvbiIsIkNvbXBhcmlzb24iLCJSZXR1cm5CbG9jayIsIlByb2NlZHVyZUNhbGwiLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJjb21wYXJpc29uIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJyZXR1cm5CbG9ja05vZGUiLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21FeHByZXNzaW9uIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJPYmplY3RBc3NpZ21lbnQiLCJuYW1lZFBhcmFtZXRlcnMiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwib2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyIsIm9iamVjdEFzc2lnbm1lbnQiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJOZWdhdGVkRXhwcmVzc2lvbiIsIm5lZ2F0ZWRFeHByZXNzaW9uU3RyaW5nIiwibmVnYXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tRXhwcmVzc2lvbiIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZyIsImJyYWNrZXRlZEV4cHJlc3Npb25TdHJpbmdGcm9tQkV4cHJlc3Npb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nIiwidmFyYWlibGVBc3NpZ25tZW50c1N0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJzdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsIiwiZXhwcmVzc2lvblN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXROb2RlIiwiZ2V0U29tZU5vZGUiLCJnZXRFdmVyeU5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwiZ2V0TnVtYmVyIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0Qm9vbGVhbiIsImdldFRlcm5hcnlOb2RlIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsImdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uIiwiaXNEaXNqdW5jdGlvbiIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiTG9naWNhbEV4cHJlc3Npb24iLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb25TdHJpbmdGcm9tVHlwZURpc2p1bmN0aW9uTGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24iLCJQcm9jZWR1cmUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK1BnQkE7ZUFBQUE7O1FBdVVBQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBbERBQztlQUFBQTs7UUEvVUFDO2VBQUFBOztRQW1SQUM7ZUFBQUE7O1FBNUNBQztlQUFBQTs7UUEvS0FDO2VBQUFBOztRQWlaQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7UUFybEJBQztlQUFBQTs7UUFvVUFDO2VBQUFBOztRQWlUQUM7ZUFBQUE7O1FBamhCQUM7ZUFBQUE7O1FBNE9BQztlQUFBQTs7UUF3TkFDO2VBQUFBOztRQTNIQUM7ZUFBQUE7O1FBNkdBQztlQUFBQTs7UUErQ0FDO2VBQUFBOztRQWdFQUM7ZUFBQUE7O1FBNVhBQztlQUFBQTs7UUFuQkFDO2VBQUFBOztRQW1VQUM7ZUFBQUE7O1FBN1hBQztlQUFBQTs7UUFtR0FDO2VBQUFBOztRQTRKQUM7ZUFBQUE7O1FBNVhBQztlQUFBQTs7UUEyUEFDO2VBQUFBOztRQXlKQUM7ZUFBQUE7O1FBellBQztlQUFBQTs7UUF3YUFDO2VBQUFBOztRQXZJQUM7ZUFBQUE7O1FBMUxBQztlQUFBQTs7UUFzUkFDO2VBQUFBOztRQXpaQUM7ZUFBQUE7O1FBeWlCQUM7ZUFBQUE7O1FBNUNBQztlQUFBQTs7UUF0ZEFDO2VBQUFBOztRQW1pQkFDO2VBQUFBOztRQTREQUM7ZUFBQUE7O1FBakNBQztlQUFBQTs7UUE3WEFDO2VBQUFBOztRQTJCQUM7ZUFBQUE7O1FBa0NBQztlQUFBQTs7UUE1VUFDO2VBQUFBOztRQXVsQkFDO2VBQUFBOztRQTljQUM7ZUFBQUE7O1FBa2FBQztlQUFBQTs7UUEzWUFDO2VBQUFBOztRQThIQUM7ZUFBQUE7O1FBcFRBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBNFlBQztlQUFBQTs7UUFsQkFDO2VBQUFBOztRQTBDQUM7ZUFBQUE7O1FBdFhBQztlQUFBQTs7UUFrZEFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUE1TkFDO2VBQUFBOztRQTRYQUM7ZUFBQUE7O1FBL1lBQztlQUFBQTs7UUF5YkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFyS0FDO2VBQUFBOztRQTFSQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFnS0FDO2VBQUFBOztRQWhDQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7UUF0SUFDO2VBQUFBOztRQXRDQUM7ZUFBQUE7O1FBMlJBQztlQUFBQTs7UUFsZUFDO2VBQUFBOzs7MEJBdkZNOytEQUVEO3FCQUVROzZCQUNXO3NCQW1CbUQ7Ozs7OztBQUVwRixTQUFTckIsaUJBQWlCc0IsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQU0sQUFBRUMsT0FBU0MsaUJBQVEsQ0FBakJELE1BQ0ZFLGtCQUFrQnhFLDRCQUE0Qm9FLFVBQVVDLFVBQ3hESSxrQkFBa0I3Qyw2QkFBNkJ3QyxVQUFVQyxVQUN6REssdUJBQXVCaEIsZ0NBQWdDVSxVQUFVQyxVQUNqRU0sYUFBYUMsSUFBQUEsNkJBQXFCLEVBQUNQLFVBQ25DUSxTQUFTRixZQUNURyxPQUFPLElBQUlSLEtBQUtPLFFBQVFMLGlCQUFpQkMsaUJBQWlCQztJQUVoRSxPQUFPSTtBQUNUO0FBRU8sU0FBU2pDLGlCQUFpQmtDLFFBQVEsRUFBRVYsT0FBTztJQUNoRCxJQUFNLEFBQUVXLE9BQVNULGlCQUFRLENBQWpCUyxNQUNGQyxXQUFXaEIscUJBQXFCYyxVQUFVVixVQUMxQ2EscUJBQXFCcEYsK0JBQStCaUYsVUFBVVYsVUFDOURjLGFBQWFDLElBQUFBLG1EQUEyQyxFQUFDSCxVQUFVQyxvQkFBb0JiLFVBQ3ZGUSxTQUFTTSxZQUNURSxPQUFPLElBQUlMLEtBQUtILFFBQVFJLFVBQVVDO0lBRXhDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTaEYsbUJBQW1CaUYsU0FBUyxFQUFFakIsT0FBTztJQUNuRCxJQUFNLEFBQUVrQixRQUFVaEIsaUJBQVEsQ0FBbEJnQixPQUNGTCxxQkFBcUJ0RixnQ0FBZ0MwRixXQUFXakIsVUFDaEVZLFdBQVdyQixzQkFBc0IwQixXQUFXakIsVUFDNUNtQixjQUFjQyxJQUFBQSxvREFBNEMsRUFBQ1IsVUFBVUMsb0JBQW9CYixVQUN6RlEsU0FBU1csYUFDVEUsUUFBUSxJQUFJSCxNQUFNVixRQUFRSSxVQUFVQztJQUUxQyxPQUFPUTtBQUNUO0FBRU8sU0FBU25ELHFCQUFxQm9ELFVBQVUsRUFBRXRCLE9BQU87SUFDdEQsSUFBTSxBQUFFdUIsU0FBV3JCLGlCQUFRLENBQW5CcUIsUUFDRlgsV0FBV2pCLHVCQUF1QjJCLFlBQVl0QixVQUM5Q3dCLG9CQUFvQmpGLGdDQUFnQytFLFlBQVl0QixVQUNoRWEscUJBQXFCckYsaUNBQWlDOEYsWUFBWXRCLFVBQ2xFeUIsZUFBZUMsSUFBQUEsc0VBQThELEVBQUNkLFVBQVVZLG1CQUFtQlgscUJBQzNHTCxTQUFTaUIsY0FDVEUsU0FBUyxJQUFJSixPQUFPZixRQUFRSSxVQUFVWSxtQkFBbUJYO0lBRS9ELE9BQU9jO0FBQ1Q7QUFFTyxTQUFTOUMsdUJBQXVCK0MsV0FBVyxFQUFFNUIsT0FBTztJQUN6RCxJQUFNLEFBQUU2QixVQUFZM0IsaUJBQVEsQ0FBcEIyQixTQUNGQyxpQkFBaUJGLFlBQVlHLGlCQUFpQixJQUM5Q0MsbUJBQW1CSixZQUFZSyxtQkFBbUIsSUFDbERDLHFCQUFxQk4sWUFBWU8scUJBQXFCLElBQ3REQyxhQUFhakcsNkJBQTZCMkYsZ0JBQWdCOUIsVUFDMURxQyxlQUFlbEcsNkJBQTZCNkYsa0JBQWtCaEMsVUFDOURzQyxpQkFBaUJuRyw2QkFBNkIrRixvQkFBb0JsQyxVQUNsRXVDLGdCQUFnQkMsSUFBQUEsZ0VBQXdELEVBQUNKLFlBQVlDLGNBQWNDLGdCQUFnQnRDLFVBQ25IUSxTQUFTK0IsZUFDVEUsVUFBVSxJQUFJWixRQUFRckIsUUFBUTRCLFlBQVlDLGNBQWNDO0lBRTlELE9BQU9HO0FBQ1Q7QUFFTyxTQUFTM0MseUJBQXlCNEMsWUFBWSxFQUFFMUMsT0FBTztJQUM1RCxJQUFNLEFBQUUyQyxXQUFhekMsaUJBQVEsQ0FBckJ5QyxVQUNGQyxPQUFPMUQscUJBQXFCd0QsY0FBYzFDLFVBQzFDNkMsT0FBT2xHLHFCQUFxQitGLGNBQWMxQyxVQUMxQ29DLGFBQWE5Riw0QkFBNEJvRyxjQUFjMUMsVUFDdkQ4QyxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDRixNQUFNN0MsVUFDOUNRLFNBQVNzQyxnQkFDVGxDLFdBQVcsSUFBSStCLFNBQVNuQyxRQUFRb0MsTUFBTUMsTUFBTVQ7SUFFbEQsT0FBT3hCO0FBQ1Q7QUFFTyxTQUFTcEQsMkJBQTJCd0YsYUFBYSxFQUFFaEQsT0FBTztJQUMvRCxJQUFJaUQsWUFBWTtJQUVoQixJQUFNTCxPQUFPNUQsc0JBQXNCZ0UsZUFBZWhEO0lBRWxELElBQUk0QyxTQUFTLE1BQU07UUFDakIsSUFBTSxBQUFFTSxZQUFjaEQsaUJBQVEsQ0FBdEJnRCxXQUNGTCxPQUFPbkcsc0JBQXNCc0csZUFBZWhELFVBQzVDbUQsa0JBQWtCQyxJQUFBQSxzQ0FBOEIsRUFBQ1IsTUFBTUMsTUFBTTdDLFVBQzdEUSxTQUFTMkMsaUJBQWlCLEdBQUc7UUFFbkNGLFlBQVksSUFBSUMsVUFBVTFDLFFBQVFvQyxNQUFNQztJQUMxQztJQUVBLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTakcsMkJBQTJCcUcsYUFBYSxFQUFFckQsT0FBTztJQUMvRCxJQUFNLEFBQUVzRCxZQUFjcEQsaUJBQVEsQ0FBdEJvRCxXQUNGQyxPQUFPRixlQUNQN0MsU0FBU1IsUUFBUXdELFlBQVksQ0FBQ0QsT0FDOUIzQyxXQUFXbkIsMEJBQTBCNEQsZUFBZXJELFVBQ3BEeUQsUUFBUTFGLHVCQUF1QnNGLGVBQWVyRCxVQUM5QzBELFlBQVksSUFBSUosVUFBVTlDLFFBQVFJLFVBQVU2QztJQUVsRCxPQUFPQztBQUNUO0FBRU8sU0FBU3ZHLDZCQUE2QndHLGNBQWMsRUFBRTNELE9BQU87SUFDbEUsSUFBTSxBQUFFNEQsYUFBZTFELGlCQUFRLENBQXZCMEQsWUFDRkwsT0FBT0ksZ0JBQ1BuRCxTQUFTUixRQUFRd0QsWUFBWSxDQUFDRCxPQUM5QjNDLFdBQVdsQiwyQkFBMkJpRSxnQkFBZ0IzRCxVQUN0RHlELFFBQVF6Rix3QkFBd0IyRixnQkFBZ0IzRCxVQUNoRDZELGFBQWEsSUFBSUQsV0FBV3BELFFBQVFJLFVBQVU2QztJQUVwRCxPQUFPSTtBQUNUO0FBRU8sU0FBU2xHLDZCQUE2Qm1HLGNBQWMsRUFBRTlELE9BQU87SUFDbEUsSUFBTSxBQUFFK0QsYUFBZTdELGlCQUFRLENBQXZCNkQsWUFDRkMsaUJBQWlCbkcsaUNBQWlDaUcsZ0JBQWdCOUQsVUFDbEVpRSxtQkFBbUJDLElBQUFBLDBDQUFrQyxFQUFDRixnQkFBZ0JoRSxVQUN0RVEsU0FBU3lELGtCQUNURSxRQUFRSCxnQkFDUkksYUFBYSxJQUFJTCxXQUFXdkQsUUFBUTJEO0lBRTFDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTakksNkJBQTZCMkYsY0FBYyxFQUFFOUIsT0FBTztJQUNsRSxJQUFRcUUsYUFBbUVuRSxpQkFBUSxDQUEzRW1FLFlBQVlULGFBQXVEMUQsaUJBQVEsQ0FBL0QwRCxZQUFZVSxhQUEyQ3BFLGlCQUFRLENBQW5Eb0UsWUFBWUMsY0FBK0JyRSxpQkFBUSxDQUF2Q3FFLGFBQWFDLGdCQUFrQnRFLGlCQUFRLENBQTFCc0UsZUFDbkRqQixPQUFPekcsdUJBQXVCZ0YsZ0JBQWdCOUIsVUFDOUN5RSxRQUFReEgsd0JBQXdCNkUsZ0JBQWdCOUIsVUFDaEQwRSxTQUFTckgseUJBQXlCeUUsZ0JBQWdCOUIsVUFDbERRLFNBQVM3Qix5QkFBeUJtRCxnQkFBZ0I5QixVQUNsRDJFLFVBQVUvSSwwQkFBMEJrRyxnQkFBZ0I5QixVQUNwRGdCLE9BQU96Qyx1QkFBdUJ1RCxnQkFBZ0I5QixVQUM5Q3FCLFFBQVFwRix3QkFBd0I2RixnQkFBZ0I5QixVQUNoRDJCLFNBQVMxRCx5QkFBeUI2RCxnQkFBZ0I5QixVQUNsRHlDLFVBQVU3RCwwQkFBMEJrRCxnQkFBZ0I5QixVQUNwRFksV0FBV3BCLDJCQUEyQnNDLGdCQUFnQjlCLFVBQ3REMEQsWUFBWTNHLDRCQUE0QitFLGdCQUFnQjlCLFVBQ3hENkQsYUFBYTNHLDZCQUE2QjRFLGdCQUFnQjlCLFVBQzFENEUsYUFBYU4sV0FBV08sa0JBQWtCLENBQUMvQyxnQkFBZ0I5QixVQUMzRDhFLGNBQWNQLFlBQVlNLGtCQUFrQixDQUFDL0MsZ0JBQWdCOUIsVUFDN0QrRSxnQkFBZ0JQLGNBQWNLLGtCQUFrQixDQUFDL0MsZ0JBQWdCOUIsVUFDakVnRixvQkFBb0JwSSxvQ0FBb0NrRixnQkFBZ0I5QixVQUN4RWlGLG9CQUFvQnpJLG9DQUFvQ3NGLGdCQUFnQjlCLFVBQ3hFa0Ysc0JBQXNCcEosc0NBQXNDZ0csZ0JBQWdCOUIsVUFDNUVvQyxhQUFhLElBQUlpQyxXQUFXZCxNQUFNa0IsT0FBT0MsUUFBUWxFLFFBQVFtRSxTQUFTM0QsTUFBTUssT0FBT00sUUFBUWMsU0FBUzdCLFVBQVU4QyxXQUFXRyxZQUFZZSxZQUFZRSxhQUFhQyxlQUFlQyxtQkFBbUJDLG1CQUFtQkM7SUFFck4sSUFBSSxBQUFDM0IsU0FBUyxRQUNUa0IsVUFBVSxRQUNWQyxXQUFXLFFBQ1hsRSxXQUFXLFFBQ1htRSxZQUFZLFFBQ1ozRCxTQUFTLFFBQ1RLLFVBQVUsUUFDVk0sV0FBVyxRQUNYYyxZQUFZLFFBQ1o3QixhQUFhLFFBQ2I4QyxjQUFjLFFBQ2RHLGVBQWUsUUFDZmUsZUFBZSxRQUNmRSxnQkFBZ0IsUUFDaEJDLGtCQUFrQixRQUNsQkMsc0JBQXNCLFFBQ3RCQyxzQkFBc0IsUUFDdEJDLHdCQUF3QixNQUFPO1FBRWxDLFFBQVE7SUFDVjtJQUdBLE9BQU85QztBQUNUO0FBRU8sU0FBU2hFLCtCQUErQitHLGVBQWUsRUFBRW5GLE9BQU87SUFDckUsSUFBTSxBQUFFdUUsY0FBZ0JyRSxpQkFBUSxDQUF4QnFFLGFBQ0ZhLFFBQVExRyx5QkFBeUJ5RyxpQkFBaUJuRixVQUNsRHFGLGNBQWNqSSwrQkFBK0IrSCxpQkFBaUJuRixVQUM5RHNGLGtCQUFrQmpILG1DQUFtQzhHLGlCQUFpQm5GLFVBQ3RFdUYsb0JBQW9CQyxJQUFBQSxnREFBd0MsRUFBQ0YsaUJBQWlCdEYsVUFDOUVRLFNBQVMrRSxtQkFDVFQsY0FBYyxJQUFJUCxZQUFZL0QsUUFBUTRFLE9BQU9DLGFBQWFDO0lBRWhFLE9BQU9SO0FBQ1Q7QUFFTyxTQUFTcEosdUNBQXVDK0osbUJBQW1CLEVBQUV6RixPQUFPO0lBQ2pGLElBQVEyQyxXQUE4QnpDLGlCQUFRLENBQXRDeUMsVUFBVStDLGtCQUFvQnhGLGlCQUFRLENBQTVCd0YsaUJBQ1p0QixhQUFhMUcsa0NBQWtDK0gscUJBQXFCekYsVUFDcEVZLFdBQVcrQixTQUFTZ0QsdUJBQXVCLENBQUNGLHFCQUFxQnpGLFVBQ2pFNEYsd0JBQXdCQyxJQUFBQSxzREFBOEMsRUFBQ2pGLFVBQVV3RCxhQUNqRjVELFNBQVNvRix1QkFDVHpGLGtCQUFrQixJQUFJdUYsZ0JBQWdCbEYsUUFBUUksVUFBVXdEO0lBRTlELE9BQU9qRTtBQUNUO0FBRU8sU0FBUzdCLHVDQUF1Q3dILG1CQUFtQixFQUFFOUYsT0FBTztJQUNqRixJQUFNLEFBQUUrRixrQkFBb0I3RixpQkFBUSxDQUE1QjZGLGlCQUNGM0QsYUFBYS9GLGtDQUFrQ3lKLHFCQUFxQjlGLFVBQ3BFdUYsb0JBQW9CUyxJQUFBQSx1Q0FBK0IsRUFBQzVELFlBQVlwQyxVQUNoRVEsU0FBUytFLG1CQUNURCxrQkFBa0IsSUFBSVMsZ0JBQWdCdkYsUUFBUTRCO0lBRXBELE9BQU9rRDtBQUNUO0FBRU8sU0FBU2hJLHlDQUF5QzJJLG9CQUFvQixFQUFFakcsT0FBTztJQUNwRixJQUFRMkMsV0FBK0N6QyxpQkFBUSxDQUF2RHlDLFVBQVV1RCxrQkFBcUNoRyxpQkFBUSxDQUE3Q2dHLGlCQUFpQkMsa0JBQW9CakcsaUJBQVEsQ0FBNUJpRyxpQkFDN0JDLGtCQUFrQkYsZ0JBQWdCRyx3QkFBd0IsQ0FBQ0osc0JBQXNCakcsVUFDakZZLFdBQVcrQixTQUFTMEQsd0JBQXdCLENBQUNKLHNCQUFzQmpHLFVBQ25Fc0cseUJBQXlCQyxJQUFBQSw0REFBb0QsRUFBQzNGLFVBQVV3RixpQkFBaUJwRyxVQUN6R1EsU0FBUzhGLHdCQUNURSxtQkFBbUIsSUFBSUwsZ0JBQWdCM0YsUUFBUUksVUFBVXdGO0lBRS9ELE9BQU9JO0FBQ1Q7QUFFTyxTQUFTM0osMkNBQTJDNEoscUJBQXFCLEVBQUV6RyxPQUFPO0lBQ3ZGLElBQU0sQUFBRTBHLG9CQUFzQnhHLGlCQUFRLENBQTlCd0csbUJBQ0Y1RSxpQkFBaUIyRSxzQkFBc0IxRSxpQkFBaUIsSUFDeERLLGFBQWFqRyw2QkFBNkIyRixnQkFBZ0I5QixVQUMxRDRDLE9BQU83RCw4QkFBOEIrQyxnQkFBZ0I5QixVQUNyRDJHLDBCQUEwQkMsSUFBQUEsNkNBQXFDLEVBQUN4RSxZQUFZcEMsVUFDNUVRLFNBQVNtRyx5QkFDVDNCLG9CQUFvQixJQUFJMEIsa0JBQWtCbEcsUUFBUW9DLE1BQU1SO0lBRTlELE9BQU80QztBQUNUO0FBRU8sU0FBUzFKLDZDQUE2Q3VMLHNCQUFzQixFQUFFN0csT0FBTztJQUMxRixJQUFNLEFBQUU4RyxxQkFBdUI1RyxpQkFBUSxDQUEvQjRHLG9CQUNGbEUsT0FBTzNELHdDQUF3QzRILHdCQUF3QjdHLFVBQ3ZFb0UsYUFBYTNHLHFDQUFxQ29KLHdCQUF3QjdHLFVBQzFFOEUsY0FBYzNHLHNDQUFzQzBJLHdCQUF3QjdHLFVBQzVFK0csMEJBQTBCQyxJQUFBQSxnRUFBd0QsRUFBQ3BFLE1BQU13QixZQUFZVSxhQUFhOUUsVUFDbEhRLFNBQVN1Ryx5QkFDVGxHLHFCQUFxQixJQUFJaUcsbUJBQW1CdEcsUUFBUW9DLE1BQU13QixZQUFZVTtJQUU1RSxPQUFPakU7QUFDVDtBQUVPLFNBQVNoRiwrQ0FBK0NvTCx1QkFBdUIsRUFBRWpILE9BQU87SUFDN0YsSUFBTSxBQUFFa0gsc0JBQXdCaEgsaUJBQVEsQ0FBaENnSCxxQkFDRjlFLGFBQWFsRyxzQ0FBc0MrSyx5QkFBeUJqSCxVQUM1RW1ILDRCQUE0QkMsSUFBQUEsZ0RBQXdDLEVBQUNoRixZQUFZcEMsVUFDakZRLFNBQVMyRywyQkFDVGpDLHNCQUFzQixJQUFJZ0Msb0JBQW9CMUcsUUFBUTRCO0lBRTVELE9BQU84QztBQUNUO0FBRU8sU0FBUzVGLCtDQUErQytILHVCQUF1QixFQUFFckgsT0FBTztJQUM3RixJQUFNLEFBQUVzSCxzQkFBd0JwSCxpQkFBUSxDQUFoQ29ILHFCQUNGQywyQkFBMkJuSSxvREFBb0RpSSx5QkFBeUJySCxVQUN4R3dILDRCQUE0QkMsSUFBQUEsNkRBQXFELEVBQUNGLDBCQUEwQnZILFVBQzVHUSxTQUFTZ0gsMkJBQ1RyRCxRQUFRb0QsMEJBQ1JHLHNCQUFzQixJQUFJSixvQkFBb0I5RyxRQUFRMkQ7SUFFNUQsT0FBT3VEO0FBQ1Q7QUFFTyxTQUFTOUgscUJBQXFCYyxRQUFRLEVBQUVWLE9BQU87SUFDcEQsSUFBTTBDLGVBQWVoQyxTQUFTaUgsZUFBZSxJQUN2Qy9HLFdBQVdkLHlCQUF5QjRDLGNBQWMxQztJQUV4RCxPQUFPWTtBQUNUO0FBRU8sU0FBUzFCLHFCQUFxQndELFlBQVksRUFBRTFDLE9BQU87SUFDeEQsSUFBTTRDLE9BQU87SUFFYixPQUFPQTtBQUNUO0FBRU8sU0FBU2pHLHFCQUFxQitGLFlBQVk7SUFDL0MsSUFBTUcsT0FBT0gsYUFBYWtGLE9BQU87SUFFakMsT0FBTy9FO0FBQ1Q7QUFFTyxTQUFTdEQsc0JBQXNCMEIsU0FBUyxFQUFFakIsT0FBTztJQUN0RCxJQUFNMEMsZUFBZXpCLFVBQVUwRyxlQUFlLElBQ3hDL0csV0FBV2QseUJBQXlCNEMsY0FBYzFDO0lBRXhELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTNUIsc0JBQXNCZ0UsYUFBYSxFQUFFaEQsT0FBTztJQUMxRCxJQUFNNEMsT0FBT0ksY0FBYzZFLE9BQU87SUFFbEMsT0FBT2pGO0FBQ1Q7QUFFTyxTQUFTbEcsc0JBQXNCc0csYUFBYSxFQUFFaEQsT0FBTztJQUMxRCxJQUFNNkMsT0FBT0csY0FBYzRFLE9BQU87SUFFbEMsT0FBTy9FO0FBQ1Q7QUFFTyxTQUFTbEQsdUJBQXVCMkIsVUFBVSxFQUFFdEIsT0FBTztJQUN4RCxJQUFNMEMsZUFBZXBCLFdBQVdxRyxlQUFlLElBQ3pDL0csV0FBV2QseUJBQXlCNEMsY0FBYzFDO0lBRXhELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTN0MsdUJBQXVCc0YsYUFBYSxFQUFFckQsT0FBTztJQUMzRCxJQUFNOEgsZ0JBQWdCekUsY0FBYzBFLGdCQUFnQixJQUM5Q3ZILFNBQVN3SCxJQUFBQSxzQ0FBdUIsRUFBQ0YsZ0JBQ2pDRyxtQkFBbUJ6SCxRQUNuQmlELFFBQVF5RSxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0Y7SUFFekMsT0FBT3hFO0FBQ1Q7QUFFTyxTQUFTM0csdUJBQXVCZ0YsY0FBYyxFQUFFOUIsT0FBTztJQUM1RCxJQUFNdUQsT0FBT3pCLGVBQWVzRyxPQUFPO0lBRW5DLE9BQU83RTtBQUNUO0FBRU8sU0FBU2hGLHVCQUF1QnVELGNBQWMsRUFBRTlCLE9BQU87SUFDNUQsSUFBSWdCLE9BQU87SUFFWCxJQUFNTixXQUFXb0IsZUFBZXVHLFdBQVc7SUFFM0MsSUFBSTNILGFBQWEsTUFBTTtRQUNyQk0sT0FBT3hDLGlCQUFpQmtDLFVBQVVWO0lBQ3BDO0lBRUEsT0FBT2dCO0FBQ1Q7QUFFTyxTQUFTaEQsd0JBQXdCMkYsY0FBYyxFQUFFM0QsT0FBTztJQUM3RCxJQUFNOEgsZ0JBQWdCbkUsZUFBZW9FLGdCQUFnQixJQUMvQ3ZILFNBQVN3SCxJQUFBQSxzQ0FBdUIsRUFBQ0YsZ0JBQ2pDRyxtQkFBbUJ6SCxRQUNuQmlELFFBQVF5RSxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQ0Y7SUFFekMsT0FBT3hFO0FBQ1Q7QUFFTyxTQUFTeEcsd0JBQXdCNkUsY0FBYyxFQUFFOUIsT0FBTztJQUM3RCxJQUFNeUUsUUFBUSxNQUFPLEdBQUc7SUFFeEIsT0FBT0E7QUFDVDtBQUVPLFNBQVN4SSx3QkFBd0I2RixjQUFjLEVBQUU5QixPQUFPO0lBQzdELElBQUlxQixRQUFRO0lBRVosSUFBTUosWUFBWWEsZUFBZXdHLFlBQVk7SUFFN0MsSUFBSXJILGNBQWMsTUFBTTtRQUN0QkksUUFBUXJGLG1CQUFtQmlGLFdBQVdqQjtJQUN4QztJQUVBLE9BQU9xQjtBQUNUO0FBRU8sU0FBU2pGLHlCQUF5QmtGLFVBQVUsRUFBRXRCLE9BQU87SUFDMUQsSUFBTThCLGlCQUFpQlIsV0FBV1MsaUJBQWlCLElBQzdDSyxhQUFhakcsNkJBQTZCMkYsZ0JBQWdCOUI7SUFFaEUsT0FBT29DO0FBQ1Q7QUFFTyxTQUFTbkUseUJBQXlCNkQsY0FBYyxFQUFFOUIsT0FBTztJQUM5RCxJQUFJMkIsU0FBUztJQUViLElBQU1MLGFBQWFRLGVBQWV5RyxhQUFhO0lBRS9DLElBQUlqSCxlQUFlLE1BQU07UUFDdkJLLFNBQVN6RCxxQkFBcUJvRCxZQUFZdEI7SUFDNUM7SUFFQSxPQUFPMkI7QUFDVDtBQUVPLFNBQVNoRCx5QkFBeUJtRCxjQUFjLEVBQUU5QixPQUFPO0lBQzlELElBQUlRLFNBQVM7SUFFYixJQUFNc0gsZ0JBQWdCaEcsZUFBZWlHLGdCQUFnQjtJQUVyRCxJQUFJRCxrQkFBa0IsTUFBTTtRQUMxQnRILFNBQVN3SCxJQUFBQSxzQ0FBdUIsRUFBQ0Y7SUFDbkM7SUFFQSxPQUFPdEg7QUFDVDtBQUVPLFNBQVNuRCx5QkFBeUJ5RSxjQUFjLEVBQUU5QixPQUFPO0lBQzlELElBQU0wRSxTQUFTNUMsZUFBZTBHLFNBQVM7SUFFdkMsT0FBTzlEO0FBQ1Q7QUFFTyxTQUFTaEcseUJBQXlCeUcsZUFBZSxFQUFFbkYsT0FBTztJQUMvRCxJQUFNeUksWUFBWXRELGdCQUFnQnVELFlBQVksSUFDeEN0RCxRQUFRcUQsVUFBVUUsR0FBRyxDQUFDLFNBQUM1STtRQUNyQixJQUFNVSxPQUFPaEMsaUJBQWlCc0IsVUFBVUM7UUFFeEMsT0FBT1M7SUFDVDtJQUVOLE9BQU8yRTtBQUNUO0FBRU8sU0FBUzNGLDBCQUEwQjRELGFBQWEsRUFBRXJELE9BQU87SUFDOUQsSUFBTTBDLGVBQWVXLGNBQWNzRSxlQUFlLElBQzVDL0csV0FBV2QseUJBQXlCNEMsY0FBYzFDO0lBRXhELE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTaEYsMEJBQTBCa0csY0FBYyxFQUFFOUIsT0FBTztJQUMvRCxJQUFNMkUsVUFBVTdDLGVBQWU4RyxVQUFVO0lBRXpDLE9BQU9qRTtBQUNUO0FBRU8sU0FBUy9GLDBCQUEwQmtELGNBQWMsRUFBRTlCLE9BQU87SUFDL0QsSUFBSXlDLFVBQVU7SUFFZCxJQUFNYixjQUFjRSxlQUFlK0csY0FBYztJQUVqRCxJQUFJakgsZ0JBQWdCLE1BQU07UUFDeEJhLFVBQVU1RCx1QkFBdUIrQyxhQUFhNUI7SUFDaEQ7SUFFQSxPQUFPeUM7QUFDVDtBQUVPLFNBQVMvQywyQkFBMkJpRSxjQUFjLEVBQUUzRCxPQUFPO0lBQ2hFLElBQU0wQyxlQUFlaUIsZUFBZWdFLGVBQWUsSUFDN0MvRyxXQUFXZCx5QkFBeUI0QyxjQUFjMUM7SUFFeEQsT0FBT1k7QUFDVDtBQUVPLFNBQVNwQiwyQkFBMkJzQyxjQUFjLEVBQUU5QixPQUFPO0lBQ2hFLElBQUlZLFdBQVc7SUFFZixJQUFNOEIsZUFBZVosZUFBZTZGLGVBQWU7SUFFbkQsSUFBSWpGLGlCQUFpQixNQUFNO1FBRXpCOUIsV0FBV2QseUJBQXlCNEMsY0FBYzFDO0lBQ3BEO0lBRUEsT0FBT1k7QUFDVDtBQUVPLFNBQVN0RSw0QkFBNEJvRyxZQUFZLEVBQUUxQyxPQUFPO0lBQy9ELElBQU1vQyxhQUFhO0lBRW5CLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTekcsNEJBQTRCb0UsUUFBUSxFQUFFQyxPQUFPO0lBQzNELElBQUlHLGtCQUFrQjtJQUV0QixJQUFNc0Ysc0JBQXNCMUYsU0FBUytJLHNCQUFzQjtJQUUzRCxJQUFJckQsd0JBQXdCLE1BQU07UUFDaEN0RixrQkFBa0J6RSx1Q0FBdUMrSixxQkFBcUJ6RjtJQUNoRjtJQUVBLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTcEQsNEJBQTRCK0UsY0FBYyxFQUFFOUIsT0FBTztJQUNqRSxJQUFJMEQsWUFBWTtJQUVoQixJQUFNTCxnQkFBZ0J2QixlQUFlaUgsZ0JBQWdCO0lBRXJELElBQUkxRixrQkFBa0IsTUFBTTtRQUMxQkssWUFBWTFHLDJCQUEyQnFHLGVBQWVyRDtJQUN4RDtJQUVBLE9BQU8wRDtBQUNUO0FBRU8sU0FBU25HLDZCQUE2QndDLFFBQVEsRUFBRUMsT0FBTztJQUM1RCxJQUFJd0csbUJBQW1CO0lBRXZCLElBQU1QLHVCQUF1QmxHLFNBQVNpSix1QkFBdUI7SUFFN0QsSUFBSS9DLHlCQUF5QixNQUFNO1FBQ2pDTyxtQkFBbUJsSix5Q0FBeUMySSxzQkFBc0JqRztJQUNwRjtJQUVBLE9BQU93RztBQUNUO0FBRU8sU0FBU3RKLDZCQUE2QjRFLGNBQWMsRUFBRTlCLE9BQU87SUFDbEUsSUFBSTZELGFBQWE7SUFFakIsSUFBTUYsaUJBQWlCN0IsZUFBZW1ILGlCQUFpQjtJQUV2RCxJQUFJdEYsbUJBQW1CLE1BQU07UUFDM0JFLGFBQWExRyw2QkFBNkJ3RyxnQkFBZ0IzRDtJQUM1RDtJQUVBLE9BQU82RDtBQUNUO0FBRU8sU0FBUzlFLDhCQUE4QjBILHFCQUFxQixFQUFFekcsT0FBTztJQUMxRSxJQUFNNEMsT0FBT3NHLG1CQUFZO0lBRXpCLE9BQU90RztBQUNUO0FBRU8sU0FBUzlELDhCQUE4QnFLLHFCQUFxQixFQUFFbkosT0FBTztJQUMxRSxJQUFNNEMsT0FBT3NHLG1CQUFZO0lBRXpCLE9BQU90RztBQUNUO0FBRU8sU0FBU25ILCtCQUErQmlGLFFBQVEsRUFBRVYsT0FBTztJQUM5RCxJQUFNNkcseUJBQXlCbkcsU0FBUzBJLHlCQUF5QixJQUMvRHZJLHFCQUFxQnZGLDZDQUE2Q3VMLHdCQUF3QjdHO0lBRTVGLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTekQsK0JBQStCK0gsZUFBZSxFQUFFbkYsT0FBTztJQUNyRSxJQUFNcUYsY0FBY0YsZ0JBQWdCa0UsYUFBYTtJQUVqRCxPQUFPaEU7QUFDVDtBQUVPLFNBQVNoRyxnQ0FBZ0NVLFFBQVEsRUFBRUMsT0FBTztJQUMvRCxJQUFJMEgsc0JBQXNCO0lBRTFCLElBQU1MLDBCQUEwQnRILFNBQVN1SiwwQkFBMEI7SUFFbkUsSUFBSWpDLDRCQUE0QixNQUFNO1FBQ3BDSyxzQkFBc0JwSSwrQ0FBK0MrSCx5QkFBeUJySDtJQUNoRztJQUVBLE9BQU8wSDtBQUNUO0FBRU8sU0FBUzdILGdDQUFnQytDLElBQUksRUFBRUYsWUFBWSxFQUFFMUMsT0FBTztJQUN6RSxJQUFNLEFBQUUyQyxXQUFhekMsaUJBQVEsQ0FBckJ5QyxVQUNGRSxPQUFPbEcscUJBQXFCK0YsZUFDNUJOLGFBQWE5Riw0QkFBNEJvRyxjQUFjMUMsVUFDdkQ4QyxpQkFBaUJDLElBQUFBLDhCQUFzQixFQUFDRixNQUFNN0MsVUFDOUNRLFNBQVNzQyxnQkFDVGxDLFdBQVcsSUFBSStCLFNBQVNuQyxRQUFRb0MsTUFBTUMsTUFBTVQ7SUFFbEQsT0FBT3hCO0FBQ1Q7QUFFTyxTQUFTckYsZ0NBQWdDMEYsU0FBUyxFQUFFakIsT0FBTztJQUNoRSxJQUFNNkcseUJBQXlCNUYsVUFBVW1JLHlCQUF5QixJQUM1RHZJLHFCQUFxQnZGLDZDQUE2Q3VMLHdCQUF3QjdHO0lBRWhHLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTdEUsZ0NBQWdDK0UsVUFBVSxFQUFFdEIsT0FBTztJQUNqRSxJQUFNb0MsYUFBYWhHLHlCQUF5QmtGLFlBQVl0QixVQUNsRHdCLG9CQUFvQlksWUFBWSxHQUFHO0lBRXpDLE9BQU9aO0FBQ1Q7QUFFTyxTQUFTaEcsaUNBQWlDOEYsVUFBVSxFQUFFdEIsT0FBTztJQUNsRSxJQUFNNkcseUJBQXlCdkYsV0FBVzhILHlCQUF5QixJQUM3RHZJLHFCQUFxQnZGLDZDQUE2Q3VMLHdCQUF3QjdHO0lBRWhHLE9BQU9hO0FBQ1Q7QUFFTyxTQUFTeEUsa0NBQWtDeUosbUJBQW1CLEVBQUU5RixPQUFPO0lBQzVFLElBQU04QixpQkFBaUJnRSxvQkFBb0IvRCxpQkFBaUIsSUFDdERLLGFBQWFqRyw2QkFBNkIyRixnQkFBZ0I5QjtJQUVoRSxPQUFPb0M7QUFDVDtBQUVPLFNBQVMxRSxrQ0FBa0MrSCxtQkFBbUIsRUFBRXpGLE9BQU87SUFDNUUsSUFBTThELGlCQUFpQjJCLG9CQUFvQjhELGlCQUFpQixJQUMxRG5GLGFBQWF6Ryw2QkFBNkJtRyxnQkFBZ0I5RDtJQUU1RCxPQUFPb0U7QUFDVDtBQUVPLFNBQVMvRixtQ0FBbUM4RyxlQUFlLEVBQUVuRixPQUFPO0lBQ3pFLElBQU04RixzQkFBc0JYLGdCQUFnQnFFLHNCQUFzQixJQUM1RGxFLGtCQUFrQmhILHVDQUF1Q3dILHFCQUFxQjlGO0lBRXBGLE9BQU9zRjtBQUNUO0FBRU8sU0FBUzFJLG9DQUFvQ2tGLGNBQWMsRUFBRTlCLE9BQU87SUFDekUsSUFBSWdGLG9CQUFvQjtJQUV4QixJQUFNeUIsd0JBQXdCM0UsZUFBZTJILHdCQUF3QjtJQUVyRSxJQUFJaEQsMEJBQTBCLE1BQU07UUFDbEN6QixvQkFBb0JuSSwyQ0FBMkM0Six1QkFBdUJ6RztJQUN4RjtJQUVBLE9BQU9nRjtBQUNUO0FBRU8sU0FBU3hJLG9DQUFvQ3NGLGNBQWMsRUFBRTlCLE9BQU87SUFDekUsSUFBSWlGLG9CQUFvQjtJQUV4QixJQUFNa0Usd0JBQXdCckgsZUFBZTRILHdCQUF3QjtJQUVyRSxJQUFJUCwwQkFBMEIsTUFBTTtRQUNsQ2xFLG9CQUFvQnhJLDJDQUEyQzBNLHVCQUF1Qm5KO0lBQ3hGO0lBRUEsT0FBT2lGO0FBQ1Q7QUFFTyxTQUFTbEoscUNBQXFDb04scUJBQXFCLEVBQUVuSixPQUFPO0lBQ2pGLElBQU0ySixjQUFjUixzQkFBc0JTLGFBQWE7SUFFdkQsT0FBT0Q7QUFDVDtBQUVPLFNBQVNsTSxxQ0FBcUNvSixzQkFBc0IsRUFBRTdHLE9BQU87SUFDbEYsSUFBTThELGlCQUFpQitDLHVCQUF1QjBDLGlCQUFpQixJQUM3RG5GLGFBQWF6Ryw2QkFBNkJtRyxnQkFBZ0I5RDtJQUU1RCxPQUFPb0U7QUFDVDtBQUVPLFNBQVNqRyxzQ0FBc0MwSSxzQkFBc0IsRUFBRTdHLE9BQU87SUFDbkYsSUFBTW1GLGtCQUFrQjBCLHVCQUF1QmdELGtCQUFrQixJQUMzRC9FLGNBQWMxRywrQkFBK0IrRyxpQkFBaUJuRjtJQUVwRSxPQUFPOEU7QUFDVDtBQUVPLFNBQVNoSixzQ0FBc0NnRyxjQUFjLEVBQUU5QixPQUFPO0lBQzNFLElBQUlrRixzQkFBc0I7SUFFMUIsSUFBTStCLDBCQUEwQm5GLGVBQWVnSSwwQkFBMEI7SUFFekUsSUFBSTdDLDRCQUE0QixNQUFNO1FBQ3BDL0Isc0JBQXNCckosK0NBQStDb0wseUJBQXlCakg7SUFDaEc7SUFFQSxPQUFPa0Y7QUFDVDtBQUVPLFNBQVNoSixzQ0FBc0MrSyx1QkFBdUIsRUFBRWpILE9BQU87SUFDcEYsSUFBTThCLGlCQUFpQm1GLHdCQUF3QmxGLGlCQUFpQixJQUMxREssYUFBYWpHLDZCQUE2QjJGLGdCQUFnQjlCO0lBRWhFLE9BQU9vQztBQUNUO0FBRU8sU0FBU3hFLHVDQUF1Q21NLHdCQUF3QixFQUFFL0osT0FBTztJQUN0RixJQUFNOEQsaUJBQWlCaUcseUJBQXlCUixpQkFBaUIsSUFDM0RuRixhQUFhekcsNkJBQTZCbUcsZ0JBQWdCOUQ7SUFFaEUsT0FBT29FO0FBQ1Q7QUFFTyxTQUFTbkYsd0NBQXdDNEgsc0JBQXNCLEVBQUU3RyxPQUFPO0lBQ3JGLElBQU00QyxPQUFPaUUsdUJBQXVCZ0IsT0FBTztJQUUzQyxPQUFPakY7QUFDVDtBQUVPLFNBQVNuRywyQ0FBMkMwTSxxQkFBcUIsRUFBRW5KLE9BQU87SUFDdkYsSUFBTSxBQUFFZ0ssb0JBQXNCOUosaUJBQVEsQ0FBOUI4SixtQkFDRkMscUJBQXFCZCxzQkFBc0JlLHFCQUFxQixJQUNoRUMsc0JBQXNCaEIsc0JBQXNCaUIsc0JBQXNCLElBQ2xFeEgsT0FBTzlELDhCQUE4QnFLLHVCQUF1Qm5KLFVBQzVEMkosY0FBYzVOLHFDQUFxQ29OLHVCQUF1Qm5KLFVBQzFFcUssaUJBQWlCbE8sNkJBQTZCOE4sb0JBQW9CakssVUFDbEVzSyxrQkFBa0JuTyw2QkFBNkJnTyxxQkFBcUJuSyxVQUNwRVEsU0FBUytKLElBQUFBLGtGQUEwRSxFQUFDWixhQUFhVSxnQkFBZ0JDLGlCQUFpQnRLLFVBQ2xJaUYsb0JBQW9CLElBQUkrRSxrQkFBa0J4SixRQUFRb0MsTUFBTStHLGFBQWFVLGdCQUFnQkM7SUFFM0YsT0FBT3JGO0FBQ1Q7QUFFTyxTQUFTbkgsaURBQWlEaU0sd0JBQXdCLEVBQUUvSixPQUFPO0lBQ2hHLElBQVF3SyxZQUFvQ3RLLGlCQUFRLENBQTVDc0ssV0FBV0MsdUJBQXlCdkssaUJBQVEsQ0FBakN1SyxzQkFDYkMsWUFBWUYsVUFBVUcsNEJBQTRCLENBQUNaLDBCQUEwQi9KLFVBQzdFNEssNkJBQTZCQyxJQUFBQSwrQ0FBdUMsRUFBQ0gsWUFDckVsSyxTQUFTb0ssNEJBQ1RFLHVCQUF1QixJQUFJTCxxQkFBcUJqSyxRQUFRa0s7SUFFOUQsT0FBT0k7QUFDVDtBQUVPLFNBQVMxTCxvREFBb0RpSSx1QkFBdUIsRUFBRXJILE9BQU87SUFDbEcsSUFBTTRDLE9BQU95RSx3QkFBd0JRLE9BQU8sSUFDdENrRCwwQkFBMEIxRCx3QkFBd0IyRCwwQkFBMEIsSUFDNUV6RCwyQkFBMkJ3RCx3QkFBd0JwQyxHQUFHLENBQUMsU0FBQ3NDO1FBQ3RELElBQU1DLHFCQUFxQi9MLG9EQUFvRHlELE1BQU1xSSx3QkFBd0JqTDtRQUU3RyxPQUFPa0w7SUFDVDtJQUVOLE9BQU8zRDtBQUNUO0FBRU8sU0FBU3BJLG9EQUFvRHlELElBQUksRUFBRXFJLHNCQUFzQixFQUFFakwsT0FBTztJQUN2RyxJQUFRMkMsV0FBNkN6QyxpQkFBUSxDQUFyRHlDLFVBQVUwQixhQUFtQ25FLGlCQUFRLENBQTNDbUUsWUFBWThHLHFCQUF1QmpMLGlCQUFRLENBQS9CaUwsb0JBQ3hCL0ksYUFBYWlDLFdBQVcrRywwQkFBMEIsQ0FBQ0gsd0JBQXdCakwsVUFDM0VZLFdBQVcrQixTQUFTMEksaUNBQWlDLENBQUN6SSxNQUFNcUksd0JBQXdCakwsVUFDcEZzTCwyQkFBMkJDLElBQUFBLHlEQUFpRCxFQUFDbkosWUFBWXhCLFVBQVVaLFVBQ25HUSxTQUFTOEssMEJBQ1RFLGFBQWEsSUFBSUwsbUJBQW1CM0ssUUFBUUksVUFBVXdCO0lBRTVELE9BQU9vSjtBQUNUO0FBRU8sU0FBUzNOLGlDQUFpQ2lHLGNBQWMsRUFBRTlELE9BQU87SUFDdEUsSUFBTXlMLGlCQUFpQjNILGVBQWU0SCxpQkFBaUIsSUFDakQxSCxpQkFBaUJ5SCxlQUFlOUMsR0FBRyxDQUFDLFNBQUMzRjtRQUNuQyxJQUFNQyxZQUFZekYsMkJBQTJCd0YsZUFBZWhEO1FBRTVELE9BQU9pRDtJQUNUO0lBRU4sT0FBT2U7QUFDVCJ9