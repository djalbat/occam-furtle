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
var arrayAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/variable"), objectAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/objectAssignment/variable"), variableAssignmentVariableNodeQuery = (0, _query.nodeQuery)("/variableAssignment/variable");
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
            key: "fromNamedParameter",
            value: function fromNamedParameter(namedParameter, context) {
                var asName = namedParameter.getAsName(), type = namedParameter.getType(), name = asName !== null ? asName : namedParameter.getName(), expression = null, variableString = (0, _string.variableStringFromName)(name, context), string = variableString, variable = new Variable(string, type, name, expression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSwgdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCBhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvdmFyaWFibGVcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC92YXJpYWJsZVwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbmVzdGVkID0gdHJ1ZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9OyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSB2YXJpYWJsZS5nZXRFeHByZXNzaW9uKCksXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHRoaXMudHlwZTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gdmFyaWFibGVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30gdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGV9JyB0eXBlIGRvZXMgbm90IG1hdGNoIHRoZSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlLidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc05hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXRBc05hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSAoYXNOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgYXNOYW1lIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gYXJyYXlBc3NpZ25tZW50VmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUgPSBvYmplY3RBc3NpZ25tZW50VmFyaWFibGVOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25BbmRQYXJhbWV0ZXIoZXhwcmVzc2lvbiwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVHlwZUFuZFZhcmlhYmxlTm9kZSh0eXBlLCB2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJhcnJheUFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRWYXJpYWJsZU5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiVmFyaWFibGUiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEV4cHJlc3Npb24iLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsIm5lc3RlZCIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJleHByZXNzaW9uVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVBhcmFtZXRlciIsInBhcmFtZXRlciIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFzTmFtZSIsImdldEFzTmFtZSIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVZhcmlhYmxlTm9kZSIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFZhcmlhYmxlTm9kZSIsImZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIiwiZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRnJvbVR5cGVBbmRWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dFQVhzQjt3QkFFQztxQkFDRztzQkFDYTt1QkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRSxJQUFNQSxtQ0FBbUNDLElBQUFBLGdCQUFTLEVBQUMsOEJBQzdDQyxvQ0FBb0NELElBQUFBLGdCQUFTLEVBQUMsK0JBQzlDRSxzQ0FBc0NGLElBQUFBLGdCQUFTLEVBQUM7SUFFdEQsV0FBZUcsSUFBQUEsZ0JBQU0sNkJBQUM7YUFBTUMsU0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEaEJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJB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