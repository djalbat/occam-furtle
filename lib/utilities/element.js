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
    get bracketedTermFromBracketedTermNode () {
        return bracketedTermFromBracketedTermNode;
    },
    get bracketedTermFromTermNode () {
        return bracketedTermFromTermNode;
    },
    get comparisonExpressionFromComparisonExpressionNode () {
        return comparisonExpressionFromComparisonExpressionNode;
    },
    get comparisonExpressionFromExpressionNode () {
        return comparisonExpressionFromExpressionNode;
    },
    get comparisonTermFromComparisonTermNode () {
        return comparisonTermFromComparisonTermNode;
    },
    get comparisonTermFromTermNode () {
        return comparisonTermFromTermNode;
    },
    get disjunctionFromLogicalExpressionNode () {
        return disjunctionFromLogicalExpressionNode;
    },
    get disjunctionFromLogicalTermNode () {
        return disjunctionFromLogicalTermNode;
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
    get leftExpressionFromCompzrisonExpressionNode () {
        return leftExpressionFromCompzrisonExpressionNode;
    },
    get leftExpressionFromLogicalExpressionNode () {
        return leftExpressionFromLogicalExpressionNode;
    },
    get leftTermFromCompzrisonTermNode () {
        return leftTermFromCompzrisonTermNode;
    },
    get leftTermFromLogicalTermNode () {
        return leftTermFromLogicalTermNode;
    },
    get logicalExpressionFromExpressionNode () {
        return logicalExpressionFromExpressionNode;
    },
    get logicalExpressionFromLogicalExpressionNode () {
        return logicalExpressionFromLogicalExpressionNode;
    },
    get logicalTermFromLogicalTermNode () {
        return logicalTermFromLogicalTermNode;
    },
    get logicalTermFromTermNode () {
        return logicalTermFromTermNode;
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
    get negatedFromComparisonTermNode () {
        return negatedFromComparisonTermNode;
    },
    get negatedTermFromNegatedTermNode () {
        return negatedTermFromNegatedTermNode;
    },
    get negatedTermFromTermNode () {
        return negatedTermFromTermNode;
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
    get rightExpressionFromCompzrisonExpressionNode () {
        return rightExpressionFromCompzrisonExpressionNode;
    },
    get rightExpressionFromLogicalExpressionNode () {
        return rightExpressionFromLogicalExpressionNode;
    },
    get rightTermFromCompzrisonTermNode () {
        return rightTermFromCompzrisonTermNode;
    },
    get rightTermFromLogicalTermNode () {
        return rightTermFromLogicalTermNode;
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
    get termFromBracketedTermNode () {
        return termFromBracketedTermNode;
    },
    get termFromNegatedTermNode () {
        return termFromNegatedTermNode;
    },
    get termFromReturnStatementNode () {
        return termFromReturnStatementNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
    },
    get termFromTernaryNode () {
        return termFromTernaryNode;
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
    get typeFromLogicalExpressionNode () {
        return typeFromLogicalExpressionNode;
    },
    get typeFromLogicalTermNode () {
        return typeFromLogicalTermNode;
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
    var Term = _elements.default.Term, variable = variableFromTermNode(termNode, context), primitive = primitiveFromTermNode(termNode, context), negatedTerm = negatedTermFromTermNode(termNode, context), logicalTerm = logicalTermFromTermNode(termNode, context), bracketedTerm = bracketedTermFromTermNode(termNode, context), comparisonTerm = comparisonTermFromTermNode(termNode, context), properties = [
        variable,
        negatedTerm,
        logicalTerm,
        bracketedTerm,
        comparisonTerm
    ], termString = (0, _string.termStringFromPrimitiveAndProperties)(primitive, properties, context), string = termString, term = new Term(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
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
    var Ternary = _elements.default.Ternary, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString, ternary = new Ternary(string, term, ifExpression, elseExpression);
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
        returnBlock,
        procedureCall,
        negatedExpression,
        logicalExpression,
        bracketedExpression,
        comparisonExpression
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
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var LogicalExpression = _elements.default.LogicalExpression, node = logicalExpressionNode, string = context.nodeAsString(node), type = typeFromLogicalExpressionNode(logicalExpressionNode, context), disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context), rightExpression = rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
    return logicalExpression;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromVariableAssignmentsArray)(variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, variableAssignments = new VariableAssignments(string, array);
    return variableAssignments;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, node = bracketedExpressionNode, string = context.nodeAsString(node), expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var ComparisonExpression = _elements.default.ComparisonExpression, node = comparisonExpressionNode, string = context.nodeAsString(node), negated = negatedFromComparisonExpressionNode(comparisonExpressionNode, context), leftExpression = leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context), rightExpression = rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context), comparisonExpression = new ComparisonExpression(string, negated, leftExpression, rightExpression);
    return comparisonExpression;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var ProcedureDeclaration = _elements.default.ProcedureDeclaration, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString, procedureDeclaration = new ProcedureDeclaration(string, procedure);
    return procedureDeclaration;
}
function nameFromLabelNode(labelNode, context) {
    var name = labelNode.getName();
    return name;
}
function termFromTernaryNode(ternaryNode, context) {
    var termNode = ternaryNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
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
function negatedTermFromTermNode(termNode, context) {
    var negatedTerm = null;
    var negatedTermNode = termNode.getNegatedTermNode();
    if (negatedTermNode !== null) {
        negatedTerm = negatedTermFromNegatedTermNode(negatedTermNode, context);
    }
    return negatedTerm;
}
function logicalTermFromTermNode(termNode, context) {
    var logicalTerm = null;
    var logicalTermNode = termNode.getLogicalTermNode();
    if (logicalTermNode !== null) {
        logicalTerm = logicalTermFromLogicalTermNode(logicalTermNode, context);
    }
    return logicalTerm;
}
function typeFromLogicalTermNode(logicalTermNode, context) {
    var type = _types.BOOLEAN_TYPE;
    return type;
}
function termFromNegatedTermNode(negatedTermNode, context) {
    var termNode = negatedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
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
function bracketedTermFromTermNode(termNode, context) {
    var bracketedTerm = null;
    var bracketedTermNode = termNode.getBracketedTermNode();
    if (bracketedTermNode !== null) {
        bracketedTerm = bracketedTermFromBracketedTermNode(bracketedTermNode, context);
    }
    return bracketedTerm;
}
function termFromBracketedTermNode(bracketedTermNode, context) {
    var termNode = bracketedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function comparisonTermFromTermNode(termNOde, context) {
    var comparisonTerm = null;
    var comparisonTermNode = termNOde.getComparisonTermNode();
    if (comparisonTermNode !== null) {
        comparisonTerm = comparisonTermFromComparisonTermNode(comparisonTermNode, context);
    }
    return comparisonTerm;
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
function leftTermFromLogicalTermNode(logicalTermNode, context) {
    var leftTermNode = logicalTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
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
function rightTermFromLogicalTermNode(logicalTermNode, context) {
    var rightTermNode = logicalTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function negatedFromComparisonTermNode(comparisonTermNode, context) {
    var negated = comparisonTermNode.isNegated();
    return negated;
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
function typeFromLogicalExpressionNode(logicalExpressionNode, context) {
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
function leftTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var leftTermNode = comparisonTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function disjunctionFromLogicalTermNode(logicalTermNode, context) {
    var disjunction = logicalTermNode.isDisjunction();
    return disjunction;
}
function negatedTermFromNegatedTermNode(negatedTermNode, context) {
    var NegatedTerm = _elements.default.NegatedTerm, node = negatedTermNode, string = context.nodeAsString(node), termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(string, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    var LogicalTerm = _elements.default.LogicalTerm, node = logicalTermNode, string = context.nodeAsString(node), type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(string, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
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
function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var rightTermNode = comparisonTermNode.getLeftTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
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
function expressionFromTypeAndVariableNode(type, variableNode, context) {
    var expression = null;
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
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    var BracketedTerm = _elements.default.BracketedTerm, node = bracketedTermNode, string = context.nodeAsString(node), term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(string, term);
    return bracketedTerm;
}
function negatedExpressionFromExpressionNode(expressionNode, context) {
    var negatedExpression = null;
    var negatedExpressionNode = expressionNode.getNegatedExpressionNode();
    if (negatedExpressionNode !== null) {
        negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
    }
    return negatedExpression;
}
function expressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var expressionNode = negatedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function negatedFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var negated = comparisonExpressionNode.isNegated();
    return negated;
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
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    var ComparisonTerm = _elements.default.ComparisonTerm, node = comparisonTermNode, string = context.nodeAsString(node), negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(string, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Procedure = _elements.default.Procedure, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, procedure = new Procedure(string, type, label, parameters, returnBlock);
    return procedure;
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
function leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
    var leftExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context);
    return leftExpression;
}
function rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
    var rightExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
    return rightExpression;
}
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var VariableAssignment = _elements.default.VariableAssignment, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(string, variable, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lU3RyaW5nID0gc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gc29tZVN0cmluZywgIC8vL1xuICAgICAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICB2YXJpYWJsZSxcbiAgICAgICAgICBuZWdhdGVkVGVybSxcbiAgICAgICAgICBsb2dpY2FsVGVybSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtLFxuICAgICAgICAgIGNvbXBhcmlzb25UZXJtXG4gICAgICAgIF0sXG4gICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMocHJpbWl0aXZlLCBwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICB0ZXJtID0gbmV3IFRlcm0oc3RyaW5nLCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBuZWdhdGVkVGVybSwgbG9naWNhbFRlcm0sIGJyYWNrZXRlZFRlcm0sIGNvbXBhcmlzb25UZXJtKTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVRlcm1zTm9kZSh0ZXJtc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB0ZXJtc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybU5vZGVzID0gdGVybXNOb2RlLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSB0ZXJtc0FycmF5LCAvLy9cbiAgICAgICAgdGVybXMgPSBuZXcgVGVybXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEVycm9yIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihzdHJpbmcpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnlTdHJpbmcgPSBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gZXZlcnlTdHJpbmcsIC8vL1xuICAgICAgICBldmVyeSA9IG5ldyBFdmVyeShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVkdWNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2VTdHJpbmcgPSByZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHJlZHVjZVN0cmluZywgIC8vL1xuICAgICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiByZWR1Y2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybmFyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnlTdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nRnJvbVRlcm0odGVybSksXG4gICAgICAgIHN0cmluZyA9IHRlcm5hcnlTdHJpbmcsIC8vL1xuICAgICAgICB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoc3RyaW5nLCB0ZXJtLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZWZlcmVuY2VOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICBjb25zdCB0eXBlID0gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmltaXRpdmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcmltaXRpdmVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwcmltaXRpdmVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gcHJpbWl0aXZlU3RyaW5nLCAvLy9cbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24sXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24sXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbixcbiAgICAgICAgICBjb21wYXJpc29uRXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uLCBjb21wYXJpc29uRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgLy8vXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXksIC8vL1xuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuZXcgTmFtZWRQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZXcgTmVnYXRlZEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSh2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkpLFxuICAgICAgICBhcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSwgLy8vXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG5ldyBCcmFja2V0ZWRFeHByZXNzaW9uKHN0cmluZywgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvbkV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IG5ldyBDb21wYXJpc29uRXhwcmVzc2lvbihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBjb21wYXJpc29uRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oc3RyaW5nLCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVOb2RlID0gdGVybU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IHByaW1pdGl2ZU5vZGUuZ2V0Tm9kZSgpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlckZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbnVtYmVyID0gcHJpbWl0aXZlTm9kZS5nZXROdW1iZXIoKTtcblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRUZXJtID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXROZWdhdGVkVGVybU5vZGUoKTtcblxuICBpZiAobmVnYXRlZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TG9naWNhbFRlcm1Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5Gcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvb2xlYW4gPSBwcmltaXRpdmVOb2RlLmdldEJvb2xlYW4oKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJlZHVjZU5vZGUoKTtcblxuICBpZiAocmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgIHJlZHVjZSA9IHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RlcE5vZGVzID0gcmV0dXJuQmxvY2tOb2RlLmdldFN0ZXBOb2RlcygpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2RlUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm5hcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VGVybmFyeU5vZGUoKTtcblxuICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0QnJhY2tldGVkVGVybU5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlKHRlcm1OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uVGVybSA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvblRlcm1Ob2RlID0gdGVybU5PZGUuZ2V0Q29tcGFyaXNvblRlcm1Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25UZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0VGVybXNOb2RlKCksXG4gICAgICAgIHRlcm1zID0gdGVybXNGcm9tVGVybXNOb2RlKHRlcm1zTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsb2dpY2FsVGVybU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgaWZFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldElmRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShpZkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaWZFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYWxpYXMgPSBuYW1lZFBhcmFtZXRlck5vZGUuZ2V0QWxpYXMoKTtcblxuICByZXR1cm4gYWxpYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRPYmplY3RBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2Rlc1F1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc1F1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uVGVybU5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBlbHNlRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGVsc2VFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVsc2VFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKTtcblxuICBpZiAocmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2ljYWwgPSByZXR1cm5CbG9ja05vZGUuaXNOb25zZW5zaWNhbCgpO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbCA9IHByaW1pdGl2ZU5vZGUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gIHJldHVybiBzdHJpbmdMaXRlcmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsVGVybU5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuZWdhdGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRUZXJtID0gbmV3IE5lZ2F0ZWRUZXJtKHN0cmluZywgdHlwZSwgdGVybSk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxvZ2ljYWxUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsVGVybSA9IG5ldyBMb2dpY2FsVGVybShzdHJpbmcsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gbG9naWNhbFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gc3RlcE5vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUoKTtcblxuICBpZiAodmFyaWFibGVBc3NpZ25tZW50c05vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgcmV0dXJuIGluaXRpYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gdGVybUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBuZXcgQnJhY2tldGVkVGVybShzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBuZWdhdGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobmVnYXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbG9naWNhbEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbG9naWNhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvblRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IG5ldyBDb21wYXJpc29uVGVybShzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBicmFja2V0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNrZXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTk9kZSwgY29udGV4dCkge1xuICBsZXQgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25OT2RlLmdldENvbXBhcmlzb25FeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmlnaHRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlKHR5cGUsIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbVByaW1pdGl2ZU5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21UZXJtTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlRnJvbVByaW1pdGl2ZU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzRnJvbVByaW1pdGl2ZU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm51bWJlckZyb21QcmltaXRpdmVOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tVGVybU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInN0cmluZ0xpdGVyYWxGcm9tUHJpbWl0aXZlTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm5hcnlOb2RlIiwidGVybXNBcnJheUZyb21UZXJtTm9kZXMiLCJ0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInRlcm1zRnJvbVRlcm1zTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwidGVybU5vZGUiLCJUZXJtIiwicHJpbWl0aXZlIiwibmVnYXRlZFRlcm0iLCJsb2dpY2FsVGVybSIsImJyYWNrZXRlZFRlcm0iLCJjb21wYXJpc29uVGVybSIsInByb3BlcnRpZXMiLCJ0ZXJtU3RyaW5nIiwidGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzIiwidGVybSIsInRlcm1zTm9kZSIsIlRlcm1zIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNBcnJheSIsImFycmF5IiwidGVybXMiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJsYWJlbCIsInJlZHVjZU5vZGUiLCJSZWR1Y2UiLCJpbml0aWFsRXhwcmVzc2lvbiIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwidGVybmFyeU5vZGUiLCJUZXJuYXJ5IiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5U3RyaW5nIiwidGVybmFyeVN0cmluZ0Zyb21UZXJtIiwidGVybmFyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwidHlwZSIsImV4cHJlc3Npb24iLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsInByaW1pdGl2ZU5vZGUiLCJQcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwibm9kZXNRdWVyeU5vZGUiLCJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtdGVyc0FycmF5IiwicGFyYW1ldGVycyIsImV4cHJlc3Npb25Ob2RlIiwiRXhwcmVzc2lvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwiY29tcGFyaXNvbkV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzIiwicmV0dXJuQmxvY2tOb2RlIiwiUmV0dXJuQmxvY2siLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwiZXhwcmVzc2lvbnMiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsIm5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJMb2dpY2FsRXhwcmVzc2lvbiIsImRpc2p1bmN0aW9uIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwiQ29tcGFyaXNvbkV4cHJlc3Npb24iLCJuZWdhdGVkIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZ2V0TmFtZSIsImdldFRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0UHJpbWl0aXZlTm9kZSIsImdldFR5cGUiLCJnZXROb2RlIiwiZ2V0U29tZU5vZGUiLCJnZXRTdHJpbmciLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0TnVtYmVyIiwiZ2V0RXZlcnlOb2RlIiwibmVnYXRlZFRlcm1Ob2RlIiwiZ2V0TmVnYXRlZFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiZ2V0TG9naWNhbFRlcm1Ob2RlIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImdldFJlZHVjZU5vZGUiLCJzdGVwTm9kZXMiLCJnZXRTdGVwTm9kZXMiLCJtYXAiLCJnZXRUZXJuYXJ5Tm9kZSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtTk9kZSIsImNvbXBhcmlzb25UZXJtTm9kZSIsImdldENvbXBhcmlzb25UZXJtTm9kZSIsImdldFRlcm1zTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImxlZnRUZXJtIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldEFsaWFzIiwiZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROb2Rlc1F1ZXJ5Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtIiwiaXNOZWdhdGVkIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsImlzRGlzanVuY3Rpb24iLCJOZWdhdGVkVGVybSIsInR5cGVGcm9tTmVnYXRlZFRlcm1Ob2RlIiwiTG9naWNhbFRlcm0iLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiQnJhY2tldGVkVGVybSIsImdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsIkNvbXBhcmlzb25UZXJtIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsImdldEJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5PZGUiLCJnZXRDb21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlIiwiYXNzaWdubWVudCIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtdGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIs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