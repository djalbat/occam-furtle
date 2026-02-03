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
    var Step = _elements.default.Step, node = stepNode, string = context.nodeAsString(node), arrayAssignment = arrayAssignmentFromStepNode(stepNode, context), objectAssigment = objectAssignmentFromStepNode(stepNode, context), variablesDeclaration = variableAssignmentsFromStepNode(stepNode, context);
    context = null;
    var step = new Step(context, string, node, arrayAssignment, objectAssigment, variablesDeclaration);
    return step;
}
function someFromSomeNode(someNode, context) {
    var Some = _elements.default.Some, node = someNode, variable = variableFromSomeNode(someNode, context), anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context), someString = (0, _string.someStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = someString; ///
    context = null;
    var some = new Some(context, string, node, variable, anonymousProcedure);
    return some;
}
function termFromTermNode(termNode, context) {
    var Term = _elements.default.Term, node = termNode, variable = variableFromTermNode(termNode, context), primitive = primitiveFromTermNode(termNode, context), negatedTerm = negatedTermFromTermNode(termNode, context), logicalTerm = logicalTermFromTermNode(termNode, context), bracketedTerm = bracketedTermFromTermNode(termNode, context), comparisonTerm = comparisonTermFromTermNode(termNode, context), properties = [
        variable,
        primitive,
        negatedTerm,
        logicalTerm,
        bracketedTerm,
        comparisonTerm
    ], termString = (0, _string.termStringFromProperties)(properties, context), string = termString; ///
    context = null;
    var term = new Term(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
    return term;
}
function termsFromTermsNode(termsNode, context) {
    var Terms = _elements.default.Terms, node = termsNode, string = context.nodeAsString(node), termNodes = termsNode.getTermNodes(), termsArray = termsArrayFromTermNodes(termNodes, context), array = termsArray; ///
    context = null;
    var terms = new Terms(context, string, node, array);
    return terms;
}
function errorFromErrorNode(errorNode, context) {
    var Error = _elements.default.Error, node = errorNode, string = context.nodeAsString(node);
    context = null;
    var error = new Error(context, string, node);
    return error;
}
function everyFromEveryNode(everyNode, context) {
    var Every = _elements.default.Every, node = everyNode, variable = variableFromEveryNode(everyNode, context), anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context), everyString = (0, _string.everyStringFromVariableAndAnonymousProcedure)(variable, anonymousProcedure), string = everyString; ///
    context = null;
    var every = new Every(context, string, node, variable, anonymousProcedure);
    return every;
}
function labelFromLabelNode(labelNode, context) {
    var Label = _elements.default.Label, node = labelNode, string = context.nodeAsString(node), name = nameFromLabelNode(labelNode, context);
    context = null;
    var label = new Label(context, string, node, name);
    return label;
}
function reduceFromReduceNode(reduceNode, context) {
    var Reduce = _elements.default.Reduce, node = reduceNode, variable = variableFromReduceNode(reduceNode, context), initialExpression = initialExpressionFromReduceNode(reduceNode, context), anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context), reduceString = (0, _string.reduceStringFromVariableInitialExpressionAndAnonymousProcedure)(variable, initialExpression, anonymousProcedure), string = reduceString; ///
    context = null;
    var reduce = new Reduce(context, string, node, variable, initialExpression, anonymousProcedure);
    return reduce;
}
function ternaryFromTernaryNode(ternaryNode, context) {
    var Ternary = _elements.default.Ternary, node = ternaryNode, term = termFromTernaryNode(ternaryNode, context), ifExpression = ifExpressionFromTernaryNode(ternaryNode, context), elseExpression = elseExpressionFromTernaryNode(ternaryNode, context), ternaryString = (0, _string.ternaryStringFromTerm)(term), string = ternaryString; ///
    context = null;
    var ternary = new Ternary(context, string, node, term, ifExpression, elseExpression);
    return ternary;
}
function variableFromVariableNode(variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, string = context.nodeAsString(node), type = typeFromVariableNode(variableNode, context), name = nameFromVariableNode(variableNode, context), expression = expressionFromVariableNode(variableNode, context);
    context = null;
    var variable = new Variable(context, string, node, type, name, expression);
    return variable;
}
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _elements.default.Reference, node = referenceNode, string = context.nodeAsString(node), name = nameFromReferenceNode(referenceNode, context);
    context = null;
    var reference = new Reference(context, string, node, name);
    return reference;
}
function parameterFromParameterNode(parameterNode, context) {
    var parameter = null;
    var type = typeFromParaneterNode(parameterNode, context);
    if (type !== null) {
        var Parameter = _elements.default.Parameter, node = parameterNode, string = context.nodeAsString(node), name = nameFromParaneterNode(parameterNode, context);
        context = null;
        parameter = new Parameter(context, string, node, type, name);
    }
    return parameter;
}
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    var NodeQuery = _elements.default.NodeQuery, node = nodeQueryNode, string = context.nodeAsString(node), variable = variableFromNodeQueryNode(nodeQueryNode, context), query = queryFromNodeQueryNode(nodeQueryNode, context);
    context = null;
    var nodeQuery = new NodeQuery(context, string, node, variable, query);
    return nodeQuery;
}
function primitiveFromPrimitiveNode(primitiveNode, context) {
    var Primitive = _elements.default.Primitive, node = primitiveNode, string = context.nodeAsString(node), type = typeFromPrimitiveNode(primitiveNode, context), value = valueFromPrimitiveNode(primitiveNode, context);
    context = null;
    var primitive = new Primitive(context, string, node, type, value);
    return primitive;
}
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    var NodesQuery = _elements.default.NodesQuery, node = nodesQueryNode, string = context.nodeAsString(node), variable = variableFromNodesQueryNode(nodesQueryNode, context), query = queryFromNodesQueryNode(nodesQueryNode, context);
    context = null;
    var nodesQuery = new NodesQuery(context, string, node, variable, query);
    return nodesQuery;
}
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, node = parametersNode, string = context.nodeAsString(node), paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), array = paramtersArray; ///
    context = null;
    var parameters = new Parameters(context, string, node, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Expression = _elements.default.Expression, node = expressionNode, term = termFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = everyFromExpressionNode(expressionNode, context), reduce = reduceFromExpressionNode(expressionNode, context), ternary = ternaryFromExpressionNode(expressionNode, context), nodeQuery = nodeQueryFromExpressionNode(expressionNode, context), nodesQuery = nodesQueryFromExpressionNode(expressionNode, context), returnBlock = returnBlockFromExpressionNode(expressionNode, context), procedureCall = procedureCallFromExpressionNode(expressionNode, context), properties = [
        term,
        some,
        every,
        reduce,
        ternary,
        nodeQuery,
        nodesQuery,
        returnBlock,
        procedureCall
    ], expressionString = (0, _string.expressionStringFromProperties)(properties, context), string = expressionString; ///
    context = null;
    var expression = new Expression(context, string, node, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);
    return expression;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, node = returnBlockNode, steps = stepsFromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context), returnBlockString = (0, _string.returnBlockStringFromReturnStatementNode)(returnStatement), string = returnBlockString; ///
    context = null;
    var returnBlock = new ReturnBlock(context, string, node, steps, nonsensical, returnStatement);
    return returnBlock;
}
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var ProcedureCall = _elements.default.ProcedureCall, node = procedureCallNode, string = context.nodeAsString(node), reference = referenceFromProcedureCallNode(procedureCallNode, context), terms = termsFromProcedureCallNode(procedureCallNode, context);
    context = null;
    var procedureCall = new ProcedureCall(context, string, node, reference, terms);
    return procedureCall;
}
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    var NamedParameter = _elements.default.NamedParameter, node = namedParameterNode, string = context.nodeAsString(node), type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), alias = aliasFromNamedParameterNode(namedParameterNode, context);
    context = null;
    var namedParameter = new NamedParameter(context, string, node, type, name, alias);
    return namedParameter;
}
function namedParametersFromNamedParametersNode(namedParametersNode, context) {
    var NamedParameters = _elements.default.NamedParameters, node = namedParametersNode, string = context.nodeAsString(node), namedParameterNodes = namedParametersNode.getNamedParameterNodes(), namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context), array = namedParametersArray; ///
    context = null;
    var namedParameters = new NamedParameters(context, string, node, array);
    return namedParameters;
}
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var ArrayAssignment = _elements.default.ArrayAssignment, node = arrayAssignmentNode, string = context.nodeAsString(node), variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context), parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context);
    context = null;
    var arrayAssignment = new ArrayAssignment(context, string, node, variable, parameters);
    return arrayAssignment;
}
function returnStatementFromReturnStatementNode(returnStatementNode, context) {
    var ReturnStatement = _elements.default.ReturnStatement, node = returnStatementNode, string = context.nodeAsString(node), term = termFromReturnStatementNode(returnStatementNode, context);
    context = null;
    var returnStatement = new ReturnStatement(context, string, node, term);
    return returnStatement;
}
function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
    var namedParametersNode = objectAssignmentNode.getNamedParametersNode(), namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);
    return namedParameters;
}
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var ObjectAssigment = _elements.default.ObjectAssigment, node = objectAssignmentNode, string = context.nodeAsString(node), variable = variableFromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context);
    context = null;
    var objectAssignment = new ObjectAssigment(context, string, node, variable, namedParameters);
    return objectAssignment;
}
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var AnonymousProcedure = _elements.default.AnonymousProcedure, node = anonymousProcedureNode, type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context), nonymousProcedureString = (0, _string.anonymousProcedureStringFromTypeParametersAndReturnBlock)(type, parameters, returnBlock), string = nonymousProcedureString; ///
    context = null;
    var anonymousProcedure = new AnonymousProcedure(context, string, node, type, parameters, returnBlock);
    return anonymousProcedure;
}
function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
    var VariableAssignments = _elements.default.VariableAssignments, node = variableAssignmentsNode, type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context), variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariableAssignmentsArray)(type, variableAssignmentsArray), array = variableAssignmentsArray, string = variableAssignmentString; ///
    context = null;
    var variableAssignments = new VariableAssignments(context, string, node, array);
    return variableAssignments;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var ProcedureDeclaration = _elements.default.ProcedureDeclaration, node = procedureDeclarationNode, procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclarationString = (0, _string.procedureDeclarationStringFromProcedure)(procedure), string = procedureDeclarationString; ///
    context = null;
    var procedureDeclaration = new ProcedureDeclaration(context, string, node, procedure);
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
    var NegatedTerm = _elements.default.NegatedTerm, node = negatedTermNode, string = context.nodeAsString(node), termNode = negatedTermNode.getTermNode(), type = typeFromNegatedTermNode(termNode, context), term = termFromNegatedTermNode(negatedTermNode, context), negatedTerm = new NegatedTerm(context, string, node, type, term);
    return negatedTerm;
}
function logicalTermFromLogicalTermNode(logicalTermNode, context) {
    var LogicalTerm = _elements.default.LogicalTerm, node = logicalTermNode, string = context.nodeAsString(node), type = typeFromLogicalTermNode(logicalTermNode, context), disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context), leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context), rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context), logicalTerm = new LogicalTerm(context, string, node, type, disjunction, leftTerm, rightTerm);
    return logicalTerm;
}
function variableFromTypeAndVariableNode(type, variableNode, context) {
    var Variable = _elements.default.Variable, node = variableNode, name = nameFromVariableNode(variableNode), expression = expressionFromTypeAndVariableNode(type, variableNode, context), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(context, string, node, type, name, expression);
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
    var BracketedTerm = _elements.default.BracketedTerm, node = bracketedTermNode, string = context.nodeAsString(node), term = termFromBracketedTermNode(bracketedTermNode, context), bracketedTerm = new BracketedTerm(context, string, node, term);
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
    var ComparisonTerm = _elements.default.ComparisonTerm, node = comparisonTermNode, string = context.nodeAsString(node), negated = negatedFromComparisonTermNode(comparisonTermNode, context), leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context), rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context), comparisonTerm = new ComparisonTerm(context, string, node, negated, leftTerm, rightTerm);
    return comparisonTerm;
}
function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var returnBlockNode = anonymousProcedureNode.getReturnBlockNode(), returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    return returnBlock;
}
function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Procedure = _elements.default.Procedure, node = procedureDeclarationNode, type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context), procedureString = (0, _string.procedureStringFromTypeLabelParametersAndReturnBlock)(type, label, parameters, returnBlock), string = procedureString, procedure = new Procedure(context, string, node, type, label, parameters, returnBlock);
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
    var VariableAssignment = _elements.default.VariableAssignment, node = variableAssignmentNode, variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context), variableAssignmentString = (0, _string.variableAssignmentStringFromTypeAndVariable)(type, variable, context), string = variableAssignmentString, assignment = new VariableAssignment(context, string, node, variable, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm5hcnlTdHJpbmdGcm9tVGVybSxcbiAgICAgICAgIHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUsXG4gICAgICAgICB0ZXJtU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBleHByZXNzaW9uU3RyaW5nRnJvbVByb3BlcnRpZXMsXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlLFxuICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIHByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2ssXG4gICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayxcbiAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgcmVkdWNlU3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbEV4cHJlc3Npb25BbmRBbm9ueW1vdXNQcm9jZWR1cmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBzb21lTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmc7ICAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBzb21lID0gbmV3IFNvbWUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdmFyaWFibGUsXG4gICAgICAgICAgcHJpbWl0aXZlLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtLFxuICAgICAgICAgIGxvZ2ljYWxUZXJtLFxuICAgICAgICAgIGJyYWNrZXRlZFRlcm0sXG4gICAgICAgICAgY29tcGFyaXNvblRlcm1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybVN0cmluZyA9IHRlcm1TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdGVybVN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm0gPSBuZXcgVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNGcm9tVGVybXNOb2RlKHRlcm1zTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHRlcm1zTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0ZXJtTm9kZXMgPSB0ZXJtc05vZGUuZ2V0VGVybU5vZGVzKCksXG4gICAgICAgIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5RnJvbVRlcm1Ob2Rlcyh0ZXJtTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFcnJvciB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFdmVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBldmVyeU5vZGUsIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nOyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBldmVyeSA9IG5ldyBFdmVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBldmVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUpO1xuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZWR1Y2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcmVkdWNlTm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZVN0cmluZyA9IHJlZHVjZVN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxFeHByZXNzaW9uQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcmVkdWNlU3RyaW5nOyAgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmVkdWNlID0gbmV3IFJlZHVjZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBpbml0aWFsRXhwcmVzc2lvbiwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFRlcm5hcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdGVybmFyeU5vZGUsIC8vL1xuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbkZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5U3RyaW5nID0gdGVybmFyeVN0cmluZ0Zyb21UZXJtKHRlcm0pLFxuICAgICAgICBzdHJpbmcgPSB0ZXJuYXJ5U3RyaW5nOyAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB0ZXJuYXJ5ID0gbmV3IFRlcm5hcnkoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKTtcblxuICByZXR1cm4gdGVybmFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBOb2RlUXVlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByaW1pdGl2ZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwcmltaXRpdmVOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhbHVlID0gdmFsdWVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmUgPSBuZXcgUHJpbWl0aXZlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgdmFsdWUpO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gcXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gcGFyYW10ZXJzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gcmVkdWNlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IHRlcm5hcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgdGVybSxcbiAgICAgICAgICBzb21lLFxuICAgICAgICAgIGV2ZXJ5LFxuICAgICAgICAgIHJlZHVjZSxcbiAgICAgICAgICB0ZXJuYXJ5LFxuICAgICAgICAgIG5vZGVRdWVyeSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5LFxuICAgICAgICAgIHJldHVybkJsb2NrLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxcbiAgICAgICAgXSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvblN0cmluZzsgIC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHJldHVybkJsb2NrTm9kZSwgLy8vXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nOyAgLy8vXG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZUNhbGwgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybXMgPSB0ZXJtc0Zyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCB0ZXJtcyk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFsaWFzID0gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBuYW1lLCBhbGlhcyk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVycyB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5hbWVkUGFyYW1ldGVyTm9kZXMgPSBuYW1lZFBhcmFtZXRlcnNOb2RlLmdldE5hbWVkUGFyYW1ldGVyTm9kZXMoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzQXJyYXkgPSBuYW1lZFBhcmFtdGVyc0FycmF5RnJvbU5hbWVkUGFyYW1ldGVyTm9kZXMobmFtZWRQYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgIGFycmF5ID0gbmFtZWRQYXJhbWV0ZXJzQXJyYXk7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG5hbWVkUGFyYW1ldGVycyA9IG5ldyBOYW1lZFBhcmFtZXRlcnMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgY29udGV4dCA9IG51bGw7XG5cbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLmdldE5hbWVkUGFyYW1ldGVyc05vZGUoKSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzRnJvbU5hbWVkUGFyYW1ldGVyc05vZGUobmFtZWRQYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBPYmplY3RBc3NpZ21lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnNGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZVN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSxcbiAgICAgICAgc3RyaW5nID0gbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmc7IC8vL1xuXG4gIGNvbnRleHQgPSBudWxsO1xuXG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCAvLy9cbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5KSxcbiAgICAgICAgYXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXksIC8vL1xuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmc7ICAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRzID0gbmV3IFZhcmlhYmxlQXNzaWdubWVudHMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmcgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUocHJvY2VkdXJlKSxcbiAgICAgICAgc3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmc7ICAvLy9cblxuICBjb250ZXh0ID0gbnVsbDtcblxuICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmVEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBsYWJlbE5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm5hcnlOb2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHNvbWVOb2RlLmdldFZhcmlhYmxlTm9kZSgpLCAvLy9cbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5vZGUuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBudWxsO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBwcmltaXRpdmUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZU5vZGUgPSB0ZXJtTm9kZS5nZXRQcmltaXRpdmVOb2RlKCk7XG5cbiAgaWYgKHByaW1pdGl2ZU5vZGUgIT09IG51bGwpIHtcbiAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tUHJpbWl0aXZlTm9kZShwcmltaXRpdmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV2ZXJ5Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcGFyYW1ldGVyTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVBhcmFuZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcGFyYW1ldGVyTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gcmVmZXJlbmNlTm9kZS5nZXROYW1lKCk7XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gcHJpbWl0aXZlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gcmVkdWNlTm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtID0gbnVsbDtcblxuICBjb25zdCB0ZXJtTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBzb21lID0gbnVsbDtcblxuICBjb25zdCBzb21lTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFNvbWVOb2RlKCk7XG5cbiAgaWYgKHNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZVF1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlRnJvbVByaW1pdGl2ZU5vZGUocHJpbWl0aXZlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZSA9IHByaW1pdGl2ZU5vZGUuZ2V0VmFsdWUoKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBub2Rlc1F1ZXJ5Tm9kZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBldmVyeSA9IG51bGw7XG5cbiAgY29uc3QgZXZlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0RXZlcnlOb2RlKCk7XG5cbiAgaWYgKGV2ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIGV2ZXJ5ID0gZXZlcnlGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgbmVnYXRlZFRlcm0gPSBudWxsO1xuXG4gIGNvbnN0IG5lZ2F0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlLmdldE5lZ2F0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChuZWdhdGVkVGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBuZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5lZ2F0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naWNhbFRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxvZ2ljYWxUZXJtID0gbnVsbDtcblxuICBjb25zdCBsb2dpY2FsVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRMb2dpY2FsVGVybU5vZGUoKTtcblxuICBpZiAobG9naWNhbFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgbG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsb2dpY2FsVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gQk9PTEVBTl9UWVBFO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21OZWdhdGVkVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBCT09MRUFOX1RZUEU7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybU5vZGUgPSBuZWdhdGVkVGVybU5vZGUuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VOb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmVkdWNlID0gbnVsbDtcblxuICBjb25zdCByZWR1Y2VOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0UmVkdWNlTm9kZSgpO1xuXG4gIGlmIChyZWR1Y2VOb2RlICE9PSBudWxsKSB7XG4gICAgcmVkdWNlID0gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGVwTm9kZXMgPSByZXR1cm5CbG9ja05vZGUuZ2V0U3RlcE5vZGVzKCksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVRdWVyeU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybmFyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybmFyeSA9IG51bGw7XG5cbiAgY29uc3QgdGVybmFyeU5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRUZXJuYXJ5Tm9kZSgpO1xuXG4gIGlmICh0ZXJuYXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgIHRlcm5hcnkgPSB0ZXJuYXJ5RnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJuYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkVGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkVGVybSA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZS5nZXRCcmFja2V0ZWRUZXJtTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRUZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlKGJyYWNrZXRlZFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZShicmFja2V0ZWRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyaXNvblRlcm1Gcm9tVGVybU5vZGUodGVybU5PZGUsIGNvbnRleHQpIHtcbiAgbGV0IGNvbXBhcmlzb25UZXJtID0gbnVsbDtcblxuICBjb25zdCBjb21wYXJpc29uVGVybU5vZGUgPSB0ZXJtTk9kZS5nZXRDb21wYXJpc29uVGVybU5vZGUoKTtcblxuICBpZiAoY29tcGFyaXNvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUoY29tcGFyaXNvblRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBjb21wYXJpc29uVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFRlcm1zTm9kZSgpLFxuICAgICAgICB0ZXJtcyA9IHRlcm1zRnJvbVRlcm1zTm9kZSh0ZXJtc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB0ZXJtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgIGxlZnRUZXJtID0gdGVybUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gc3RlcE5vZGUuZ2V0QXJyYXlBc3NpZ25tZW50Tm9kZSgpO1xuXG4gIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWZFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGlmRXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5Tm9kZS5nZXRJZkV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGlmRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoaWZFeHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGlmRXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVRdWVyeUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0Tm9kZVF1ZXJ5Tm9kZSgpO1xuXG4gIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbm9kZVF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxpYXNGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbGlhcyA9IG5hbWVkUGFyYW1ldGVyTm9kZS5nZXRBbGlhcygpO1xuXG4gIHJldHVybiBhbGlhcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1Ob2RlID0gcmV0dXJuU3RhdGVtZW50Tm9kZS5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc1F1ZXJ5ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGVzUXVlcnlOb2RlKCk7XG5cbiAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gbG9naWNhbFRlcm1Ob2RlLmdldFJpZ2h0VGVybU5vZGUoKSxcbiAgICAgICByaWdodFRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmVnYXRlZCA9IGNvbXBhcmlzb25UZXJtTm9kZS5pc05lZ2F0ZWQoKTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVsc2VFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlOb2RlLmdldEVsc2VFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICBlbHNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZWxzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZWxzZUV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpO1xuXG4gIGlmIChyZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lTm9kZS5nZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNpY2FsID0gcmV0dXJuQmxvY2tOb2RlLmlzTm9uc2Vuc2ljYWwoKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZlcmVuY2VGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlLmdldFJlZmVyZW5jZU5vZGUoKSxcbiAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gY29tcGFyaXNvblRlcm1Ob2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNqdW5jdGlvbkZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGRpc2p1bmN0aW9uID0gbG9naWNhbFRlcm1Ob2RlLmlzRGlzanVuY3Rpb24oKTtcblxuICByZXR1cm4gZGlzanVuY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGVkVGVybUZyb21OZWdhdGVkVGVybU5vZGUobmVnYXRlZFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmVnYXRlZFRlcm0gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbmVnYXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gbmVnYXRlZFRlcm1Ob2RlLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5lZ2F0ZWRUZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5lZ2F0ZWRUZXJtTm9kZShuZWdhdGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkVGVybSA9IG5ldyBOZWdhdGVkVGVybShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHRlcm0pO1xuXG4gIHJldHVybiBuZWdhdGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2ljYWxUZXJtRnJvbUxvZ2ljYWxUZXJtTm9kZShsb2dpY2FsVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMb2dpY2FsVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBsb2dpY2FsVGVybU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb25Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlKGxvZ2ljYWxUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUobG9naWNhbFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbG9naWNhbFRlcm0gPSBuZXcgTG9naWNhbFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBkaXNqdW5jdGlvbiwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGxvZ2ljYWxUZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUodHlwZSwgdmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlQXNzaWdubWVudHMgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlID0gc3RlcE5vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUoKTtcblxuICBpZiAodmFyaWFibGVBc3NpZ25tZW50c05vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZUFzc2lnbm1lbnRzID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbEV4cHJlc3Npb25Gcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gZXhwcmVzc2lvbjsgLy8vXG5cbiAgcmV0dXJuIGluaXRpYWxFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRQcm9jZWR1cmVDYWxsTm9kZSgpO1xuXG4gIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZWR1cmVDYWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGNvbXBhcmlzb25UZXJtTm9kZS5nZXRSaWdodFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IHRlcm1Gcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUuZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUuZ2V0VHlwZSgpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uID0gbnVsbDtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5TdGF0ZW1lbnROb2RlID0gcmV0dXJuQmxvY2tOb2RlLmdldFJldHVyblN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVyblN0YXRlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZFRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRUZXJtIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tQnJhY2tldGVkVGVybU5vZGUoYnJhY2tldGVkVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRUZXJtID0gbmV3IEJyYWNrZXRlZFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtKTtcblxuICByZXR1cm4gYnJhY2tldGVkVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbWVudE5vZGUuZ2V0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmlzb25UZXJtRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBDb21wYXJpc29uVGVybSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBjb21wYXJpc29uVGVybU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZShjb21wYXJpc29uVGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlKGNvbXBhcmlzb25UZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb25UZXJtID0gbmV3IENvbXBhcmlzb25UZXJtKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmVnYXRlZCwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb25UZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2VkdXJlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBzdHJpbmcgPSBwcm9jZWR1cmVTdHJpbmcsIC8vL1xuICAgICAgICBwcm9jZWR1cmUgPSBuZXcgUHJvY2VkdXJlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gcHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLmdldFJldHVybkJsb2NrTm9kZSgpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlKHR5cGUsIHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlKHR5cGUsIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVybXNBcnJheUZyb21UZXJtTm9kZXModGVybU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1zQXJyYXkgPSB0ZXJtTm9kZXMubWFwKCh0ZXJtTm9kZSkgPT4geyAvLy9cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlcnNOb2RlLmdldFBhcmFtZXRlck5vZGVzKCksXG4gICAgICAgIHBhcmFtdGVyc0FycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtdGVyc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZWRQYXJhbXRlcnNBcnJheUZyb21OYW1lZFBhcmFtZXRlck5vZGVzKG5hbWVkUGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZWRQYXJhbXRlcnNBcnJheSA9IG5hbWVkUGFyYW1ldGVyTm9kZXMubWFwKChuYW1lZFBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXIgPSBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW10ZXJzQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudE5vZGVzID0gdmFyaWFibGVBc3NpZ25tZW50c05vZGUuZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50c0FycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMubWFwKCh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudHNBcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJhbGlhc0Zyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21FdmVyeU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tUmVkdWNlTm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Tb21lTm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwiYnJhY2tldGVkVGVybUZyb21CcmFja2V0ZWRUZXJtTm9kZSIsImJyYWNrZXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21Db21wYXJpc29uVGVybU5vZGUiLCJjb21wYXJpc29uVGVybUZyb21UZXJtTm9kZSIsImRpc2p1bmN0aW9uRnJvbUxvZ2ljYWxUZXJtTm9kZSIsImVsc2VFeHByZXNzaW9uRnJvbVRlcm5hcnlOb2RlIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXZlcnlGcm9tRXZlcnlOb2RlIiwiZXZlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwiZXhwcmVzc2lvbkZyb21UeXBlQW5kVmFyaWFibGVOb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiZXhwcmVzc2lvbkZyb21WYXJpYWJsZU5vZGUiLCJpZkV4cHJlc3Npb25Gcm9tVGVybmFyeU5vZGUiLCJpbml0aWFsRXhwcmVzc2lvbkZyb21SZWR1Y2VOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwibGFiZWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibGVmdFRlcm1Gcm9tQ29tcHpyaXNvblRlcm1Ob2RlIiwibGVmdFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tTG9naWNhbFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Gcm9tVGVybU5vZGUiLCJuYW1lRnJvbUxhYmVsTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21QYXJhbmV0ZXJOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwibmFtZUZyb21WYXJpYWJsZU5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlcnNGcm9tTmFtZWRQYXJhbWV0ZXJzTm9kZSIsIm5hbWVkUGFyYW1ldGVyc0Zyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWVkUGFyYW10ZXJzQXJyYXlGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvblRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwibmVnYXRlZFRlcm1Gcm9tVGVybU5vZGUiLCJub2RlUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJpbWl0aXZlRnJvbVByaW1pdGl2ZU5vZGUiLCJwcmltaXRpdmVGcm9tVGVybU5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbUV4cHJlc3Npb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJxdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwicXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUiLCJyZWR1Y2VGcm9tRXhwcmVzc2lvbk5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsInJlZmVyZW5jZUZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbUV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuU3RhdGVtZW50RnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmlnaHRUZXJtRnJvbUNvbXB6cmlzb25UZXJtTm9kZSIsInJpZ2h0VGVybUZyb21Mb2dpY2FsVGVybU5vZGUiLCJzb21lRnJvbUV4cHJlc3Npb25Ob2RlIiwic29tZUZyb21Tb21lTm9kZSIsInN0ZXBGcm9tU3RlcE5vZGUiLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJ0ZXJtRnJvbUJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm1Gcm9tTmVnYXRlZFRlcm1Ob2RlIiwidGVybUZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwidGVybUZyb21UZXJtTm9kZSIsInRlcm1Gcm9tVGVybmFyeU5vZGUiLCJ0ZXJtc0FycmF5RnJvbVRlcm1Ob2RlcyIsInRlcm1zRnJvbVByb2NlZHVyZUNhbGxOb2RlIiwidGVybXNGcm9tVGVybXNOb2RlIiwidGVybmFyeUZyb21FeHByZXNzaW9uTm9kZSIsInRlcm5hcnlGcm9tVGVybmFyeU5vZGUiLCJ0eXBlRnJvbUxvZ2ljYWxUZXJtTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OZWdhdGVkVGVybU5vZGUiLCJ0eXBlRnJvbVBhcmFuZXRlck5vZGUiLCJ0eXBlRnJvbVByaW1pdGl2ZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ0eXBlRnJvbVZhcmlhYmxlTm9kZSIsInZhbHVlRnJvbVByaW1pdGl2ZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tRXZlcnlOb2RlIiwidmFyaWFibGVGcm9tTm9kZVF1ZXJ5Tm9kZSIsInZhcmlhYmxlRnJvbU5vZGVzUXVlcnlOb2RlIiwidmFyaWFibGVGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUZyb21SZWR1Y2VOb2RlIiwidmFyaWFibGVGcm9tU29tZU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIlN0ZXAiLCJlbGVtZW50cyIsIm5vZGUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0ZXAiLCJzb21lTm9kZSIsIlNvbWUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsInNvbWVTdHJpbmciLCJzb21lU3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwic29tZSIsInRlcm1Ob2RlIiwiVGVybSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJwcm9wZXJ0aWVzIiwidGVybVN0cmluZyIsInRlcm1TdHJpbmdGcm9tUHJvcGVydGllcyIsInRlcm0iLCJ0ZXJtc05vZGUiLCJUZXJtcyIsInRlcm1Ob2RlcyIsImdldFRlcm1Ob2RlcyIsInRlcm1zQXJyYXkiLCJhcnJheSIsInRlcm1zIiwiZXJyb3JOb2RlIiwiRXJyb3IiLCJlcnJvciIsImV2ZXJ5Tm9kZSIsIkV2ZXJ5IiwiZXZlcnlTdHJpbmciLCJldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsImV2ZXJ5IiwibGFiZWxOb2RlIiwiTGFiZWwiLCJuYW1lIiwibGFiZWwiLCJyZWR1Y2VOb2RlIiwiUmVkdWNlIiwiaW5pdGlhbEV4cHJlc3Npb24iLCJyZWR1Y2VTdHJpbmciLCJyZWR1Y2VTdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsRXhwcmVzc2lvbkFuZEFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZSIsInRlcm5hcnlOb2RlIiwiVGVybmFyeSIsImlmRXhwcmVzc2lvbiIsImVsc2VFeHByZXNzaW9uIiwidGVybmFyeVN0cmluZyIsInRlcm5hcnlTdHJpbmdGcm9tVGVybSIsInRlcm5hcnkiLCJ2YXJpYWJsZU5vZGUiLCJWYXJpYWJsZSIsInR5cGUiLCJleHByZXNzaW9uIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXIiLCJQYXJhbWV0ZXIiLCJub2RlUXVlcnlOb2RlIiwiTm9kZVF1ZXJ5IiwicXVlcnkiLCJub2RlUXVlcnkiLCJwcmltaXRpdmVOb2RlIiwiUHJpbWl0aXZlIiwidmFsdWUiLCJub2Rlc1F1ZXJ5Tm9kZSIsIk5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGUiLCJQYXJhbWV0ZXJzIiwicGFyYW10ZXJzQXJyYXkiLCJwYXJhbWV0ZXJzIiwiZXhwcmVzc2lvbk5vZGUiLCJFeHByZXNzaW9uIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tUHJvcGVydGllcyIsInJldHVybkJsb2NrTm9kZSIsIlJldHVybkJsb2NrIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwiUHJvY2VkdXJlQ2FsbCIsIm5hbWVkUGFyYW1ldGVyTm9kZSIsIk5hbWVkUGFyYW1ldGVyIiwiYWxpYXMiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyc05vZGUiLCJOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlck5vZGVzIiwiZ2V0TmFtZWRQYXJhbWV0ZXJOb2RlcyIsIm5hbWVkUGFyYW1ldGVyc0FycmF5IiwibmFtZWRQYXJhbWV0ZXJzIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIkFycmF5QXNzaWdubWVudCIsInJldHVyblN0YXRlbWVudE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsImdldE5hbWVkUGFyYW1ldGVyc05vZGUiLCJPYmplY3RBc3NpZ21lbnQiLCJvYmplY3RBc3NpZ25tZW50IiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSIsIlZhcmlhYmxlQXNzaWdubWVudHMiLCJ2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJnZXROYW1lIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRQcmltaXRpdmVOb2RlIiwiZ2V0VHlwZSIsImdldFNvbWVOb2RlIiwiZ2V0U3RyaW5nIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImdldFZhbHVlIiwiZ2V0RXZlcnlOb2RlIiwibmVnYXRlZFRlcm1Ob2RlIiwiZ2V0TmVnYXRlZFRlcm1Ob2RlIiwibG9naWNhbFRlcm1Ob2RlIiwiZ2V0TG9naWNhbFRlcm1Ob2RlIiwiQk9PTEVBTl9UWVBFIiwiZ2V0RXhwcmVzc2lvbk5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwic3RlcE5vZGVzIiwiZ2V0U3RlcE5vZGVzIiwibWFwIiwiZ2V0VGVybmFyeU5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImdldEJyYWNrZXRlZFRlcm1Ob2RlIiwidGVybU5PZGUiLCJjb21wYXJpc29uVGVybU5vZGUiLCJnZXRDb21wYXJpc29uVGVybU5vZGUiLCJnZXRUZXJtc05vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybSIsImdldEFycmF5QXNzaWdubWVudE5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJnZXRBbGlhcyIsImdldE9iamVjdEFzc2lnbm1lbnROb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInJpZ2h0VGVybSIsIm5lZ2F0ZWQiLCJpc05lZ2F0ZWQiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRFbHNlRXhwcmVzc2lvbk5vZGUiLCJnZXRSZXR1cm5CbG9ja05vZGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiaXNOb25zZW5zaWNhbCIsImdldFJlZmVyZW5jZU5vZGUiLCJkaXNqdW5jdGlvbiIsImlzRGlzanVuY3Rpb24iLCJOZWdhdGVkVGVybSIsIkxvZ2ljYWxUZXJtIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsImdldFBhcmFtZXRlcnNOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSIsIkJyYWNrZXRlZFRlcm0iLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJDb21wYXJpc29uVGVybSIsIlByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsInByb2NlZHVyZVN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nRnJvbVR5cGVBbmRWYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwYXJhbWV0ZXJOb2RlcyIsImdldFBhcmFtZXRlck5vZGVzIiwibmFtZWRQYXJhbXRlcnNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGVzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWd5QmdCQTtlQUFBQTs7UUF2WUFDO2VBQUFBOztRQThoQkFDO2VBQUFBOztRQThDQUM7ZUFBQUE7O1FBaElBQztlQUFBQTs7UUE1ZkFDO2VBQUFBOztRQXdaQUM7ZUFBQUE7O1FBbVJBQztlQUFBQTs7UUF6VkFDO2VBQUFBOztRQWlYQUM7ZUFBQUE7O1FBOVZBQztlQUFBQTs7UUFrTEFDO2VBQUFBOztRQTlDQUM7ZUFBQUE7O1FBcnZCQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQTBlQUM7ZUFBQUE7O1FBdlVBQztlQUFBQTs7UUE4WEFDO2VBQUFBOztRQStXQUM7ZUFBQUE7O1FBcUNBQztlQUFBQTs7UUFwVUFDO2VBQUFBOztRQW1EQUM7ZUFBQUE7O1FBaUxBQztlQUFBQTs7UUF0MEJBQztlQUFBQTs7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