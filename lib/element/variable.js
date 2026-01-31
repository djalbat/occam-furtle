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
                var variable = context.findVariableByVariableName(variableName), expression = variable.getExpression(), expressionString = expression.getString();
                context.debug("...evaluated the '".concat(variableString, "' variable to the ").concat(expressionString, " expression."));
                return expression;
            }
        },
        {
            key: "assign",
            value: function assign(expression, context) {
                var nested = false, expressionString = expression.getString(), variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
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
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgZXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG5lc3RlZCA9IHRydWUsXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfTsgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gdmFyaWFibGUuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gdG8gdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZSA9IHRoaXMudHlwZTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gdmFyaWFibGVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30gdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGV9JyB0eXBlIGRvZXMgbm90IG1hdGNoIHRoZSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlLidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uIHRvIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0RXhwcmVzc2lvbiIsIm1hdGNoVmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZU1hdGNoZXMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwibmVzdGVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJleHByZXNzaW9uU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJleHByZXNzaW9uVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnRUFKc0I7d0JBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSw2QkFBQzthQUFNQyxTQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURoQko7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFD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