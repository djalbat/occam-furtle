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
    get everyFromEveryNode () {
        return everyFromEveryNode;
    },
    get expressionFromBracketedExpressionNode () {
        return expressionFromBracketedExpressionNode;
    },
    get expressionFromExpressionNode () {
        return expressionFromExpressionNode;
    },
    get expressionFromReturnStatementNode () {
        return expressionFromReturnStatementNode;
    },
    get expressionfFromVariableNode () {
        return expressionfFromVariableNode;
    },
    get nameFromParaneterNode () {
        return nameFromParaneterNode;
    },
    get nameFromVariableNode () {
        return nameFromVariableNode;
    },
    get nodeFromExpressionNode () {
        return nodeFromExpressionNode;
    },
    get nodesFromExpressionNode () {
        return nodesFromExpressionNode;
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
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
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
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _elements.default.Parameters, paramtersArray = paramtersArrayFromParametersNode(parametersNode, context), parametersString = (0, _string.paramtersStringFromParametersArray)(paramtersArray, context), string = parametersString, array = paramtersArray, parameters = new Parameters(string, array);
    return parameters;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Every = _elements.default.Every, Reduce = _elements.default.Reduce, Expression = _elements.default.Expression, Ternary = _elements.default.Ternary, Variable = _elements.default.Variable, NodeQuery = _elements.default.NodeQuery, NodesQuery = _elements.default.NodesQuery, Comparison = _elements.default.Comparison, ReturnBlock = _elements.default.ReturnBlock, ProcedureCall = _elements.default.ProcedureCall, NegatedExpression = _elements.default.NegatedExpression, LogicalExpression = _elements.default.LogicalExpression, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), string = stringFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), some = someFromExpressionNode(expressionNode, context), every = Every.fromExpressionNode(expressionNode, context), reduce = Reduce.fromExpressionNode(expressionNode, context), ternary = Ternary.fromExpressionNode(expressionNode, context), variable = Variable.fromExpressionNode(expressionNode, context), nodeQuery = NodeQuery.fromExpressionNode(expressionNode, context), nodesQuery = NodesQuery.fromExpressionNode(expressionNode, context), comparison = Comparison.fromExpressionNode(expressionNode, context), returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context), procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context), negatedExpression = NegatedExpression.fromExpressionNode(expressionNode, context), logicalExpression = LogicalExpression.fromExpressionNode(expressionNode, context), bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context), expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
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
function nodesFromExpressionNode(expressionNode, context) {
    var nodes = null; ///
    return nodes;
}
function stringFromExpressionNode(expressionNode, context) {
    var string = expressionNode.getString();
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
function booleanFromExpressionNode(expressionNode, context) {
    var boolean = expressionNode.getBoolean();
    return boolean;
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
function objectAssignmentFromStepNode(stepNode, context) {
    var objectAssignment = null;
    var objectAssignmentNode = stepNode.getObjectAssignmentNode();
    if (objectAssignmentNode !== null) {
        objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
    }
    return objectAssignment;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBzdGVwU3RyaW5nRnJvbU5vdGhpbmcsXG4gICAgICAgICB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lLFxuICAgICAgICAgcGFyYW1ldGVyU3RyaW5nRnJvbVR5cGVBbmROYW1lLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbixcbiAgICAgICAgIHBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXksXG4gICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZ0Zyb21Qcm9jZWR1cmUsXG4gICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nRnJvbUJFeHByZXNzaW9uLFxuICAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgIHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUsXG4gICAgICAgICBldmVyeVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSxcbiAgICAgICAgIGFycmF5QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnMsXG4gICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlLFxuICAgICAgICAgb2JqZWN0QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZE5hbWVkUGFyYW1ldGVycyxcbiAgICAgICAgIHZhcmFpYmxlQXNzaWdubWVudHNTdHJpbmdGcm9tVmFyaWFibGVBc3NpZ25tZW50c0FycmF5LFxuICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcFN0cmluZyA9IHN0ZXBTdHJpbmdGcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RlcFN0cmluZywgIC8vL1xuICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gIHJldHVybiBzdGVwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZVN0cmluZyA9IHNvbWVTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHNvbWVTdHJpbmcsICAvLy9cbiAgICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG5cbiAgcmV0dXJuIHNvbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVyeUZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXZlcnkgfSA9IGVsZW1lbnRzLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5U3RyaW5nID0gZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGV2ZXJ5U3RyaW5nLCAvLy9cbiAgICAgICAgZXZlcnkgPSBuZXcgRXZlcnkoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gZXZlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZSA9IG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgY29uc3QgdHlwZSA9IHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbmV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlclN0cmluZ0Zyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJTdHJpbmc7IC8vL1xuXG4gICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtZXRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXJzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcGFyYW10ZXJzQXJyYXkgPSBwYXJhbXRlcnNBcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVyc0FycmF5KHBhcmFtdGVyc0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZywgIC8vL1xuICAgICAgICBhcnJheSA9IHBhcmFtdGVyc0FycmF5LCAvLy9cbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEV2ZXJ5LCBSZWR1Y2UsIEV4cHJlc3Npb24sIFRlcm5hcnksIFZhcmlhYmxlLCBOb2RlUXVlcnksIE5vZGVzUXVlcnksIENvbXBhcmlzb24sIFJldHVybkJsb2NrLCBQcm9jZWR1cmVDYWxsLCBOZWdhdGVkRXhwcmVzc2lvbiwgTG9naWNhbEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBzb21lRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBFdmVyeS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSBSZWR1Y2UuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IFRlcm5hcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IE5vZGVzUXVlcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IE5lZ2F0ZWRFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gTG9naWNhbEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jayB9ID0gZWxlbWVudHMsXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9ja1N0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHJldHVybkJsb2NrU3RyaW5nLCAvLy9cbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlLCBBcnJheUFzc2lnbm1lbnQgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSBhcnJheUFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmRQYXJhbWV0ZXJzKHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgc3RyaW5nID0gYXJyYXlBc3NpZ25tZW50U3RyaW5nLCAvLy9cbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdubWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuU3RhdGVtZW50RnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gcmV0dXJuQmxvY2tTdHJpbmcsICAvLy9cbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gbmV3IFJldHVyblN0YXRlbWVudChzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiByZXR1cm5TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIE5hbWVkUGFyYW1ldGVycywgT2JqZWN0QXNzaWdtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gTmFtZWRQYXJhbWV0ZXJzLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IG9iamVjdEFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lZFBhcmFtZXRlcnModmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKTtcblxuICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2ssIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBub255bW91c1Byb2NlZHVyZVN0cmluZywgLy8vXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tQnJhY2tldGVkRXhwcmVzc2lvbk5vZGUoYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nID0gYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZywgLy8vXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBuZXcgQnJhY2tldGVkRXhwcmVzc2lvbihzdHJpbmcsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlQXNzaWdubWVudHMgfSA9IGVsZW1lbnRzLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzU3RyaW5nID0gdmFyYWlibGVBc3NpZ25tZW50c1N0cmluZ0Zyb21WYXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkodmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50c1N0cmluZywgLy8vXG4gICAgICAgIGFycmF5ID0gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5LCAvLy9cbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50cyA9IG5ldyBWYXJpYWJsZUFzc2lnbm1lbnRzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gc29tZU5vZGUuZ2V0VmFyaWFibGVOb2RlKCksIC8vL1xuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gbnVsbDtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCBuYW1lID0gdmFyaWFibGVOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlRnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gZXZlcnlOb2RlLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXJOb2RlLmdldFR5cGUoKTtcblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVGcm9tUGFyYW5ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXJOb2RlLmdldE5hbWUoKTtcblxuICByZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb25Ob2RlLmdldE5vZGUoKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbWVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNvbWUgPSBudWxsO1xuXG4gIGNvbnN0IHNvbWVOb2RlID0gZXhwcmVzc2lvbk5vZGUuZ2V0U29tZU5vZGUoKTtcblxuICBpZiAoc29tZU5vZGUgIT09IG51bGwpIHtcbiAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc29tZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBleHByZXNzaW9uTm9kZS5nZXRTdHJpbmcoKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb25Ob2RlLmdldE51bWJlcigpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0ZXBOb2RlcyA9IHJldHVybkJsb2NrTm9kZS5nZXRTdGVwTm9kZXMoKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uTm9kZS5nZXRCb29sZWFuKCk7XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uZkZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb24gPSBudWxsO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwTm9kZS5nZXRBcnJheUFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBhcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBOb2RlLmdldE9iamVjdEFzc2lnbm1lbnROb2RlKCk7XG5cbiAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgb2JqZWN0QXNzaWdubWVudCA9IG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zaWNhbCA9IHJldHVybkJsb2NrTm9kZS5pc05vbnNlbnNpY2FsKCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGVBc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50c05vZGUgPSBzdGVwTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnRzTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlQXNzaWdubWVudHMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzRnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlKHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbmZGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tRXZlcnlOb2RlKGV2ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlOb2RlLmdldEFub255bW91c1Byb2NlZHVyZU5vZGUoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZU5vZGUuZ2V0QW5vbnltb3VzUHJvY2VkdXJlTm9kZSgpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnROb2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudE5vZGUgPSByZXR1cm5CbG9ja05vZGUuZ2V0UmV0dXJuU3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLmdldFBhcmFtZXRlcnNOb2RlKCksXG4gICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZU5vZGUuZ2V0UmV0dXJuQmxvY2tOb2RlKCksXG4gICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJhY2tldGVkRXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgY29uc3QgYnJhY2tldGVkRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZS5nZXRCcmFja2V0ZWRFeHByZXNzaW9uTm9kZSgpO1xuXG4gIGlmIChicmFja2V0ZWRFeHByZXNzaW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlKGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBicmFja2V0ZWRFeHByZXNzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZShicmFja2V0ZWRFeHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uTm9kZSA9IGJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlLmdldEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZS5nZXRQYXJhbWV0ZXJzTm9kZSgpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlID0gYW5vbnltb3VzUHJvY2VkdXJlTm9kZS5nZXRUeXBlKCk7XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlLCBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIHByb2NlZHVyZSA9IFByb2NlZHVyZS5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nID0gcHJvY2VkdXJlRGVjbGFyYXRpb25TdHJpbmdGcm9tUHJvY2VkdXJlKHByb2NlZHVyZSksXG4gICAgICAgIHN0cmluZyA9IHByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZURlY2xhcmF0aW9uKHN0cmluZywgcHJvY2VkdXJlKTtcblxuICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXlGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUodmFyaWFibGVBc3NpZ25tZW50c05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZSA9IHZhcmlhYmxlQXNzaWdubWVudHNOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50Tm9kZXMgPSB2YXJpYWJsZUFzc2lnbm1lbnRzTm9kZS5nZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcygpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRzQXJyYXkgPSB2YXJpYWJsZUFzc2lnbm1lbnROb2Rlcy5tYXAoKHZhcmlhYmxlQXNzaWdubWVudE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50c0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgRXhwcmVzc2lvbiwgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlKGV4cHJlc3Npb24sIHZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nLCAgLy8vXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyYW10ZXJzQXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJzTm9kZS5nZXRQYXJhbWV0ZXJOb2RlcygpLFxuICAgICAgICBwYXJhbXRlcnNBcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbXRlcnNBcnJheTtcbn1cblxuIl0sIm5hbWVzIjpbImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUV2ZXJ5Tm9kZSIsImFub255bW91c1Byb2NlZHVyZUZyb21SZWR1Y2VOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbVNvbWVOb2RlIiwiYXJyYXlBc3NpZ25tZW50RnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlIiwiYnJhY2tldGVkRXhwcmVzc2lvbkZyb21CcmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsImJyYWNrZXRlZEV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJldmVyeUZyb21FdmVyeU5vZGUiLCJleHByZXNzaW9uRnJvbUJyYWNrZXRlZEV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsImV4cHJlc3Npb25mRnJvbVZhcmlhYmxlTm9kZSIsIm5hbWVGcm9tUGFyYW5ldGVyTm9kZSIsIm5hbWVGcm9tVmFyaWFibGVOb2RlIiwibm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwibnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUiLCJwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlcnNGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInBhcmFtZXRlcnNGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtdGVyc0FycmF5RnJvbVBhcmFtZXRlcnNOb2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicmV0dXJuQmxvY2tGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsInJldHVyblN0YXRlbWVudEZyb21SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5TdGF0ZW1lbnRGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInNvbWVGcm9tRXhwcmVzc2lvbk5vZGUiLCJzb21lRnJvbVNvbWVOb2RlIiwic3RlcEZyb21TdGVwTm9kZSIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZSIsInR5cGVGcm9tUGFyYW5ldGVyTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0FycmF5RnJvbVZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwidmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tVmFyaWFibGVBc3NpZ25tZW50c05vZGUiLCJ2YXJpYWJsZUZyb21FdmVyeU5vZGUiLCJ2YXJpYWJsZUZyb21Tb21lTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJTdGVwIiwiZWxlbWVudHMiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsInN0ZXBTdHJpbmciLCJzdGVwU3RyaW5nRnJvbU5vdGhpbmciLCJzdHJpbmciLCJzdGVwIiwic29tZU5vZGUiLCJTb21lIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lU3RyaW5nIiwic29tZVN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInNvbWUiLCJldmVyeU5vZGUiLCJFdmVyeSIsImV2ZXJ5U3RyaW5nIiwiZXZlcnlTdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmVyeSIsInZhcmlhYmxlTm9kZSIsIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJleHByZXNzaW9uIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlclN0cmluZ0Zyb21UeXBlQW5kTmFtZSIsInBhcmFtZXRlcnNOb2RlIiwiUGFyYW1ldGVycyIsInBhcmFtdGVyc0FycmF5IiwicGFyYW1ldGVyc1N0cmluZyIsInBhcmFtdGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzQXJyYXkiLCJhcnJheSIsInBhcmFtZXRlcnMiLCJleHByZXNzaW9uTm9kZSIsIlJlZHVjZSIsIkV4cHJlc3Npb24iLCJUZXJuYXJ5IiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIkNvbXBhcmlzb24iLCJSZXR1cm5CbG9jayIsIlByb2NlZHVyZUNhbGwiLCJOZWdhdGVkRXhwcmVzc2lvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwiYm9vbGVhbiIsImZyb21FeHByZXNzaW9uTm9kZSIsInJlZHVjZSIsInRlcm5hcnkiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29tcGFyaXNvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwicmV0dXJuQmxvY2tOb2RlIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsInJldHVybkJsb2NrU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJBcnJheUFzc2lnbm1lbnQiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudFN0cmluZyIsImFycmF5QXNzaWdubWVudFN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnMiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwiUmV0dXJuU3RhdGVtZW50IiwicmV0dXJuQmxvY2tTdHJpbmdGcm9tRXhwcmVzc2lvbiIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwiT2JqZWN0QXNzaWdtZW50IiwibmFtZWRQYXJhbWV0ZXJzIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lZFBhcmFtZXRlcnMiLCJvYmplY3RBc3NpZ25tZW50IiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIkFub255bW91c1Byb2NlZHVyZSIsIm5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJicmFja2V0ZWRFeHByZXNzaW9uTm9kZSIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uU3RyaW5nIiwiYnJhY2tldGVkRXhwcmVzc2lvblN0cmluZ0Zyb21CRXhwcmVzc2lvbiIsInZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHNTdHJpbmciLCJ2YXJhaWJsZUFzc2lnbm1lbnRzU3RyaW5nRnJvbVZhcmlhYmxlQXNzaWdubWVudHNBcnJheSIsInZhcmlhYmxlQXNzaWdubWVudHMiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsImdldE5vZGUiLCJnZXRTb21lTm9kZSIsImdldFN0cmluZyIsImdldE51bWJlciIsInN0ZXBOb2RlcyIsImdldFN0ZXBOb2RlcyIsIm1hcCIsImdldEJvb2xlYW4iLCJnZXRBcnJheUFzc2lnbm1lbnROb2RlIiwiZ2V0T2JqZWN0QXNzaWdubWVudE5vZGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiaXNOb25zZW5zaWNhbCIsImdldFZhcmlhYmxlQXNzaWdubWVudHNOb2RlIiwicmVkdWNlTm9kZSIsImdldEV4cHJlc3Npb25Ob2RlIiwiZ2V0UGFyYW1ldGVyc05vZGUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJQcm9jZWR1cmUiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblN0cmluZyIsInByb2NlZHVyZURlY2xhcmF0aW9uU3RyaW5nRnJvbVByb2NlZHVyZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZXMiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnROb2RlcyIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicGFyYW1ldGVyTm9kZXMiLCJnZXRQYXJhbWV0ZXJOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBbUtnQkE7ZUFBQUE7O1FBOExBQztlQUFBQTs7UUFPQUM7ZUFBQUE7O1FBM0NBQztlQUFBQTs7UUExTEFDO2VBQUFBOztRQWtLQUM7ZUFBQUE7O1FBWkFDO2VBQUFBOztRQTFHQUM7ZUFBQUE7O1FBbU9BQztlQUFBQTs7UUF2V0FDO2VBQUFBOztRQW1YQUM7ZUFBQUE7O1FBaFVBQztlQUFBQTs7UUFpUkFDO2VBQUFBOztRQWhGQUM7ZUFBQUE7O1FBM0RBQztlQUFBQTs7UUFuQkFDO2VBQUFBOztRQXlCQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUF3RUFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBaEhBQztlQUFBQTs7UUF5SkFDO2VBQUFBOztRQS9PQUM7ZUFBQUE7O1FBa1VBQztlQUFBQTs7UUFkQUM7ZUFBQUE7O1FBblNBQztlQUFBQTs7UUFrVkFDO2VBQUFBOztRQThDQUM7ZUFBQUE7O1FBakNBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOztRQXBSQUM7ZUFBQUE7O1FBc1FBQztlQUFBQTs7UUEvT0FDO2VBQUFBOztRQWtHQUM7ZUFBQUE7O1FBaE5BQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBMFBBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBcENBQztlQUFBQTs7UUE4TUFDO2VBQUFBOztRQWpPQUM7ZUFBQUE7O1FBNlBBQztlQUFBQTs7UUFaQUM7ZUFBQUE7O1FBbEhBQztlQUFBQTs7UUFqSkFDO2VBQUFBOztRQThCQUM7ZUFBQUE7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