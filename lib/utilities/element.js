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
    get termFromReturnStatementNode () {
        return termFromReturnStatementNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
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
    var Term = _elements.default.Term, node = termNode, string = context.nodeAsString(node), variable = variableFromTermNode(termNode, context), primitive = primitiveFromTermNode(termNode, context), term = new Term(string, variable, primitive);
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
    var Expression = _elements.default.Expression, variable = variableFromExpressionNode(expressionNode, context), primitive = primitiveFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), comparison = comparisonFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context), logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), properties = [
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
    ], expressionString = (0, _string.expressionStringFromPrimitiveAndProperties)(primitive, properties, context), string = expressionString, expression = new Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
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
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, node = bracketedExpressionNode, string = context.nodeAsString(node), expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromVariableAssignmentsArray)(variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, variableAssignments = new VariableAssignments(string, array);
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
    var VariableAssignment = _elements.default.VariableAssignment, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromVariable)(expression, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(string, variable, expression);
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
function variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var type = variableAssignmentsNode.getType(), variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map(function(variableAssignmentNode) {
        var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlLFxuICAgICAgICAgcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIHRlcm1zID0gbmV3IFRlcm1zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyaW5nKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmcsICAvLy9cbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybmFyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgZXhwcmVzc2lvbiwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocHJpbWl0aXZlTm9kZSksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJvb2xlYW4gPSBib29sZWFuRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZSA9IG5ldyBQcmltaXRpdmUoc3RyaW5nLCBub2RlLCBub2RlcywgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHNvbWUsXG4gICAgICAgICAgZXZlcnksXG4gICAgICAgICAgcmVkdWNlLFxuICAgICAgICAgIHRlcm5hcnksXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgbm9kZVF1ZXJ5LFxuICAgICAgICAgIG5vZGVzUXVlcnksXG4gICAgICAgICAgY29tcGFyaXNvbixcbiAgICAgICAgICByZXR1cm5CbG9jayxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uLFxuICAgICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyhwcmltaXRpdmUsIHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgLy8vXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXksIC8vL1xuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuZXcgTmFtZWRQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG5ldyBCcmFja2V0ZWRFeHByZXNzaW9uKHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodmFyaWFibGVBc3NpZ25tZW50c0FycmF5KSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gc29tZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IHRlcm1Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSByZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBwcmltaXRpdmVOb2RlLmdldE5vZGUoKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IHByaW1pdGl2ZU5vZGUuZ2V0TnVtYmVyKCk7XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRFdmVyeU5vZGUoKTtcblxuICBpZiAoZXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvb2xlYW4gPSBwcmltaXRpdmVOb2RlLmdldEJvb2xlYW4oKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm5hcnlOb2RlKCk7XG5cbiAgaWYgKHRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRUZXJtc05vZGUoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHByaW1pdGl2ZU5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gIHJldHVybiBzdHJpbmdMaXRlcmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobG9naWNhbEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2djaWFsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZShleHByZXNzaW9uLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc0FycmF5ID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW10ZXJzQXJyYXkgPSBuYW1lZFBhcmFtZXRlck5vZGVzLm1hcCgobmFtZWRQYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21FeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlIiwiaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJuYW1lRnJvbUxhYmVsTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEZyb21Db21wYXJpc29uTm9kZSIsIm5vZGVGcm9tUHJpbWl0aXZlTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNGcm9tUHJpbWl0aXZlTm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwibnVtYmVyRnJvbVByaW1pdGl2ZU5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZSIsInByaW1pdGl2ZUZyb21UZXJtTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21FeHByZXNzaW9uTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlIiwidGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJTdGVwIiwiZWxlbWVudHMiLCJub2RlIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJ0ZXJtIiwidGVybXNOb2RlIiwiVGVybXMiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0FycmF5IiwiYXJyYXkiLCJ0ZXJtcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwicHJpbWl0aXZlU3RyaW5nIiwibm9kZXMiLCJudW1iZXIiLCJib29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uTm9kZSIsIkNvbXBhcmlzb24iLCJuZWdhdGVkIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJjb21wYXJpc29uIiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJwYXJhbWV0ZXJzIiwiZXhwcmVzc2lvbk5vZGUiLCJFeHByZXNzaW9uIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJwcm9wZXJ0aWVzIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25zIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwiTmFtZWRQYXJhbWV0ZXIiLCJhbGlhcyIsIm5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVyTm9kZXMiLCJnZXROYW1lZFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXkiLCJuYW1lZFBhcmFtZXRlcnMiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlJldHVyblN0YXRlbWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk9iamVjdEFzc2lnbWVudCIsIm9iamVjdEFzc2lnbm1lbnQiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJOZWdhdGVkRXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb25Ob2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJicmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImdldE5hbWUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0VHlwZSIsImdldE5vZGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXROdW1iZXIiLCJnZXRFdmVyeU5vZGUiLCJnZXRCb29sZWFuIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiaXNOZWdhdGVkIiwiZ2V0VGVybXNOb2RlIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldEFsaWFzIiwiZ2V0VGVybU5vZGUiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiZXhwcmVzc2lvbk5PZGUiLCJnZXRDb21wYXJpc29uTm9kZSIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsIkJPT0xFQU5fVFlQRSIsImxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFN0cmluZ0xpdGVyYWwiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGVmdEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsImdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsImRpc2p1bmN0aW9uIiwiaXNEaXNqdW5jdGlvbiIsImdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiTG9naWNhbEV4cHJlc3Npb24iLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFrckJnQkE7ZUFBQUE7O1FBalZBQztlQUFBQTs7UUFrZEFDO2VBQUFBOztRQWlDQUM7ZUFBQUE7O1FBbEZBQztlQUFBQTs7UUFwZEFDO2VBQUFBOztRQXlWQUM7ZUFBQUE7O1FBaEhBQztlQUFBQTs7UUExS0FDO2VBQUFBOztRQThsQkFDO2VBQUFBOztRQXp3QkFDO2VBQUFBOztRQXFoQkFDO2VBQUFBOztRQWdPQUM7ZUFBQUE7O1FBcE5BQztlQUFBQTs7UUFscUJBQztlQUFBQTs7UUFTQUM7ZUFBQUE7O1FBaWNBQztlQUFBQTs7UUE0Y0FDO2VBQUFBOztRQTl2QkFDO2VBQUFBOztRQWd0QkFDO2VBQUFBOztRQTVZQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7UUFvVEFDO2VBQUFBOztRQWlFQUM7ZUFBQUE7O1FBclZBQztlQUFBQTs7UUF3REFDO2VBQUFBOztRQXVLQUM7ZUFBQUE7O1FBcnVCQUM7ZUFBQUE7O1FBOHlCQUM7ZUFBQUE7O1FBeENBQztlQUFBQTs7UUFvS0FDO2VBQUFBOztRQWxHQUM7ZUFBQUE7O1FBdUhBQztlQUFBQTs7UUF4b0JBQztlQUFBQTs7UUFxUEFDO2VBQUFBOztRQXZMQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQTNDQUM7ZUFBQUE7O1FBL0lBQztlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBaUNBQztlQUFBQTs7UUE4dkJBQztlQUFBQTs7UUFoTEFDO2VBQUFBOztRQTVqQkFDO2VBQUFBOztRQWdRQUM7ZUFBQUE7O1FBL0hBQztlQUFBQTs7UUFnTkFDO2VBQUFBOztRQXhnQkFDO2VBQUFBOztRQThUQUM7ZUFBQUE7O1FBK09BQztlQUFBQTs7UUFwaEJBQztlQUFBQTs7UUFrbEJBQztlQUFBQTs7UUE1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