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
    var Ternary = _elements.default.Ternary, node = ternaryNode, string = context.nodeAsString(node), expression = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternary = new Ternary(string, expression, ifExpression, elseExpression);
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
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString, anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
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
function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var NegatedExpression = _elements.default.NegatedExpression, node = negatedExpressionNode, string = context.nodeAsString(node), expressionNode = negatedExpressionNode.getExpressionNode(), type = typeFromNegatedExpressionNode(expressionNode, context), expression = expressionFromNegatedExpressionNode(negatedExpressionNode, context), negatedExpression = new NegatedExpression(string, type, expression);
    return negatedExpression;
}
function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
    var LogicalExpression = _elements.default.LogicalExpression, node = logicalExpressionNode, string = context.nodeAsString(node), type = typeFromLogicalExpressionNode(logicalExpressionNode, context), disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context), leftExpression = leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context), rightExpression = rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context), logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);
    return logicalExpression;
}
function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var BracketedExpression = _elements.default.BracketedExpression, node = bracketedExpressionNode, string = context.nodeAsString(node), expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context), bracketedExpression = new BracketedExpression(string, expression);
    return bracketedExpression;
}
function comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var ComparisonExpression = _elements.default.ComparisonExpression, node = comparisonExpressionNode, string = context.nodeAsString(node), negated = negatedFromComparisonExpressionNode(comparisonExpressionNode, context), leftExpression = leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context), rightExpression = rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context), comparisonExpression = new ComparisonExpression(string, negated, leftExpression, rightExpression);
    return comparisonExpression;
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
function bracketedExpressionFromExpressionNode(expressionNode, context) {
    var bracketedExpression = null;
    var bracketedExpressionNode = expressionNode.getBracketedExpressionNode();
    if (bracketedExpressionNode !== null) {
        bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
    }
    return bracketedExpression;
}
function comparisonExpressionFromExpressionNode(expressionNOde, context) {
    var comparisonExpression = null;
    var comparisonExpressionNode = expressionNOde.getComparisonExpressionNode();
    if (comparisonExpressionNode !== null) {
        comparisonExpression = comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context);
    }
    return comparisonExpression;
}
function negatedFromComparisonExpressionNode(comparisonExpressionNode, context) {
    var negated = comparisonExpressionNode.isNegated();
    return negated;
}
function expressionFromNegatedExpressionNode(negatedExpressionNode, context) {
    var expressionNode = negatedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function expressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
    var expressionNode = bracketedExpressionNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
}
function leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
    var leftExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), leftExpression = expressionFromExpressionNode(leftExpressionNode, context);
    return leftExpression;
}
function rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
    var rightExpressionNode = comparisonExpressionNode.getLeftExpressionNode(), rightExpression = expressionFromExpressionNode(rightExpressionNode, context);
    return rightExpression;
}
function negatedTermFromNegatedTermNode(negatedTermNode, context) {
    var NegatedTerm = _elements.default.NegatedTerm, node = negatedTermNode, string = context.nodeAsString(node), termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(string, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    var LogicalTerm = _elements.default.LogicalTerm, node = logicalTermNode, string = context.nodeAsString(node), type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(string, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
    var BracketedTerm = _elements.default.BracketedTerm, node = bracketedTermNode, string = context.nodeAsString(node), term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(string, term);
    return bracketedTerm;
}
function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
    var ComparisonTerm = _elements.default.ComparisonTerm, node = comparisonTermNode, string = context.nodeAsString(node), negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(string, negated, leftTerm, rightTerm);
    return comparisonTerm;
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
function bracketedTermFromTermNode(termNode, context) {
    var bracketedTerm = null;
    var bracketedTermNode = termNode.getBracketedTermNode();
    if (bracketedTermNode !== null) {
        bracketedTerm = bracketedTermFromBracketedTermNode(bracketedTermNode, context);
    }
    return bracketedTerm;
}
function comparisonTermFromTermNode(termNOde, context) {
    var comparisonTerm = null;
    var comparisonTermNode = termNOde.getComparisonTermNode();
    if (comparisonTermNode !== null) {
        comparisonTerm = comparisonTermFromComparisonTermNode(comparisonTermNode, context);
    }
    return comparisonTerm;
}
function negatedFromComparisonTermNode(comparisonTermNode, context) {
    var negated = comparisonTermNode.isNegated();
    return negated;
}
function termFromNegatedTermNode(negatedTermNode, context) {
    var termNode = negatedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function termFromBracketedTermNode(bracketedTermNode, context) {
    var termNode = bracketedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
}
function leftTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var leftTermNode = comparisonTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var rightTermNode = comparisonTermNode.getLeftTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function leftTermFromLogicalTermNode(logicalTermNode, context) {
    var leftTermNode = logicalTermNode.getLeftTermNode(), leftTerm = termFromTermNode(leftTermNode, context);
    return leftTerm;
}
function rightTermFromLogicalTermNode(logicalTermNode, context) {
    var rightTermNode = logicalTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function typeFromLogicalTermNode(logicalTermNode, context) {
    var type = _types.BOOLEAN_TYPE;
    return type;
}
function disjunctionFromLogicalTermNode(logicalTermNode, context) {
    var disjunction = logicalTermNode.isDisjunction();
    return disjunction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzLFxuICAgICAgICAgc29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlLFxuICAgICAgICAgcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWVTdHJpbmcgPSBzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBzb21lU3RyaW5nLCAgLy8vXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZFRlcm0gPSBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxUZXJtID0gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRUZXJtID0gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgICAgIGxvZ2ljYWxUZXJtLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0sXG4gICAgICAgICAgY29tcGFyaXNvblRlcm1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybVN0cmluZyA9IHRlcm1TdHJpbmdGcm9tUHJpbWl0aXZlQW5kUHJvcGVydGllcyhwcmltaXRpdmUsIHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybXNOb2RlKHRlcm1zTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1zTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZXMgPSB0ZXJtc05vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICB0ZXJtcyA9IG5ldyBUZXJtcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdGVybXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXJyb3IgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeVN0cmluZyA9IGV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBldmVyeVN0cmluZywgLy8vXG4gICAgICAgIGV2ZXJ5ID0gbmV3IEV2ZXJ5KHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGxhYmVsTm9kZSxcbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nLCAgLy8vXG4gICAgICAgIHJlZHVjZSA9IG5ldyBSZWR1Y2Uoc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHJlZHVjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm5hcnlGcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJuYXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm5hcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSB0ZXJtRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaWZFeHByZXNzaW9uID0gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZWxzZUV4cHJlc3Npb24gPSBlbHNlRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSBuZXcgVGVybmFyeShzdHJpbmcsIGV4cHJlc3Npb24sIGlmRXhwcmVzc2lvbiwgZWxzZUV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBwYXJhbWV0ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHR5cGUgPSB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByaW1pdGl2ZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHByaW1pdGl2ZU5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBwcmltaXRpdmVTdHJpbmcsIC8vL1xuICAgICAgICBub2RlID0gbm9kZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKHN0cmluZywgbm9kZSwgbm9kZXMsIG51bWJlciwgYm9vbGVhbiwgc3RyaW5nTGl0ZXJhbCk7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2Rlc1F1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gcGFyYW10ZXJzQXJyYXksIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2sgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnQpLFxuICAgICAgICBzdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZywgLy8vXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVDYWxsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gdGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlck5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYWxpYXMgPSBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXksIC8vL1xuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuZXcgTmFtZWRQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVyblN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFub255bW91c1Byb2NlZHVyZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5KHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSksXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50cyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlRGVjbGFyYXRpb24oc3RyaW5nLCBwcm9jZWR1cmUpO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBzb21lTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSwgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVOb2RlID0gdGVybU5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBldmVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHBhcmFtZXRlck5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZSA9IHJlZmVyZW5jZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IHByaW1pdGl2ZU5vZGUuZ2V0Tm9kZSgpO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlckZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbnVtYmVyID0gcHJpbWl0aXZlTm9kZS5nZXROdW1iZXIoKTtcblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXNRdWVyeU5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBzdHJpbmcsICAvLy9cbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKTtcblxuICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgZXZlcnkgPSBudWxsO1xuXG4gIGNvbnN0IGV2ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldEV2ZXJ5Tm9kZSgpO1xuXG4gIGlmIChldmVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBldmVyeSA9IGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vbGVhbkZyb21QcmltaXRpdmVOb2RlKHByaW1pdGl2ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYm9vbGVhbiA9IHByaW1pdGl2ZU5vZGUuZ2V0Qm9vbGVhbigpO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gbm9kZXNRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFRlcm1zTm9kZSgpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1zTm9kZSh0ZXJtc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGlmRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW1pdGl2ZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJpbWl0aXZlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJpbWl0aXZlTm9kZSgpO1xuXG4gIGlmIChwcmltaXRpdmVOb2RlICE9PSBudWxsKSB7XG4gICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXROb2RlUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFsaWFzID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldEFsaWFzKCk7XG5cbiAgcmV0dXJuIGFsaWFzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUoKTtcblxuICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBvYmplY3RBc3NpZ25tZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZXNRdWVyeU5vZGUoKTtcblxuICBpZiAobm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUobmVnYXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZS5nZXRSZWZlcmVuY2VOb2RlKCksXG4gICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmdMaXRlcmFsID0gcHJpbWl0aXZlTm9kZS5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gc3RlcE5vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUoKTtcblxuICBpZiAodmFyaWFibGVBc3NpZ25tZW50c05vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgcmV0dXJuIGluaXRpYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdtZW50Tm9kZS5nZXRFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nLCAvLy9cbiAgICAgICAgcHJvY2VkdXJlID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRSZXR1cm5CbG9ja05vZGUoKSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRFeHByZXNzaW9uTm9kZSA9IGxvZ2ljYWxFeHByZXNzaW9uTm9kZS5nZXRSaWdodEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGUoZXhwcmVzc2lvbiwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtdGVyc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VHlwZSgpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzKCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzLm1hcCgodmFyaWFibGVBc3NpZ25tZW50Tm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXk7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uRXhwcmVzc2lvbiA9IGNvbXBhcmlzb25FeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIHZhcmlhYmxlLFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24sXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24sXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbixcbiAgICAgICAgICBjb21wYXJpc29uRXhwcmVzc2lvblxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmcsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uLCBjb21wYXJpc29uRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOZWdhdGVkRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgbm9kZSA9IG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICB0eXBlID0gdHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmV3IE5lZ2F0ZWRFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIG5lZ2F0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExvZ2ljYWxFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gbG9naWNhbEV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICB0eXBlID0gdHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUobG9naWNhbEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICBkaXNqdW5jdGlvbiA9IGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgIGxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlKGxvZ2ljYWxFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgcmlnaHRFeHByZXNzaW9uID0gcmlnaHRFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uKHN0cmluZywgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBsb2dpY2FsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBuZXcgQnJhY2tldGVkRXhwcmVzc2lvbihzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb25FeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICBub2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgbGVmdEV4cHJlc3Npb24gPSBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICByaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBuZXcgQ29tcGFyaXNvbkV4cHJlc3Npb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gY29tcGFyaXNvbkV4cHJlc3Npb247XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRFeHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZEV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlKG5lZ2F0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldExvZ2ljYWxFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZShsb2dpY2FsRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25FeHByZXNzaW9uID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTk9kZS5nZXRDb21wYXJpc29uRXhwcmVzc2lvbk5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvbkV4cHJlc3Npb24gPSBjb21wYXJpc29uRXhwcmVzc2lvbkZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uRXhwcmVzc2lvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uRXhwcmVzc2lvbk5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbU5lZ2F0ZWRFeHByZXNzaW9uTm9kZShuZWdhdGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSBuZWdhdGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RXhwcmVzc2lvbkZyb21Db21wenJpc29uRXhwcmVzc2lvbk5vZGUoY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRFeHByZXNzaW9uTm9kZSA9IGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZS5nZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICBsZWZ0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUobGVmdEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlKGNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodEV4cHJlc3Npb25Ob2RlID0gY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLmdldExlZnRFeHByZXNzaW9uTm9kZSgpLFxuICAgIHJpZ2h0RXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUocmlnaHRFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbjtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5ldyBOZWdhdGVkVGVybShzdHJpbmcsIHR5cGUsIHRlcm0pO1xuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBuZXcgTG9naWNhbFRlcm0oc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEJyYWNrZXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYnJhY2tldGVkVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSwgIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBuZXcgQnJhY2tldGVkVGVybShzdHJpbmcsIHRlcm0pO1xuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbXBhcmlzb25UZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBuZXcgQ29tcGFyaXNvblRlcm0oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICByZXR1cm4gY29tcGFyaXNvblRlcm07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBuZWdhdGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgbmVnYXRlZFRlcm1Ob2RlID0gdGVybU5vZGUuZ2V0TmVnYXRlZFRlcm1Ob2RlKCk7XG5cbiAgaWYgKG5lZ2F0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIG5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlKG5lZ2F0ZWRUZXJtTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbmVnYXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbG9naWNhbFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IGxvZ2ljYWxUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldExvZ2ljYWxUZXJtTm9kZSgpO1xuXG4gIGlmIChsb2dpY2FsVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBsb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5lZ2F0ZWQgPSBjb21wYXJpc29uVGVybU5vZGUuaXNOZWdhdGVkKCk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGxvZ2ljYWxUZXJtTm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IEJPT0xFQU5fVFlQRTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZGlzanVuY3Rpb24gPSBsb2dpY2FsVGVybU5vZGUuaXNEaXNqdW5jdGlvbigpO1xuXG4gIHJldHVybiBkaXNqdW5jdGlvbjtcbn1cblxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbVByaW1pdGl2ZU5vZGUiLCJicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tTmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tQ29tcHpyaXNvbkV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Gcm9tTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsRXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21UZXJtTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRXhwcmVzc2lvbkZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlRnJvbVByaW1pdGl2ZU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzRnJvbVByaW1pdGl2ZU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm51bWJlckZyb21QcmltaXRpdmVOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tVGVybU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRFeHByZXNzaW9uRnJvbUNvbXB6cmlzb25FeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbkZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInN0cmluZ0xpdGVyYWxGcm9tUHJpbWl0aXZlTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0ZXJtRnJvbVRlcm5hcnlOb2RlIiwidGVybXNBcnJheUZyb21UZXJtTm9kZXMiLCJ0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInRlcm1zRnJvbVRlcm1zTm9kZSIsInRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJ0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlIiwidHlwZUZyb21Mb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkRXhwcmVzc2lvbk5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwidGVybU5vZGUiLCJUZXJtIiwicHJpbWl0aXZlIiwibmVnYXRlZFRlcm0iLCJsb2dpY2FsVGVybSIsImJyYWNrZXRlZFRlcm0iLCJjb21wYXJpc29uVGVybSIsInByb3BlcnRpZXMiLCJ0ZXJtU3RyaW5nIiwidGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzIiwidGVybSIsInRlcm1zTm9kZSIsIlRlcm1zIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNBcnJheSIsImFycmF5IiwidGVybXMiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJsYWJlbCIsInJlZHVjZU5vZGUiLCJSZWR1Y2UiLCJpbml0aWFsRXhwcmVzc2lvbiIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwidGVybmFyeU5vZGUiLCJUZXJuYXJ5IiwiZXhwcmVzc2lvbiIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwidGVybmFyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwidHlwZSIsInJlZmVyZW5jZU5vZGUiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyIiwiUGFyYW1ldGVyIiwibm9kZVF1ZXJ5Tm9kZSIsIk5vZGVRdWVyeSIsInF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJpbWl0aXZlTm9kZSIsIlByaW1pdGl2ZSIsInByaW1pdGl2ZVN0cmluZyIsIm5vZGVzIiwibnVtYmVyIiwiYm9vbGVhbiIsInN0cmluZ0xpdGVyYWwiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2tOb2RlIiwiUmV0dXJuQmxvY2siLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlByb2NlZHVyZUNhbGwiLCJleHByZXNzaW9ucyIsInByb2NlZHVyZUNhbGwiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJOYW1lZFBhcmFtZXRlciIsImFsaWFzIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlcnNOb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJOb2RlcyIsImdldE5hbWVkUGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtZXRlcnNBcnJheSIsIm5hbWVkUGFyYW1ldGVycyIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROYW1lZFBhcmFtZXRlcnNOb2RlIiwiT2JqZWN0QXNzaWdtZW50Iiwib2JqZWN0QXNzaWdubWVudCIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJub255bW91c1Byb2NlZHVyZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnRzIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJnZXROYW1lIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0VHlwZSIsImdldE5vZGUiLCJleHByZXNzaW9uTm9kZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZyIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJnZXROdW1iZXIiLCJnZXRFdmVyeU5vZGUiLCJnZXRCb29sZWFuIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0VGVybmFyeU5vZGUiLCJnZXRUZXJtc05vZGUiLCJnZXRBcnJheUFzc2lnbm1lbnROb2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldElmRXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlUXVlcnlOb2RlIiwiZ2V0QWxpYXMiLCJnZXRPYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwibmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiQk9PTEVBTl9UWVBFIiwibG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVTdHJpbmdGcm9tTmFtZSIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXRQYXJhbWV0ZXJzTm9kZSIsImdldExhYmVsTm9kZSIsImdldFJldHVyblN0YXRlbWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJkaXNqdW5jdGlvbiIsImlzRGlzanVuY3Rpb24iLCJQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGVmdEV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbiIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW10ZXJzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsImdldFZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwidmFyaWFibGVBc3NpZ25tZW50IiwiRXhwcmVzc2lvbiIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwiY29tcGFyaXNvbkV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMiLCJOZWdhdGVkRXhwcmVzc2lvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwiY29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIiwiQ29tcGFyaXNvbkV4cHJlc3Npb24iLCJuZWdhdGVkIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb25Ob2RlIiwiZ2V0TG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTk9kZSIsImdldENvbXBhcmlzb25FeHByZXNzaW9uTm9kZSIsImlzTmVnYXRlZCIsIm5lZ2F0ZWRUZXJtTm9kZSIsIk5lZ2F0ZWRUZXJtIiwidHlwZUZyb21OZWdhdGVkVGVybU5vZGUiLCJsb2dpY2FsVGVybU5vZGUiLCJMb2dpY2FsVGVybSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJCcmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm1Ob2RlIiwiQ29tcGFyaXNvblRlcm0iLCJnZXROZWdhdGVkVGVybU5vZGUiLCJnZXRMb2dpY2FsVGVybU5vZGUiLCJnZXRCcmFja2V0ZWRUZXJtTm9kZSIsInRlcm1OT2RlIiwiZ2V0Q29tcGFyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWduQmdCQTtlQUFBQTs7UUFqVUFDO2VBQUFBOztRQXNiQUM7ZUFBQUE7O1FBaUNBQztlQUFBQTs7UUFsRkFDO2VBQUFBOztRQTVhQUM7ZUFBQUE7O1FBNlRBQztlQUFBQTs7UUFuR0FD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