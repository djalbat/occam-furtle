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
    get comparisonExpressionFromComparisonExpressionNode () {
        return comparisonExpressionFromComparisonExpressionNode;
    },
    get comparisonExpressionFromExpressionNode () {
        return comparisonExpressionFromExpressionNode;
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
    get negatedFromComparisonExpressionNode () {
        return negatedFromComparisonExpressionNode;
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
        comparisonExpression,
        returnBlock,
        procedureCall,
        negatedExpression,
        logicalExpression,
        bracketedExpression
    ], expressionString = (0, _string.expressionStringFromPrimitiveAndProperties)(primitive, properties, context), string = expressionString, expression = new Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression, comparisonExpression);
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
function comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var ComparisonExpression = _elements.default.ComparisonExpression, node = comparisonExpressionNode, string = context.nodeAsString(node), negated = negatedFromComparisonExpressionNode(comparisonExpressionNode, context), leftExpression = leftExpressionFromCompzrisonNode(comparisonExpressionNode, context), rightExpression = rightExpressionFromCompzrisonNode(comparisonExpressionNode, context), comparisonExpression = new ComparisonExpression(string, negated, leftExpression, rightExpression);
    return comparisonExpression;
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
function leftExpressionFromCompzrisonNode(comparisonExpressionNode, context) {
    var leftExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context);
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
function rightExpressionFromCompzrisonNode(comparisonExpressionNode, context) {
    var rightExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
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
function negatedFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var negated = comparisonExpressionNode.isNegated();
    return negated;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlLFxuICAgICAgICAgcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCB2YXJpYWJsZSwgcHJpbWl0aXZlKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1zTm9kZSh0ZXJtc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybU5vZGVzID0gdGVybXNOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAvLy9cbiAgICAgICAgdGVybXMgPSBuZXcgVGVybXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihzdHJpbmcpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnlTdHJpbmcgPSBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gZXZlcnlTdHJpbmcsIC8vL1xuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2VTdHJpbmcgPSByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHJlZHVjZVN0cmluZywgIC8vL1xuICAgICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJuYXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCBleHByZXNzaW9uLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwcmltaXRpdmVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlU3RyaW5nLCAvLy9cbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uLFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24sXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24sXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uLCBjb21wYXJpc29uRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgLy8vXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXksIC8vL1xuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuZXcgTmFtZWRQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG5ldyBCcmFja2V0ZWRFeHByZXNzaW9uKHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodmFyaWFibGVBc3NpZ25tZW50c0FycmF5KSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb25FeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gbmV3IENvbXBhcmlzb25FeHByZXNzaW9uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gc29tZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG51bGw7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IHRlcm1Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSByZWZlcmVuY2VOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGUgPSBwcmltaXRpdmVOb2RlLmdldE5vZGUoKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc29tZSA9IG51bGw7XG5cbiAgY29uc3Qgc29tZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRTb21lTm9kZSgpO1xuXG4gIGlmIChzb21lTm9kZSAhPT0gbnVsbCkge1xuICAgIHNvbWUgPSBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IHByaW1pdGl2ZU5vZGUuZ2V0TnVtYmVyKCk7XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IG5vZGVzUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGV2ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBldmVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRFdmVyeU5vZGUoKTtcblxuICBpZiAoZXZlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgZXZlcnkgPSBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvb2xlYW4gPSBwcmltaXRpdmVOb2RlLmdldEJvb2xlYW4oKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJuYXJ5ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm5hcnlOb2RlKCk7XG5cbiAgaWYgKHRlcm5hcnlOb2RlICE9PSBudWxsKSB7XG4gICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0VGVybXNOb2RlKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybXNOb2RlKHRlcm1zTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWZFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldElmRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaWZFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYWxpYXMgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0QWxpYXMoKTtcblxuICByZXR1cm4gYWxpYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZWxzZUV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0RWxzZUV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShlbHNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBlbHNlRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCk7XG5cbiAgaWYgKHJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0xpdGVyYWxGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSBwcmltaXRpdmVOb2RlLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5TdGF0ZW1lbnROb2RlID0gcmV0dXJuQmxvY2tOb2RlLmdldFJldHVyblN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTk9kZSwgY29udGV4dCkge1xuICBsZXQgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25FeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2NpYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlKGV4cHJlc3Npb24sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbVByaW1pdGl2ZU5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsImNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsIm5vZGVGcm9tUHJpbWl0aXZlTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNGcm9tUHJpbWl0aXZlTm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwibnVtYmVyRnJvbVByaW1pdGl2ZU5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZSIsInByaW1pdGl2ZUZyb21UZXJtTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21FeHByZXNzaW9uTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJzdGVwRnJvbVN0ZXBOb2RlIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwic3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlIiwidGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9nY2lhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tUmVkdWNlTm9kZSIsInZhcmlhYmxlRnJvbVNvbWVOb2RlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJTdGVwIiwiZWxlbWVudHMiLCJub2RlIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJ0ZXJtTm9kZSIsIlRlcm0iLCJwcmltaXRpdmUiLCJ0ZXJtIiwidGVybXNOb2RlIiwiVGVybXMiLCJ0ZXJtTm9kZXMiLCJnZXRUZXJtTm9kZXMiLCJ0ZXJtc0FycmF5IiwiYXJyYXkiLCJ0ZXJtcyIsImVycm9yTm9kZSIsIkVycm9yIiwiZXJyb3IiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsImxhYmVsTm9kZSIsIkxhYmVsIiwibmFtZSIsImxhYmVsIiwicmVkdWNlTm9kZSIsIlJlZHVjZSIsImluaXRpYWxFeHByZXNzaW9uIiwicmVkdWNlU3RyaW5nIiwicmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Tm9kZSIsIlRlcm5hcnkiLCJleHByZXNzaW9uIiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5IiwidmFyaWFibGVOb2RlIiwiVmFyaWFibGUiLCJ0eXBlIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwicHJpbWl0aXZlU3RyaW5nIiwibm9kZXMiLCJudW1iZXIiLCJib29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImNvbXBhcmlzb25FeHByZXNzaW9uIiwicHJvcGVydGllcyIsImV4cHJlc3Npb25TdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMiLCJyZXR1cm5CbG9ja05vZGUiLCJSZXR1cm5CbG9jayIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5CbG9ja1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJleHByZXNzaW9ucyIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsIk5hbWVkUGFyYW1ldGVyIiwiYWxpYXMiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyc05vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50IiwibmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiTmVnYXRlZEV4cHJlc3Npb24iLCJnZXRFeHByZXNzaW9uTm9kZSIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJDb21wYXJpc29uRXhwcmVzc2lvbiIsIm5lZ2F0ZWQiLCJsZWZ0RXhwcmVzc2lvbiIsInJpZ2h0RXhwcmVzc2lvbiIsImdldE5hbWUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0VHlwZSIsImdldE5vZGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXROdW1iZXIiLCJnZXRFdmVyeU5vZGUiLCJnZXRCb29sZWFuIiwiZ2V0UmVkdWNlTm9kZSIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldFRlcm5hcnlOb2RlIiwiZ2V0VGVybXNOb2RlIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldEFsaWFzIiwiZ2V0VGVybU5vZGUiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVTdHJpbmdGcm9tTmFtZSIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiaXNOZWdhdGVkIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwiZGlzanVuY3Rpb24iLCJpc0Rpc2p1bmN0aW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwiZXhwcmVzc2lvbk5PZGUiLCJnZXRDb21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJnZXRSaWdodEV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtdGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNHFCZ0JBO2VBQUFBOztRQXZWQUM7ZUFBQUE7O1FBNGNBQztlQUFBQTs7UUFpQ0FDO2VBQUFBOztRQWxGQUM7ZUFBQUE7O1FBOWNBQztlQUFBQTs7UUErVkFDO2VBQUFBOztRQTFHQUM7ZUFBQUE7O1FBdExBQztlQUFBQTs7UUE4bEJBQztlQUFBQTs7UUEvakJBQztlQUFBQTs7UUErbEJBQztlQUFBQTs7UUFwREFDO2VBQUFBOztRQTFOQUM7ZUFBQUE7O1FBaHBCQUM7ZUFBQUE7O1FBU0FDO2VBQUFBOztRQWljQUM7ZUFBQUE7O1FBZ2NBQztlQUFBQTs7UUE5dkJBQztlQUFBQTs7UUFndEJBQztlQUFBQTs7UUFoWUFDO2VBQUFBOztRQThCQUM7ZUFBQUE7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