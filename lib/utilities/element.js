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
    get bracketedTermFromBracketedTermNode () {
        return bracketedTermFromBracketedTermNode;
    },
    get bracketedTermFromTermNode () {
        return bracketedTermFromTermNode;
    },
    get comparisonTermFromComparisonTermNode () {
        return comparisonTermFromComparisonTermNode;
    },
    get comparisonTermFromTermNode () {
        return comparisonTermFromTermNode;
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
    get expressionFromExpressionNode () {
        return expressionFromExpressionNode;
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
    get leftTermFromCompzrisonTermNode () {
        return leftTermFromCompzrisonTermNode;
    },
    get leftTermFromLogicalTermNode () {
        return leftTermFromLogicalTermNode;
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
    get negatedFromComparisonTermNode () {
        return negatedFromComparisonTermNode;
    },
    get negatedTermFromNegatedTermNode () {
        return negatedTermFromNegatedTermNode;
    },
    get negatedTermFromTermNode () {
        return negatedTermFromTermNode;
    },
    get nodeQueryFromExpressionNode () {
        return nodeQueryFromExpressionNode;
    },
    get nodeQueryFromNodeQueryNode () {
        return nodeQueryFromNodeQueryNode;
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
    get termFromBracketedTermNode () {
        return termFromBracketedTermNode;
    },
    get termFromExpressionNode () {
        return termFromExpressionNode;
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
    get typeFromLogicalTermNode () {
        return typeFromLogicalTermNode;
    },
    get typeFromNamedParameterNode () {
        return typeFromNamedParameterNode;
    },
    get typeFromNegatedTermNode () {
        return typeFromNegatedTermNode;
    },
    get typeFromParaneterNode () {
        return typeFromParaneterNode;
    },
    get typeFromPrimitiveNode () {
        return typeFromPrimitiveNode;
    },
    get typeFromProcedureAnonymousProcedureNode () {
        return typeFromProcedureAnonymousProcedureNode;
    },
    get typeFromProcedureDeclarationNode () {
        return typeFromProcedureDeclarationNode;
    },
    get typeFromVariableAssignmentsNode () {
        return typeFromVariableAssignmentsNode;
    },
    get typeFromVariableNode () {
        return typeFromVariableNode;
    },
    get valueFromPrimitiveNode () {
        return valueFromPrimitiveNode;
    },
    get variableAssignmentFromTypeAndVariableAssignmentNode () {
        return variableAssignmentFromTypeAndVariableAssignmentNode;
    },
    get variableAssignmentsArrayFromTypeAndVariableAssignmentsNode () {
        return variableAssignmentsArrayFromTypeAndVariableAssignmentsNode;
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
    var Primitive = _elements.default.Primitive, primitiveString = context.nodeAsString(primitiveNode), string = primitiveString, type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context), primitive = new Primitive(string, type, value);
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
    var Expression = _elements.default.Expression, term = termFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), properties = [
        term,
        some,
        every,
        reduce,
        ternary,
        nodeQuery,
        nodesQuery,
        returnBlock,
        procedureCall
    ], expressionString = (0, _string.expressionStringFromProperties)(properties, context), string = expressionString, expression = new Expression(string, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString, returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, node = procedureCallNode, string = context.nodeAsString(node), reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context), procedureCall = new ProcedureCall(string, reference, terms);
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
    var VariableAssignments = _elements.default.VariableAssignments, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString, variableAssignments = new VariableAssignments(string, array);
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
function typeFromPrimitiveNode(primitiveNode, context) {
    var type = primitiveNode.getType();
    return type;
}
function variableFromReduceNode(reduceNode, context) {
    var variableNode = reduceNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function termFromExpressionNode(expressionNode, context) {
    var term = null;
    var termNode = expressionNode.getTermNode();
    if (termNode !== null) {
        term = termFromTermNode(termNode, context);
    }
    return term;
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
function valueFromPrimitiveNode(primitiveNode, context) {
    var value = primitiveNode.getValue();
    return value;
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
function typeFromNegatedTermNode(logicalTermNode, context) {
    var type = _types.BOOLEAN_TYPE;
    return type;
}
function termFromNegatedTermNode(negatedTermNode, context) {
    var termNode = negatedTermNode.getTermNode(), term = termFromTermNode(termNode, context);
    return term;
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
function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
    var rightTermNode = comparisonTermNode.getRightTermNode(), rightTerm = termFromTermNode(rightTermNode, context);
    return rightTerm;
}
function variableFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var variableNode = arrayAssignmentNode.getVariableNode(), variable = variableFromVariableNode(variableNode, context);
    return variable;
}
function typeFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var type = variableAssignmentsNode.getType();
    return type;
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
function expressionFromVariableAssignmentNode(variableAssigmentNode, context) {
    var expressionNode = variableAssigmentNode.getExpressionNode(), expression = expressionFromExpressionNode(expressionNode, context);
    return expression;
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
function variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
    var variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(), variableAssignmentsArray = variableAssignmentNodes.map(function(variableAssignmentNode) {
        var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
        return variableAssignment;
    });
    return variableAssignmentsArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByaW1pdGl2ZUFuZFByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgbmVnYXRlZFRlcm0sXG4gICAgICAgICAgbG9naWNhbFRlcm0sXG4gICAgICAgICAgYnJhY2tldGVkVGVybSxcbiAgICAgICAgICBjb21wYXJpc29uVGVybVxuICAgICAgICBdLFxuICAgICAgICB0ZXJtU3RyaW5nID0gdGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzKHByaW1pdGl2ZSwgcHJvcGVydGllcywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgdGVybSA9IG5ldyBUZXJtKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0Zyb21UZXJtc05vZGUodGVybXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlcyA9IHRlcm1zTm9kZS5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXlGcm9tVGVybU5vZGVzKHRlcm1Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgIHRlcm1zID0gbmV3IFRlcm1zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyaW5nKTtcblxuICByZXR1cm4gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbGFiZWxOb2RlLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZHVjZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlU3RyaW5nID0gcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSByZWR1Y2VTdHJpbmcsICAvLy9cbiAgICAgICAgcmVkdWNlID0gbmV3IFJlZHVjZShzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgdGVybSwgaWZFeHByZXNzaW9uLCBlbHNlRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIHRlcm5hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZVF1ZXJ5IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJpbWl0aXZlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJpbWl0aXZlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocHJpbWl0aXZlTm9kZSksXG4gICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJpbWl0aXZlID0gbmV3IFByaW1pdGl2ZShzdHJpbmcsIHR5cGUsIHZhbHVlKTtcblxuICByZXR1cm4gcHJpbWl0aXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5vZGVzUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBxdWVyeSA9IHF1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbXRlcnNBcnJheSwgLy8vXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gc29tZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICB0ZXJtLFxuICAgICAgICAgIHNvbWUsXG4gICAgICAgICAgZXZlcnksXG4gICAgICAgICAgcmVkdWNlLFxuICAgICAgICAgIHRlcm5hcnksXG4gICAgICAgICAgbm9kZVF1ZXJ5LFxuICAgICAgICAgIG5vZGVzUXVlcnksXG4gICAgICAgICAgcmV0dXJuQmxvY2ssXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFxuICAgICAgICBdLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihzdHJpbmcsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsIC8vL1xuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlQ2FsbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFsaWFzID0gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKHN0cmluZywgdHlwZSwgbmFtZSwgYWxpYXMpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOYW1lZFBhcmFtZXRlcnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlck5vZGVzID0gbmFtZWRQYXJhbWV0ZXJzTm9kZS5nZXROYW1lZFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyc0FycmF5ID0gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IG5hbWVkUGFyYW1ldGVyc0FycmF5LCAvLy9cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmV3IE5hbWVkUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFycmF5QXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IG5ldyBSZXR1cm5TdGF0ZW1lbnQoc3RyaW5nLCB0ZXJtKTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZS5nZXROYW1lZFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlKG5hbWVkUGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5KSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZShwcm9jZWR1cmUpLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZywgIC8vL1xuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihzdHJpbmcsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VmFsdWUoKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFRlcm1zTm9kZSgpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1zTm9kZSh0ZXJtc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGlmRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbFRlcm1Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5ldyBOZWdhdGVkVGVybShzdHJpbmcsIHR5cGUsIHRlcm0pO1xuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBuZXcgTG9naWNhbFRlcm0oc3RyaW5nLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSA9IHN0ZXBOb2RlLmdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247IC8vL1xuXG4gIHJldHVybiBpbml0aWFsRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKTtcblxuICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUuZ2V0UmlnaHRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50Tm9kZSA9IHJldHVybkJsb2NrTm9kZS5nZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQnJhY2tldGVkVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkVGVybSA9IG5ldyBCcmFja2V0ZWRUZXJtKHN0cmluZywgdGVybSk7XG5cbiAgcmV0dXJuIGJyYWNrZXRlZFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ21lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29tcGFyaXNvblRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uVGVybSA9IG5ldyBDb21wYXJpc29uVGVybShzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGUodHlwZSwgdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybXNBcnJheSA9IHRlcm1Ob2Rlcy5tYXAoKHRlcm1Ob2RlKSA9PiB7IC8vL1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9KTtcblxuICByZXR1cm4gdGVybXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyc05vZGUuZ2V0UGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtdGVyc0FycmF5ID0gbmFtZWRQYXJhbWV0ZXJOb2Rlcy5tYXAoKG5hbWVkUGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9KTtcblxuICByZXR1cm4gbmFtZWRQYXJhbXRlcnNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuIl0sIm5hbWVzIjpbImFsaWFzRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZSIsImNvbXBhcmlzb25UZXJtRnJvbVRlcm1Ob2RlIiwiZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlIiwiZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJlcnJvckZyb21FcnJvck5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJldmVyeUZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJleHByZXNzaW9uRnJvbVZhcmlhYmxlTm9kZSIsImlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSIsImluaXRpYWxFeHByZXNzaW9uRnJvbVJlZHVjZU5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJsZWZ0VGVybUZyb21Db21wenJpc29uVGVybU5vZGUiLCJsZWZ0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJsb2dpY2FsVGVybUZyb21UZXJtTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbVBhcmFuZXRlck5vZGUiLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJuYW1lRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21OYW1lZFBhcmFtZXRlcnNOb2RlIiwibmFtZWRQYXJhbWV0ZXJzRnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwibmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzIiwibmVnYXRlZEZyb21Db21wYXJpc29uVGVybU5vZGUiLCJuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJuZWdhdGVkVGVybUZyb21UZXJtTm9kZSIsIm5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlIiwicGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUiLCJwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZSIsInByaW1pdGl2ZUZyb21UZXJtTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsInJlZHVjZUZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZUZyb21SZWR1Y2VOb2RlIiwicmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwicmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwicmlnaHRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybUZyb21UZXJuYXJ5Tm9kZSIsInRlcm1zQXJyYXlGcm9tVGVybU5vZGVzIiwidGVybXNGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJ0ZXJtc0Zyb21UZXJtc05vZGUiLCJ0ZXJuYXJ5RnJvbUV4cHJlc3Npb25Ob2RlIiwidGVybmFyeUZyb21UZXJuYXJ5Tm9kZSIsInR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJpbWl0aXZlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFsdWVGcm9tUHJpbWl0aXZlTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheUZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsInZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Ob2RlUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZXNRdWVyeU5vZGUiLCJ2YXJpYWJsZUZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlRnJvbVJlZHVjZU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiU3RlcCIsImVsZW1lbnRzIiwibm9kZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImFycmF5QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsInNvbWVOb2RlIiwiU29tZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwic29tZVN0cmluZyIsInNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lIiwidGVybU5vZGUiLCJUZXJtIiwicHJpbWl0aXZlIiwibmVnYXRlZFRlcm0iLCJsb2dpY2FsVGVybSIsImJyYWNrZXRlZFRlcm0iLCJjb21wYXJpc29uVGVybSIsInByb3BlcnRpZXMiLCJ0ZXJtU3RyaW5nIiwidGVybVN0cmluZ0Zyb21QcmltaXRpdmVBbmRQcm9wZXJ0aWVzIiwidGVybSIsInRlcm1zTm9kZSIsIlRlcm1zIiwidGVybU5vZGVzIiwiZ2V0VGVybU5vZGVzIiwidGVybXNBcnJheSIsImFycmF5IiwidGVybXMiLCJlcnJvck5vZGUiLCJFcnJvciIsImVycm9yIiwiZXZlcnlOb2RlIiwiRXZlcnkiLCJldmVyeVN0cmluZyIsImV2ZXJ5U3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwiZXZlcnkiLCJsYWJlbE5vZGUiLCJMYWJlbCIsIm5hbWUiLCJsYWJlbCIsInJlZHVjZU5vZGUiLCJSZWR1Y2UiLCJpbml0aWFsRXhwcmVzc2lvbiIsInJlZHVjZVN0cmluZyIsInJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwicmVkdWNlIiwidGVybmFyeU5vZGUiLCJUZXJuYXJ5IiwiaWZFeHByZXNzaW9uIiwiZWxzZUV4cHJlc3Npb24iLCJ0ZXJuYXJ5U3RyaW5nIiwidGVybmFyeVN0cmluZ0Zyb21UZXJtIiwidGVybmFyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwidHlwZSIsImV4cHJlc3Npb24iLCJyZWZlcmVuY2VOb2RlIiwiUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsIm5vZGVRdWVyeU5vZGUiLCJOb2RlUXVlcnkiLCJxdWVyeSIsIm5vZGVRdWVyeSIsInByaW1pdGl2ZU5vZGUiLCJQcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJ2YWx1ZSIsIm5vZGVzUXVlcnlOb2RlIiwiTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZSIsIlBhcmFtZXRlcnMiLCJwYXJhbXRlcnNBcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIkV4cHJlc3Npb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJleHByZXNzaW9uU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21Qcm9wZXJ0aWVzIiwicmV0dXJuQmxvY2tOb2RlIiwiUmV0dXJuQmxvY2siLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJQcm9jZWR1cmVDYWxsIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwiTmFtZWRQYXJhbWV0ZXIiLCJhbGlhcyIsIm5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5hbWVkUGFyYW1ldGVyTm9kZXMiLCJnZXROYW1lZFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbWV0ZXJzQXJyYXkiLCJuYW1lZFBhcmFtZXRlcnMiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsIlJldHVyblN0YXRlbWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzTm9kZSIsIk9iamVjdEFzc2lnbWVudCIsIm9iamVjdEFzc2lnbm1lbnQiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50cyIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImdldE5hbWUiLCJnZXRUZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFByaW1pdGl2ZU5vZGUiLCJnZXRUeXBlIiwiZ2V0U29tZU5vZGUiLCJnZXRTdHJpbmciLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRFdmVyeU5vZGUiLCJuZWdhdGVkVGVybU5vZGUiLCJnZXROZWdhdGVkVGVybU5vZGUiLCJsb2dpY2FsVGVybU5vZGUiLCJnZXRMb2dpY2FsVGVybU5vZGUiLCJCT09MRUFOX1RZUEUiLCJnZXRFeHByZXNzaW9uTm9kZSIsImdldFJlZHVjZU5vZGUiLCJzdGVwTm9kZXMiLCJnZXRTdGVwTm9kZXMiLCJtYXAiLCJnZXRUZXJuYXJ5Tm9kZSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZ2V0QnJhY2tldGVkVGVybU5vZGUiLCJ0ZXJtTk9kZSIsImNvbXBhcmlzb25UZXJtTm9kZSIsImdldENvbXBhcmlzb25UZXJtTm9kZSIsImdldFRlcm1zTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImxlZnRUZXJtIiwiZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSIsImlmRXhwcmVzc2lvbk5vZGUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsImdldEFsaWFzIiwiZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXROb2Rlc1F1ZXJ5Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtIiwibmVnYXRlZCIsImlzTmVnYXRlZCIsImVsc2VFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsImdldEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImRpc2p1bmN0aW9uIiwiaXNEaXNqdW5jdGlvbiIsIk5lZ2F0ZWRUZXJtIiwiTG9naWNhbFRlcm0iLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRMYWJlbE5vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiQnJhY2tldGVkVGVybSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsIkNvbXBhcmlzb25UZXJtIiwiUHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwicHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlIiwiYXNzaWdubWVudCIsInBhcmFtZXRlck5vZGVzIiwiZ2V0UGFyYW1ldGVyTm9kZXMiLCJuYW1lZFBhcmFtdGVyc0FycmF5IiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcXNCZ0JBO2VBQUFBOztRQTNYQUM7ZUFBQUE7O1FBaWhCQUM7ZUFBQUE7O1FBOENBQztlQUFBQTs7UUEvSEFDO2VBQUFBOztRQXZlQUM7ZUFBQUE7O1FBbVlBQztlQUFBQTs7UUFr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