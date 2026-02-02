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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgICAgIGxvZ2ljYWxUZXJtLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0sXG4gICAgICAgICAgY29tcGFyaXNvblRlcm1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybVN0cmluZyA9IHRlcm1TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyhwcmltaXRpdmUsIHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybXNOb2RlKHRlcm1zTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1zTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZXMgPSB0ZXJtc05vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICB0ZXJtcyA9IG5ldyBUZXJtcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeVN0cmluZyA9IHRlcm5hcnlTdHJpbmdGcm9tVGVybSh0ZXJtKSxcbiAgICAgICAgc3RyaW5nID0gdGVybmFyeVN0cmluZywgLy8vXG4gICAgICAgIHRlcm5hcnkgPSBuZXcgVGVybmFyeShzdHJpbmcsIHRlcm0sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHByaW1pdGl2ZU5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsIC8vL1xuICAgICAgICBub2RlID0gbm9kZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gcGFyYW10ZXJzQXJyYXksIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHNvbWUsXG4gICAgICAgICAgZXZlcnksXG4gICAgICAgICAgcmVkdWNlLFxuICAgICAgICAgIHRlcm5hcnksXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgbm9kZVF1ZXJ5LFxuICAgICAgICAgIG5vZGVzUXVlcnksXG4gICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbixcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbixcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uLFxuICAgICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uXG4gICAgICAgIF0sXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMocHJpbWl0aXZlLCBwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZywgIC8vL1xuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oc3RyaW5nLCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24sIGNvbXBhcmlzb25FeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAvLy9cbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbnMgPSB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgZXhwcmVzc2lvbnMpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbGlhcyA9IGFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFsaWFzKTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJOb2RlcyA9IG5hbWVkUGFyYW1ldGVyc05vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnNBcnJheSA9IG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBuYW1lZFBhcmFtZXRlcnNBcnJheSwgLy8vXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5TdGF0ZW1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KHN0cmluZywgdGVybSk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZShuYW1lZFBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE9iamVjdEFzc2lnbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5ldyBOZWdhdGVkRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBuZWdhdGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBuZXcgTG9naWNhbEV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbmV3IEJyYWNrZXRlZEV4cHJlc3Npb24oc3RyaW5nLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gbmV3IENvbXBhcmlzb25FeHByZXNzaW9uKHN0cmluZywgbmVnYXRlZCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25FeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlID0gcHJpbWl0aXZlTm9kZS5nZXROb2RlKCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0Zyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSByZWR1Y2VOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNvbWUgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0U29tZU5vZGUoKTtcblxuICBpZiAoc29tZU5vZGUgIT09IG51bGwpIHtcbiAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2RlUXVlcnlOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyk7XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBudW1iZXIgPSBwcmltaXRpdmVOb2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYm9vbGVhbiA9IHByaW1pdGl2ZU5vZGUuZ2V0Qm9vbGVhbigpO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc05vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRUZXJtc05vZGUoKSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldEFycmF5QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBpZkV4cHJlc3Npb25Ob2RlID0gdGVybmFyeU5vZGUuZ2V0SWZFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBpZkV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGlmRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpZkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByaW1pdGl2ZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByaW1pdGl2ZU5vZGUoKTtcblxuICBpZiAocHJpbWl0aXZlTm9kZSAhPT0gbnVsbCkge1xuICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gcHJpbWl0aXZlTm9kZS5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxUZXJtTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5lZ2F0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IG5lZ2F0ZWRUZXJtTm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZXcgTmVnYXRlZFRlcm0oc3RyaW5nLCB0eXBlLCB0ZXJtKTtcblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTG9naWNhbFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbG9naWNhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbmV3IExvZ2ljYWxUZXJtKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uOyAvLy9cblxuICByZXR1cm4gaW5pdGlhbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFByb2NlZHVyZUNhbGxOb2RlKCk7XG5cbiAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IG5ldyBCcmFja2V0ZWRUZXJtKHN0cmluZywgdGVybSk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5lZ2F0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gbmVnYXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuZWdhdGVkID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmlzTmVnYXRlZCgpO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAobG9naWNhbEV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbWVudE5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzanVuY3Rpb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBkaXNqdW5jdGlvbiA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5pc0Rpc2p1bmN0aW9uKCk7XG5cbiAgcmV0dXJuIGRpc2p1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gbmV3IENvbXBhcmlzb25UZXJtKHN0cmluZywgbmVnYXRlZCwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25UZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYnJhY2tldGVkRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBicmFja2V0ZWRFeHByZXNzaW9uTm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25OT2RlLCBjb250ZXh0KSB7XG4gIGxldCBjb21wYXJpc29uRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5PZGUuZ2V0Q29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbXBhcmlzb25FeHByZXNzaW9uID0gY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gY29tcGFyaXNvbkV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGxlZnRFeHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSBsb2dpY2FsRXhwcmVzc2lvbk5vZGUuZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZShjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZShleHByZXNzaW9uLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZywgIC8vL1xuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB0ZXJtc0FycmF5ID0gdGVybU5vZGVzLm1hcCgodGVybU5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyhuYW1lZFBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW10ZXJzQXJyYXkgPSBuYW1lZFBhcmFtZXRlck5vZGVzLm1hcCgobmFtZWRQYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsImNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwiY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUiLCJkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUiLCJlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImVycm9yRnJvbUVycm9yTm9kZSIsImV2ZXJ5RnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlIiwiaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImxlZnRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZSIsImxlZnRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsImxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUxhYmVsTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwibmVnYXRlZEZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsIm5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsIm5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwibm9kZUZyb21QcmltaXRpdmVOb2RlIiwibm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJub2Rlc0Zyb21QcmltaXRpdmVOb2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJudW1iZXJGcm9tUHJpbWl0aXZlTm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZSIsInByaW1pdGl2ZUZyb21QcmltaXRpdmVOb2RlIiwicHJpbWl0aXZlRnJvbVRlcm1Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsInF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwicmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlIiwicmVkdWNlRnJvbVJlZHVjZU5vZGUiLCJyZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsInJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwicmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsInJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJzdHJpbmdMaXRlcmFsRnJvbVByaW1pdGl2ZU5vZGUiLCJ0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21Mb2dpY2FsVGVybU5vZGUiLCJ0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwidHlwZUZyb21QYXJhbmV0ZXJOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlIiwidmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21SZWR1Y2VOb2RlIiwidmFyaWFibGVGcm9tU29tZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsIm5vZGUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsInRlcm1Ob2RlIiwiVGVybSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJwcm9wZXJ0aWVzIiwidGVybVN0cmluZyIsInRlcm1TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyIsInRlcm0iLCJ0ZXJtc05vZGUiLCJUZXJtcyIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zQXJyYXkiLCJhcnJheSIsInRlcm1zIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwidGVybmFyeVN0cmluZyIsInRlcm5hcnlTdHJpbmdGcm9tVGVybSIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJleHByZXNzaW9uIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwicHJpbWl0aXZlU3RyaW5nIiwibm9kZXMiLCJudW1iZXIiLCJib29sZWFuIiwic3RyaW5nTGl0ZXJhbCIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImNvbXBhcmlzb25FeHByZXNzaW9uIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsImV4cHJlc3Npb25zIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwiTmFtZWRQYXJhbWV0ZXIiLCJhbGlhcyIsIm5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVyTm9kZXMiLCJnZXROYW1lZFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXkiLCJuYW1lZFBhcmFtZXRlcnMiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlJldHVyblN0YXRlbWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk9iamVjdEFzc2lnbWVudCIsIm9iamVjdEFzc2lnbm1lbnQiLCJuZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJOZWdhdGVkRXhwcmVzc2lvbiIsImdldEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiTG9naWNhbEV4cHJlc3Npb24iLCJkaXNqdW5jdGlvbiIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsImJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsImNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsIkNvbXBhcmlzb25FeHByZXNzaW9uIiwibmVnYXRlZCIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImdldE5hbWUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFByaW1pdGl2ZU5vZGUiLCJnZXRUeXBlIiwiZ2V0Tm9kZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldE51bWJlciIsImdldEV2ZXJ5Tm9kZSIsIm5lZ2F0ZWRUZXJtTm9kZSIsImdldE5lZ2F0ZWRUZXJtTm9kZSIsImxvZ2ljYWxUZXJtTm9kZSIsImdldExvZ2ljYWxUZXJtTm9kZSIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0VGVybmFyeU5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybU5PZGUiLCJjb21wYXJpc29uVGVybU5vZGUiLCJnZXRDb21wYXJpc29uVGVybU5vZGUiLCJnZXRUZXJtc05vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInJpZ2h0VGVybSIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFN0cmluZ0xpdGVyYWwiLCJpc0Rpc2p1bmN0aW9uIiwiTmVnYXRlZFRlcm0iLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsIkxvZ2ljYWxUZXJtIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsIkJyYWNrZXRlZFRlcm0iLCJnZXROZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJnZXRMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJDb21wYXJpc29uVGVybSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25OT2RlIiwiZ2V0Q29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGVmdEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtdGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdu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