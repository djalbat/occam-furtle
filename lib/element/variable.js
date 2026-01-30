"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _elements = require("../elements");
var _query = require("../utilities/query");
var _string = require("../utilities/string");
var _element = require("../utilities/element");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Variable;
var reduceVariableNodeQuery = (0, _query.nodeQuery)("/reduce/variable"), nodeQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodeQuery/variable"), expressionVariableNodeQuery = (0, _query.nodeQuery)("/expression/variable"), nodesQueryVariableNodeQuery = (0, _query.nodeQuery)("/nodesQuery/variable"), arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable");
var _default = (0, _elements.define)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, name, expression) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.name = name;
        this.expression = expression;
    }
    _create_class(Variable, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = this.name === variableName;
                return nameMatches;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableString = this.string; ///
                context.trace("Evaluating the '".concat(variableString, "' variable..."));
                var nested = true, variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "; variable is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = context.findVariableByVariableName(variableName), expression = variable.getExpression(), expressionString = expression.asString(context);
                context.debug("...evaluated the '".concat(variableString, "' variable to the ").concat(expressionString, " expression."));
                return expression;
            }
        },
        {
            key: "assign",
            value: function assign(expression, context) {
                var nested = false, expressionString = expression.asString(context), variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                context.trace("Assigning the ".concat(expressionString, " expression to the '").concat(variableString, "' variable..."));
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var expressionType = expression.getType(), variableType = this.type;
                if (expressionType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the expression's '").concat(expressionType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.expression = expression;
                var variable = this; ///
                context.addVariable(variable);
                context.debug("...assigned the ".concat(expressionString, " expression to the '").concat(variableString, "' variable."));
            }
        }
    ], [
        {
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
                return variable;
            }
        },
        {
            key: "fromReduceNode",
            value: function fromReduceNode(reduceNode, context) {
                var reduceVariableNode = reduceVariableNodeQuery(reduceNode), variableNode = reduceVariableNode, variable = (0, _element.variableFromVariableNode)(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromNodeQueryNode",
            value: function fromNodeQueryNode(nodeQueryNode, context) {
                var nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode), variableNode = nodeQueryVariableNode, variable = (0, _element.variableFromVariableNode)(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromNodesQueryNode",
            value: function fromNodesQueryNode(nodesQueryNode, context) {
                var nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode), variableNode = nodesQueryVariableNode, variable = (0, _element.variableFromVariableNode)(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromNamedParameter",
            value: function fromNamedParameter(namedParameter, context) {
                var asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
                return variable;
            }
        },
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var variable = null;
                var expressionVariableNode = expressionVariableNodeQuery(expressionNode);
                if (expressionVariableNode !== null) {
                    var variableNode = expressionVariableNode; ///
                    variable = (0, _element.variableFromVariableNode)(variableNode, context);
                }
                return variable;
            }
        },
        {
            key: "fromArrayAssignmentNode",
            value: function fromArrayAssignmentNode(arrayAssignmentNode, context) {
                var arrayAssignmentVariableNode = arrayAssignmentVariableNodeQuery(arrayAssignmentNode), variableNode = arrayAssignmentVariableNode, variable = (0, _element.variableFromVariableNode)(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromObjectAssignmentNode",
            value: function fromObjectAssignmentNode(objectAssignmentNode, context) {
                var objectAssignmentVariableNode = objectAssignmentVariableNodeQuery(objectAssignmentNode), variableNode = objectAssignmentVariableNode, variable = (0, _element.variableFromVariableNode)(variableNode, context);
                return variable;
            }
        },
        {
            key: "fromExpressionAndParameter",
            value: function fromExpressionAndParameter(expression, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
                return variable;
            }
        },
        {
            key: "fromTypeAndVariableAssignmentNode",
            value: function fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
                var variableAssignmentVariableNode = variableAssignmentVariableNodeQuery(variableAssignmentNode), variableNode = variableAssignmentVariableNode, variable = (0, _element.variableFromTypeAndVariableNode)(type, variableNode, context);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSwgdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCByZWR1Y2VWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvdmFyaWFibGVcIiksXG4gICAgICBub2RlUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvdmFyaWFibGVcIiksXG4gICAgICBleHByZXNzaW9uVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi92YXJpYWJsZVwiKSxcbiAgICAgIG5vZGVzUXVlcnlWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L3ZhcmlhYmxlXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgb2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG5lc3RlZCA9IHRydWUsXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfTsgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gdmFyaWFibGUuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmluZyB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IHZhcmlhYmxlVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9IHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlfScgdHlwZSBkb2VzIG5vdCBtYXRjaCB0aGUgZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYXNzaWduZWQgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbiB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZHVjZVZhcmlhYmxlTm9kZSA9IHJlZHVjZVZhcmlhYmxlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHJlZHVjZVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5VmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gbm9kZVF1ZXJ5VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUgPSBub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG5vZGVzUXVlcnlWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNOYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0QXNOYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gKGFzTmFtZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGFzTmFtZSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25WYXJpYWJsZU5vZGUgPSBleHByZXNzaW9uVmFyaWFibGVOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IGV4cHJlc3Npb25WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25BbmRQYXJhbWV0ZXIoZXhwcmVzc2lvbiwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZWR1Y2VWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5vZGVRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZXhwcmVzc2lvblZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeVZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsImRlZmluZSIsIlZhcmlhYmxlIiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJleHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRFeHByZXNzaW9uIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lTWF0Y2hlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJuZXN0ZWQiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsImRlYnVnIiwiYXNzaWduIiwiZXhwcmVzc2lvblR5cGUiLCJ2YXJpYWJsZVR5cGUiLCJhZGRWYXJpYWJsZSIsImZyb21QYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIiwiZnJvbVJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVGcm9tVmFyaWFibGVOb2RlIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5VmFyaWFibGVOb2RlIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJhc05hbWUiLCJnZXRBc05hbWUiLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25WYXJpYWJsZU5vZGUiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJmcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlciIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUZyb21UeXBlQW5kVmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7Z0VBZnNCO3dCQUVDO3FCQUNHO3NCQUNhO3VCQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQU1BLDBCQUEwQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDcENDLDZCQUE2QkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNFLDhCQUE4QkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENHLDhCQUE4QkgsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDeENJLG1DQUFtQ0osSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NLLG9DQUFvQ0wsSUFBQUEsZ0JBQVMsRUFBQywrQkFDOUNNLHNDQUFzQ04sSUFBQUEsZ0JBQVMsRUFBQztJQUV0RCxXQUFlTyxJQUFBQSxnQkFBTSw2QkFBQzthQUFNQyxTQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURoQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZ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